(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/TourGuide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TourGuide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-joyride/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TourGuide({ steps }) {
    _s();
    const [run, setRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleJoyrideCallback = (data)=>{
        const { status } = data;
        // Gunakan logika OR (||) agar TypeScript aman
        if (status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS"].FINISHED || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS"].SKIPPED) {
            setRun(false);
        }
    };
    // === INI RAHASIANYA: KOMPONEN TOOLTIP CUSTOM ===
    // Kita bikin tampilan sendiri pakai Tailwind biar bebas kreasinya
    const CustomTooltip = ({ continuous, index, step, backProps, closeProps, primaryProps, tooltipProps, isLastStep, size })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ...tooltipProps,
            className: "bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 max-w-sm flex flex-col overflow-hidden font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start p-5 pb-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black font-bold",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-black font-bold text-slate-900 dark:text-white",
                                    children: "Panduan Sistem"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 43,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ...closeProps,
                            className: "text-slate-400 hover:text-red-500 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/TourGuide.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 49,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed",
                    children: step.content
                }, void 0, false, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-slate-50 dark:bg-white/5 flex items-center justify-between border-t border-slate-100 dark:border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
                            children: [
                                "Langkah ",
                                index + 1,
                                " dari ",
                                size
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 63,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ...backProps,
                                    className: "px-3 py-2 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/TourGuide.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ...primaryProps,
                                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-500/30 flex items-center gap-1 transition-transform active:scale-95",
                                    children: [
                                        isLastStep ? "Selesai" : "Lanjut",
                                        " ",
                                        !isLastStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/TourGuide.tsx",
                                            lineNumber: 84,
                                            columnNumber: 70
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 68,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TourGuide.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setRun(true),
                    className: "group flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-white/5 border border-blue-200 dark:border-white/10 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 transition-all active:scale-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    size: 16,
                                    className: "text-blue-600 dark:text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                            children: "Panduan Interaktif"
                        }, void 0, false, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TourGuide.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                callback: handleJoyrideCallback,
                continuous: true,
                run: run,
                scrollToFirstStep: true,
                showProgress: true,
                showSkipButton: true,
                steps: steps,
                tooltipComponent: CustomTooltip,
                styles: {
                    options: {
                        arrowColor: '#ffffff',
                        overlayColor: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 10000
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/TourGuide.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TourGuide, "TQayB/HTFjl1hL9uqs0l53lNyeE=");
_c = TourGuide;
var _c;
__turbopack_context__.k.register(_c, "TourGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/lib/actions.ts'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/admin/absensi/ScanClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScanClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/atom.js [app-client] (ecmascript) <export default as Atom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/library.js [app-client] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/html5-qrcode.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const DAYS_LIST = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu"
];
const absensiTourSteps = [
    {
        target: '.tour-acara-header',
        content: 'Kelola sesi absensi aktif Anda di sini.',
        disableBeacon: true
    },
    {
        target: '.tour-session-controls',
        content: 'Klik START untuk mulai menerima absensi.'
    },
    {
        target: '.tour-scanner-btn',
        content: 'Klik di sini untuk meluncurkan mode kamera scanner.'
    }
];
const FloatingIcon = ({ children, delay = 0, x = 0, y = 0, size = 24, duration = 10 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.5
        },
        animate: {
            opacity: [
                0.7,
                1,
                0.7
            ],
            y: [
                y,
                y - 60,
                y
            ],
            x: [
                x,
                x + 20,
                x
            ],
            rotate: [
                0,
                360
            ],
            scale: [
                1,
                1.2,
                1
            ]
        },
        transition: {
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        },
        style: {
            left: `${x}%`,
            top: `${y}%`,
            position: 'absolute'
        },
        className: "text-blue-600/40 dark:text-blue-400/30 pointer-events-none drop-shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
            size
        })
    }, void 0, false, {
        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = FloatingIcon;
function ScanClient() {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('manage');
    // DATA STATES
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [daftarAcara, setDaftarAcara] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pengurusList, setPengurusList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAcaraId, setSelectedAcaraId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scanResult, setScanResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // UI STATES
    const [isLoadingLogs, setIsLoadingLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isManualModalOpen, setIsManualModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalMode, setModalMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('create');
    const [soundEnabled, setSoundEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newAcara, setNewAcara] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nama: "",
        tanggal: new Date().toISOString().split('T')[0],
        lokasi: "Sekolah",
        waktuMulai: "07:00",
        waktuSelesai: "15:00",
        tipe: "SEKALI_PAKAI",
        hari: "",
        autoStart: false
    });
    const [manualInput, setManualInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        pengurusId: "",
        status: "HADIR"
    });
    const scannerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTransitioning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScanClient.useCallback[loadData]": async (autoSelectLatest = false)=>{
            setIsLoadingLogs(true);
            try {
                // Cek dan Auto Start Sesi yang terjadwal
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkAndAutoStartAcara"])();
                const [list, pengurus] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaftarAcara"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaftarPengurus"])()
                ]);
                setDaftarAcara(list);
                setPengurusList(pengurus);
                if (list.length > 0) {
                    let targetId = selectedAcaraId;
                    if (autoSelectLatest || !selectedAcaraId) {
                        targetId = list[0].id;
                        setSelectedAcaraId(targetId);
                    }
                    if (targetId) {
                        const dbLogs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogsByAcara"])(targetId, 'acara');
                        setLogs(dbLogs.map({
                            "ScanClient.useCallback[loadData]": (item)=>({
                                    dbId: item.id,
                                    name: item.pengurus.nama,
                                    role: item.pengurus.jabatan,
                                    image: item.pengurus.fotoUrl,
                                    time: new Date(item.tanggal).toLocaleTimeString('id-ID', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }),
                                    status: item.status,
                                    scanId: item.id
                                })
                        }["ScanClient.useCallback[loadData]"]));
                    }
                }
            } catch (err) {} finally{
                setIsLoadingLogs(false);
            }
        }
    }["ScanClient.useCallback[loadData]"], [
        selectedAcaraId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanClient.useEffect": ()=>{
            setIsClient(true);
            loadData();
        }
    }["ScanClient.useEffect"], []);
    const initScanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScanClient.useCallback[initScanner]": async ()=>{
            if (!isClient || viewMode !== 'scanning' || isTransitioning.current) return;
            const checkInterval = setInterval({
                "ScanClient.useCallback[initScanner].checkInterval": async ()=>{
                    const element = document.getElementById("reader");
                    if (element && !isTransitioning.current) {
                        clearInterval(checkInterval);
                        isTransitioning.current = true;
                        try {
                            if (scannerRef.current) {
                                if (scannerRef.current.isScanning) await scannerRef.current.stop();
                                scannerRef.current = null;
                            }
                            const html5QrCode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5Qrcode"]("reader");
                            scannerRef.current = html5QrCode;
                            await html5QrCode.start({
                                facingMode: "environment"
                            }, {
                                fps: 25,
                                qrbox: {
                                    width: 320,
                                    height: 320
                                },
                                aspectRatio: 1.0
                            }, {
                                "ScanClient.useCallback[initScanner].checkInterval": (text)=>handleScan(text)
                            }["ScanClient.useCallback[initScanner].checkInterval"], {
                                "ScanClient.useCallback[initScanner].checkInterval": ()=>{}
                            }["ScanClient.useCallback[initScanner].checkInterval"]);
                        } catch (err) {} finally{
                            isTransitioning.current = false;
                        }
                    }
                    if (attempts > 50) clearInterval(checkInterval);
                }
            }["ScanClient.useCallback[initScanner].checkInterval"], 150);
            let attempts = 0;
        }
    }["ScanClient.useCallback[initScanner]"], [
        isClient,
        viewMode,
        selectedAcaraId
    ]);
    const stopScanner = async ()=>{
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        if (scannerRef.current) {
            if (scannerRef.current.isScanning) await scannerRef.current.stop();
            scannerRef.current = null;
        }
        isTransitioning.current = false;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanClient.useEffect": ()=>{
            if (viewMode === 'scanning') initScanner();
            else stopScanner();
            return ({
                "ScanClient.useEffect": ()=>{
                    stopScanner();
                }
            })["ScanClient.useEffect"];
        }
    }["ScanClient.useEffect"], [
        viewMode,
        initScanner
    ]);
    const handleScan = async (nis)=>{
        if (!nis || scanResult || !selectedAcaraId) return;
        if (soundEnabled) new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3').play().catch(()=>{});
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scanAbsensi"])(nis, selectedAcaraId);
            if (result.success && result.data) {
                const timestamp = new Date().toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                setScanResult({
                    type: 'success',
                    data: {
                        ...result.data,
                        time: timestamp
                    },
                    message: result.message
                });
                loadData();
            } else {
                setScanResult({
                    type: 'error',
                    message: result.message
                });
            }
        } catch (err) {
            setScanResult({
                type: 'error',
                message: "Koneksi Bermasalah"
            });
        }
        setTimeout(()=>{
            setScanResult(null);
        }, 2500);
    };
    const handleManualSubmit = async (e)=>{
        e.preventDefault();
        if (!selectedAcaraId || !manualInput.pengurusId) return;
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputManualAbsensi"])(selectedAcaraId, Number(manualInput.pengurusId), manualInput.status);
        if (res.success) {
            setIsManualModalOpen(false);
            setManualInput({
                pengurusId: "",
                status: "HADIR"
            });
            loadData();
        }
    };
    const handleCloseSession = async ()=>{
        if (!selectedAcaraId) return;
        if (confirm("Tutup sesi sekarang? Pengurus yang tidak scan atau izin akan otomatis dianggap ALPA.")) {
            setIsSubmitting(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autoAlpaRemaining"])(selectedAcaraId);
            if (res.success) {
                alert(`Sesi ditutup! ${res.count} pengurus otomatis dianggap ALPA.`);
                loadData();
            }
            setIsSubmitting(false);
        }
    };
    const handleCreateOrUpdate = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData();
        Object.entries(newAcara).forEach(([key, val])=>formData.append(key, String(val)));
        const res = modalMode === 'create' ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAcara"])(formData) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAcara"])(selectedAcaraId, formData);
        if (res.success) {
            setIsModalOpen(false);
            loadData(modalMode === 'create');
        }
        setIsSubmitting(false);
    };
    const handleDayToggle = (day)=>{
        const currentDays = newAcara.hari ? newAcara.hari.split(',') : [];
        const newDays = currentDays.includes(day) ? currentDays.filter((d)=>d !== day) : [
            ...currentDays,
            day
        ];
        setNewAcara({
            ...newAcara,
            hari: newDays.join(',')
        });
    };
    const handleStartSession = async ()=>{
        if (selectedAcaraId) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAcaraSession"])(selectedAcaraId).then(loadData);
    };
    const handleUpdateStatus = async (absensiId, status)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateStatusKehadiran"])(absensiId, status).then(loadData);
    };
    const selectedAcara = daftarAcara.find((a)=>a.id === selectedAcaraId);
    const renderManagement = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden h-full px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-80 shrink-0 flex flex-col gap-4 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-5 shadow-sm overflow-hidden h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center px-1 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                            className: "text-blue-600",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 216,
                                            columnNumber: 106
                                        }, this),
                                        " Sesi Acara"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setModalMode('create');
                                        setIsModalOpen(true);
                                    },
                                    className: "p-1.5 bg-blue-600 text-white rounded-lg hover:scale-105 active:scale-95 transition-all shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 14,
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 217,
                                        columnNumber: 200
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar",
                            children: daftarAcara.map((acara)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedAcaraId(acara.id),
                                    className: `p-4 rounded-xl cursor-pointer transition-all border group relative ${selectedAcaraId === acara.id ? 'bg-blue-600 text-white border-blue-400 shadow-md' : 'bg-transparent text-slate-600 dark:text-slate-400 border-transparent hover:bg-slate-50 dark:hover:bg-white/5'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-medium px-2 py-0.5 rounded-md uppercase tracking-wide ${selectedAcaraId === acara.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-500'}`,
                                                    children: acara.tipe?.replace('_', ' ') || 'SEKALI PAKAI'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex gap-1.5 transition-all ${selectedAcaraId === acara.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                setModalMode('edit');
                                                                setNewAcara({
                                                                    nama: acara.nama,
                                                                    tanggal: new Date(acara.tanggal).toISOString().split('T')[0],
                                                                    lokasi: acara.lokasi,
                                                                    waktuMulai: acara.waktuMulai ? new Date(acara.waktuMulai).toTimeString().slice(0, 5) : "07:00",
                                                                    waktuSelesai: acara.waktuSelesai ? new Date(acara.waktuSelesai).toTimeString().slice(0, 5) : "15:00",
                                                                    tipe: acara.tipe || "SEKALI_PAKAI",
                                                                    hari: acara.hari || "",
                                                                    autoStart: acara.autoStart || false
                                                                });
                                                                setSelectedAcaraId(acara.id);
                                                                setIsModalOpen(true);
                                                            },
                                                            className: `p-1.5 rounded-lg ${selectedAcaraId === acara.id ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-500'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 728
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                if (confirm("Hapus?")) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAcara"])(acara.id).then(()=>loadData(true));
                                                            },
                                                            className: `p-1.5 rounded-lg ${selectedAcaraId === acara.id ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-red-50 hover:bg-red-100 text-red-500'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 305
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 222,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: `text-sm font-bold truncate mb-2 ${selectedAcaraId === acara.id ? 'text-white' : 'text-slate-900 dark:text-white'}`,
                                            children: acara.nama
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 229,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm font-medium flex items-center gap-1.5 ${selectedAcaraId === acara.id ? 'text-blue-100' : 'text-slate-500'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 161
                                                        }, this),
                                                        " ",
                                                        new Date(acara.tanggal).toLocaleDateString('id-ID')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${acara.status === 'ONGOING' ? 'bg-green-500 text-white' : acara.status === 'COMPLETED' ? selectedAcaraId === acara.id ? 'bg-white/30 text-white' : 'bg-slate-400 text-white' : selectedAcaraId === acara.id ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`,
                                                    children: acara.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 230,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, acara.id, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 221,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col gap-6 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 dark:text-slate-400 text-sm font-medium mb-1",
                                            children: "Total Hadir"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 241,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-4xl font-black text-slate-900 dark:text-white tracking-tighter",
                                                    children: logs.filter((l)=>l.status === 'HADIR').length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 64
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-slate-400",
                                                    children: "Anggota"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 204
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 242,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 240,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2 flex gap-4 tour-session-controls",
                                    children: !selectedAcara || selectedAcara.status === 'UPCOMING' || selectedAcara.status === 'COMPLETED' && selectedAcara.tipe === 'RUTINAN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleStartSession,
                                        disabled: !selectedAcara,
                                        className: "flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 active:scale-95 disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                fill: "currentColor",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 246,
                                                columnNumber: 260
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold uppercase tracking-widest",
                                                children: selectedAcara?.status === 'COMPLETED' ? 'Open Session Again' : 'Start Session Now'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 246,
                                                columnNumber: 298
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 246,
                                        columnNumber: 25
                                    }, this) : selectedAcara.status === 'ONGOING' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode('scanning'),
                                                className: "flex-[2] bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white shadow-xl flex items-center justify-between cursor-pointer hover:brightness-110 group tour-scanner-btn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                                    size: 24
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 413
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 313
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-xl font-bold tracking-tight uppercase",
                                                                        children: "Launch Scanner"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 447
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium opacity-70",
                                                                        children: "Session is Active"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 525
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 442
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 272
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-white/10 rounded-lg group-hover:translate-x-1 transition-transform",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 20,
                                                            className: "-rotate-90"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 695
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 604
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 249,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsManualModalOpen(true),
                                                        className: "flex-1 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl shadow-md flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 255
                                                            }, this),
                                                            " Izin/Sakit"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleCloseSession,
                                                        className: "flex-1 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-md flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                                fill: "currentColor",
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 239
                                                            }, this),
                                                            " End Session"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 250,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-slate-400 font-bold text-sm uppercase tracking-widest",
                                        children: "Session Completed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 256,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col overflow-hidden tour-activity-stream",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    size: 18,
                                                    className: "text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 242
                                                }, this),
                                                " Activity Stream ",
                                                isLoadingLogs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 14,
                                                    className: "animate-spin text-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 325
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 261,
                                            columnNumber: 153
                                        }, this),
                                        selectedAcara?.waktuMulaiAktual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 543
                                                }, this),
                                                " Started at ",
                                                new Date(selectedAcara.waktuMulaiAktual).toLocaleTimeString('id-ID', {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 261,
                                            columnNumber: 428
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "popLayout",
                                        children: logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex flex-col items-center justify-center opacity-20 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                    size: 48,
                                                    className: "mb-3 mx-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 166
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-slate-500",
                                                    children: "Belum ada aktivitas yang tercatat"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 212
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 263,
                                            columnNumber: 77
                                        }, this) : logs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layout: true,
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                className: "flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-11 h-11 rounded-lg overflow-hidden shrink-0 shadow-sm border border-slate-100 dark:border-white/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: log.image || "https://source.unsplash.com/random/100x100/?portrait",
                                                            alt: log.name,
                                                            fill: true,
                                                            className: "object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 387
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 260
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-bold text-slate-900 dark:text-white truncate",
                                                                children: log.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 553
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium text-slate-500",
                                                                children: log.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 642
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 521
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: log.status,
                                                                onChange: (e)=>handleUpdateStatus(log.dbId, e.target.value),
                                                                className: `text-xs font-bold px-3 py-1.5 rounded-lg outline-none border transition-all ${log.status === 'HADIR' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : log.status === 'IZIN' ? 'bg-blue-50 text-blue-600 border-blue-100' : log.status === 'SAKIT' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-rose-50 text-rose-600 border-rose-100'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "HADIR",
                                                                        children: "HADIR"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 1200
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "IZIN",
                                                                        children: "IZIN"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 1236
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "SAKIT",
                                                                        children: "SAKIT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 1270
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "ALPA",
                                                                        children: "ALPA"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 1306
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 753
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right min-w-[60px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-slate-400",
                                                                    children: log.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 1390
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 1349
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 712
                                                    }, this)
                                                ]
                                            }, log.scanId, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 264,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 263,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 262,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
            lineNumber: 213,
            columnNumber: 5
        }, this);
    const renderScannerPortal = ()=>{
        if (!isClient || viewMode !== 'scanning') return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "jsx-8ec4ae4a05f922c6" + " " + "fixed inset-0 z-[999999] bg-white dark:bg-[#020617] flex flex-col items-center justify-center p-6 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "8ec4ae4a05f922c6",
                    children: "body{overflow:hidden!important}#reader,#reader__scan_region{border:none!important}#reader__scan_region>div{box-shadow:none!important;opacity:0!important;border:none!important}#reader__dashboard{display:none!important}video{border-radius:2rem!important}"
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8ec4ae4a05f922c6" + " " + "absolute inset-0 overflow-hidden pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 15,
                            y: 15,
                            size: 48,
                            duration: 12,
                            delay: 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 278,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 278,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 80,
                            y: 20,
                            size: 52,
                            duration: 15,
                            delay: 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 279,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 279,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 10,
                            y: 70,
                            size: 42,
                            duration: 10,
                            delay: 2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 280,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 280,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 85,
                            y: 75,
                            size: 64,
                            duration: 18,
                            delay: 3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 281,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 281,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 50,
                            y: 8,
                            size: 38,
                            duration: 11,
                            delay: 4,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 282,
                                columnNumber: 78
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 282,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 5,
                            y: 45,
                            size: 50,
                            duration: 14,
                            delay: 5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 283,
                                columnNumber: 78
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 283,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 92,
                            y: 50,
                            size: 46,
                            duration: 13,
                            delay: 0.5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 284,
                                columnNumber: 81
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 284,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 45,
                            y: 85,
                            size: 44,
                            duration: 16,
                            delay: 1.5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 285,
                                columnNumber: 81
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 285,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 277,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8ec4ae4a05f922c6" + " " + "absolute top-8 left-0 w-full px-10 flex justify-between items-center z-[1000]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setViewMode('manage'),
                            className: "jsx-8ec4ae4a05f922c6" + " " + "p-4 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-3 font-bold text-sm text-slate-600 dark:text-slate-300 hover:scale-105 active:scale-95 transition-all shadow-blue-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 288,
                                    columnNumber: 317
                                }, this),
                                " Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 288,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8ec4ae4a05f922c6" + " " + "px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-xl font-bold text-sm uppercase tracking-widest flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                    size: 18,
                                    className: "animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 289,
                                    columnNumber: 157
                                }, this),
                                " ",
                                selectedAcara?.nama
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 289,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 287,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8ec4ae4a05f922c6" + " " + "relative w-full max-w-[500px] aspect-square group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8ec4ae4a05f922c6" + " " + "absolute inset-[-40px] bg-blue-500/10 blur-[100px] rounded-full opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 292,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8ec4ae4a05f922c6" + " " + "w-full h-full relative rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_120px_rgba(0,0,0,0.8)] bg-black",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "reader",
                                    style: {
                                        transform: 'scaleX(-1)'
                                    },
                                    className: "jsx-8ec4ae4a05f922c6" + " " + "absolute inset-0 z-0 [&>video]:object-cover [&>video]:h-full [&>video]:w-full overflow-hidden"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 294,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8ec4ae4a05f922c6" + " " + "absolute inset-0 z-20 flex items-center justify-center pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8ec4ae4a05f922c6" + " " + "relative w-[320px] h-[320px] shadow-[0_0_0_2000px_rgba(0,0,0,0.7)] rounded-none border-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -top-1 -left-1 w-16 h-16 border-t-[6px] border-l-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 297,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -top-1 -right-1 w-16 h-16 border-t-[6px] border-r-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 298,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -bottom-1 -left-1 w-16 h-16 border-b-[6px] border-l-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 299,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -bottom-1 -right-1 w-16 h-16 border-b-[6px] border-r-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 300,
                                                columnNumber: 29
                                            }, this),
                                            !scanResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    top: [
                                                        "5%",
                                                        "95%",
                                                        "5%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                },
                                                className: "absolute left-[5%] w-[90%] h-1.5 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_30px_rgba(255,255,255,1)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 301,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: scanResult && scanResult.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0.8,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        scale: 1.1
                                                    },
                                                    className: `absolute inset-[-40px] flex flex-col items-center justify-center text-center p-8 backdrop-blur-[100px] rounded-[3rem] z-50 pointer-events-auto border-4 shadow-2xl ${scanResult.type === 'success' ? scanResult.data.status === 'DUPLICATE' ? 'bg-amber-500/95 border-amber-400/50' : 'bg-emerald-500/95 border-emerald-400/50' : 'bg-rose-600/95 border-rose-400/50'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8ec4ae4a05f922c6" + " " + "relative mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8ec4ae4a05f922c6" + " " + "w-40 h-40 rounded-full p-1.5 bg-white shadow-2xl ring-8 ring-white/20",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-8ec4ae4a05f922c6" + " " + "relative w-full h-full rounded-full overflow-hidden border-4 border-white",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: scanResult.data.image || "https://source.unsplash.com/random/100x100/?portrait",
                                                                            alt: "",
                                                                            fill: true,
                                                                            className: "object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                            lineNumber: 305,
                                                                            columnNumber: 219
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 128
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        scale: 0
                                                                    },
                                                                    animate: {
                                                                        scale: 1
                                                                    },
                                                                    className: `absolute -bottom-1 -right-1 p-2.5 rounded-full shadow-xl border-4 border-white ${scanResult.data.status === 'DUPLICATE' ? 'bg-amber-600' : 'bg-emerald-600'}`,
                                                                    children: scanResult.data.status === 'DUPLICATE' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "text-white",
                                                                        size: 24
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 312
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        className: "text-white",
                                                                        size: 24
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 357
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "jsx-8ec4ae4a05f922c6" + " " + "text-3xl font-black text-white mb-1 tracking-tight leading-tight",
                                                            children: scanResult.data.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-8ec4ae4a05f922c6" + " " + "text-xs font-bold text-white/80 uppercase tracking-[0.3em] mb-8",
                                                            children: scanResult.data.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8ec4ae4a05f922c6" + " " + "px-8 py-4 bg-white rounded-2xl shadow-xl flex flex-col items-center gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-8ec4ae4a05f922c6" + " " + `text-xs font-black uppercase tracking-widest ${scanResult.data.status === 'DUPLICATE' ? 'text-amber-700' : 'text-emerald-700'}`,
                                                                    children: scanResult.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 130
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-8ec4ae4a05f922c6" + " " + "text-[9px] font-bold text-slate-400 tracking-widest",
                                                                    children: scanResult.data.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 304
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 302,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 296,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 295,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 293,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -bottom-20 left-0 w-full text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8ec4ae4a05f922c6" + " " + "inline-flex items-center gap-4 px-8 py-4 bg-white dark:bg-slate-900 shadow-2xl rounded-full border border-slate-100 dark:border-white/5 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8ec4ae4a05f922c6" + " " + "flex h-3 w-3 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 317,
                                                columnNumber: 228
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "relative inline-flex rounded-full h-3 w-3 bg-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 317,
                                                columnNumber: 337
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 317,
                                        columnNumber: 189
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-8ec4ae4a05f922c6" + " " + "text-xs font-black text-slate-600 dark:text-blue-400 uppercase tracking-[0.4em]",
                                        children: "Intelligence Scanner Active"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 317,
                                        columnNumber: 422
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 317,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 316,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 291,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
            lineNumber: 275,
            columnNumber: 9
        }, this), document.body);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-cfb0aa1549696570" + " " + "h-[calc(100vh-140px)] flex flex-col gap-6 font-sans relative px-4 md:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cfb0aa1549696570" + " " + "flex flex-col md:flex-row justify-between items-end gap-6 mb-2 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cfb0aa1549696570",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cfb0aa1549696570" + " " + "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-cfb0aa1549696570" + " " + "text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3",
                                        children: [
                                            "Smart Attendance ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-cfb0aa1549696570" + " " + "text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full",
                                                children: "⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 330,
                                                columnNumber: 139
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this),
                                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        steps: absensiTourSteps
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 331,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 329,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-cfb0aa1549696570" + " " + "text-slate-500 dark:text-slate-400 text-sm font-medium mt-1",
                                children: "Kelola kehadiran organisasi secara efisien dan real-time."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 333,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cfb0aa1549696570" + " " + "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSoundEnabled(!soundEnabled),
                            className: "jsx-cfb0aa1549696570" + " " + "p-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl text-slate-500 hover:text-blue-600 shadow-sm transition-all",
                            children: soundEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 336,
                                columnNumber: 244
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 336,
                                columnNumber: 267
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 336,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: viewMode === 'manage' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "flex-1 overflow-hidden",
                    children: renderManagement()
                }, "manage", false, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 341,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            isClient && renderScannerPortal(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isManualModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-cfb0aa1549696570" + " " + "fixed inset-0 z-[2000] flex items-center justify-center p-6 backdrop-blur-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setIsManualModalOpen(false),
                            className: "absolute inset-0 bg-slate-900/70"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 350,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95
                            },
                            className: "relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-white/20 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cfb0aa1549696570" + " " + "p-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-cfb0aa1549696570" + " " + "flex justify-between items-center mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-cfb0aa1549696570" + " " + "text-xl font-bold text-slate-900 dark:text-white tracking-tight uppercase",
                                                children: "Input Izin / Sakit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 354,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsManualModalOpen(false),
                                                className: "jsx-cfb0aa1549696570" + " " + "p-2 bg-slate-100 dark:bg-white/5 rounded-lg transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 152
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 355,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 353,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleManualSubmit,
                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                        children: "Pilih Pengurus"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        required: true,
                                                        value: manualInput.pengurusId,
                                                        onChange: (e)=>setManualInput({
                                                                ...manualInput,
                                                                pengurusId: e.target.value
                                                            }),
                                                        className: "jsx-cfb0aa1549696570" + " " + "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                className: "jsx-cfb0aa1549696570",
                                                                children: "-- Pilih Nama --"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 37
                                                            }, this),
                                                            pengurusList.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: p.id,
                                                                    className: "jsx-cfb0aa1549696570",
                                                                    children: [
                                                                        p.nama,
                                                                        " (",
                                                                        p.jabatan,
                                                                        ")"
                                                                    ]
                                                                }, p.id, true, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 41
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 358,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                        children: "Status Kehadiran"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setManualInput({
                                                                        ...manualInput,
                                                                        status: 'IZIN'
                                                                    }),
                                                                className: "jsx-cfb0aa1549696570" + " " + `py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${manualInput.status === 'IZIN' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500'}`,
                                                                children: "IZIN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setManualInput({
                                                                        ...manualInput,
                                                                        status: 'SAKIT'
                                                                    }),
                                                                className: "jsx-cfb0aa1549696570" + " " + `py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${manualInput.status === 'SAKIT' ? 'bg-amber-500 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500'}`,
                                                                children: "SAKIT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 367,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "jsx-cfb0aa1549696570" + " " + "w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all",
                                                children: "Simpan Status"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 374,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 357,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 352,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 351,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 349,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-cfb0aa1549696570" + " " + "fixed inset-0 z-[2000] flex items-center justify-center p-6 backdrop-blur-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setIsModalOpen(false),
                            className: "absolute inset-0 bg-slate-900/70"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 386,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95
                            },
                            className: "relative w-full max-w-lg bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-white/20 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cfb0aa1549696570" + " " + "p-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-cfb0aa1549696570" + " " + "flex justify-between items-center mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-cfb0aa1549696570" + " " + "text-xl font-bold text-slate-900 dark:text-white tracking-tight uppercase flex items-center gap-3",
                                                children: [
                                                    modalMode === 'create' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 169
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                        className: "text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 206
                                                    }, this),
                                                    " ",
                                                    modalMode === 'create' ? 'Tambah Sesi Acara' : 'Edit Sesi Acara'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 390,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsModalOpen(false),
                                                className: "jsx-cfb0aa1549696570" + " " + "p-2 bg-slate-100 dark:bg-white/5 rounded-lg hover:bg-rose-500 hover:text-white transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 181
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 391,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 389,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleCreateOrUpdate,
                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                        children: "Nama Kegiatan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 56
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: newAcara.nama,
                                                        onChange: (e)=>setNewAcara({
                                                                ...newAcara,
                                                                nama: e.target.value
                                                            }),
                                                        type: "text",
                                                        placeholder: "e.g. Rapat Koordinasi",
                                                        className: "jsx-cfb0aa1549696570" + " " + "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5 focus:border-blue-500 transition-all shadow-inner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 131
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 394,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-cfb0aa1549696570" + " " + `p-2 rounded-lg ${newAcara.autoStart ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-400'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                    size: 16,
                                                                    fill: newAcara.autoStart ? "currentColor" : "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 169
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-cfb0aa1549696570",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-cfb0aa1549696570" + " " + "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-tight",
                                                                        children: "Auto Start Session"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-cfb0aa1549696570" + " " + "text-[10px] font-medium text-slate-500",
                                                                        children: "Mulai otomatis saat waktu tiba"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setNewAcara({
                                                                ...newAcara,
                                                                autoStart: !newAcara.autoStart
                                                            }),
                                                        className: "jsx-cfb0aa1549696570" + " " + `w-12 h-6 rounded-full transition-all relative ${newAcara.autoStart ? 'bg-blue-600' : 'bg-slate-300 dark:bg-white/10'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-cfb0aa1549696570" + " " + `absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${newAcara.autoStart ? 'left-7' : 'left-1'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 262
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 396,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                        children: "Tipe Absensi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 56
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setNewAcara({
                                                                        ...newAcara,
                                                                        tipe: 'SEKALI_PAKAI'
                                                                    }),
                                                                className: "jsx-cfb0aa1549696570" + " " + `py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${newAcara.tipe === 'SEKALI_PAKAI' ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-white/5 text-slate-500'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 546
                                                                    }, this),
                                                                    " Sekali Pakai"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 170
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setNewAcara({
                                                                        ...newAcara,
                                                                        tipe: 'RUTINAN'
                                                                    }),
                                                                className: "jsx-cfb0aa1549696570" + " " + `py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${newAcara.tipe === 'RUTINAN' ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-white/5 text-slate-500'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 953
                                                                    }, this),
                                                                    " Rutinan"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 587
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 130
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 407,
                                                columnNumber: 29
                                            }, this),
                                            newAcara.tipe === 'RUTINAN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-3 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-500/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest",
                                                        children: "Pilih Hari Rutinan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "flex flex-wrap gap-2",
                                                        children: DAYS_LIST.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleDayToggle(day),
                                                                className: "jsx-cfb0aa1549696570" + " " + `px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${newAcara.hari?.split(',').includes(day) ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-500 border border-slate-100 dark:border-white/5'}`,
                                                                children: day
                                                            }, day, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 410,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                                children: "Jam Mulai"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 60
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: newAcara.waktuMulai,
                                                                onChange: (e)=>setNewAcara({
                                                                        ...newAcara,
                                                                        waktuMulai: e.target.value
                                                                    }),
                                                                type: "time",
                                                                className: "jsx-cfb0aa1549696570" + " " + "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5 focus:border-blue-500 transition-all shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 131
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                                children: "Jam Selesai"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 60
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: newAcara.waktuSelesai,
                                                                onChange: (e)=>setNewAcara({
                                                                        ...newAcara,
                                                                        waktuSelesai: e.target.value
                                                                    }),
                                                                type: "time",
                                                                className: "jsx-cfb0aa1549696570" + " " + "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/10 focus:border-blue-500 transition-all shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 133
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 419,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                                children: "Tanggal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 60
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: newAcara.tanggal,
                                                                onChange: (e)=>setNewAcara({
                                                                        ...newAcara,
                                                                        tanggal: e.target.value
                                                                    }),
                                                                type: "date",
                                                                className: "jsx-cfb0aa1549696570" + " " + "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/10 focus:border-blue-500 transition-all shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 129
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                                children: "Lokasi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 60
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: newAcara.lokasi,
                                                                onChange: (e)=>setNewAcara({
                                                                        ...newAcara,
                                                                        lokasi: e.target.value
                                                                    }),
                                                                type: "text",
                                                                placeholder: "Location",
                                                                className: "jsx-cfb0aa1549696570" + " " + "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/10 focus:border-blue-500 transition-all shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 128
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 423,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: isSubmitting,
                                                type: "submit",
                                                className: "jsx-cfb0aa1549696570" + " " + "w-full mt-4 py-5 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all",
                                                children: isSubmitting ? "Processing..." : modalMode === 'create' ? 'Create Event Session' : 'Save Changes'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 427,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 393,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 388,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 387,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 385,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "cfb0aa1549696570",
                children: ".custom-scrollbar::-webkit-scrollbar{width:4px}.custom-scrollbar::-webkit-scrollbar-thumb{background:#3b82f6;border-radius:10px}.dark .custom-scrollbar::-webkit-scrollbar-thumb{background:#1e293b}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
_s(ScanClient, "y7YOuGVyeo1FSsRGeSyseBfjGqE=");
_c1 = ScanClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "FloatingIcon");
__turbopack_context__.k.register(_c1, "ScanClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_bc507f52._.js.map