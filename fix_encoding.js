const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\caioh\\Desktop\\Projetos vscode\\MotomaniacgSITE\\motomaniacg';
const files = [
    'detalhes-duact-maxus.html',
    'detalhes-sudu-a3t.html',
    'detalhes-duos-rider.html',
    'detalhes-duos-eko10.html',
    'detalhes-duos-fenix.html',
    'detalhes-sudu-a2plus.html'
];

files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.existsSync(filePath)) {
        try {
            console.log(`Fixing ${file}`);
            const mangledUtf8Str = fs.readFileSync(filePath, 'utf8');
            const buffer = Buffer.from(mangledUtf8Str, 'binary');
            const fixedStr = buffer.toString('utf8');
            fs.writeFileSync(filePath, fixedStr, 'utf8');
        } catch (e) {
            console.error(`Failed on ${file}`, e);
        }
    }
});
