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
        const { status, action } = data;
        // Pastikan tour berhenti jika sudah selesai, di-skip, atau ditutup (X)
        if (status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS"].FINISHED || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS"].SKIPPED || action === "close") {
            setRun(false);
        }
    };
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
                                    className: "flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                    children: "Panduan Sistem"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 41,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ...closeProps,
                            className: "text-slate-400 hover:text-red-500 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/TourGuide.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 48,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium",
                    children: step.content
                }, void 0, false, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 53,
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
                            lineNumber: 58,
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
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ...primaryProps,
                                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-500/20 flex items-center gap-1 transition-transform active:scale-95",
                                    children: [
                                        isLastStep ? "Selesai" : "Lanjut",
                                        " ",
                                        !isLastStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/TourGuide.tsx",
                                            lineNumber: 76,
                                            columnNumber: 70
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 62,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TourGuide.tsx",
            lineNumber: 36,
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
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                            children: "Panduan Interaktif"
                        }, void 0, false, {
                            fileName: "[project]/components/TourGuide.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TourGuide.tsx",
                lineNumber: 86,
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
                disableScrollParentFix: true,
                disableScrolling: false,
                styles: {
                    options: {
                        arrowColor: '#ffffff',
                        overlayColor: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 10000
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/TourGuide.tsx",
                lineNumber: 102,
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
"[project]/lib/data:082d1e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGeneralTrx",
    ()=>$$RSC_SERVER_ACTION_28
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d514de97d4231d09c6d8adf1cbd03020a3d5a0aa":"createGeneralTrx"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d514de97d4231d09c6d8adf1cbd03020a3d5a0aa", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createGeneralTrx");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEuIEFTUElSQVNJIFNJU1dBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcmF3TmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJhd0tlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBlc2FuID0gZm9ybURhdGEuZ2V0KFwicGVzYW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzQW5vbmltID0gZm9ybURhdGEuZ2V0KFwiaXNBbm9uaW1cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBpZiAoIXBlc2FuIHx8IHBlc2FuLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGVzYW4gdGlkYWsgYm9sZWgga29zb25nIVwiIH07XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoeyBkYXRhOiB7IHBlbmdpcmltLCBrZWxhcywgaXNpOiBwZXNhbiwga2F0ZWdvcmk6IFwiVW11bVwiLCBzdGF0dXM6IFwiUEVORElOR1wiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzcGlyYXNpIGJlcmhhc2lsIGRpa2lyaW0hIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naXJpbSBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGx5QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGJhbGFzYW4gPSBmb3JtRGF0YS5nZXQoXCJiYWxhc2FuXCIpIGFzIHN0cmluZztcclxuICBpZiAoIWJhbGFzYW4gfHwgYmFsYXNhbi50cmltKCkgPT09IFwiXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkJhbGFzYW4gdGlkYWsgYm9sZWgga29zb25nLlwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyBiYWxhc2FuLCBiYWxhc2FuQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogXCJTRUxFU0FJXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYWxhc2FuIHRlcmtpcmltIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQkVSSVRBIChDTVMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gQmVyaXRhU2NoZW1hLnNhZmVQYXJzZSh7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSwga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSB8fCBcIlVtdW1cIiwgZ2FtYmFyOiBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgfSk7XHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICBjb25zdCB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xyXG4gIGNvbnN0IHNsdWcgPSBgJHtzbHVnaWZ5KGp1ZHVsKX0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIGhhYmlzLlwiIH07XHJcblxyXG4gIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9IH0pO1xyXG4gIGlmICghYWRtaW5Vc2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsLCBzbHVnLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXI6IGdhbWJhciB8fCBudWxsLCBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIiwgdmlld3M6IDAgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLCAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7IHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJlcml0YShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMy4gUFJPR1JBTSBLRVJKQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIHN0YXR1czogc3RhdHVzIGFzIFN0YXR1c1Byb2tlciwgcHJvZ3Jlc3MsXHJcbiAgICAgICAgZGVza3JpcHNpOiBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRpdmlzaTogZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBwcmlvcml0YXM6IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZyxcclxuICAgICAgICBhbmdnYXJhbjogTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKSxcclxuICAgICAgICBsb2thc2k6IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZyB8fCBudWxsLFxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpID8gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsLFxyXG4gICAgICAgIGRlYWRsaW5lOiBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZykgOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMgYXMgU3RhdHVzUHJva2VyLCBwcm9ncmVzcyxcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBkZXNrcmlwc2k6IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHByaW9yaXRhczogZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGFuZ2dhcmFuOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc0ZlYXR1cmVkOiBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmcpIDogbnVsbCxcclxuICAgICAgICBkZWFkbGluZTogZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmcpIDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7IHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9ncmFtIGtlcmphIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gUEVOR1VSVVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIG5pcywgamFiYXRhbiwgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAga2VsYXM6IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZyB8fCBcIi1cIixcclxuICAgICAgICBkaXZpc2k6IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmcgfHwgXCItXCIsXHJcbiAgICAgICAgZm90b1VybDogZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBpc0Fkdmlzb3I6IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGRpdGFtYmFoa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbmlzOiBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGtlbGFzOiBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgamFiYXRhbjogZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIGFueSxcclxuICAgICAgICBmb3RvVXJsOiBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZyB8fCB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGRhdGEgcGVuZ3VydXMuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBBQlNFTlNJICYgQUNBUkFcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNhcmEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7Zm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IG5ld0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLCB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZyB8fCBcIlwiLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyB8fCBcIlNla29sYWhcIixcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWJ1YXQhXCIsIGlkOiBuZXdBY2FyYS5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke2Zvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIil9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIil9YCkgOiBudWxsO1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogXCJPTkdPSU5HXCIsIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoeyBkYXRhOiB7IGFjYXJhSWQ6IGlkLCB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGltdWxhaSFcIiwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbXVsYWkgc2VzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgaWYgKHNlc2lBa3RpZikgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSwgZGF0YTogeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIsIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogbmV4dFN0YXR1cywgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGloZW50aWthbi5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBzdG9wIHNlc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmIVwiIH07XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuISDwn5GMXCIsIGRhdGE6IHsgbmFtZTogcGVuZ3VydXMubmFtYSwgc3RhdHVzOiBcIkRVUExJQ0FURVwiIH0gfTtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIGFjYXJhSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkLCBrZWdpYXRhbjogXCJTY2FuXCIsIHN0YXR1czogXCJIQURJUlwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcmhhc2lsISDinIVcIiwgZGF0YTogeyBuYW1lOiBwZW5ndXJ1cy5uYW1hLCBzdGF0dXM6IFwiSEFESVJcIiB9IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNpc3RlbSBzY2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIHRpZGFrIGFrdGlmXCIgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7XHJcbiAgICBlbHNlIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQsIHN0YXR1cywga2VnaWF0YW46IFwiTWFudWFsXCIsIHRhbmdnYWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN0YXR1cyBkaXBlcmJhcnVpIG1hbnVhbC5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBpbnB1dCBtYW51YWwuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3QoeyB3aGVyZTogeyBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH0gfSk7XHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VzaSB0aWRhayBha3RpZlwiIH07XHJcbiAgICBjb25zdCBzZW11YSA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sIHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0pO1xyXG4gICAgY29uc3Qgc3VkYWggPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH0gfSk7XHJcbiAgICBjb25zdCBzdWRhaElkcyA9IHN1ZGFoLm1hcChzID0+IHMucGVuZ3VydXNJZCk7XHJcbiAgICBjb25zdCBiZWx1bSA9IHNlbXVhLmZpbHRlcihwID0+ICFzdWRhaElkcy5pbmNsdWRlcyhwLmlkKSk7XHJcbiAgICBpZiAoYmVsdW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHsgZGF0YTogYmVsdW0ubWFwKHAgPT4gKHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQ6IHAuaWQsIHN0YXR1czogXCJBTFBBXCIsIGtlZ2lhdGFuOiBcIkF1dG9cIiwgdGFuZ2dhbDogbmV3IERhdGUoKSB9KSkgfSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2VzaSBkaXR1dHVwIG90b21hdGlzLlwiLCBjb3VudDogYmVsdW0ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGF1dG8tYWxwYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhckFjYXJhKCkgeyByZXR1cm4gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBzZXNpOiB7IHdoZXJlOiB7IHN0YXR1czogXCJPTkdPSU5HXCIgfSwgdGFrZTogMSB9IH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9KTsgfVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7IHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LCBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfSB9KTsgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICBjb25zdCB0b3RhbCA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBhY2FyYTogdHJ1ZSwgYWJzZW5zaTogdHJ1ZSB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJla2FwIGRpbXVhdFwiLFxyXG4gICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4gKHtcclxuICAgICAgaWQ6IHMuaWQsIG5hbWE6IHMuYWNhcmEubmFtYSwgdGFuZ2dhbDogcy53YWt0dU11bGFpLCB0b3RhbEFuZ2dvdGE6IHRvdGFsLFxyXG4gICAgICBjb3VudHM6IHsgSEFESVI6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0hBRElSJykubGVuZ3RoLCBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLCBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsIEFMUEE6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0FMUEEnKS5sZW5ndGggfSxcclxuICAgICAgcGVyc2VudGFzZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgocy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGggLyB0b3RhbCkgKiAxMDApIDogMFxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHsgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHsgd2hlcmU6IHsgc2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH0gfSk7IH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gW107IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQ2hlY2tlZFwiIH07IH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJDaGVja2VkXCIgfTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDYuIEtFVUFOR0FOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZywgY29sb3I6IFwiYmx1ZVwiLCBpY29uOiBcIldhbGxldFwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCdWt1IEthcyBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBhbnksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmcsIHRhbmdnYWw6IG5ldyBEYXRlKCksIGJ1a3VLYXNJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcImJ1a3VLYXNJZFwiKSkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpY2F0YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoeyB3aGVyZTogeyBpZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9LCBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSkgfSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGlhbG9rYXNpa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogXCJQRU5HRUxVQVJBTlwiLCBrYXRlZ29yaTogXCJFdmVudFwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpLCBwcm9rZXJJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9IH0pLFxyXG4gICAgICBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIH0sIGRhdGE6IHsgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpIH0gfSB9KVxyXG4gICAgXSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VFdmVudEJ1ZGdldChwcm9rZXJJZDogbnVtYmVyLCB0YXJnZXRCdWt1SWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LCBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdHV0dXAhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoeyBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nLCBrb2RlOiBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZywga2F0ZWdvcmk6IFwiVW11bVwiLCBrb25kaXNpOiBcIkJhaWtcIiwgc3RhdHVzOiBcIkFWQUlMQUJMRVwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzZXQgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkJPUlJPV0VEXCIsIHBlbWluamFtOiBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmcsIHRnbFBpbmphbTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXBpbmphbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBwZW1pbmphbTogbnVsbCwgdGdsUGluamFtOiBudWxsIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIktlbWJhbGkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBHQUxFUklcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmcsIGthdGVnb3JpOiBcIlVtdW1cIiwgaW1hZ2VzOiBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nLCBkZXNrcmlwc2k6IFwiXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVcGRhdGUhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkhhcHVzIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTEFJTk5ZQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHsgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRlc2FpbiBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHsgd2hlcmU6IHsgaWQ6IDEgfSwgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSwgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCRyBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIHRyeSB7IGlmICghcGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSkgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHsgZGF0YTogeyBpcCwgdXNlckFnZW50LCBwYXRoIH0gfSk7IH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGl2aXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuY3JlYXRlKHsgZGF0YTogeyBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyB9IH0pOyByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgZGlidWF0IVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURpdmlzaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuZGl2aXNpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEaXZpc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpaGFwdXNcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKYWJhdGFuKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRpdmlzaUlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZGl2aXNpSWRcIikpIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlidWF0XCIgfTsgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlwZXJiYXJ1aVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUphYmF0YW4oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGloYXB1c1wiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0tlaGFkaXJhbihhYnNlbnNpSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoeyB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3RhdHVzIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtUkF3Y3NCLCtMQUFBIn0=
}),
"[project]/lib/data:30a22f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventBudget",
    ()=>$$RSC_SERVER_ACTION_29
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"400c320af2902198cfa314ba43afbb50b5bbae55c3":"createEventBudget"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400c320af2902198cfa314ba43afbb50b5bbae55c3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createEventBudget");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEuIEFTUElSQVNJIFNJU1dBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcmF3TmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJhd0tlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBlc2FuID0gZm9ybURhdGEuZ2V0KFwicGVzYW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzQW5vbmltID0gZm9ybURhdGEuZ2V0KFwiaXNBbm9uaW1cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBpZiAoIXBlc2FuIHx8IHBlc2FuLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGVzYW4gdGlkYWsgYm9sZWgga29zb25nIVwiIH07XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoeyBkYXRhOiB7IHBlbmdpcmltLCBrZWxhcywgaXNpOiBwZXNhbiwga2F0ZWdvcmk6IFwiVW11bVwiLCBzdGF0dXM6IFwiUEVORElOR1wiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzcGlyYXNpIGJlcmhhc2lsIGRpa2lyaW0hIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naXJpbSBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGx5QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGJhbGFzYW4gPSBmb3JtRGF0YS5nZXQoXCJiYWxhc2FuXCIpIGFzIHN0cmluZztcclxuICBpZiAoIWJhbGFzYW4gfHwgYmFsYXNhbi50cmltKCkgPT09IFwiXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkJhbGFzYW4gdGlkYWsgYm9sZWgga29zb25nLlwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyBiYWxhc2FuLCBiYWxhc2FuQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogXCJTRUxFU0FJXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYWxhc2FuIHRlcmtpcmltIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQkVSSVRBIChDTVMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gQmVyaXRhU2NoZW1hLnNhZmVQYXJzZSh7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSwga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSB8fCBcIlVtdW1cIiwgZ2FtYmFyOiBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgfSk7XHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICBjb25zdCB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xyXG4gIGNvbnN0IHNsdWcgPSBgJHtzbHVnaWZ5KGp1ZHVsKX0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIGhhYmlzLlwiIH07XHJcblxyXG4gIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9IH0pO1xyXG4gIGlmICghYWRtaW5Vc2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsLCBzbHVnLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXI6IGdhbWJhciB8fCBudWxsLCBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIiwgdmlld3M6IDAgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLCAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7IHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJlcml0YShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMy4gUFJPR1JBTSBLRVJKQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIHN0YXR1czogc3RhdHVzIGFzIFN0YXR1c1Byb2tlciwgcHJvZ3Jlc3MsXHJcbiAgICAgICAgZGVza3JpcHNpOiBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRpdmlzaTogZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBwcmlvcml0YXM6IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZyxcclxuICAgICAgICBhbmdnYXJhbjogTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKSxcclxuICAgICAgICBsb2thc2k6IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZyB8fCBudWxsLFxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpID8gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsLFxyXG4gICAgICAgIGRlYWRsaW5lOiBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZykgOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMgYXMgU3RhdHVzUHJva2VyLCBwcm9ncmVzcyxcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBkZXNrcmlwc2k6IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHByaW9yaXRhczogZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGFuZ2dhcmFuOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc0ZlYXR1cmVkOiBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmcpIDogbnVsbCxcclxuICAgICAgICBkZWFkbGluZTogZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmcpIDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7IHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9ncmFtIGtlcmphIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gUEVOR1VSVVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIG5pcywgamFiYXRhbiwgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAga2VsYXM6IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZyB8fCBcIi1cIixcclxuICAgICAgICBkaXZpc2k6IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmcgfHwgXCItXCIsXHJcbiAgICAgICAgZm90b1VybDogZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBpc0Fkdmlzb3I6IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGRpdGFtYmFoa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbmlzOiBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGtlbGFzOiBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgamFiYXRhbjogZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIGFueSxcclxuICAgICAgICBmb3RvVXJsOiBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZyB8fCB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGRhdGEgcGVuZ3VydXMuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBBQlNFTlNJICYgQUNBUkFcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNhcmEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7Zm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IG5ld0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLCB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZyB8fCBcIlwiLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyB8fCBcIlNla29sYWhcIixcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWJ1YXQhXCIsIGlkOiBuZXdBY2FyYS5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke2Zvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIil9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIil9YCkgOiBudWxsO1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogXCJPTkdPSU5HXCIsIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoeyBkYXRhOiB7IGFjYXJhSWQ6IGlkLCB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGltdWxhaSFcIiwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbXVsYWkgc2VzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgaWYgKHNlc2lBa3RpZikgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSwgZGF0YTogeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIsIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogbmV4dFN0YXR1cywgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGloZW50aWthbi5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBzdG9wIHNlc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmIVwiIH07XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuISDwn5GMXCIsIGRhdGE6IHsgbmFtZTogcGVuZ3VydXMubmFtYSwgc3RhdHVzOiBcIkRVUExJQ0FURVwiIH0gfTtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIGFjYXJhSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkLCBrZWdpYXRhbjogXCJTY2FuXCIsIHN0YXR1czogXCJIQURJUlwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcmhhc2lsISDinIVcIiwgZGF0YTogeyBuYW1lOiBwZW5ndXJ1cy5uYW1hLCBzdGF0dXM6IFwiSEFESVJcIiB9IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNpc3RlbSBzY2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIHRpZGFrIGFrdGlmXCIgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7XHJcbiAgICBlbHNlIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQsIHN0YXR1cywga2VnaWF0YW46IFwiTWFudWFsXCIsIHRhbmdnYWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN0YXR1cyBkaXBlcmJhcnVpIG1hbnVhbC5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBpbnB1dCBtYW51YWwuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3QoeyB3aGVyZTogeyBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH0gfSk7XHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VzaSB0aWRhayBha3RpZlwiIH07XHJcbiAgICBjb25zdCBzZW11YSA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sIHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0pO1xyXG4gICAgY29uc3Qgc3VkYWggPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH0gfSk7XHJcbiAgICBjb25zdCBzdWRhaElkcyA9IHN1ZGFoLm1hcChzID0+IHMucGVuZ3VydXNJZCk7XHJcbiAgICBjb25zdCBiZWx1bSA9IHNlbXVhLmZpbHRlcihwID0+ICFzdWRhaElkcy5pbmNsdWRlcyhwLmlkKSk7XHJcbiAgICBpZiAoYmVsdW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHsgZGF0YTogYmVsdW0ubWFwKHAgPT4gKHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQ6IHAuaWQsIHN0YXR1czogXCJBTFBBXCIsIGtlZ2lhdGFuOiBcIkF1dG9cIiwgdGFuZ2dhbDogbmV3IERhdGUoKSB9KSkgfSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2VzaSBkaXR1dHVwIG90b21hdGlzLlwiLCBjb3VudDogYmVsdW0ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGF1dG8tYWxwYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhckFjYXJhKCkgeyByZXR1cm4gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBzZXNpOiB7IHdoZXJlOiB7IHN0YXR1czogXCJPTkdPSU5HXCIgfSwgdGFrZTogMSB9IH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9KTsgfVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7IHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LCBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfSB9KTsgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICBjb25zdCB0b3RhbCA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBhY2FyYTogdHJ1ZSwgYWJzZW5zaTogdHJ1ZSB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJla2FwIGRpbXVhdFwiLFxyXG4gICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4gKHtcclxuICAgICAgaWQ6IHMuaWQsIG5hbWE6IHMuYWNhcmEubmFtYSwgdGFuZ2dhbDogcy53YWt0dU11bGFpLCB0b3RhbEFuZ2dvdGE6IHRvdGFsLFxyXG4gICAgICBjb3VudHM6IHsgSEFESVI6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0hBRElSJykubGVuZ3RoLCBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLCBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsIEFMUEE6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0FMUEEnKS5sZW5ndGggfSxcclxuICAgICAgcGVyc2VudGFzZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgocy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGggLyB0b3RhbCkgKiAxMDApIDogMFxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHsgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHsgd2hlcmU6IHsgc2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH0gfSk7IH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gW107IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQ2hlY2tlZFwiIH07IH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJDaGVja2VkXCIgfTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDYuIEtFVUFOR0FOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZywgY29sb3I6IFwiYmx1ZVwiLCBpY29uOiBcIldhbGxldFwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCdWt1IEthcyBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBhbnksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmcsIHRhbmdnYWw6IG5ldyBEYXRlKCksIGJ1a3VLYXNJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcImJ1a3VLYXNJZFwiKSkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpY2F0YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoeyB3aGVyZTogeyBpZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9LCBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSkgfSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGlhbG9rYXNpa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogXCJQRU5HRUxVQVJBTlwiLCBrYXRlZ29yaTogXCJFdmVudFwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpLCBwcm9rZXJJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9IH0pLFxyXG4gICAgICBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIH0sIGRhdGE6IHsgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpIH0gfSB9KVxyXG4gICAgXSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VFdmVudEJ1ZGdldChwcm9rZXJJZDogbnVtYmVyLCB0YXJnZXRCdWt1SWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LCBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdHV0dXAhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoeyBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nLCBrb2RlOiBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZywga2F0ZWdvcmk6IFwiVW11bVwiLCBrb25kaXNpOiBcIkJhaWtcIiwgc3RhdHVzOiBcIkFWQUlMQUJMRVwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzZXQgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkJPUlJPV0VEXCIsIHBlbWluamFtOiBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmcsIHRnbFBpbmphbTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXBpbmphbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBwZW1pbmphbTogbnVsbCwgdGdsUGluamFtOiBudWxsIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIktlbWJhbGkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBHQUxFUklcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmcsIGthdGVnb3JpOiBcIlVtdW1cIiwgaW1hZ2VzOiBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nLCBkZXNrcmlwc2k6IFwiXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVcGRhdGUhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkhhcHVzIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTEFJTk5ZQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHsgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRlc2FpbiBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHsgd2hlcmU6IHsgaWQ6IDEgfSwgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSwgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCRyBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIHRyeSB7IGlmICghcGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSkgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHsgZGF0YTogeyBpcCwgdXNlckFnZW50LCBwYXRoIH0gfSk7IH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGl2aXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuY3JlYXRlKHsgZGF0YTogeyBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyB9IH0pOyByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgZGlidWF0IVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURpdmlzaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuZGl2aXNpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEaXZpc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpaGFwdXNcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKYWJhdGFuKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRpdmlzaUlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZGl2aXNpSWRcIikpIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlidWF0XCIgfTsgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlwZXJiYXJ1aVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUphYmF0YW4oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGloYXB1c1wiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0tlaGFkaXJhbihhYnNlbnNpSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoeyB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3RhdHVzIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvUkErY3NCLGdNQUFBIn0=
}),
"[project]/lib/data:faa46e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventTrx",
    ()=>$$RSC_SERVER_ACTION_30
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a60e8760290611d4c9ec013fba160ed0dcf3c7b4":"createEventTrx"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a60e8760290611d4c9ec013fba160ed0dcf3c7b4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createEventTrx");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEuIEFTUElSQVNJIFNJU1dBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcmF3TmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJhd0tlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBlc2FuID0gZm9ybURhdGEuZ2V0KFwicGVzYW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzQW5vbmltID0gZm9ybURhdGEuZ2V0KFwiaXNBbm9uaW1cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBpZiAoIXBlc2FuIHx8IHBlc2FuLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGVzYW4gdGlkYWsgYm9sZWgga29zb25nIVwiIH07XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoeyBkYXRhOiB7IHBlbmdpcmltLCBrZWxhcywgaXNpOiBwZXNhbiwga2F0ZWdvcmk6IFwiVW11bVwiLCBzdGF0dXM6IFwiUEVORElOR1wiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzcGlyYXNpIGJlcmhhc2lsIGRpa2lyaW0hIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naXJpbSBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGx5QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGJhbGFzYW4gPSBmb3JtRGF0YS5nZXQoXCJiYWxhc2FuXCIpIGFzIHN0cmluZztcclxuICBpZiAoIWJhbGFzYW4gfHwgYmFsYXNhbi50cmltKCkgPT09IFwiXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkJhbGFzYW4gdGlkYWsgYm9sZWgga29zb25nLlwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyBiYWxhc2FuLCBiYWxhc2FuQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogXCJTRUxFU0FJXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYWxhc2FuIHRlcmtpcmltIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQkVSSVRBIChDTVMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gQmVyaXRhU2NoZW1hLnNhZmVQYXJzZSh7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSwga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSB8fCBcIlVtdW1cIiwgZ2FtYmFyOiBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgfSk7XHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICBjb25zdCB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xyXG4gIGNvbnN0IHNsdWcgPSBgJHtzbHVnaWZ5KGp1ZHVsKX0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIGhhYmlzLlwiIH07XHJcblxyXG4gIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9IH0pO1xyXG4gIGlmICghYWRtaW5Vc2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsLCBzbHVnLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXI6IGdhbWJhciB8fCBudWxsLCBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIiwgdmlld3M6IDAgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLCAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7IHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJlcml0YShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMy4gUFJPR1JBTSBLRVJKQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIHN0YXR1czogc3RhdHVzIGFzIFN0YXR1c1Byb2tlciwgcHJvZ3Jlc3MsXHJcbiAgICAgICAgZGVza3JpcHNpOiBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRpdmlzaTogZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBwcmlvcml0YXM6IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZyxcclxuICAgICAgICBhbmdnYXJhbjogTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKSxcclxuICAgICAgICBsb2thc2k6IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZyB8fCBudWxsLFxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpID8gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsLFxyXG4gICAgICAgIGRlYWRsaW5lOiBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZykgOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMgYXMgU3RhdHVzUHJva2VyLCBwcm9ncmVzcyxcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBkZXNrcmlwc2k6IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHByaW9yaXRhczogZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGFuZ2dhcmFuOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc0ZlYXR1cmVkOiBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmcpIDogbnVsbCxcclxuICAgICAgICBkZWFkbGluZTogZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmcpIDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7IHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9ncmFtIGtlcmphIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gUEVOR1VSVVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIG5pcywgamFiYXRhbiwgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAga2VsYXM6IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZyB8fCBcIi1cIixcclxuICAgICAgICBkaXZpc2k6IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmcgfHwgXCItXCIsXHJcbiAgICAgICAgZm90b1VybDogZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBpc0Fkdmlzb3I6IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGRpdGFtYmFoa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbmlzOiBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGtlbGFzOiBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgamFiYXRhbjogZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIGFueSxcclxuICAgICAgICBmb3RvVXJsOiBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZyB8fCB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGRhdGEgcGVuZ3VydXMuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBBQlNFTlNJICYgQUNBUkFcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNhcmEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7Zm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IG5ld0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLCB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZyB8fCBcIlwiLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyB8fCBcIlNla29sYWhcIixcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWJ1YXQhXCIsIGlkOiBuZXdBY2FyYS5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke2Zvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIil9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIil9YCkgOiBudWxsO1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogXCJPTkdPSU5HXCIsIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoeyBkYXRhOiB7IGFjYXJhSWQ6IGlkLCB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGltdWxhaSFcIiwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbXVsYWkgc2VzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgaWYgKHNlc2lBa3RpZikgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSwgZGF0YTogeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIsIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogbmV4dFN0YXR1cywgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGloZW50aWthbi5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBzdG9wIHNlc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmIVwiIH07XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuISDwn5GMXCIsIGRhdGE6IHsgbmFtZTogcGVuZ3VydXMubmFtYSwgc3RhdHVzOiBcIkRVUExJQ0FURVwiIH0gfTtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIGFjYXJhSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkLCBrZWdpYXRhbjogXCJTY2FuXCIsIHN0YXR1czogXCJIQURJUlwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcmhhc2lsISDinIVcIiwgZGF0YTogeyBuYW1lOiBwZW5ndXJ1cy5uYW1hLCBzdGF0dXM6IFwiSEFESVJcIiB9IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNpc3RlbSBzY2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIHRpZGFrIGFrdGlmXCIgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7XHJcbiAgICBlbHNlIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQsIHN0YXR1cywga2VnaWF0YW46IFwiTWFudWFsXCIsIHRhbmdnYWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN0YXR1cyBkaXBlcmJhcnVpIG1hbnVhbC5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBpbnB1dCBtYW51YWwuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3QoeyB3aGVyZTogeyBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH0gfSk7XHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VzaSB0aWRhayBha3RpZlwiIH07XHJcbiAgICBjb25zdCBzZW11YSA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sIHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0pO1xyXG4gICAgY29uc3Qgc3VkYWggPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH0gfSk7XHJcbiAgICBjb25zdCBzdWRhaElkcyA9IHN1ZGFoLm1hcChzID0+IHMucGVuZ3VydXNJZCk7XHJcbiAgICBjb25zdCBiZWx1bSA9IHNlbXVhLmZpbHRlcihwID0+ICFzdWRhaElkcy5pbmNsdWRlcyhwLmlkKSk7XHJcbiAgICBpZiAoYmVsdW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHsgZGF0YTogYmVsdW0ubWFwKHAgPT4gKHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQ6IHAuaWQsIHN0YXR1czogXCJBTFBBXCIsIGtlZ2lhdGFuOiBcIkF1dG9cIiwgdGFuZ2dhbDogbmV3IERhdGUoKSB9KSkgfSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2VzaSBkaXR1dHVwIG90b21hdGlzLlwiLCBjb3VudDogYmVsdW0ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGF1dG8tYWxwYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhckFjYXJhKCkgeyByZXR1cm4gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBzZXNpOiB7IHdoZXJlOiB7IHN0YXR1czogXCJPTkdPSU5HXCIgfSwgdGFrZTogMSB9IH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9KTsgfVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7IHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LCBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfSB9KTsgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICBjb25zdCB0b3RhbCA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBhY2FyYTogdHJ1ZSwgYWJzZW5zaTogdHJ1ZSB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJla2FwIGRpbXVhdFwiLFxyXG4gICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4gKHtcclxuICAgICAgaWQ6IHMuaWQsIG5hbWE6IHMuYWNhcmEubmFtYSwgdGFuZ2dhbDogcy53YWt0dU11bGFpLCB0b3RhbEFuZ2dvdGE6IHRvdGFsLFxyXG4gICAgICBjb3VudHM6IHsgSEFESVI6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0hBRElSJykubGVuZ3RoLCBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLCBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsIEFMUEE6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0FMUEEnKS5sZW5ndGggfSxcclxuICAgICAgcGVyc2VudGFzZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgocy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGggLyB0b3RhbCkgKiAxMDApIDogMFxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHsgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHsgd2hlcmU6IHsgc2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH0gfSk7IH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gW107IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQ2hlY2tlZFwiIH07IH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJDaGVja2VkXCIgfTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDYuIEtFVUFOR0FOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZywgY29sb3I6IFwiYmx1ZVwiLCBpY29uOiBcIldhbGxldFwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCdWt1IEthcyBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBhbnksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmcsIHRhbmdnYWw6IG5ldyBEYXRlKCksIGJ1a3VLYXNJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcImJ1a3VLYXNJZFwiKSkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpY2F0YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoeyB3aGVyZTogeyBpZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9LCBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSkgfSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGlhbG9rYXNpa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogXCJQRU5HRUxVQVJBTlwiLCBrYXRlZ29yaTogXCJFdmVudFwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpLCBwcm9rZXJJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9IH0pLFxyXG4gICAgICBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIH0sIGRhdGE6IHsgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpIH0gfSB9KVxyXG4gICAgXSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VFdmVudEJ1ZGdldChwcm9rZXJJZDogbnVtYmVyLCB0YXJnZXRCdWt1SWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LCBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdHV0dXAhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoeyBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nLCBrb2RlOiBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZywga2F0ZWdvcmk6IFwiVW11bVwiLCBrb25kaXNpOiBcIkJhaWtcIiwgc3RhdHVzOiBcIkFWQUlMQUJMRVwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzZXQgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkJPUlJPV0VEXCIsIHBlbWluamFtOiBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmcsIHRnbFBpbmphbTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXBpbmphbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBwZW1pbmphbTogbnVsbCwgdGdsUGluamFtOiBudWxsIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIktlbWJhbGkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBHQUxFUklcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmcsIGthdGVnb3JpOiBcIlVtdW1cIiwgaW1hZ2VzOiBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nLCBkZXNrcmlwc2k6IFwiXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVcGRhdGUhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkhhcHVzIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTEFJTk5ZQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHsgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRlc2FpbiBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHsgd2hlcmU6IHsgaWQ6IDEgfSwgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSwgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCRyBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIHRyeSB7IGlmICghcGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSkgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHsgZGF0YTogeyBpcCwgdXNlckFnZW50LCBwYXRoIH0gfSk7IH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGl2aXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuY3JlYXRlKHsgZGF0YTogeyBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyB9IH0pOyByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgZGlidWF0IVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURpdmlzaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuZGl2aXNpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEaXZpc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpaGFwdXNcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKYWJhdGFuKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRpdmlzaUlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZGl2aXNpSWRcIikpIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlidWF0XCIgfTsgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlwZXJiYXJ1aVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUphYmF0YW4oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGloYXB1c1wiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0tlaGFkaXJhbihhYnNlbnNpSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoeyB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3RhdHVzIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpUkFzZHNCLDZMQUFBIn0=
}),
"[project]/lib/data:dfaa6b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBukuKas",
    ()=>$$RSC_SERVER_ACTION_27
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40cc01506f72b6a109b2caca5582aca09cbc2ab958":"createBukuKas"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40cc01506f72b6a109b2caca5582aca09cbc2ab958", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createBukuKas");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEuIEFTUElSQVNJIFNJU1dBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcmF3TmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJhd0tlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBlc2FuID0gZm9ybURhdGEuZ2V0KFwicGVzYW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzQW5vbmltID0gZm9ybURhdGEuZ2V0KFwiaXNBbm9uaW1cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBpZiAoIXBlc2FuIHx8IHBlc2FuLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGVzYW4gdGlkYWsgYm9sZWgga29zb25nIVwiIH07XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoeyBkYXRhOiB7IHBlbmdpcmltLCBrZWxhcywgaXNpOiBwZXNhbiwga2F0ZWdvcmk6IFwiVW11bVwiLCBzdGF0dXM6IFwiUEVORElOR1wiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzcGlyYXNpIGJlcmhhc2lsIGRpa2lyaW0hIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naXJpbSBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGx5QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGJhbGFzYW4gPSBmb3JtRGF0YS5nZXQoXCJiYWxhc2FuXCIpIGFzIHN0cmluZztcclxuICBpZiAoIWJhbGFzYW4gfHwgYmFsYXNhbi50cmltKCkgPT09IFwiXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkJhbGFzYW4gdGlkYWsgYm9sZWgga29zb25nLlwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyBiYWxhc2FuLCBiYWxhc2FuQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogXCJTRUxFU0FJXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYWxhc2FuIHRlcmtpcmltIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQkVSSVRBIChDTVMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gQmVyaXRhU2NoZW1hLnNhZmVQYXJzZSh7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSwga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSB8fCBcIlVtdW1cIiwgZ2FtYmFyOiBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgfSk7XHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICBjb25zdCB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xyXG4gIGNvbnN0IHNsdWcgPSBgJHtzbHVnaWZ5KGp1ZHVsKX0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIGhhYmlzLlwiIH07XHJcblxyXG4gIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9IH0pO1xyXG4gIGlmICghYWRtaW5Vc2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsLCBzbHVnLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXI6IGdhbWJhciB8fCBudWxsLCBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIiwgdmlld3M6IDAgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLCAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7IHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJlcml0YShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMy4gUFJPR1JBTSBLRVJKQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIHN0YXR1czogc3RhdHVzIGFzIFN0YXR1c1Byb2tlciwgcHJvZ3Jlc3MsXHJcbiAgICAgICAgZGVza3JpcHNpOiBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRpdmlzaTogZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBwcmlvcml0YXM6IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZyxcclxuICAgICAgICBhbmdnYXJhbjogTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKSxcclxuICAgICAgICBsb2thc2k6IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZyB8fCBudWxsLFxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpID8gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsLFxyXG4gICAgICAgIGRlYWRsaW5lOiBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZykgOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMgYXMgU3RhdHVzUHJva2VyLCBwcm9ncmVzcyxcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBkZXNrcmlwc2k6IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHByaW9yaXRhczogZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGFuZ2dhcmFuOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc0ZlYXR1cmVkOiBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmcpIDogbnVsbCxcclxuICAgICAgICBkZWFkbGluZTogZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmcpIDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7IHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9ncmFtIGtlcmphIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gUEVOR1VSVVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIG5pcywgamFiYXRhbiwgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAga2VsYXM6IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZyB8fCBcIi1cIixcclxuICAgICAgICBkaXZpc2k6IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmcgfHwgXCItXCIsXHJcbiAgICAgICAgZm90b1VybDogZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBpc0Fkdmlzb3I6IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGRpdGFtYmFoa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbmlzOiBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGtlbGFzOiBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgamFiYXRhbjogZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIGFueSxcclxuICAgICAgICBmb3RvVXJsOiBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZyB8fCB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGRhdGEgcGVuZ3VydXMuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBBQlNFTlNJICYgQUNBUkFcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNhcmEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7Zm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IG5ld0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLCB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZyB8fCBcIlwiLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyB8fCBcIlNla29sYWhcIixcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWJ1YXQhXCIsIGlkOiBuZXdBY2FyYS5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke2Zvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIil9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIil9YCkgOiBudWxsO1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogXCJPTkdPSU5HXCIsIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoeyBkYXRhOiB7IGFjYXJhSWQ6IGlkLCB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGltdWxhaSFcIiwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbXVsYWkgc2VzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgaWYgKHNlc2lBa3RpZikgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSwgZGF0YTogeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIsIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogbmV4dFN0YXR1cywgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGloZW50aWthbi5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBzdG9wIHNlc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmIVwiIH07XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuISDwn5GMXCIsIGRhdGE6IHsgbmFtZTogcGVuZ3VydXMubmFtYSwgc3RhdHVzOiBcIkRVUExJQ0FURVwiIH0gfTtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIGFjYXJhSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkLCBrZWdpYXRhbjogXCJTY2FuXCIsIHN0YXR1czogXCJIQURJUlwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcmhhc2lsISDinIVcIiwgZGF0YTogeyBuYW1lOiBwZW5ndXJ1cy5uYW1hLCBzdGF0dXM6IFwiSEFESVJcIiB9IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNpc3RlbSBzY2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIHRpZGFrIGFrdGlmXCIgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7XHJcbiAgICBlbHNlIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQsIHN0YXR1cywga2VnaWF0YW46IFwiTWFudWFsXCIsIHRhbmdnYWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN0YXR1cyBkaXBlcmJhcnVpIG1hbnVhbC5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBpbnB1dCBtYW51YWwuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3QoeyB3aGVyZTogeyBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH0gfSk7XHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VzaSB0aWRhayBha3RpZlwiIH07XHJcbiAgICBjb25zdCBzZW11YSA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sIHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0pO1xyXG4gICAgY29uc3Qgc3VkYWggPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH0gfSk7XHJcbiAgICBjb25zdCBzdWRhaElkcyA9IHN1ZGFoLm1hcChzID0+IHMucGVuZ3VydXNJZCk7XHJcbiAgICBjb25zdCBiZWx1bSA9IHNlbXVhLmZpbHRlcihwID0+ICFzdWRhaElkcy5pbmNsdWRlcyhwLmlkKSk7XHJcbiAgICBpZiAoYmVsdW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHsgZGF0YTogYmVsdW0ubWFwKHAgPT4gKHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQ6IHAuaWQsIHN0YXR1czogXCJBTFBBXCIsIGtlZ2lhdGFuOiBcIkF1dG9cIiwgdGFuZ2dhbDogbmV3IERhdGUoKSB9KSkgfSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2VzaSBkaXR1dHVwIG90b21hdGlzLlwiLCBjb3VudDogYmVsdW0ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGF1dG8tYWxwYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhckFjYXJhKCkgeyByZXR1cm4gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBzZXNpOiB7IHdoZXJlOiB7IHN0YXR1czogXCJPTkdPSU5HXCIgfSwgdGFrZTogMSB9IH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9KTsgfVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7IHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LCBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfSB9KTsgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICBjb25zdCB0b3RhbCA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBhY2FyYTogdHJ1ZSwgYWJzZW5zaTogdHJ1ZSB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJla2FwIGRpbXVhdFwiLFxyXG4gICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4gKHtcclxuICAgICAgaWQ6IHMuaWQsIG5hbWE6IHMuYWNhcmEubmFtYSwgdGFuZ2dhbDogcy53YWt0dU11bGFpLCB0b3RhbEFuZ2dvdGE6IHRvdGFsLFxyXG4gICAgICBjb3VudHM6IHsgSEFESVI6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0hBRElSJykubGVuZ3RoLCBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLCBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsIEFMUEE6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0FMUEEnKS5sZW5ndGggfSxcclxuICAgICAgcGVyc2VudGFzZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgocy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGggLyB0b3RhbCkgKiAxMDApIDogMFxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHsgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHsgd2hlcmU6IHsgc2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH0gfSk7IH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gW107IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQ2hlY2tlZFwiIH07IH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJDaGVja2VkXCIgfTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDYuIEtFVUFOR0FOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZywgY29sb3I6IFwiYmx1ZVwiLCBpY29uOiBcIldhbGxldFwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCdWt1IEthcyBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBhbnksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmcsIHRhbmdnYWw6IG5ldyBEYXRlKCksIGJ1a3VLYXNJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcImJ1a3VLYXNJZFwiKSkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpY2F0YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoeyB3aGVyZTogeyBpZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9LCBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSkgfSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGlhbG9rYXNpa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogXCJQRU5HRUxVQVJBTlwiLCBrYXRlZ29yaTogXCJFdmVudFwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpLCBwcm9rZXJJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9IH0pLFxyXG4gICAgICBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIH0sIGRhdGE6IHsgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpIH0gfSB9KVxyXG4gICAgXSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VFdmVudEJ1ZGdldChwcm9rZXJJZDogbnVtYmVyLCB0YXJnZXRCdWt1SWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LCBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdHV0dXAhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoeyBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nLCBrb2RlOiBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZywga2F0ZWdvcmk6IFwiVW11bVwiLCBrb25kaXNpOiBcIkJhaWtcIiwgc3RhdHVzOiBcIkFWQUlMQUJMRVwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzZXQgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkJPUlJPV0VEXCIsIHBlbWluamFtOiBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmcsIHRnbFBpbmphbTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXBpbmphbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBwZW1pbmphbTogbnVsbCwgdGdsUGluamFtOiBudWxsIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIktlbWJhbGkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBHQUxFUklcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmcsIGthdGVnb3JpOiBcIlVtdW1cIiwgaW1hZ2VzOiBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nLCBkZXNrcmlwc2k6IFwiXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVcGRhdGUhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkhhcHVzIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTEFJTk5ZQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHsgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRlc2FpbiBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHsgd2hlcmU6IHsgaWQ6IDEgfSwgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSwgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCRyBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIHRyeSB7IGlmICghcGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSkgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHsgZGF0YTogeyBpcCwgdXNlckFnZW50LCBwYXRoIH0gfSk7IH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGl2aXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuY3JlYXRlKHsgZGF0YTogeyBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyB9IH0pOyByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgZGlidWF0IVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURpdmlzaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuZGl2aXNpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEaXZpc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpaGFwdXNcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKYWJhdGFuKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRpdmlzaUlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZGl2aXNpSWRcIikpIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlidWF0XCIgfTsgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlwZXJiYXJ1aVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUphYmF0YW4oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGloYXB1c1wiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0tlaGFkaXJhbihhYnNlbnNpSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoeyB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3RhdHVzIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnUkFpY3NCLDRMQUFBIn0=
}),
"[project]/lib/data:c71bfd [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeEventBudget",
    ()=>$$RSC_SERVER_ACTION_31
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"604dac788e78cbd7be7e631a6729877d5722066315":"closeEventBudget"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("604dac788e78cbd7be7e631a6729877d5722066315", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "closeEventBudget");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEuIEFTUElSQVNJIFNJU1dBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcmF3TmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJhd0tlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBlc2FuID0gZm9ybURhdGEuZ2V0KFwicGVzYW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzQW5vbmltID0gZm9ybURhdGEuZ2V0KFwiaXNBbm9uaW1cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBpZiAoIXBlc2FuIHx8IHBlc2FuLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGVzYW4gdGlkYWsgYm9sZWgga29zb25nIVwiIH07XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoeyBkYXRhOiB7IHBlbmdpcmltLCBrZWxhcywgaXNpOiBwZXNhbiwga2F0ZWdvcmk6IFwiVW11bVwiLCBzdGF0dXM6IFwiUEVORElOR1wiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzcGlyYXNpIGJlcmhhc2lsIGRpa2lyaW0hIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naXJpbSBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGx5QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGJhbGFzYW4gPSBmb3JtRGF0YS5nZXQoXCJiYWxhc2FuXCIpIGFzIHN0cmluZztcclxuICBpZiAoIWJhbGFzYW4gfHwgYmFsYXNhbi50cmltKCkgPT09IFwiXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkJhbGFzYW4gdGlkYWsgYm9sZWgga29zb25nLlwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyBiYWxhc2FuLCBiYWxhc2FuQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogXCJTRUxFU0FJXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYWxhc2FuIHRlcmtpcmltIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQkVSSVRBIChDTVMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gQmVyaXRhU2NoZW1hLnNhZmVQYXJzZSh7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSwga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSB8fCBcIlVtdW1cIiwgZ2FtYmFyOiBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgfSk7XHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICBjb25zdCB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xyXG4gIGNvbnN0IHNsdWcgPSBgJHtzbHVnaWZ5KGp1ZHVsKX0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIGhhYmlzLlwiIH07XHJcblxyXG4gIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9IH0pO1xyXG4gIGlmICghYWRtaW5Vc2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsLCBzbHVnLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXI6IGdhbWJhciB8fCBudWxsLCBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIiwgdmlld3M6IDAgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLCAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7IHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJlcml0YShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMy4gUFJPR1JBTSBLRVJKQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIHN0YXR1czogc3RhdHVzIGFzIFN0YXR1c1Byb2tlciwgcHJvZ3Jlc3MsXHJcbiAgICAgICAgZGVza3JpcHNpOiBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRpdmlzaTogZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBwcmlvcml0YXM6IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZyxcclxuICAgICAgICBhbmdnYXJhbjogTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKSxcclxuICAgICAgICBsb2thc2k6IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZyB8fCBudWxsLFxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpID8gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsLFxyXG4gICAgICAgIGRlYWRsaW5lOiBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZykgOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMgYXMgU3RhdHVzUHJva2VyLCBwcm9ncmVzcyxcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBkZXNrcmlwc2k6IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHByaW9yaXRhczogZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGFuZ2dhcmFuOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc0ZlYXR1cmVkOiBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmcpIDogbnVsbCxcclxuICAgICAgICBkZWFkbGluZTogZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmcpIDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7IHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9ncmFtIGtlcmphIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gUEVOR1VSVVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIG5pcywgamFiYXRhbiwgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAga2VsYXM6IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZyB8fCBcIi1cIixcclxuICAgICAgICBkaXZpc2k6IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmcgfHwgXCItXCIsXHJcbiAgICAgICAgZm90b1VybDogZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBpc0Fkdmlzb3I6IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGRpdGFtYmFoa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbmlzOiBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGtlbGFzOiBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgamFiYXRhbjogZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIGFueSxcclxuICAgICAgICBmb3RvVXJsOiBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZyB8fCB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGRhdGEgcGVuZ3VydXMuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBBQlNFTlNJICYgQUNBUkFcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNhcmEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7Zm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IG5ld0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLCB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZyB8fCBcIlwiLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyB8fCBcIlNla29sYWhcIixcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWJ1YXQhXCIsIGlkOiBuZXdBY2FyYS5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke2Zvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIil9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIil9YCkgOiBudWxsO1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogXCJPTkdPSU5HXCIsIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoeyBkYXRhOiB7IGFjYXJhSWQ6IGlkLCB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGltdWxhaSFcIiwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbXVsYWkgc2VzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgaWYgKHNlc2lBa3RpZikgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSwgZGF0YTogeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIsIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogbmV4dFN0YXR1cywgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGloZW50aWthbi5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBzdG9wIHNlc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmIVwiIH07XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuISDwn5GMXCIsIGRhdGE6IHsgbmFtZTogcGVuZ3VydXMubmFtYSwgc3RhdHVzOiBcIkRVUExJQ0FURVwiIH0gfTtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIGFjYXJhSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkLCBrZWdpYXRhbjogXCJTY2FuXCIsIHN0YXR1czogXCJIQURJUlwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcmhhc2lsISDinIVcIiwgZGF0YTogeyBuYW1lOiBwZW5ndXJ1cy5uYW1hLCBzdGF0dXM6IFwiSEFESVJcIiB9IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNpc3RlbSBzY2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIHRpZGFrIGFrdGlmXCIgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7XHJcbiAgICBlbHNlIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQsIHN0YXR1cywga2VnaWF0YW46IFwiTWFudWFsXCIsIHRhbmdnYWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN0YXR1cyBkaXBlcmJhcnVpIG1hbnVhbC5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBpbnB1dCBtYW51YWwuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3QoeyB3aGVyZTogeyBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH0gfSk7XHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VzaSB0aWRhayBha3RpZlwiIH07XHJcbiAgICBjb25zdCBzZW11YSA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sIHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0pO1xyXG4gICAgY29uc3Qgc3VkYWggPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH0gfSk7XHJcbiAgICBjb25zdCBzdWRhaElkcyA9IHN1ZGFoLm1hcChzID0+IHMucGVuZ3VydXNJZCk7XHJcbiAgICBjb25zdCBiZWx1bSA9IHNlbXVhLmZpbHRlcihwID0+ICFzdWRhaElkcy5pbmNsdWRlcyhwLmlkKSk7XHJcbiAgICBpZiAoYmVsdW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHsgZGF0YTogYmVsdW0ubWFwKHAgPT4gKHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQ6IHAuaWQsIHN0YXR1czogXCJBTFBBXCIsIGtlZ2lhdGFuOiBcIkF1dG9cIiwgdGFuZ2dhbDogbmV3IERhdGUoKSB9KSkgfSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2VzaSBkaXR1dHVwIG90b21hdGlzLlwiLCBjb3VudDogYmVsdW0ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGF1dG8tYWxwYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhckFjYXJhKCkgeyByZXR1cm4gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBzZXNpOiB7IHdoZXJlOiB7IHN0YXR1czogXCJPTkdPSU5HXCIgfSwgdGFrZTogMSB9IH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9KTsgfVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7IHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LCBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfSB9KTsgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICBjb25zdCB0b3RhbCA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBhY2FyYTogdHJ1ZSwgYWJzZW5zaTogdHJ1ZSB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJla2FwIGRpbXVhdFwiLFxyXG4gICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4gKHtcclxuICAgICAgaWQ6IHMuaWQsIG5hbWE6IHMuYWNhcmEubmFtYSwgdGFuZ2dhbDogcy53YWt0dU11bGFpLCB0b3RhbEFuZ2dvdGE6IHRvdGFsLFxyXG4gICAgICBjb3VudHM6IHsgSEFESVI6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0hBRElSJykubGVuZ3RoLCBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLCBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsIEFMUEE6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0FMUEEnKS5sZW5ndGggfSxcclxuICAgICAgcGVyc2VudGFzZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgocy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGggLyB0b3RhbCkgKiAxMDApIDogMFxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHsgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHsgd2hlcmU6IHsgc2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH0gfSk7IH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gW107IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQ2hlY2tlZFwiIH07IH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJDaGVja2VkXCIgfTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDYuIEtFVUFOR0FOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZywgY29sb3I6IFwiYmx1ZVwiLCBpY29uOiBcIldhbGxldFwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCdWt1IEthcyBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBhbnksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmcsIHRhbmdnYWw6IG5ldyBEYXRlKCksIGJ1a3VLYXNJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcImJ1a3VLYXNJZFwiKSkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpY2F0YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoeyB3aGVyZTogeyBpZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9LCBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSkgfSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGlhbG9rYXNpa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogXCJQRU5HRUxVQVJBTlwiLCBrYXRlZ29yaTogXCJFdmVudFwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpLCBwcm9rZXJJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9IH0pLFxyXG4gICAgICBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIH0sIGRhdGE6IHsgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpIH0gfSB9KVxyXG4gICAgXSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VFdmVudEJ1ZGdldChwcm9rZXJJZDogbnVtYmVyLCB0YXJnZXRCdWt1SWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LCBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdHV0dXAhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoeyBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nLCBrb2RlOiBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZywga2F0ZWdvcmk6IFwiVW11bVwiLCBrb25kaXNpOiBcIkJhaWtcIiwgc3RhdHVzOiBcIkFWQUlMQUJMRVwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzZXQgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkJPUlJPV0VEXCIsIHBlbWluamFtOiBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmcsIHRnbFBpbmphbTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXBpbmphbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBwZW1pbmphbTogbnVsbCwgdGdsUGluamFtOiBudWxsIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIktlbWJhbGkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBHQUxFUklcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmcsIGthdGVnb3JpOiBcIlVtdW1cIiwgaW1hZ2VzOiBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nLCBkZXNrcmlwc2k6IFwiXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVcGRhdGUhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkhhcHVzIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTEFJTk5ZQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHsgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRlc2FpbiBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHsgd2hlcmU6IHsgaWQ6IDEgfSwgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSwgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCRyBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIHRyeSB7IGlmICghcGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSkgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHsgZGF0YTogeyBpcCwgdXNlckFnZW50LCBwYXRoIH0gfSk7IH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGl2aXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuY3JlYXRlKHsgZGF0YTogeyBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyB9IH0pOyByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgZGlidWF0IVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURpdmlzaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuZGl2aXNpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEaXZpc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpaGFwdXNcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKYWJhdGFuKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRpdmlzaUlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZGl2aXNpSWRcIikpIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlidWF0XCIgfTsgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlwZXJiYXJ1aVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUphYmF0YW4oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGloYXB1c1wiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0tlaGFkaXJhbihhYnNlbnNpSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoeyB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3RhdHVzIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtUkFnZXNCLCtMQUFBIn0=
}),
"[project]/app/admin/kas/KeuanganClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeuanganClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-down.js [app-client] (ecmascript) <export default as ArrowDownCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-off.js [app-client] (ecmascript) <export default as ImageOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.js [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$082d1e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:082d1e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$30a22f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:30a22f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$faa46e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:faa46e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$dfaa6b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:dfaa6b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$c71bfd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:c71bfd [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
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
;
;
const formatIDR = (val)=>new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(val);
const financeTourSteps = [
    {
        target: '.tour-finance-header',
        content: 'Selamat datang di Pusat Keuangan OSIS! Di sini Anda bisa mengelola dompet kas dan anggaran kegiatan secara profesional.',
        disableBeacon: true
    },
    {
        target: '.tour-ledger-sidebar',
        content: 'Ini adalah daftar "Dompet Kas". Anda bisa memisahkan Uang Kas Umum, Dana Sosial, atau Iuran Pengurus di sini agar tidak bercampur.'
    },
    {
        target: '.tour-stats-cards',
        content: 'Panel ini menampilkan saldo real-time dari dompet kas yang Anda pilih di sidebar.'
    },
    {
        target: '.tour-general-actions',
        content: 'Klik di sini untuk mencatat transaksi masuk (pemasukan) atau keluar (pengeluaran) harian.'
    },
    {
        target: '.tour-tab-switcher',
        content: 'Pindah ke tab ini untuk mengelola jatah dana khusus Program Kerja atau Event tertentu.'
    },
    {
        target: '.tour-event-list',
        content: 'Klik pada kartu kegiatan untuk mencatat nota belanja atau melihat riwayat audit bukti fisik dan struk.'
    }
];
function KeuanganClient({ ledgers, events, prokers }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const initialTab = searchParams.get("tab") || 'general';
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTab);
    const [selectedLedgerId, setSelectedLedgerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ledgers[0]?.id || 1);
    const [expandedProkerId, setExpandedProkerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDataLoading, setIsDataLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // STATE MODAL
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalType, setModalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('general_in');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // LIGHTBOX
    const [lightboxImg, setLightboxImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        amount: "",
        date: new Date().toISOString().split('T')[0],
        category: "Umum",
        pic: "",
        prokerId: "",
        isSubsidi: false,
        bukuKasId: "",
        ledgerName: "",
        ledgerDesc: "",
        fromBukuId: "",
        fotoBarang: "",
        fotoNota: "",
        targetBukuId: "",
        kuantitas: 1,
        satuan: "pcs",
        hargaSatuan: ""
    });
    const fileInputBarang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputNota = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lpjRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KeuanganClient.useEffect": ()=>{
            setIsClient(true);
            // Beri delay halus untuk transisi skeleton awal
            const timer = setTimeout({
                "KeuanganClient.useEffect.timer": ()=>setIsDataLoading(false)
            }["KeuanganClient.useEffect.timer"], 500);
            return ({
                "KeuanganClient.useEffect": ()=>clearTimeout(timer)
            })["KeuanganClient.useEffect"];
        }
    }["KeuanganClient.useEffect"], []);
    const handleTabChange = (tab)=>{
        setIsDataLoading(true); // Tampilkan skeleton saat pindah tab
        setActiveTab(tab);
        const params = new URLSearchParams(searchParams);
        params.set("tab", tab);
        router.replace(`${pathname}?${params.toString()}`);
        setTimeout(()=>setIsDataLoading(false), 400);
    };
    const currentLedger = ledgers.find((l)=>l.id === selectedLedgerId) || ledgers[0];
    const ledgerTransactions = currentLedger?.transaksi || [];
    const saldoLedger = ledgerTransactions.reduce((acc, curr)=>curr.tipe === 'PEMASUKAN' ? acc + curr.nominal : acc - curr.nominal, 0);
    const activeEvent = events.find((e)=>e.id === (modalType === 'lpj_preview' || modalType === 'close_budget' ? Number(formData.prokerId) : expandedProkerId));
    const sisaAnggaran = activeEvent ? activeEvent.budget - activeEvent.used : 0;
    const calculatedTotal = Number(formData.kuantitas || 0) * Number(formData.hargaSatuan || 0);
    // --- EXPORT FUNCTIONS (SUPER PRO VERSION) ---
    const exportLedgerToExcel = ()=>{
        const wsData = [
            [
                "LAPORAN ARUS KAS ORGANISASI (RESMI)"
            ],
            [
                "SMK NEGERI INDONESIA"
            ],
            [
                ""
            ],
            [
                "DATA DOMPET KAS",
                "",
                "",
                "STATUS SALDO"
            ],
            [
                "Nama Buku Kas",
                currentLedger.nama,
                "",
                "Total Masuk",
                ledgerTransactions.filter((t)=>t.tipe === 'PEMASUKAN').reduce((a, c)=>a + c.nominal, 0)
            ],
            [
                "Kategori",
                currentLedger.deskripsi || "-",
                "",
                "Total Keluar",
                ledgerTransactions.filter((t)=>t.tipe === 'PENGELUARAN').reduce((a, c)=>a + c.nominal, 0)
            ],
            [
                "Tanggal Cetak",
                new Date().toLocaleDateString('id-ID'),
                "",
                "SALDO AKHIR",
                saldoLedger
            ],
            [
                ""
            ],
            [
                "DAFTAR TRANSAKSI MASUK & KELUAR"
            ],
            [
                "NO",
                "TANGGAL",
                "URAIAN / KETERANGAN",
                "KATEGORI",
                "TIPE",
                "NOMINAL (Rp)"
            ]
        ];
        ledgerTransactions.forEach((t, i)=>{
            wsData.push([
                i + 1,
                new Date(t.tanggal).toLocaleDateString('id-ID'),
                t.judul,
                t.kategori,
                t.tipe,
                t.nominal
            ]);
        });
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(wsData);
        ws['!cols'] = [
            {
                wch: 6
            },
            {
                wch: 15
            },
            {
                wch: 45
            },
            {
                wch: 25
            },
            {
                wch: 15
            },
            {
                wch: 20
            }
        ];
        const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "Arus Kas");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, `LAPORAN_KAS_${currentLedger.nama.toUpperCase()}.xlsx`);
    };
    const exportEventToExcel = (ev)=>{
        const wsData = [
            [
                "LAPORAN PERTANGGUNGJAWABAN (LPJ) ANGGARAN KEGIATAN"
            ],
            [
                "SMK NEGERI INDONESIA - OSIS/MPK"
            ],
            [
                ""
            ],
            [
                "RINGKASAN KEGIATAN"
            ],
            [
                "Nama Kegiatan",
                ev.name
            ],
            [
                "Status",
                ev.status
            ],
            [
                "Pagu Anggaran",
                ev.budget
            ],
            [
                "Total Realisasi",
                ev.used
            ],
            [
                "Sisa Saldo Dana",
                ev.budget - ev.used
            ],
            [
                "Efisiensi",
                `${Math.round(ev.used / ev.budget * 100)}%`
            ],
            [
                ""
            ],
            [
                "DAFTAR RINCIAN NOTA / PENGELUARAN"
            ],
            [
                "NO",
                "TANGGAL",
                "URAIAN BARANG/JASA",
                "KUANTITAS",
                "SATUAN",
                "HARGA SATUAN (Rp)",
                "TOTAL PEMBAYARAN (Rp)"
            ]
        ];
        ev.transactions.forEach((t, i)=>{
            wsData.push([
                i + 1,
                t.date,
                t.title,
                t.kuantitas,
                t.satuan,
                t.amount / t.kuantitas,
                t.amount
            ]);
        });
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(wsData);
        ws['!cols'] = [
            {
                wch: 6
            },
            {
                wch: 15
            },
            {
                wch: 45
            },
            {
                wch: 12
            },
            {
                wch: 12
            },
            {
                wch: 20
            },
            {
                wch: 25
            }
        ];
        const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "LPJ Excel");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, `LPJ_EXCEL_${ev.name.toUpperCase()}.xlsx`);
    };
    const exportAllEventsToExcel = ()=>{
        const wsData = [
            [
                "REKAPITULASI SELURUH ANGGARAN PROGRAM KERJA"
            ],
            [
                "SMK NEGERI INDONESIA"
            ],
            [
                ""
            ],
            [
                "NO",
                "NAMA KEGIATAN",
                "PAGU ANGGARAN",
                "TOTAL REALISASI",
                "SISA DANA",
                "STATUS",
                "PERSENTASE"
            ]
        ];
        events.forEach((ev, i)=>{
            wsData.push([
                i + 1,
                ev.name,
                ev.budget,
                ev.used,
                ev.budget - ev.used,
                ev.status,
                `${Math.round(ev.used / ev.budget * 100)}%`
            ]);
        });
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(wsData);
        ws['!cols'] = [
            {
                wch: 6
            },
            {
                wch: 45
            },
            {
                wch: 20
            },
            {
                wch: 20
            },
            {
                wch: 20
            },
            {
                wch: 15
            },
            {
                wch: 15
            }
        ];
        const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "Rekap Anggaran");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, "REKAP_KEGIATAN_TAHUNAN.xlsx");
    };
    const downloadPDF = async ()=>{
        if (!lpjRef.current) return;
        setIsExporting(true);
        try {
            const element = lpjRef.current;
            // TEKNIK CLONE: Pindahkan ke luar modal untuk capture utuh
            const clone = element.cloneNode(true);
            document.body.appendChild(clone);
            // Reset styles pada clone agar merender seluruh konten
            clone.style.position = 'absolute';
            clone.style.left = '-9999px';
            clone.style.top = '0';
            clone.style.width = '800px';
            clone.style.height = 'auto';
            clone.style.maxHeight = 'none';
            clone.style.overflow = 'visible';
            const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(clone, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff",
                width: 800,
                height: clone.scrollHeight // Paksa tangkap seluruh tinggi konten
            });
            document.body.removeChild(clone);
            const imgData = canvas.toDataURL("image/jpeg", 1.0);
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgHeight = canvas.height * pdfWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, imgHeight);
            heightLeft -= pageHeight;
            while(heightLeft > 0){
                position = position - pageHeight;
                pdf.addPage();
                pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save(`LPJ_RESMI_${activeEvent?.name.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error(error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Gagal membuat PDF. Gunakan Chrome untuk hasil terbaik.", "error");
        } finally{
            setIsExporting(false);
        }
    };
    const handleSubmit = async (overrideType)=>{
        const type = overrideType || modalType;
        setIsSubmitting(true);
        const data = new FormData();
        Object.entries(formData).forEach(([key, val])=>{
            if (val !== null && val !== undefined) data.set(key, String(val));
        });
        let result;
        try {
            if (type === 'general_in' || type === 'general_out') {
                data.set("type", type === 'general_in' ? "PEMASUKAN" : "PENGELUARAN");
                data.set("bukuKasId", String(selectedLedgerId));
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$082d1e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createGeneralTrx"])(data);
            } else if (type === 'new_ledger') {
                data.set("nama", formData.ledgerName);
                data.set("deskripsi", formData.ledgerDesc);
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$dfaa6b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBukuKas"])(data);
            } else if (type === 'new_event') {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$30a22f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createEventBudget"])(data);
            } else if (type === 'event_trx') {
                data.set("amount", String(calculatedTotal));
                data.set("prokerId", String(formData.prokerId));
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$faa46e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createEventTrx"])(data);
            } else if (type === 'close_budget') {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$c71bfd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["closeEventBudget"])(Number(formData.prokerId), Number(formData.targetBukuId));
            }
            if (result?.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Data keuangan berhasil diperbarui.", "success");
                setIsModalOpen(false);
                router.refresh();
                setFormData((prev)=>({
                        ...prev,
                        title: "",
                        amount: "",
                        fotoBarang: "",
                        fotoNota: "",
                        hargaSatuan: "",
                        kuantitas: 1
                    }));
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Gagal: " + (result?.message || "Kesalahan tidak diketahui"), "error");
            }
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Terjadi kesalahan sistem.", "error");
        } finally{
            setIsSubmitting(false);
        }
    };
    const toggleProker = (id)=>{
        if (expandedProkerId === id) setExpandedProkerId(null);
        else {
            setExpandedProkerId(id);
            setFormData({
                ...formData,
                prokerId: id,
                amount: "",
                title: "",
                fotoBarang: "",
                fotoNota: "",
                hargaSatuan: "",
                kuantitas: 1
            });
        }
    };
    const handleOpenGeneralModal = (type)=>{
        setModalType(type === 'in' ? 'general_in' : 'general_out');
        setIsModalOpen(true);
    };
    const handleImageUpload = async (e, field)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        // Convert to base64 for simplicity in this demo/local env
        const reader = new FileReader();
        reader.onloadend = ()=>{
            const base64String = reader.result;
            setFormData((prev)=>({
                    ...prev,
                    [field === 'barang' ? 'fotoBarang' : 'fotoNota']: base64String
                }));
        };
        reader.readAsDataURL(file);
    };
    const isAllocationValid = ()=>{
        if (modalType === 'new_event') {
            if (formData.isSubsidi && !formData.fromBukuId) return false;
            if (!formData.prokerId && !formData.title) return false;
        }
        return true;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-33a378177a02bd0b" + " " + "h-[calc(100vh-140px)] flex flex-col gap-6 font-sans relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: lightboxImg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setLightboxImg(null),
                    className: "fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-10 cursor-zoom-out no-print",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            initial: {
                                scale: 0.9
                            },
                            animate: {
                                scale: 1
                            },
                            src: lightboxImg,
                            className: "max-w-full max-h-full rounded-xl shadow-2xl"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                            lineNumber: 330,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "jsx-33a378177a02bd0b" + " " + "absolute top-10 right-10 p-4 bg-white/10 text-white rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 331,
                                columnNumber: 104
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                            lineNumber: 331,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                    lineNumber: 329,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-33a378177a02bd0b" + " " + "flex flex-col md:flex-row justify-between items-end gap-4 shrink-0 px-4 md:px-0 no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-33a378177a02bd0b" + " " + "tour-finance-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-33a378177a02bd0b" + " " + "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-33a378177a02bd0b" + " " + "text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3",
                                        children: [
                                            "Financial System ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-33a378177a02bd0b" + " " + "text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full",
                                                children: "💰"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 340,
                                                columnNumber: 139
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 340,
                                        columnNumber: 17
                                    }, this),
                                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        steps: financeTourSteps
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 341,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-33a378177a02bd0b" + " " + "text-slate-500 dark:text-slate-400 text-sm font-medium mt-1",
                                children: "Pembukuan Multi-Ledger & Audit Realisasi."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                        lineNumber: 338,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-33a378177a02bd0b" + " " + "flex bg-slate-100 dark:bg-[#1e293b] p-1 rounded-xl border border-slate-200 dark:border-white/10 tour-tab-switcher",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabChange('general'),
                                className: "jsx-33a378177a02bd0b" + " " + `px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'general' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm' : 'text-slate-500'}`,
                                children: "Dompet Kas"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabChange('events'),
                                className: "jsx-33a378177a02bd0b" + " " + `px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'events' ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-white shadow-sm' : 'text-slate-500'}`,
                                children: "Anggaran Kegiatan"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                        lineNumber: 345,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this),
            activeTab === 'general' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-33a378177a02bd0b" + " " + "flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-33a378177a02bd0b" + " " + "w-full lg:w-72 flex flex-col gap-4 shrink-0 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-5 shadow-sm overflow-hidden tour-ledger-sidebar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-33a378177a02bd0b" + " " + "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1",
                                        children: "Daftar Dompet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 355,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33a378177a02bd0b" + " " + "flex gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: exportLedgerToExcel,
                                                title: "Export current ledger",
                                                className: "jsx-33a378177a02bd0b" + " " + "p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 189
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 357,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setModalType('new_ledger');
                                                    setIsModalOpen(true);
                                                },
                                                className: "jsx-33a378177a02bd0b" + " " + "p-1.5 bg-blue-600 text-white rounded-lg hover:scale-105 transition-all shadow-lg shadow-blue-500/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 215
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 358,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 356,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 354,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-33a378177a02bd0b" + " " + "flex-1 overflow-y-auto space-y-2 custom-scrollbar",
                                children: isDataLoading ? [
                                    1,
                                    2,
                                    3
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33a378177a02bd0b" + " " + "p-4 rounded-xl border border-transparent bg-slate-50/50 dark:bg-white/5 animate-pulse flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-33a378177a02bd0b" + " " + "w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 365,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-33a378177a02bd0b" + " " + "flex-1 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "h-2 w-24 bg-slate-100 dark:bg-slate-800/50 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 366,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 364,
                                        columnNumber: 29
                                    }, this)) : ledgers.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setSelectedLedgerId(l.id),
                                        className: "jsx-33a378177a02bd0b" + " " + `p-4 rounded-xl cursor-pointer transition-all border relative ${selectedLedgerId === l.id ? 'bg-blue-50/50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30' : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-white/5'}`,
                                        children: [
                                            selectedLedgerId === l.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layoutId: "ledgerActive",
                                                className: "absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 375,
                                                columnNumber: 63
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-33a378177a02bd0b" + " " + "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + `p-2 rounded-lg ${selectedLedgerId === l.id ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-400'}`,
                                                        children: l.icon === 'Heart' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 63
                                                        }, this) : l.icon === 'Users' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 105
                                                        }, this) : l.icon === 'BookOpen' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 150
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 174
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "jsx-33a378177a02bd0b" + " " + `text-xs font-bold truncate ${selectedLedgerId === l.id ? 'text-blue-900 dark:text-blue-100' : 'text-slate-700 dark:text-slate-300'}`,
                                                                children: l.nama
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-medium text-slate-400 truncate",
                                                                children: l.deskripsi
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 376,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, l.id, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 374,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 361,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                        lineNumber: 353,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-33a378177a02bd0b" + " " + "flex-1 flex flex-col gap-6 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-33a378177a02bd0b" + " " + "grid grid-cols-1 md:grid-cols-3 gap-4 tour-stats-cards",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33a378177a02bd0b" + " " + "bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1",
                                                children: [
                                                    "Saldo ",
                                                    currentLedger?.nama
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 394,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-33a378177a02bd0b" + " " + "text-2xl font-bold text-slate-900 dark:text-white",
                                                children: formatIDR(saldoLedger)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 395,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 393,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33a378177a02bd0b" + " " + "bg-emerald-50/50 dark:bg-emerald-500/5 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-500/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] uppercase font-bold text-emerald-600 tracking-widest mb-1",
                                                children: "Total Masuk"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 398,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-33a378177a02bd0b" + " " + "text-xl font-bold text-emerald-600",
                                                children: formatIDR(ledgerTransactions.filter((t)=>t.tipe === 'PEMASUKAN').reduce((a, c)=>a + c.nominal, 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 399,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 397,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33a378177a02bd0b" + " " + "bg-rose-50/50 dark:bg-rose-500/5 p-5 rounded-2xl border border-rose-100 dark:border-rose-500/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] uppercase font-bold text-rose-600 tracking-widest mb-1",
                                                children: "Total Pengeluaran"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 402,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-33a378177a02bd0b" + " " + "text-xl font-bold text-rose-600",
                                                children: formatIDR(ledgerTransactions.filter((t)=>t.tipe === 'PENGELUARAN').reduce((a, c)=>a + c.nominal, 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 403,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 401,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 392,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-33a378177a02bd0b" + " " + "flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33a378177a02bd0b" + " " + "px-6 py-4 flex justify-between items-center border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-transparent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-33a378177a02bd0b" + " " + "text-sm font-bold text-slate-800 dark:text-white",
                                                children: "Riwayat Transaksi"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 409,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-33a378177a02bd0b" + " " + "flex gap-2 tour-general-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleOpenGeneralModal('in'),
                                                        className: "jsx-33a378177a02bd0b" + " " + "px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold flex items-center gap-2 transition-all active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 239
                                                            }, this),
                                                            " Masuk"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleOpenGeneralModal('out'),
                                                        className: "jsx-33a378177a02bd0b" + " " + "px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-[11px] font-bold flex items-center gap-2 transition-all active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownCircle$3e$__["ArrowDownCircle"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 234
                                                            }, this),
                                                            " Keluar"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 410,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 408,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33a378177a02bd0b" + " " + "flex-1 overflow-auto custom-scrollbar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "jsx-33a378177a02bd0b" + " " + "w-full text-left border-collapse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "jsx-33a378177a02bd0b" + " " + "bg-slate-50 dark:bg-white/5 sticky top-0 z-10 border-b border-slate-100 dark:border-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-33a378177a02bd0b",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-6",
                                                                children: "Tanggal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest",
                                                                children: "Keterangan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 137
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right pr-6",
                                                                children: "Nominal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 235
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "jsx-33a378177a02bd0b" + " " + "divide-y divide-slate-50 dark:divide-white/5",
                                                    children: isDataLoading ? [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5
                                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "animate-pulse",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "p-4 pl-6",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "h-3 w-12 bg-slate-100 dark:bg-slate-800 rounded"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 424,
                                                                        columnNumber: 70
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "p-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "h-4 w-40 bg-slate-200 dark:bg-slate-800 rounded"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 425,
                                                                                columnNumber: 92
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "h-2 w-20 bg-slate-100 dark:bg-slate-800/50 rounded"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 425,
                                                                                columnNumber: 159
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 425,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "p-4 pr-6",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded ml-auto"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 426,
                                                                        columnNumber: 70
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 426,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 41
                                                        }, this)) : ledgerTransactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-33a378177a02bd0b",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 3,
                                                            className: "jsx-33a378177a02bd0b" + " " + "p-12 text-center text-slate-400 text-xs font-medium",
                                                            children: "Belum ada riwayat transaksi."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 77
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 73
                                                    }, this) : ledgerTransactions.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "hover:bg-slate-50/80 dark:hover:bg-white/5 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "p-4 text-[11px] font-medium text-slate-500 pl-6",
                                                                    children: new Date(t.tanggal).toLocaleDateString('id-ID', {
                                                                        day: '2-digit',
                                                                        month: 'short'
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 432,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "p-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "text-sm font-bold text-slate-800 dark:text-slate-200",
                                                                            children: t.judul
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 433,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-medium text-slate-400 uppercase tracking-tighter",
                                                                            children: t.kategori
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 433,
                                                                            columnNumber: 146
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + `p-4 text-right font-bold pr-6 ${t.tipe === 'PEMASUKAN' ? 'text-emerald-600' : 'text-rose-600'}`,
                                                                    children: [
                                                                        t.tipe === 'PEMASUKAN' ? '+' : '-',
                                                                        " ",
                                                                        formatIDR(t.nominal)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, t.id, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 41
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 416,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 415,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 407,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                        lineNumber: 391,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                lineNumber: 352,
                columnNumber: 9
            }, this),
            activeTab === 'events' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-33a378177a02bd0b" + " " + "flex-1 overflow-y-auto p-4 md:p-0 custom-scrollbar no-print",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-33a378177a02bd0b" + " " + "bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col h-full overflow-hidden shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-33a378177a02bd0b" + " " + "p-6 border-b border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-33a378177a02bd0b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-33a378177a02bd0b" + " " + "text-lg font-bold text-slate-900 dark:text-white",
                                            children: "Anggaran Program Kerja"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 451,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-33a378177a02bd0b" + " " + "text-xs font-medium text-slate-500",
                                            children: "Monitoring realisasi dana sekolah & subsidi OSIS."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 452,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 450,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-33a378177a02bd0b" + " " + "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: exportAllEventsToExcel,
                                            className: "jsx-33a378177a02bd0b" + " " + "px-4 py-2.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-emerald-100 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 236
                                                }, this),
                                                " Download Rekap Excel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 455,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setModalType('new_event');
                                                setFormData({
                                                    ...formData,
                                                    prokerId: "",
                                                    title: ""
                                                });
                                                setIsModalOpen(true);
                                            },
                                            className: "jsx-33a378177a02bd0b" + " " + "px-5 py-2.5 bg-purple-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-purple-500/20 transition-all active:scale-95 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 321
                                                }, this),
                                                " Alokasi Anggaran"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 456,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 454,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                            lineNumber: 449,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-33a378177a02bd0b" + " " + "flex-1 overflow-y-auto p-6 space-y-4 tour-event-list custom-scrollbar",
                            children: events.map((ev)=>{
                                const isExpanded = expandedProkerId === ev.id;
                                const sisa = ev.budget - ev.used;
                                const percent = ev.budget > 0 ? Math.round(ev.used / ev.budget * 100) : 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-33a378177a02bd0b" + " " + `rounded-2xl border transition-all overflow-hidden ${isExpanded ? 'border-purple-500 ring-4 ring-purple-500/5 shadow-xl bg-slate-50/30' : 'border-slate-200 dark:border-white/5 hover:border-purple-300'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>toggleProker(ev.id),
                                            className: "jsx-33a378177a02bd0b" + " " + `p-5 flex items-center justify-between cursor-pointer bg-white dark:bg-white/5 ${isExpanded ? 'border-b border-slate-200' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-33a378177a02bd0b" + " " + "flex items-center gap-4 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "relative w-12 h-12 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-white/10 bg-slate-100 flex items-center justify-center",
                                                            children: ev.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: ev.image,
                                                                alt: ev.name,
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 217
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__["ImageOff"], {
                                                                size: 20,
                                                                className: "text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 295
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "text-base font-bold text-slate-900 dark:text-white truncate",
                                                                    children: ev.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "flex items-center gap-3 mt-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-purple-600 uppercase tracking-tighter",
                                                                            children: [
                                                                                "Budget: ",
                                                                                formatIDR(ev.budget)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 471,
                                                                            columnNumber: 93
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "w-1 h-1 rounded-full bg-slate-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 471,
                                                                            columnNumber: 213
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + `text-[10px] font-bold uppercase tracking-tighter ${sisa <= 0 ? 'text-rose-600' : 'text-emerald-600'}`,
                                                                            children: [
                                                                                "Sisa: ",
                                                                                formatIDR(sisa)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 471,
                                                                            columnNumber: 266
                                                                        }, this),
                                                                        sisa <= 0 && ev.status !== 'DONE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                            animate: {
                                                                                opacity: [
                                                                                    1,
                                                                                    0.5,
                                                                                    1
                                                                                ]
                                                                            },
                                                                            transition: {
                                                                                repeat: Infinity,
                                                                                duration: 1.5
                                                                            },
                                                                            className: "text-[9px] font-black text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200",
                                                                            children: "OVER BUDGET!"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 471,
                                                                            columnNumber: 455
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-33a378177a02bd0b" + " " + "flex items-center gap-4",
                                                    children: [
                                                        isExpanded && ev.status !== 'DONE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                setModalType('new_event');
                                                                setFormData({
                                                                    ...formData,
                                                                    prokerId: ev.id,
                                                                    isSubsidi: true
                                                                });
                                                                setIsModalOpen(true);
                                                            },
                                                            className: "jsx-33a378177a02bd0b" + " " + "px-3 py-1.5 bg-amber-500 text-white rounded-lg text-[9px] font-black shadow-sm flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 475,
                                                                    columnNumber: 360
                                                                }, this),
                                                                " TAMBAH DANA"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 80
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "hidden md:block w-32",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        width: 0
                                                                    },
                                                                    animate: {
                                                                        width: `${Math.min(percent, 100)}%`
                                                                    },
                                                                    className: `h-full ${percent > 100 ? 'bg-rose-500' : 'bg-purple-500'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 166
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 476,
                                                                columnNumber: 79
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 20,
                                                            className: `text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 466,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    height: 'auto',
                                                    opacity: 1
                                                },
                                                exit: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                className: "overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-33a378177a02bd0b" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "lg:col-span-4 p-6 border-r border-slate-200 bg-white dark:bg-[#0f172a]/50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "text-xs font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-5 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                                            size: 16,
                                                                            className: "text-purple-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 484,
                                                                            columnNumber: 169
                                                                        }, this),
                                                                        " ",
                                                                        ev.status === 'DONE' ? 'Realisasi (Read Only)' : 'Catat Realisasi Baru'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                    onSubmit: (e)=>{
                                                                        e.preventDefault();
                                                                        handleSubmit('event_trx');
                                                                    },
                                                                    className: "jsx-33a378177a02bd0b",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                                        disabled: ev.status === 'DONE',
                                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "space-y-1.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase ml-1",
                                                                                        children: "Nama Barang / Keperluan"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 487,
                                                                                        columnNumber: 86
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        required: true,
                                                                                        type: "text",
                                                                                        value: formData.title,
                                                                                        onChange: (e)=>setFormData({
                                                                                                ...formData,
                                                                                                title: e.target.value
                                                                                            }),
                                                                                        placeholder: "Contoh: Snack Rapat",
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold dark:text-white focus:border-purple-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 487,
                                                                                        columnNumber: 188
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 487,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "grid grid-cols-2 gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-1.5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase ml-1",
                                                                                                children: "Jumlah"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 488,
                                                                                                columnNumber: 126
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "number",
                                                                                                value: formData.kuantitas,
                                                                                                onChange: (e)=>setFormData({
                                                                                                        ...formData,
                                                                                                        kuantitas: e.target.value
                                                                                                    }),
                                                                                                placeholder: "1",
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold dark:text-white"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 488,
                                                                                                columnNumber: 211
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 488,
                                                                                        columnNumber: 97
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-1.5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase ml-1",
                                                                                                children: "Satuan"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 488,
                                                                                                columnNumber: 546
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                value: formData.satuan,
                                                                                                onChange: (e)=>setFormData({
                                                                                                        ...formData,
                                                                                                        satuan: e.target.value
                                                                                                    }),
                                                                                                placeholder: "pcs/kg/paket",
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold dark:text-white"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 488,
                                                                                                columnNumber: 631
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 488,
                                                                                        columnNumber: 517
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 488,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "space-y-1.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase ml-1",
                                                                                        children: "Harga Satuan (Rp)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 489,
                                                                                        columnNumber: 86
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        required: true,
                                                                                        type: "number",
                                                                                        value: formData.hargaSatuan,
                                                                                        onChange: (e)=>setFormData({
                                                                                                ...formData,
                                                                                                hargaSatuan: e.target.value
                                                                                            }),
                                                                                        placeholder: "0",
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 outline-none text-xs font-bold dark:text-white focus:border-purple-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 489,
                                                                                        columnNumber: 182
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 489,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "p-4 bg-purple-50 dark:bg-purple-500/10 rounded-2xl border border-purple-100 dark:border-purple-500/20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "flex justify-between items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-purple-600 uppercase",
                                                                                            children: "Total Pembayaran"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                            lineNumber: 490,
                                                                                            columnNumber: 227
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-33a378177a02bd0b" + " " + `text-sm font-bold ${calculatedTotal > sisaAnggaran ? 'text-rose-600' : 'text-slate-900 dark:text-white'}`,
                                                                                            children: formatIDR(calculatedTotal)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                            lineNumber: 490,
                                                                                            columnNumber: 316
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 490,
                                                                                    columnNumber: 176
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 490,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "grid grid-cols-2 gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-1.5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase ml-1",
                                                                                                children: "Foto Fisik"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 491,
                                                                                                columnNumber: 126
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                onClick: ()=>ev.status !== 'DONE' && fileInputBarang.current?.click(),
                                                                                                className: "jsx-33a378177a02bd0b" + " " + `h-20 rounded-xl border-2 border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center transition-all overflow-hidden ${ev.status !== 'DONE' ? 'cursor-pointer hover:bg-white' : ''}`,
                                                                                                children: formData.fotoBarang ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                    src: formData.fotoBarang,
                                                                                                    className: "jsx-33a378177a02bd0b" + " " + "w-full h-full object-cover"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                    lineNumber: 491,
                                                                                                    columnNumber: 534
                                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                                                    size: 20,
                                                                                                    className: "text-slate-300"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                    lineNumber: 491,
                                                                                                    columnNumber: 609
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 491,
                                                                                                columnNumber: 215
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "file",
                                                                                                ref: fileInputBarang,
                                                                                                hidden: true,
                                                                                                accept: "image/*",
                                                                                                onChange: (e)=>handleImageUpload(e, 'barang'),
                                                                                                className: "jsx-33a378177a02bd0b"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 491,
                                                                                                columnNumber: 662
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 491,
                                                                                        columnNumber: 97
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-1.5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase ml-1",
                                                                                                children: "Foto Nota"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 491,
                                                                                                columnNumber: 811
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                onClick: ()=>ev.status !== 'DONE' && fileInputNota.current?.click(),
                                                                                                className: "jsx-33a378177a02bd0b" + " " + `h-20 rounded-xl border-2 border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center transition-all overflow-hidden ${ev.status !== 'DONE' ? 'cursor-pointer hover:bg-white' : ''}`,
                                                                                                children: formData.fotoNota ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                    src: formData.fotoNota,
                                                                                                    className: "jsx-33a378177a02bd0b" + " " + "w-full h-full object-cover"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                    lineNumber: 491,
                                                                                                    columnNumber: 1214
                                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                                                                    size: 20,
                                                                                                    className: "text-slate-300"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                    lineNumber: 491,
                                                                                                    columnNumber: 1287
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 491,
                                                                                                columnNumber: 899
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "file",
                                                                                                ref: fileInputNota,
                                                                                                hidden: true,
                                                                                                accept: "image/*",
                                                                                                onChange: (e)=>handleImageUpload(e, 'nota'),
                                                                                                className: "jsx-33a378177a02bd0b"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 491,
                                                                                                columnNumber: 1341
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 491,
                                                                                        columnNumber: 782
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 491,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "submit",
                                                                                disabled: isSubmitting || ev.status === 'DONE' || calculatedTotal <= 0,
                                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-[11px] shadow-lg disabled:bg-slate-400",
                                                                                children: "KONFIRMASI PEMBAYARAN"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 492,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 486,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "mt-4 flex flex-col gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                setModalType('lpj_preview');
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    prokerId: ev.id
                                                                                });
                                                                                setIsModalOpen(true);
                                                                            },
                                                                            className: "jsx-33a378177a02bd0b" + " " + "w-full py-2.5 bg-slate-100 text-slate-700 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 495,
                                                                                    columnNumber: 375
                                                                                }, this),
                                                                                " EXPORT LAPORAN (PDF)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 495,
                                                                            columnNumber: 91
                                                                        }, this),
                                                                        ev.status !== 'DONE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                setModalType('close_budget');
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    prokerId: ev.id
                                                                                });
                                                                                setIsModalOpen(true);
                                                                            },
                                                                            className: "jsx-33a378177a02bd0b" + " " + "w-full py-2.5 text-[10px] font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100",
                                                                            children: "SELESAIKAN & TUTUP ANGGARAN"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 495,
                                                                            columnNumber: 451
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "lg:col-span-8 bg-white dark:bg-white/5 flex flex-col max-h-[500px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 497,
                                                                                    columnNumber: 328
                                                                                }, this),
                                                                                " Audit Trail Realisasi"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 225
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "flex items-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>exportEventToExcel(ev),
                                                                                    title: "Export to Excel",
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                                                        size: 14
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 497,
                                                                                        columnNumber: 568
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 497,
                                                                                    columnNumber: 416
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-400",
                                                                                    children: [
                                                                                        ev.transactions.length,
                                                                                        " Nota"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 497,
                                                                                    columnNumber: 605
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 375
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 129
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-33a378177a02bd0b" + " " + "flex-1 overflow-auto custom-scrollbar-slim",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "w-full text-left border-collapse",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "bg-slate-50 sticky top-0 z-10 border-b border-slate-100",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                    className: "jsx-33a378177a02bd0b",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            className: "jsx-33a378177a02bd0b" + " " + "p-3 text-[9px] font-bold text-slate-400 uppercase pl-6",
                                                                                            children: "Tanggal"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                            lineNumber: 497,
                                                                                            columnNumber: 899
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            className: "jsx-33a378177a02bd0b" + " " + "p-3 text-[9px] font-bold text-slate-400 uppercase",
                                                                                            children: "Keterangan"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                            lineNumber: 497,
                                                                                            columnNumber: 982
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            className: "jsx-33a378177a02bd0b" + " " + "p-3 text-[9px] font-bold text-slate-400 uppercase text-center",
                                                                                            children: "Jumlah"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                            lineNumber: 497,
                                                                                            columnNumber: 1063
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            className: "jsx-33a378177a02bd0b" + " " + "p-3 text-[9px] font-bold text-slate-400 uppercase text-center",
                                                                                            children: "Bukti"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                            lineNumber: 497,
                                                                                            columnNumber: 1152
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                            className: "jsx-33a378177a02bd0b" + " " + "p-3 text-[9px] font-bold text-slate-400 uppercase text-right pr-6",
                                                                                            children: "Nominal"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                            lineNumber: 497,
                                                                                            columnNumber: 1240
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 497,
                                                                                    columnNumber: 895
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 497,
                                                                                columnNumber: 820
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "divide-y divide-slate-50",
                                                                                children: ev.transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                    className: "jsx-33a378177a02bd0b",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        colSpan: 5,
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "p-12 text-center text-slate-300 text-[10px] font-medium italic",
                                                                                        children: "Belum ada pengeluaran."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 497,
                                                                                        columnNumber: 1429
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 497,
                                                                                    columnNumber: 1425
                                                                                }, this) : ev.transactions.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "hover:bg-slate-50 transition-colors",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "p-3 text-[10px] font-medium text-slate-500 pl-6",
                                                                                                children: t.date
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 497,
                                                                                                columnNumber: 1655
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "p-3 text-[11px] font-bold text-slate-800",
                                                                                                children: t.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 497,
                                                                                                columnNumber: 1732
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "p-3 text-center",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "jsx-33a378177a02bd0b" + " " + "px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 border border-slate-200",
                                                                                                    children: [
                                                                                                        t.kuantitas,
                                                                                                        " ",
                                                                                                        t.satuan
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                    lineNumber: 497,
                                                                                                    columnNumber: 1835
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 497,
                                                                                                columnNumber: 1803
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "p-3",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "jsx-33a378177a02bd0b" + " " + "flex justify-center gap-1.5",
                                                                                                    children: [
                                                                                                        t.fotoBarang ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            onClick: ()=>setLightboxImg(t.fotoBarang),
                                                                                                            className: "jsx-33a378177a02bd0b" + " " + "w-8 h-8 rounded border border-slate-200 cursor-zoom-in hover:scale-110 transition-all",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                                src: t.fotoBarang,
                                                                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full h-full object-cover rounded"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                                lineNumber: 497,
                                                                                                                columnNumber: 2210
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                            lineNumber: 497,
                                                                                                            columnNumber: 2062
                                                                                                        }, this) : null,
                                                                                                        t.fotoNota ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            onClick: ()=>setLightboxImg(t.fotoNota),
                                                                                                            className: "jsx-33a378177a02bd0b" + " " + "w-8 h-8 rounded border border-slate-200 cursor-zoom-in hover:scale-110 transition-all",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                                src: t.fotoNota,
                                                                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full h-full object-cover rounded"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                                lineNumber: 497,
                                                                                                                columnNumber: 2457
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                            lineNumber: 497,
                                                                                                            columnNumber: 2311
                                                                                                        }, this) : null
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                    lineNumber: 497,
                                                                                                    columnNumber: 2001
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 497,
                                                                                                columnNumber: 1981
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "p-3 text-right font-bold pr-6 text-rose-500 text-[11px]",
                                                                                                children: [
                                                                                                    "-",
                                                                                                    formatIDR(t.amount)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 497,
                                                                                                columnNumber: 2553
                                                                                            }, this)
                                                                                        ]
                                                                                    }, t.id, true, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 497,
                                                                                        columnNumber: 1592
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 497,
                                                                                columnNumber: 1347
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 768
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 708
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 481,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 480,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, ev.id, true, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 465,
                                    columnNumber: 29
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                            lineNumber: 459,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                    lineNumber: 448,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                lineNumber: 447,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-33a378177a02bd0b" + " " + "fixed inset-0 z-[100] flex items-center justify-center p-4",
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
                            className: "absolute inset-0 bg-slate-900/60 backdrop-blur-sm no-print"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                            lineNumber: 513,
                            columnNumber: 17
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
                            className: `relative w-full overflow-hidden border border-white/10 shadow-2xl bg-white dark:bg-[#0f172a] rounded-3xl ${modalType === 'lpj_preview' ? 'max-w-5xl' : 'max-w-md'} no-print-override`,
                            children: [
                                modalType === 'lpj_preview' && activeEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-33a378177a02bd0b" + " " + "flex flex-col h-[90vh]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-33a378177a02bd0b" + " " + "p-6 border-b bg-slate-50 flex justify-between items-center no-print",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-33a378177a02bd0b" + " " + "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "p-2 bg-purple-600 text-white rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 131
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 74
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "text-sm font-bold uppercase tracking-tight",
                                                            children: "PDF Export Laporan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 158
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-33a378177a02bd0b" + " " + "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: isExporting,
                                                            onClick: downloadPDF,
                                                            className: "jsx-33a378177a02bd0b" + " " + "px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg disabled:opacity-50",
                                                            children: [
                                                                isExporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    size: 16,
                                                                    className: "animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 258
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 307
                                                                }, this),
                                                                " ",
                                                                isExporting ? "Memproses..." : "Download PDF"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 61
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setIsModalOpen(false),
                                                            className: "jsx-33a378177a02bd0b" + " " + "p-2 hover:bg-slate-200 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 478
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 386
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 517,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-33a378177a02bd0b" + " " + "flex-1 overflow-auto bg-slate-200 p-8 custom-scrollbar flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: lpjRef,
                                                style: {
                                                    minHeight: '1123px'
                                                },
                                                className: "jsx-33a378177a02bd0b" + " " + "bg-white p-12 w-full max-w-[800px] shadow-sm relative overflow-hidden text-black font-serif",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "border-b-[3px] border-black pb-4 mb-8 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/logos/SMK.png",
                                                                alt: "SMK",
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-24 h-24 object-contain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 126
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-center flex-1 px-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-lg font-bold uppercase tracking-wider leading-tight text-black",
                                                                        children: "PEMERINTAH DAERAH PROVINSI"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 242
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-md font-bold uppercase tracking-widest leading-tight text-black",
                                                                        children: "DINAS PENDIDIKAN"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 357
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-2xl font-black my-1 tracking-wider text-black",
                                                                        children: "SMK NEGERI INDONESIA"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 463
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-xs font-medium text-black",
                                                                        children: "Jl. Pendidikan No. 1, Kota Impian, Kodepos 12345"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 555
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 201
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/logos/OSKA.png",
                                                                alt: "OSIS",
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-24 h-24 object-contain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 659
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "text-center mb-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-lg font-black uppercase tracking-widest underline underline-offset-4 mb-2 text-black",
                                                                children: "LAPORAN PERTANGGUNGJAWABAN (LPJ) KEUANGAN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 72
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-sm font-bold uppercase text-black",
                                                                children: [
                                                                    "KEGIATAN: ",
                                                                    activeEvent.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 224
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "w-full border-collapse border border-black mb-10 text-sm text-black",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "bg-gray-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "jsx-33a378177a02bd0b",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-center w-10 text-black",
                                                                            children: "NO"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 159
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-center w-24 text-black",
                                                                            children: "TANGGAL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 244
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-left text-black",
                                                                            children: "URAIAN PENGELUARAN"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 334
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-center w-16 text-black",
                                                                            children: "VOL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 428
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-right w-28 text-black",
                                                                            children: "HARGA SATUAN"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 514
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-right w-32 text-black",
                                                                            children: "JUMLAH (Rp)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 608
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 155
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 124
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                className: "jsx-33a378177a02bd0b",
                                                                children: [
                                                                    activeEvent.transactions.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "jsx-33a378177a02bd0b",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 text-center text-black",
                                                                                    children: i + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 789
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 text-center text-black",
                                                                                    children: t.date
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 862
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 text-black",
                                                                                    children: t.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 938
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 text-center text-black",
                                                                                    children: [
                                                                                        t.kuantitas,
                                                                                        " ",
                                                                                        t.satuan
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 1003
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 text-right text-black",
                                                                                    children: formatIDR(t.amount / t.kuantitas)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 1095
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 text-right font-bold text-black",
                                                                                    children: formatIDR(t.amount)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 1195
                                                                                }, this)
                                                                            ]
                                                                        }, t.id, true, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 774
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "bg-gray-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                colSpan: 5,
                                                                                className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-right uppercase text-black",
                                                                                children: "JUMLAH TOTAL PENGELUARAN"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 525,
                                                                                columnNumber: 1329
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-right text-red-700",
                                                                                children: formatIDR(activeEvent.used)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 525,
                                                                                columnNumber: 1452
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 525,
                                                                        columnNumber: 1302
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "jsx-33a378177a02bd0b",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                colSpan: 5,
                                                                                className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-right uppercase text-black",
                                                                                children: "ALOKASI ANGGARAN AWAL"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 525,
                                                                                columnNumber: 1569
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-bold text-right text-black",
                                                                                children: formatIDR(activeEvent.budget)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 525,
                                                                                columnNumber: 1689
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 525,
                                                                        columnNumber: 1565
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "bg-gray-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                colSpan: 5,
                                                                                className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-black text-right uppercase text-black",
                                                                                children: "SISA SALDO KEPANITIAAN"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 525,
                                                                                columnNumber: 1830
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "border border-black p-2 font-black text-right text-green-700",
                                                                                children: formatIDR(activeEvent.budget - activeEvent.used)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 525,
                                                                                columnNumber: 1952
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 525,
                                                                        columnNumber: 1802
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 714
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "mt-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-md font-bold uppercase border-b-2 border-black pb-2 mb-6 tracking-widest text-black",
                                                                children: "LAMPIRAN: BUKTI FISIK & NOTA BELANJA"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 60
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "grid grid-cols-2 gap-8",
                                                                children: activeEvent.transactions.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            pageBreakInside: 'avoid'
                                                                        },
                                                                        className: "jsx-33a378177a02bd0b" + " " + "border border-black p-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "text-xs font-bold uppercase mb-3 border-b border-black pb-2 text-black",
                                                                                children: [
                                                                                    "Bukti ",
                                                                                    i + 1,
                                                                                    ": ",
                                                                                    t.title
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 526,
                                                                                columnNumber: 388
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "grid grid-cols-2 gap-4",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-center uppercase text-black",
                                                                                                children: "Fisik Barang"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 526,
                                                                                                columnNumber: 568
                                                                                            }, this),
                                                                                            t.fotoBarang ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: t.fotoBarang,
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full h-32 object-contain border border-gray-300"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 526,
                                                                                                columnNumber: 670
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full h-32 flex items-center justify-center border border-dashed border-gray-400 text-[9px] text-gray-500",
                                                                                                children: "NO FOTO"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 526,
                                                                                                columnNumber: 761
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 526,
                                                                                        columnNumber: 541
                                                                                    }, this),
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-center uppercase text-black",
                                                                                                children: "Nota / Struk"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 526,
                                                                                                columnNumber: 933
                                                                                            }, this),
                                                                                            t.fotoNota ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: t.fotoNota,
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full h-32 object-contain border border-gray-300"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 526,
                                                                                                columnNumber: 1033
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full h-32 flex items-center justify-center border border-dashed border-gray-400 text-[9px] text-gray-500",
                                                                                                children: "NO NOTA"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                                lineNumber: 526,
                                                                                                columnNumber: 1122
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                        lineNumber: 526,
                                                                                        columnNumber: 906
                                                                                    }, this),
                                                                                    " "
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 526,
                                                                                columnNumber: 500
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "text-right text-xs font-bold mt-4 pt-2 border-t border-black text-black",
                                                                                children: [
                                                                                    "Total: ",
                                                                                    formatIDR(t.amount)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 526,
                                                                                columnNumber: 1273
                                                                            }, this)
                                                                        ]
                                                                    }, t.id, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 526,
                                                                        columnNumber: 299
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 206
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            pageBreakInside: 'avoid'
                                                        },
                                                        className: "jsx-33a378177a02bd0b" + " " + "mt-20 grid grid-cols-2 text-center text-black",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "space-y-24",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-sm font-bold uppercase",
                                                                        children: [
                                                                            "Mengetahui,",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                                                className: "jsx-33a378177a02bd0b"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 527,
                                                                                columnNumber: 219
                                                                            }, this),
                                                                            "Bendahara OSIS/MPK"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 527,
                                                                        columnNumber: 165
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-sm font-bold underline",
                                                                        children: "( NAMA BENDAHARA )"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 527,
                                                                        columnNumber: 246
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 137
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "space-y-24",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-sm font-bold uppercase",
                                                                        children: [
                                                                            "Disetujui Oleh,",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                                                className: "jsx-33a378177a02bd0b"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 527,
                                                                                columnNumber: 403
                                                                            }, this),
                                                                            "Ketua Pelaksana"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 527,
                                                                        columnNumber: 345
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-sm font-bold underline",
                                                                        children: "( NAMA KETUA )"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 527,
                                                                        columnNumber: 427
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 317
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 522,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 521,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 516,
                                    columnNumber: 25
                                }, this),
                                modalType !== 'lpj_preview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        handleSubmit();
                                    },
                                    className: "jsx-33a378177a02bd0b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-33a378177a02bd0b" + " " + "p-6 border-b flex justify-between items-center bg-slate-50 dark:bg-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-33a378177a02bd0b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "text-base font-bold text-slate-800 dark:text-white uppercase tracking-tight",
                                                            children: modalType === 'general_in' ? 'Pemasukan Kas' : modalType === 'general_out' ? 'Pengeluaran Kas' : modalType === 'new_ledger' ? 'Buku Kas Baru' : modalType === 'close_budget' ? 'Tutup Anggaran' : 'Alokasi Dana Kegiatan'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 186
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-0.5",
                                                            children: modalType === 'close_budget' ? events.find((e)=>e.id === Number(formData.prokerId))?.name : currentLedger?.nama
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 502
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 181
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsModalOpen(false),
                                                    className: "jsx-33a378177a02bd0b" + " " + "p-2 hover:bg-slate-200 rounded-xl transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 832
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 708
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 533,
                                            columnNumber: 89
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-33a378177a02bd0b" + " " + "p-7 space-y-5",
                                            children: modalType === 'new_ledger' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                children: "Nama Dompet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 90
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                type: "text",
                                                                value: formData.ledgerName,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        ledgerName: e.target.value
                                                                    }),
                                                                placeholder: "Contoh: Tabungan MPK",
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 190
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 63
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                children: "Tujuan Penggunaan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 516
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.ledgerDesc,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        ledgerDesc: e.target.value
                                                                    }),
                                                                placeholder: "...",
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 622
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 489
                                                    }, this)
                                                ]
                                            }, void 0, true) : modalType === 'new_event' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                children: "Pilih Program Kerja"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 92
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: formData.prokerId,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        prokerId: e.target.value
                                                                    }),
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-purple-500 text-xs font-bold",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        className: "jsx-33a378177a02bd0b",
                                                                        children: "-- Buat Kegiatan Baru (Manual) --"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 535,
                                                                        columnNumber: 434
                                                                    }, this),
                                                                    prokers.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: p.id,
                                                                            className: "jsx-33a378177a02bd0b",
                                                                            children: p.nama
                                                                        }, p.id, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 535,
                                                                            columnNumber: 512
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 200
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 65
                                                    }, this),
                                                    !formData.prokerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                children: "Nama Kegiatan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 630
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                type: "text",
                                                                value: formData.title,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        title: e.target.value
                                                                    }),
                                                                placeholder: "Contoh: LDKS 2026",
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-purple-500 text-xs font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 732
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 603
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2 p-4 bg-amber-50 rounded-xl border border-amber-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + `p-2 rounded-lg ${formData.isSubsidi ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-400'}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                                    size: 16
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 535,
                                                                                    columnNumber: 1308
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 535,
                                                                                columnNumber: 1192
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-33a378177a02bd0b" + " " + "flex-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-900 uppercase",
                                                                                    children: "Tarik dari Saldo OSIS?"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                    lineNumber: 535,
                                                                                    columnNumber: 1358
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                                lineNumber: 535,
                                                                                columnNumber: 1334
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 535,
                                                                        columnNumber: 1151
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setFormData({
                                                                                ...formData,
                                                                                isSubsidi: !formData.isSubsidi
                                                                            }),
                                                                        className: "jsx-33a378177a02bd0b" + " " + `w-10 h-5 rounded-full transition-all relative ${formData.isSubsidi ? 'bg-amber-500' : 'bg-slate-300'}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-33a378177a02bd0b" + " " + `absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${formData.isSubsidi ? 'left-5.5' : 'left-0.5'}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 535,
                                                                            columnNumber: 1671
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 535,
                                                                        columnNumber: 1458
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 1100
                                                            }, this),
                                                            formData.isSubsidi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                required: true,
                                                                value: formData.fromBukuId,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        fromBukuId: e.target.value
                                                                    }),
                                                                className: "jsx-33a378177a02bd0b" + " " + "mt-3 w-full px-3 py-2 rounded-lg bg-white border border-amber-200 outline-none text-[10px] font-bold",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        className: "jsx-33a378177a02bd0b",
                                                                        children: "-- Pilih Sumber Saldo --"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 535,
                                                                        columnNumber: 2070
                                                                    }, this),
                                                                    ledgers.map((l)=>{
                                                                        const bal = l.transaksi.reduce((acc, curr)=>curr.tipe === 'PEMASUKAN' ? acc + curr.nominal : acc - curr.nominal, 0);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: l.id,
                                                                            className: "jsx-33a378177a02bd0b",
                                                                            children: [
                                                                                l.nama,
                                                                                " (Sisa ",
                                                                                formatIDR(bal),
                                                                                ")"
                                                                            ]
                                                                        }, l.id, true, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 535,
                                                                            columnNumber: 2275
                                                                        }, this);
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 1841
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 1022
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                children: "Jumlah Anggaran (Rp)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 2398
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                type: "number",
                                                                value: formData.amount,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        amount: e.target.value
                                                                    }),
                                                                placeholder: "0",
                                                                className: "jsx-33a378177a02bd0b" + " " + `w-full px-4 py-3 rounded-xl bg-slate-50 border outline-none text-xs font-bold ${formData.isSubsidi && formData.fromBukuId && Number(formData.amount) > (ledgers.find((lx)=>lx.id === Number(formData.fromBukuId))?.transaksi.reduce((acc, curr)=>curr.tipe === 'PEMASUKAN' ? acc + curr.nominal : acc - curr.nominal, 0) || 0) ? 'border-rose-500 text-rose-600' : 'border-slate-200'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 2507
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 2371
                                                    }, this)
                                                ]
                                            }, void 0, true) : modalType === 'close_budget' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-33a378177a02bd0b" + " " + "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                                className: "mx-auto mb-3 text-emerald-600",
                                                                size: 40
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 178
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-base font-bold text-emerald-900",
                                                                children: [
                                                                    "Sisa Anggaran: ",
                                                                    formatIDR(sisaAnggaran)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 245
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[11px] font-medium text-emerald-700 mt-1",
                                                                children: "Dana sisa akan dikembalikan ke dompet kas."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 343
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 93
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                children: "Kembalikan Saldo Ke:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 483
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                required: true,
                                                                value: formData.targetBukuId,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        targetBukuId: e.target.value
                                                                    }),
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-emerald-500 text-xs font-bold",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        className: "jsx-33a378177a02bd0b",
                                                                        children: "-- Pilih Dompet --"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 536,
                                                                        columnNumber: 844
                                                                    }, this),
                                                                    ledgers.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: l.id,
                                                                            className: "jsx-33a378177a02bd0b",
                                                                            children: l.nama
                                                                        }, l.id, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 536,
                                                                            columnNumber: 907
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 592
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 456
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 536,
                                                columnNumber: 66
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                children: "Judul Transaksi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 64
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                autoFocus: true,
                                                                type: "text",
                                                                value: formData.title,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        title: e.target.value
                                                                    }),
                                                                placeholder: "...",
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 168
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                children: "Nominal (Rp)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 477
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                type: "number",
                                                                value: formData.amount,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        amount: e.target.value
                                                                    }),
                                                                placeholder: "0",
                                                                className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 578
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 450
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33a378177a02bd0b" + " " + "grid grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                        children: "Tanggal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 537,
                                                                        columnNumber: 921
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        type: "date",
                                                                        value: formData.date,
                                                                        onChange: (e)=>setFormData({
                                                                                ...formData,
                                                                                date: e.target.value
                                                                            }),
                                                                        className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none text-[11px] font-bold"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 537,
                                                                        columnNumber: 1017
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 894
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-33a378177a02bd0b" + " " + "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-33a378177a02bd0b" + " " + "text-[10px] font-bold text-slate-500 uppercase tracking-wider",
                                                                        children: "Kategori"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 537,
                                                                        columnNumber: 1278
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        type: "text",
                                                                        value: formData.category,
                                                                        onChange: (e)=>setFormData({
                                                                                ...formData,
                                                                                category: e.target.value
                                                                            }),
                                                                        className: "jsx-33a378177a02bd0b" + " " + "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none text-[11px] font-bold"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                        lineNumber: 537,
                                                                        columnNumber: 1375
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 1251
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 854
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 533,
                                            columnNumber: 861
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-33a378177a02bd0b" + " " + "p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsModalOpen(false),
                                                    disabled: isSubmitting,
                                                    className: "jsx-33a378177a02bd0b" + " " + "px-5 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-200 transition-colors",
                                                    children: "Batal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: isSubmitting || !isAllocationValid(),
                                                    className: "jsx-33a378177a02bd0b" + " " + "px-7 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg active:scale-95 disabled:opacity-50",
                                                    children: isSubmitting ? "MEMPROSES..." : "KONFIRMASI"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 316
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 538,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 533,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                            lineNumber: 514,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                    lineNumber: 512,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "33a378177a02bd0b",
                children: ".custom-scrollbar::-webkit-scrollbar{width:2px!important;height:2px!important}.custom-scrollbar::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px}.dark .custom-scrollbar::-webkit-scrollbar-thumb{background:#334155}.custom-scrollbar::-webkit-scrollbar-track{background:0 0}.custom-scrollbar-slim::-webkit-scrollbar{width:2px!important;height:2px!important}.custom-scrollbar-slim::-webkit-scrollbar-thumb{background:#e2e8f0;border-radius:10px}.dark .custom-scrollbar-slim::-webkit-scrollbar-thumb{background:#1e293b}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
_s(KeuanganClient, "bZP9oJvyetYH9afB+D7n8rrvdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = KeuanganClient;
var _c;
__turbopack_context__.k.register(_c, "KeuanganClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f023ab5e._.js.map