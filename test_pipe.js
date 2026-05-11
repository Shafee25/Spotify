const youtubedl = require('youtube-dl-exec');
const fs = require('fs');

async function test() {
    const url = 'https://youtu.be/_1IealhWZfs';
    console.log('Starting stream pipe test...');
    
    // We want to test piping stdout to a file
    const subprocess = youtubedl.exec(url, {
        output: '-',
        format: 'bestaudio'
    }, { stdio: ['ignore', 'pipe', 'ignore'] });
    
    const writeStream = fs.createWriteStream('test_audio.m4a');
    subprocess.stdout.pipe(writeStream);
    
    subprocess.stdout.on('data', () => {
        console.log('Received data chunk...');
        subprocess.kill(); // Kill after receiving first chunk to prove it works
        process.exit(0);
    });
    
    subprocess.on('error', (err) => {
        console.error('Subprocess error:', err);
        process.exit(1);
    });
}
test();
