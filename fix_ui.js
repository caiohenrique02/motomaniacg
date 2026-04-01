const fs = require('fs');
const path = require('path');
const dir = process.cwd();

// 1. Fix Esperança Hours
function fixHours() {
    ['index.html', 'unidades.html'].forEach(file => {
        let p = path.join(dir, file);
        if(!fs.existsSync(p)) return;
        let c = fs.readFileSync(p, 'utf8');
        
        // index.html replacement logic (using split to only affect Esperança)
        let parts = c.split('Esperança');
        for (let i = 1; i < parts.length; i++) {
            parts[i] = parts[i].replace(/Seg a Sex:<\/span>[\s\S]*?8h às 18h<br>[\s\S]*?Sáb:<\/span>[\s\S]*?8h às 13h/, 'Seg a Sáb:</span> 7h às 17h');
            parts[i] = parts[i].replace(/Segunda a Sexta<\/span>[\s\S]*?08:00 – 18:00<\/span>[\s\S]*?<\/li>[\s\S]*?<li class="flex justify-between border-b border-slate-200 pb-2">[\s\S]*?<span class="text-slate-500">Sábado<\/span>[\s\S]*?<span class="font-black text-brand-orange">08:00 – 13:00/, 
                'Segunda a Sábado</span>\n                                <span class="font-black text-brand-orange">07:00 – 17:00');
        }
        c = parts.join('Esperança');
            
        fs.writeFileSync(p, c);
    });
}

// 2. Fix Catalog Aspect Ratio across index.html
function fixAspectRatio() {
    let p = path.join(dir, 'index.html');
    if(!fs.existsSync(p)) return;
    let c = fs.readFileSync(p, 'utf8');
    
    // Replace aspect-[4/3] (fairly square) with aspect-[3/2] or aspect-video (16/9, better for vehicles)
    // Actually, aspect-[3/2] is a very solid rectangle that fits bikes well. Let's use aspect-[3/2].
    // aspect-[3/2] is slightly taller than 16:9 but significantly wider than 4:3. Perfect for motorcycles.
    c = c.replaceAll('aspect-[4/3]', 'aspect-[3/2]');
    
    fs.writeFileSync(p, c);
}

fixHours();
fixAspectRatio();
console.log('Script executed');
