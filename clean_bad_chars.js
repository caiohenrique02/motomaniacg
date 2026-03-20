const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\caioh\\Desktop\\Projetos vscode\\MotomaniacgSITE\\motomaniacg';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the replacement character and control characters
    let original = content;
    content = content.replace(/\uFFFD\u001D/g, " - ");
    content = content.replace(/\uFFFD/g, " - ");
    content = content.replace(/\u001D/g, "");

    if (content !== original) {
        console.log(`Cleaned bad characters in ${file}`);
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
