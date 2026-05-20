const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let files = [];
    if (!fs.existsSync(dir)) return files;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            files = files.concat(walkDir(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                files.push(file);
            }
        }
    });
    return files;
}

const allFiles = [...walkDir('./app'), ...walkDir('./components')];

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('https://grainy-gradients.vercel.app/noise.svg')) {
        content = content.replace(/https:\/\/grainy-gradients\.vercel\.app\/noise\.svg/g, '/noise.svg');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed', file);
    }
});
