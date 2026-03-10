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
"[project]/lib/data:8ece33 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPengurus",
    ()=>$$RSC_SERVER_ACTION_9
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40c34336bc3a90a247d840cb8f741432e235bc6168":"createPengurus"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c34336bc3a90a247d840cb8f741432e235bc6168", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createPengurus");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEhFTFBFUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvbnRlbiA9IGZvcm1EYXRhLmdldChcImtvbnRlblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSAoZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nKSB8fCBcIlVtdW1cIjtcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgaWYgKCFqdWR1bCB8fCAha29udGVuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCAmIEtvbnRlbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2x1ZyA9IGAke3NsdWdpZnkoanVkdWwpfS0ke0RhdGUubm93KCl9YDtcclxuXHJcbiAgLy8gPT09IFBFUkJBSUtBTiBESSBTSU5JID09PVxyXG4gIC8vIDEuIEtpdGEgY2FyaSBkdWx1IHVzZXIgKEFkbWluKSB5YW5nIGFkYSBkaSBkYXRhYmFzZVxyXG4gIC8vIE5hbnRpIGthbGF1IHN1ZGFoIGFkYSBsb2dpbiwga2l0YSBhbWJpbCBkYXJpIHNlc3Npb24gdXNlciB5YW5nIGxvZ2luXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KCk7XHJcblxyXG4gIGlmICghYWRtaW5Vc2VyKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvcjogQmVsdW0gYWRhIFVzZXIvQWRtaW4gZGkgZGF0YWJhc2UhXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhciB8fCBudWxsLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDIuIEh1YnVuZ2thbiBrZSBJRCBVc2VyIHlhbmcgZGl0ZW11a2FuIHRhZGlcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSmFuZ2FuIHBha2FpICdwZW51bGlzOiBcIkFkbWluIE9TSVNcIicsIGl0dSBzYWxhaC5cclxuICAgICAgICBzdGF0dXM6IFwiUFVCTElTSEVEXCIsXHJcbiAgICAgICAgdmlld3M6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9iZXJpdGFcIik7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgdGVyYml0ISDwn5OwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmVyYml0a2FuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgdmFsaWQuXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb250ZW4gPSBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAga29udGVuLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIC4uLihnYW1iYXIgJiYgeyBnYW1iYXIgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaXBlcmJhcnVpISDwn5OdXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCZXJpdGEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDQuIE1BTkFKRU1FTiBQUk9HUkFNIEtFUkpBIChVUERBVEUgRklYKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgLy8gQW1iaWwgZGF0YSBzZXN1YWkgbmFtYSBmaWVsZCBkaSBGcm9udGVuZFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJpb3JpdGFzID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nOyAvLyBGcm9udGVuZCBraXJpbSAncHJpb3JpdHknLCBEQiBzaW1wYW4gJ3ByaW9yaXRhcydcclxuICBjb25zdCBhbmdnYXJhbiA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbmdnYXJhblwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGNvbnN0IGxva2FzaSA9IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmc7IC8vIFBJQyBkaXNpbXBhbiBkaSBrb2xvbSBsb2thc2lcclxuICBcclxuICAvLyDinIUgRklUVVIgQkFSVTogSW1hZ2UgJiBGZWF0dXJlZFxyXG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nOyBcclxuICBjb25zdCBpc0ZlYXR1cmVkID0gZm9ybURhdGEuZ2V0KFwiaXNGZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIC8vIERhdGUgSGFuZGxpbmdcclxuICBjb25zdCBzdGFydERhdGVSYXcgPSBmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVJhdyA/IG5ldyBEYXRlKHN0YXJ0RGF0ZVJhdykgOiBudWxsO1xyXG4gIGNvbnN0IGRlYWRsaW5lUmF3ID0gZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlYWRsaW5lID0gZGVhZGxpbmVSYXcgPyBuZXcgRGF0ZShkZWFkbGluZVJhdykgOiBudWxsO1xyXG5cclxuICAvLyBNYXBwaW5nIFN0YXR1cyBMb2dpYyAoT3RvbWF0aXMgYXRhdSBNYW51YWwgZGFyaSBGcm9udGVuZClcclxuICAvLyBLaXRhIHBha2FpIHN0YXR1cyBtYW51YWwga2FsYXUgZGlraXJpbSwga2FsYXUgbmdnYWsgcGFrYWkgbG9naWMgcHJvZ3Jlc3NcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBwcmlvcml0YXMsXHJcbiAgICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdHVzLCAvLyBTaW1wYW4gc3RhdHVzXHJcbiAgICAgICAgbG9rYXNpLCAvLyBQSUNcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgZGVhZGxpbmUsXHJcbiAgICAgICAgaW1hZ2U6IGltYWdlIHx8IG51bGwsIC8vIFNpbXBhbiBHYW1iYXJcclxuICAgICAgICBpc0ZlYXR1cmVkOiBpc0ZlYXR1cmVkIC8vIFNpbXBhbiBTdGF0dXMgVW5nZ3VsYW5cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZnJlc2ggaGFsYW1hbiBBZG1pbiAmIEhvbWVwYWdlIChrYXJlbmEgYWRhIHNlY3Rpb24gUHJvZ3JhbSBVbmdndWxhbilcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaWJ1YXQhIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ1JFQVRFIFBST0tFUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtYnVhdCBwcm9rZXIuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBwcmlvcml0YXMgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYW5nZ2FyYW4gPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzRmVhdHVyZWQgPSBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgY29uc3Qgc3RhcnREYXRlUmF3ID0gZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGFydERhdGUgPSBzdGFydERhdGVSYXcgPyBuZXcgRGF0ZShzdGFydERhdGVSYXcpIDogbnVsbDtcclxuICBjb25zdCBkZWFkbGluZVJhdyA9IGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZWFkbGluZSA9IGRlYWRsaW5lUmF3ID8gbmV3IERhdGUoZGVhZGxpbmVSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gU3RhdHVzIExvZ2ljIFVwZGF0ZVxyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBkZXNrcmlwc2ksXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHByaW9yaXRhcyxcclxuICAgICAgICBhbmdnYXJhbixcclxuICAgICAgICBwcm9ncmVzcyxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgbG9rYXNpLFxyXG4gICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICBkZWFkbGluZSxcclxuICAgICAgICBpc0ZlYXR1cmVkLFxyXG4gICAgICAgIC8vIFVwZGF0ZSBnYW1iYXIgQ1VNQSBqaWthIHVzZXIgdXBsb2FkIGJhcnUgKHN0cmluZyB0aWRhayBrb3NvbmcpXHJcbiAgICAgICAgLi4uKGltYWdlICYmIHsgaW1hZ2UgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaXVwZGF0ZSEg4pyoXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBwcm9rZXIuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdhbnRpIG5hbWEgZGVsZXRlUHJva2VyIGphZGkgZGVsZXRlUHJvZ3JhbUtlcmphIGJpYXIga29uc2lzdGVuIHNhbWEgZnJvbnRlbmRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBNQU5BSkVNRU4gUEVOR1VSVVMgKExFTkdLQVApXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIDEuIEFtYmlsIERhdGEgV2FqaWJcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyAyLiBBbWJpbCBEYXRhIFRhbWJhaGFuXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGFzaSA9IGZvcm1EYXRhLmdldChcInRyYW5zcG9ydGFzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbW90dG8gPSBmb3JtRGF0YS5nZXQoXCJtb3R0b1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImZvdG9VcmxcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIOKchSBEQVRBIEJBUlU6IFZJU0kgJiBNSVNJIChEaXRhbmdrYXAgZGFyaSBGb3JtRGF0YSlcclxuICBjb25zdCB2aXNpID0gZm9ybURhdGEuZ2V0KFwidmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbWlzaSA9IGZvcm1EYXRhLmdldChcIm1pc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIENlayBUYW5nZ2FsIExhaGlyIChDb252ZXJ0IHN0cmluZyBrZSBEYXRlKVxyXG4gIGNvbnN0IHRnbExhaGlyUmF3ID0gZm9ybURhdGEuZ2V0KFwidGdsTGFoaXJcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRnbExhaGlyID0gdGdsTGFoaXJSYXcgPyBuZXcgRGF0ZSh0Z2xMYWhpclJhdykgOiBudWxsO1xyXG5cclxuICAvLyBDZWsgYXBha2FoIEd1cnUvUGVtYmluYVxyXG4gIGNvbnN0IGlzQWR2aXNvciA9IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIC8vIFZhbGlkYXNpIERhc2FyXHJcbiAgaWYgKCFuYW1hIHx8ICFuaXMgfHwgIWphYmF0YW4pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5hbWEsIE5JUy9OSVAsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIG5pcyxcclxuICAgICAgICBrZWxhczoga2VsYXMgfHwgXCItXCIsXHJcbiAgICAgICAgamFiYXRhbixcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgaHAsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgaW5zdGFncmFtLFxyXG4gICAgICAgIHRpa3RvayxcclxuICAgICAgICBkb21pc2lsaSxcclxuICAgICAgICB0cmFuc3BvcnRhc2ksXHJcbiAgICAgICAgbW90dG8sXHJcbiAgICAgICAgLy8g4pyFIFNJTVBBTiBWSVNJICYgTUlTSSBLRSBEQVRBQkFTRVxyXG4gICAgICAgIHZpc2k6IHZpc2kgfHwgbnVsbCwgXHJcbiAgICAgICAgbWlzaTogbWlzaSB8fCBudWxsLFxyXG4gICAgICAgIHRnbExhaGlyLFxyXG4gICAgICAgIGZvdG9Vcmw6IGZvdG9VcmwgfHwgbnVsbCxcclxuICAgICAgICBzdGF0dXM6IFwiQUtUSUZcIixcclxuICAgICAgICBpc0Fkdmlzb3I6IGlzQWR2aXNvclxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGJlcmhhc2lsIGRpdGFtYmFoa2FuISDwn5GkXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuYW1iYWggZGF0YS4gTklTIG11bmdraW4gc3VkYWggdGVyZGFmdGFyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgLy8gQW1iaWwgc2VtdWEgZGF0YSBpbnB1dFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBuaXMgPSBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGphYmF0YW4gPSBmb3JtRGF0YS5nZXQoXCJqYWJhdGFuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFLVElGXCIgfCBcIk5PTkFLVElGXCIgfCBcIkFMVU1OSVwiO1xyXG4gIFxyXG4gIC8vIERhdGEgVGFtYmFoYW5cclxuICBjb25zdCBocCA9IGZvcm1EYXRhLmdldChcImhwXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpbnN0YWdyYW0gPSBmb3JtRGF0YS5nZXQoXCJpbnN0YWdyYW1cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRpa3RvayA9IGZvcm1EYXRhLmdldChcInRpa3Rva1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZG9taXNpbGkgPSBmb3JtRGF0YS5nZXQoXCJkb21pc2lsaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdHJhbnNwb3J0YXNpID0gZm9ybURhdGEuZ2V0KFwidHJhbnNwb3J0YXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtb3R0byA9IGZvcm1EYXRhLmdldChcIm1vdHRvXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8g4pyFIERBVEEgQkFSVTogVklTSSAmIE1JU0kgKFVwZGF0ZSlcclxuICBjb25zdCB2aXNpID0gZm9ybURhdGEuZ2V0KFwidmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbWlzaSA9IGZvcm1EYXRhLmdldChcIm1pc2lcIikgYXMgc3RyaW5nO1xyXG5cclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogdW5kZWZpbmVkOyBcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgamFiYXRhbixcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIC8vIOKchSBVUERBVEUgVklTSSAmIE1JU0lcclxuICAgICAgICB2aXNpLCBcclxuICAgICAgICBtaXNpLFxyXG4gICAgICAgIC8vIFVwZGF0ZSB0YW5nZ2FsIGxhaGlyIGN1bWEga2FsYXUgYWRhIGlucHV0IGJhcnVcclxuICAgICAgICAuLi4odGdsTGFoaXIgJiYgeyB0Z2xMYWhpciB9KSxcclxuICAgICAgICAvLyBVcGRhdGUgZm90byBjdW1hIGthbGF1IGFkYSBmb3RvIGJhcnUgeWFuZyBkaWtpcmltXHJcbiAgICAgICAgLi4uKGZvdG9VcmwgJiYgeyBmb3RvVXJsIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSEg8J+TnVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBkYXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGVuZ3VydXMoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUlkQ2FyZERlc2lnbihpZDogbnVtYmVyLCBkZXNpZ25Vcmw6IHN0cmluZyB8IG51bGwpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBJRCBDQVJEIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJZENhcmRCYWNrZ3JvdW5kKGltYWdlVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IDEgfSxcclxuICAgICAgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSxcclxuICAgICAgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU0FWRSBCRyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBTSVNURU0gQUJTRU5TSSAoU0NBTk5FUilcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2NhbkFic2Vuc2kobmlzOiBzdHJpbmcpIHtcclxuICBpZiAoIW5pcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUVIgQ29kZSBrb3NvbmchXCIgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIDEuIENhcmkgUGVuZ3VydXMgYmVyZGFzYXJrYW4gTklTXHJcbiAgICBjb25zdCBwZW5ndXJ1cyA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgbmlzOiBuaXMgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGVuZ3VydXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4p2MIFFSIENvZGUgVGlkYWsgVGVyZGFmdGFyIVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlbmd1cnVzLnN0YXR1cyAhPT0gXCJBS1RJRlwiKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBBbmdnb3RhIFRpZGFrIEFrdGlmL0FsdW1uaVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gQ2VrIGFwYWthaCBzdWRhaCBhYnNlbiBoYXJpIGluaT8gKE9wc2lvbmFsOiBDZWdhaCBzcGFtIHNjYW4pXHJcbiAgICBjb25zdCB0b2RheVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5U3RhcnQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZGF5RW5kID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5RW5kLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdMb2cgPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLFxyXG4gICAgICAgIHRhbmdnYWw6IHtcclxuICAgICAgICAgIGd0ZTogdG9kYXlTdGFydCxcclxuICAgICAgICAgIGx0ZTogdG9kYXlFbmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0xvZykge1xyXG4gICAgICAvLyBLYWxhdSBzdWRhaCBhYnNlbiwga2l0YSB0ZXRhcCByZXR1cm4gc3VjY2VzcyB0YXBpIGthc2loIGluZm8gXCJTdWRhaCBBYnNlblwiXHJcbiAgICAgIC8vIEJpYXIgVUkgdGV0YXAgbWVuYW1waWxrYW4gcHJvZmlsbnlhLCB0YXBpIHN0YXR1c255YSBiZWRhLlxyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBtZXNzYWdlOiBcIkthbXUgc3VkYWggYWJzZW4gaGFyaSBpbmkhIPCfkYxcIiwgXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgIG5hbWU6IHBlbmd1cnVzLm5hbWEsXHJcbiAgICAgICAgICAgcm9sZTogcGVuZ3VydXMuamFiYXRhbixcclxuICAgICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgICBzdGF0dXM6IFwiRFVQTElDQVRFXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDMuIFNpbXBhbiBrZSBUYWJlbCBBYnNlbnNpXHJcbiAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsXHJcbiAgICAgICAga2VnaWF0YW46IFwiQWJzZW5zaSBIYXJpYW5cIiwgLy8gU2VtZW50YXJhIGhhcmRjb2RlIGR1bHVcclxuICAgICAgICBzdGF0dXM6IFwiSEFESVJcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gNC4gUmV0dXJuIERhdGEgUGVuZ3VydXMga2UgRnJvbnRlbmRcclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgbWVzc2FnZTogXCJBYnNlbnNpIEJlcmhhc2lsISDinIVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgICBuYW1lOiBwZW5ndXJ1cy5uYW1hLFxyXG4gICAgICAgICByb2xlOiBwZW5ndXJ1cy5qYWJhdGFuLFxyXG4gICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgc3RhdHVzOiBcIkhBRElSXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQ0FOIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXJ2ZXIgRXJyb3IuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBNQU5BSkVNRU4gS0VVQU5HQU4gKEtBUyAmIEFOR0dBUkFOKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIENhdGF0IFRyYW5zYWtzaSBLYXMgVW11bVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2VuZXJhbFRyeChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgdGlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJQRU1BU1VLQU5cIiB8IFwiUEVOR0VMVUFSQU5cIjtcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGljID0gZm9ybURhdGEuZ2V0KFwicGljXCIpIGFzIHN0cmluZzsgLy8gS2V0ZXJhbmdhbiBQSUNcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgIGtldGVyYW5nYW46IGBQSUM6ICR7cGljfWAsIC8vIFNpbXBhbiBQSUMgZGkga2V0ZXJhbmdhblxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJUcmFuc2Frc2kgYmVyaGFzaWwgZGljYXRhdCEg8J+SsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmNhdGF0IHRyYW5zYWtzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gQnVrYSBBbmdnYXJhbiBFdmVudCBCYXJ1IChQaW5kYWggQnVrdTogS2FzIFVtdW0gLT4gRXZlbnQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hRXZlbnQgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYnVkZ2V0ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gQS4gQ2F0YXQgUEVOR0VMVUFSQU4gZGkgS2FzIFVtdW1cclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWw6IGBNb2RhbCBFdmVudDogJHtuYW1hRXZlbnR9YCxcclxuICAgICAgICBub21pbmFsOiBidWRnZXQsXHJcbiAgICAgICAgdGlwZTogXCJQRU5HRUxVQVJBTlwiLFxyXG4gICAgICAgIGthdGVnb3JpOiBcIkFuZ2dhcmFuIEV2ZW50XCIsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAga2V0ZXJhbmdhbjogXCJBbG9rYXNpIGRhbmEga2UgZXZlbnQgYmFydVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gQnVhdCBEYXRhIFByb2tlciBCYXJ1IChTdGF0dXM6IEFDVElWRSlcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWE6IG5hbWFFdmVudCxcclxuICAgICAgICBhbmdnYXJhbjogYnVkZ2V0LFxyXG4gICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IDAsXHJcbiAgICAgICAgc3RhdHVzOiBcIklOX1BST0dSRVNTXCIsIC8vIEFuZ2dhcCBldmVudCBzZWRhbmcgamFsYW5cclxuICAgICAgICBkaXZpc2k6IFwiS2VwYW5pdGlhYW5cIiwgLy8gRGVmYXVsdCBkaXZpc2lcclxuICAgICAgICBkZWFkbGluZTogbmV3IERhdGUoZGF0ZVN0ciksIC8vIFNlbWVudGFyYSBwYWthaSB0Z2wgdHJhbnNha3NpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBbmdnYXJhbiBFdmVudCBiZXJoYXNpbCBkaWJ1a2EhIPCfjolcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWthIGFuZ2dhcmFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBDYXRhdCBUcmFuc2Frc2kgUGVuZ2VsdWFyYW4gRXZlbnRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50VHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGV2ZW50SWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZXZlbnRJZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIEEuIFNpbXBhbiBUcmFuc2Frc2kgKExpbmtlZCBrZSBQcm9rZXJJRClcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAga2F0ZWdvcmk6IFwiUGVuZ2VsdWFyYW4gRXZlbnRcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBwcm9rZXJJZDogZXZlbnRJZCwgLy8gTGluayBrZSBFdmVudFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gVXBkYXRlICdhbmdnYXJhblRlcnBha2FpJyBkaSB0YWJlbCBQcm9rZXJcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGV2ZW50SWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IHsgaW5jcmVtZW50OiBub21pbmFsIH0gLy8gVGFtYmFoIG90b21hdGlzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5nZWx1YXJhbiBldmVudCBkaWNhdGF0ISDwn6e+XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGRhdGEgZXZlbnQuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA5LiBNQU5BSkVNRU4gSU5WRU5UQVJJU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIFRhbWJhaC9FZGl0IEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUludmVudGFyaXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29kZSA9IGZvcm1EYXRhLmdldChcImNvZGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGhhcmdhID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByaWNlXCIpKTtcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHNlcmlhbCA9IGZvcm1EYXRhLmdldChcInNlcmlhbFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gRWRpdFxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWRSYXcpIH0sXHJcbiAgICAgICAgZGF0YTogeyBuYW1hLCBrb2RlLCBrYXRlZ29yaSwgaGFyZ2EsIHNlcmlhbE51bTogc2VyaWFsLCAuLi4oZm90b1VybCAmJiB7IGZvdG9VcmwgfSkgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZVxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgICAgbmFtYSwga29kZSwga2F0ZWdvcmksIGhhcmdhLCBzZXJpYWxOdW06IHNlcmlhbCwgZm90b1VybCwgXHJcbiAgICAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBrb25kaXNpOiBcIkJhaWtcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBhc2V0IHRlcnNpbXBhbiEg8J+TplwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbnlpbXBhbiBhc2V0LlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBIYXB1cyBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludmVudGFyaXMoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIFBpbmphbSBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBpbmphbUJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcGVtaW5qYW0gPSBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBcIkJPUlJPV0VEXCIsXHJcbiAgICAgICAgcGVtaW5qYW06IHBlbWluamFtLFxyXG4gICAgICAgIHRnbFBpbmphbTogbmV3IERhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJhcmFuZyBiZXJoYXNpbCBkaXBpbmphbSEg8J+VklwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbXByb3NlcyBwZW1pbmphbWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA0LiBLZW1iYWxpa2FuIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24ga2VtYmFsaWthbkJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3Qga29uZGlzaSA9IGZvcm1EYXRhLmdldChcImNvbmRpdGlvblwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIC8vIEFtYmlsIGRhdGEgYmFyYW5nIGR1bHUgYnVhdCB0YXUgc2lhcGEgcGVtaW5qYW0gdGVyYWtoaXJcclxuICAgIGNvbnN0IGJhcmFuZyA9IGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgaWYgKCFiYXJhbmcgfHwgIWJhcmFuZy5wZW1pbmphbSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICAgIC8vIEEuIFNpbXBhbiBrZSBSaXdheWF0XHJcbiAgICBhd2FpdCBwcmlzbWEucml3YXlhdEFzZXQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGludmVudGFyaXNJZDogaWQsXHJcbiAgICAgICAgcGVtaW5qYW06IGJhcmFuZy5wZW1pbmphbSxcclxuICAgICAgICB0Z2xLZWx1YXI6IGJhcmFuZy50Z2xQaW5qYW0gfHwgbmV3IERhdGUoKSxcclxuICAgICAgICB0Z2xLZW1iYWxpOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGtvbmRpc2lLZW1iYWxpOiBrb25kaXNpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEIuIFJlc2V0IFN0YXR1cyBCYXJhbmdcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IGtvbmRpc2kgPT09IFwiUnVzYWtcIiA/IFwiTUFJTlRFTkFOQ0VcIiA6IFwiQVZBSUxBQkxFXCIsXHJcbiAgICAgICAga29uZGlzaToga29uZGlzaSxcclxuICAgICAgICBwZW1pbmphbTogbnVsbCxcclxuICAgICAgICB0Z2xQaW5qYW06IG51bGxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFyYW5nIHN1ZGFoIGRpa2VtYmFsaWthbiEg4pyFXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcHJvc2VzIHBlbmdlbWJhbGlhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEwLiBNQU5BSkVNRU4gR0FMRVJJIEtFR0lBVEFOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVHYWxlcmkoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBBbWJpbCBKU09OIHN0cmluZyBkYXJpIGZvcm0gY2xpZW50XHJcbiAgY29uc3QgaW1hZ2VzSnNvbiA9IGZvcm1EYXRhLmdldChcImltYWdlc1wiKSBhcyBzdHJpbmc7IFxyXG5cclxuICBpZiAoIWp1ZHVsIHx8ICFpbWFnZXNKc29uKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCBkYW4gbWluaW1hbCAxIEZvdG8gd2FqaWIgZGlpc2khXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gTU9ERSBFRElUXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb24gLy8gU2ltcGFuIHNlYmFnYWkgSlNPTiBTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTU9ERSBCQVJVXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCwga2F0ZWdvcmksIGRlc2tyaXBzaSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWwpLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXNKc29uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiR2FsZXJpIGJlcmhhc2lsIGRpc2ltcGFuISDwn5O4XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkdBTEVSSSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGdhbGVyaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlSQXVVc0IsMkxBQUEifQ==
}),
"[project]/lib/data:5adcb0 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updatePengurus",
    ()=>$$RSC_SERVER_ACTION_10
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40fbe84013316a8a2a5a75904a8d4816b20bbfe24a":"updatePengurus"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40fbe84013316a8a2a5a75904a8d4816b20bbfe24a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updatePengurus");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEhFTFBFUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvbnRlbiA9IGZvcm1EYXRhLmdldChcImtvbnRlblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSAoZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nKSB8fCBcIlVtdW1cIjtcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgaWYgKCFqdWR1bCB8fCAha29udGVuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCAmIEtvbnRlbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2x1ZyA9IGAke3NsdWdpZnkoanVkdWwpfS0ke0RhdGUubm93KCl9YDtcclxuXHJcbiAgLy8gPT09IFBFUkJBSUtBTiBESSBTSU5JID09PVxyXG4gIC8vIDEuIEtpdGEgY2FyaSBkdWx1IHVzZXIgKEFkbWluKSB5YW5nIGFkYSBkaSBkYXRhYmFzZVxyXG4gIC8vIE5hbnRpIGthbGF1IHN1ZGFoIGFkYSBsb2dpbiwga2l0YSBhbWJpbCBkYXJpIHNlc3Npb24gdXNlciB5YW5nIGxvZ2luXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KCk7XHJcblxyXG4gIGlmICghYWRtaW5Vc2VyKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvcjogQmVsdW0gYWRhIFVzZXIvQWRtaW4gZGkgZGF0YWJhc2UhXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhciB8fCBudWxsLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDIuIEh1YnVuZ2thbiBrZSBJRCBVc2VyIHlhbmcgZGl0ZW11a2FuIHRhZGlcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSmFuZ2FuIHBha2FpICdwZW51bGlzOiBcIkFkbWluIE9TSVNcIicsIGl0dSBzYWxhaC5cclxuICAgICAgICBzdGF0dXM6IFwiUFVCTElTSEVEXCIsXHJcbiAgICAgICAgdmlld3M6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9iZXJpdGFcIik7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgdGVyYml0ISDwn5OwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmVyYml0a2FuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgdmFsaWQuXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb250ZW4gPSBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAga29udGVuLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIC4uLihnYW1iYXIgJiYgeyBnYW1iYXIgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaXBlcmJhcnVpISDwn5OdXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCZXJpdGEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDQuIE1BTkFKRU1FTiBQUk9HUkFNIEtFUkpBIChVUERBVEUgRklYKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgLy8gQW1iaWwgZGF0YSBzZXN1YWkgbmFtYSBmaWVsZCBkaSBGcm9udGVuZFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJpb3JpdGFzID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nOyAvLyBGcm9udGVuZCBraXJpbSAncHJpb3JpdHknLCBEQiBzaW1wYW4gJ3ByaW9yaXRhcydcclxuICBjb25zdCBhbmdnYXJhbiA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbmdnYXJhblwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGNvbnN0IGxva2FzaSA9IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmc7IC8vIFBJQyBkaXNpbXBhbiBkaSBrb2xvbSBsb2thc2lcclxuICBcclxuICAvLyDinIUgRklUVVIgQkFSVTogSW1hZ2UgJiBGZWF0dXJlZFxyXG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nOyBcclxuICBjb25zdCBpc0ZlYXR1cmVkID0gZm9ybURhdGEuZ2V0KFwiaXNGZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIC8vIERhdGUgSGFuZGxpbmdcclxuICBjb25zdCBzdGFydERhdGVSYXcgPSBmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVJhdyA/IG5ldyBEYXRlKHN0YXJ0RGF0ZVJhdykgOiBudWxsO1xyXG4gIGNvbnN0IGRlYWRsaW5lUmF3ID0gZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlYWRsaW5lID0gZGVhZGxpbmVSYXcgPyBuZXcgRGF0ZShkZWFkbGluZVJhdykgOiBudWxsO1xyXG5cclxuICAvLyBNYXBwaW5nIFN0YXR1cyBMb2dpYyAoT3RvbWF0aXMgYXRhdSBNYW51YWwgZGFyaSBGcm9udGVuZClcclxuICAvLyBLaXRhIHBha2FpIHN0YXR1cyBtYW51YWwga2FsYXUgZGlraXJpbSwga2FsYXUgbmdnYWsgcGFrYWkgbG9naWMgcHJvZ3Jlc3NcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBwcmlvcml0YXMsXHJcbiAgICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdHVzLCAvLyBTaW1wYW4gc3RhdHVzXHJcbiAgICAgICAgbG9rYXNpLCAvLyBQSUNcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgZGVhZGxpbmUsXHJcbiAgICAgICAgaW1hZ2U6IGltYWdlIHx8IG51bGwsIC8vIFNpbXBhbiBHYW1iYXJcclxuICAgICAgICBpc0ZlYXR1cmVkOiBpc0ZlYXR1cmVkIC8vIFNpbXBhbiBTdGF0dXMgVW5nZ3VsYW5cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZnJlc2ggaGFsYW1hbiBBZG1pbiAmIEhvbWVwYWdlIChrYXJlbmEgYWRhIHNlY3Rpb24gUHJvZ3JhbSBVbmdndWxhbilcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaWJ1YXQhIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ1JFQVRFIFBST0tFUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtYnVhdCBwcm9rZXIuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBwcmlvcml0YXMgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYW5nZ2FyYW4gPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzRmVhdHVyZWQgPSBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgY29uc3Qgc3RhcnREYXRlUmF3ID0gZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGFydERhdGUgPSBzdGFydERhdGVSYXcgPyBuZXcgRGF0ZShzdGFydERhdGVSYXcpIDogbnVsbDtcclxuICBjb25zdCBkZWFkbGluZVJhdyA9IGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZWFkbGluZSA9IGRlYWRsaW5lUmF3ID8gbmV3IERhdGUoZGVhZGxpbmVSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gU3RhdHVzIExvZ2ljIFVwZGF0ZVxyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBkZXNrcmlwc2ksXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHByaW9yaXRhcyxcclxuICAgICAgICBhbmdnYXJhbixcclxuICAgICAgICBwcm9ncmVzcyxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgbG9rYXNpLFxyXG4gICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICBkZWFkbGluZSxcclxuICAgICAgICBpc0ZlYXR1cmVkLFxyXG4gICAgICAgIC8vIFVwZGF0ZSBnYW1iYXIgQ1VNQSBqaWthIHVzZXIgdXBsb2FkIGJhcnUgKHN0cmluZyB0aWRhayBrb3NvbmcpXHJcbiAgICAgICAgLi4uKGltYWdlICYmIHsgaW1hZ2UgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaXVwZGF0ZSEg4pyoXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBwcm9rZXIuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdhbnRpIG5hbWEgZGVsZXRlUHJva2VyIGphZGkgZGVsZXRlUHJvZ3JhbUtlcmphIGJpYXIga29uc2lzdGVuIHNhbWEgZnJvbnRlbmRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBNQU5BSkVNRU4gUEVOR1VSVVMgKExFTkdLQVApXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIDEuIEFtYmlsIERhdGEgV2FqaWJcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyAyLiBBbWJpbCBEYXRhIFRhbWJhaGFuXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGFzaSA9IGZvcm1EYXRhLmdldChcInRyYW5zcG9ydGFzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbW90dG8gPSBmb3JtRGF0YS5nZXQoXCJtb3R0b1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImZvdG9VcmxcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIOKchSBEQVRBIEJBUlU6IFZJU0kgJiBNSVNJIChEaXRhbmdrYXAgZGFyaSBGb3JtRGF0YSlcclxuICBjb25zdCB2aXNpID0gZm9ybURhdGEuZ2V0KFwidmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbWlzaSA9IGZvcm1EYXRhLmdldChcIm1pc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIENlayBUYW5nZ2FsIExhaGlyIChDb252ZXJ0IHN0cmluZyBrZSBEYXRlKVxyXG4gIGNvbnN0IHRnbExhaGlyUmF3ID0gZm9ybURhdGEuZ2V0KFwidGdsTGFoaXJcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRnbExhaGlyID0gdGdsTGFoaXJSYXcgPyBuZXcgRGF0ZSh0Z2xMYWhpclJhdykgOiBudWxsO1xyXG5cclxuICAvLyBDZWsgYXBha2FoIEd1cnUvUGVtYmluYVxyXG4gIGNvbnN0IGlzQWR2aXNvciA9IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIC8vIFZhbGlkYXNpIERhc2FyXHJcbiAgaWYgKCFuYW1hIHx8ICFuaXMgfHwgIWphYmF0YW4pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5hbWEsIE5JUy9OSVAsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIG5pcyxcclxuICAgICAgICBrZWxhczoga2VsYXMgfHwgXCItXCIsXHJcbiAgICAgICAgamFiYXRhbixcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgaHAsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgaW5zdGFncmFtLFxyXG4gICAgICAgIHRpa3RvayxcclxuICAgICAgICBkb21pc2lsaSxcclxuICAgICAgICB0cmFuc3BvcnRhc2ksXHJcbiAgICAgICAgbW90dG8sXHJcbiAgICAgICAgLy8g4pyFIFNJTVBBTiBWSVNJICYgTUlTSSBLRSBEQVRBQkFTRVxyXG4gICAgICAgIHZpc2k6IHZpc2kgfHwgbnVsbCwgXHJcbiAgICAgICAgbWlzaTogbWlzaSB8fCBudWxsLFxyXG4gICAgICAgIHRnbExhaGlyLFxyXG4gICAgICAgIGZvdG9Vcmw6IGZvdG9VcmwgfHwgbnVsbCxcclxuICAgICAgICBzdGF0dXM6IFwiQUtUSUZcIixcclxuICAgICAgICBpc0Fkdmlzb3I6IGlzQWR2aXNvclxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGJlcmhhc2lsIGRpdGFtYmFoa2FuISDwn5GkXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuYW1iYWggZGF0YS4gTklTIG11bmdraW4gc3VkYWggdGVyZGFmdGFyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgLy8gQW1iaWwgc2VtdWEgZGF0YSBpbnB1dFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBuaXMgPSBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGphYmF0YW4gPSBmb3JtRGF0YS5nZXQoXCJqYWJhdGFuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFLVElGXCIgfCBcIk5PTkFLVElGXCIgfCBcIkFMVU1OSVwiO1xyXG4gIFxyXG4gIC8vIERhdGEgVGFtYmFoYW5cclxuICBjb25zdCBocCA9IGZvcm1EYXRhLmdldChcImhwXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpbnN0YWdyYW0gPSBmb3JtRGF0YS5nZXQoXCJpbnN0YWdyYW1cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRpa3RvayA9IGZvcm1EYXRhLmdldChcInRpa3Rva1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZG9taXNpbGkgPSBmb3JtRGF0YS5nZXQoXCJkb21pc2lsaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdHJhbnNwb3J0YXNpID0gZm9ybURhdGEuZ2V0KFwidHJhbnNwb3J0YXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtb3R0byA9IGZvcm1EYXRhLmdldChcIm1vdHRvXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8g4pyFIERBVEEgQkFSVTogVklTSSAmIE1JU0kgKFVwZGF0ZSlcclxuICBjb25zdCB2aXNpID0gZm9ybURhdGEuZ2V0KFwidmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbWlzaSA9IGZvcm1EYXRhLmdldChcIm1pc2lcIikgYXMgc3RyaW5nO1xyXG5cclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogdW5kZWZpbmVkOyBcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgamFiYXRhbixcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIC8vIOKchSBVUERBVEUgVklTSSAmIE1JU0lcclxuICAgICAgICB2aXNpLCBcclxuICAgICAgICBtaXNpLFxyXG4gICAgICAgIC8vIFVwZGF0ZSB0YW5nZ2FsIGxhaGlyIGN1bWEga2FsYXUgYWRhIGlucHV0IGJhcnVcclxuICAgICAgICAuLi4odGdsTGFoaXIgJiYgeyB0Z2xMYWhpciB9KSxcclxuICAgICAgICAvLyBVcGRhdGUgZm90byBjdW1hIGthbGF1IGFkYSBmb3RvIGJhcnUgeWFuZyBkaWtpcmltXHJcbiAgICAgICAgLi4uKGZvdG9VcmwgJiYgeyBmb3RvVXJsIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSEg8J+TnVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBkYXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGVuZ3VydXMoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUlkQ2FyZERlc2lnbihpZDogbnVtYmVyLCBkZXNpZ25Vcmw6IHN0cmluZyB8IG51bGwpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBJRCBDQVJEIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJZENhcmRCYWNrZ3JvdW5kKGltYWdlVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IDEgfSxcclxuICAgICAgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSxcclxuICAgICAgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU0FWRSBCRyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBTSVNURU0gQUJTRU5TSSAoU0NBTk5FUilcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2NhbkFic2Vuc2kobmlzOiBzdHJpbmcpIHtcclxuICBpZiAoIW5pcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUVIgQ29kZSBrb3NvbmchXCIgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIDEuIENhcmkgUGVuZ3VydXMgYmVyZGFzYXJrYW4gTklTXHJcbiAgICBjb25zdCBwZW5ndXJ1cyA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgbmlzOiBuaXMgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGVuZ3VydXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4p2MIFFSIENvZGUgVGlkYWsgVGVyZGFmdGFyIVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlbmd1cnVzLnN0YXR1cyAhPT0gXCJBS1RJRlwiKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBBbmdnb3RhIFRpZGFrIEFrdGlmL0FsdW1uaVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gQ2VrIGFwYWthaCBzdWRhaCBhYnNlbiBoYXJpIGluaT8gKE9wc2lvbmFsOiBDZWdhaCBzcGFtIHNjYW4pXHJcbiAgICBjb25zdCB0b2RheVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5U3RhcnQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZGF5RW5kID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5RW5kLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdMb2cgPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLFxyXG4gICAgICAgIHRhbmdnYWw6IHtcclxuICAgICAgICAgIGd0ZTogdG9kYXlTdGFydCxcclxuICAgICAgICAgIGx0ZTogdG9kYXlFbmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0xvZykge1xyXG4gICAgICAvLyBLYWxhdSBzdWRhaCBhYnNlbiwga2l0YSB0ZXRhcCByZXR1cm4gc3VjY2VzcyB0YXBpIGthc2loIGluZm8gXCJTdWRhaCBBYnNlblwiXHJcbiAgICAgIC8vIEJpYXIgVUkgdGV0YXAgbWVuYW1waWxrYW4gcHJvZmlsbnlhLCB0YXBpIHN0YXR1c255YSBiZWRhLlxyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBtZXNzYWdlOiBcIkthbXUgc3VkYWggYWJzZW4gaGFyaSBpbmkhIPCfkYxcIiwgXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgIG5hbWU6IHBlbmd1cnVzLm5hbWEsXHJcbiAgICAgICAgICAgcm9sZTogcGVuZ3VydXMuamFiYXRhbixcclxuICAgICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgICBzdGF0dXM6IFwiRFVQTElDQVRFXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDMuIFNpbXBhbiBrZSBUYWJlbCBBYnNlbnNpXHJcbiAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsXHJcbiAgICAgICAga2VnaWF0YW46IFwiQWJzZW5zaSBIYXJpYW5cIiwgLy8gU2VtZW50YXJhIGhhcmRjb2RlIGR1bHVcclxuICAgICAgICBzdGF0dXM6IFwiSEFESVJcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gNC4gUmV0dXJuIERhdGEgUGVuZ3VydXMga2UgRnJvbnRlbmRcclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgbWVzc2FnZTogXCJBYnNlbnNpIEJlcmhhc2lsISDinIVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgICBuYW1lOiBwZW5ndXJ1cy5uYW1hLFxyXG4gICAgICAgICByb2xlOiBwZW5ndXJ1cy5qYWJhdGFuLFxyXG4gICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgc3RhdHVzOiBcIkhBRElSXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQ0FOIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXJ2ZXIgRXJyb3IuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBNQU5BSkVNRU4gS0VVQU5HQU4gKEtBUyAmIEFOR0dBUkFOKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIENhdGF0IFRyYW5zYWtzaSBLYXMgVW11bVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2VuZXJhbFRyeChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgdGlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJQRU1BU1VLQU5cIiB8IFwiUEVOR0VMVUFSQU5cIjtcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGljID0gZm9ybURhdGEuZ2V0KFwicGljXCIpIGFzIHN0cmluZzsgLy8gS2V0ZXJhbmdhbiBQSUNcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgIGtldGVyYW5nYW46IGBQSUM6ICR7cGljfWAsIC8vIFNpbXBhbiBQSUMgZGkga2V0ZXJhbmdhblxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJUcmFuc2Frc2kgYmVyaGFzaWwgZGljYXRhdCEg8J+SsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmNhdGF0IHRyYW5zYWtzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gQnVrYSBBbmdnYXJhbiBFdmVudCBCYXJ1IChQaW5kYWggQnVrdTogS2FzIFVtdW0gLT4gRXZlbnQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hRXZlbnQgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYnVkZ2V0ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gQS4gQ2F0YXQgUEVOR0VMVUFSQU4gZGkgS2FzIFVtdW1cclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWw6IGBNb2RhbCBFdmVudDogJHtuYW1hRXZlbnR9YCxcclxuICAgICAgICBub21pbmFsOiBidWRnZXQsXHJcbiAgICAgICAgdGlwZTogXCJQRU5HRUxVQVJBTlwiLFxyXG4gICAgICAgIGthdGVnb3JpOiBcIkFuZ2dhcmFuIEV2ZW50XCIsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAga2V0ZXJhbmdhbjogXCJBbG9rYXNpIGRhbmEga2UgZXZlbnQgYmFydVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gQnVhdCBEYXRhIFByb2tlciBCYXJ1IChTdGF0dXM6IEFDVElWRSlcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWE6IG5hbWFFdmVudCxcclxuICAgICAgICBhbmdnYXJhbjogYnVkZ2V0LFxyXG4gICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IDAsXHJcbiAgICAgICAgc3RhdHVzOiBcIklOX1BST0dSRVNTXCIsIC8vIEFuZ2dhcCBldmVudCBzZWRhbmcgamFsYW5cclxuICAgICAgICBkaXZpc2k6IFwiS2VwYW5pdGlhYW5cIiwgLy8gRGVmYXVsdCBkaXZpc2lcclxuICAgICAgICBkZWFkbGluZTogbmV3IERhdGUoZGF0ZVN0ciksIC8vIFNlbWVudGFyYSBwYWthaSB0Z2wgdHJhbnNha3NpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBbmdnYXJhbiBFdmVudCBiZXJoYXNpbCBkaWJ1a2EhIPCfjolcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWthIGFuZ2dhcmFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBDYXRhdCBUcmFuc2Frc2kgUGVuZ2VsdWFyYW4gRXZlbnRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50VHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGV2ZW50SWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZXZlbnRJZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIEEuIFNpbXBhbiBUcmFuc2Frc2kgKExpbmtlZCBrZSBQcm9rZXJJRClcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAga2F0ZWdvcmk6IFwiUGVuZ2VsdWFyYW4gRXZlbnRcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBwcm9rZXJJZDogZXZlbnRJZCwgLy8gTGluayBrZSBFdmVudFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gVXBkYXRlICdhbmdnYXJhblRlcnBha2FpJyBkaSB0YWJlbCBQcm9rZXJcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGV2ZW50SWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IHsgaW5jcmVtZW50OiBub21pbmFsIH0gLy8gVGFtYmFoIG90b21hdGlzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5nZWx1YXJhbiBldmVudCBkaWNhdGF0ISDwn6e+XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGRhdGEgZXZlbnQuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA5LiBNQU5BSkVNRU4gSU5WRU5UQVJJU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIFRhbWJhaC9FZGl0IEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUludmVudGFyaXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29kZSA9IGZvcm1EYXRhLmdldChcImNvZGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGhhcmdhID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByaWNlXCIpKTtcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHNlcmlhbCA9IGZvcm1EYXRhLmdldChcInNlcmlhbFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gRWRpdFxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWRSYXcpIH0sXHJcbiAgICAgICAgZGF0YTogeyBuYW1hLCBrb2RlLCBrYXRlZ29yaSwgaGFyZ2EsIHNlcmlhbE51bTogc2VyaWFsLCAuLi4oZm90b1VybCAmJiB7IGZvdG9VcmwgfSkgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZVxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgICAgbmFtYSwga29kZSwga2F0ZWdvcmksIGhhcmdhLCBzZXJpYWxOdW06IHNlcmlhbCwgZm90b1VybCwgXHJcbiAgICAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBrb25kaXNpOiBcIkJhaWtcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBhc2V0IHRlcnNpbXBhbiEg8J+TplwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbnlpbXBhbiBhc2V0LlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBIYXB1cyBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludmVudGFyaXMoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIFBpbmphbSBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBpbmphbUJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcGVtaW5qYW0gPSBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBcIkJPUlJPV0VEXCIsXHJcbiAgICAgICAgcGVtaW5qYW06IHBlbWluamFtLFxyXG4gICAgICAgIHRnbFBpbmphbTogbmV3IERhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJhcmFuZyBiZXJoYXNpbCBkaXBpbmphbSEg8J+VklwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbXByb3NlcyBwZW1pbmphbWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA0LiBLZW1iYWxpa2FuIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24ga2VtYmFsaWthbkJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3Qga29uZGlzaSA9IGZvcm1EYXRhLmdldChcImNvbmRpdGlvblwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIC8vIEFtYmlsIGRhdGEgYmFyYW5nIGR1bHUgYnVhdCB0YXUgc2lhcGEgcGVtaW5qYW0gdGVyYWtoaXJcclxuICAgIGNvbnN0IGJhcmFuZyA9IGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgaWYgKCFiYXJhbmcgfHwgIWJhcmFuZy5wZW1pbmphbSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICAgIC8vIEEuIFNpbXBhbiBrZSBSaXdheWF0XHJcbiAgICBhd2FpdCBwcmlzbWEucml3YXlhdEFzZXQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGludmVudGFyaXNJZDogaWQsXHJcbiAgICAgICAgcGVtaW5qYW06IGJhcmFuZy5wZW1pbmphbSxcclxuICAgICAgICB0Z2xLZWx1YXI6IGJhcmFuZy50Z2xQaW5qYW0gfHwgbmV3IERhdGUoKSxcclxuICAgICAgICB0Z2xLZW1iYWxpOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGtvbmRpc2lLZW1iYWxpOiBrb25kaXNpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEIuIFJlc2V0IFN0YXR1cyBCYXJhbmdcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IGtvbmRpc2kgPT09IFwiUnVzYWtcIiA/IFwiTUFJTlRFTkFOQ0VcIiA6IFwiQVZBSUxBQkxFXCIsXHJcbiAgICAgICAga29uZGlzaToga29uZGlzaSxcclxuICAgICAgICBwZW1pbmphbTogbnVsbCxcclxuICAgICAgICB0Z2xQaW5qYW06IG51bGxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFyYW5nIHN1ZGFoIGRpa2VtYmFsaWthbiEg4pyFXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcHJvc2VzIHBlbmdlbWJhbGlhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEwLiBNQU5BSkVNRU4gR0FMRVJJIEtFR0lBVEFOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVHYWxlcmkoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBBbWJpbCBKU09OIHN0cmluZyBkYXJpIGZvcm0gY2xpZW50XHJcbiAgY29uc3QgaW1hZ2VzSnNvbiA9IGZvcm1EYXRhLmdldChcImltYWdlc1wiKSBhcyBzdHJpbmc7IFxyXG5cclxuICBpZiAoIWp1ZHVsIHx8ICFpbWFnZXNKc29uKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCBkYW4gbWluaW1hbCAxIEZvdG8gd2FqaWIgZGlpc2khXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gTU9ERSBFRElUXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb24gLy8gU2ltcGFuIHNlYmFnYWkgSlNPTiBTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTU9ERSBCQVJVXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCwga2F0ZWdvcmksIGRlc2tyaXBzaSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWwpLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXNKc29uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiR2FsZXJpIGJlcmhhc2lsIGRpc2ltcGFuISDwn5O4XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkdBTEVSSSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGdhbGVyaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlSQTBZc0IsNkxBQUEifQ==
}),
"[project]/lib/data:c456d5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deletePengurus",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"401f90185a456bb4be3fdd5c9cb86e328f8821f86c":"deletePengurus"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401f90185a456bb4be3fdd5c9cb86e328f8821f86c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deletePengurus");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEhFTFBFUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvbnRlbiA9IGZvcm1EYXRhLmdldChcImtvbnRlblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSAoZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nKSB8fCBcIlVtdW1cIjtcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgaWYgKCFqdWR1bCB8fCAha29udGVuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCAmIEtvbnRlbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2x1ZyA9IGAke3NsdWdpZnkoanVkdWwpfS0ke0RhdGUubm93KCl9YDtcclxuXHJcbiAgLy8gPT09IFBFUkJBSUtBTiBESSBTSU5JID09PVxyXG4gIC8vIDEuIEtpdGEgY2FyaSBkdWx1IHVzZXIgKEFkbWluKSB5YW5nIGFkYSBkaSBkYXRhYmFzZVxyXG4gIC8vIE5hbnRpIGthbGF1IHN1ZGFoIGFkYSBsb2dpbiwga2l0YSBhbWJpbCBkYXJpIHNlc3Npb24gdXNlciB5YW5nIGxvZ2luXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KCk7XHJcblxyXG4gIGlmICghYWRtaW5Vc2VyKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvcjogQmVsdW0gYWRhIFVzZXIvQWRtaW4gZGkgZGF0YWJhc2UhXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhciB8fCBudWxsLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDIuIEh1YnVuZ2thbiBrZSBJRCBVc2VyIHlhbmcgZGl0ZW11a2FuIHRhZGlcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSmFuZ2FuIHBha2FpICdwZW51bGlzOiBcIkFkbWluIE9TSVNcIicsIGl0dSBzYWxhaC5cclxuICAgICAgICBzdGF0dXM6IFwiUFVCTElTSEVEXCIsXHJcbiAgICAgICAgdmlld3M6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9iZXJpdGFcIik7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgdGVyYml0ISDwn5OwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmVyYml0a2FuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgdmFsaWQuXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb250ZW4gPSBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAga29udGVuLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIC4uLihnYW1iYXIgJiYgeyBnYW1iYXIgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaXBlcmJhcnVpISDwn5OdXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCZXJpdGEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDQuIE1BTkFKRU1FTiBQUk9HUkFNIEtFUkpBIChVUERBVEUgRklYKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgLy8gQW1iaWwgZGF0YSBzZXN1YWkgbmFtYSBmaWVsZCBkaSBGcm9udGVuZFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJpb3JpdGFzID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nOyAvLyBGcm9udGVuZCBraXJpbSAncHJpb3JpdHknLCBEQiBzaW1wYW4gJ3ByaW9yaXRhcydcclxuICBjb25zdCBhbmdnYXJhbiA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbmdnYXJhblwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGNvbnN0IGxva2FzaSA9IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmc7IC8vIFBJQyBkaXNpbXBhbiBkaSBrb2xvbSBsb2thc2lcclxuICBcclxuICAvLyDinIUgRklUVVIgQkFSVTogSW1hZ2UgJiBGZWF0dXJlZFxyXG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nOyBcclxuICBjb25zdCBpc0ZlYXR1cmVkID0gZm9ybURhdGEuZ2V0KFwiaXNGZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIC8vIERhdGUgSGFuZGxpbmdcclxuICBjb25zdCBzdGFydERhdGVSYXcgPSBmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVJhdyA/IG5ldyBEYXRlKHN0YXJ0RGF0ZVJhdykgOiBudWxsO1xyXG4gIGNvbnN0IGRlYWRsaW5lUmF3ID0gZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlYWRsaW5lID0gZGVhZGxpbmVSYXcgPyBuZXcgRGF0ZShkZWFkbGluZVJhdykgOiBudWxsO1xyXG5cclxuICAvLyBNYXBwaW5nIFN0YXR1cyBMb2dpYyAoT3RvbWF0aXMgYXRhdSBNYW51YWwgZGFyaSBGcm9udGVuZClcclxuICAvLyBLaXRhIHBha2FpIHN0YXR1cyBtYW51YWwga2FsYXUgZGlraXJpbSwga2FsYXUgbmdnYWsgcGFrYWkgbG9naWMgcHJvZ3Jlc3NcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBwcmlvcml0YXMsXHJcbiAgICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdHVzLCAvLyBTaW1wYW4gc3RhdHVzXHJcbiAgICAgICAgbG9rYXNpLCAvLyBQSUNcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgZGVhZGxpbmUsXHJcbiAgICAgICAgaW1hZ2U6IGltYWdlIHx8IG51bGwsIC8vIFNpbXBhbiBHYW1iYXJcclxuICAgICAgICBpc0ZlYXR1cmVkOiBpc0ZlYXR1cmVkIC8vIFNpbXBhbiBTdGF0dXMgVW5nZ3VsYW5cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZnJlc2ggaGFsYW1hbiBBZG1pbiAmIEhvbWVwYWdlIChrYXJlbmEgYWRhIHNlY3Rpb24gUHJvZ3JhbSBVbmdndWxhbilcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaWJ1YXQhIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ1JFQVRFIFBST0tFUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtYnVhdCBwcm9rZXIuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBwcmlvcml0YXMgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYW5nZ2FyYW4gPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzRmVhdHVyZWQgPSBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgY29uc3Qgc3RhcnREYXRlUmF3ID0gZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGFydERhdGUgPSBzdGFydERhdGVSYXcgPyBuZXcgRGF0ZShzdGFydERhdGVSYXcpIDogbnVsbDtcclxuICBjb25zdCBkZWFkbGluZVJhdyA9IGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZWFkbGluZSA9IGRlYWRsaW5lUmF3ID8gbmV3IERhdGUoZGVhZGxpbmVSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gU3RhdHVzIExvZ2ljIFVwZGF0ZVxyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBkZXNrcmlwc2ksXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHByaW9yaXRhcyxcclxuICAgICAgICBhbmdnYXJhbixcclxuICAgICAgICBwcm9ncmVzcyxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgbG9rYXNpLFxyXG4gICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICBkZWFkbGluZSxcclxuICAgICAgICBpc0ZlYXR1cmVkLFxyXG4gICAgICAgIC8vIFVwZGF0ZSBnYW1iYXIgQ1VNQSBqaWthIHVzZXIgdXBsb2FkIGJhcnUgKHN0cmluZyB0aWRhayBrb3NvbmcpXHJcbiAgICAgICAgLi4uKGltYWdlICYmIHsgaW1hZ2UgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaXVwZGF0ZSEg4pyoXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBwcm9rZXIuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdhbnRpIG5hbWEgZGVsZXRlUHJva2VyIGphZGkgZGVsZXRlUHJvZ3JhbUtlcmphIGJpYXIga29uc2lzdGVuIHNhbWEgZnJvbnRlbmRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBNQU5BSkVNRU4gUEVOR1VSVVMgKExFTkdLQVApXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIDEuIEFtYmlsIERhdGEgV2FqaWJcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyAyLiBBbWJpbCBEYXRhIFRhbWJhaGFuXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGFzaSA9IGZvcm1EYXRhLmdldChcInRyYW5zcG9ydGFzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbW90dG8gPSBmb3JtRGF0YS5nZXQoXCJtb3R0b1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImZvdG9VcmxcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIOKchSBEQVRBIEJBUlU6IFZJU0kgJiBNSVNJIChEaXRhbmdrYXAgZGFyaSBGb3JtRGF0YSlcclxuICBjb25zdCB2aXNpID0gZm9ybURhdGEuZ2V0KFwidmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbWlzaSA9IGZvcm1EYXRhLmdldChcIm1pc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIENlayBUYW5nZ2FsIExhaGlyIChDb252ZXJ0IHN0cmluZyBrZSBEYXRlKVxyXG4gIGNvbnN0IHRnbExhaGlyUmF3ID0gZm9ybURhdGEuZ2V0KFwidGdsTGFoaXJcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRnbExhaGlyID0gdGdsTGFoaXJSYXcgPyBuZXcgRGF0ZSh0Z2xMYWhpclJhdykgOiBudWxsO1xyXG5cclxuICAvLyBDZWsgYXBha2FoIEd1cnUvUGVtYmluYVxyXG4gIGNvbnN0IGlzQWR2aXNvciA9IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIC8vIFZhbGlkYXNpIERhc2FyXHJcbiAgaWYgKCFuYW1hIHx8ICFuaXMgfHwgIWphYmF0YW4pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5hbWEsIE5JUy9OSVAsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIG5pcyxcclxuICAgICAgICBrZWxhczoga2VsYXMgfHwgXCItXCIsXHJcbiAgICAgICAgamFiYXRhbixcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgaHAsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgaW5zdGFncmFtLFxyXG4gICAgICAgIHRpa3RvayxcclxuICAgICAgICBkb21pc2lsaSxcclxuICAgICAgICB0cmFuc3BvcnRhc2ksXHJcbiAgICAgICAgbW90dG8sXHJcbiAgICAgICAgLy8g4pyFIFNJTVBBTiBWSVNJICYgTUlTSSBLRSBEQVRBQkFTRVxyXG4gICAgICAgIHZpc2k6IHZpc2kgfHwgbnVsbCwgXHJcbiAgICAgICAgbWlzaTogbWlzaSB8fCBudWxsLFxyXG4gICAgICAgIHRnbExhaGlyLFxyXG4gICAgICAgIGZvdG9Vcmw6IGZvdG9VcmwgfHwgbnVsbCxcclxuICAgICAgICBzdGF0dXM6IFwiQUtUSUZcIixcclxuICAgICAgICBpc0Fkdmlzb3I6IGlzQWR2aXNvclxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGJlcmhhc2lsIGRpdGFtYmFoa2FuISDwn5GkXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuYW1iYWggZGF0YS4gTklTIG11bmdraW4gc3VkYWggdGVyZGFmdGFyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgLy8gQW1iaWwgc2VtdWEgZGF0YSBpbnB1dFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBuaXMgPSBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGphYmF0YW4gPSBmb3JtRGF0YS5nZXQoXCJqYWJhdGFuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFLVElGXCIgfCBcIk5PTkFLVElGXCIgfCBcIkFMVU1OSVwiO1xyXG4gIFxyXG4gIC8vIERhdGEgVGFtYmFoYW5cclxuICBjb25zdCBocCA9IGZvcm1EYXRhLmdldChcImhwXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpbnN0YWdyYW0gPSBmb3JtRGF0YS5nZXQoXCJpbnN0YWdyYW1cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRpa3RvayA9IGZvcm1EYXRhLmdldChcInRpa3Rva1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZG9taXNpbGkgPSBmb3JtRGF0YS5nZXQoXCJkb21pc2lsaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdHJhbnNwb3J0YXNpID0gZm9ybURhdGEuZ2V0KFwidHJhbnNwb3J0YXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtb3R0byA9IGZvcm1EYXRhLmdldChcIm1vdHRvXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8g4pyFIERBVEEgQkFSVTogVklTSSAmIE1JU0kgKFVwZGF0ZSlcclxuICBjb25zdCB2aXNpID0gZm9ybURhdGEuZ2V0KFwidmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbWlzaSA9IGZvcm1EYXRhLmdldChcIm1pc2lcIikgYXMgc3RyaW5nO1xyXG5cclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogdW5kZWZpbmVkOyBcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgamFiYXRhbixcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIC8vIOKchSBVUERBVEUgVklTSSAmIE1JU0lcclxuICAgICAgICB2aXNpLCBcclxuICAgICAgICBtaXNpLFxyXG4gICAgICAgIC8vIFVwZGF0ZSB0YW5nZ2FsIGxhaGlyIGN1bWEga2FsYXUgYWRhIGlucHV0IGJhcnVcclxuICAgICAgICAuLi4odGdsTGFoaXIgJiYgeyB0Z2xMYWhpciB9KSxcclxuICAgICAgICAvLyBVcGRhdGUgZm90byBjdW1hIGthbGF1IGFkYSBmb3RvIGJhcnUgeWFuZyBkaWtpcmltXHJcbiAgICAgICAgLi4uKGZvdG9VcmwgJiYgeyBmb3RvVXJsIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSEg8J+TnVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBkYXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGVuZ3VydXMoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUlkQ2FyZERlc2lnbihpZDogbnVtYmVyLCBkZXNpZ25Vcmw6IHN0cmluZyB8IG51bGwpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBJRCBDQVJEIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJZENhcmRCYWNrZ3JvdW5kKGltYWdlVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IDEgfSxcclxuICAgICAgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSxcclxuICAgICAgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU0FWRSBCRyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBTSVNURU0gQUJTRU5TSSAoU0NBTk5FUilcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2NhbkFic2Vuc2kobmlzOiBzdHJpbmcpIHtcclxuICBpZiAoIW5pcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUVIgQ29kZSBrb3NvbmchXCIgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIDEuIENhcmkgUGVuZ3VydXMgYmVyZGFzYXJrYW4gTklTXHJcbiAgICBjb25zdCBwZW5ndXJ1cyA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgbmlzOiBuaXMgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcGVuZ3VydXMpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4p2MIFFSIENvZGUgVGlkYWsgVGVyZGFmdGFyIVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlbmd1cnVzLnN0YXR1cyAhPT0gXCJBS1RJRlwiKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBBbmdnb3RhIFRpZGFrIEFrdGlmL0FsdW1uaVwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gQ2VrIGFwYWthaCBzdWRhaCBhYnNlbiBoYXJpIGluaT8gKE9wc2lvbmFsOiBDZWdhaCBzcGFtIHNjYW4pXHJcbiAgICBjb25zdCB0b2RheVN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5U3RhcnQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZGF5RW5kID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5RW5kLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdMb2cgPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLFxyXG4gICAgICAgIHRhbmdnYWw6IHtcclxuICAgICAgICAgIGd0ZTogdG9kYXlTdGFydCxcclxuICAgICAgICAgIGx0ZTogdG9kYXlFbmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0xvZykge1xyXG4gICAgICAvLyBLYWxhdSBzdWRhaCBhYnNlbiwga2l0YSB0ZXRhcCByZXR1cm4gc3VjY2VzcyB0YXBpIGthc2loIGluZm8gXCJTdWRhaCBBYnNlblwiXHJcbiAgICAgIC8vIEJpYXIgVUkgdGV0YXAgbWVuYW1waWxrYW4gcHJvZmlsbnlhLCB0YXBpIHN0YXR1c255YSBiZWRhLlxyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBtZXNzYWdlOiBcIkthbXUgc3VkYWggYWJzZW4gaGFyaSBpbmkhIPCfkYxcIiwgXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgIG5hbWU6IHBlbmd1cnVzLm5hbWEsXHJcbiAgICAgICAgICAgcm9sZTogcGVuZ3VydXMuamFiYXRhbixcclxuICAgICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgICBzdGF0dXM6IFwiRFVQTElDQVRFXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDMuIFNpbXBhbiBrZSBUYWJlbCBBYnNlbnNpXHJcbiAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsXHJcbiAgICAgICAga2VnaWF0YW46IFwiQWJzZW5zaSBIYXJpYW5cIiwgLy8gU2VtZW50YXJhIGhhcmRjb2RlIGR1bHVcclxuICAgICAgICBzdGF0dXM6IFwiSEFESVJcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gNC4gUmV0dXJuIERhdGEgUGVuZ3VydXMga2UgRnJvbnRlbmRcclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgbWVzc2FnZTogXCJBYnNlbnNpIEJlcmhhc2lsISDinIVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgICBuYW1lOiBwZW5ndXJ1cy5uYW1hLFxyXG4gICAgICAgICByb2xlOiBwZW5ndXJ1cy5qYWJhdGFuLFxyXG4gICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgc3RhdHVzOiBcIkhBRElSXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQ0FOIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXJ2ZXIgRXJyb3IuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBNQU5BSkVNRU4gS0VVQU5HQU4gKEtBUyAmIEFOR0dBUkFOKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIENhdGF0IFRyYW5zYWtzaSBLYXMgVW11bVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2VuZXJhbFRyeChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgdGlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJQRU1BU1VLQU5cIiB8IFwiUEVOR0VMVUFSQU5cIjtcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGljID0gZm9ybURhdGEuZ2V0KFwicGljXCIpIGFzIHN0cmluZzsgLy8gS2V0ZXJhbmdhbiBQSUNcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgIGtldGVyYW5nYW46IGBQSUM6ICR7cGljfWAsIC8vIFNpbXBhbiBQSUMgZGkga2V0ZXJhbmdhblxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJUcmFuc2Frc2kgYmVyaGFzaWwgZGljYXRhdCEg8J+SsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmNhdGF0IHRyYW5zYWtzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gQnVrYSBBbmdnYXJhbiBFdmVudCBCYXJ1IChQaW5kYWggQnVrdTogS2FzIFVtdW0gLT4gRXZlbnQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hRXZlbnQgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYnVkZ2V0ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gQS4gQ2F0YXQgUEVOR0VMVUFSQU4gZGkgS2FzIFVtdW1cclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWw6IGBNb2RhbCBFdmVudDogJHtuYW1hRXZlbnR9YCxcclxuICAgICAgICBub21pbmFsOiBidWRnZXQsXHJcbiAgICAgICAgdGlwZTogXCJQRU5HRUxVQVJBTlwiLFxyXG4gICAgICAgIGthdGVnb3JpOiBcIkFuZ2dhcmFuIEV2ZW50XCIsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAga2V0ZXJhbmdhbjogXCJBbG9rYXNpIGRhbmEga2UgZXZlbnQgYmFydVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gQnVhdCBEYXRhIFByb2tlciBCYXJ1IChTdGF0dXM6IEFDVElWRSlcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWE6IG5hbWFFdmVudCxcclxuICAgICAgICBhbmdnYXJhbjogYnVkZ2V0LFxyXG4gICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IDAsXHJcbiAgICAgICAgc3RhdHVzOiBcIklOX1BST0dSRVNTXCIsIC8vIEFuZ2dhcCBldmVudCBzZWRhbmcgamFsYW5cclxuICAgICAgICBkaXZpc2k6IFwiS2VwYW5pdGlhYW5cIiwgLy8gRGVmYXVsdCBkaXZpc2lcclxuICAgICAgICBkZWFkbGluZTogbmV3IERhdGUoZGF0ZVN0ciksIC8vIFNlbWVudGFyYSBwYWthaSB0Z2wgdHJhbnNha3NpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBbmdnYXJhbiBFdmVudCBiZXJoYXNpbCBkaWJ1a2EhIPCfjolcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWthIGFuZ2dhcmFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBDYXRhdCBUcmFuc2Frc2kgUGVuZ2VsdWFyYW4gRXZlbnRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50VHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGV2ZW50SWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZXZlbnRJZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIEEuIFNpbXBhbiBUcmFuc2Frc2kgKExpbmtlZCBrZSBQcm9rZXJJRClcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAga2F0ZWdvcmk6IFwiUGVuZ2VsdWFyYW4gRXZlbnRcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBwcm9rZXJJZDogZXZlbnRJZCwgLy8gTGluayBrZSBFdmVudFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gVXBkYXRlICdhbmdnYXJhblRlcnBha2FpJyBkaSB0YWJlbCBQcm9rZXJcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGV2ZW50SWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IHsgaW5jcmVtZW50OiBub21pbmFsIH0gLy8gVGFtYmFoIG90b21hdGlzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5nZWx1YXJhbiBldmVudCBkaWNhdGF0ISDwn6e+XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGRhdGEgZXZlbnQuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA5LiBNQU5BSkVNRU4gSU5WRU5UQVJJU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIFRhbWJhaC9FZGl0IEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUludmVudGFyaXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29kZSA9IGZvcm1EYXRhLmdldChcImNvZGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGhhcmdhID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByaWNlXCIpKTtcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHNlcmlhbCA9IGZvcm1EYXRhLmdldChcInNlcmlhbFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gRWRpdFxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWRSYXcpIH0sXHJcbiAgICAgICAgZGF0YTogeyBuYW1hLCBrb2RlLCBrYXRlZ29yaSwgaGFyZ2EsIHNlcmlhbE51bTogc2VyaWFsLCAuLi4oZm90b1VybCAmJiB7IGZvdG9VcmwgfSkgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZVxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgICAgbmFtYSwga29kZSwga2F0ZWdvcmksIGhhcmdhLCBzZXJpYWxOdW06IHNlcmlhbCwgZm90b1VybCwgXHJcbiAgICAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBrb25kaXNpOiBcIkJhaWtcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBhc2V0IHRlcnNpbXBhbiEg8J+TplwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbnlpbXBhbiBhc2V0LlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBIYXB1cyBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludmVudGFyaXMoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIFBpbmphbSBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBpbmphbUJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcGVtaW5qYW0gPSBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBcIkJPUlJPV0VEXCIsXHJcbiAgICAgICAgcGVtaW5qYW06IHBlbWluamFtLFxyXG4gICAgICAgIHRnbFBpbmphbTogbmV3IERhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJhcmFuZyBiZXJoYXNpbCBkaXBpbmphbSEg8J+VklwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbXByb3NlcyBwZW1pbmphbWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA0LiBLZW1iYWxpa2FuIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24ga2VtYmFsaWthbkJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3Qga29uZGlzaSA9IGZvcm1EYXRhLmdldChcImNvbmRpdGlvblwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIC8vIEFtYmlsIGRhdGEgYmFyYW5nIGR1bHUgYnVhdCB0YXUgc2lhcGEgcGVtaW5qYW0gdGVyYWtoaXJcclxuICAgIGNvbnN0IGJhcmFuZyA9IGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgaWYgKCFiYXJhbmcgfHwgIWJhcmFuZy5wZW1pbmphbSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICAgIC8vIEEuIFNpbXBhbiBrZSBSaXdheWF0XHJcbiAgICBhd2FpdCBwcmlzbWEucml3YXlhdEFzZXQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGludmVudGFyaXNJZDogaWQsXHJcbiAgICAgICAgcGVtaW5qYW06IGJhcmFuZy5wZW1pbmphbSxcclxuICAgICAgICB0Z2xLZWx1YXI6IGJhcmFuZy50Z2xQaW5qYW0gfHwgbmV3IERhdGUoKSxcclxuICAgICAgICB0Z2xLZW1iYWxpOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGtvbmRpc2lLZW1iYWxpOiBrb25kaXNpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEIuIFJlc2V0IFN0YXR1cyBCYXJhbmdcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IGtvbmRpc2kgPT09IFwiUnVzYWtcIiA/IFwiTUFJTlRFTkFOQ0VcIiA6IFwiQVZBSUxBQkxFXCIsXHJcbiAgICAgICAga29uZGlzaToga29uZGlzaSxcclxuICAgICAgICBwZW1pbmphbTogbnVsbCxcclxuICAgICAgICB0Z2xQaW5qYW06IG51bGxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFyYW5nIHN1ZGFoIGRpa2VtYmFsaWthbiEg4pyFXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcHJvc2VzIHBlbmdlbWJhbGlhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEwLiBNQU5BSkVNRU4gR0FMRVJJIEtFR0lBVEFOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVHYWxlcmkoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBBbWJpbCBKU09OIHN0cmluZyBkYXJpIGZvcm0gY2xpZW50XHJcbiAgY29uc3QgaW1hZ2VzSnNvbiA9IGZvcm1EYXRhLmdldChcImltYWdlc1wiKSBhcyBzdHJpbmc7IFxyXG5cclxuICBpZiAoIWp1ZHVsIHx8ICFpbWFnZXNKc29uKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCBkYW4gbWluaW1hbCAxIEZvdG8gd2FqaWIgZGlpc2khXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gTU9ERSBFRElUXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb24gLy8gU2ltcGFuIHNlYmFnYWkgSlNPTiBTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTU9ERSBCQVJVXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCwga2F0ZWdvcmksIGRlc2tyaXBzaSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWwpLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXNKc29uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiR2FsZXJpIGJlcmhhc2lsIGRpc2ltcGFuISDwn5O4XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkdBTEVSSSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGdhbGVyaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlSQTJjc0IsNkxBQUEifQ==
}),
"[project]/app/admin/pengurus/PengurusClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PengurusClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$8ece33__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:8ece33 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$5adcb0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:5adcb0 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$c456d5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:c456d5 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const pengurusTourSteps = [
    {
        target: '.tour-pengurus-header',
        content: 'Database lengkap anggota OSIS/MPK.',
        disableBeacon: true
    },
    {
        target: '.tour-add-member-btn',
        content: 'Klik untuk tambah anggota baru.'
    },
    {
        target: '.tour-filter-sekbid',
        content: 'Filter anggota per Divisi/Sekbid.'
    },
    {
        target: '.tour-view-toggle',
        content: 'Ubah tampilan: Grid (Kartu) atau List (Daftar).'
    },
    {
        target: '.tour-member-card',
        content: 'Kartu identitas anggota.'
    },
    {
        target: '.tour-card-actions',
        content: 'Menu Edit atau Hapus anggota.'
    }
];
function PengurusClient({ initialData }) {
    _s();
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PengurusClient.useEffect": ()=>{
            setMembers(initialData);
        }
    }["PengurusClient.useEffect"], [
        initialData
    ]);
    const [filterSekbid, setFilterSekbid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Semua");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grid");
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // MODAL & FORM STATE
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("profil");
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // STATE FORM LENGKAP
    // 🔥 UPDATE: Tambahkan 'visi' dan 'misi'
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nama: "",
        nis: "",
        kelas: "",
        jabatan: "Anggota",
        divisi: "Inti",
        status: "AKTIF",
        hp: "",
        email: "",
        instagram: "",
        tiktok: "",
        tglLahir: "",
        domisili: "",
        transportasi: "Motor Pribadi",
        motto: "",
        visi: "",
        misi: "",
        fotoUrl: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PengurusClient.useEffect": ()=>{
            setIsClient(true);
        }
    }["PengurusClient.useEffect"], []);
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) return alert("File terlalu besar! Max 2MB.");
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setForm({
                    ...form,
                    fotoUrl: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };
    const openNewModal = ()=>{
        setIsEditing(false);
        setEditId(null);
        setForm({
            nama: "",
            nis: "",
            kelas: "",
            jabatan: "Anggota",
            divisi: "Inti",
            status: "AKTIF",
            hp: "",
            email: "",
            instagram: "",
            tiktok: "",
            tglLahir: "",
            domisili: "",
            transportasi: "Motor Pribadi",
            motto: "",
            visi: "",
            misi: "",
            fotoUrl: ""
        });
        setIsModalOpen(true);
    };
    const openEditModal = (m)=>{
        setIsEditing(true);
        setEditId(m.id);
        setForm({
            nama: m.nama,
            nis: m.nis,
            kelas: m.kelas,
            jabatan: m.jabatan,
            divisi: m.divisi,
            status: m.status,
            hp: m.hp || "",
            email: m.email || "",
            instagram: m.instagram || "",
            tiktok: m.tiktok || "",
            tglLahir: m.tglLahir || "",
            domisili: m.domisili || "",
            transportasi: m.transportasi || "Motor Pribadi",
            motto: m.motto || "",
            visi: m.visi || "",
            misi: m.misi || "",
            fotoUrl: m.fotoUrl || ""
        });
        setIsModalOpen(true);
    };
    const handleSave = async ()=>{
        if (!form.nama || !form.nis) return alert("Nama dan NIS wajib diisi!");
        setIsSubmitting(true);
        const formData = new FormData();
        if (isEditing && editId) formData.append("id", editId.toString());
        Object.entries(form).forEach(([key, value])=>{
            formData.append(key, value);
        });
        try {
            const result = isEditing ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$5adcb0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updatePengurus"])(formData) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$8ece33__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createPengurus"])(formData);
            if (result.success) {
                alert(result.message);
                setIsModalOpen(false);
                window.location.reload();
            } else {
                alert("Gagal: " + result.message);
            }
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan sistem.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleDelete = async (id)=>{
        if (confirm("Hapus data pengurus ini permanen?")) {
            setMembers(members.filter((m)=>m.id !== id));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$c456d5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletePengurus"])(id);
        }
    };
    const filteredMembers = members.filter((member)=>{
        const matchSekbid = filterSekbid === "Semua" ? true : member.divisi === filterSekbid;
        const matchSearch = member.nama.toLowerCase().includes(searchQuery.toLowerCase()) || member.jabatan.toLowerCase().includes(searchQuery.toLowerCase());
        return matchSekbid && matchSearch;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full flex flex-col min-h-screen pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-end gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-pengurus-header",
                                        children: [
                                            "Data Pengurus ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full",
                                                children: "👥"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                lineNumber: 143,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 142,
                                        columnNumber: 16
                                    }, this),
                                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        steps: pengurusTourSteps
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                lineNumber: 141,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 dark:text-slate-400 text-sm font-medium mt-1",
                                children: "Manajemen struktur organisasi dan anggota."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                lineNumber: 147,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openNewModal,
                        className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-transform active:scale-95 tour-add-member-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                lineNumber: 153,
                                columnNumber: 12
                            }, this),
                            " Tambah Pengurus"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white/50 dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide tour-filter-sekbid",
                        children: [
                            'Semua',
                            'Inti',
                            'Sekbid 1',
                            'Sekbid 2',
                            'Sekbid 3',
                            'Sekbid 4'
                        ].map((sekbid)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilterSekbid(sekbid),
                                className: `px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${filterSekbid === sekbid ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white border-blue-100 dark:border-transparent shadow-sm" : "bg-transparent border-transparent text-slate-500 hover:bg-white/50 dark:hover:bg-white/5"}`,
                                children: sekbid
                            }, sekbid, false, {
                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                lineNumber: 161,
                                columnNumber: 16
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                        lineNumber: 159,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-slate-100 dark:bg-black/20 p-1 rounded-lg tour-view-toggle",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("grid"),
                                        className: `p-2 rounded-md ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-white' : 'text-slate-400'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 169,
                                            columnNumber: 202
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 169,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("list"),
                                        className: `p-2 rounded-md ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-white' : 'text-slate-400'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 170,
                                            columnNumber: 202
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 170,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 md:w-64 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Cari nama / jabatan...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none text-sm font-medium text-slate-700 dark:text-white shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 173,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16,
                                        className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 174,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                        lineNumber: 167,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            viewMode === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: filteredMembers.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            className: `group relative bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 rounded-[2rem] p-6 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center text-center overflow-hidden ${index === 0 ? 'tour-member-card' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute top-0 left-0 w-full h-24 bg-gradient-to-b ${member.divisi === 'Inti' ? 'from-blue-500/20' : 'from-slate-100 dark:from-white/5'} to-transparent z-0`
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                    lineNumber: 185,
                                    columnNumber: 22
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 w-24 h-24 rounded-full p-1 bg-white dark:bg-[#0f172a] shadow-md mb-4 group-hover:scale-105 transition-transform",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-full rounded-full overflow-hidden bg-slate-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: member.fotoUrl || "https://source.unsplash.com/random/200x200/?student",
                                                alt: member.nama,
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                lineNumber: 188,
                                                columnNumber: 28
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 187,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white dark:border-[#0f172a] flex items-center justify-center ${member.status === 'AKTIF' ? 'bg-green-500' : 'bg-slate-400'}`,
                                            children: member.status === 'AKTIF' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                size: 10,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                lineNumber: 191,
                                                columnNumber: 58
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 190,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                    lineNumber: 186,
                                    columnNumber: 22
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-black text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors",
                                            children: member.nama
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 195,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2 mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${member.divisi === 'Inti' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300' : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-400'}`,
                                                children: member.jabatan
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                lineNumber: 197,
                                                columnNumber: 28
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 196,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 134
                                                }, this),
                                                " ",
                                                member.kelas
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 199,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                    lineNumber: 194,
                                    columnNumber: 22
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 w-full mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                member.hp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://wa.me/${member.hp}`,
                                                    target: "_blank",
                                                    className: "p-2 rounded-full bg-slate-50 dark:bg-white/5 text-slate-500 hover:bg-green-100 hover:text-green-600 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 227
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 42
                                                }, this),
                                                member.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${member.email}`,
                                                    className: "p-2 rounded-full bg-slate-50 dark:bg-white/5 text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 208
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 202,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex gap-1 ${index === 0 ? 'tour-card-actions' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>openEditModal(member),
                                                    className: "p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 171
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 28
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDelete(member.id),
                                                    className: "p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 171
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 206,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                    lineNumber: 201,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, member.id, true, {
                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                            lineNumber: 184,
                            columnNumber: 19
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                    lineNumber: 182,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                lineNumber: 181,
                columnNumber: 10
            }, this) : /* LIST VIEW */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 pb-10",
                children: filteredMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        className: "flex items-center justify-between p-4 bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 rounded-2xl hover:shadow-md transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-12 h-12 rounded-full overflow-hidden bg-slate-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: member.fotoUrl || "https://source.unsplash.com/random/200x200/?student",
                                            alt: member.nama,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 222,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 221,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-slate-900 dark:text-white",
                                                children: member.nama
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                lineNumber: 225,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 dark:text-blue-400 font-medium",
                                                        children: member.jabatan
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: member.kelas
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                lineNumber: 226,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 224,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                lineNumber: 220,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-3 py-1 rounded-full text-[10px] font-bold uppercase ${member.status === 'AKTIF' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`,
                                        children: member.status
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 234,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openEditModal(member),
                                        className: "p-2 text-slate-400 hover:text-blue-600 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 235,
                                            columnNumber: 137
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 235,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDelete(member.id),
                                        className: "p-2 text-slate-400 hover:text-red-600 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 236,
                                            columnNumber: 138
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                        lineNumber: 236,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                lineNumber: 233,
                                columnNumber: 19
                            }, this)
                        ]
                    }, member.id, true, {
                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                        lineNumber: 219,
                        columnNumber: 16
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                lineNumber: 217,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
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
                            className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                            lineNumber: 247,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.95,
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                scale: 0.95,
                                opacity: 0,
                                y: 20
                            },
                            className: "relative w-full max-w-2xl bg-white dark:bg-[#0f172a] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col max-h-[90vh]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-white dark:bg-[#0f172a] z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-black text-slate-900 dark:text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            size: 24,
                                                            className: "text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 28
                                                        }, this),
                                                        " ",
                                                        isEditing ? "Edit Data Pengurus" : "Tambah Pengurus"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                                    children: "Lengkapi data anggota secara detail."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 251,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                lineNumber: 257,
                                                columnNumber: 153
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 257,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                    lineNumber: 250,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 pt-4 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 flex gap-6 overflow-x-auto",
                                    children: [
                                        {
                                            id: "profil",
                                            label: "Profil & Jabatan",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
                                        },
                                        {
                                            id: "kontak",
                                            label: "Kontak & Sosmed",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"]
                                        },
                                        {
                                            id: "personal",
                                            label: "Data Personal",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
                                        }
                                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab(tab.id),
                                            className: `pb-3 text-sm font-bold flex items-center gap-2 transition-all border-b-2 ${activeTab === tab.id ? "border-blue-500 text-blue-600 dark:text-white" : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                tab.label
                                            ]
                                        }, tab.id, true, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 262,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                    lineNumber: 260,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 overflow-y-auto flex-1 bg-white dark:bg-[#0f172a]",
                                    children: [
                                        activeTab === "profil" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-24 h-24 rounded-full bg-slate-100 dark:bg-white/5 border-2 border-dashed border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-400 cursor-pointer hover:border-blue-500 hover:text-blue-500 transition-all flex-shrink-0 overflow-hidden relative",
                                                            onClick: ()=>fileInputRef.current?.click(),
                                                            children: form.fotoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: form.fotoUrl,
                                                                alt: "Preview",
                                                                fill: true,
                                                                className: "object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 50
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 125
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-slate-900 dark:text-white mb-1",
                                                                    children: "Foto Profil"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 mb-3",
                                                                    children: "Format JPG/PNG. Maks 2MB."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>fileInputRef.current?.click(),
                                                                    className: "px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors",
                                                                    children: "Pilih File"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    ref: fileInputRef,
                                                                    className: "hidden",
                                                                    accept: "image/*",
                                                                    onChange: handleImageUpload
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 28
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                    children: "Nama Lengkap *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: form.nama,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            nama: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                    children: "NIS / NIP *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: form.nis,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            nis: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: form.status,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            status: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "AKTIF",
                                                                            children: "Aktif"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "NONAKTIF",
                                                                            children: "Nonaktif"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 73
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "ALUMNI",
                                                                            children: "Alumni"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 115
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                    children: "Jabatan"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: form.jabatan,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            jabatan: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Anggota"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Ketua OSIS"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Ketua MPK"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 88
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Wakil Ketua OSIS"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 114
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Wakil Ketua MPK"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 147
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Sekretaris"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 179
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Bendahara"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 206
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Koordinator"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 232
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                    children: "Divisi / Sekbid"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: form.divisi,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            divisi: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Inti"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Sekbid 1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 58
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Sekbid 2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 83
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Sekbid 3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 108
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Sekbid 4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 133
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "MPK (Legislatif)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 158
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                    children: "Kelas"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "XI RPL 1",
                                                                    value: form.kelas,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            kelas: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 272,
                                            columnNumber: 25
                                        }, this),
                                        activeTab === "kontak" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 324,
                                                                        columnNumber: 131
                                                                    }, this),
                                                                    " WhatsApp"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: form.hp,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        hp: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 328,
                                                                        columnNumber: 131
                                                                    }, this),
                                                                    " Email Pribadi"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                value: form.email,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        email: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t border-slate-100 dark:border-white/10 col-span-2 my-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 131
                                                                    }, this),
                                                                    " Instagram"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: form.instagram,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        instagram: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-pink-500 text-sm font-bold text-slate-900 dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                children: "TikTok"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: form.tiktok,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        tiktok: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-black text-sm font-bold text-slate-900 dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                lineNumber: 322,
                                                columnNumber: 28
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 321,
                                            columnNumber: 25
                                        }, this),
                                        activeTab === "personal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 349,
                                                                        columnNumber: 131
                                                                    }, this),
                                                                    " Tanggal Lahir"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: form.tglLahir,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        tglLahir: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 353,
                                                                        columnNumber: 131
                                                                    }, this),
                                                                    " Alamat Lengkap (Domisili)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: form.domisili,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        domisili: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white min-h-[80px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 357,
                                                                        columnNumber: 131
                                                                    }, this),
                                                                    " Transportasi"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: form.transportasi,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        transportasi: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Motor Pribadi"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Antar Jemput"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 67
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Angkutan Umum"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 96
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Jalan Kaki"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 126
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                                        size: 12,
                                                                        className: "text-yellow-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                        lineNumber: 363,
                                                                        columnNumber: 131
                                                                    }, this),
                                                                    " Motto Hidup / Quotes"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: form.motto,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        motto: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white italic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2 border-t border-slate-200 dark:border-white/10 my-2 pt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-black text-blue-600 dark:text-blue-400 mb-4",
                                                            children: "Khusus Ketua / Wakil"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 34
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                children: "Visi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                placeholder: "Contoh: Mewujudkan OSIS yang berintegritas...",
                                                                value: form.visi,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        visi: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white min-h-[60px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                children: "Misi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                placeholder: "Contoh: 1. Meningkatkan kedisiplinan...",
                                                                value: form.misi,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        misi: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold text-slate-900 dark:text-white min-h-[80px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                lineNumber: 347,
                                                columnNumber: 28
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 346,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                    lineNumber: 268,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex justify-end gap-3 z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            disabled: isSubmitting,
                                            className: "px-6 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors",
                                            children: "Batal"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 386,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSave,
                                            disabled: isSubmitting,
                                            className: "px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-500/30 transition-transform active:scale-95 flex items-center gap-2",
                                            children: [
                                                isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "animate-spin",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 42
                                                }, this),
                                                isSubmitting ? "Menyimpan..." : "Simpan Data"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                            lineNumber: 387,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                                    lineNumber: 385,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                            lineNumber: 248,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                    lineNumber: 246,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/pengurus/PengurusClient.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(PengurusClient, "kFrrfIc/J1DprdferOE+QDVQrmA=");
_c = PengurusClient;
var _c;
__turbopack_context__.k.register(_c, "PengurusClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_70a0c715._.js.map