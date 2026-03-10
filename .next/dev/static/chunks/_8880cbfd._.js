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
"[project]/lib/data:f9eb62 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEuIEFTUElSQVNJIFNJU1dBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcmF3TmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJhd0tlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBlc2FuID0gZm9ybURhdGEuZ2V0KFwicGVzYW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzQW5vbmltID0gZm9ybURhdGEuZ2V0KFwiaXNBbm9uaW1cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBpZiAoIXBlc2FuIHx8IHBlc2FuLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGVzYW4gdGlkYWsgYm9sZWgga29zb25nIVwiIH07XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoeyBkYXRhOiB7IHBlbmdpcmltLCBrZWxhcywgaXNpOiBwZXNhbiwga2F0ZWdvcmk6IFwiVW11bVwiLCBzdGF0dXM6IFwiUEVORElOR1wiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzcGlyYXNpIGJlcmhhc2lsIGRpa2lyaW0hIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naXJpbSBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGx5QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGJhbGFzYW4gPSBmb3JtRGF0YS5nZXQoXCJiYWxhc2FuXCIpIGFzIHN0cmluZztcclxuICBpZiAoIWJhbGFzYW4gfHwgYmFsYXNhbi50cmltKCkgPT09IFwiXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkJhbGFzYW4gdGlkYWsgYm9sZWgga29zb25nLlwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyBiYWxhc2FuLCBiYWxhc2FuQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogXCJTRUxFU0FJXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYWxhc2FuIHRlcmtpcmltIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQkVSSVRBIChDTVMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gQmVyaXRhU2NoZW1hLnNhZmVQYXJzZSh7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSwga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSB8fCBcIlVtdW1cIiwgZ2FtYmFyOiBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgfSk7XHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICBjb25zdCB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xyXG4gIGNvbnN0IHNsdWcgPSBgJHtzbHVnaWZ5KGp1ZHVsKX0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIGhhYmlzLlwiIH07XHJcblxyXG4gIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9IH0pO1xyXG4gIGlmICghYWRtaW5Vc2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsLCBzbHVnLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXI6IGdhbWJhciB8fCBudWxsLCBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIiwgdmlld3M6IDAgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLCAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7IHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJlcml0YShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMy4gUFJPR1JBTSBLRVJKQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIHN0YXR1cywgcHJvZ3Jlc3MsXHJcbiAgICAgICAgZGVza3JpcHNpOiBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRpdmlzaTogZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBwcmlvcml0YXM6IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZyxcclxuICAgICAgICBhbmdnYXJhbjogTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKSxcclxuICAgICAgICBsb2thc2k6IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZyB8fCBudWxsLFxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpID8gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsLFxyXG4gICAgICAgIGRlYWRsaW5lOiBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZykgOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzLCBwcm9ncmVzcyxcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBkZXNrcmlwc2k6IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHByaW9yaXRhczogZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGFuZ2dhcmFuOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc0ZlYXR1cmVkOiBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmcpIDogbnVsbCxcclxuICAgICAgICBkZWFkbGluZTogZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmcpIDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7IHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9ncmFtIGtlcmphIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gUEVOR1VSVVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIG5pcywgamFiYXRhbiwgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAga2VsYXM6IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZyB8fCBcIi1cIixcclxuICAgICAgICBkaXZpc2k6IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmcgfHwgXCItXCIsXHJcbiAgICAgICAgZm90b1VybDogZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBpc0Fkdmlzb3I6IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGRpdGFtYmFoa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbmlzOiBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGtlbGFzOiBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgamFiYXRhbjogZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIGFueSxcclxuICAgICAgICBmb3RvVXJsOiBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZyB8fCB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGRhdGEgcGVuZ3VydXMuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBBQlNFTlNJICYgQUNBUkFcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNhcmEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7Zm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IG5ld0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLCB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZyB8fCBcIlwiLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyB8fCBcIlNla29sYWhcIixcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWJ1YXQhXCIsIGlkOiBuZXdBY2FyYS5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke2Zvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIil9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIil9YCkgOiBudWxsO1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogXCJPTkdPSU5HXCIsIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoeyBkYXRhOiB7IGFjYXJhSWQ6IGlkLCB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGltdWxhaSFcIiwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbXVsYWkgc2VzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgaWYgKHNlc2lBa3RpZikgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSwgZGF0YTogeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIsIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogbmV4dFN0YXR1cywgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGloZW50aWthbi5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBzdG9wIHNlc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmIVwiIH07XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuISDwn5GMXCIsIGRhdGE6IHsgbmFtZTogcGVuZ3VydXMubmFtYSwgc3RhdHVzOiBcIkRVUExJQ0FURVwiIH0gfTtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIGFjYXJhSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkLCBrZWdpYXRhbjogXCJTY2FuXCIsIHN0YXR1czogXCJIQURJUlwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcmhhc2lsISDinIVcIiwgZGF0YTogeyBuYW1lOiBwZW5ndXJ1cy5uYW1hLCBzdGF0dXM6IFwiSEFESVJcIiB9IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNpc3RlbSBzY2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIHRpZGFrIGFrdGlmXCIgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7XHJcbiAgICBlbHNlIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQsIHN0YXR1cywga2VnaWF0YW46IFwiTWFudWFsXCIsIHRhbmdnYWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN0YXR1cyBkaXBlcmJhcnVpIG1hbnVhbC5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBpbnB1dCBtYW51YWwuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3QoeyB3aGVyZTogeyBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH0gfSk7XHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VzaSB0aWRhayBha3RpZlwiIH07XHJcbiAgICBjb25zdCBzZW11YSA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sIHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0pO1xyXG4gICAgY29uc3Qgc3VkYWggPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH0gfSk7XHJcbiAgICBjb25zdCBzdWRhaElkcyA9IHN1ZGFoLm1hcChzID0+IHMucGVuZ3VydXNJZCk7XHJcbiAgICBjb25zdCBiZWx1bSA9IHNlbXVhLmZpbHRlcihwID0+ICFzdWRhaElkcy5pbmNsdWRlcyhwLmlkKSk7XHJcbiAgICBpZiAoYmVsdW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHsgZGF0YTogYmVsdW0ubWFwKHAgPT4gKHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQ6IHAuaWQsIHN0YXR1czogXCJBTFBBXCIsIGtlZ2lhdGFuOiBcIkF1dG9cIiwgdGFuZ2dhbDogbmV3IERhdGUoKSB9KSkgfSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2VzaSBkaXR1dHVwIG90b21hdGlzLlwiLCBjb3VudDogYmVsdW0ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGF1dG8tYWxwYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhckFjYXJhKCkgeyByZXR1cm4gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBzZXNpOiB7IHdoZXJlOiB7IHN0YXR1czogXCJPTkdPSU5HXCIgfSwgdGFrZTogMSB9IH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9KTsgfVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7IHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LCBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfSB9KTsgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICBjb25zdCB0b3RhbCA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBhY2FyYTogdHJ1ZSwgYWJzZW5zaTogdHJ1ZSB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJla2FwIGRpbXVhdFwiLFxyXG4gICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4gKHtcclxuICAgICAgaWQ6IHMuaWQsIG5hbWE6IHMuYWNhcmEubmFtYSwgdGFuZ2dhbDogcy53YWt0dU11bGFpLCB0b3RhbEFuZ2dvdGE6IHRvdGFsLFxyXG4gICAgICBjb3VudHM6IHsgSEFESVI6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0hBRElSJykubGVuZ3RoLCBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLCBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsIEFMUEE6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0FMUEEnKS5sZW5ndGggfSxcclxuICAgICAgcGVyc2VudGFzZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgocy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGggLyB0b3RhbCkgKiAxMDApIDogMFxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHsgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHsgd2hlcmU6IHsgc2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH0gfSk7IH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gW107IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQ2hlY2tlZFwiIH07IH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJDaGVja2VkXCIgfTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDYuIEtFVUFOR0FOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZywgY29sb3I6IFwiYmx1ZVwiLCBpY29uOiBcIldhbGxldFwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCdWt1IEthcyBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBhbnksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmcsIHRhbmdnYWw6IG5ldyBEYXRlKCksIGJ1a3VLYXNJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcImJ1a3VLYXNJZFwiKSkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpY2F0YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoeyB3aGVyZTogeyBpZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9LCBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSkgfSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGlhbG9rYXNpa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogXCJQRU5HRUxVQVJBTlwiLCBrYXRlZ29yaTogXCJFdmVudFwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpLCBwcm9rZXJJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9IH0pLFxyXG4gICAgICBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIH0sIGRhdGE6IHsgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpIH0gfSB9KVxyXG4gICAgXSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VFdmVudEJ1ZGdldChwcm9rZXJJZDogbnVtYmVyLCB0YXJnZXRCdWt1SWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LCBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdHV0dXAhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoeyBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nLCBrb2RlOiBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZywga2F0ZWdvcmk6IFwiVW11bVwiLCBrb25kaXNpOiBcIkJhaWtcIiwgc3RhdHVzOiBcIkFWQUlMQUJMRVwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzZXQgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkJPUlJPV0VEXCIsIHBlbWluamFtOiBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmcsIHRnbFBpbmphbTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXBpbmphbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBwZW1pbmphbTogbnVsbCwgdGdsUGluamFtOiBudWxsIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIktlbWJhbGkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBHQUxFUklcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmcsIGthdGVnb3JpOiBcIlVtdW1cIiwgaW1hZ2VzOiBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nLCBkZXNrcmlwc2k6IFwiXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVcGRhdGUhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkhhcHVzIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTEFJTk5ZQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHsgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRlc2FpbiBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHsgd2hlcmU6IHsgaWQ6IDEgfSwgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSwgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCRyBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIHRyeSB7IGlmICghcGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSkgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHsgZGF0YTogeyBpcCwgdXNlckFnZW50LCBwYXRoIH0gfSk7IH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGl2aXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuY3JlYXRlKHsgZGF0YTogeyBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyB9IH0pOyByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgZGlidWF0IVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURpdmlzaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuZGl2aXNpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEaXZpc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpaGFwdXNcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKYWJhdGFuKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRpdmlzaUlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZGl2aXNpSWRcIikpIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlidWF0XCIgfTsgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlwZXJiYXJ1aVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUphYmF0YW4oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGloYXB1c1wiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0tlaGFkaXJhbihhYnNlbnNpSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoeyB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3RhdHVzIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFnSnNCLCtMQUFBIn0=
}),
"[project]/lib/data:18e38f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEuIEFTUElSQVNJIFNJU1dBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcmF3TmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJhd0tlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBlc2FuID0gZm9ybURhdGEuZ2V0KFwicGVzYW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzQW5vbmltID0gZm9ybURhdGEuZ2V0KFwiaXNBbm9uaW1cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBpZiAoIXBlc2FuIHx8IHBlc2FuLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGVzYW4gdGlkYWsgYm9sZWgga29zb25nIVwiIH07XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoeyBkYXRhOiB7IHBlbmdpcmltLCBrZWxhcywgaXNpOiBwZXNhbiwga2F0ZWdvcmk6IFwiVW11bVwiLCBzdGF0dXM6IFwiUEVORElOR1wiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzcGlyYXNpIGJlcmhhc2lsIGRpa2lyaW0hIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naXJpbSBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGx5QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGJhbGFzYW4gPSBmb3JtRGF0YS5nZXQoXCJiYWxhc2FuXCIpIGFzIHN0cmluZztcclxuICBpZiAoIWJhbGFzYW4gfHwgYmFsYXNhbi50cmltKCkgPT09IFwiXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkJhbGFzYW4gdGlkYWsgYm9sZWgga29zb25nLlwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyBiYWxhc2FuLCBiYWxhc2FuQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogXCJTRUxFU0FJXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYWxhc2FuIHRlcmtpcmltIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQkVSSVRBIChDTVMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gQmVyaXRhU2NoZW1hLnNhZmVQYXJzZSh7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSwga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSB8fCBcIlVtdW1cIiwgZ2FtYmFyOiBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgfSk7XHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICBjb25zdCB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xyXG4gIGNvbnN0IHNsdWcgPSBgJHtzbHVnaWZ5KGp1ZHVsKX0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIGhhYmlzLlwiIH07XHJcblxyXG4gIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9IH0pO1xyXG4gIGlmICghYWRtaW5Vc2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsLCBzbHVnLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXI6IGdhbWJhciB8fCBudWxsLCBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIiwgdmlld3M6IDAgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLCAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7IHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJlcml0YShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMy4gUFJPR1JBTSBLRVJKQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIHN0YXR1cywgcHJvZ3Jlc3MsXHJcbiAgICAgICAgZGVza3JpcHNpOiBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRpdmlzaTogZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBwcmlvcml0YXM6IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZyxcclxuICAgICAgICBhbmdnYXJhbjogTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKSxcclxuICAgICAgICBsb2thc2k6IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZyB8fCBudWxsLFxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpID8gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsLFxyXG4gICAgICAgIGRlYWRsaW5lOiBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZykgOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzLCBwcm9ncmVzcyxcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBkZXNrcmlwc2k6IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHByaW9yaXRhczogZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGFuZ2dhcmFuOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc0ZlYXR1cmVkOiBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmcpIDogbnVsbCxcclxuICAgICAgICBkZWFkbGluZTogZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmcpIDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7IHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9ncmFtIGtlcmphIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gUEVOR1VSVVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIG5pcywgamFiYXRhbiwgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAga2VsYXM6IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZyB8fCBcIi1cIixcclxuICAgICAgICBkaXZpc2k6IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmcgfHwgXCItXCIsXHJcbiAgICAgICAgZm90b1VybDogZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBpc0Fkdmlzb3I6IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGRpdGFtYmFoa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbmlzOiBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGtlbGFzOiBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgamFiYXRhbjogZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIGFueSxcclxuICAgICAgICBmb3RvVXJsOiBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZyB8fCB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGRhdGEgcGVuZ3VydXMuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBBQlNFTlNJICYgQUNBUkFcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNhcmEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7Zm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IG5ld0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLCB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZyB8fCBcIlwiLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyB8fCBcIlNla29sYWhcIixcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWJ1YXQhXCIsIGlkOiBuZXdBY2FyYS5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke2Zvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIil9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIil9YCkgOiBudWxsO1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogXCJPTkdPSU5HXCIsIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoeyBkYXRhOiB7IGFjYXJhSWQ6IGlkLCB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGltdWxhaSFcIiwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbXVsYWkgc2VzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgaWYgKHNlc2lBa3RpZikgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSwgZGF0YTogeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIsIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogbmV4dFN0YXR1cywgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGloZW50aWthbi5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBzdG9wIHNlc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmIVwiIH07XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuISDwn5GMXCIsIGRhdGE6IHsgbmFtZTogcGVuZ3VydXMubmFtYSwgc3RhdHVzOiBcIkRVUExJQ0FURVwiIH0gfTtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIGFjYXJhSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkLCBrZWdpYXRhbjogXCJTY2FuXCIsIHN0YXR1czogXCJIQURJUlwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcmhhc2lsISDinIVcIiwgZGF0YTogeyBuYW1lOiBwZW5ndXJ1cy5uYW1hLCBzdGF0dXM6IFwiSEFESVJcIiB9IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNpc3RlbSBzY2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIHRpZGFrIGFrdGlmXCIgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7XHJcbiAgICBlbHNlIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQsIHN0YXR1cywga2VnaWF0YW46IFwiTWFudWFsXCIsIHRhbmdnYWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN0YXR1cyBkaXBlcmJhcnVpIG1hbnVhbC5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBpbnB1dCBtYW51YWwuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3QoeyB3aGVyZTogeyBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH0gfSk7XHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VzaSB0aWRhayBha3RpZlwiIH07XHJcbiAgICBjb25zdCBzZW11YSA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sIHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0pO1xyXG4gICAgY29uc3Qgc3VkYWggPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH0gfSk7XHJcbiAgICBjb25zdCBzdWRhaElkcyA9IHN1ZGFoLm1hcChzID0+IHMucGVuZ3VydXNJZCk7XHJcbiAgICBjb25zdCBiZWx1bSA9IHNlbXVhLmZpbHRlcihwID0+ICFzdWRhaElkcy5pbmNsdWRlcyhwLmlkKSk7XHJcbiAgICBpZiAoYmVsdW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHsgZGF0YTogYmVsdW0ubWFwKHAgPT4gKHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQ6IHAuaWQsIHN0YXR1czogXCJBTFBBXCIsIGtlZ2lhdGFuOiBcIkF1dG9cIiwgdGFuZ2dhbDogbmV3IERhdGUoKSB9KSkgfSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2VzaSBkaXR1dHVwIG90b21hdGlzLlwiLCBjb3VudDogYmVsdW0ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGF1dG8tYWxwYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhckFjYXJhKCkgeyByZXR1cm4gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBzZXNpOiB7IHdoZXJlOiB7IHN0YXR1czogXCJPTkdPSU5HXCIgfSwgdGFrZTogMSB9IH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9KTsgfVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7IHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LCBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfSB9KTsgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICBjb25zdCB0b3RhbCA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBhY2FyYTogdHJ1ZSwgYWJzZW5zaTogdHJ1ZSB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJla2FwIGRpbXVhdFwiLFxyXG4gICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4gKHtcclxuICAgICAgaWQ6IHMuaWQsIG5hbWE6IHMuYWNhcmEubmFtYSwgdGFuZ2dhbDogcy53YWt0dU11bGFpLCB0b3RhbEFuZ2dvdGE6IHRvdGFsLFxyXG4gICAgICBjb3VudHM6IHsgSEFESVI6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0hBRElSJykubGVuZ3RoLCBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLCBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsIEFMUEE6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0FMUEEnKS5sZW5ndGggfSxcclxuICAgICAgcGVyc2VudGFzZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgocy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGggLyB0b3RhbCkgKiAxMDApIDogMFxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHsgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHsgd2hlcmU6IHsgc2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH0gfSk7IH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gW107IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQ2hlY2tlZFwiIH07IH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJDaGVja2VkXCIgfTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDYuIEtFVUFOR0FOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZywgY29sb3I6IFwiYmx1ZVwiLCBpY29uOiBcIldhbGxldFwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCdWt1IEthcyBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBhbnksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmcsIHRhbmdnYWw6IG5ldyBEYXRlKCksIGJ1a3VLYXNJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcImJ1a3VLYXNJZFwiKSkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpY2F0YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoeyB3aGVyZTogeyBpZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9LCBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSkgfSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGlhbG9rYXNpa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogXCJQRU5HRUxVQVJBTlwiLCBrYXRlZ29yaTogXCJFdmVudFwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpLCBwcm9rZXJJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9IH0pLFxyXG4gICAgICBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIH0sIGRhdGE6IHsgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpIH0gfSB9KVxyXG4gICAgXSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VFdmVudEJ1ZGdldChwcm9rZXJJZDogbnVtYmVyLCB0YXJnZXRCdWt1SWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LCBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdHV0dXAhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoeyBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nLCBrb2RlOiBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZywga2F0ZWdvcmk6IFwiVW11bVwiLCBrb25kaXNpOiBcIkJhaWtcIiwgc3RhdHVzOiBcIkFWQUlMQUJMRVwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzZXQgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkJPUlJPV0VEXCIsIHBlbWluamFtOiBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmcsIHRnbFBpbmphbTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXBpbmphbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBwZW1pbmphbTogbnVsbCwgdGdsUGluamFtOiBudWxsIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIktlbWJhbGkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBHQUxFUklcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmcsIGthdGVnb3JpOiBcIlVtdW1cIiwgaW1hZ2VzOiBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nLCBkZXNrcmlwc2k6IFwiXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVcGRhdGUhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkhhcHVzIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTEFJTk5ZQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHsgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRlc2FpbiBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHsgd2hlcmU6IHsgaWQ6IDEgfSwgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSwgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCRyBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIHRyeSB7IGlmICghcGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSkgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHsgZGF0YTogeyBpcCwgdXNlckFnZW50LCBwYXRoIH0gfSk7IH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGl2aXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuY3JlYXRlKHsgZGF0YTogeyBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyB9IH0pOyByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgZGlidWF0IVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURpdmlzaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuZGl2aXNpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEaXZpc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpaGFwdXNcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKYWJhdGFuKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRpdmlzaUlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZGl2aXNpSWRcIikpIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlidWF0XCIgfTsgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlwZXJiYXJ1aVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUphYmF0YW4oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGloYXB1c1wiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0tlaGFkaXJhbihhYnNlbnNpSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoeyB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3RhdHVzIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkE2S3NCLCtMQUFBIn0=
}),
"[project]/lib/data:28b30a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEuIEFTUElSQVNJIFNJU1dBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcmF3TmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJhd0tlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBlc2FuID0gZm9ybURhdGEuZ2V0KFwicGVzYW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzQW5vbmltID0gZm9ybURhdGEuZ2V0KFwiaXNBbm9uaW1cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBpZiAoIXBlc2FuIHx8IHBlc2FuLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGVzYW4gdGlkYWsgYm9sZWgga29zb25nIVwiIH07XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoeyBkYXRhOiB7IHBlbmdpcmltLCBrZWxhcywgaXNpOiBwZXNhbiwga2F0ZWdvcmk6IFwiVW11bVwiLCBzdGF0dXM6IFwiUEVORElOR1wiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzcGlyYXNpIGJlcmhhc2lsIGRpa2lyaW0hIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naXJpbSBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGx5QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGJhbGFzYW4gPSBmb3JtRGF0YS5nZXQoXCJiYWxhc2FuXCIpIGFzIHN0cmluZztcclxuICBpZiAoIWJhbGFzYW4gfHwgYmFsYXNhbi50cmltKCkgPT09IFwiXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkJhbGFzYW4gdGlkYWsgYm9sZWgga29zb25nLlwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyBiYWxhc2FuLCBiYWxhc2FuQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogXCJTRUxFU0FJXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYWxhc2FuIHRlcmtpcmltIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQkVSSVRBIChDTVMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gQmVyaXRhU2NoZW1hLnNhZmVQYXJzZSh7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSwga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSB8fCBcIlVtdW1cIiwgZ2FtYmFyOiBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgfSk7XHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICBjb25zdCB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xyXG4gIGNvbnN0IHNsdWcgPSBgJHtzbHVnaWZ5KGp1ZHVsKX0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIGhhYmlzLlwiIH07XHJcblxyXG4gIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9IH0pO1xyXG4gIGlmICghYWRtaW5Vc2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsLCBzbHVnLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXI6IGdhbWJhciB8fCBudWxsLCBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIiwgdmlld3M6IDAgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLCAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7IHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJlcml0YShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMy4gUFJPR1JBTSBLRVJKQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIHN0YXR1cywgcHJvZ3Jlc3MsXHJcbiAgICAgICAgZGVza3JpcHNpOiBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRpdmlzaTogZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBwcmlvcml0YXM6IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZyxcclxuICAgICAgICBhbmdnYXJhbjogTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKSxcclxuICAgICAgICBsb2thc2k6IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZyB8fCBudWxsLFxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpID8gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsLFxyXG4gICAgICAgIGRlYWRsaW5lOiBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZykgOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzLCBwcm9ncmVzcyxcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBkZXNrcmlwc2k6IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHByaW9yaXRhczogZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGFuZ2dhcmFuOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc0ZlYXR1cmVkOiBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmcpIDogbnVsbCxcclxuICAgICAgICBkZWFkbGluZTogZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmcpIDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7IHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9ncmFtIGtlcmphIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gUEVOR1VSVVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIG5pcywgamFiYXRhbiwgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAga2VsYXM6IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZyB8fCBcIi1cIixcclxuICAgICAgICBkaXZpc2k6IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmcgfHwgXCItXCIsXHJcbiAgICAgICAgZm90b1VybDogZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBpc0Fkdmlzb3I6IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGRpdGFtYmFoa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbmlzOiBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGtlbGFzOiBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgamFiYXRhbjogZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIGFueSxcclxuICAgICAgICBmb3RvVXJsOiBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZyB8fCB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGRhdGEgcGVuZ3VydXMuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBBQlNFTlNJICYgQUNBUkFcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNhcmEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7Zm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IG5ld0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLCB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZyB8fCBcIlwiLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyB8fCBcIlNla29sYWhcIixcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWJ1YXQhXCIsIGlkOiBuZXdBY2FyYS5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke2Zvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIil9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIil9YCkgOiBudWxsO1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogXCJPTkdPSU5HXCIsIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoeyBkYXRhOiB7IGFjYXJhSWQ6IGlkLCB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGltdWxhaSFcIiwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbXVsYWkgc2VzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgaWYgKHNlc2lBa3RpZikgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSwgZGF0YTogeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIsIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogbmV4dFN0YXR1cywgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGloZW50aWthbi5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBzdG9wIHNlc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmIVwiIH07XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuISDwn5GMXCIsIGRhdGE6IHsgbmFtZTogcGVuZ3VydXMubmFtYSwgc3RhdHVzOiBcIkRVUExJQ0FURVwiIH0gfTtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIGFjYXJhSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkLCBrZWdpYXRhbjogXCJTY2FuXCIsIHN0YXR1czogXCJIQURJUlwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcmhhc2lsISDinIVcIiwgZGF0YTogeyBuYW1lOiBwZW5ndXJ1cy5uYW1hLCBzdGF0dXM6IFwiSEFESVJcIiB9IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNpc3RlbSBzY2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIHRpZGFrIGFrdGlmXCIgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7XHJcbiAgICBlbHNlIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQsIHN0YXR1cywga2VnaWF0YW46IFwiTWFudWFsXCIsIHRhbmdnYWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN0YXR1cyBkaXBlcmJhcnVpIG1hbnVhbC5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBpbnB1dCBtYW51YWwuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3QoeyB3aGVyZTogeyBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH0gfSk7XHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VzaSB0aWRhayBha3RpZlwiIH07XHJcbiAgICBjb25zdCBzZW11YSA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sIHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0pO1xyXG4gICAgY29uc3Qgc3VkYWggPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH0gfSk7XHJcbiAgICBjb25zdCBzdWRhaElkcyA9IHN1ZGFoLm1hcChzID0+IHMucGVuZ3VydXNJZCk7XHJcbiAgICBjb25zdCBiZWx1bSA9IHNlbXVhLmZpbHRlcihwID0+ICFzdWRhaElkcy5pbmNsdWRlcyhwLmlkKSk7XHJcbiAgICBpZiAoYmVsdW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHsgZGF0YTogYmVsdW0ubWFwKHAgPT4gKHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQ6IHAuaWQsIHN0YXR1czogXCJBTFBBXCIsIGtlZ2lhdGFuOiBcIkF1dG9cIiwgdGFuZ2dhbDogbmV3IERhdGUoKSB9KSkgfSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2VzaSBkaXR1dHVwIG90b21hdGlzLlwiLCBjb3VudDogYmVsdW0ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGF1dG8tYWxwYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhckFjYXJhKCkgeyByZXR1cm4gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBzZXNpOiB7IHdoZXJlOiB7IHN0YXR1czogXCJPTkdPSU5HXCIgfSwgdGFrZTogMSB9IH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9KTsgfVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7IHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LCBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfSB9KTsgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICBjb25zdCB0b3RhbCA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBhY2FyYTogdHJ1ZSwgYWJzZW5zaTogdHJ1ZSB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJla2FwIGRpbXVhdFwiLFxyXG4gICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4gKHtcclxuICAgICAgaWQ6IHMuaWQsIG5hbWE6IHMuYWNhcmEubmFtYSwgdGFuZ2dhbDogcy53YWt0dU11bGFpLCB0b3RhbEFuZ2dvdGE6IHRvdGFsLFxyXG4gICAgICBjb3VudHM6IHsgSEFESVI6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0hBRElSJykubGVuZ3RoLCBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLCBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsIEFMUEE6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0FMUEEnKS5sZW5ndGggfSxcclxuICAgICAgcGVyc2VudGFzZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgocy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGggLyB0b3RhbCkgKiAxMDApIDogMFxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHsgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHsgd2hlcmU6IHsgc2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH0gfSk7IH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gW107IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQ2hlY2tlZFwiIH07IH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJDaGVja2VkXCIgfTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDYuIEtFVUFOR0FOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZywgY29sb3I6IFwiYmx1ZVwiLCBpY29uOiBcIldhbGxldFwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCdWt1IEthcyBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBhbnksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmcsIHRhbmdnYWw6IG5ldyBEYXRlKCksIGJ1a3VLYXNJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcImJ1a3VLYXNJZFwiKSkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpY2F0YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoeyB3aGVyZTogeyBpZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9LCBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSkgfSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGlhbG9rYXNpa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogXCJQRU5HRUxVQVJBTlwiLCBrYXRlZ29yaTogXCJFdmVudFwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpLCBwcm9rZXJJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9IH0pLFxyXG4gICAgICBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIH0sIGRhdGE6IHsgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpIH0gfSB9KVxyXG4gICAgXSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VFdmVudEJ1ZGdldChwcm9rZXJJZDogbnVtYmVyLCB0YXJnZXRCdWt1SWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LCBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdHV0dXAhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoeyBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nLCBrb2RlOiBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZywga2F0ZWdvcmk6IFwiVW11bVwiLCBrb25kaXNpOiBcIkJhaWtcIiwgc3RhdHVzOiBcIkFWQUlMQUJMRVwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzZXQgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkJPUlJPV0VEXCIsIHBlbWluamFtOiBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmcsIHRnbFBpbmphbTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXBpbmphbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBwZW1pbmphbTogbnVsbCwgdGdsUGluamFtOiBudWxsIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIktlbWJhbGkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBHQUxFUklcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmcsIGthdGVnb3JpOiBcIlVtdW1cIiwgaW1hZ2VzOiBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nLCBkZXNrcmlwc2k6IFwiXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVcGRhdGUhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkhhcHVzIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTEFJTk5ZQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHsgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRlc2FpbiBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHsgd2hlcmU6IHsgaWQ6IDEgfSwgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSwgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCRyBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIHRyeSB7IGlmICghcGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSkgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHsgZGF0YTogeyBpcCwgdXNlckFnZW50LCBwYXRoIH0gfSk7IH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGl2aXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuY3JlYXRlKHsgZGF0YTogeyBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyB9IH0pOyByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgZGlidWF0IVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURpdmlzaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuZGl2aXNpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEaXZpc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpaGFwdXNcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKYWJhdGFuKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRpdmlzaUlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZGl2aXNpSWRcIikpIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlidWF0XCIgfTsgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlwZXJiYXJ1aVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUphYmF0YW4oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGloYXB1c1wiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0tlaGFkaXJhbihhYnNlbnNpSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoeyB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3RhdHVzIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkE0TXNCLCtMQUFBIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$f9eb62__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:f9eb62 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$18e38f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:18e38f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$28b30a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:28b30a [app-client] (ecmascript) <text/javascript>");
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
function ProkerClient({ initialData, divisions }) {
    _s();
    const [prokers, setProkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [isDataLoading, setIsDataLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
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
            setProkers(initialData);
            // Beri sedikit delay agar transisi skeleton terlihat halus
            const timer = setTimeout({
                "ProkerClient.useEffect.timer": ()=>setIsDataLoading(false)
            }["ProkerClient.useEffect.timer"], 500);
            return ({
                "ProkerClient.useEffect": ()=>clearTimeout(timer)
            })["ProkerClient.useEffect"];
        }
    }["ProkerClient.useEffect"], [
        initialData
    ]);
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("File terlalu besar! Max 2MB.", "error");
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
            sekbid: divisions[0] || "Inti",
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
        if (!formState.title) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Nama kegiatan wajib diisi!", "warning");
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
            const result = isEditing ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$18e38f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProgramKerja"])(formData) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$f9eb62__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProgramKerja"])(formData);
            if (result.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(isEditing ? "Program kerja diperbarui." : "Program kerja baru berhasil ditambahkan.", "success");
                setIsModalOpen(false);
                window.location.reload();
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Gagal: " + result.message, "error");
            }
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Terjadi kesalahan sistem.", "error");
        } finally{
            setIsSaving(false);
        }
    };
    const handleDelete = async (id)=>{
        if (confirm("Yakin ingin menghapus proker ini permanen?")) {
            const originalProkers = [
                ...prokers
            ];
            setProkers(prokers.filter((p)=>p.id !== id));
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$28b30a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProgramKerja"])(id);
                if (res.success) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Proker telah dihapus.", "success");
                } else {
                    setProkers(originalProkers);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(res.message || "Gagal menghapus proker", "error");
                }
            } catch (err) {
                setProkers(originalProkers);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Gagal menghapus proker.", "error");
            }
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
        className: "relative h-full flex flex-col font-sans",
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
                                                className: "text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3 tour-header-title",
                                                children: [
                                                    "Manajemen Proker ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full",
                                                        children: "🚀"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this),
                                            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                steps: tourSteps
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                lineNumber: 163,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 dark:text-slate-400 text-sm font-medium mt-1",
                                        children: "Pantau status kegiatan: Segera, Berjalan, dan Selesai."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openNewModal,
                                className: "px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-transform active:scale-95 tour-buat-baru-btn text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    " Proker Baru"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilterSekbid("Semua"),
                                        className: `px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${filterSekbid === "Semua" ? "bg-slate-900 dark:bg-blue-600 text-white border-slate-900 shadow-md" : "bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300"}`,
                                        children: "Semua"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    divisions.map((sekbid)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFilterSekbid(sekbid),
                                            className: `px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${filterSekbid === sekbid ? "bg-slate-900 dark:bg-blue-600 text-white border-slate-900 shadow-md" : "bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300"}`,
                                            children: sekbid
                                        }, sekbid, false, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
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
                                        className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none text-sm font-medium text-slate-700 dark:text-white shadow-sm transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16,
                                        className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 191,
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
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto overflow-x-auto pb-20 custom-scrollbar pr-2",
                children: isDataLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-6 min-w-[1000px] md:min-w-0 min-h-full h-fit animate-pulse",
                    children: [
                        1,
                        2,
                        3
                    ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 rounded-[2rem] p-4 bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 min-h-[500px] space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center px-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 211,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-5 w-8 bg-slate-200 dark:bg-slate-800 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 212,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 210,
                                    columnNumber: 22
                                }, this),
                                [
                                    1,
                                    2
                                ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-[#1e293b] p-4 rounded-2xl border border-slate-100 dark:border-white/5 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-5 w-16 bg-slate-100 dark:bg-slate-800 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 66
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-12 bg-slate-50 dark:bg-slate-800/50 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 133
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                lineNumber: 216,
                                                columnNumber: 28
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                lineNumber: 217,
                                                columnNumber: 28
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 w-2/3 bg-slate-100 dark:bg-slate-800 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 124
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                lineNumber: 218,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, card, true, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 215,
                                        columnNumber: 25
                                    }, this))
                            ]
                        }, col, true, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 209,
                            columnNumber: 19
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                    lineNumber: 207,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-6 min-w-[1000px] md:min-w-0 min-h-full h-fit",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KanbanColumn, {
                            tourClass: "tour-col-segera",
                            title: "SEGERA",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 226,
                                columnNumber: 79
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
                                    lineNumber: 228,
                                    columnNumber: 23
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 226,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KanbanColumn, {
                            tourClass: "tour-col-berjalan",
                            title: "BERJALAN",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 236,
                                columnNumber: 83
                            }, void 0),
                            count: listBerjalan.length,
                            color: "yellow",
                            children: listBerjalan.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProkerCard, {
                                    data: item,
                                    onDelete: handleDelete,
                                    onEdit: openEditModal
                                }, item.id, false, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 237,
                                    columnNumber: 47
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 236,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KanbanColumn, {
                            title: "SELESAI",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 240,
                                columnNumber: 52
                            }, void 0),
                            count: listSelesai.length,
                            color: "green",
                            children: listSelesai.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProkerCard, {
                                    data: item,
                                    onDelete: handleDelete,
                                    onEdit: openEditModal
                                }, item.id, false, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 241,
                                    columnNumber: 46
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 240,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                    lineNumber: 225,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 205,
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
                            lineNumber: 251,
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
                                                    lineNumber: 255,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 mt-1",
                                                    children: isEditing ? "Update detail & progress kegiatan." : "Detail rencana kegiatan."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 254,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 24,
                                                className: "text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                lineNumber: 258,
                                                columnNumber: 68
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 258,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 253,
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
                                                        lineNumber: 264,
                                                        columnNumber: 47
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center text-slate-400 group-hover:text-blue-500 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                size: 24,
                                                                className: "mx-auto mb-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9px]",
                                                                children: "Upload"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 81
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 263,
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
                                                            lineNumber: 271,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500 mb-3",
                                                            children: "Tampil di Halaman Depan. Max 2MB."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 272,
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
                                                            lineNumber: 273,
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
                                                                    lineNumber: 275,
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
                                                                            lineNumber: 276,
                                                                            columnNumber: 378
                                                                        }, this),
                                                                        " Unggulan?"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 262,
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
                                                            lineNumber: 282,
                                                            columnNumber: 30
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
                                                            lineNumber: 282,
                                                            columnNumber: 124
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 282,
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
                                                                    lineNumber: 283,
                                                                    columnNumber: 127
                                                                }, this),
                                                                " Deskripsi Singkat"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 30
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
                                                            lineNumber: 283,
                                                            columnNumber: 174
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 283,
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
                                                                    lineNumber: 286,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formState.sekbid,
                                                                    onChange: (e)=>setFormState({
                                                                            ...formState,
                                                                            sekbid: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-blue-500 text-sm font-bold dark:text-white",
                                                                    children: divisions.map((div)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: div,
                                                                            children: div
                                                                        }, div, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 288,
                                                                            columnNumber: 56
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                                    children: "Prioritas"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 33
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
                                                                            lineNumber: 291,
                                                                            columnNumber: 411
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Medium"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 291,
                                                                            columnNumber: 432
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Low"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                            lineNumber: 291,
                                                                            columnNumber: 455
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 123
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 281,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-slate-100 dark:border-white/5 my-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 294,
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
                                                            lineNumber: 296,
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
                                                            lineNumber: 296,
                                                            columnNumber: 116
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "Selesai"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 297,
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
                                                            lineNumber: 297,
                                                            columnNumber: 118
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "PIC (Penanggung Jawab)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 298,
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
                                                            lineNumber: 298,
                                                            columnNumber: 133
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "Anggaran (Rp)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                            lineNumber: 299,
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
                                                            lineNumber: 299,
                                                            columnNumber: 124
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 295,
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
                                                            lineNumber: 302,
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
                                                            lineNumber: 302,
                                                            columnNumber: 183
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                                    lineNumber: 302,
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
                                                    lineNumber: 303,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 301,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 261,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex justify-end gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "px-6 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors",
                                            children: "Batal"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 308,
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
                                                    lineNumber: 310,
                                                    columnNumber: 38
                                                }, this),
                                                isSaving ? "Menyimpan..." : isEditing ? "Update Proker" : "Simpan Proker"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                            lineNumber: 309,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 307,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                            lineNumber: 252,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                    lineNumber: 250,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(ProkerClient, "clkwjavCXyezSt1gnJdZt0Y8GFw=");
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
                                lineNumber: 335,
                                columnNumber: 138
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 335,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2.5 py-0.5 rounded-full bg-white dark:bg-white/10 text-xs font-bold text-slate-500 dark:text-slate-400 shadow-sm",
                        children: count
                    }, void 0, false, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 336,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 334,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 flex-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 338,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
        lineNumber: 333,
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
            lineNumber: 349,
            columnNumber: 36
        }, this);
        if (progress > 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-2.5 py-1 rounded-md bg-yellow-100 text-yellow-700 text-[10px] font-black font-bold uppercase tracking-wide",
            children: "BERJALAN"
        }, void 0, false, {
            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
            lineNumber: 350,
            columnNumber: 32
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-2.5 py-1 rounded-md bg-blue-100 text-blue-600 text-[10px] font-black font-bold uppercase tracking-wide",
            children: "SEGERA"
        }, void 0, false, {
            fileName: "[project]/app/admin/proker/ProkerClient.tsx",
            lineNumber: 351,
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
                    lineNumber: 364,
                    columnNumber: 154
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 364,
                columnNumber: 30
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
                                columnNumber: 139
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-slate-400",
                                children: divisi
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 365,
                                columnNumber: 189
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEdit(data),
                                className: "text-slate-300 hover:text-blue-500 transition-colors tour-edit-action",
                                title: "Edit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 365,
                                    columnNumber: 391
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 365,
                                columnNumber: 259
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDelete(data.id),
                                className: "text-slate-300 hover:text-red-500 transition-colors",
                                title: "Hapus",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                    lineNumber: 365,
                                    columnNumber: 538
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 365,
                                columnNumber: 418
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 365,
                        columnNumber: 96
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 365,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-slate-800 dark:text-slate-100 text-sm mb-1 leading-snug group-hover:text-blue-600 transition-colors",
                children: namaKegiatan
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 366,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-slate-500 dark:text-slate-400 mb-3 line-clamp-2 leading-relaxed",
                children: deskripsi
            }, void 0, false, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 367,
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
                                lineNumber: 368,
                                columnNumber: 112
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    data.progress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 368,
                                columnNumber: 133
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 368,
                        columnNumber: 32
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
                            lineNumber: 368,
                            columnNumber: 256
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 368,
                        columnNumber: 168
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 368,
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
                                lineNumber: 369,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-600 dark:text-slate-300",
                                        children: deadline ? new Date(deadline).toLocaleDateString("id-ID") : "-"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 369,
                                        columnNumber: 393
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
                                        lineNumber: 369,
                                        columnNumber: 557
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-400",
                                        children: "Rp 0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                        lineNumber: 369,
                                        columnNumber: 737
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 369,
                                columnNumber: 362
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 369,
                        columnNumber: 111
                    }, this),
                    prioritas === 'High' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-500/10 px-2 py-0.5 rounded-full ${isFirstPriority ? 'tour-priority-badge' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                size: 10,
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                                lineNumber: 369,
                                columnNumber: 1011
                            }, this),
                            " High"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                        lineNumber: 369,
                        columnNumber: 831
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/proker/ProkerClient.tsx",
                lineNumber: 369,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/proker/ProkerClient.tsx",
        lineNumber: 363,
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

//# sourceMappingURL=_8880cbfd._.js.map