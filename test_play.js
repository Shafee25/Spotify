const play = require('play-dl');

async function test() {
    const url = 'https://youtu.be/_1IealhWZfs';
    try {
        console.log('Testing play-dl stream extraction...');
        const stream = await play.stream(url);
        console.log('Stream retrieved successfully!');
        console.log('Stream Type:', stream.type);
        process.exit(0);
    } catch (e) {
        console.error('play-dl failed:', e);
        process.exit(1);
    }
}
test();
