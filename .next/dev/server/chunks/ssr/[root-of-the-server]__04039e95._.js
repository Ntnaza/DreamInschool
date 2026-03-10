module.exports = [
"[project]/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a26b80a2bfee3d6646a5c5e40cc79e5246221d3f":"logoutAction","4098a880a57ead627e7e5ccca1b570ab6f6014e19a":"loginAction"},"",""] */ __turbopack_context__.s([
    "loginAction",
    ()=>loginAction,
    "logoutAction",
    ()=>logoutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "rahasia-osis-mpk-2026-sangat-kuat");
async function loginAction(formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    if (!username || !password) {
        return {
            success: false,
            message: "ID dan Password wajib diisi!"
        };
    }
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                username: username
            },
            include: {
                pengurus: true
            }
        });
        if (!user) {
            return {
                success: false,
                message: "ID atau Password salah!"
            };
        }
        const isPasswordValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
        if (!isPasswordValid) {
            return {
                success: false,
                message: "ID atau Password salah!"
            };
        }
        // Buat JWT Token
        const token = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"]({
            username: user.username,
            role: user.role
        }).setProtectedHeader({
            alg: "HS256"
        }).setIssuedAt().setExpirationTime("1d").sign(JWT_SECRET);
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        // Simpan token di cookie yang aman
        cookieStore.set("session_token", token, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            maxAge: 60 * 60 * 24,
            path: "/",
            sameSite: "lax"
        });
        // Cookie role tetap ada untuk kebutuhan UI ringan, tapi bukan penentu akses (Satpam asli ada di JWT)
        cookieStore.set("session_role", user.role, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            maxAge: 60 * 60 * 24,
            path: "/"
        });
        return {
            success: true,
            message: "Login Berhasil! Mengalihkan..."
        };
    } catch (error) {
        console.error("Login Error (Detail):", error);
        return {
            success: false,
            message: "Terjadi kesalahan sistem. Cek Terminal."
        };
    }
}
async function logoutAction() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("session_token");
    cookieStore.delete("session_role");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginAction,
    logoutAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAction, "4098a880a57ead627e7e5ccca1b570ab6f6014e19a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutAction, "00a26b80a2bfee3d6646a5c5e40cc79e5246221d3f", null);
}),
"[project]/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40093cc0534a7b898c0900e2b92cedc6cb2a827401":"createEventBudget","401a051542ddf7243959603123a16d40d215a22c3b":"saveInventaris","401c1f776499c9399b1dd94b0729cc27cf0e51423d":"saveGaleri","401f90185a456bb4be3fdd5c9cb86e328f8821f86c":"deletePengurus","402806850acb6c94820d0d955ee612faa2280f617e":"pinjamBarang","4028d7640eefb00aea5f5edc307bcb0dbd994fb99b":"deleteGaleri","403bdae2018978423129b95155c6e6128532439df4":"updateBerita","404c29f4199bcb4cf392df227ff7592ce53cb65716":"deleteAspirasi","4057499068e6161aa5838799dc06289ccd2643b4a7":"submitAspirasi","4074094fe74a7df749f1443c40c9f5fc3e1c224998":"updateProgramKerja","407dfa88239647bb7a0c261efad9599ece274a7c63":"scanAbsensi","409709da5f2a3420e97b519786a13d3fc9253f7543":"createEventTrx","40a4e73127f25e0c1d2679b3627c6f425667338ba3":"deleteProgramKerja","40a87bd67cb75552954ed00193922447f0bf3810d0":"createBerita","40a9aed5c8bfdeb9ed920a0c2a53c243518b16604e":"createProgramKerja","40af2362acffe8e69c4774462c3ce745567b732491":"replyAspirasi","40c34336bc3a90a247d840cb8f741432e235bc6168":"createPengurus","40d4a3cccbb07dad229ebea5b4d42987161bbf7235":"saveIdCardBackground","40dd20d6a81dc11114d1d03e3853673723e4d3a7c8":"deleteInventaris","40f17f14e56a5dcd8caffc6bae51aa040828204458":"deleteBerita","40f7debe2ba7ce198831bc957118fec9f79e619dbd":"kembalikanBarang","40f7f4da67a70804a041701b11ca6d029d8246cc0c":"createGeneralTrx","40fbe84013316a8a2a5a75904a8d4816b20bbfe24a":"updatePengurus","60b0fcad3dfe3d62cfd418ce628fd63ebad7a8fe52":"updateIdCardDesign"},"",""] */ __turbopack_context__.s([
    "createBerita",
    ()=>createBerita,
    "createEventBudget",
    ()=>createEventBudget,
    "createEventTrx",
    ()=>createEventTrx,
    "createGeneralTrx",
    ()=>createGeneralTrx,
    "createPengurus",
    ()=>createPengurus,
    "createProgramKerja",
    ()=>createProgramKerja,
    "deleteAspirasi",
    ()=>deleteAspirasi,
    "deleteBerita",
    ()=>deleteBerita,
    "deleteGaleri",
    ()=>deleteGaleri,
    "deleteInventaris",
    ()=>deleteInventaris,
    "deletePengurus",
    ()=>deletePengurus,
    "deleteProgramKerja",
    ()=>deleteProgramKerja,
    "kembalikanBarang",
    ()=>kembalikanBarang,
    "pinjamBarang",
    ()=>pinjamBarang,
    "replyAspirasi",
    ()=>replyAspirasi,
    "saveGaleri",
    ()=>saveGaleri,
    "saveIdCardBackground",
    ()=>saveIdCardBackground,
    "saveInventaris",
    ()=>saveInventaris,
    "scanAbsensi",
    ()=>scanAbsensi,
    "submitAspirasi",
    ()=>submitAspirasi,
    "updateBerita",
    ()=>updateBerita,
    "updateIdCardDesign",
    ()=>updateIdCardDesign,
    "updatePengurus",
    ()=>updatePengurus,
    "updateProgramKerja",
    ()=>updateProgramKerja
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "rahasia-osis-mpk-2026-sangat-kuat");
async function getCurrentUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get("session_token")?.value;
    if (!token) return null;
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, JWT_SECRET);
        return payload;
    } catch (error) {
        return null;
    }
}
/* ======================================================
   ZOD SCHEMAS (VALIDATION)
====================================================== */ const BeritaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    judul: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, "Judul minimal 5 karakter"),
    konten: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(20, "Konten minimal 20 karakter"),
    kategori: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("Umum"),
    gambar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable()
});
const ProkerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nama: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Nama proker minimal 3 karakter"),
    deskripsi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    divisi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    prioritas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("Medium"),
    anggaran: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative().default(0),
    progress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).default(0),
    lokasi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    isFeatured: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    startDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date().optional().nullable(),
    deadline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date().optional().nullable()
});
async function submitAspirasi(formData) {
    const rawNama = formData.get("nama");
    const rawKelas = formData.get("kelas");
    const pesan = formData.get("pesan");
    const isAnonim = formData.get("isAnonim") === "true";
    if (!pesan || pesan.trim() === "") {
        return {
            success: false,
            message: "Pesan tidak boleh kosong!"
        };
    }
    const pengirim = isAnonim || !rawNama ? "Anonim" : rawNama;
    const kelas = isAnonim ? "-" : rawKelas;
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].aspirasi.create({
            data: {
                pengirim,
                kelas,
                isi: pesan,
                kategori: "Umum",
                status: "PENDING"
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true,
            message: "Aspirasi berhasil dikirim! 🚀"
        };
    } catch (error) {
        console.error("SUBMIT ASPIRASI ERROR:", error);
        return {
            success: false,
            message: "Gagal mengirim aspirasi."
        };
    }
}
async function replyAspirasi(formData) {
    const id = Number(formData.get("id"));
    const balasan = formData.get("balasan");
    if (!balasan || balasan.trim() === "") {
        return {
            success: false,
            message: "Balasan tidak boleh kosong."
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].aspirasi.update({
            where: {
                id
            },
            data: {
                balasan,
                balasanAt: new Date(),
                status: "SELESAI"
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/aspirasi");
        return {
            success: true,
            message: "Balasan terkirim!"
        };
    } catch (error) {
        console.error("REPLY ASPIRASI ERROR:", error);
        return {
            success: false,
            message: "Gagal membalas pesan."
        };
    }
}
async function deleteAspirasi(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].aspirasi.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/aspirasi");
        return {
            success: true
        };
    } catch (error) {
        console.error("DELETE ASPIRASI ERROR:", error);
        return {
            success: false
        };
    }
}
/* ======================================================
   3. BERITA (CMS)
====================================================== */ // === 3. FITUR BERITA ===
function slugify(text) {
    return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/--+/g, "-");
}
async function createBerita(formData) {
    const validatedFields = BeritaSchema.safeParse({
        judul: formData.get("judul"),
        konten: formData.get("konten"),
        kategori: formData.get("kategori") || "Umum",
        gambar: formData.get("gambar")
    });
    if (!validatedFields.success) {
        const errorMsg = validatedFields.error.flatten().fieldErrors;
        return {
            success: false,
            message: errorMsg.judul?.[0] || errorMsg.konten?.[0] || "Data tidak valid."
        };
    }
    const { judul, konten, kategori, gambar } = validatedFields.data;
    const slug = `${slugify(judul)}-${Date.now()}`;
    const session = await getCurrentUser();
    if (!session) {
        return {
            success: false,
            message: "Sesi habis. Silakan login kembali."
        };
    }
    const adminUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            username: session.username
        }
    });
    if (!adminUser) {
        return {
            success: false,
            message: "Error: User tidak ditemukan di database!"
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].berita.create({
            data: {
                judul,
                slug,
                konten,
                kategori,
                gambar: gambar || null,
                penulisId: adminUser.id,
                status: "PUBLISHED",
                views: 0
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/berita");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/berita");
        return {
            success: true,
            message: "Berita berhasil terbit! 📰"
        };
    } catch (error) {
        console.error("CREATE BERITA ERROR:", error);
        return {
            success: false,
            message: "Gagal menerbitkan berita."
        };
    }
}
async function updateBerita(formData) {
    const idRaw = formData.get("id");
    if (!idRaw) {
        return {
            success: false,
            message: "ID tidak valid."
        };
    }
    const id = Number(idRaw);
    const judul = formData.get("judul");
    const konten = formData.get("konten");
    const kategori = formData.get("kategori");
    const gambar = formData.get("gambar");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].berita.update({
            where: {
                id
            },
            data: {
                judul,
                konten,
                kategori,
                ...gambar && {
                    gambar
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/berita");
        return {
            success: true,
            message: "Berita berhasil diperbarui! 📝"
        };
    } catch (error) {
        console.error("UPDATE BERITA ERROR:", error);
        return {
            success: false,
            message: "Gagal update berita."
        };
    }
}
async function deleteBerita(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].berita.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/berita");
        return {
            success: true
        };
    } catch (error) {
        console.error("DELETE BERITA ERROR:", error);
        return {
            success: false
        };
    }
}
async function createProgramKerja(formData) {
    // Ambil data sesuai nama field di Frontend
    const nama = formData.get("nama");
    const deskripsi = formData.get("deskripsi");
    const divisi = formData.get("divisi");
    const prioritas = formData.get("priority"); // Frontend kirim 'priority', DB simpan 'prioritas'
    const anggaran = Number(formData.get("anggaran"));
    const progress = Number(formData.get("progress"));
    const lokasi = formData.get("lokasi"); // PIC disimpan di kolom lokasi
    // ✅ FITUR BARU: Image & Featured
    const image = formData.get("image");
    const isFeatured = formData.get("isFeatured") === "true";
    // Date Handling
    const startDateRaw = formData.get("startDate");
    const startDate = startDateRaw ? new Date(startDateRaw) : null;
    const deadlineRaw = formData.get("deadline");
    const deadline = deadlineRaw ? new Date(deadlineRaw) : null;
    // Mapping Status Logic (Otomatis atau Manual dari Frontend)
    // Kita pakai status manual kalau dikirim, kalau nggak pakai logic progress
    let status = "TODO";
    if (progress > 0 && progress < 100) status = "IN_PROGRESS";
    if (progress === 100) status = "DONE";
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].programKerja.create({
            data: {
                nama,
                deskripsi,
                divisi,
                prioritas,
                anggaran,
                progress,
                status,
                lokasi,
                startDate,
                deadline,
                image: image || null,
                isFeatured: isFeatured // Simpan Status Unggulan
            }
        });
        // Refresh halaman Admin & Homepage (karena ada section Program Unggulan)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/proker");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true,
            message: "Proker berhasil dibuat! 🚀"
        };
    } catch (error) {
        console.error("CREATE PROKER ERROR:", error);
        return {
            success: false,
            message: "Gagal membuat proker."
        };
    }
}
async function updateProgramKerja(formData) {
    const idRaw = formData.get("id");
    if (!idRaw) return {
        success: false,
        message: "ID tidak ditemukan"
    };
    const id = Number(idRaw);
    const nama = formData.get("nama");
    const deskripsi = formData.get("deskripsi");
    const divisi = formData.get("divisi");
    const prioritas = formData.get("priority");
    const anggaran = Number(formData.get("anggaran"));
    const progress = Number(formData.get("progress"));
    const lokasi = formData.get("lokasi");
    const image = formData.get("image");
    const isFeatured = formData.get("isFeatured") === "true";
    const startDateRaw = formData.get("startDate");
    const startDate = startDateRaw ? new Date(startDateRaw) : null;
    const deadlineRaw = formData.get("deadline");
    const deadline = deadlineRaw ? new Date(deadlineRaw) : null;
    // Status Logic Update
    let status = "TODO";
    if (progress > 0 && progress < 100) status = "IN_PROGRESS";
    if (progress === 100) status = "DONE";
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].programKerja.update({
            where: {
                id
            },
            data: {
                nama,
                deskripsi,
                divisi,
                prioritas,
                anggaran,
                progress,
                status,
                lokasi,
                startDate,
                deadline,
                isFeatured,
                // Update gambar CUMA jika user upload baru (string tidak kosong)
                ...image && {
                    image
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/proker");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true,
            message: "Proker berhasil diupdate! ✨"
        };
    } catch (error) {
        console.error("UPDATE PROKER ERROR:", error);
        return {
            success: false,
            message: "Gagal update proker."
        };
    }
}
async function deleteProgramKerja(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].programKerja.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/proker");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true
        };
    } catch (error) {
        console.error("DELETE PROKER ERROR:", error);
        return {
            success: false
        };
    }
}
async function createPengurus(formData) {
    // 1. Ambil Data Wajib
    const nama = formData.get("nama");
    const nis = formData.get("nis");
    const kelas = formData.get("kelas");
    const jabatan = formData.get("jabatan");
    const divisi = formData.get("divisi");
    // 2. Ambil Data Tambahan
    const hp = formData.get("hp");
    const email = formData.get("email");
    const instagram = formData.get("instagram");
    const tiktok = formData.get("tiktok");
    const domisili = formData.get("domisili");
    const transportasi = formData.get("transportasi");
    const motto = formData.get("motto");
    const fotoUrl = formData.get("fotoUrl");
    // ✅ DATA BARU: VISI & MISI (Ditangkap dari FormData)
    const visi = formData.get("visi");
    const misi = formData.get("misi");
    // Cek Tanggal Lahir (Convert string ke Date)
    const tglLahirRaw = formData.get("tglLahir");
    const tglLahir = tglLahirRaw ? new Date(tglLahirRaw) : null;
    // Cek apakah Guru/Pembina
    const isAdvisor = formData.get("isAdvisor") === "true";
    // Validasi Dasar
    if (!nama || !nis || !jabatan) {
        return {
            success: false,
            message: "Nama, NIS/NIP, dan Jabatan wajib diisi!"
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pengurus.create({
            data: {
                nama,
                nis,
                kelas: kelas || "-",
                jabatan,
                divisi,
                hp,
                email,
                instagram,
                tiktok,
                domisili,
                transportasi,
                motto,
                // ✅ SIMPAN VISI & MISI KE DATABASE
                visi: visi || null,
                misi: misi || null,
                tglLahir,
                fotoUrl: fotoUrl || null,
                status: "AKTIF",
                isAdvisor: isAdvisor
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/pengurus");
        return {
            success: true,
            message: "Pengurus berhasil ditambahkan! 👤"
        };
    } catch (error) {
        console.error("CREATE PENGURUS ERROR:", error);
        return {
            success: false,
            message: "Gagal menambah data. NIS mungkin sudah terdaftar."
        };
    }
}
async function updatePengurus(formData) {
    const idRaw = formData.get("id");
    if (!idRaw) return {
        success: false,
        message: "ID tidak ditemukan"
    };
    const id = Number(idRaw);
    // Ambil semua data input
    const nama = formData.get("nama");
    const nis = formData.get("nis");
    const kelas = formData.get("kelas");
    const jabatan = formData.get("jabatan");
    const divisi = formData.get("divisi");
    const status = formData.get("status");
    // Data Tambahan
    const hp = formData.get("hp");
    const email = formData.get("email");
    const instagram = formData.get("instagram");
    const tiktok = formData.get("tiktok");
    const domisili = formData.get("domisili");
    const transportasi = formData.get("transportasi");
    const motto = formData.get("motto");
    const fotoUrl = formData.get("fotoUrl");
    // ✅ DATA BARU: VISI & MISI (Update)
    const visi = formData.get("visi");
    const misi = formData.get("misi");
    const tglLahirRaw = formData.get("tglLahir");
    const tglLahir = tglLahirRaw ? new Date(tglLahirRaw) : undefined;
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pengurus.update({
            where: {
                id
            },
            data: {
                nama,
                nis,
                kelas,
                jabatan,
                divisi,
                status,
                hp,
                email,
                instagram,
                tiktok,
                domisili,
                transportasi,
                motto,
                // ✅ UPDATE VISI & MISI
                visi,
                misi,
                // Update tanggal lahir cuma kalau ada input baru
                ...tglLahir && {
                    tglLahir
                },
                // Update foto cuma kalau ada foto baru yang dikirim
                ...fotoUrl && {
                    fotoUrl
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/pengurus");
        return {
            success: true,
            message: "Data pengurus diperbarui! 📝"
        };
    } catch (error) {
        console.error("UPDATE PENGURUS ERROR:", error);
        return {
            success: false,
            message: "Gagal update data."
        };
    }
}
async function deletePengurus(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pengurus.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/pengurus");
        return {
            success: true
        };
    } catch (error) {
        console.error("DELETE PENGURUS ERROR:", error);
        return {
            success: false
        };
    }
}
async function updateIdCardDesign(id, designUrl) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pengurus.update({
            where: {
                id
            },
            data: {
                idCardDesign: designUrl
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/idcard");
        return {
            success: true
        };
    } catch (error) {
        console.error("UPDATE ID CARD ERROR:", error);
        return {
            success: false
        };
    }
}
async function saveIdCardBackground(imageUrl) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].appConfig.upsert({
            where: {
                id: 1
            },
            update: {
                idCardBackImage: imageUrl
            },
            create: {
                id: 1,
                idCardBackImage: imageUrl
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/idcard");
        return {
            success: true
        };
    } catch (error) {
        console.error("SAVE BG ERROR:", error);
        return {
            success: false
        };
    }
}
async function scanAbsensi(nis) {
    if (!nis) return {
        success: false,
        message: "QR Code kosong!"
    };
    try {
        // 1. Cari Pengurus berdasarkan NIS
        const pengurus = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pengurus.findUnique({
            where: {
                nis: nis
            }
        });
        if (!pengurus) {
            return {
                success: false,
                message: "❌ QR Code Tidak Terdaftar!"
            };
        }
        if (pengurus.status !== "AKTIF") {
            return {
                success: false,
                message: "⚠️ Anggota Tidak Aktif/Alumni"
            };
        }
        // 2. Cek apakah sudah absen hari ini? (Opsional: Cegah spam scan)
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);
        const existingLog = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].absensi.findFirst({
            where: {
                pengurusId: pengurus.id,
                tanggal: {
                    gte: todayStart,
                    lte: todayEnd
                }
            }
        });
        if (existingLog) {
            // Kalau sudah absen, kita tetap return success tapi kasih info "Sudah Absen"
            // Biar UI tetap menampilkan profilnya, tapi statusnya beda.
            return {
                success: true,
                message: "Kamu sudah absen hari ini! 👌",
                data: {
                    name: pengurus.nama,
                    role: pengurus.jabatan,
                    image: pengurus.fotoUrl,
                    status: "DUPLICATE"
                }
            };
        }
        // 3. Simpan ke Tabel Absensi
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].absensi.create({
            data: {
                pengurusId: pengurus.id,
                kegiatan: "Absensi Harian",
                status: "HADIR",
                tanggal: new Date()
            }
        });
        // 4. Return Data Pengurus ke Frontend
        return {
            success: true,
            message: "Absensi Berhasil! ✅",
            data: {
                name: pengurus.nama,
                role: pengurus.jabatan,
                image: pengurus.fotoUrl,
                status: "HADIR"
            }
        };
    } catch (error) {
        console.error("SCAN ERROR:", error);
        return {
            success: false,
            message: "Server Error."
        };
    }
}
async function createGeneralTrx(formData) {
    const judul = formData.get("title");
    const nominal = Number(formData.get("amount"));
    const tipe = formData.get("type");
    const kategori = formData.get("category");
    const dateStr = formData.get("date");
    const pic = formData.get("pic"); // Keterangan PIC
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].keuangan.create({
            data: {
                judul,
                nominal,
                tipe,
                kategori,
                tanggal: new Date(dateStr),
                keterangan: `PIC: ${pic}`
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/keuangan");
        return {
            success: true,
            message: "Transaksi berhasil dicatat! 💰"
        };
    } catch (error) {
        return {
            success: false,
            message: "Gagal mencatat transaksi."
        };
    }
}
async function createEventBudget(formData) {
    const namaEvent = formData.get("title");
    const budget = Number(formData.get("amount"));
    const dateStr = formData.get("date");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // A. Catat PENGELUARAN di Kas Umum
            await tx.keuangan.create({
                data: {
                    judul: `Modal Event: ${namaEvent}`,
                    nominal: budget,
                    tipe: "PENGELUARAN",
                    kategori: "Anggaran Event",
                    tanggal: new Date(dateStr),
                    keterangan: "Alokasi dana ke event baru"
                }
            });
            // B. Buat Data Proker Baru (Status: ACTIVE)
            await tx.programKerja.create({
                data: {
                    nama: namaEvent,
                    anggaran: budget,
                    anggaranTerpakai: 0,
                    status: "IN_PROGRESS",
                    divisi: "Kepanitiaan",
                    deadline: new Date(dateStr)
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/keuangan");
        return {
            success: true,
            message: "Anggaran Event berhasil dibuka! 🎉"
        };
    } catch (error) {
        console.error("CREATE EVENT BUDGET ERROR:", error);
        return {
            success: false,
            message: "Gagal membuka anggaran."
        };
    }
}
async function createEventTrx(formData) {
    const eventId = Number(formData.get("eventId"));
    const judul = formData.get("title");
    const nominal = Number(formData.get("amount"));
    const dateStr = formData.get("date");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // A. Simpan Transaksi (Linked ke ProkerID)
            await tx.keuangan.create({
                data: {
                    judul,
                    nominal,
                    tipe: "PENGELUARAN",
                    kategori: "Pengeluaran Event",
                    tanggal: new Date(dateStr),
                    prokerId: eventId
                }
            });
            // B. Update 'anggaranTerpakai' di tabel Proker
            await tx.programKerja.update({
                where: {
                    id: eventId
                },
                data: {
                    anggaranTerpakai: {
                        increment: nominal
                    }
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/keuangan");
        return {
            success: true,
            message: "Pengeluaran event dicatat! 🧾"
        };
    } catch (error) {
        console.error("CREATE EVENT TRX ERROR:", error);
        return {
            success: false,
            message: "Gagal update data event."
        };
    }
}
async function saveInventaris(formData) {
    const idRaw = formData.get("id");
    const nama = formData.get("name");
    const kode = formData.get("code");
    const kategori = formData.get("category");
    const harga = Number(formData.get("price"));
    const fotoUrl = formData.get("image");
    const serial = formData.get("serial");
    try {
        if (idRaw) {
            // Edit
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].inventaris.update({
                where: {
                    id: Number(idRaw)
                },
                data: {
                    nama,
                    kode,
                    kategori,
                    harga,
                    serialNum: serial,
                    ...fotoUrl && {
                        fotoUrl
                    }
                }
            });
        } else {
            // Create
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].inventaris.create({
                data: {
                    nama,
                    kode,
                    kategori,
                    harga,
                    serialNum: serial,
                    fotoUrl,
                    status: "AVAILABLE",
                    kondisi: "Baik"
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/inventaris");
        return {
            success: true,
            message: "Data aset tersimpan! 📦"
        };
    } catch (error) {
        return {
            success: false,
            message: "Gagal menyimpan aset."
        };
    }
}
async function deleteInventaris(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].inventaris.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/inventaris");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false
        };
    }
}
async function pinjamBarang(formData) {
    const id = Number(formData.get("id"));
    const peminjam = formData.get("borrower");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].inventaris.update({
            where: {
                id
            },
            data: {
                status: "BORROWED",
                peminjam: peminjam,
                tglPinjam: new Date()
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/inventaris");
        return {
            success: true,
            message: "Barang berhasil dipinjam! 🕒"
        };
    } catch (error) {
        return {
            success: false,
            message: "Gagal memproses peminjaman."
        };
    }
}
async function kembalikanBarang(formData) {
    const id = Number(formData.get("id"));
    const kondisi = formData.get("condition");
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // Ambil data barang dulu buat tau siapa peminjam terakhir
            const barang = await tx.inventaris.findUnique({
                where: {
                    id
                }
            });
            if (!barang || !barang.peminjam) {
                throw new Error("Data barang tidak valid atau tidak sedang dipinjam.");
            }
            // A. Simpan ke Riwayat
            await tx.riwayatAset.create({
                data: {
                    inventarisId: id,
                    peminjam: barang.peminjam,
                    tglKeluar: barang.tglPinjam || new Date(),
                    tglKembali: new Date(),
                    kondisiKembali: kondisi
                }
            });
            // B. Reset Status Barang
            await tx.inventaris.update({
                where: {
                    id
                },
                data: {
                    status: kondisi === "Rusak" ? "MAINTENANCE" : "AVAILABLE",
                    kondisi: kondisi,
                    peminjam: null,
                    tglPinjam: null
                }
            });
            return {
                success: true,
                message: "Barang sudah dikembalikan! ✅"
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/inventaris");
        return result;
    } catch (error) {
        console.error("RETURN ITEM ERROR:", error);
        return {
            success: false,
            message: error.message || "Gagal memproses pengembalian."
        };
    }
}
async function saveGaleri(formData) {
    const idRaw = formData.get("id");
    const judul = formData.get("judul");
    const kategori = formData.get("kategori");
    const tanggal = formData.get("tanggal");
    const deskripsi = formData.get("deskripsi");
    // Ambil JSON string dari form client
    const imagesJson = formData.get("images");
    if (!judul || !imagesJson) {
        return {
            success: false,
            message: "Judul dan minimal 1 Foto wajib diisi!"
        };
    }
    try {
        if (idRaw) {
            // MODE EDIT
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].galeri.update({
                where: {
                    id: Number(idRaw)
                },
                data: {
                    judul,
                    kategori,
                    deskripsi,
                    tanggal: new Date(tanggal),
                    images: imagesJson // Simpan sebagai JSON String
                }
            });
        } else {
            // MODE BARU
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].galeri.create({
                data: {
                    judul,
                    kategori,
                    deskripsi,
                    tanggal: new Date(tanggal),
                    images: imagesJson
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/galeri");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/galeri");
        return {
            success: true,
            message: "Galeri berhasil disimpan! 📸"
        };
    } catch (error) {
        console.error("GALERI ERROR:", error);
        return {
            success: false,
            message: "Gagal menyimpan galeri."
        };
    }
}
async function deleteGaleri(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].galeri.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/galeri");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/galeri");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitAspirasi,
    replyAspirasi,
    deleteAspirasi,
    createBerita,
    updateBerita,
    deleteBerita,
    createProgramKerja,
    updateProgramKerja,
    deleteProgramKerja,
    createPengurus,
    updatePengurus,
    deletePengurus,
    updateIdCardDesign,
    saveIdCardBackground,
    scanAbsensi,
    createGeneralTrx,
    createEventBudget,
    createEventTrx,
    saveInventaris,
    deleteInventaris,
    pinjamBarang,
    kembalikanBarang,
    saveGaleri,
    deleteGaleri
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitAspirasi, "4057499068e6161aa5838799dc06289ccd2643b4a7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(replyAspirasi, "40af2362acffe8e69c4774462c3ce745567b732491", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAspirasi, "404c29f4199bcb4cf392df227ff7592ce53cb65716", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBerita, "40a87bd67cb75552954ed00193922447f0bf3810d0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBerita, "403bdae2018978423129b95155c6e6128532439df4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBerita, "40f17f14e56a5dcd8caffc6bae51aa040828204458", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProgramKerja, "40a9aed5c8bfdeb9ed920a0c2a53c243518b16604e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProgramKerja, "4074094fe74a7df749f1443c40c9f5fc3e1c224998", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProgramKerja, "40a4e73127f25e0c1d2679b3627c6f425667338ba3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPengurus, "40c34336bc3a90a247d840cb8f741432e235bc6168", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePengurus, "40fbe84013316a8a2a5a75904a8d4816b20bbfe24a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletePengurus, "401f90185a456bb4be3fdd5c9cb86e328f8821f86c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateIdCardDesign, "60b0fcad3dfe3d62cfd418ce628fd63ebad7a8fe52", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveIdCardBackground, "40d4a3cccbb07dad229ebea5b4d42987161bbf7235", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(scanAbsensi, "407dfa88239647bb7a0c261efad9599ece274a7c63", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createGeneralTrx, "40f7f4da67a70804a041701b11ca6d029d8246cc0c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEventBudget, "40093cc0534a7b898c0900e2b92cedc6cb2a827401", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEventTrx, "409709da5f2a3420e97b519786a13d3fc9253f7543", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveInventaris, "401a051542ddf7243959603123a16d40d215a22c3b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteInventaris, "40dd20d6a81dc11114d1d03e3853673723e4d3a7c8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(pinjamBarang, "402806850acb6c94820d0d955ee612faa2280f617e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(kembalikanBarang, "40f7debe2ba7ce198831bc957118fec9f79e619dbd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveGaleri, "401c1f776499c9399b1dd94b0729cc27cf0e51423d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteGaleri, "4028d7640eefb00aea5f5edc307bcb0dbd994fb99b", null);
}),
"[project]/.next-internal/server/app/admin/idcard/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/admin/idcard/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00a26b80a2bfee3d6646a5c5e40cc79e5246221d3f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logoutAction"],
    "40d4a3cccbb07dad229ebea5b4d42987161bbf7235",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveIdCardBackground"],
    "60b0fcad3dfe3d62cfd418ce628fd63ebad7a8fe52",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateIdCardDesign"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$idcard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/idcard/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04039e95._.js.map