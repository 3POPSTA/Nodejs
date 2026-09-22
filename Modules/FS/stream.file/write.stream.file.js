const fs = require("fs");
const { pipeline } = require("stream/promises");
const { Readable } = require("stream");

async function writeLargeFile() {
    const data = Array.from({ length: 1000 }, (_, i) =>
        `Line ${i + 1}: ${'x'.repeat(100)}\n`
    );
    const readable = Readable.from(data);
    const writable = fs.createWriteStream("large-file.txt");

    try {
        await pipeline(readable, writable);
        console.log('Large file written successfully');
    } catch (error) {
        console.log('Error writing file:', error);
    }
}
writeLargeFile();