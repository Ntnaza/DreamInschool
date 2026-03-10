module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/admin/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/admin/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/admin/DashboardUI.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/admin/DashboardUI.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/admin/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$DashboardUI$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/DashboardUI.tsx [app-rsc] (ecmascript)");
;
;
;
async function AdminPage() {
    // --- 1. Statistik Utama ---
    // A. Absensi Hari Ini (Real-time)
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0); // Mulai dari jam 00:00 hari ini
    const hadirHariIni = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].absensi.count({
        where: {
            tanggal: {
                gte: todayStart
            }
        }
    });
    const totalPengurus = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pengurus.count(); // Buat penyebut (contoh: 5/40 Hadir)
    // B. Statistik Lain
    const aspirasiBaru = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].aspirasi.count({
        where: {
            status: 'PENDING'
        }
    });
    const totalProker = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].programKerja.count();
    const doneProker = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].programKerja.count({
        where: {
            status: 'DONE'
        }
    });
    const prokerPersen = totalProker === 0 ? 0 : Math.round(doneProker / totalProker * 100);
    const pemasukan = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].keuangan.aggregate({
        _sum: {
            nominal: true
        },
        where: {
            tipe: 'PEMASUKAN'
        }
    });
    const pengeluaran = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].keuangan.aggregate({
        _sum: {
            nominal: true
        },
        where: {
            tipe: 'PENGELUARAN'
        }
    });
    const danaKas = (pemasukan._sum.nominal || 0) - (pengeluaran._sum.nominal || 0);
    // --- 2. List Data Terbaru ---
    // Agenda Terdekat
    const agenda = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].programKerja.findMany({
        take: 3,
        orderBy: {
            deadline: 'asc'
        },
        where: {
            deadline: {
                gte: new Date()
            },
            status: {
                not: 'DONE'
            }
        },
        select: {
            id: true,
            nama: true,
            deadline: true,
            divisi: true
        }
    });
    // Transaksi Terakhir (NEW WIDGET) 💸
    const transaksiTerakhir = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].keuangan.findMany({
        take: 4,
        orderBy: {
            tanggal: 'desc'
        },
        select: {
            id: true,
            judul: true,
            nominal: true,
            tipe: true,
            tanggal: true // ✅ Ganti jadi 'tanggal'
        }
    });
    // Aspirasi Terbaru
    const aspirasi = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].aspirasi.findMany({
        take: 3,
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            id: true,
            pengirim: true,
            isi: true,
            kategori: true,
            createdAt: true
        }
    });
    // --- 3. Data Chart 7 Hari Terakhir ---
    const days = [
        'Min',
        'Sen',
        'Sel',
        'Rab',
        'Kam',
        'Jum',
        'Sab'
    ];
    const today = new Date();
    const chartData = [];
    for(let i = 6; i >= 0; i--){
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        d.setHours(0, 0, 0, 0);
        const nextD = new Date(d);
        nextD.setDate(d.getDate() + 1);
        const countAspirasi = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].aspirasi.count({
            where: {
                createdAt: {
                    gte: d,
                    lt: nextD
                }
            }
        });
        const countProker = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].programKerja.count({
            where: {
                createdAt: {
                    gte: d,
                    lt: nextD
                }
            }
        }); // Atau ganti 'berita'
        chartData.push({
            name: days[d.getDay()],
            aspirasi: countAspirasi,
            kegiatan: countProker
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$DashboardUI$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        stats: {
            totalPengurus,
            hadirHariIni,
            aspirasiBaru,
            prokerPersen,
            danaKas
        },
        agenda: agenda,
        transaksiTerakhir: transaksiTerakhir,
        aspirasi: aspirasi,
        chartData: chartData
    }, void 0, false, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/admin/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ce18a5e9._.js.map