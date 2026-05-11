const express = require('express');
const cors = require('cors');
const youtubedl = require('youtube-dl-exec');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname)));

// Helper to get yt-dlp path
const ytDlpPath = youtubedl.constants.YOUTUBE_DL_PATH;

app.get('/api/info', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ error: 'URL required' });

    try {
        console.log(`Fetching info for: ${url}`);
        const info = await youtubedl(url, {
            dumpJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: ['referer:youtube.com', 'user-agent:googlebot']
        });
        res.json({ title: info.title, cover: info.thumbnail });
    } catch (error) {
        console.error('Info error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/stream', (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).send('URL required');

    try {
        console.log(`Streaming: ${url}`);
        res.setHeader('Content-Type', 'audio/mpeg');

        const ls = spawn(ytDlpPath, [
            url,
            '-f', 'bestaudio',
            '-o', '-',
            '--no-check-certificates',
            '--no-warnings',
            '--add-header', 'referer:youtube.com',
            '--add-header', 'user-agent:googlebot'
        ]);

        ls.stdout.pipe(res);

        ls.stderr.on('data', (data) => {
            // Log errors but don't crash
            if (data.toString().includes('ERROR')) {
                console.error(`yt-dlp stderr: ${data}`);
            }
        });

        req.on('close', () => {
            ls.kill();
        });

        ls.on('close', (code) => {
            if (code !== 0 && code !== null) {
                console.log(`yt-dlp process exited with code ${code}`);
            }
        });

    } catch (error) {
        console.error('Stream error:', error);
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
