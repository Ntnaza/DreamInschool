const fs = require('fs');
let content = fs.readFileSync('./lib/actions.ts', 'utf8');

const regex = /\}\s+const session = await getCurrentUser\(\);\s+if \(!session\) return \{ success: false, message: "Unauthorized: Silakan login terlebih dahulu\." \};\s+try \{/;

const replacement = `}

/**
 * Mendapatkan ID periode yang sedang dipilih oleh pengunjung (dari cookie)
 * Jika tidak ada cookie, gunakan periode yang aktif.
 */
export async function getSelectedPeriodeId() {
  const cookieStore = await cookies();
  const selectedId = cookieStore.get("selected_periode")?.value;
  
  if (selectedId) return Number(selectedId);
  
  return await getActivePeriodeId();
}

/**
 * Mengatur periode yang dipilih oleh pengunjung via cookie
 */
export async function setSelectedPeriodeAction(id: number | null) {
  const cookieStore = await cookies();
  if (id === null) {
    cookieStore.delete("selected_periode");
  } else {
    // Simpan selama 30 hari
    cookieStore.set("selected_periode", id.toString(), { maxAge: 60 * 60 * 24 * 30 });
  }
  revalidatePath("/");
  return { success: true };
}

export async function getAllPeriode() {
  return await prisma.periode.findMany({
    orderBy: { tahun: "desc" }
  });
}

export async function createPeriode(formData: FormData) {
  const session = await getCurrentUser();
  if (!session) return { success: false, message: "Unauthorized: Silakan login terlebih dahulu." };
  try {`;

content = content.replace(regex, replacement);
fs.writeFileSync('./lib/actions.ts', content, 'utf8');
console.log('Fixed syntax error via Regex');
