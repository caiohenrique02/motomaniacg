const fs = require('fs');
const path = require('path');

const dir = process.cwd();

const modalStart = '<!-- ========== WHATSAPP MODAL ========== -->';
const unidadesHTML = fs.readFileSync(path.join(dir, 'unidades.html'), 'utf-8');
if (!unidadesHTML.includes(modalStart)) {
    console.error("Modal not found in unidades.html!");
    process.exit(1);
}

let modalContent = unidadesHTML.substring(unidadesHTML.indexOf(modalStart));
const scriptEnd = '</script>';
modalContent = modalContent.substring(0, modalContent.lastIndexOf(scriptEnd) + scriptEnd.length);

function injectModal(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes(modalStart)) return; 
    content = content.replace('</body>', `\n${modalContent}\n</body>`);
    fs.writeFileSync(filePath, content);
}

const indexPath = path.join(dir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');
indexContent = indexContent.replaceAll('w-full h-full object-cover group-hover:scale-110', 'w-full h-full object-contain group-hover:scale-110');
indexContent = indexContent.replace('<p class="text-3xl font-black text-brand-blue">2</p>', '<p class="text-3xl font-black text-brand-blue">4</p>');
indexContent = indexContent.replace('Unidades em CG', 'Lojas Físicas');
indexContent = indexContent.replace('2 Unidades em CG', '4 Lojas Físicas');
indexContent = indexContent.replace('Centro e Catolé — fácil acesso', 'Campina Grande e Esperança');
fs.writeFileSync(indexPath, indexContent);
injectModal(indexPath);

const files = fs.readdirSync(dir);
const detalhesFiles = files.filter(f => f.startsWith('detalhes-') && f.endsWith('.html'));

detalhesFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replaceAll('object-cover group-hover:scale-105', 'object-contain group-hover:scale-105');
    content = content.replaceAll('object-cover bg-slate-100 group-hover:scale-105', 'object-contain bg-slate-100 group-hover:scale-105');
    fs.writeFileSync(filePath, content);
    injectModal(filePath);
});

console.log('All static files patched successfully!');
