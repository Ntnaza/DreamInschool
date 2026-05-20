const fs = require('fs');
const file = './lib/actions.ts';
let content = fs.readFileSync(file, 'utf8');

const excludeFunctions = [
    'getCurrentUser', 'submitAspirasi', 'trackVisitor', 'submitHelpTicket',
    'getDaftarAcara', 'getDaftarPengurus', 'getRekapAbsensi', 'getDetailLaporan', 'getLogsByAcara',
    'checkAndAutoStartAcara', 'checkAndAutoStopAcara', 'getActivePeriodeId'
];

const lines = content.split('\n');
let newLines = [];
let insideFunction = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);
    
    // Look for exported async functions
    const match = line.match(/^export\s+async\s+function\s+([a-zA-Z0-9_]+)\s*\(/);
    if (match) {
        const funcName = match[1];
        if (!excludeFunctions.includes(funcName)) {
            // Check if getCurrentUser is already called in the next few lines
            let hasSession = false;
            for(let j=1; j<=10; j++) {
                if (lines[i+j] && lines[i+j].includes('getCurrentUser()')) {
                    hasSession = true;
                    break;
                }
            }
            if (!hasSession) {
                newLines.push(`  const session = await getCurrentUser();`);
                newLines.push(`  if (!session) return { success: false, message: "Unauthorized: Silakan login terlebih dahulu." };`);
            }
        }
    }
}

fs.writeFileSync(file, newLines.join('\n'), 'utf8');
console.log('actions.ts secured');
