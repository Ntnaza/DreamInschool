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
"[project]/lib/data:342b08 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scanAbsensi",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"407dfa88239647bb7a0c261efad9599ece274a7c63":"scanAbsensi"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("407dfa88239647bb7a0c261efad9599ece274a7c63", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "scanAbsensi");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEhFTFBFUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvbnRlbiA9IGZvcm1EYXRhLmdldChcImtvbnRlblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSAoZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nKSB8fCBcIlVtdW1cIjtcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgaWYgKCFqdWR1bCB8fCAha29udGVuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCAmIEtvbnRlbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2x1ZyA9IGAke3NsdWdpZnkoanVkdWwpfS0ke0RhdGUubm93KCl9YDtcclxuXHJcbiAgLy8gPT09IFBFUkJBSUtBTiBESSBTSU5JID09PVxyXG4gIC8vIDEuIEtpdGEgY2FyaSBkdWx1IHVzZXIgKEFkbWluKSB5YW5nIGFkYSBkaSBkYXRhYmFzZVxyXG4gIC8vIE5hbnRpIGthbGF1IHN1ZGFoIGFkYSBsb2dpbiwga2l0YSBhbWJpbCBkYXJpIHNlc3Npb24gdXNlciB5YW5nIGxvZ2luXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KCk7XHJcblxyXG4gIGlmICghYWRtaW5Vc2VyKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvcjogQmVsdW0gYWRhIFVzZXIvQWRtaW4gZGkgZGF0YWJhc2UhXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhciB8fCBudWxsLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDIuIEh1YnVuZ2thbiBrZSBJRCBVc2VyIHlhbmcgZGl0ZW11a2FuIHRhZGlcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSmFuZ2FuIHBha2FpICdwZW51bGlzOiBcIkFkbWluIE9TSVNcIicsIGl0dSBzYWxhaC5cclxuICAgICAgICBzdGF0dXM6IFwiUFVCTElTSEVEXCIsXHJcbiAgICAgICAgdmlld3M6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9iZXJpdGFcIik7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgdGVyYml0ISDwn5OwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmVyYml0a2FuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgdmFsaWQuXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb250ZW4gPSBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAga29udGVuLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIC4uLihnYW1iYXIgJiYgeyBnYW1iYXIgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaXBlcmJhcnVpISDwn5OdXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCZXJpdGEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDQuIE1BTkFKRU1FTiBQUk9HUkFNIEtFUkpBIChVUERBVEUgRklYKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgLy8gQW1iaWwgZGF0YSBzZXN1YWkgbmFtYSBmaWVsZCBkaSBGcm9udGVuZFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJpb3JpdGFzID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nOyAvLyBGcm9udGVuZCBraXJpbSAncHJpb3JpdHknLCBEQiBzaW1wYW4gJ3ByaW9yaXRhcydcclxuICBjb25zdCBhbmdnYXJhbiA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbmdnYXJhblwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGNvbnN0IGxva2FzaSA9IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmc7IC8vIFBJQyBkaXNpbXBhbiBkaSBrb2xvbSBsb2thc2lcclxuICBcclxuICAvLyDinIUgRklUVVIgQkFSVTogSW1hZ2UgJiBGZWF0dXJlZFxyXG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nOyBcclxuICBjb25zdCBpc0ZlYXR1cmVkID0gZm9ybURhdGEuZ2V0KFwiaXNGZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIC8vIERhdGUgSGFuZGxpbmdcclxuICBjb25zdCBzdGFydERhdGVSYXcgPSBmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVJhdyA/IG5ldyBEYXRlKHN0YXJ0RGF0ZVJhdykgOiBudWxsO1xyXG4gIGNvbnN0IGRlYWRsaW5lUmF3ID0gZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlYWRsaW5lID0gZGVhZGxpbmVSYXcgPyBuZXcgRGF0ZShkZWFkbGluZVJhdykgOiBudWxsO1xyXG5cclxuICAvLyBNYXBwaW5nIFN0YXR1cyBMb2dpYyAoT3RvbWF0aXMgYXRhdSBNYW51YWwgZGFyaSBGcm9udGVuZClcclxuICAvLyBLaXRhIHBha2FpIHN0YXR1cyBtYW51YWwga2FsYXUgZGlraXJpbSwga2FsYXUgbmdnYWsgcGFrYWkgbG9naWMgcHJvZ3Jlc3NcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBwcmlvcml0YXMsXHJcbiAgICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdHVzLCAvLyBTaW1wYW4gc3RhdHVzXHJcbiAgICAgICAgbG9rYXNpLCAvLyBQSUNcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgZGVhZGxpbmUsXHJcbiAgICAgICAgaW1hZ2U6IGltYWdlIHx8IG51bGwsIC8vIFNpbXBhbiBHYW1iYXJcclxuICAgICAgICBpc0ZlYXR1cmVkOiBpc0ZlYXR1cmVkIC8vIFNpbXBhbiBTdGF0dXMgVW5nZ3VsYW5cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZnJlc2ggaGFsYW1hbiBBZG1pbiAmIEhvbWVwYWdlIChrYXJlbmEgYWRhIHNlY3Rpb24gUHJvZ3JhbSBVbmdndWxhbilcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaWJ1YXQhIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ1JFQVRFIFBST0tFUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtYnVhdCBwcm9rZXIuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBwcmlvcml0YXMgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYW5nZ2FyYW4gPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzRmVhdHVyZWQgPSBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgY29uc3Qgc3RhcnREYXRlUmF3ID0gZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGFydERhdGUgPSBzdGFydERhdGVSYXcgPyBuZXcgRGF0ZShzdGFydERhdGVSYXcpIDogbnVsbDtcclxuICBjb25zdCBkZWFkbGluZVJhdyA9IGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZWFkbGluZSA9IGRlYWRsaW5lUmF3ID8gbmV3IERhdGUoZGVhZGxpbmVSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gU3RhdHVzIExvZ2ljIFVwZGF0ZVxyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBkZXNrcmlwc2ksXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHByaW9yaXRhcyxcclxuICAgICAgICBhbmdnYXJhbixcclxuICAgICAgICBwcm9ncmVzcyxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgbG9rYXNpLFxyXG4gICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICBkZWFkbGluZSxcclxuICAgICAgICBpc0ZlYXR1cmVkLFxyXG4gICAgICAgIC8vIFVwZGF0ZSBnYW1iYXIgQ1VNQSBqaWthIHVzZXIgdXBsb2FkIGJhcnUgKHN0cmluZyB0aWRhayBrb3NvbmcpXHJcbiAgICAgICAgLi4uKGltYWdlICYmIHsgaW1hZ2UgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaXVwZGF0ZSEg4pyoXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBwcm9rZXIuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdhbnRpIG5hbWEgZGVsZXRlUHJva2VyIGphZGkgZGVsZXRlUHJvZ3JhbUtlcmphIGJpYXIga29uc2lzdGVuIHNhbWEgZnJvbnRlbmRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBNQU5BSkVNRU4gUEVOR1VSVVMgKExFTkdLQVApXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIDEuIEFtYmlsIERhdGEgV2FqaWJcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyAyLiBBbWJpbCBEYXRhIFRhbWJhaGFuXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGFzaSA9IGZvcm1EYXRhLmdldChcInRyYW5zcG9ydGFzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbW90dG8gPSBmb3JtRGF0YS5nZXQoXCJtb3R0b1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImZvdG9VcmxcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIOKchSBEQVRBIEJBUlU6IFZJU0kgJiBNSVNJIChEaXRhbmdrYXAgZGFyaSBGb3JtRGF0YSlcclxuICBjb25zdCB2aXNpID0gZm9ybURhdGEuZ2V0KFwidmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbWlzaSA9IGZvcm1EYXRhLmdldChcIm1pc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIENlayBUYW5nZ2FsIExhaGlyIChDb252ZXJ0IHN0cmluZyBrZSBEYXRlKVxyXG4gIGNvbnN0IHRnbExhaGlyUmF3ID0gZm9ybURhdGEuZ2V0KFwidGdsTGFoaXJcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRnbExhaGlyID0gdGdsTGFoaXJSYXcgPyBuZXcgRGF0ZSh0Z2xMYWhpclJhdykgOiBudWxsO1xyXG5cclxuICAvLyBDZWsgYXBha2FoIEd1cnUvUGVtYmluYVxyXG4gIGNvbnN0IGlzQWR2aXNvciA9IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIC8vIFZhbGlkYXNpIERhc2FyXHJcbiAgaWYgKCFuYW1hIHx8ICFuaXMgfHwgIWphYmF0YW4pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5hbWEsIE5JUy9OSVAsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIG5pcyxcclxuICAgICAgICBrZWxhczoga2VsYXMgfHwgXCItXCIsXHJcbiAgICAgICAgamFiYXRhbixcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgaHAsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgaW5zdGFncmFtLFxyXG4gICAgICAgIHRpa3RvayxcclxuICAgICAgICBkb21pc2lsaSxcclxuICAgICAgICB0cmFuc3BvcnRhc2ksXHJcbiAgICAgICAgbW90dG8sXHJcbiAgICAgICAgLy8g4pyFIFNJTVBBTiBWSVNJICYgTUlTSSBLRSBEQVRBQkFTRVxyXG4gICAgICAgIHZpc2k6IHZpc2kgfHwgbnVsbCwgXHJcbiAgICAgICAgbWlzaTogbWlzaSB8fCBudWxsLFxyXG4gICAgICAgIHRnbExhaGlyLFxyXG4gICAgICAgIGZvdG9Vcmw6IGZvdG9VcmwgfHwgbnVsbCxcclxuICAgICAgICBzdGF0dXM6IFwiQUtUSUZcIixcclxuICAgICAgICBpc0Fkdmlzb3I6IGlzQWR2aXNvclxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGJlcmhhc2lsIGRpdGFtYmFoa2FuISDwn5GkXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuYW1iYWggZGF0YS4gTklTIG11bmdraW4gc3VkYWggdGVyZGFmdGFyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgLy8gQW1iaWwgc2VtdWEgZGF0YSBpbnB1dFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBuaXMgPSBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGphYmF0YW4gPSBmb3JtRGF0YS5nZXQoXCJqYWJhdGFuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFLVElGXCIgfCBcIk5PTkFLVElGXCIgfCBcIkFMVU1OSVwiO1xyXG4gIFxyXG4gIC8vIERhdGEgVGFtYmFoYW5cclxuICBjb25zdCBocCA9IGZvcm1EYXRhLmdldChcImhwXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpbnN0YWdyYW0gPSBmb3JtRGF0YS5nZXQoXCJpbnN0YWdyYW1cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRpa3RvayA9IGZvcm1EYXRhLmdldChcInRpa3Rva1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZG9taXNpbGkgPSBmb3JtRGF0YS5nZXQoXCJkb21pc2lsaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdHJhbnNwb3J0YXNpID0gZm9ybURhdGEuZ2V0KFwidHJhbnNwb3J0YXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtb3R0byA9IGZvcm1EYXRhLmdldChcIm1vdHRvXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8g4pyFIERBVEEgQkFSVTogVklTSSAmIE1JU0kgKFVwZGF0ZSlcclxuICBjb25zdCB2aXNpID0gZm9ybURhdGEuZ2V0KFwidmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbWlzaSA9IGZvcm1EYXRhLmdldChcIm1pc2lcIikgYXMgc3RyaW5nO1xyXG5cclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogdW5kZWZpbmVkOyBcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgamFiYXRhbixcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIC8vIOKchSBVUERBVEUgVklTSSAmIE1JU0lcclxuICAgICAgICB2aXNpLCBcclxuICAgICAgICBtaXNpLFxyXG4gICAgICAgIC8vIFVwZGF0ZSB0YW5nZ2FsIGxhaGlyIGN1bWEga2FsYXUgYWRhIGlucHV0IGJhcnVcclxuICAgICAgICAuLi4odGdsTGFoaXIgJiYgeyB0Z2xMYWhpciB9KSxcclxuICAgICAgICAvLyBVcGRhdGUgZm90byBjdW1hIGthbGF1IGFkYSBmb3RvIGJhcnUgeWFuZyBkaWtpcmltXHJcbiAgICAgICAgLi4uKGZvdG9VcmwgJiYgeyBmb3RvVXJsIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSEg8J+TnVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBkYXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGVuZ3VydXMoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUlkQ2FyZERlc2lnbihpZDogbnVtYmVyLCBkZXNpZ25Vcmw6IHN0cmluZyB8IG51bGwpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBJRCBDQVJEIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJZENhcmRCYWNrZ3JvdW5kKGltYWdlVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IDEgfSxcclxuICAgICAgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSxcclxuICAgICAgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU0FWRSBCRyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBTSVNURU0gQUJTRU5TSSAoU0NBTk5FUilcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2NhbkFic2Vuc2kobmlzOiBzdHJpbmcpIHtcclxuICBpZiAoIW5pcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUVIgQ29kZSBrb3NvbmchXCIgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIDEuIENhcmkgUGVuZ3VydXMgYmVyZGFzYXJrYW4gTklTXHJcbiAgICBjb25zdCBwZW5ndXJ1cyA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgbmlzOiBuaXMgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGVuZ3VydXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4p2MIFFSIENvZGUgVGlkYWsgVGVyZGFmdGFyIVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlbmd1cnVzLnN0YXR1cyAhPT0gXCJBS1RJRlwiKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBBbmdnb3RhIFRpZGFrIEFrdGlmL0FsdW1uaVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gQ2VrIGFwYWthaCBzdWRhaCBhYnNlbiBoYXJpIGluaT8gKE9wc2lvbmFsOiBDZWdhaCBzcGFtIHNjYW4pXHJcbiAgICBjb25zdCB0b2RheVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5U3RhcnQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZGF5RW5kID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5RW5kLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdMb2cgPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLFxyXG4gICAgICAgIHRhbmdnYWw6IHtcclxuICAgICAgICAgIGd0ZTogdG9kYXlTdGFydCxcclxuICAgICAgICAgIGx0ZTogdG9kYXlFbmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0xvZykge1xyXG4gICAgICAvLyBLYWxhdSBzdWRhaCBhYnNlbiwga2l0YSB0ZXRhcCByZXR1cm4gc3VjY2VzcyB0YXBpIGthc2loIGluZm8gXCJTdWRhaCBBYnNlblwiXHJcbiAgICAgIC8vIEJpYXIgVUkgdGV0YXAgbWVuYW1waWxrYW4gcHJvZmlsbnlhLCB0YXBpIHN0YXR1c255YSBiZWRhLlxyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBtZXNzYWdlOiBcIkthbXUgc3VkYWggYWJzZW4gaGFyaSBpbmkhIPCfkYxcIiwgXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgIG5hbWU6IHBlbmd1cnVzLm5hbWEsXHJcbiAgICAgICAgICAgcm9sZTogcGVuZ3VydXMuamFiYXRhbixcclxuICAgICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgICBzdGF0dXM6IFwiRFVQTElDQVRFXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDMuIFNpbXBhbiBrZSBUYWJlbCBBYnNlbnNpXHJcbiAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsXHJcbiAgICAgICAga2VnaWF0YW46IFwiQWJzZW5zaSBIYXJpYW5cIiwgLy8gU2VtZW50YXJhIGhhcmRjb2RlIGR1bHVcclxuICAgICAgICBzdGF0dXM6IFwiSEFESVJcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gNC4gUmV0dXJuIERhdGEgUGVuZ3VydXMga2UgRnJvbnRlbmRcclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgbWVzc2FnZTogXCJBYnNlbnNpIEJlcmhhc2lsISDinIVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgICBuYW1lOiBwZW5ndXJ1cy5uYW1hLFxyXG4gICAgICAgICByb2xlOiBwZW5ndXJ1cy5qYWJhdGFuLFxyXG4gICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgc3RhdHVzOiBcIkhBRElSXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQ0FOIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXJ2ZXIgRXJyb3IuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBNQU5BSkVNRU4gS0VVQU5HQU4gKEtBUyAmIEFOR0dBUkFOKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIENhdGF0IFRyYW5zYWtzaSBLYXMgVW11bVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2VuZXJhbFRyeChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgdGlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJQRU1BU1VLQU5cIiB8IFwiUEVOR0VMVUFSQU5cIjtcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGljID0gZm9ybURhdGEuZ2V0KFwicGljXCIpIGFzIHN0cmluZzsgLy8gS2V0ZXJhbmdhbiBQSUNcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgIGtldGVyYW5nYW46IGBQSUM6ICR7cGljfWAsIC8vIFNpbXBhbiBQSUMgZGkga2V0ZXJhbmdhblxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJUcmFuc2Frc2kgYmVyaGFzaWwgZGljYXRhdCEg8J+SsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmNhdGF0IHRyYW5zYWtzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gQnVrYSBBbmdnYXJhbiBFdmVudCBCYXJ1IChQaW5kYWggQnVrdTogS2FzIFVtdW0gLT4gRXZlbnQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hRXZlbnQgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYnVkZ2V0ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gQS4gQ2F0YXQgUEVOR0VMVUFSQU4gZGkgS2FzIFVtdW1cclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWw6IGBNb2RhbCBFdmVudDogJHtuYW1hRXZlbnR9YCxcclxuICAgICAgICBub21pbmFsOiBidWRnZXQsXHJcbiAgICAgICAgdGlwZTogXCJQRU5HRUxVQVJBTlwiLFxyXG4gICAgICAgIGthdGVnb3JpOiBcIkFuZ2dhcmFuIEV2ZW50XCIsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAga2V0ZXJhbmdhbjogXCJBbG9rYXNpIGRhbmEga2UgZXZlbnQgYmFydVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gQnVhdCBEYXRhIFByb2tlciBCYXJ1IChTdGF0dXM6IEFDVElWRSlcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWE6IG5hbWFFdmVudCxcclxuICAgICAgICBhbmdnYXJhbjogYnVkZ2V0LFxyXG4gICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IDAsXHJcbiAgICAgICAgc3RhdHVzOiBcIklOX1BST0dSRVNTXCIsIC8vIEFuZ2dhcCBldmVudCBzZWRhbmcgamFsYW5cclxuICAgICAgICBkaXZpc2k6IFwiS2VwYW5pdGlhYW5cIiwgLy8gRGVmYXVsdCBkaXZpc2lcclxuICAgICAgICBkZWFkbGluZTogbmV3IERhdGUoZGF0ZVN0ciksIC8vIFNlbWVudGFyYSBwYWthaSB0Z2wgdHJhbnNha3NpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBbmdnYXJhbiBFdmVudCBiZXJoYXNpbCBkaWJ1a2EhIPCfjolcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWthIGFuZ2dhcmFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBDYXRhdCBUcmFuc2Frc2kgUGVuZ2VsdWFyYW4gRXZlbnRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50VHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGV2ZW50SWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZXZlbnRJZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIEEuIFNpbXBhbiBUcmFuc2Frc2kgKExpbmtlZCBrZSBQcm9rZXJJRClcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAga2F0ZWdvcmk6IFwiUGVuZ2VsdWFyYW4gRXZlbnRcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBwcm9rZXJJZDogZXZlbnRJZCwgLy8gTGluayBrZSBFdmVudFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gVXBkYXRlICdhbmdnYXJhblRlcnBha2FpJyBkaSB0YWJlbCBQcm9rZXJcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGV2ZW50SWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IHsgaW5jcmVtZW50OiBub21pbmFsIH0gLy8gVGFtYmFoIG90b21hdGlzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5nZWx1YXJhbiBldmVudCBkaWNhdGF0ISDwn6e+XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGRhdGEgZXZlbnQuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA5LiBNQU5BSkVNRU4gSU5WRU5UQVJJU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIFRhbWJhaC9FZGl0IEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUludmVudGFyaXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29kZSA9IGZvcm1EYXRhLmdldChcImNvZGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGhhcmdhID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByaWNlXCIpKTtcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHNlcmlhbCA9IGZvcm1EYXRhLmdldChcInNlcmlhbFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gRWRpdFxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWRSYXcpIH0sXHJcbiAgICAgICAgZGF0YTogeyBuYW1hLCBrb2RlLCBrYXRlZ29yaSwgaGFyZ2EsIHNlcmlhbE51bTogc2VyaWFsLCAuLi4oZm90b1VybCAmJiB7IGZvdG9VcmwgfSkgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZVxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgICAgbmFtYSwga29kZSwga2F0ZWdvcmksIGhhcmdhLCBzZXJpYWxOdW06IHNlcmlhbCwgZm90b1VybCwgXHJcbiAgICAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBrb25kaXNpOiBcIkJhaWtcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBhc2V0IHRlcnNpbXBhbiEg8J+TplwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbnlpbXBhbiBhc2V0LlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBIYXB1cyBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludmVudGFyaXMoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIFBpbmphbSBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBpbmphbUJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcGVtaW5qYW0gPSBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBcIkJPUlJPV0VEXCIsXHJcbiAgICAgICAgcGVtaW5qYW06IHBlbWluamFtLFxyXG4gICAgICAgIHRnbFBpbmphbTogbmV3IERhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJhcmFuZyBiZXJoYXNpbCBkaXBpbmphbSEg8J+VklwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbXByb3NlcyBwZW1pbmphbWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA0LiBLZW1iYWxpa2FuIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24ga2VtYmFsaWthbkJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3Qga29uZGlzaSA9IGZvcm1EYXRhLmdldChcImNvbmRpdGlvblwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIC8vIEFtYmlsIGRhdGEgYmFyYW5nIGR1bHUgYnVhdCB0YXUgc2lhcGEgcGVtaW5qYW0gdGVyYWtoaXJcclxuICAgIGNvbnN0IGJhcmFuZyA9IGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgaWYgKCFiYXJhbmcgfHwgIWJhcmFuZy5wZW1pbmphbSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICAgIC8vIEEuIFNpbXBhbiBrZSBSaXdheWF0XHJcbiAgICBhd2FpdCBwcmlzbWEucml3YXlhdEFzZXQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGludmVudGFyaXNJZDogaWQsXHJcbiAgICAgICAgcGVtaW5qYW06IGJhcmFuZy5wZW1pbmphbSxcclxuICAgICAgICB0Z2xLZWx1YXI6IGJhcmFuZy50Z2xQaW5qYW0gfHwgbmV3IERhdGUoKSxcclxuICAgICAgICB0Z2xLZW1iYWxpOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGtvbmRpc2lLZW1iYWxpOiBrb25kaXNpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEIuIFJlc2V0IFN0YXR1cyBCYXJhbmdcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IGtvbmRpc2kgPT09IFwiUnVzYWtcIiA/IFwiTUFJTlRFTkFOQ0VcIiA6IFwiQVZBSUxBQkxFXCIsXHJcbiAgICAgICAga29uZGlzaToga29uZGlzaSxcclxuICAgICAgICBwZW1pbmphbTogbnVsbCxcclxuICAgICAgICB0Z2xQaW5qYW06IG51bGxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFyYW5nIHN1ZGFoIGRpa2VtYmFsaWthbiEg4pyFXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcHJvc2VzIHBlbmdlbWJhbGlhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEwLiBNQU5BSkVNRU4gR0FMRVJJIEtFR0lBVEFOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVHYWxlcmkoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBBbWJpbCBKU09OIHN0cmluZyBkYXJpIGZvcm0gY2xpZW50XHJcbiAgY29uc3QgaW1hZ2VzSnNvbiA9IGZvcm1EYXRhLmdldChcImltYWdlc1wiKSBhcyBzdHJpbmc7IFxyXG5cclxuICBpZiAoIWp1ZHVsIHx8ICFpbWFnZXNKc29uKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCBkYW4gbWluaW1hbCAxIEZvdG8gd2FqaWIgZGlpc2khXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gTU9ERSBFRElUXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb24gLy8gU2ltcGFuIHNlYmFnYWkgSlNPTiBTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTU9ERSBCQVJVXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCwga2F0ZWdvcmksIGRlc2tyaXBzaSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWwpLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXNKc29uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiR2FsZXJpIGJlcmhhc2lsIGRpc2ltcGFuISDwn5O4XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkdBTEVSSSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGdhbGVyaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhRQXdmc0IsMExBQUEifQ==
}),
"[project]/app/admin/absensi/ScanClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScanClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-face.js [app-client] (ecmascript) <export default as ScanFace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-client] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$342b08__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:342b08 [app-client] (ecmascript) <text/javascript>"); // 👈 Import Action Server
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// DEFINISI LANGKAH TUR
const absensiTourSteps = [
    {
        target: '.tour-absensi-header',
        content: 'Halaman Smart Attendance untuk pencatatan kehadiran.',
        disableBeacon: true
    },
    {
        target: '.tour-camera-viewport',
        content: 'Arahkan QR Code ke area ini.'
    },
    {
        target: '.tour-simulation-controls',
        content: 'Gunakan tombol ini untuk tes scan manual (Input NIS).'
    },
    {
        target: '.tour-stats-cards',
        content: 'Pantau jumlah kehadiran real-time.',
        placement: 'left'
    },
    {
        target: '.tour-live-log',
        content: 'Log aktivitas terbaru muncul di sini.',
        placement: 'left'
    }
];
function ScanClient() {
    _s();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [scanResult, setScanResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isScanning, setIsScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [soundEnabled, setSoundEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State untuk input manual NIS (Pengganti Kamera sementara)
    const [manualNis, setManualNis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanClient.useEffect": ()=>{
            setIsClient(true);
        }
    }["ScanClient.useEffect"], []);
    const totalHadir = logs.filter((l)=>l.status === 'HADIR').length;
    const duplicateLog = logs.filter((l)=>l.status === 'DUPLICATE').length;
    // --- LOGIC SCAN ---
    const handleScan = async (nis)=>{
        if (!isScanning || !nis) return;
        // Matikan scan sementara biar gak double
        setIsScanning(false);
        try {
            // Panggil Server Action
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$342b08__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["scanAbsensi"])(nis);
            const timestamp = new Date().toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit'
            });
            if (result.success && result.data) {
                // Sukses
                const newLog = {
                    ...result.data,
                    time: timestamp,
                    status: result.data.status,
                    scanId: Date.now()
                };
                setScanResult({
                    type: 'success',
                    data: newLog,
                    message: result.message
                });
                setLogs((prev)=>[
                        newLog,
                        ...prev
                    ]);
                // Efek Suara (Opsional)
                if (soundEnabled) {
                    const audio = new Audio('/beep.mp3'); // Pastikan ada file beep.mp3 di public folder (opsional)
                    audio.play().catch(()=>{});
                }
            } else {
                // Gagal (NIS tidak ditemukan)
                setScanResult({
                    type: 'error',
                    message: result.message
                });
            }
        } catch (error) {
            setScanResult({
                type: 'error',
                message: "Koneksi Error"
            });
        }
        // Reset Scanner setelah 2.5 detik
        setTimeout(()=>{
            setScanResult(null);
            setIsScanning(true);
        }, 2500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh-6rem)] flex flex-col xl:flex-row gap-6 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full xl:w-auto flex flex-col gap-6 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex justify-between items-center tour-absensi-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold font-black text-slate-900 dark:text-white flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-2 bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__["ScanFace"], {
                                                    size: 22
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 117
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this),
                                            "Smart Attendance"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 94,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 dark:text-slate-400 text-xs mt-1 font-bold pl-1 flex items-center gap-2",
                                        children: [
                                            "Status: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-2 w-2 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-flex rounded-full h-2 w-2 bg-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 177
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 99,
                                                columnNumber: 27
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-600 dark:text-green-400",
                                                children: "System Ready"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 99,
                                                columnNumber: 265
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 98,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        steps: absensiTourSteps
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSoundEnabled(!soundEnabled),
                                        className: "p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-200 dark:border-white/10",
                                        children: soundEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 106,
                                            columnNumber: 35
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 106,
                                            columnNumber: 58
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 105,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                        lineNumber: 92,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full xl:w-[480px] aspect-square bg-[#020617] rounded-2xl relative overflow-hidden shadow-2xl border border-slate-800 group ring-1 ring-slate-900/50 tour-camera-viewport",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0a0f1e] to-slate-900 z-0"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-30 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex flex-col items-center justify-center p-8 z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full h-full rounded-xl overflow-hidden backdrop-blur-sm border border-blue-500/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-blue-500 rounded-tl-lg drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-blue-500 rounded-tr-lg drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-blue-500 rounded-bl-lg drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-blue-500 rounded-br-lg drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            isScanning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    top: [
                                                        "0%",
                                                        "100%",
                                                        "0%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                },
                                                className: "absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_25px_rgba(59,130,246,1)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 126,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: scanResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0.9
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        scale: 0.9,
                                                        transition: {
                                                            duration: 0.2
                                                        }
                                                    },
                                                    className: `absolute inset-0 flex flex-col items-center justify-center text-center p-6 backdrop-blur-xl ${scanResult.type === 'success' ? 'bg-green-900/80' : 'bg-red-900/80'}`,
                                                    children: scanResult.type === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-24 h-24 rounded-full p-1.5 bg-green-500 mb-4 shadow-xl shadow-green-500/50 ring-4 ring-green-500/30",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative w-full h-full rounded-full overflow-hidden border-2 border-white",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: scanResult.data.image || "https://source.unsplash.com/random/100x100/?portrait",
                                                                        alt: "User",
                                                                        fill: true,
                                                                        className: "object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 37
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xl font-black text-white mb-1 tracking-tight",
                                                                children: scanResult.data.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-green-200 uppercase tracking-widest mb-6",
                                                                children: scanResult.data.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-5 py-2 bg-white text-green-700 rounded-lg font-black text-xs flex items-center gap-2 shadow-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        size: 16,
                                                                        strokeWidth: 3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    " ",
                                                                    scanResult.message
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 bg-red-500/20 rounded-full mb-4 ring-4 ring-red-500/30",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                    size: 64,
                                                                    className: "text-red-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 37
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-2xl font-black text-white mb-2",
                                                                children: "GAGAL SCAN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-red-200 font-medium bg-red-950/50 px-4 py-2 rounded-lg",
                                                                children: scanResult.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 117,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-12 bg-[#0f172a]/80 backdrop-blur-md px-5 py-2.5 rounded-lg border border-white/10 flex items-center gap-3 shadow-lg z-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__["ScanFace"], {
                                                size: 16,
                                                className: "text-blue-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-100 text-[10px] font-bold tracking-wider uppercase",
                                                children: "Posisikan QR Code dalam Bingkai"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 166,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-3 left-1/2 -translate-x-1/2 z-50 p-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 flex gap-2 shadow-xl tour-simulation-controls w-[90%]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Input NIS Manual (Simulasi Scan)...",
                                        className: "flex-1 bg-black/50 text-white text-xs px-3 py-2 rounded-md outline-none border border-white/10 focus:border-blue-500",
                                        value: manualNis,
                                        onChange: (e)=>setManualNis(e.target.value),
                                        onKeyDown: (e)=>e.key === 'Enter' && handleScan(manualNis)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 174,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleScan(manualNis),
                                        className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold rounded-md shadow flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this),
                                            " SCAN"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 182,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                        lineNumber: 112,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col gap-6 h-full min-w-[300px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 tour-stats-cards",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-2xl text-white shadow-xl shadow-blue-600/20 relative overflow-hidden border border-blue-500/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -right-4 -bottom-4 opacity-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            size: 80
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 195,
                                            columnNumber: 72
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 195,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-black uppercase opacity-80 mb-1 tracking-wider",
                                        children: "Hadir Baru"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 196,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-black",
                                        children: totalHadir
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 197,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/60 dark:shadow-none relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -right-4 -bottom-4 opacity-5 text-slate-900 dark:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            size: 80
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 200,
                                            columnNumber: 102
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 200,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase mb-1 tracking-wider",
                                        children: "Terdeteksi Ganda"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 201,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-black text-yellow-500",
                                        children: duplicateLog
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 202,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                        lineNumber: 193,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-md flex flex-col overflow-hidden tour-live-log",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50/80 dark:bg-white/5 backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-black text-sm text-slate-800 dark:text-white flex items-center gap-2 uppercase tracking-wide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 16,
                                                className: "text-yellow-500",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this),
                                            " Live Activity"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 209,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-2 w-2 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 212,
                                                columnNumber: 56
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2 w-2 bg-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 212,
                                                columnNumber: 165
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 212,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar bg-slate-50/30 dark:bg-transparent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full flex flex-col items-center justify-center text-slate-300 dark:text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                size: 64,
                                                strokeWidth: 1.5,
                                                className: "mb-4 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 219,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-black uppercase tracking-widest",
                                                children: "Menunggu Scan..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 220,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 218,
                                        columnNumber: 22
                                    }, this) : logs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 20,
                                                scale: 0.95
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0,
                                                scale: 1
                                            },
                                            exit: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            className: "flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0 border-2 border-white dark:border-white/10 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: log.image || "https://source.unsplash.com/random/100x100/?portrait",
                                                        alt: log.name,
                                                        fill: true,
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 28
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-black text-slate-900 dark:text-white truncate",
                                                            children: log.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-slate-500 truncate uppercase tracking-wider",
                                                            children: log.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 28
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-black text-slate-800 dark:text-slate-200",
                                                            children: log.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 31
                                                        }, this),
                                                        log.status === 'DUPLICATE' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] font-black text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded-md inline-block mt-0.5 uppercase",
                                                            children: "Double"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 34
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] font-black text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-md inline-block mt-0.5 uppercase",
                                                            children: "Hadir"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, log.scanId, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 224,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 216,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                        lineNumber: 207,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(ScanClient, "5M0uAVBu2Hx5I+AoFeKb8iQctkk=");
_c = ScanClient;
var _c;
__turbopack_context__.k.register(_c, "ScanClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_70efba68._.js.map