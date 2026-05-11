const youtubedl = require('youtube-dl-exec');

async function test() {
    const url = 'https://youtu.be/_1IealhWZfs';
    try {
        console.log('Testing youtube-dl-exec stream extraction...');
        const subprocess = youtubedl.exec(url, {
            dumpJson: true
        });
        
        const { stdout } = await subprocess;
        const info = JSON.parse(stdout);
        console.log('Got info:', info.title);
        console.log('Got audio url:', info.url ? 'Yes' : 'No');
        process.exit(0);
    } catch (e) {
        console.error('youtube-dl-exec failed:', e);
        process.exit(1);
    }
}
test();
