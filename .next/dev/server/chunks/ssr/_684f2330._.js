module.exports = [
"[project]/components/TeamCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function TeamCard({ name, role, image, color, instagram }) {
    // Logic Warna Aura (Glow)
    const getGlowColor = (c)=>{
        switch(c){
            case "blue":
                return "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:border-blue-500/50";
            case "purple":
                return "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:border-purple-500/50";
            case "green":
                return "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] group-hover:border-green-500/50";
            case "orange":
                return "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] group-hover:border-orange-500/50";
            case "red":
                return "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] group-hover:border-red-500/50";
            case "yellow":
                return "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] group-hover:border-yellow-500/50";
            case "cyan":
                return "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group-hover:border-cyan-500/50";
            case "pink":
                return "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] group-hover:border-pink-500/50";
            default:
                return "group-hover:shadow-[0_0_30px_rgba(148,163,184,0.5)]";
        }
    };
    const getBgGradient = (c)=>{
        switch(c){
            case "blue":
                return "from-blue-500 to-indigo-500";
            case "purple":
                return "from-purple-500 to-pink-500";
            case "green":
                return "from-green-500 to-emerald-500";
            case "orange":
                return "from-orange-500 to-red-500";
            case "red":
                return "from-red-600 to-rose-600";
            case "yellow":
                return "from-yellow-400 to-orange-400";
            case "cyan":
                return "from-cyan-400 to-blue-400";
            case "pink":
                return "from-pink-500 to-rose-500";
            default:
                return "from-slate-500 to-gray-500";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `group relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${getGlowColor(color)}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: image,
                        alt: name,
                        fill: true,
                        className: "object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    }, void 0, false, {
                        fileName: "[project]/components/TeamCard.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"
                    }, void 0, false, {
                        fileName: "[project]/components/TeamCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TeamCard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-12 h-1 mb-3 rounded-full bg-gradient-to-r ${getBgGradient(color)}`
                    }, void 0, false, {
                        fileName: "[project]/components/TeamCard.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-white leading-tight mb-1",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/components/TeamCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs font-bold uppercase tracking-widest text-white/80`,
                        children: role
                    }, void 0, false, {
                        fileName: "[project]/components/TeamCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-0 group-hover:h-8 overflow-hidden transition-all duration-500 mt-0 group-hover:mt-3 opacity-0 group-hover:opacity-100",
                        children: instagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `https://instagram.com/${instagram}`,
                            target: "_blank",
                            className: "flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "2",
                                            width: "20",
                                            height: "20",
                                            rx: "5",
                                            ry: "5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TeamCard.tsx",
                                            lineNumber: 77,
                                            columnNumber: 194
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TeamCard.tsx",
                                            lineNumber: 77,
                                            columnNumber: 256
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "17.5",
                                            y1: "6.5",
                                            x2: "17.51",
                                            y2: "6.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TeamCard.tsx",
                                            lineNumber: 77,
                                            columnNumber: 321
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TeamCard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "@",
                                        instagram
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TeamCard.tsx",
                                    lineNumber: 78,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TeamCard.tsx",
                            lineNumber: 76,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TeamCard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TeamCard.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TeamCard.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/pengurus/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PengurusPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TeamCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function PengurusPage() {
    // State untuk Switch: "OSIS" atau "MPK"
    const [activeOrg, setActiveOrg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("OSIS");
    // === DATA PENGURUS INTI (THE BIG 4) ===
    // Selalu muncul di paling atas
    const coreLeaders = [
        {
            name: "Raka Aditya",
            role: "Ketua OSIS",
            color: "blue",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
            ig: "raka.adty"
        },
        {
            name: "Dimas Saputra",
            role: "Wakil Ketua OSIS",
            color: "cyan",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
            ig: "dimas_sp"
        },
        {
            name: "Siti Aminah",
            role: "Ketua MPK",
            color: "purple",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
            ig: "siti.aminah"
        },
        {
            name: "Bayu Permana",
            role: "Wakil Ketua MPK",
            color: "pink",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
            ig: "bayu.p"
        }
    ];
    // === DATA STRUKTUR OSIS ===
    const osisStructure = [
        {
            groupName: "Badan Pengurus Harian (BPH)",
            members: [
                {
                    name: "Nadia Putri",
                    role: "Sekretaris I",
                    color: "blue",
                    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
                },
                {
                    name: "Rina S",
                    role: "Bendahara I",
                    color: "blue",
                    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                },
                {
                    name: "Budi S",
                    role: "Koordinator Sekbid",
                    color: "blue",
                    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Sekbid 1: Keagamaan",
            members: [
                {
                    name: "Ahmad Fauzi",
                    role: "Koordinator",
                    color: "green",
                    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
                },
                {
                    name: "Zahra N",
                    role: "Anggota",
                    color: "green",
                    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Sekbid 2: Kedisiplinan & Budi Pekerti",
            members: [
                {
                    name: "Kevin S",
                    role: "Koordinator",
                    color: "orange",
                    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Sekbid 3: Belanegara & Wawasan Kebangsaan",
            members: [
                {
                    name: "Rian H",
                    role: "Koordinator",
                    color: "red",
                    img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Sekbid 4: Kesehatan Jasmani (Olahraga)",
            members: [
                {
                    name: "Doni T",
                    role: "Koordinator",
                    color: "yellow",
                    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Sekbid 5: Keterampilan & Kewirausahaan",
            members: [
                {
                    name: "Maya I",
                    role: "Koordinator",
                    color: "pink",
                    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Sekbid 6: Kepemimpinan & Organisasi",
            members: [
                {
                    name: "Rizky R",
                    role: "Koordinator",
                    color: "cyan",
                    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Sekbid 9: TIK & Kominfo",
            members: [
                {
                    name: "Reza A",
                    role: "Koordinator",
                    color: "blue",
                    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                },
                {
                    name: "Dina L",
                    role: "Content Creator",
                    color: "blue",
                    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
                }
            ]
        }
    ];
    // === DATA STRUKTUR MPK ===
    const mpkStructure = [
        {
            groupName: "Sekretariat MPK",
            members: [
                {
                    name: "Lina P",
                    role: "Sekretaris",
                    color: "purple",
                    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Komisi 1: Legislasi & Hukum",
            members: [
                {
                    name: "Fajar A",
                    role: "Ketua Komisi",
                    color: "purple",
                    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Komisi 2: Aspirasi Siswa",
            members: [
                {
                    name: "Sari M",
                    role: "Ketua Komisi",
                    color: "purple",
                    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Komisi 3: Pengawasan Ekstrakurikuler",
            members: [
                {
                    name: "Toni K",
                    role: "Ketua Komisi",
                    color: "purple",
                    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Komisi 4: Keuangan & Sarana",
            members: [
                {
                    name: "Dewi L",
                    role: "Ketua Komisi",
                    color: "purple",
                    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                }
            ]
        },
        {
            groupName: "Komisi 5: Humas & Kemitraan",
            members: [
                {
                    name: "Agus S",
                    role: "Ketua Komisi",
                    color: "purple",
                    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
                }
            ]
        }
    ];
    // Tentukan data mana yang ditampilkan berdasarkan Switch
    const activeData = activeOrg === "OSIS" ? osisStructure : mpkStructure;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pt-24 pb-24 overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.10] pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/app/pengurus/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 md:px-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-4xl mx-auto mb-12 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-4 py-2 rounded-full bg-blue-100 dark:bg-white/10 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-200 dark:border-white/10",
                                children: activeOrg === "OSIS" ? "Eksekutif Siswa" : "Legislatif Siswa"
                            }, void 0, false, {
                                fileName: "[project]/app/pengurus/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-black text-slate-900 dark:text-white",
                                children: [
                                    "Struktur ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400",
                                        children: "Organisasi"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pengurus/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pengurus/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pengurus/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",
                        children: coreLeaders.map((member, idx)=>// @ts-ignore
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                name: member.name,
                                role: member.role,
                                color: member.color,
                                image: member.image,
                                instagram: member.ig
                            }, idx, false, {
                                fileName: "[project]/app/pengurus/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/pengurus/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-1.5 bg-slate-200 dark:bg-slate-800 rounded-full flex relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute top-1.5 bottom-1.5 w-[140px] bg-white dark:bg-blue-600 rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${activeOrg === "OSIS" ? "left-1.5" : "left-[148px]"}`
                                }, void 0, false, {
                                    fileName: "[project]/app/pengurus/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveOrg("OSIS"),
                                    className: `relative z-10 w-[140px] py-3 text-sm font-bold rounded-full transition-colors duration-300 ${activeOrg === "OSIS" ? "text-blue-700 dark:text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-700"}`,
                                    children: "🚀 OSIS"
                                }, void 0, false, {
                                    fileName: "[project]/app/pengurus/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveOrg("MPK"),
                                    className: `relative z-10 w-[140px] py-3 text-sm font-bold rounded-full transition-colors duration-300 ${activeOrg === "MPK" ? "text-purple-700 dark:text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-700"}`,
                                    children: "🏛️ MPK"
                                }, void 0, false, {
                                    fileName: "[project]/app/pengurus/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pengurus/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/pengurus/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700",
                        children: activeData.map((group, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-2 h-8 rounded-full ${activeOrg === "OSIS" ? "bg-blue-500" : "bg-purple-500"}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/pengurus/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl md:text-2xl font-bold text-slate-900 dark:text-white",
                                                children: group.groupName
                                            }, void 0, false, {
                                                fileName: "[project]/app/pengurus/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px flex-1 bg-slate-200 dark:bg-slate-800 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pengurus/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pengurus/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                        children: group.members.map((member, mIdx)=>// @ts-ignore
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                name: member.name,
                                                role: member.role,
                                                // @ts-ignore
                                                color: member.color,
                                                image: member.img
                                            }, mIdx, false, {
                                                fileName: "[project]/app/pengurus/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/pengurus/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/pengurus/page.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this))
                    }, activeOrg, false, {
                        fileName: "[project]/app/pengurus/page.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-24 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400 italic text-sm",
                            children: [
                                '"',
                                activeOrg === "OSIS" ? "Kami siap melayani dan mengeksekusi program kerja." : "Kami siap mengawasi dan menampung aspirasi siswa.",
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pengurus/page.tsx",
                            lineNumber: 205,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/pengurus/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pengurus/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pengurus/page.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_684f2330._.js.map