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
"[project]/lib/data:d8f407 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProgramKerja",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a9aed5c8bfdeb9ed920a0c2a53c243518b16604e":"createProgramKerja"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a9aed5c8bfdeb9ed920a0c2a53c243518b16604e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProgramKerja");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUHJva2VyU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIG5hbWE6IHouc3RyaW5nKCkubWluKDMsIFwiTmFtYSBwcm9rZXIgbWluaW1hbCAzIGthcmFrdGVyXCIpLFxyXG4gIGRlc2tyaXBzaTogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbiAgZGl2aXNpOiB6LnN0cmluZygpLFxyXG4gIHByaW9yaXRhczogei5zdHJpbmcoKS5kZWZhdWx0KFwiTWVkaXVtXCIpLFxyXG4gIGFuZ2dhcmFuOiB6Lm51bWJlcigpLm5vbm5lZ2F0aXZlKCkuZGVmYXVsdCgwKSxcclxuICBwcm9ncmVzczogei5udW1iZXIoKS5taW4oMCkubWF4KDEwMCkuZGVmYXVsdCgwKSxcclxuICBsb2thc2k6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG4gIGltYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBpc0ZlYXR1cmVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcclxuICBzdGFydERhdGU6IHouZGF0ZSgpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBkZWFkbGluZTogei5kYXRlKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAxLiBBU1BJUkFTSSBTSVNXQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLy8gLi4uIChza2lwIGZvciBicmV2aXR5LCB3aWxsIGFwcGx5IGluIG11bHRpcGxlIHN0ZXBzIGlmIG5lZWRlZClcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IEJlcml0YVNjaGVtYS5zYWZlUGFyc2Uoe1xyXG4gICAganVkdWw6IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpLFxyXG4gICAga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksXHJcbiAgICBrYXRlZ29yaTogZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgfHwgXCJVbXVtXCIsXHJcbiAgICBnYW1iYXI6IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgbWVzc2FnZTogZXJyb3JNc2cuanVkdWw/LlswXSB8fCBlcnJvck1zZy5rb250ZW4/LlswXSB8fCBcIkRhdGEgdGlkYWsgdmFsaWQuXCIgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBqdWR1bCwga29udGVuLCBrYXRlZ29yaSwgZ2FtYmFyIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuICBjb25zdCBzbHVnID0gYCR7c2x1Z2lmeShqdWR1bCl9LSR7RGF0ZS5ub3coKX1gO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlc2kgaGFiaXMuIFNpbGFrYW4gbG9naW4ga2VtYmFsaS5cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIWFkbWluVXNlcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRXJyb3I6IFVzZXIgdGlkYWsgZGl0ZW11a2FuIGRpIGRhdGFiYXNlIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBrb250ZW4sXHJcbiAgICAgICAga2F0ZWdvcmksXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIgfHwgbnVsbCxcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgc3RhdHVzOiBcIlBVQkxJU0hFRFwiLFxyXG4gICAgICAgIHZpZXdzOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGJlcmhhc2lsIHRlcmJpdCEg8J+TsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5lcmJpdGthbiBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGlmICghaWRSYXcpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIklEIHRpZGFrIHZhbGlkLlwiIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgZGlwZXJiYXJ1aSEg8J+TnVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQmVyaXRhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEJFUklUQSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA0LiBNQU5BSkVNRU4gUFJPR1JBTSBLRVJKQSAoVVBEQVRFIEZJWClcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIEFtYmlsIGRhdGEgc2VzdWFpIG5hbWEgZmllbGQgZGkgRnJvbnRlbmRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByaW9yaXRhcyA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZzsgLy8gRnJvbnRlbmQga2lyaW0gJ3ByaW9yaXR5JywgREIgc2ltcGFuICdwcmlvcml0YXMnXHJcbiAgY29uc3QgYW5nZ2FyYW4gPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nOyAvLyBQSUMgZGlzaW1wYW4gZGkga29sb20gbG9rYXNpXHJcbiAgXHJcbiAgLy8g4pyFIEZJVFVSIEJBUlU6IEltYWdlICYgRmVhdHVyZWRcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZzsgXHJcbiAgY29uc3QgaXNGZWF0dXJlZCA9IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBEYXRlIEhhbmRsaW5nXHJcbiAgY29uc3Qgc3RhcnREYXRlUmF3ID0gZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGFydERhdGUgPSBzdGFydERhdGVSYXcgPyBuZXcgRGF0ZShzdGFydERhdGVSYXcpIDogbnVsbDtcclxuICBjb25zdCBkZWFkbGluZVJhdyA9IGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZWFkbGluZSA9IGRlYWRsaW5lUmF3ID8gbmV3IERhdGUoZGVhZGxpbmVSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gTWFwcGluZyBTdGF0dXMgTG9naWMgKE90b21hdGlzIGF0YXUgTWFudWFsIGRhcmkgRnJvbnRlbmQpXHJcbiAgLy8gS2l0YSBwYWthaSBzdGF0dXMgbWFudWFsIGthbGF1IGRpa2lyaW0sIGthbGF1IG5nZ2FrIHBha2FpIGxvZ2ljIHByb2dyZXNzXHJcbiAgbGV0IHN0YXR1cyA9IFwiVE9ET1wiO1xyXG4gIGlmIChwcm9ncmVzcyA+IDAgJiYgcHJvZ3Jlc3MgPCAxMDApIHN0YXR1cyA9IFwiSU5fUFJPR1JFU1NcIjtcclxuICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkgc3RhdHVzID0gXCJET05FXCI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIGRlc2tyaXBzaSxcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgcHJpb3JpdGFzLFxyXG4gICAgICAgIGFuZ2dhcmFuLFxyXG4gICAgICAgIHByb2dyZXNzLFxyXG4gICAgICAgIHN0YXR1cywgLy8gU2ltcGFuIHN0YXR1c1xyXG4gICAgICAgIGxva2FzaSwgLy8gUElDXHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIGRlYWRsaW5lLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZSB8fCBudWxsLCAvLyBTaW1wYW4gR2FtYmFyXHJcbiAgICAgICAgaXNGZWF0dXJlZDogaXNGZWF0dXJlZCAvLyBTaW1wYW4gU3RhdHVzIFVuZ2d1bGFuXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZWZyZXNoIGhhbGFtYW4gQWRtaW4gJiBIb21lcGFnZSAoa2FyZW5hIGFkYSBzZWN0aW9uIFByb2dyYW0gVW5nZ3VsYW4pXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGlidWF0ISDwn5qAXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1YXQgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJpb3JpdGFzID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGFuZ2dhcmFuID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKTtcclxuICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcm9ncmVzc1wiKSk7XHJcbiAgY29uc3QgbG9rYXNpID0gZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpc0ZlYXR1cmVkID0gZm9ybURhdGEuZ2V0KFwiaXNGZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGNvbnN0IHN0YXJ0RGF0ZVJhdyA9IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gc3RhcnREYXRlUmF3ID8gbmV3IERhdGUoc3RhcnREYXRlUmF3KSA6IG51bGw7XHJcbiAgY29uc3QgZGVhZGxpbmVSYXcgPSBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVhZGxpbmUgPSBkZWFkbGluZVJhdyA/IG5ldyBEYXRlKGRlYWRsaW5lUmF3KSA6IG51bGw7XHJcblxyXG4gIC8vIFN0YXR1cyBMb2dpYyBVcGRhdGVcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBwcmlvcml0YXMsXHJcbiAgICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGxva2FzaSxcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgZGVhZGxpbmUsXHJcbiAgICAgICAgaXNGZWF0dXJlZCxcclxuICAgICAgICAvLyBVcGRhdGUgZ2FtYmFyIENVTUEgamlrYSB1c2VyIHVwbG9hZCBiYXJ1IChzdHJpbmcgdGlkYWsga29zb25nKVxyXG4gICAgICAgIC4uLihpbWFnZSAmJiB7IGltYWdlIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJva2VyXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGl1cGRhdGUhIOKcqFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBHYW50aSBuYW1hIGRlbGV0ZVByb2tlciBqYWRpIGRlbGV0ZVByb2dyYW1LZXJqYSBiaWFyIGtvbnNpc3RlbiBzYW1hIGZyb250ZW5kXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9ncmFtS2VyamEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNS4gTUFOQUpFTUVOIFBFTkdVUlVTIChMRU5HS0FQKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAvLyAxLiBBbWJpbCBEYXRhIFdhamliXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8gMi4gQW1iaWwgRGF0YSBUYW1iYWhhblxyXG4gIGNvbnN0IGhwID0gZm9ybURhdGEuZ2V0KFwiaHBcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGluc3RhZ3JhbSA9IGZvcm1EYXRhLmdldChcImluc3RhZ3JhbVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGlrdG9rID0gZm9ybURhdGEuZ2V0KFwidGlrdG9rXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkb21pc2lsaSA9IGZvcm1EYXRhLmdldChcImRvbWlzaWxpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0cmFuc3BvcnRhc2kgPSBmb3JtRGF0YS5nZXQoXCJ0cmFuc3BvcnRhc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1vdHRvID0gZm9ybURhdGEuZ2V0KFwibW90dG9cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyDinIUgREFUQSBCQVJVOiBWSVNJICYgTUlTSSAoRGl0YW5na2FwIGRhcmkgRm9ybURhdGEpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBDZWsgVGFuZ2dhbCBMYWhpciAoQ29udmVydCBzdHJpbmcga2UgRGF0ZSlcclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gQ2VrIGFwYWthaCBHdXJ1L1BlbWJpbmFcclxuICBjb25zdCBpc0Fkdmlzb3IgPSBmb3JtRGF0YS5nZXQoXCJpc0Fkdmlzb3JcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBWYWxpZGFzaSBEYXNhclxyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMvTklQLCBkYW4gSmFiYXRhbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXM6IGtlbGFzIHx8IFwiLVwiLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIC8vIOKchSBTSU1QQU4gVklTSSAmIE1JU0kgS0UgREFUQUJBU0VcclxuICAgICAgICB2aXNpOiB2aXNpIHx8IG51bGwsIFxyXG4gICAgICAgIG1pc2k6IG1pc2kgfHwgbnVsbCxcclxuICAgICAgICB0Z2xMYWhpcixcclxuICAgICAgICBmb3RvVXJsOiBmb3RvVXJsIHx8IG51bGwsXHJcbiAgICAgICAgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAgaXNBZHZpc29yOiBpc0Fkdmlzb3JcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5ndXJ1cyBiZXJoYXNpbCBkaXRhbWJhaGthbiEg8J+RpFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuIE5JUyBtdW5na2luIHN1ZGFoIHRlcmRhZnRhci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIC8vIEFtYmlsIHNlbXVhIGRhdGEgaW5wdXRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBS1RJRlwiIHwgXCJOT05BS1RJRlwiIHwgXCJBTFVNTklcIjtcclxuICBcclxuICAvLyBEYXRhIFRhbWJhaGFuXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGFzaSA9IGZvcm1EYXRhLmdldChcInRyYW5zcG9ydGFzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbW90dG8gPSBmb3JtRGF0YS5nZXQoXCJtb3R0b1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImZvdG9VcmxcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIOKchSBEQVRBIEJBUlU6IFZJU0kgJiBNSVNJIChVcGRhdGUpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgdGdsTGFoaXJSYXcgPSBmb3JtRGF0YS5nZXQoXCJ0Z2xMYWhpclwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGdsTGFoaXIgPSB0Z2xMYWhpclJhdyA/IG5ldyBEYXRlKHRnbExhaGlyUmF3KSA6IHVuZGVmaW5lZDsgXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgbmlzLFxyXG4gICAgICAgIGtlbGFzLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBocCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgdGlrdG9rLFxyXG4gICAgICAgIGRvbWlzaWxpLFxyXG4gICAgICAgIHRyYW5zcG9ydGFzaSxcclxuICAgICAgICBtb3R0byxcclxuICAgICAgICAvLyDinIUgVVBEQVRFIFZJU0kgJiBNSVNJXHJcbiAgICAgICAgdmlzaSwgXHJcbiAgICAgICAgbWlzaSxcclxuICAgICAgICAvLyBVcGRhdGUgdGFuZ2dhbCBsYWhpciBjdW1hIGthbGF1IGFkYSBpbnB1dCBiYXJ1XHJcbiAgICAgICAgLi4uKHRnbExhaGlyICYmIHsgdGdsTGFoaXIgfSksXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvdG8gY3VtYSBrYWxhdSBhZGEgZm90byBiYXJ1IHlhbmcgZGlraXJpbVxyXG4gICAgICAgIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIHBlbmd1cnVzIGRpcGVyYmFydWkhIPCfk51cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IGlkQ2FyZERlc2lnbjogZGVzaWduVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgSUQgQ0FSRCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwQ29uZmlnLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiAxIH0sXHJcbiAgICAgIHVwZGF0ZTogeyBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0sXHJcbiAgICAgIGNyZWF0ZTogeyBpZDogMSwgaWRDYXJkQmFja0ltYWdlOiBpbWFnZVVybCB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNBVkUgQkcgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNy4gU0lTVEVNIEFCU0VOU0kgKFNDQU5ORVIpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNjYW5BYnNlbnNpKG5pczogc3RyaW5nKSB7XHJcbiAgaWYgKCFuaXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlFSIENvZGUga29zb25nIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyAxLiBDYXJpIFBlbmd1cnVzIGJlcmRhc2Fya2FuIE5JU1xyXG4gICAgY29uc3QgcGVuZ3VydXMgPSBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IG5pczogbmlzIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXBlbmd1cnVzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBDb2RlIFRpZGFrIFRlcmRhZnRhciFcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZW5ndXJ1cy5zdGF0dXMgIT09IFwiQUtUSUZcIikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLimqDvuI8gQW5nZ290YSBUaWRhayBBa3RpZi9BbHVtbmlcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIENlayBhcGFrYWggc3VkYWggYWJzZW4gaGFyaSBpbmk/IChPcHNpb25hbDogQ2VnYWggc3BhbSBzY2FuKVxyXG4gICAgY29uc3QgdG9kYXlTdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICB0b2RheVN0YXJ0LnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2RheUVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICB0b2RheUVuZC5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nTG9nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBwZW5ndXJ1c0lkOiBwZW5ndXJ1cy5pZCxcclxuICAgICAgICB0YW5nZ2FsOiB7XHJcbiAgICAgICAgICBndGU6IHRvZGF5U3RhcnQsXHJcbiAgICAgICAgICBsdGU6IHRvZGF5RW5kLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdMb2cpIHtcclxuICAgICAgLy8gS2FsYXUgc3VkYWggYWJzZW4sIGtpdGEgdGV0YXAgcmV0dXJuIHN1Y2Nlc3MgdGFwaSBrYXNpaCBpbmZvIFwiU3VkYWggQWJzZW5cIlxyXG4gICAgICAvLyBCaWFyIFVJIHRldGFwIG1lbmFtcGlsa2FuIHByb2ZpbG55YSwgdGFwaSBzdGF0dXNueWEgYmVkYS5cclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgbWVzc2FnZTogXCJLYW11IHN1ZGFoIGFic2VuIGhhcmkgaW5pISDwn5GMXCIsIFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBuYW1lOiBwZW5ndXJ1cy5uYW1hLFxyXG4gICAgICAgICAgIHJvbGU6IHBlbmd1cnVzLmphYmF0YW4sXHJcbiAgICAgICAgICAgaW1hZ2U6IHBlbmd1cnVzLmZvdG9VcmwsXHJcbiAgICAgICAgICAgc3RhdHVzOiBcIkRVUExJQ0FURVwiIFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLiBTaW1wYW4ga2UgVGFiZWwgQWJzZW5zaVxyXG4gICAgYXdhaXQgcHJpc21hLmFic2Vuc2kuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLFxyXG4gICAgICAgIGtlZ2lhdGFuOiBcIkFic2Vuc2kgSGFyaWFuXCIsIC8vIFNlbWVudGFyYSBoYXJkY29kZSBkdWx1XHJcbiAgICAgICAgc3RhdHVzOiBcIkhBRElSXCIsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoKSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDQuIFJldHVybiBEYXRhIFBlbmd1cnVzIGtlIEZyb250ZW5kXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgIG1lc3NhZ2U6IFwiQWJzZW5zaSBCZXJoYXNpbCEg4pyFXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAgbmFtZTogcGVuZ3VydXMubmFtYSxcclxuICAgICAgICAgcm9sZTogcGVuZ3VydXMuamFiYXRhbixcclxuICAgICAgICAgaW1hZ2U6IHBlbmd1cnVzLmZvdG9VcmwsXHJcbiAgICAgICAgIHN0YXR1czogXCJIQURJUlwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU0NBTiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VydmVyIEVycm9yLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOC4gTUFOQUpFTUVOIEtFVUFOR0FOIChLQVMgJiBBTkdHQVJBTilcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBDYXRhdCBUcmFuc2Frc2kgS2FzIFVtdW1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdlbmVyYWxUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IHRpcGUgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIFwiUEVNQVNVS0FOXCIgfCBcIlBFTkdFTFVBUkFOXCI7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBpYyA9IGZvcm1EYXRhLmdldChcInBpY1wiKSBhcyBzdHJpbmc7IC8vIEtldGVyYW5nYW4gUElDXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIG5vbWluYWwsXHJcbiAgICAgICAgdGlwZSxcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBrZXRlcmFuZ2FuOiBgUElDOiAke3BpY31gLCAvLyBTaW1wYW4gUElDIGRpIGtldGVyYW5nYW5cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiVHJhbnNha3NpIGJlcmhhc2lsIGRpY2F0YXQhIPCfkrBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5jYXRhdCB0cmFuc2Frc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEJ1a2EgQW5nZ2FyYW4gRXZlbnQgQmFydSAoUGluZGFoIEJ1a3U6IEthcyBVbXVtIC0+IEV2ZW50KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRCdWRnZXQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYUV2ZW50ID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGJ1ZGdldCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEEuIENhdGF0IFBFTkdFTFVBUkFOIGRpIEthcyBVbXVtXHJcbiAgICAgIGF3YWl0IHR4LmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAganVkdWw6IGBNb2RhbCBFdmVudDogJHtuYW1hRXZlbnR9YCxcclxuICAgICAgICAgIG5vbWluYWw6IGJ1ZGdldCxcclxuICAgICAgICAgIHRpcGU6IFwiUEVOR0VMVUFSQU5cIixcclxuICAgICAgICAgIGthdGVnb3JpOiBcIkFuZ2dhcmFuIEV2ZW50XCIsXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICAgIGtldGVyYW5nYW46IFwiQWxva2FzaSBkYW5hIGtlIGV2ZW50IGJhcnVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEIuIEJ1YXQgRGF0YSBQcm9rZXIgQmFydSAoU3RhdHVzOiBBQ1RJVkUpXHJcbiAgICAgIGF3YWl0IHR4LnByb2dyYW1LZXJqYS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWE6IG5hbWFFdmVudCxcclxuICAgICAgICAgIGFuZ2dhcmFuOiBidWRnZXQsXHJcbiAgICAgICAgICBhbmdnYXJhblRlcnBha2FpOiAwLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIklOX1BST0dSRVNTXCIsIFxyXG4gICAgICAgICAgZGl2aXNpOiBcIktlcGFuaXRpYWFuXCIsIFxyXG4gICAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKGRhdGVTdHIpLCBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFuZ2dhcmFuIEV2ZW50IGJlcmhhc2lsIGRpYnVrYSEg8J+OiVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVZFTlQgQlVER0VUIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWthIGFuZ2dhcmFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBDYXRhdCBUcmFuc2Frc2kgUGVuZ2VsdWFyYW4gRXZlbnRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50VHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGV2ZW50SWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZXZlbnRJZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEEuIFNpbXBhbiBUcmFuc2Frc2kgKExpbmtlZCBrZSBQcm9rZXJJRClcclxuICAgICAgYXdhaXQgdHgua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCxcclxuICAgICAgICAgIG5vbWluYWwsXHJcbiAgICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAgICBrYXRlZ29yaTogXCJQZW5nZWx1YXJhbiBFdmVudFwiLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAgICBwcm9rZXJJZDogZXZlbnRJZCwgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCLiBVcGRhdGUgJ2FuZ2dhcmFuVGVycGFrYWknIGRpIHRhYmVsIFByb2tlclxyXG4gICAgICBhd2FpdCB0eC5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IHsgaW5jcmVtZW50OiBub21pbmFsIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5nZWx1YXJhbiBldmVudCBkaWNhdGF0ISDwn6e+XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBFVkVOVCBUUlggRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBkYXRhIGV2ZW50LlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTUFOQUpFTUVOIElOVkVOVEFSSVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBUYW1iYWgvRWRpdCBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvZGUgPSBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBoYXJnYSA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSk7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzZXJpYWwgPSBmb3JtRGF0YS5nZXQoXCJzZXJpYWxcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKGlkUmF3KSB7XHJcbiAgICAgIC8vIEVkaXRcclxuICAgICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHsgbmFtYSwga29kZSwga2F0ZWdvcmksIGhhcmdhLCBzZXJpYWxOdW06IHNlcmlhbCwgLi4uKGZvdG9VcmwgJiYgeyBmb3RvVXJsIH0pIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGVcclxuICAgICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7IFxyXG4gICAgICAgICAgIG5hbWEsIGtvZGUsIGthdGVnb3JpLCBoYXJnYSwgc2VyaWFsTnVtOiBzZXJpYWwsIGZvdG9VcmwsIFxyXG4gICAgICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIiwga29uZGlzaTogXCJCYWlrXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgYXNldCB0ZXJzaW1wYW4hIPCfk6ZcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW55aW1wYW4gYXNldC5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gSGFwdXMgQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBQaW5qYW0gQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IHBlbWluamFtID0gZm9ybURhdGEuZ2V0KFwiYm9ycm93ZXJcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czogXCJCT1JST1dFRFwiLFxyXG4gICAgICAgIHBlbWluamFtOiBwZW1pbmphbSxcclxuICAgICAgICB0Z2xQaW5qYW06IG5ldyBEYXRlKClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYXJhbmcgYmVyaGFzaWwgZGlwaW5qYW0hIPCflZJcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1wcm9zZXMgcGVtaW5qYW1hbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNC4gS2VtYmFsaWthbiBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGtvbmRpc2kgPSBmb3JtRGF0YS5nZXQoXCJjb25kaXRpb25cIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyBBbWJpbCBkYXRhIGJhcmFuZyBkdWx1IGJ1YXQgdGF1IHNpYXBhIHBlbWluamFtIHRlcmFraGlyXHJcbiAgICAgIGNvbnN0IGJhcmFuZyA9IGF3YWl0IHR4LmludmVudGFyaXMuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICAgIGlmICghYmFyYW5nIHx8ICFiYXJhbmcucGVtaW5qYW0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEYXRhIGJhcmFuZyB0aWRhayB2YWxpZCBhdGF1IHRpZGFrIHNlZGFuZyBkaXBpbmphbS5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEEuIFNpbXBhbiBrZSBSaXdheWF0XHJcbiAgICAgIGF3YWl0IHR4LnJpd2F5YXRBc2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaW52ZW50YXJpc0lkOiBpZCxcclxuICAgICAgICAgIHBlbWluamFtOiBiYXJhbmcucGVtaW5qYW0sXHJcbiAgICAgICAgICB0Z2xLZWx1YXI6IGJhcmFuZy50Z2xQaW5qYW0gfHwgbmV3IERhdGUoKSxcclxuICAgICAgICAgIHRnbEtlbWJhbGk6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBrb25kaXNpS2VtYmFsaToga29uZGlzaVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCLiBSZXNldCBTdGF0dXMgQmFyYW5nXHJcbiAgICAgIGF3YWl0IHR4LmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czoga29uZGlzaSA9PT0gXCJSdXNha1wiID8gXCJNQUlOVEVOQU5DRVwiIDogXCJBVkFJTEFCTEVcIixcclxuICAgICAgICAgIGtvbmRpc2k6IGtvbmRpc2ksXHJcbiAgICAgICAgICBwZW1pbmphbTogbnVsbCxcclxuICAgICAgICAgIHRnbFBpbmphbTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJhcmFuZyBzdWRhaCBkaWtlbWJhbGlrYW4hIOKchVwiIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVUVVJOIElURU0gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiR2FnYWwgbWVtcHJvc2VzIHBlbmdlbWJhbGlhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDExLiBTVEFUSVNUSUsgUEVOR1VOSlVORyAoVklTSVRPUiBUUkFDS0lORylcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tWaXNpdG9yKGlwOiBzdHJpbmcsIHVzZXJBZ2VudDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcclxuICAvLyAxLiBBYmFpa2FuIHJ1dGUgaW50ZXJuYWwvYWRtaW5cclxuICBpZiAocGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSB8fCBwYXRoLnN0YXJ0c1dpdGgoJy9hcGknKSB8fCBwYXRoLmluY2x1ZGVzKCdfbmV4dCcpIHx8IHBhdGguaW5jbHVkZXMoJ2Zhdmljb24nKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gMi4gRmlsdGVyIEJvdCBEYXNhciAoTWVuY2VnYWgganV0YWFuIGhpdCBkYXJpIGNyYXdsZXIpXHJcbiAgY29uc3QgYm90S2V5d29yZHMgPSBbJ2JvdCcsICdjcmF3bGVyJywgJ3NwaWRlcicsICdnb29nbGVib3QnLCAnYmluZ2JvdCcsICd5YW5kZXhib3QnLCAnc2x1cnAnLCAnYmFpZHVzcGlkZXInXTtcclxuICBjb25zdCB1YUxvd2VyID0gdXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKGJvdEtleXdvcmRzLnNvbWUoa2V5d29yZCA9PiB1YUxvd2VyLmluY2x1ZGVzKGtleXdvcmQpKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gU2FmZXR5IGNoZWNrOiBQYXN0aWthbiBtb2RlbCB2aXNpdG9yIGFkYVxyXG4gIGlmICghKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IpIHJldHVybjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIDMuIEd1bmFrYW4gcmVudGFuZyB3YWt0dSB1bnR1ayBwZW5nZWNla2FuIFwidW5pcXVlIHZpc2l0XCJcclxuICAgIC8vIEtpdGEgYW5nZ2FwIHNhdHUgb3JhbmcgYWRhbGFoIHNhdHUga3VuanVuZ2FuIHBlciAxIGphbSBwZXIgaGFsYW1hblxyXG4gICAgY29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBcclxuICAgIC8vIENlayBhcGFrYWggc3VkYWggYWRhIGt1bmp1bmdhbiBzZXJ1cGEgKGd1bmFrYW4gc2VsZWN0IGlkIHNhamEgYWdhciByaW5nYW4pXHJcbiAgICBjb25zdCByZWNlbnRWaXNpdCA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS52aXNpdG9yLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaXAsXHJcbiAgICAgICAgcGF0aCxcclxuICAgICAgICBjcmVhdGVkQXQ6IHsgZ3RlOiBvbmVIb3VyQWdvIH1cclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVjZW50VmlzaXQpIHtcclxuICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7IGlwLCB1c2VyQWdlbnQ6IHVzZXJBZ2VudC5zdWJzdHJpbmcoMCwgMjU1KSwgcGF0aCB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBHdW5ha2FuIGxvZ2dpbmcgeWFuZyB0aWRhayBtZW5naGVudGlrYW4gcHJvc2VzIHV0YW1hXHJcbiAgICBjb25zb2xlLmVycm9yKFwiVFJBQ0sgVklTSVRPUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEwLiBNQU5BSkVNRU4gR0FMRVJJIEtFR0lBVEFOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVHYWxlcmkoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBBbWJpbCBKU09OIHN0cmluZyBkYXJpIGZvcm0gY2xpZW50XHJcbiAgY29uc3QgaW1hZ2VzSnNvbiA9IGZvcm1EYXRhLmdldChcImltYWdlc1wiKSBhcyBzdHJpbmc7IFxyXG5cclxuICBpZiAoIWp1ZHVsIHx8ICFpbWFnZXNKc29uKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCBkYW4gbWluaW1hbCAxIEZvdG8gd2FqaWIgZGlpc2khXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gTU9ERSBFRElUXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb24gLy8gU2ltcGFuIHNlYmFnYWkgSlNPTiBTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTU9ERSBCQVJVXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCwga2F0ZWdvcmksIGRlc2tyaXBzaSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWwpLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXNKc29uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiR2FsZXJpIGJlcmhhc2lsIGRpc2ltcGFuISDwn5O4XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkdBTEVSSSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGdhbGVyaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFSQTZQc0IsK0xBQUEifQ==
}),
"[project]/lib/data:b0dc0d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProgramKerja",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4074094fe74a7df749f1443c40c9f5fc3e1c224998":"updateProgramKerja"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4074094fe74a7df749f1443c40c9f5fc3e1c224998", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProgramKerja");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUHJva2VyU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIG5hbWE6IHouc3RyaW5nKCkubWluKDMsIFwiTmFtYSBwcm9rZXIgbWluaW1hbCAzIGthcmFrdGVyXCIpLFxyXG4gIGRlc2tyaXBzaTogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbiAgZGl2aXNpOiB6LnN0cmluZygpLFxyXG4gIHByaW9yaXRhczogei5zdHJpbmcoKS5kZWZhdWx0KFwiTWVkaXVtXCIpLFxyXG4gIGFuZ2dhcmFuOiB6Lm51bWJlcigpLm5vbm5lZ2F0aXZlKCkuZGVmYXVsdCgwKSxcclxuICBwcm9ncmVzczogei5udW1iZXIoKS5taW4oMCkubWF4KDEwMCkuZGVmYXVsdCgwKSxcclxuICBsb2thc2k6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG4gIGltYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBpc0ZlYXR1cmVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcclxuICBzdGFydERhdGU6IHouZGF0ZSgpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBkZWFkbGluZTogei5kYXRlKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAxLiBBU1BJUkFTSSBTSVNXQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLy8gLi4uIChza2lwIGZvciBicmV2aXR5LCB3aWxsIGFwcGx5IGluIG11bHRpcGxlIHN0ZXBzIGlmIG5lZWRlZClcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IEJlcml0YVNjaGVtYS5zYWZlUGFyc2Uoe1xyXG4gICAganVkdWw6IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpLFxyXG4gICAga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksXHJcbiAgICBrYXRlZ29yaTogZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgfHwgXCJVbXVtXCIsXHJcbiAgICBnYW1iYXI6IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgbWVzc2FnZTogZXJyb3JNc2cuanVkdWw/LlswXSB8fCBlcnJvck1zZy5rb250ZW4/LlswXSB8fCBcIkRhdGEgdGlkYWsgdmFsaWQuXCIgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBqdWR1bCwga29udGVuLCBrYXRlZ29yaSwgZ2FtYmFyIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuICBjb25zdCBzbHVnID0gYCR7c2x1Z2lmeShqdWR1bCl9LSR7RGF0ZS5ub3coKX1gO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlc2kgaGFiaXMuIFNpbGFrYW4gbG9naW4ga2VtYmFsaS5cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIWFkbWluVXNlcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRXJyb3I6IFVzZXIgdGlkYWsgZGl0ZW11a2FuIGRpIGRhdGFiYXNlIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBrb250ZW4sXHJcbiAgICAgICAga2F0ZWdvcmksXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIgfHwgbnVsbCxcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgc3RhdHVzOiBcIlBVQkxJU0hFRFwiLFxyXG4gICAgICAgIHZpZXdzOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGJlcmhhc2lsIHRlcmJpdCEg8J+TsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5lcmJpdGthbiBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGlmICghaWRSYXcpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIklEIHRpZGFrIHZhbGlkLlwiIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgZGlwZXJiYXJ1aSEg8J+TnVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQmVyaXRhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEJFUklUQSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA0LiBNQU5BSkVNRU4gUFJPR1JBTSBLRVJKQSAoVVBEQVRFIEZJWClcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIEFtYmlsIGRhdGEgc2VzdWFpIG5hbWEgZmllbGQgZGkgRnJvbnRlbmRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByaW9yaXRhcyA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZzsgLy8gRnJvbnRlbmQga2lyaW0gJ3ByaW9yaXR5JywgREIgc2ltcGFuICdwcmlvcml0YXMnXHJcbiAgY29uc3QgYW5nZ2FyYW4gPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nOyAvLyBQSUMgZGlzaW1wYW4gZGkga29sb20gbG9rYXNpXHJcbiAgXHJcbiAgLy8g4pyFIEZJVFVSIEJBUlU6IEltYWdlICYgRmVhdHVyZWRcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZzsgXHJcbiAgY29uc3QgaXNGZWF0dXJlZCA9IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBEYXRlIEhhbmRsaW5nXHJcbiAgY29uc3Qgc3RhcnREYXRlUmF3ID0gZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGFydERhdGUgPSBzdGFydERhdGVSYXcgPyBuZXcgRGF0ZShzdGFydERhdGVSYXcpIDogbnVsbDtcclxuICBjb25zdCBkZWFkbGluZVJhdyA9IGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZWFkbGluZSA9IGRlYWRsaW5lUmF3ID8gbmV3IERhdGUoZGVhZGxpbmVSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gTWFwcGluZyBTdGF0dXMgTG9naWMgKE90b21hdGlzIGF0YXUgTWFudWFsIGRhcmkgRnJvbnRlbmQpXHJcbiAgLy8gS2l0YSBwYWthaSBzdGF0dXMgbWFudWFsIGthbGF1IGRpa2lyaW0sIGthbGF1IG5nZ2FrIHBha2FpIGxvZ2ljIHByb2dyZXNzXHJcbiAgbGV0IHN0YXR1cyA9IFwiVE9ET1wiO1xyXG4gIGlmIChwcm9ncmVzcyA+IDAgJiYgcHJvZ3Jlc3MgPCAxMDApIHN0YXR1cyA9IFwiSU5fUFJPR1JFU1NcIjtcclxuICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkgc3RhdHVzID0gXCJET05FXCI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIGRlc2tyaXBzaSxcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgcHJpb3JpdGFzLFxyXG4gICAgICAgIGFuZ2dhcmFuLFxyXG4gICAgICAgIHByb2dyZXNzLFxyXG4gICAgICAgIHN0YXR1cywgLy8gU2ltcGFuIHN0YXR1c1xyXG4gICAgICAgIGxva2FzaSwgLy8gUElDXHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIGRlYWRsaW5lLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZSB8fCBudWxsLCAvLyBTaW1wYW4gR2FtYmFyXHJcbiAgICAgICAgaXNGZWF0dXJlZDogaXNGZWF0dXJlZCAvLyBTaW1wYW4gU3RhdHVzIFVuZ2d1bGFuXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZWZyZXNoIGhhbGFtYW4gQWRtaW4gJiBIb21lcGFnZSAoa2FyZW5hIGFkYSBzZWN0aW9uIFByb2dyYW0gVW5nZ3VsYW4pXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGlidWF0ISDwn5qAXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1YXQgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJpb3JpdGFzID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGFuZ2dhcmFuID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKTtcclxuICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcm9ncmVzc1wiKSk7XHJcbiAgY29uc3QgbG9rYXNpID0gZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpc0ZlYXR1cmVkID0gZm9ybURhdGEuZ2V0KFwiaXNGZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGNvbnN0IHN0YXJ0RGF0ZVJhdyA9IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gc3RhcnREYXRlUmF3ID8gbmV3IERhdGUoc3RhcnREYXRlUmF3KSA6IG51bGw7XHJcbiAgY29uc3QgZGVhZGxpbmVSYXcgPSBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVhZGxpbmUgPSBkZWFkbGluZVJhdyA/IG5ldyBEYXRlKGRlYWRsaW5lUmF3KSA6IG51bGw7XHJcblxyXG4gIC8vIFN0YXR1cyBMb2dpYyBVcGRhdGVcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBwcmlvcml0YXMsXHJcbiAgICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGxva2FzaSxcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgZGVhZGxpbmUsXHJcbiAgICAgICAgaXNGZWF0dXJlZCxcclxuICAgICAgICAvLyBVcGRhdGUgZ2FtYmFyIENVTUEgamlrYSB1c2VyIHVwbG9hZCBiYXJ1IChzdHJpbmcgdGlkYWsga29zb25nKVxyXG4gICAgICAgIC4uLihpbWFnZSAmJiB7IGltYWdlIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJva2VyXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGl1cGRhdGUhIOKcqFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBHYW50aSBuYW1hIGRlbGV0ZVByb2tlciBqYWRpIGRlbGV0ZVByb2dyYW1LZXJqYSBiaWFyIGtvbnNpc3RlbiBzYW1hIGZyb250ZW5kXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9ncmFtS2VyamEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNS4gTUFOQUpFTUVOIFBFTkdVUlVTIChMRU5HS0FQKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAvLyAxLiBBbWJpbCBEYXRhIFdhamliXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8gMi4gQW1iaWwgRGF0YSBUYW1iYWhhblxyXG4gIGNvbnN0IGhwID0gZm9ybURhdGEuZ2V0KFwiaHBcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGluc3RhZ3JhbSA9IGZvcm1EYXRhLmdldChcImluc3RhZ3JhbVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGlrdG9rID0gZm9ybURhdGEuZ2V0KFwidGlrdG9rXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkb21pc2lsaSA9IGZvcm1EYXRhLmdldChcImRvbWlzaWxpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0cmFuc3BvcnRhc2kgPSBmb3JtRGF0YS5nZXQoXCJ0cmFuc3BvcnRhc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1vdHRvID0gZm9ybURhdGEuZ2V0KFwibW90dG9cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyDinIUgREFUQSBCQVJVOiBWSVNJICYgTUlTSSAoRGl0YW5na2FwIGRhcmkgRm9ybURhdGEpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBDZWsgVGFuZ2dhbCBMYWhpciAoQ29udmVydCBzdHJpbmcga2UgRGF0ZSlcclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gQ2VrIGFwYWthaCBHdXJ1L1BlbWJpbmFcclxuICBjb25zdCBpc0Fkdmlzb3IgPSBmb3JtRGF0YS5nZXQoXCJpc0Fkdmlzb3JcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBWYWxpZGFzaSBEYXNhclxyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMvTklQLCBkYW4gSmFiYXRhbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXM6IGtlbGFzIHx8IFwiLVwiLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIC8vIOKchSBTSU1QQU4gVklTSSAmIE1JU0kgS0UgREFUQUJBU0VcclxuICAgICAgICB2aXNpOiB2aXNpIHx8IG51bGwsIFxyXG4gICAgICAgIG1pc2k6IG1pc2kgfHwgbnVsbCxcclxuICAgICAgICB0Z2xMYWhpcixcclxuICAgICAgICBmb3RvVXJsOiBmb3RvVXJsIHx8IG51bGwsXHJcbiAgICAgICAgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAgaXNBZHZpc29yOiBpc0Fkdmlzb3JcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5ndXJ1cyBiZXJoYXNpbCBkaXRhbWJhaGthbiEg8J+RpFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuIE5JUyBtdW5na2luIHN1ZGFoIHRlcmRhZnRhci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIC8vIEFtYmlsIHNlbXVhIGRhdGEgaW5wdXRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBS1RJRlwiIHwgXCJOT05BS1RJRlwiIHwgXCJBTFVNTklcIjtcclxuICBcclxuICAvLyBEYXRhIFRhbWJhaGFuXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGFzaSA9IGZvcm1EYXRhLmdldChcInRyYW5zcG9ydGFzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbW90dG8gPSBmb3JtRGF0YS5nZXQoXCJtb3R0b1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImZvdG9VcmxcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIOKchSBEQVRBIEJBUlU6IFZJU0kgJiBNSVNJIChVcGRhdGUpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgdGdsTGFoaXJSYXcgPSBmb3JtRGF0YS5nZXQoXCJ0Z2xMYWhpclwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGdsTGFoaXIgPSB0Z2xMYWhpclJhdyA/IG5ldyBEYXRlKHRnbExhaGlyUmF3KSA6IHVuZGVmaW5lZDsgXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgbmlzLFxyXG4gICAgICAgIGtlbGFzLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBocCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgdGlrdG9rLFxyXG4gICAgICAgIGRvbWlzaWxpLFxyXG4gICAgICAgIHRyYW5zcG9ydGFzaSxcclxuICAgICAgICBtb3R0byxcclxuICAgICAgICAvLyDinIUgVVBEQVRFIFZJU0kgJiBNSVNJXHJcbiAgICAgICAgdmlzaSwgXHJcbiAgICAgICAgbWlzaSxcclxuICAgICAgICAvLyBVcGRhdGUgdGFuZ2dhbCBsYWhpciBjdW1hIGthbGF1IGFkYSBpbnB1dCBiYXJ1XHJcbiAgICAgICAgLi4uKHRnbExhaGlyICYmIHsgdGdsTGFoaXIgfSksXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvdG8gY3VtYSBrYWxhdSBhZGEgZm90byBiYXJ1IHlhbmcgZGlraXJpbVxyXG4gICAgICAgIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIHBlbmd1cnVzIGRpcGVyYmFydWkhIPCfk51cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IGlkQ2FyZERlc2lnbjogZGVzaWduVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgSUQgQ0FSRCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwQ29uZmlnLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiAxIH0sXHJcbiAgICAgIHVwZGF0ZTogeyBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0sXHJcbiAgICAgIGNyZWF0ZTogeyBpZDogMSwgaWRDYXJkQmFja0ltYWdlOiBpbWFnZVVybCB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNBVkUgQkcgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNy4gU0lTVEVNIEFCU0VOU0kgKFNDQU5ORVIpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNjYW5BYnNlbnNpKG5pczogc3RyaW5nKSB7XHJcbiAgaWYgKCFuaXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlFSIENvZGUga29zb25nIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyAxLiBDYXJpIFBlbmd1cnVzIGJlcmRhc2Fya2FuIE5JU1xyXG4gICAgY29uc3QgcGVuZ3VydXMgPSBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IG5pczogbmlzIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXBlbmd1cnVzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBDb2RlIFRpZGFrIFRlcmRhZnRhciFcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZW5ndXJ1cy5zdGF0dXMgIT09IFwiQUtUSUZcIikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLimqDvuI8gQW5nZ290YSBUaWRhayBBa3RpZi9BbHVtbmlcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIENlayBhcGFrYWggc3VkYWggYWJzZW4gaGFyaSBpbmk/IChPcHNpb25hbDogQ2VnYWggc3BhbSBzY2FuKVxyXG4gICAgY29uc3QgdG9kYXlTdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICB0b2RheVN0YXJ0LnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2RheUVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICB0b2RheUVuZC5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nTG9nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBwZW5ndXJ1c0lkOiBwZW5ndXJ1cy5pZCxcclxuICAgICAgICB0YW5nZ2FsOiB7XHJcbiAgICAgICAgICBndGU6IHRvZGF5U3RhcnQsXHJcbiAgICAgICAgICBsdGU6IHRvZGF5RW5kLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdMb2cpIHtcclxuICAgICAgLy8gS2FsYXUgc3VkYWggYWJzZW4sIGtpdGEgdGV0YXAgcmV0dXJuIHN1Y2Nlc3MgdGFwaSBrYXNpaCBpbmZvIFwiU3VkYWggQWJzZW5cIlxyXG4gICAgICAvLyBCaWFyIFVJIHRldGFwIG1lbmFtcGlsa2FuIHByb2ZpbG55YSwgdGFwaSBzdGF0dXNueWEgYmVkYS5cclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgbWVzc2FnZTogXCJLYW11IHN1ZGFoIGFic2VuIGhhcmkgaW5pISDwn5GMXCIsIFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBuYW1lOiBwZW5ndXJ1cy5uYW1hLFxyXG4gICAgICAgICAgIHJvbGU6IHBlbmd1cnVzLmphYmF0YW4sXHJcbiAgICAgICAgICAgaW1hZ2U6IHBlbmd1cnVzLmZvdG9VcmwsXHJcbiAgICAgICAgICAgc3RhdHVzOiBcIkRVUExJQ0FURVwiIFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLiBTaW1wYW4ga2UgVGFiZWwgQWJzZW5zaVxyXG4gICAgYXdhaXQgcHJpc21hLmFic2Vuc2kuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLFxyXG4gICAgICAgIGtlZ2lhdGFuOiBcIkFic2Vuc2kgSGFyaWFuXCIsIC8vIFNlbWVudGFyYSBoYXJkY29kZSBkdWx1XHJcbiAgICAgICAgc3RhdHVzOiBcIkhBRElSXCIsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoKSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDQuIFJldHVybiBEYXRhIFBlbmd1cnVzIGtlIEZyb250ZW5kXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgIG1lc3NhZ2U6IFwiQWJzZW5zaSBCZXJoYXNpbCEg4pyFXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAgbmFtZTogcGVuZ3VydXMubmFtYSxcclxuICAgICAgICAgcm9sZTogcGVuZ3VydXMuamFiYXRhbixcclxuICAgICAgICAgaW1hZ2U6IHBlbmd1cnVzLmZvdG9VcmwsXHJcbiAgICAgICAgIHN0YXR1czogXCJIQURJUlwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU0NBTiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VydmVyIEVycm9yLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOC4gTUFOQUpFTUVOIEtFVUFOR0FOIChLQVMgJiBBTkdHQVJBTilcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBDYXRhdCBUcmFuc2Frc2kgS2FzIFVtdW1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdlbmVyYWxUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IHRpcGUgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIFwiUEVNQVNVS0FOXCIgfCBcIlBFTkdFTFVBUkFOXCI7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBpYyA9IGZvcm1EYXRhLmdldChcInBpY1wiKSBhcyBzdHJpbmc7IC8vIEtldGVyYW5nYW4gUElDXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIG5vbWluYWwsXHJcbiAgICAgICAgdGlwZSxcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBrZXRlcmFuZ2FuOiBgUElDOiAke3BpY31gLCAvLyBTaW1wYW4gUElDIGRpIGtldGVyYW5nYW5cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiVHJhbnNha3NpIGJlcmhhc2lsIGRpY2F0YXQhIPCfkrBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5jYXRhdCB0cmFuc2Frc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEJ1a2EgQW5nZ2FyYW4gRXZlbnQgQmFydSAoUGluZGFoIEJ1a3U6IEthcyBVbXVtIC0+IEV2ZW50KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRCdWRnZXQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYUV2ZW50ID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGJ1ZGdldCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEEuIENhdGF0IFBFTkdFTFVBUkFOIGRpIEthcyBVbXVtXHJcbiAgICAgIGF3YWl0IHR4LmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAganVkdWw6IGBNb2RhbCBFdmVudDogJHtuYW1hRXZlbnR9YCxcclxuICAgICAgICAgIG5vbWluYWw6IGJ1ZGdldCxcclxuICAgICAgICAgIHRpcGU6IFwiUEVOR0VMVUFSQU5cIixcclxuICAgICAgICAgIGthdGVnb3JpOiBcIkFuZ2dhcmFuIEV2ZW50XCIsXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICAgIGtldGVyYW5nYW46IFwiQWxva2FzaSBkYW5hIGtlIGV2ZW50IGJhcnVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEIuIEJ1YXQgRGF0YSBQcm9rZXIgQmFydSAoU3RhdHVzOiBBQ1RJVkUpXHJcbiAgICAgIGF3YWl0IHR4LnByb2dyYW1LZXJqYS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWE6IG5hbWFFdmVudCxcclxuICAgICAgICAgIGFuZ2dhcmFuOiBidWRnZXQsXHJcbiAgICAgICAgICBhbmdnYXJhblRlcnBha2FpOiAwLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIklOX1BST0dSRVNTXCIsIFxyXG4gICAgICAgICAgZGl2aXNpOiBcIktlcGFuaXRpYWFuXCIsIFxyXG4gICAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKGRhdGVTdHIpLCBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFuZ2dhcmFuIEV2ZW50IGJlcmhhc2lsIGRpYnVrYSEg8J+OiVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVZFTlQgQlVER0VUIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWthIGFuZ2dhcmFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBDYXRhdCBUcmFuc2Frc2kgUGVuZ2VsdWFyYW4gRXZlbnRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50VHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGV2ZW50SWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZXZlbnRJZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEEuIFNpbXBhbiBUcmFuc2Frc2kgKExpbmtlZCBrZSBQcm9rZXJJRClcclxuICAgICAgYXdhaXQgdHgua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCxcclxuICAgICAgICAgIG5vbWluYWwsXHJcbiAgICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAgICBrYXRlZ29yaTogXCJQZW5nZWx1YXJhbiBFdmVudFwiLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAgICBwcm9rZXJJZDogZXZlbnRJZCwgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCLiBVcGRhdGUgJ2FuZ2dhcmFuVGVycGFrYWknIGRpIHRhYmVsIFByb2tlclxyXG4gICAgICBhd2FpdCB0eC5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IHsgaW5jcmVtZW50OiBub21pbmFsIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5nZWx1YXJhbiBldmVudCBkaWNhdGF0ISDwn6e+XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBFVkVOVCBUUlggRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBkYXRhIGV2ZW50LlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTUFOQUpFTUVOIElOVkVOVEFSSVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBUYW1iYWgvRWRpdCBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvZGUgPSBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBoYXJnYSA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSk7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzZXJpYWwgPSBmb3JtRGF0YS5nZXQoXCJzZXJpYWxcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKGlkUmF3KSB7XHJcbiAgICAgIC8vIEVkaXRcclxuICAgICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHsgbmFtYSwga29kZSwga2F0ZWdvcmksIGhhcmdhLCBzZXJpYWxOdW06IHNlcmlhbCwgLi4uKGZvdG9VcmwgJiYgeyBmb3RvVXJsIH0pIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGVcclxuICAgICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7IFxyXG4gICAgICAgICAgIG5hbWEsIGtvZGUsIGthdGVnb3JpLCBoYXJnYSwgc2VyaWFsTnVtOiBzZXJpYWwsIGZvdG9VcmwsIFxyXG4gICAgICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIiwga29uZGlzaTogXCJCYWlrXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgYXNldCB0ZXJzaW1wYW4hIPCfk6ZcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW55aW1wYW4gYXNldC5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gSGFwdXMgQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBQaW5qYW0gQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IHBlbWluamFtID0gZm9ybURhdGEuZ2V0KFwiYm9ycm93ZXJcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czogXCJCT1JST1dFRFwiLFxyXG4gICAgICAgIHBlbWluamFtOiBwZW1pbmphbSxcclxuICAgICAgICB0Z2xQaW5qYW06IG5ldyBEYXRlKClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYXJhbmcgYmVyaGFzaWwgZGlwaW5qYW0hIPCflZJcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1wcm9zZXMgcGVtaW5qYW1hbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNC4gS2VtYmFsaWthbiBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGtvbmRpc2kgPSBmb3JtRGF0YS5nZXQoXCJjb25kaXRpb25cIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyBBbWJpbCBkYXRhIGJhcmFuZyBkdWx1IGJ1YXQgdGF1IHNpYXBhIHBlbWluamFtIHRlcmFraGlyXHJcbiAgICAgIGNvbnN0IGJhcmFuZyA9IGF3YWl0IHR4LmludmVudGFyaXMuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICAgIGlmICghYmFyYW5nIHx8ICFiYXJhbmcucGVtaW5qYW0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEYXRhIGJhcmFuZyB0aWRhayB2YWxpZCBhdGF1IHRpZGFrIHNlZGFuZyBkaXBpbmphbS5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEEuIFNpbXBhbiBrZSBSaXdheWF0XHJcbiAgICAgIGF3YWl0IHR4LnJpd2F5YXRBc2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaW52ZW50YXJpc0lkOiBpZCxcclxuICAgICAgICAgIHBlbWluamFtOiBiYXJhbmcucGVtaW5qYW0sXHJcbiAgICAgICAgICB0Z2xLZWx1YXI6IGJhcmFuZy50Z2xQaW5qYW0gfHwgbmV3IERhdGUoKSxcclxuICAgICAgICAgIHRnbEtlbWJhbGk6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBrb25kaXNpS2VtYmFsaToga29uZGlzaVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCLiBSZXNldCBTdGF0dXMgQmFyYW5nXHJcbiAgICAgIGF3YWl0IHR4LmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czoga29uZGlzaSA9PT0gXCJSdXNha1wiID8gXCJNQUlOVEVOQU5DRVwiIDogXCJBVkFJTEFCTEVcIixcclxuICAgICAgICAgIGtvbmRpc2k6IGtvbmRpc2ksXHJcbiAgICAgICAgICBwZW1pbmphbTogbnVsbCxcclxuICAgICAgICAgIHRnbFBpbmphbTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJhcmFuZyBzdWRhaCBkaWtlbWJhbGlrYW4hIOKchVwiIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVUVVJOIElURU0gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiR2FnYWwgbWVtcHJvc2VzIHBlbmdlbWJhbGlhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDExLiBTVEFUSVNUSUsgUEVOR1VOSlVORyAoVklTSVRPUiBUUkFDS0lORylcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tWaXNpdG9yKGlwOiBzdHJpbmcsIHVzZXJBZ2VudDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcclxuICAvLyAxLiBBYmFpa2FuIHJ1dGUgaW50ZXJuYWwvYWRtaW5cclxuICBpZiAocGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSB8fCBwYXRoLnN0YXJ0c1dpdGgoJy9hcGknKSB8fCBwYXRoLmluY2x1ZGVzKCdfbmV4dCcpIHx8IHBhdGguaW5jbHVkZXMoJ2Zhdmljb24nKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gMi4gRmlsdGVyIEJvdCBEYXNhciAoTWVuY2VnYWgganV0YWFuIGhpdCBkYXJpIGNyYXdsZXIpXHJcbiAgY29uc3QgYm90S2V5d29yZHMgPSBbJ2JvdCcsICdjcmF3bGVyJywgJ3NwaWRlcicsICdnb29nbGVib3QnLCAnYmluZ2JvdCcsICd5YW5kZXhib3QnLCAnc2x1cnAnLCAnYmFpZHVzcGlkZXInXTtcclxuICBjb25zdCB1YUxvd2VyID0gdXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKGJvdEtleXdvcmRzLnNvbWUoa2V5d29yZCA9PiB1YUxvd2VyLmluY2x1ZGVzKGtleXdvcmQpKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gU2FmZXR5IGNoZWNrOiBQYXN0aWthbiBtb2RlbCB2aXNpdG9yIGFkYVxyXG4gIGlmICghKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IpIHJldHVybjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIDMuIEd1bmFrYW4gcmVudGFuZyB3YWt0dSB1bnR1ayBwZW5nZWNla2FuIFwidW5pcXVlIHZpc2l0XCJcclxuICAgIC8vIEtpdGEgYW5nZ2FwIHNhdHUgb3JhbmcgYWRhbGFoIHNhdHUga3VuanVuZ2FuIHBlciAxIGphbSBwZXIgaGFsYW1hblxyXG4gICAgY29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBcclxuICAgIC8vIENlayBhcGFrYWggc3VkYWggYWRhIGt1bmp1bmdhbiBzZXJ1cGEgKGd1bmFrYW4gc2VsZWN0IGlkIHNhamEgYWdhciByaW5nYW4pXHJcbiAgICBjb25zdCByZWNlbnRWaXNpdCA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS52aXNpdG9yLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaXAsXHJcbiAgICAgICAgcGF0aCxcclxuICAgICAgICBjcmVhdGVkQXQ6IHsgZ3RlOiBvbmVIb3VyQWdvIH1cclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVjZW50VmlzaXQpIHtcclxuICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7IGlwLCB1c2VyQWdlbnQ6IHVzZXJBZ2VudC5zdWJzdHJpbmcoMCwgMjU1KSwgcGF0aCB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBHdW5ha2FuIGxvZ2dpbmcgeWFuZyB0aWRhayBtZW5naGVudGlrYW4gcHJvc2VzIHV0YW1hXHJcbiAgICBjb25zb2xlLmVycm9yKFwiVFJBQ0sgVklTSVRPUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEwLiBNQU5BSkVNRU4gR0FMRVJJIEtFR0lBVEFOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVHYWxlcmkoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBBbWJpbCBKU09OIHN0cmluZyBkYXJpIGZvcm0gY2xpZW50XHJcbiAgY29uc3QgaW1hZ2VzSnNvbiA9IGZvcm1EYXRhLmdldChcImltYWdlc1wiKSBhcyBzdHJpbmc7IFxyXG5cclxuICBpZiAoIWp1ZHVsIHx8ICFpbWFnZXNKc29uKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCBkYW4gbWluaW1hbCAxIEZvdG8gd2FqaWIgZGlpc2khXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gTU9ERSBFRElUXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb24gLy8gU2ltcGFuIHNlYmFnYWkgSlNPTiBTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTU9ERSBCQVJVXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCwga2F0ZWdvcmksIGRlc2tyaXBzaSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWwpLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXNKc29uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiR2FsZXJpIGJlcmhhc2lsIGRpc2ltcGFuISDwn5O4XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkdBTEVSSSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGdhbGVyaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFSQW1Uc0IsK0xBQUEifQ==
}),
"[project]/lib/data:da46ee [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProgramKerja",
    ()=>$$RSC_SERVER_ACTION_8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a4e73127f25e0c1d2679b3627c6f425667338ba3":"deleteProgramKerja"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a4e73127f25e0c1d2679b3627c6f425667338ba3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProgramKerja");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUHJva2VyU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIG5hbWE6IHouc3RyaW5nKCkubWluKDMsIFwiTmFtYSBwcm9rZXIgbWluaW1hbCAzIGthcmFrdGVyXCIpLFxyXG4gIGRlc2tyaXBzaTogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbiAgZGl2aXNpOiB6LnN0cmluZygpLFxyXG4gIHByaW9yaXRhczogei5zdHJpbmcoKS5kZWZhdWx0KFwiTWVkaXVtXCIpLFxyXG4gIGFuZ2dhcmFuOiB6Lm51bWJlcigpLm5vbm5lZ2F0aXZlKCkuZGVmYXVsdCgwKSxcclxuICBwcm9ncmVzczogei5udW1iZXIoKS5taW4oMCkubWF4KDEwMCkuZGVmYXVsdCgwKSxcclxuICBsb2thc2k6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG4gIGltYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBpc0ZlYXR1cmVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcclxuICBzdGFydERhdGU6IHouZGF0ZSgpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBkZWFkbGluZTogei5kYXRlKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAxLiBBU1BJUkFTSSBTSVNXQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLy8gLi4uIChza2lwIGZvciBicmV2aXR5LCB3aWxsIGFwcGx5IGluIG11bHRpcGxlIHN0ZXBzIGlmIG5lZWRlZClcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IEJlcml0YVNjaGVtYS5zYWZlUGFyc2Uoe1xyXG4gICAganVkdWw6IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpLFxyXG4gICAga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksXHJcbiAgICBrYXRlZ29yaTogZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgfHwgXCJVbXVtXCIsXHJcbiAgICBnYW1iYXI6IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgbWVzc2FnZTogZXJyb3JNc2cuanVkdWw/LlswXSB8fCBlcnJvck1zZy5rb250ZW4/LlswXSB8fCBcIkRhdGEgdGlkYWsgdmFsaWQuXCIgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBqdWR1bCwga29udGVuLCBrYXRlZ29yaSwgZ2FtYmFyIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuICBjb25zdCBzbHVnID0gYCR7c2x1Z2lmeShqdWR1bCl9LSR7RGF0ZS5ub3coKX1gO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlc2kgaGFiaXMuIFNpbGFrYW4gbG9naW4ga2VtYmFsaS5cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIWFkbWluVXNlcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRXJyb3I6IFVzZXIgdGlkYWsgZGl0ZW11a2FuIGRpIGRhdGFiYXNlIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBrb250ZW4sXHJcbiAgICAgICAga2F0ZWdvcmksXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIgfHwgbnVsbCxcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgc3RhdHVzOiBcIlBVQkxJU0hFRFwiLFxyXG4gICAgICAgIHZpZXdzOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGJlcmhhc2lsIHRlcmJpdCEg8J+TsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5lcmJpdGthbiBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGlmICghaWRSYXcpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIklEIHRpZGFrIHZhbGlkLlwiIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgZGlwZXJiYXJ1aSEg8J+TnVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQmVyaXRhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEJFUklUQSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA0LiBNQU5BSkVNRU4gUFJPR1JBTSBLRVJKQSAoVVBEQVRFIEZJWClcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIEFtYmlsIGRhdGEgc2VzdWFpIG5hbWEgZmllbGQgZGkgRnJvbnRlbmRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByaW9yaXRhcyA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZzsgLy8gRnJvbnRlbmQga2lyaW0gJ3ByaW9yaXR5JywgREIgc2ltcGFuICdwcmlvcml0YXMnXHJcbiAgY29uc3QgYW5nZ2FyYW4gPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nOyAvLyBQSUMgZGlzaW1wYW4gZGkga29sb20gbG9rYXNpXHJcbiAgXHJcbiAgLy8g4pyFIEZJVFVSIEJBUlU6IEltYWdlICYgRmVhdHVyZWRcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZzsgXHJcbiAgY29uc3QgaXNGZWF0dXJlZCA9IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBEYXRlIEhhbmRsaW5nXHJcbiAgY29uc3Qgc3RhcnREYXRlUmF3ID0gZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGFydERhdGUgPSBzdGFydERhdGVSYXcgPyBuZXcgRGF0ZShzdGFydERhdGVSYXcpIDogbnVsbDtcclxuICBjb25zdCBkZWFkbGluZVJhdyA9IGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZWFkbGluZSA9IGRlYWRsaW5lUmF3ID8gbmV3IERhdGUoZGVhZGxpbmVSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gTWFwcGluZyBTdGF0dXMgTG9naWMgKE90b21hdGlzIGF0YXUgTWFudWFsIGRhcmkgRnJvbnRlbmQpXHJcbiAgLy8gS2l0YSBwYWthaSBzdGF0dXMgbWFudWFsIGthbGF1IGRpa2lyaW0sIGthbGF1IG5nZ2FrIHBha2FpIGxvZ2ljIHByb2dyZXNzXHJcbiAgbGV0IHN0YXR1cyA9IFwiVE9ET1wiO1xyXG4gIGlmIChwcm9ncmVzcyA+IDAgJiYgcHJvZ3Jlc3MgPCAxMDApIHN0YXR1cyA9IFwiSU5fUFJPR1JFU1NcIjtcclxuICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkgc3RhdHVzID0gXCJET05FXCI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIGRlc2tyaXBzaSxcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgcHJpb3JpdGFzLFxyXG4gICAgICAgIGFuZ2dhcmFuLFxyXG4gICAgICAgIHByb2dyZXNzLFxyXG4gICAgICAgIHN0YXR1cywgLy8gU2ltcGFuIHN0YXR1c1xyXG4gICAgICAgIGxva2FzaSwgLy8gUElDXHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIGRlYWRsaW5lLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZSB8fCBudWxsLCAvLyBTaW1wYW4gR2FtYmFyXHJcbiAgICAgICAgaXNGZWF0dXJlZDogaXNGZWF0dXJlZCAvLyBTaW1wYW4gU3RhdHVzIFVuZ2d1bGFuXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZWZyZXNoIGhhbGFtYW4gQWRtaW4gJiBIb21lcGFnZSAoa2FyZW5hIGFkYSBzZWN0aW9uIFByb2dyYW0gVW5nZ3VsYW4pXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGlidWF0ISDwn5qAXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1YXQgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJpb3JpdGFzID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGFuZ2dhcmFuID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKTtcclxuICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcm9ncmVzc1wiKSk7XHJcbiAgY29uc3QgbG9rYXNpID0gZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpc0ZlYXR1cmVkID0gZm9ybURhdGEuZ2V0KFwiaXNGZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGNvbnN0IHN0YXJ0RGF0ZVJhdyA9IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gc3RhcnREYXRlUmF3ID8gbmV3IERhdGUoc3RhcnREYXRlUmF3KSA6IG51bGw7XHJcbiAgY29uc3QgZGVhZGxpbmVSYXcgPSBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVhZGxpbmUgPSBkZWFkbGluZVJhdyA/IG5ldyBEYXRlKGRlYWRsaW5lUmF3KSA6IG51bGw7XHJcblxyXG4gIC8vIFN0YXR1cyBMb2dpYyBVcGRhdGVcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBwcmlvcml0YXMsXHJcbiAgICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGxva2FzaSxcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgZGVhZGxpbmUsXHJcbiAgICAgICAgaXNGZWF0dXJlZCxcclxuICAgICAgICAvLyBVcGRhdGUgZ2FtYmFyIENVTUEgamlrYSB1c2VyIHVwbG9hZCBiYXJ1IChzdHJpbmcgdGlkYWsga29zb25nKVxyXG4gICAgICAgIC4uLihpbWFnZSAmJiB7IGltYWdlIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJva2VyXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGl1cGRhdGUhIOKcqFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBHYW50aSBuYW1hIGRlbGV0ZVByb2tlciBqYWRpIGRlbGV0ZVByb2dyYW1LZXJqYSBiaWFyIGtvbnNpc3RlbiBzYW1hIGZyb250ZW5kXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9ncmFtS2VyamEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNS4gTUFOQUpFTUVOIFBFTkdVUlVTIChMRU5HS0FQKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAvLyAxLiBBbWJpbCBEYXRhIFdhamliXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8gMi4gQW1iaWwgRGF0YSBUYW1iYWhhblxyXG4gIGNvbnN0IGhwID0gZm9ybURhdGEuZ2V0KFwiaHBcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGluc3RhZ3JhbSA9IGZvcm1EYXRhLmdldChcImluc3RhZ3JhbVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGlrdG9rID0gZm9ybURhdGEuZ2V0KFwidGlrdG9rXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkb21pc2lsaSA9IGZvcm1EYXRhLmdldChcImRvbWlzaWxpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0cmFuc3BvcnRhc2kgPSBmb3JtRGF0YS5nZXQoXCJ0cmFuc3BvcnRhc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1vdHRvID0gZm9ybURhdGEuZ2V0KFwibW90dG9cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyDinIUgREFUQSBCQVJVOiBWSVNJICYgTUlTSSAoRGl0YW5na2FwIGRhcmkgRm9ybURhdGEpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBDZWsgVGFuZ2dhbCBMYWhpciAoQ29udmVydCBzdHJpbmcga2UgRGF0ZSlcclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gQ2VrIGFwYWthaCBHdXJ1L1BlbWJpbmFcclxuICBjb25zdCBpc0Fkdmlzb3IgPSBmb3JtRGF0YS5nZXQoXCJpc0Fkdmlzb3JcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBWYWxpZGFzaSBEYXNhclxyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMvTklQLCBkYW4gSmFiYXRhbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXM6IGtlbGFzIHx8IFwiLVwiLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIC8vIOKchSBTSU1QQU4gVklTSSAmIE1JU0kgS0UgREFUQUJBU0VcclxuICAgICAgICB2aXNpOiB2aXNpIHx8IG51bGwsIFxyXG4gICAgICAgIG1pc2k6IG1pc2kgfHwgbnVsbCxcclxuICAgICAgICB0Z2xMYWhpcixcclxuICAgICAgICBmb3RvVXJsOiBmb3RvVXJsIHx8IG51bGwsXHJcbiAgICAgICAgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAgaXNBZHZpc29yOiBpc0Fkdmlzb3JcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5ndXJ1cyBiZXJoYXNpbCBkaXRhbWJhaGthbiEg8J+RpFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuIE5JUyBtdW5na2luIHN1ZGFoIHRlcmRhZnRhci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIC8vIEFtYmlsIHNlbXVhIGRhdGEgaW5wdXRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBS1RJRlwiIHwgXCJOT05BS1RJRlwiIHwgXCJBTFVNTklcIjtcclxuICBcclxuICAvLyBEYXRhIFRhbWJhaGFuXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGFzaSA9IGZvcm1EYXRhLmdldChcInRyYW5zcG9ydGFzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbW90dG8gPSBmb3JtRGF0YS5nZXQoXCJtb3R0b1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImZvdG9VcmxcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIOKchSBEQVRBIEJBUlU6IFZJU0kgJiBNSVNJIChVcGRhdGUpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgdGdsTGFoaXJSYXcgPSBmb3JtRGF0YS5nZXQoXCJ0Z2xMYWhpclwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGdsTGFoaXIgPSB0Z2xMYWhpclJhdyA/IG5ldyBEYXRlKHRnbExhaGlyUmF3KSA6IHVuZGVmaW5lZDsgXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgbmlzLFxyXG4gICAgICAgIGtlbGFzLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBocCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgdGlrdG9rLFxyXG4gICAgICAgIGRvbWlzaWxpLFxyXG4gICAgICAgIHRyYW5zcG9ydGFzaSxcclxuICAgICAgICBtb3R0byxcclxuICAgICAgICAvLyDinIUgVVBEQVRFIFZJU0kgJiBNSVNJXHJcbiAgICAgICAgdmlzaSwgXHJcbiAgICAgICAgbWlzaSxcclxuICAgICAgICAvLyBVcGRhdGUgdGFuZ2dhbCBsYWhpciBjdW1hIGthbGF1IGFkYSBpbnB1dCBiYXJ1XHJcbiAgICAgICAgLi4uKHRnbExhaGlyICYmIHsgdGdsTGFoaXIgfSksXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvdG8gY3VtYSBrYWxhdSBhZGEgZm90byBiYXJ1IHlhbmcgZGlraXJpbVxyXG4gICAgICAgIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIHBlbmd1cnVzIGRpcGVyYmFydWkhIPCfk51cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IGlkQ2FyZERlc2lnbjogZGVzaWduVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgSUQgQ0FSRCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwQ29uZmlnLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiAxIH0sXHJcbiAgICAgIHVwZGF0ZTogeyBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0sXHJcbiAgICAgIGNyZWF0ZTogeyBpZDogMSwgaWRDYXJkQmFja0ltYWdlOiBpbWFnZVVybCB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNBVkUgQkcgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNy4gU0lTVEVNIEFCU0VOU0kgKFNDQU5ORVIpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNjYW5BYnNlbnNpKG5pczogc3RyaW5nKSB7XHJcbiAgaWYgKCFuaXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlFSIENvZGUga29zb25nIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyAxLiBDYXJpIFBlbmd1cnVzIGJlcmRhc2Fya2FuIE5JU1xyXG4gICAgY29uc3QgcGVuZ3VydXMgPSBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IG5pczogbmlzIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXBlbmd1cnVzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBDb2RlIFRpZGFrIFRlcmRhZnRhciFcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZW5ndXJ1cy5zdGF0dXMgIT09IFwiQUtUSUZcIikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLimqDvuI8gQW5nZ290YSBUaWRhayBBa3RpZi9BbHVtbmlcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIENlayBhcGFrYWggc3VkYWggYWJzZW4gaGFyaSBpbmk/IChPcHNpb25hbDogQ2VnYWggc3BhbSBzY2FuKVxyXG4gICAgY29uc3QgdG9kYXlTdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICB0b2RheVN0YXJ0LnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2RheUVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICB0b2RheUVuZC5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nTG9nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBwZW5ndXJ1c0lkOiBwZW5ndXJ1cy5pZCxcclxuICAgICAgICB0YW5nZ2FsOiB7XHJcbiAgICAgICAgICBndGU6IHRvZGF5U3RhcnQsXHJcbiAgICAgICAgICBsdGU6IHRvZGF5RW5kLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdMb2cpIHtcclxuICAgICAgLy8gS2FsYXUgc3VkYWggYWJzZW4sIGtpdGEgdGV0YXAgcmV0dXJuIHN1Y2Nlc3MgdGFwaSBrYXNpaCBpbmZvIFwiU3VkYWggQWJzZW5cIlxyXG4gICAgICAvLyBCaWFyIFVJIHRldGFwIG1lbmFtcGlsa2FuIHByb2ZpbG55YSwgdGFwaSBzdGF0dXNueWEgYmVkYS5cclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgbWVzc2FnZTogXCJLYW11IHN1ZGFoIGFic2VuIGhhcmkgaW5pISDwn5GMXCIsIFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBuYW1lOiBwZW5ndXJ1cy5uYW1hLFxyXG4gICAgICAgICAgIHJvbGU6IHBlbmd1cnVzLmphYmF0YW4sXHJcbiAgICAgICAgICAgaW1hZ2U6IHBlbmd1cnVzLmZvdG9VcmwsXHJcbiAgICAgICAgICAgc3RhdHVzOiBcIkRVUExJQ0FURVwiIFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLiBTaW1wYW4ga2UgVGFiZWwgQWJzZW5zaVxyXG4gICAgYXdhaXQgcHJpc21hLmFic2Vuc2kuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLFxyXG4gICAgICAgIGtlZ2lhdGFuOiBcIkFic2Vuc2kgSGFyaWFuXCIsIC8vIFNlbWVudGFyYSBoYXJkY29kZSBkdWx1XHJcbiAgICAgICAgc3RhdHVzOiBcIkhBRElSXCIsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoKSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDQuIFJldHVybiBEYXRhIFBlbmd1cnVzIGtlIEZyb250ZW5kXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgIG1lc3NhZ2U6IFwiQWJzZW5zaSBCZXJoYXNpbCEg4pyFXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAgbmFtZTogcGVuZ3VydXMubmFtYSxcclxuICAgICAgICAgcm9sZTogcGVuZ3VydXMuamFiYXRhbixcclxuICAgICAgICAgaW1hZ2U6IHBlbmd1cnVzLmZvdG9VcmwsXHJcbiAgICAgICAgIHN0YXR1czogXCJIQURJUlwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU0NBTiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VydmVyIEVycm9yLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOC4gTUFOQUpFTUVOIEtFVUFOR0FOIChLQVMgJiBBTkdHQVJBTilcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBDYXRhdCBUcmFuc2Frc2kgS2FzIFVtdW1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdlbmVyYWxUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IHRpcGUgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIFwiUEVNQVNVS0FOXCIgfCBcIlBFTkdFTFVBUkFOXCI7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBpYyA9IGZvcm1EYXRhLmdldChcInBpY1wiKSBhcyBzdHJpbmc7IC8vIEtldGVyYW5nYW4gUElDXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIG5vbWluYWwsXHJcbiAgICAgICAgdGlwZSxcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBrZXRlcmFuZ2FuOiBgUElDOiAke3BpY31gLCAvLyBTaW1wYW4gUElDIGRpIGtldGVyYW5nYW5cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiVHJhbnNha3NpIGJlcmhhc2lsIGRpY2F0YXQhIPCfkrBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5jYXRhdCB0cmFuc2Frc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEJ1a2EgQW5nZ2FyYW4gRXZlbnQgQmFydSAoUGluZGFoIEJ1a3U6IEthcyBVbXVtIC0+IEV2ZW50KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRCdWRnZXQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYUV2ZW50ID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGJ1ZGdldCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEEuIENhdGF0IFBFTkdFTFVBUkFOIGRpIEthcyBVbXVtXHJcbiAgICAgIGF3YWl0IHR4LmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAganVkdWw6IGBNb2RhbCBFdmVudDogJHtuYW1hRXZlbnR9YCxcclxuICAgICAgICAgIG5vbWluYWw6IGJ1ZGdldCxcclxuICAgICAgICAgIHRpcGU6IFwiUEVOR0VMVUFSQU5cIixcclxuICAgICAgICAgIGthdGVnb3JpOiBcIkFuZ2dhcmFuIEV2ZW50XCIsXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICAgIGtldGVyYW5nYW46IFwiQWxva2FzaSBkYW5hIGtlIGV2ZW50IGJhcnVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEIuIEJ1YXQgRGF0YSBQcm9rZXIgQmFydSAoU3RhdHVzOiBBQ1RJVkUpXHJcbiAgICAgIGF3YWl0IHR4LnByb2dyYW1LZXJqYS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWE6IG5hbWFFdmVudCxcclxuICAgICAgICAgIGFuZ2dhcmFuOiBidWRnZXQsXHJcbiAgICAgICAgICBhbmdnYXJhblRlcnBha2FpOiAwLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIklOX1BST0dSRVNTXCIsIFxyXG4gICAgICAgICAgZGl2aXNpOiBcIktlcGFuaXRpYWFuXCIsIFxyXG4gICAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKGRhdGVTdHIpLCBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFuZ2dhcmFuIEV2ZW50IGJlcmhhc2lsIGRpYnVrYSEg8J+OiVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVZFTlQgQlVER0VUIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWthIGFuZ2dhcmFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBDYXRhdCBUcmFuc2Frc2kgUGVuZ2VsdWFyYW4gRXZlbnRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50VHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGV2ZW50SWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZXZlbnRJZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgbm9taW5hbCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEEuIFNpbXBhbiBUcmFuc2Frc2kgKExpbmtlZCBrZSBQcm9rZXJJRClcclxuICAgICAgYXdhaXQgdHgua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCxcclxuICAgICAgICAgIG5vbWluYWwsXHJcbiAgICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAgICBrYXRlZ29yaTogXCJQZW5nZWx1YXJhbiBFdmVudFwiLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAgICBwcm9rZXJJZDogZXZlbnRJZCwgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCLiBVcGRhdGUgJ2FuZ2dhcmFuVGVycGFrYWknIGRpIHRhYmVsIFByb2tlclxyXG4gICAgICBhd2FpdCB0eC5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IHsgaW5jcmVtZW50OiBub21pbmFsIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5nZWx1YXJhbiBldmVudCBkaWNhdGF0ISDwn6e+XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBFVkVOVCBUUlggRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBkYXRhIGV2ZW50LlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTUFOQUpFTUVOIElOVkVOVEFSSVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBUYW1iYWgvRWRpdCBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvZGUgPSBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBoYXJnYSA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSk7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzZXJpYWwgPSBmb3JtRGF0YS5nZXQoXCJzZXJpYWxcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKGlkUmF3KSB7XHJcbiAgICAgIC8vIEVkaXRcclxuICAgICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHsgbmFtYSwga29kZSwga2F0ZWdvcmksIGhhcmdhLCBzZXJpYWxOdW06IHNlcmlhbCwgLi4uKGZvdG9VcmwgJiYgeyBmb3RvVXJsIH0pIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGVcclxuICAgICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7IFxyXG4gICAgICAgICAgIG5hbWEsIGtvZGUsIGthdGVnb3JpLCBoYXJnYSwgc2VyaWFsTnVtOiBzZXJpYWwsIGZvdG9VcmwsIFxyXG4gICAgICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIiwga29uZGlzaTogXCJCYWlrXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgYXNldCB0ZXJzaW1wYW4hIPCfk6ZcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW55aW1wYW4gYXNldC5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gSGFwdXMgQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBQaW5qYW0gQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IHBlbWluamFtID0gZm9ybURhdGEuZ2V0KFwiYm9ycm93ZXJcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czogXCJCT1JST1dFRFwiLFxyXG4gICAgICAgIHBlbWluamFtOiBwZW1pbmphbSxcclxuICAgICAgICB0Z2xQaW5qYW06IG5ldyBEYXRlKClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYXJhbmcgYmVyaGFzaWwgZGlwaW5qYW0hIPCflZJcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1wcm9zZXMgcGVtaW5qYW1hbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNC4gS2VtYmFsaWthbiBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGtvbmRpc2kgPSBmb3JtRGF0YS5nZXQoXCJjb25kaXRpb25cIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyBBbWJpbCBkYXRhIGJhcmFuZyBkdWx1IGJ1YXQgdGF1IHNpYXBhIHBlbWluamFtIHRlcmFraGlyXHJcbiAgICAgIGNvbnN0IGJhcmFuZyA9IGF3YWl0IHR4LmludmVudGFyaXMuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICAgIGlmICghYmFyYW5nIHx8ICFiYXJhbmcucGVtaW5qYW0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEYXRhIGJhcmFuZyB0aWRhayB2YWxpZCBhdGF1IHRpZGFrIHNlZGFuZyBkaXBpbmphbS5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEEuIFNpbXBhbiBrZSBSaXdheWF0XHJcbiAgICAgIGF3YWl0IHR4LnJpd2F5YXRBc2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaW52ZW50YXJpc0lkOiBpZCxcclxuICAgICAgICAgIHBlbWluamFtOiBiYXJhbmcucGVtaW5qYW0sXHJcbiAgICAgICAgICB0Z2xLZWx1YXI6IGJhcmFuZy50Z2xQaW5qYW0gfHwgbmV3IERhdGUoKSxcclxuICAgICAgICAgIHRnbEtlbWJhbGk6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBrb25kaXNpS2VtYmFsaToga29uZGlzaVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCLiBSZXNldCBTdGF0dXMgQmFyYW5nXHJcbiAgICAgIGF3YWl0IHR4LmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czoga29uZGlzaSA9PT0gXCJSdXNha1wiID8gXCJNQUlOVEVOQU5DRVwiIDogXCJBVkFJTEFCTEVcIixcclxuICAgICAgICAgIGtvbmRpc2k6IGtvbmRpc2ksXHJcbiAgICAgICAgICBwZW1pbmphbTogbnVsbCxcclxuICAgICAgICAgIHRnbFBpbmphbTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJhcmFuZyBzdWRhaCBkaWtlbWJhbGlrYW4hIOKchVwiIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVUVVJOIElURU0gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiR2FnYWwgbWVtcHJvc2VzIHBlbmdlbWJhbGlhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDExLiBTVEFUSVNUSUsgUEVOR1VOSlVORyAoVklTSVRPUiBUUkFDS0lORylcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tWaXNpdG9yKGlwOiBzdHJpbmcsIHVzZXJBZ2VudDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcclxuICAvLyAxLiBBYmFpa2FuIHJ1dGUgaW50ZXJuYWwvYWRtaW5cclxuICBpZiAocGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSB8fCBwYXRoLnN0YXJ0c1dpdGgoJy9hcGknKSB8fCBwYXRoLmluY2x1ZGVzKCdfbmV4dCcpIHx8IHBhdGguaW5jbHVkZXMoJ2Zhdmljb24nKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gMi4gRmlsdGVyIEJvdCBEYXNhciAoTWVuY2VnYWgganV0YWFuIGhpdCBkYXJpIGNyYXdsZXIpXHJcbiAgY29uc3QgYm90S2V5d29yZHMgPSBbJ2JvdCcsICdjcmF3bGVyJywgJ3NwaWRlcicsICdnb29nbGVib3QnLCAnYmluZ2JvdCcsICd5YW5kZXhib3QnLCAnc2x1cnAnLCAnYmFpZHVzcGlkZXInXTtcclxuICBjb25zdCB1YUxvd2VyID0gdXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKGJvdEtleXdvcmRzLnNvbWUoa2V5d29yZCA9PiB1YUxvd2VyLmluY2x1ZGVzKGtleXdvcmQpKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gU2FmZXR5IGNoZWNrOiBQYXN0aWthbiBtb2RlbCB2aXNpdG9yIGFkYVxyXG4gIGlmICghKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IpIHJldHVybjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIDMuIEd1bmFrYW4gcmVudGFuZyB3YWt0dSB1bnR1ayBwZW5nZWNla2FuIFwidW5pcXVlIHZpc2l0XCJcclxuICAgIC8vIEtpdGEgYW5nZ2FwIHNhdHUgb3JhbmcgYWRhbGFoIHNhdHUga3VuanVuZ2FuIHBlciAxIGphbSBwZXIgaGFsYW1hblxyXG4gICAgY29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBcclxuICAgIC8vIENlayBhcGFrYWggc3VkYWggYWRhIGt1bmp1bmdhbiBzZXJ1cGEgKGd1bmFrYW4gc2VsZWN0IGlkIHNhamEgYWdhciByaW5nYW4pXHJcbiAgICBjb25zdCByZWNlbnRWaXNpdCA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS52aXNpdG9yLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaXAsXHJcbiAgICAgICAgcGF0aCxcclxuICAgICAgICBjcmVhdGVkQXQ6IHsgZ3RlOiBvbmVIb3VyQWdvIH1cclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVjZW50VmlzaXQpIHtcclxuICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7IGlwLCB1c2VyQWdlbnQ6IHVzZXJBZ2VudC5zdWJzdHJpbmcoMCwgMjU1KSwgcGF0aCB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBHdW5ha2FuIGxvZ2dpbmcgeWFuZyB0aWRhayBtZW5naGVudGlrYW4gcHJvc2VzIHV0YW1hXHJcbiAgICBjb25zb2xlLmVycm9yKFwiVFJBQ0sgVklTSVRPUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEwLiBNQU5BSkVNRU4gR0FMRVJJIEtFR0lBVEFOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVHYWxlcmkoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBBbWJpbCBKU09OIHN0cmluZyBkYXJpIGZvcm0gY2xpZW50XHJcbiAgY29uc3QgaW1hZ2VzSnNvbiA9IGZvcm1EYXRhLmdldChcImltYWdlc1wiKSBhcyBzdHJpbmc7IFxyXG5cclxuICBpZiAoIWp1ZHVsIHx8ICFpbWFnZXNKc29uKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCBkYW4gbWluaW1hbCAxIEZvdG8gd2FqaWIgZGlpc2khXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gTU9ERSBFRElUXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb24gLy8gU2ltcGFuIHNlYmFnYWkgSlNPTiBTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTU9ERSBCQVJVXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCwga2F0ZWdvcmksIGRlc2tyaXBzaSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWwpLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXNKc29uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiR2FsZXJpIGJlcmhhc2lsIGRpc2ltcGFuISDwn5O4XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkdBTEVSSSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGdhbGVyaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFSQTJXc0IsK0xBQUEifQ==
}),
"[project]/app/admin/proker/ProkerClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProkerClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-client] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$d8f407__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:d8f407 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$b0dc0d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:b0dc0d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$da46ee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:da46ee [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const tourSteps = [
    {
        target: '.tour-header-title',
        content: 'Pusat kendali kegiatan OSIS.',
        disableBeacon: true
    },
    {
        target: '.tour-buat-baru-btn',
        content: 'Klik untuk tambah proker baru.'
    },
    {
        target: '.tour-col-segera',
        content: 'Proker yang masih rencana (Progress 0%).',
        placement: 'right'
    },
    {
        target: '.tour-col-berjalan',
        content: 'Proker sedang dikerjakan (1-99%).',
        placement: 'bottom'
    },
    {
        target: '.tour-priority-badge',
        content: 'Tanda prioritas tinggi.'
    },
    {
        target: '.tour-edit-action',
        content: 'Klik pensil untuk edit.'
    }
];
function ProkerClient({ initialData }) {
    _s();
    const [prokers, setProkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProkerClient.useEffect": ()=>{
            setProkers(initialData);
        }
    }["ProkerClient.useEffect"], [
        initialData
    ]);
    const [filterSekbid, setFilterSekbid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Semua");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: "",
        sekbid: "Inti",
        priority: "Medium",
        startDate: "",
        endDate: "",
        pic: "",
        budget: 0,
        progress: 0,
        image: "",
        isFeatured: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProkerClient.useEffect": ()=>{
            setIsClient(true);
        }
    }["ProkerClient.useEffect"], []);
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) return alert("File terlalu besar! Max 2MB.");
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setFormState({
                    ...formState,
                    image: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };
    const openNewModal = ()=>{
        setIsEditing(false);
        setEditId(null);
        setFormState({
            title: "",
            description: "",
            sekbid: "Inti",
            priority: "Medium",
            startDate: "",
            endDate: "",
            pic: "",
            budget: 0,
            progress: 0,
            image: "",
            isFeatured: false
        });
        setIsModalOpen(true);
    };
    const openEditModal = (item)=>{
        setIsEditing(true);
        setEditId(item.id);
        const safeDate = (date)=>date ? new Date(date).toISOString().split("T")[0] : "";
        setFormState({
            title: item.nama || item.title || "",
            description: item.deskripsi || item.description || "",
            sekbid: item.divisi || item.sekbid || "Inti",
            priority: item.prioritas || item.priority || "Medium",
            startDate: safeDate(item.startDate),
            endDate: safeDate(item.deadline || item.endDate),
            pic: item.lokasi || item.pic || "",
            budget: item.anggaran || item.budget || 0,
            progress: item.progress || 0,
            image: item.image || "",
            isFeatured: item.isFeatured || false
        });
        setIsModalOpen(true);
    };
    const handleSave = async ()=>{
        if (!formState.title) return alert("Nama kegiatan wajib diisi!");
        setIsSaving(true);
        const formData = new FormData();
        if (isEditing && editId) formData.append("id", editId.toString());
        formData.append("nama", formState.title);
        formData.append("deskripsi", formState.description);
        formData.append("divisi", formState.sekbid);
        formData.append("priority", formState.priority);
        formData.append("startDate", formState.startDate);
        formData.append("deadline", formState.endDate);
        formData.append("lokasi", formState.pic);
        formData.append("anggaran", formState.budget.toString());
        formData.append("progress", formState.progress.toString());
        formData.append("image", formState.image);
        formData.append("isFeatured", formState.isFeatured ? "true" : "false");
        try {
            const result = isEditing ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$b0dc0d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProgramKerja"])(formData) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$d8f407__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProgramKerja"])(formData);
            if (result.success) {
                alert(result.message);
                setIsModalOpen(false);
                window.location.reload();
            } else {
                alert("Gagal: " + result.message);
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan sistem.");
        } finally{
            setIsSaving(false);
        }
    };
    const handleDelete = async (id)=>{
        if (confirm("Yakin ingin menghapus proker ini permanen?")) {
            setProkers(prokers.filter((p)=>p.id !== id));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$da46ee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProgramKerja"])(id);
        }
    };
    const filteredProkers = prokers.filter((item)=>{
        const itemDivisi = item.divisi || item.sekbid || "";
        const itemNama = item.nama || item.title || "";
        const matchSekbid = filterSekbid === "Semua" ? true : itemDivisi === filterSekbid;
        const matchSearch = itemNama.toLowerCase().includes(searchQuery.toLowerCase());
        return matchSekbid && matchSearch;
    });
    const listSegera = filteredProkers.filter((p)=>p.progress === 0);
    const listBerjalan = filteredProkers.filter((p)=>p.progress > 0 && p.progress < 100);
    const listSelesai = filteredProkers.filter((p)=>p.progress === 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[calc(100vh-140px)] flex flex-col font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-end gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-bold font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-header-title",
                                                children: [
                                                    "Manajemen Proker ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full",
                                                        children: "🚀"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                steps: tourSteps
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                lineNumber: 162,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 dark:text-slate-400 text-sm font-medium mt-1",
                                        children: "Pantau status kegiatan: Segera, Berjalan, dan Selesai."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openNewModal,
                                className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-transform active:scale-95 tour-buat-baru-btn",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    " Proker Baru"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white/50 dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide",
                                children: [
                                    'Semua',
                                    'Inti',
                                    'MPK (Legislatif)',
                                    'Sekbid 1',
                                    'Sekbid 2',
                                    'Sekbid 3',
                                    'Sekbid 4'
                                ].map((sekbid)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilterSekbid(sekbid),
                                        className: `px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${filterSekbid === sekbid ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white border-blue-100 dark:border-transparent shadow-sm" : "bg-transparent border-transparent text-slate-500 hover:bg-white/50 dark:hover:bg-white/5"}`,
                                        children: sekbid
                                    }, sekbid, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 md:w-72 group w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Cari program kerja...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none text-sm font-medium text-slate-700 dark:text-white shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16,
                                        className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto overflow-x-auto pb-20 custom-scrollbar pr-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-6 min-w-[1000px] md:min-w-0 min-h-full h-fit",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KanbanColumn, {
                            tourClass: "tour-col-segera",
                            title: "SEGERA",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 191,
                                columnNumber: 76
                            }, void 0),
                            count: listSegera.length,
                            color: "blue",
                            children: listSegera.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProkerCard, {
                                    data: item,
                                    onDelete: handleDelete,
                                    onEdit: openEditModal,
                                    isFirstPriority: idx === 0 && (item.prioritas || item.priority) === 'High'
                                }, item.id, false, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 193,
                                    columnNumber: 20
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KanbanColumn, {
                            tourClass: "tour-col-berjalan",
                            title: "BERJALAN",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 201,
                                columnNumber: 80
                            }, void 0),
                            count: listBerjalan.length,
                            color: "yellow",
                            children: listBerjalan.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProkerCard, {
                                    data: item,
                                    onDelete: handleDelete,
                                    onEdit: openEditModal
                                }, item.id, false, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 202,
                                    columnNumber: 44
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KanbanColumn, {
                            title: "SELESAI",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 205,
                                columnNumber: 49
                            }, void 0),
                            count: listSelesai.length,
                            color: "green",
                            children: listSelesai.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProkerCard, {
                                    data: item,
                                    onDelete: handleDelete,
                                    onEdit: openEditModal
                                }, item.id, false, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 206,
                                    columnNumber: 43
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                    lineNumber: 190,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 189,
                columnNumber: 7
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
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 215,
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
                                    className: "p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-black font-bold text-slate-900 dark:text-white",
                                                    children: isEditing ? "Edit Proker" : "Proker Baru"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 mt-1",
                                                    children: isEditing ? "Update detail & progress kegiatan." : "Detail rencana kegiatan."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 219,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 24,
                                                className: "text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                lineNumber: 223,
                                                columnNumber: 68
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 223,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 218,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 overflow-y-auto flex-1 space-y-5 custom-scrollbar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-dashed border-slate-300 dark:border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>fileInputRef.current?.click(),
                                                    className: "w-24 h-24 rounded-lg bg-white dark:bg-black/20 flex items-center justify-center cursor-pointer overflow-hidden relative group border border-slate-200 dark:border-white/10",
                                                    children: formState.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: formState.image,
                                                        alt: "Preview",
                                                        fill: true,
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center text-slate-400 group-hover:text-blue-500 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                size: 24,
                                                                className: "mx-auto mb-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9px]",
                                                                children: "Upload"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-bold text-slate-700 dark:text-white mb-1",
                                                            children: "Foto Cover / Banner"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500 mb-3",
                                                            children: "Tampil di Halaman Depan. Max 2MB."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            ref: fileInputRef,
                                                            className: "hidden",
                                                            accept: "image/*",
                                                            onChange: handleImageUpload
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>fileInputRef.current?.click(),
                                                                    className: "px-3 py-1.5 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-md text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors",
                                                                    children: "Pilih File"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>setFormState({
                                                                            ...formState,
                                                                            isFeatured: !formState.isFeatured
                                                                        }),
                                                                    className: `px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1 cursor-pointer select-none transition-all ${formState.isFeatured ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' : 'bg-slate-100 text-slate-400 border border-transparent'}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            size: 12,
                                                                            fill: formState.isFeatured ? "currentColor" : "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 34
                                                                        }, this),
                                                                        " Unggulan?"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 228,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "Nama Kegiatan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formState.title,
                                                            onChange: (e)=>setFormState({
                                                                    ...formState,
                                                                    title: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white",
                                                            placeholder: "Contoh: LDKS 2026"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 uppercase mb-1 block flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 125
                                                                }, this),
                                                                " Deskripsi Singkat"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 2,
                                                            value: formState.description,
                                                            onChange: (e)=>setFormState({
                                                                    ...formState,
                                                                    description: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-medium dark:text-white resize-none",
                                                            placeholder: "Jelaskan tujuan kegiatan secara singkat..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                    children: "Sekbid"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formState.sekbid,
                                                                    onChange: (e)=>setFormState({
                                                                            ...formState,
                                                                            sekbid: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Inti"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 34
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "MPK (Legislatif)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Sekbid 1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 88
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Sekbid 2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 113
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Sekbid 3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 138
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Sekbid 4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 163
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                    children: "Prioritas"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formState.priority,
                                                                    onChange: (e)=>setFormState({
                                                                            ...formState,
                                                                            priority: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "High"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 274,
                                                                            columnNumber: 34
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Medium"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 274,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Low"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 274,
                                                                            columnNumber: 78
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 253,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-slate-100 dark:border-white/5 my-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 280,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "Mulai"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 30
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: formState.startDate,
                                                            onChange: (e)=>setFormState({
                                                                    ...formState,
                                                                    startDate: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 116
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "Selesai"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 30
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: formState.endDate,
                                                            onChange: (e)=>setFormState({
                                                                    ...formState,
                                                                    endDate: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 118
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "PIC (Penanggung Jawab)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 30
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Nama...",
                                                            value: formState.pic,
                                                            onChange: (e)=>setFormState({
                                                                    ...formState,
                                                                    pic: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 133
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "Anggaran (Rp)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 30
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            placeholder: "0",
                                                            value: formState.budget,
                                                            onChange: (e)=>setFormState({
                                                                    ...formState,
                                                                    budget: Number(e.target.value)
                                                                }),
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 124
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 282,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-blue-700 dark:text-blue-300 uppercase block",
                                                            children: "Progress"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 81
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-black font-bold text-blue-600 dark:text-white",
                                                            children: [
                                                                formState.progress,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 183
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0",
                                                    max: "100",
                                                    value: formState.progress,
                                                    onChange: (e)=>setFormState({
                                                            ...formState,
                                                            progress: parseInt(e.target.value)
                                                        }),
                                                    className: "w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 289,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 226,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex justify-end gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            disabled: isSaving,
                                            className: "px-6 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors",
                                            children: "Batal"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 296,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSave,
                                            disabled: isSaving,
                                            className: "px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2",
                                            children: [
                                                isSaving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "animate-spin",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 38
                                                }, this),
                                                isSaving ? "Menyimpan..." : isEditing ? "Update Proker" : "Simpan Proker"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 297,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 295,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 216,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                    lineNumber: 214,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(ProkerClient, "uYkAlDLDOHx4VIY0xQQWEVM1Cuw=");
_c = ProkerClient;
function KanbanColumn({ title, icon, count, children, color, tourClass }) {
    const colors = {
        blue: "bg-blue-50/80 dark:bg-blue-900/10 border-blue-200 dark:border-blue-500/20",
        yellow: "bg-yellow-50/80 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-500/20",
        green: "bg-slate-50/80 dark:bg-slate-800/30 border-slate-200 dark:border-white/10"
    };
    const textColors = {
        blue: "text-blue-600 dark:text-blue-400",
        yellow: "text-yellow-600 dark:text-yellow-400",
        green: "text-slate-600 dark:text-slate-400"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex-1 rounded-[2rem] p-4 border ${colors[color]} flex flex-col h-fit min-h-full ${tourClass || ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 font-black font-bold uppercase tracking-wider text-xs ${textColors[color]}`,
                        children: [
                            icon,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 324,
                                columnNumber: 138
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 324,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2.5 py-0.5 rounded-full bg-white dark:bg-white/10 text-xs font-bold text-slate-500 dark:text-slate-400 shadow-sm",
                        children: count
                    }, void 0, false, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 325,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 323,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 flex-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 327,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
        lineNumber: 322,
        columnNumber: 7
    }, this);
}
_c1 = KanbanColumn;
function ProkerCard({ data, onDelete, onEdit, isFirstPriority }) {
    const colorVariants = {
        blue: "from-blue-400 to-blue-600",
        purple: "from-purple-400 to-purple-600",
        pink: "from-pink-400 to-pink-600",
        green: "from-green-400 to-green-600",
        orange: "from-orange-400 to-orange-600"
    };
    const getStatusBadge = (progress)=>{
        if (progress === 100) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 text-[10px] font-black font-bold uppercase tracking-wide",
            children: "SELESAI"
        }, void 0, false, {
            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
            lineNumber: 339,
            columnNumber: 36
        }, this);
        if (progress > 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-2.5 py-1 rounded-md bg-yellow-100 text-yellow-700 text-[10px] font-black font-bold uppercase tracking-wide",
            children: "BERJALAN"
        }, void 0, false, {
            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
            lineNumber: 340,
            columnNumber: 32
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-2.5 py-1 rounded-md bg-blue-100 text-blue-600 text-[10px] font-black font-bold uppercase tracking-wide",
            children: "SEGERA"
        }, void 0, false, {
            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
            lineNumber: 341,
            columnNumber: 14
        }, this);
    };
    const statusColor = data.progress === 100 ? 'bg-slate-400' : data.progress > 0 ? 'bg-yellow-500' : 'bg-blue-500';
    const namaKegiatan = data.nama || data.title || "Tanpa Nama";
    const deskripsi = data.deskripsi || data.description || "Tidak ada deskripsi kegiatan.";
    const divisi = data.divisi || data.sekbid || "-";
    const prioritas = data.prioritas || data.priority;
    const lokasiPic = data.lokasi || data.pic || "";
    const deadline = data.deadline || data.endDate;
    const anggaran = data.anggaran || data.budget;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        whileHover: {
            y: -4,
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
        },
        className: "bg-white dark:bg-[#1e293b] p-4 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm cursor-grab active:cursor-grabbing group relative overflow-hidden",
        children: [
            data.isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 bg-yellow-400 w-6 h-6 flex items-center justify-center rounded-bl-xl shadow-sm z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    size: 10,
                    className: "text-yellow-900",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                    lineNumber: 358,
                    columnNumber: 16
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 357,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                    getStatusBadge(data.progress),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            data.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                size: 14,
                                className: "text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 365,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-slate-400",
                                children: divisi
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 367,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEdit(data),
                                className: "text-slate-300 hover:text-blue-500 transition-colors tour-edit-action",
                                title: "Edit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 368,
                                    columnNumber: 148
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 368,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDelete(data.id),
                                className: "text-slate-300 hover:text-red-500 transition-colors",
                                title: "Hapus",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 369,
                                    columnNumber: 136
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 369,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 364,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 362,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-slate-800 dark:text-slate-100 text-sm mb-1 leading-snug group-hover:text-blue-600 transition-colors",
                children: namaKegiatan
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 373,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-slate-500 dark:text-slate-400 mb-3 line-clamp-2 leading-relaxed",
                children: deskripsi
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 375,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-[10px] font-bold text-slate-400 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Progress"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 380,
                                columnNumber: 93
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    data.progress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 380,
                                columnNumber: 114
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 380,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full rounded-full transition-all duration-500 ${statusColor}`,
                            style: {
                                width: `${data.progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 382,
                            columnNumber: 16
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 381,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 379,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-3 border-t border-slate-50 dark:border-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white bg-gradient-to-br ${colorVariants[data.picColor || "blue"]}`,
                                children: lokasiPic ? lokasiPic.charAt(0) : "?"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 388,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-600 dark:text-slate-300",
                                        children: deadline ? new Date(deadline).toLocaleDateString("id-ID") : "-"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 393,
                                        columnNumber: 19
                                    }, this),
                                    anggaran > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-400 font-mono",
                                        children: new Intl.NumberFormat('id-ID', {
                                            style: 'currency',
                                            currency: 'IDR',
                                            maximumFractionDigits: 0
                                        }).format(anggaran)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 397,
                                        columnNumber: 22
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-400",
                                        children: "Rp 0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 398,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 391,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 387,
                        columnNumber: 13
                    }, this),
                    prioritas === 'High' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-500/10 px-2 py-0.5 rounded-full ${isFirstPriority ? 'tour-priority-badge' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                size: 10,
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 404,
                                columnNumber: 21
                            }, this),
                            " High"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 403,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 386,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
        lineNumber: 355,
        columnNumber: 7
    }, this);
}
_c2 = ProkerCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ProkerClient");
__turbopack_context__.k.register(_c1, "KanbanColumn");
__turbopack_context__.k.register(_c2, "ProkerCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_13f481bd._.js.map