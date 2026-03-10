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
"[project]/app/admin/kas/KeuanganClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/admin/kas/KeuanganClient.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/admin/kas/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$kas$2f$KeuanganClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/kas/KeuanganClient.tsx [app-rsc] (ecmascript)");
;
;
;
async function KasPage() {
    // 1. Ambil Transaksi Umum (Tidak terikat event/proker)
    const generalTrxRaw = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].keuangan.findMany({
        where: {
            prokerId: null
        },
        orderBy: {
            tanggal: "desc"
        }
    });
    const generalTrx = generalTrxRaw.map((t)=>({
            id: t.id,
            title: t.judul,
            amount: t.nominal,
            type: t.tipe,
            date: t.tanggal.toISOString().split("T")[0],
            category: t.kategori,
            pic: t.keterangan || "-"
        }));
    // 2. Ambil Event (Proker yang sudah punya budget)
    const eventsRaw = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].programKerja.findMany({
        where: {
            anggaran: {
                gt: 0
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    // 3. Ambil Semua Proker (untuk pilihan link anggaran)
    const allProker = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].programKerja.findMany({
        orderBy: {
            nama: "asc"
        }
    });
    const allEventTrx = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].keuangan.findMany({
        where: {
            prokerId: {
                not: null
            }
        },
        orderBy: {
            tanggal: "desc"
        }
    });
    const events = eventsRaw.map((ev)=>{
        const trx = allEventTrx.filter((t)=>t.prokerId === ev.id).map((t)=>({
                id: t.id,
                title: t.judul,
                amount: t.nominal,
                date: t.tanggal.toISOString().split("T")[0]
            }));
        return {
            id: ev.id,
            name: ev.nama,
            budget: ev.anggaran,
            used: ev.anggaranTerpakai,
            status: ev.status,
            transactions: trx
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$kas$2f$KeuanganClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        generalTrx: generalTrx,
        events: events,
        prokers: allProker
    }, void 0, false, {
        fileName: "[project]/app/admin/kas/page.tsx",
        lineNumber: 55,
        columnNumber: 12
    }, this);
}
}),
"[project]/app/admin/kas/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/admin/kas/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f2d3cc38._.js.map