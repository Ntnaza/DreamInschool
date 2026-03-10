module.exports = [
"[project]/components/TourGuide.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TourGuide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-joyride/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
"use client";
;
;
;
;
function TourGuide({ steps }) {
    const [run, setRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleJoyrideCallback = (data)=>{
        const { status } = data;
        // Gunakan logika OR (||) agar TypeScript aman
        if (status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATUS"].FINISHED || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATUS"].SKIPPED) {
            setRun(false);
        }
    };
    // === INI RAHASIANYA: KOMPONEN TOOLTIP CUSTOM ===
    // Kita bikin tampilan sendiri pakai Tailwind biar bebas kreasinya
    const CustomTooltip = ({ continuous, index, step, backProps, closeProps, primaryProps, tooltipProps, isLastStep, size })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ...tooltipProps,
            className: "bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 max-w-sm flex flex-col overflow-hidden font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start p-5 pb-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black font-bold",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ...closeProps,
                            className: "text-slate-400 hover:text-red-500 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed",
                    children: step.content
                }, void 0, false, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-slate-50 dark:bg-white/5 flex items-center justify-between border-t border-slate-100 dark:border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ...backProps,
                                    className: "px-3 py-2 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ...primaryProps,
                                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-500/30 flex items-center gap-1 transition-transform active:scale-95",
                                    children: [
                                        isLastStep ? "Selesai" : "Lanjut",
                                        " ",
                                        !isLastStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setRun(true),
                    className: "group flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-white/5 border border-blue-200 dark:border-white/10 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 transition-all active:scale-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    size: 16,
                                    className: "text-blue-600 dark:text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/lib/data:6af726 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGeneralTrx",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40f7f4da67a70804a041701b11ca6d029d8246cc0c":"createGeneralTrx"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40f7f4da67a70804a041701b11ca6d029d8246cc0c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createGeneralTrx");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEhFTFBFUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvbnRlbiA9IGZvcm1EYXRhLmdldChcImtvbnRlblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSAoZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nKSB8fCBcIlVtdW1cIjtcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgaWYgKCFqdWR1bCB8fCAha29udGVuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCAmIEtvbnRlbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2x1ZyA9IGAke3NsdWdpZnkoanVkdWwpfS0ke0RhdGUubm93KCl9YDtcclxuXHJcbiAgLy8gPT09IFBFUkJBSUtBTiBESSBTSU5JID09PVxyXG4gIC8vIDEuIEtpdGEgY2FyaSBkdWx1IHVzZXIgKEFkbWluKSB5YW5nIGFkYSBkaSBkYXRhYmFzZVxyXG4gIC8vIE5hbnRpIGthbGF1IHN1ZGFoIGFkYSBsb2dpbiwga2l0YSBhbWJpbCBkYXJpIHNlc3Npb24gdXNlciB5YW5nIGxvZ2luXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KCk7XHJcblxyXG4gIGlmICghYWRtaW5Vc2VyKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvcjogQmVsdW0gYWRhIFVzZXIvQWRtaW4gZGkgZGF0YWJhc2UhXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhciB8fCBudWxsLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDIuIEh1YnVuZ2thbiBrZSBJRCBVc2VyIHlhbmcgZGl0ZW11a2FuIHRhZGlcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSmFuZ2FuIHBha2FpICdwZW51bGlzOiBcIkFkbWluIE9TSVNcIicsIGl0dSBzYWxhaC5cclxuICAgICAgICBzdGF0dXM6IFwiUFVCTElTSEVEXCIsXHJcbiAgICAgICAgdmlld3M6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9iZXJpdGFcIik7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgdGVyYml0ISDwn5OwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmVyYml0a2FuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgdmFsaWQuXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb250ZW4gPSBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAga29udGVuLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIC4uLihnYW1iYXIgJiYgeyBnYW1iYXIgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaXBlcmJhcnVpISDwn5OdXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCZXJpdGEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDQuIE1BTkFKRU1FTiBQUk9HUkFNIEtFUkpBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVQcm9rZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJzZWtiaWRcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByaW9yaXRhcyA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBhbmdnYXJhbiA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJidWRnZXRcIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBzdGFydERhdGUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgYXMgc3RyaW5nKSA6IG51bGw7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IGZvcm1EYXRhLmdldChcImVuZERhdGVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJlbmREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsO1xyXG4gIGNvbnN0IHBpY05hbWUgPSBmb3JtRGF0YS5nZXQoXCJwaWNcIikgYXMgc3RyaW5nOyAvLyBTZWRlcmhhbmEgZHVsdSwgc2ltcGFuIG5hbWEgUElDIHNiZyB0ZXh0IHNlbWVudGFyYS9sb2thc2lcclxuXHJcbiAgLy8gTWFwcGluZyBTdGF0dXMgTG9naWNcclxuICBsZXQgc3RhdHVzOiBTdGF0dXNQcm9rZXIgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YVRvU2F2ZSA9IHtcclxuICAgICAgbmFtYSxcclxuICAgICAgZGVza3JpcHNpLFxyXG4gICAgICBkaXZpc2ksXHJcbiAgICAgIHByaW9yaXRhcyxcclxuICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgIHByb2dyZXNzLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgZGVhZGxpbmU6IGVuZERhdGUsXHJcbiAgICAgIGxva2FzaTogcGljTmFtZSwgLy8gS2l0YSBwaW5qYW0ga29sb20gbG9rYXNpIGJ1YXQgc2ltcGFuIG5hbWEgUElDIHNlbWVudGFyYVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gVVBEQVRFXHJcbiAgICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IGRhdGFUb1NhdmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ1JFQVRFXHJcbiAgICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiBkYXRhVG9TYXZlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaXNpbXBhbiEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQVZFIFBST0tFUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2tlcihpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBNQU5BSkVNRU4gUEVOR1VSVVMgKExFTkdLQVApXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIDEuIEFtYmlsIERhdGEgV2FqaWJcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyAyLiBBbWJpbCBEYXRhIFRhbWJhaGFuIChPcHNpIEEpXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nOyAvLyBBbGFtYXRcclxuICBjb25zdCB0cmFuc3BvcnRhc2kgPSBmb3JtRGF0YS5nZXQoXCJ0cmFuc3BvcnRhc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1vdHRvID0gZm9ybURhdGEuZ2V0KFwibW90dG9cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBDZWsgVGFuZ2dhbCBMYWhpciAoQ29udmVydCBzdHJpbmcga2UgRGF0ZSlcclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gQ2VrIGFwYWthaCBHdXJ1L1BlbWJpbmFcclxuICBjb25zdCBpc0Fkdmlzb3IgPSBmb3JtRGF0YS5nZXQoXCJpc0Fkdmlzb3JcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBWYWxpZGFzaSBEYXNhclxyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMvTklQLCBkYW4gSmFiYXRhbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXM6IGtlbGFzIHx8IFwiLVwiLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIHRnbExhaGlyLFxyXG4gICAgICAgIGZvdG9Vcmw6IGZvdG9VcmwgfHwgbnVsbCxcclxuICAgICAgICBzdGF0dXM6IFwiQUtUSUZcIixcclxuICAgICAgICBpc0Fkdmlzb3I6IGlzQWR2aXNvclxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGJlcmhhc2lsIGRpdGFtYmFoa2FuISDwn5GkXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuYW1iYWggZGF0YS4gTklTIG11bmdraW4gc3VkYWggdGVyZGFmdGFyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgLy8gQW1iaWwgc2VtdWEgZGF0YSBpbnB1dFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBuaXMgPSBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGphYmF0YW4gPSBmb3JtRGF0YS5nZXQoXCJqYWJhdGFuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFLVElGXCIgfCBcIk5PTkFLVElGXCIgfCBcIkFMVU1OSVwiO1xyXG4gIFxyXG4gIC8vIERhdGEgVGFtYmFoYW5cclxuICBjb25zdCBocCA9IGZvcm1EYXRhLmdldChcImhwXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpbnN0YWdyYW0gPSBmb3JtRGF0YS5nZXQoXCJpbnN0YWdyYW1cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRpa3RvayA9IGZvcm1EYXRhLmdldChcInRpa3Rva1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZG9taXNpbGkgPSBmb3JtRGF0YS5nZXQoXCJkb21pc2lsaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdHJhbnNwb3J0YXNpID0gZm9ybURhdGEuZ2V0KFwidHJhbnNwb3J0YXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtb3R0byA9IGZvcm1EYXRhLmdldChcIm1vdHRvXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGNvbnN0IHRnbExhaGlyUmF3ID0gZm9ybURhdGEuZ2V0KFwidGdsTGFoaXJcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRnbExhaGlyID0gdGdsTGFoaXJSYXcgPyBuZXcgRGF0ZSh0Z2xMYWhpclJhdykgOiB1bmRlZmluZWQ7IC8vIFBha2FpIHVuZGVmaW5lZCBiaWFyIGdhayBrZXJlc2V0IG51bGwga2FsYXUgZ2FrIGRpaXNpXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgbmlzLFxyXG4gICAgICAgIGtlbGFzLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBocCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgdGlrdG9rLFxyXG4gICAgICAgIGRvbWlzaWxpLFxyXG4gICAgICAgIHRyYW5zcG9ydGFzaSxcclxuICAgICAgICBtb3R0byxcclxuICAgICAgICAvLyBVcGRhdGUgdGFuZ2dhbCBsYWhpciBjdW1hIGthbGF1IGFkYSBpbnB1dCBiYXJ1XHJcbiAgICAgICAgLi4uKHRnbExhaGlyICYmIHsgdGdsTGFoaXIgfSksXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvdG8gY3VtYSBrYWxhdSBhZGEgZm90byBiYXJ1IHlhbmcgZGlraXJpbVxyXG4gICAgICAgIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIHBlbmd1cnVzIGRpcGVyYmFydWkhIPCfk51cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IGlkQ2FyZERlc2lnbjogZGVzaWduVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgLy8gUmVmcmVzaCBoYWxhbWFuIElEIENhcmRcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBJRCBDQVJEIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJZENhcmRCYWNrZ3JvdW5kKGltYWdlVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIEtpdGEgcGFrdSBkaSBJRCA9IDEsIGthcmVuYSBpbmkgc2V0dGluZ2FuIGdsb2JhbCAoY3VtYSBhZGEgMSBiYXJpcyBkYXRhKVxyXG4gICAgYXdhaXQgcHJpc21hLmFwcENvbmZpZy51cHNlcnQoe1xyXG4gICAgICB3aGVyZTogeyBpZDogMSB9LFxyXG4gICAgICB1cGRhdGU6IHsgaWRDYXJkQmFja0ltYWdlOiBpbWFnZVVybCB9LFxyXG4gICAgICBjcmVhdGU6IHsgaWQ6IDEsIGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pZGNhcmRcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQVZFIEJHIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDcuIFNJU1RFTSBBQlNFTlNJIChTQ0FOTkVSKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZykge1xyXG4gIGlmICghbmlzKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJRUiBDb2RlIGtvc29uZyFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gMS4gQ2FyaSBQZW5ndXJ1cyBiZXJkYXNhcmthbiBOSVNcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBuaXM6IG5pcyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwZW5ndXJ1cykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLinYwgUVIgQ29kZSBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGVuZ3VydXMuc3RhdHVzICE9PSBcIkFLVElGXCIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4pqg77iPIEFuZ2dvdGEgVGlkYWsgQWt0aWYvQWx1bW5pXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBDZWsgYXBha2FoIHN1ZGFoIGFic2VuIGhhcmkgaW5pPyAoT3BzaW9uYWw6IENlZ2FoIHNwYW0gc2NhbilcclxuICAgIGNvbnN0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdG9kYXlTdGFydC5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9kYXlFbmQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdG9kYXlFbmQuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcclxuXHJcbiAgICBjb25zdCBleGlzdGluZ0xvZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsXHJcbiAgICAgICAgdGFuZ2dhbDoge1xyXG4gICAgICAgICAgZ3RlOiB0b2RheVN0YXJ0LFxyXG4gICAgICAgICAgbHRlOiB0b2RheUVuZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nTG9nKSB7XHJcbiAgICAgIC8vIEthbGF1IHN1ZGFoIGFic2VuLCBraXRhIHRldGFwIHJldHVybiBzdWNjZXNzIHRhcGkga2FzaWggaW5mbyBcIlN1ZGFoIEFic2VuXCJcclxuICAgICAgLy8gQmlhciBVSSB0ZXRhcCBtZW5hbXBpbGthbiBwcm9maWxueWEsIHRhcGkgc3RhdHVzbnlhIGJlZGEuXHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiS2FtdSBzdWRhaCBhYnNlbiBoYXJpIGluaSEg8J+RjFwiLCBcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgbmFtZTogcGVuZ3VydXMubmFtYSxcclxuICAgICAgICAgICByb2xlOiBwZW5ndXJ1cy5qYWJhdGFuLFxyXG4gICAgICAgICAgIGltYWdlOiBwZW5ndXJ1cy5mb3RvVXJsLFxyXG4gICAgICAgICAgIHN0YXR1czogXCJEVVBMSUNBVEVcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4gU2ltcGFuIGtlIFRhYmVsIEFic2Vuc2lcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwZW5ndXJ1c0lkOiBwZW5ndXJ1cy5pZCxcclxuICAgICAgICBrZWdpYXRhbjogXCJBYnNlbnNpIEhhcmlhblwiLCAvLyBTZW1lbnRhcmEgaGFyZGNvZGUgZHVsdVxyXG4gICAgICAgIHN0YXR1czogXCJIQURJUlwiLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA0LiBSZXR1cm4gRGF0YSBQZW5ndXJ1cyBrZSBGcm9udGVuZFxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBtZXNzYWdlOiBcIkFic2Vuc2kgQmVyaGFzaWwhIOKchVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgIG5hbWU6IHBlbmd1cnVzLm5hbWEsXHJcbiAgICAgICAgIHJvbGU6IHBlbmd1cnVzLmphYmF0YW4sXHJcbiAgICAgICAgIGltYWdlOiBwZW5ndXJ1cy5mb3RvVXJsLFxyXG4gICAgICAgICBzdGF0dXM6IFwiSEFESVJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNDQU4gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlcnZlciBFcnJvci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDguIE1BTkFKRU1FTiBLRVVBTkdBTiAoS0FTICYgQU5HR0FSQU4pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gMS4gQ2F0YXQgVHJhbnNha3NpIEthcyBVbXVtXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5vbWluYWwgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcclxuICBjb25zdCB0aXBlID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIlBFTUFTVUtBTlwiIHwgXCJQRU5HRUxVQVJBTlwiO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBwaWMgPSBmb3JtRGF0YS5nZXQoXCJwaWNcIikgYXMgc3RyaW5nOyAvLyBLZXRlcmFuZ2FuIFBJQ1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBub21pbmFsLFxyXG4gICAgICAgIHRpcGUsXHJcbiAgICAgICAga2F0ZWdvcmksXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAga2V0ZXJhbmdhbjogYFBJQzogJHtwaWN9YCwgLy8gU2ltcGFuIFBJQyBkaSBrZXRlcmFuZ2FuXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlRyYW5zYWtzaSBiZXJoYXNpbCBkaWNhdGF0ISDwn5KwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuY2F0YXQgdHJhbnNha3NpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBCdWthIEFuZ2dhcmFuIEV2ZW50IEJhcnUgKFBpbmRhaCBCdWt1OiBLYXMgVW11bSAtPiBFdmVudClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50QnVkZ2V0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWFFdmVudCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBidWRnZXQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBBLiBDYXRhdCBQRU5HRUxVQVJBTiBkaSBLYXMgVW11bVxyXG4gICAgYXdhaXQgcHJpc21hLmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bDogYE1vZGFsIEV2ZW50OiAke25hbWFFdmVudH1gLFxyXG4gICAgICAgIG5vbWluYWw6IGJ1ZGdldCxcclxuICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAga2F0ZWdvcmk6IFwiQW5nZ2FyYW4gRXZlbnRcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBrZXRlcmFuZ2FuOiBcIkFsb2thc2kgZGFuYSBrZSBldmVudCBiYXJ1XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCLiBCdWF0IERhdGEgUHJva2VyIEJhcnUgKFN0YXR1czogQUNUSVZFKVxyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogbmFtYUV2ZW50LFxyXG4gICAgICAgIGFuZ2dhcmFuOiBidWRnZXQsXHJcbiAgICAgICAgYW5nZ2FyYW5UZXJwYWthaTogMCxcclxuICAgICAgICBzdGF0dXM6IFwiSU5fUFJPR1JFU1NcIiwgLy8gQW5nZ2FwIGV2ZW50IHNlZGFuZyBqYWxhblxyXG4gICAgICAgIGRpdmlzaTogXCJLZXBhbml0aWFhblwiLCAvLyBEZWZhdWx0IGRpdmlzaVxyXG4gICAgICAgIGRlYWRsaW5lOiBuZXcgRGF0ZShkYXRlU3RyKSwgLy8gU2VtZW50YXJhIHBha2FpIHRnbCB0cmFuc2Frc2lcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFuZ2dhcmFuIEV2ZW50IGJlcmhhc2lsIGRpYnVrYSEg8J+OiVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1a2EgYW5nZ2FyYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIENhdGF0IFRyYW5zYWtzaSBQZW5nZWx1YXJhbiBFdmVudFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZXZlbnRJZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJldmVudElkXCIpKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gQS4gU2ltcGFuIFRyYW5zYWtzaSAoTGlua2VkIGtlIFByb2tlcklEKVxyXG4gICAgYXdhaXQgcHJpc21hLmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBub21pbmFsLFxyXG4gICAgICAgIHRpcGU6IFwiUEVOR0VMVUFSQU5cIixcclxuICAgICAgICBrYXRlZ29yaTogXCJQZW5nZWx1YXJhbiBFdmVudFwiLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgIHByb2tlcklkOiBldmVudElkLCAvLyBMaW5rIGtlIEV2ZW50XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCLiBVcGRhdGUgJ2FuZ2dhcmFuVGVycGFrYWknIGRpIHRhYmVsIFByb2tlclxyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IG5vbWluYWwgfSAvLyBUYW1iYWggb3RvbWF0aXNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmdlbHVhcmFuIGV2ZW50IGRpY2F0YXQhIPCfp75cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YSBldmVudC5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDkuIE1BTkFKRU1FTiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gMS4gVGFtYmFoL0VkaXQgQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSW52ZW50YXJpcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb2RlID0gZm9ybURhdGEuZ2V0KFwiY29kZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaGFyZ2EgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikpO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc2VyaWFsID0gZm9ybURhdGEuZ2V0KFwic2VyaWFsXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpZFJhdykge1xyXG4gICAgICAvLyBFZGl0XHJcbiAgICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihpZFJhdykgfSxcclxuICAgICAgICBkYXRhOiB7IG5hbWEsIGtvZGUsIGthdGVnb3JpLCBoYXJnYSwgc2VyaWFsTnVtOiBzZXJpYWwsIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlXHJcbiAgICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogeyBcclxuICAgICAgICAgICBuYW1hLCBrb2RlLCBrYXRlZ29yaSwgaGFyZ2EsIHNlcmlhbE51bTogc2VyaWFsLCBmb3RvVXJsLCBcclxuICAgICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCIsIGtvbmRpc2k6IFwiQmFpa1wiIFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIGFzZXQgdGVyc2ltcGFuISDwn5OmXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGFzZXQuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEhhcHVzIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW52ZW50YXJpcyhpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4gUGluamFtIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGluamFtQmFyYW5nKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBwZW1pbmphbSA9IGZvcm1EYXRhLmdldChcImJvcnJvd2VyXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IFwiQk9SUk9XRURcIixcclxuICAgICAgICBwZW1pbmphbTogcGVtaW5qYW0sXHJcbiAgICAgICAgdGdsUGluamFtOiBuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFyYW5nIGJlcmhhc2lsIGRpcGluamFtISDwn5WSXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcHJvc2VzIHBlbWluamFtYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDQuIEtlbWJhbGlrYW4gQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBrZW1iYWxpa2FuQmFyYW5nKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBrb25kaXNpID0gZm9ybURhdGEuZ2V0KFwiY29uZGl0aW9uXCIpIGFzIHN0cmluZztcclxuICBcclxuICB0cnkge1xyXG4gICAgLy8gQW1iaWwgZGF0YSBiYXJhbmcgZHVsdSBidWF0IHRhdSBzaWFwYSBwZW1pbmphbSB0ZXJha2hpclxyXG4gICAgY29uc3QgYmFyYW5nID0gYXdhaXQgcHJpc21hLmludmVudGFyaXMuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICBpZiAoIWJhcmFuZyB8fCAhYmFyYW5nLnBlbWluamFtKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJEYXRhIHRpZGFrIHZhbGlkLlwiIH07XHJcblxyXG4gICAgLy8gQS4gU2ltcGFuIGtlIFJpd2F5YXRcclxuICAgIGF3YWl0IHByaXNtYS5yaXdheWF0QXNldC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaW52ZW50YXJpc0lkOiBpZCxcclxuICAgICAgICBwZW1pbmphbTogYmFyYW5nLnBlbWluamFtLFxyXG4gICAgICAgIHRnbEtlbHVhcjogYmFyYW5nLnRnbFBpbmphbSB8fCBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHRnbEtlbWJhbGk6IG5ldyBEYXRlKCksXHJcbiAgICAgICAga29uZGlzaUtlbWJhbGk6IGtvbmRpc2lcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gUmVzZXQgU3RhdHVzIEJhcmFuZ1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czoga29uZGlzaSA9PT0gXCJSdXNha1wiID8gXCJNQUlOVEVOQU5DRVwiIDogXCJBVkFJTEFCTEVcIixcclxuICAgICAgICBrb25kaXNpOiBrb25kaXNpLFxyXG4gICAgICAgIHBlbWluamFtOiBudWxsLFxyXG4gICAgICAgIHRnbFBpbmphbTogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYXJhbmcgc3VkYWggZGlrZW1iYWxpa2FuISDinIVcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1wcm9zZXMgcGVuZ2VtYmFsaWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMTAuIE1BTkFKRU1FTiBHQUxFUkkgS0VHSUFUQU5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWwgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIEFtYmlsIEpTT04gc3RyaW5nIGRhcmkgZm9ybSBjbGllbnRcclxuICBjb25zdCBpbWFnZXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VzXCIpIGFzIHN0cmluZzsgXHJcblxyXG4gIGlmICghanVkdWwgfHwgIWltYWdlc0pzb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkp1ZHVsIGRhbiBtaW5pbWFsIDEgRm90byB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpZFJhdykge1xyXG4gICAgICAvLyBNT0RFIEVESVRcclxuICAgICAgYXdhaXQgcHJpc21hLmdhbGVyaS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWRSYXcpIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAganVkdWwsIGthdGVnb3JpLCBkZXNrcmlwc2ksXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsKSxcclxuICAgICAgICAgIGltYWdlczogaW1hZ2VzSnNvbiAvLyBTaW1wYW4gc2ViYWdhaSBKU09OIFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBNT0RFIEJBUlVcclxuICAgICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9nYWxlcmlcIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgYmVyaGFzaWwgZGlzaW1wYW4hIPCfk7hcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiR0FMRVJJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW55aW1wYW4gZ2FsZXJpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlR2FsZXJpKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVJBcWdCc0IsK0xBQUEifQ==
}),
"[project]/lib/data:d3185f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventBudget",
    ()=>$$RSC_SERVER_ACTION_15
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40093cc0534a7b898c0900e2b92cedc6cb2a827401":"createEventBudget"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40093cc0534a7b898c0900e2b92cedc6cb2a827401", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createEventBudget");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEhFTFBFUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvbnRlbiA9IGZvcm1EYXRhLmdldChcImtvbnRlblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSAoZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nKSB8fCBcIlVtdW1cIjtcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgaWYgKCFqdWR1bCB8fCAha29udGVuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCAmIEtvbnRlbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2x1ZyA9IGAke3NsdWdpZnkoanVkdWwpfS0ke0RhdGUubm93KCl9YDtcclxuXHJcbiAgLy8gPT09IFBFUkJBSUtBTiBESSBTSU5JID09PVxyXG4gIC8vIDEuIEtpdGEgY2FyaSBkdWx1IHVzZXIgKEFkbWluKSB5YW5nIGFkYSBkaSBkYXRhYmFzZVxyXG4gIC8vIE5hbnRpIGthbGF1IHN1ZGFoIGFkYSBsb2dpbiwga2l0YSBhbWJpbCBkYXJpIHNlc3Npb24gdXNlciB5YW5nIGxvZ2luXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KCk7XHJcblxyXG4gIGlmICghYWRtaW5Vc2VyKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvcjogQmVsdW0gYWRhIFVzZXIvQWRtaW4gZGkgZGF0YWJhc2UhXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhciB8fCBudWxsLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDIuIEh1YnVuZ2thbiBrZSBJRCBVc2VyIHlhbmcgZGl0ZW11a2FuIHRhZGlcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSmFuZ2FuIHBha2FpICdwZW51bGlzOiBcIkFkbWluIE9TSVNcIicsIGl0dSBzYWxhaC5cclxuICAgICAgICBzdGF0dXM6IFwiUFVCTElTSEVEXCIsXHJcbiAgICAgICAgdmlld3M6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9iZXJpdGFcIik7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgdGVyYml0ISDwn5OwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmVyYml0a2FuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgdmFsaWQuXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb250ZW4gPSBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAga29udGVuLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIC4uLihnYW1iYXIgJiYgeyBnYW1iYXIgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaXBlcmJhcnVpISDwn5OdXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCZXJpdGEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDQuIE1BTkFKRU1FTiBQUk9HUkFNIEtFUkpBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVQcm9rZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJzZWtiaWRcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByaW9yaXRhcyA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBhbmdnYXJhbiA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJidWRnZXRcIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBzdGFydERhdGUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgYXMgc3RyaW5nKSA6IG51bGw7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IGZvcm1EYXRhLmdldChcImVuZERhdGVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJlbmREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsO1xyXG4gIGNvbnN0IHBpY05hbWUgPSBmb3JtRGF0YS5nZXQoXCJwaWNcIikgYXMgc3RyaW5nOyAvLyBTZWRlcmhhbmEgZHVsdSwgc2ltcGFuIG5hbWEgUElDIHNiZyB0ZXh0IHNlbWVudGFyYS9sb2thc2lcclxuXHJcbiAgLy8gTWFwcGluZyBTdGF0dXMgTG9naWNcclxuICBsZXQgc3RhdHVzOiBTdGF0dXNQcm9rZXIgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YVRvU2F2ZSA9IHtcclxuICAgICAgbmFtYSxcclxuICAgICAgZGVza3JpcHNpLFxyXG4gICAgICBkaXZpc2ksXHJcbiAgICAgIHByaW9yaXRhcyxcclxuICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgIHByb2dyZXNzLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgZGVhZGxpbmU6IGVuZERhdGUsXHJcbiAgICAgIGxva2FzaTogcGljTmFtZSwgLy8gS2l0YSBwaW5qYW0ga29sb20gbG9rYXNpIGJ1YXQgc2ltcGFuIG5hbWEgUElDIHNlbWVudGFyYVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gVVBEQVRFXHJcbiAgICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IGRhdGFUb1NhdmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ1JFQVRFXHJcbiAgICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiBkYXRhVG9TYXZlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaXNpbXBhbiEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQVZFIFBST0tFUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2tlcihpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBNQU5BSkVNRU4gUEVOR1VSVVMgKExFTkdLQVApXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIDEuIEFtYmlsIERhdGEgV2FqaWJcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyAyLiBBbWJpbCBEYXRhIFRhbWJhaGFuIChPcHNpIEEpXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nOyAvLyBBbGFtYXRcclxuICBjb25zdCB0cmFuc3BvcnRhc2kgPSBmb3JtRGF0YS5nZXQoXCJ0cmFuc3BvcnRhc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1vdHRvID0gZm9ybURhdGEuZ2V0KFwibW90dG9cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBDZWsgVGFuZ2dhbCBMYWhpciAoQ29udmVydCBzdHJpbmcga2UgRGF0ZSlcclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gQ2VrIGFwYWthaCBHdXJ1L1BlbWJpbmFcclxuICBjb25zdCBpc0Fkdmlzb3IgPSBmb3JtRGF0YS5nZXQoXCJpc0Fkdmlzb3JcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBWYWxpZGFzaSBEYXNhclxyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMvTklQLCBkYW4gSmFiYXRhbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXM6IGtlbGFzIHx8IFwiLVwiLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIHRnbExhaGlyLFxyXG4gICAgICAgIGZvdG9Vcmw6IGZvdG9VcmwgfHwgbnVsbCxcclxuICAgICAgICBzdGF0dXM6IFwiQUtUSUZcIixcclxuICAgICAgICBpc0Fkdmlzb3I6IGlzQWR2aXNvclxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGJlcmhhc2lsIGRpdGFtYmFoa2FuISDwn5GkXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuYW1iYWggZGF0YS4gTklTIG11bmdraW4gc3VkYWggdGVyZGFmdGFyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgLy8gQW1iaWwgc2VtdWEgZGF0YSBpbnB1dFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBuaXMgPSBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGphYmF0YW4gPSBmb3JtRGF0YS5nZXQoXCJqYWJhdGFuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFLVElGXCIgfCBcIk5PTkFLVElGXCIgfCBcIkFMVU1OSVwiO1xyXG4gIFxyXG4gIC8vIERhdGEgVGFtYmFoYW5cclxuICBjb25zdCBocCA9IGZvcm1EYXRhLmdldChcImhwXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpbnN0YWdyYW0gPSBmb3JtRGF0YS5nZXQoXCJpbnN0YWdyYW1cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRpa3RvayA9IGZvcm1EYXRhLmdldChcInRpa3Rva1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZG9taXNpbGkgPSBmb3JtRGF0YS5nZXQoXCJkb21pc2lsaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdHJhbnNwb3J0YXNpID0gZm9ybURhdGEuZ2V0KFwidHJhbnNwb3J0YXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtb3R0byA9IGZvcm1EYXRhLmdldChcIm1vdHRvXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGNvbnN0IHRnbExhaGlyUmF3ID0gZm9ybURhdGEuZ2V0KFwidGdsTGFoaXJcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRnbExhaGlyID0gdGdsTGFoaXJSYXcgPyBuZXcgRGF0ZSh0Z2xMYWhpclJhdykgOiB1bmRlZmluZWQ7IC8vIFBha2FpIHVuZGVmaW5lZCBiaWFyIGdhayBrZXJlc2V0IG51bGwga2FsYXUgZ2FrIGRpaXNpXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgbmlzLFxyXG4gICAgICAgIGtlbGFzLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBocCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgdGlrdG9rLFxyXG4gICAgICAgIGRvbWlzaWxpLFxyXG4gICAgICAgIHRyYW5zcG9ydGFzaSxcclxuICAgICAgICBtb3R0byxcclxuICAgICAgICAvLyBVcGRhdGUgdGFuZ2dhbCBsYWhpciBjdW1hIGthbGF1IGFkYSBpbnB1dCBiYXJ1XHJcbiAgICAgICAgLi4uKHRnbExhaGlyICYmIHsgdGdsTGFoaXIgfSksXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvdG8gY3VtYSBrYWxhdSBhZGEgZm90byBiYXJ1IHlhbmcgZGlraXJpbVxyXG4gICAgICAgIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIHBlbmd1cnVzIGRpcGVyYmFydWkhIPCfk51cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IGlkQ2FyZERlc2lnbjogZGVzaWduVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgLy8gUmVmcmVzaCBoYWxhbWFuIElEIENhcmRcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBJRCBDQVJEIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJZENhcmRCYWNrZ3JvdW5kKGltYWdlVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIEtpdGEgcGFrdSBkaSBJRCA9IDEsIGthcmVuYSBpbmkgc2V0dGluZ2FuIGdsb2JhbCAoY3VtYSBhZGEgMSBiYXJpcyBkYXRhKVxyXG4gICAgYXdhaXQgcHJpc21hLmFwcENvbmZpZy51cHNlcnQoe1xyXG4gICAgICB3aGVyZTogeyBpZDogMSB9LFxyXG4gICAgICB1cGRhdGU6IHsgaWRDYXJkQmFja0ltYWdlOiBpbWFnZVVybCB9LFxyXG4gICAgICBjcmVhdGU6IHsgaWQ6IDEsIGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pZGNhcmRcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQVZFIEJHIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDcuIFNJU1RFTSBBQlNFTlNJIChTQ0FOTkVSKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZykge1xyXG4gIGlmICghbmlzKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJRUiBDb2RlIGtvc29uZyFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gMS4gQ2FyaSBQZW5ndXJ1cyBiZXJkYXNhcmthbiBOSVNcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBuaXM6IG5pcyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwZW5ndXJ1cykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLinYwgUVIgQ29kZSBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGVuZ3VydXMuc3RhdHVzICE9PSBcIkFLVElGXCIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4pqg77iPIEFuZ2dvdGEgVGlkYWsgQWt0aWYvQWx1bW5pXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBDZWsgYXBha2FoIHN1ZGFoIGFic2VuIGhhcmkgaW5pPyAoT3BzaW9uYWw6IENlZ2FoIHNwYW0gc2NhbilcclxuICAgIGNvbnN0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdG9kYXlTdGFydC5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9kYXlFbmQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdG9kYXlFbmQuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcclxuXHJcbiAgICBjb25zdCBleGlzdGluZ0xvZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsXHJcbiAgICAgICAgdGFuZ2dhbDoge1xyXG4gICAgICAgICAgZ3RlOiB0b2RheVN0YXJ0LFxyXG4gICAgICAgICAgbHRlOiB0b2RheUVuZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nTG9nKSB7XHJcbiAgICAgIC8vIEthbGF1IHN1ZGFoIGFic2VuLCBraXRhIHRldGFwIHJldHVybiBzdWNjZXNzIHRhcGkga2FzaWggaW5mbyBcIlN1ZGFoIEFic2VuXCJcclxuICAgICAgLy8gQmlhciBVSSB0ZXRhcCBtZW5hbXBpbGthbiBwcm9maWxueWEsIHRhcGkgc3RhdHVzbnlhIGJlZGEuXHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiS2FtdSBzdWRhaCBhYnNlbiBoYXJpIGluaSEg8J+RjFwiLCBcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgbmFtZTogcGVuZ3VydXMubmFtYSxcclxuICAgICAgICAgICByb2xlOiBwZW5ndXJ1cy5qYWJhdGFuLFxyXG4gICAgICAgICAgIGltYWdlOiBwZW5ndXJ1cy5mb3RvVXJsLFxyXG4gICAgICAgICAgIHN0YXR1czogXCJEVVBMSUNBVEVcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4gU2ltcGFuIGtlIFRhYmVsIEFic2Vuc2lcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwZW5ndXJ1c0lkOiBwZW5ndXJ1cy5pZCxcclxuICAgICAgICBrZWdpYXRhbjogXCJBYnNlbnNpIEhhcmlhblwiLCAvLyBTZW1lbnRhcmEgaGFyZGNvZGUgZHVsdVxyXG4gICAgICAgIHN0YXR1czogXCJIQURJUlwiLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA0LiBSZXR1cm4gRGF0YSBQZW5ndXJ1cyBrZSBGcm9udGVuZFxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBtZXNzYWdlOiBcIkFic2Vuc2kgQmVyaGFzaWwhIOKchVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgIG5hbWU6IHBlbmd1cnVzLm5hbWEsXHJcbiAgICAgICAgIHJvbGU6IHBlbmd1cnVzLmphYmF0YW4sXHJcbiAgICAgICAgIGltYWdlOiBwZW5ndXJ1cy5mb3RvVXJsLFxyXG4gICAgICAgICBzdGF0dXM6IFwiSEFESVJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNDQU4gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlcnZlciBFcnJvci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDguIE1BTkFKRU1FTiBLRVVBTkdBTiAoS0FTICYgQU5HR0FSQU4pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gMS4gQ2F0YXQgVHJhbnNha3NpIEthcyBVbXVtXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5vbWluYWwgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcclxuICBjb25zdCB0aXBlID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIlBFTUFTVUtBTlwiIHwgXCJQRU5HRUxVQVJBTlwiO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBwaWMgPSBmb3JtRGF0YS5nZXQoXCJwaWNcIikgYXMgc3RyaW5nOyAvLyBLZXRlcmFuZ2FuIFBJQ1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBub21pbmFsLFxyXG4gICAgICAgIHRpcGUsXHJcbiAgICAgICAga2F0ZWdvcmksXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAga2V0ZXJhbmdhbjogYFBJQzogJHtwaWN9YCwgLy8gU2ltcGFuIFBJQyBkaSBrZXRlcmFuZ2FuXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlRyYW5zYWtzaSBiZXJoYXNpbCBkaWNhdGF0ISDwn5KwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuY2F0YXQgdHJhbnNha3NpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBCdWthIEFuZ2dhcmFuIEV2ZW50IEJhcnUgKFBpbmRhaCBCdWt1OiBLYXMgVW11bSAtPiBFdmVudClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50QnVkZ2V0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWFFdmVudCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBidWRnZXQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBBLiBDYXRhdCBQRU5HRUxVQVJBTiBkaSBLYXMgVW11bVxyXG4gICAgYXdhaXQgcHJpc21hLmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bDogYE1vZGFsIEV2ZW50OiAke25hbWFFdmVudH1gLFxyXG4gICAgICAgIG5vbWluYWw6IGJ1ZGdldCxcclxuICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAga2F0ZWdvcmk6IFwiQW5nZ2FyYW4gRXZlbnRcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBrZXRlcmFuZ2FuOiBcIkFsb2thc2kgZGFuYSBrZSBldmVudCBiYXJ1XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCLiBCdWF0IERhdGEgUHJva2VyIEJhcnUgKFN0YXR1czogQUNUSVZFKVxyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogbmFtYUV2ZW50LFxyXG4gICAgICAgIGFuZ2dhcmFuOiBidWRnZXQsXHJcbiAgICAgICAgYW5nZ2FyYW5UZXJwYWthaTogMCxcclxuICAgICAgICBzdGF0dXM6IFwiSU5fUFJPR1JFU1NcIiwgLy8gQW5nZ2FwIGV2ZW50IHNlZGFuZyBqYWxhblxyXG4gICAgICAgIGRpdmlzaTogXCJLZXBhbml0aWFhblwiLCAvLyBEZWZhdWx0IGRpdmlzaVxyXG4gICAgICAgIGRlYWRsaW5lOiBuZXcgRGF0ZShkYXRlU3RyKSwgLy8gU2VtZW50YXJhIHBha2FpIHRnbCB0cmFuc2Frc2lcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFuZ2dhcmFuIEV2ZW50IGJlcmhhc2lsIGRpYnVrYSEg8J+OiVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1a2EgYW5nZ2FyYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIENhdGF0IFRyYW5zYWtzaSBQZW5nZWx1YXJhbiBFdmVudFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZXZlbnRJZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJldmVudElkXCIpKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gQS4gU2ltcGFuIFRyYW5zYWtzaSAoTGlua2VkIGtlIFByb2tlcklEKVxyXG4gICAgYXdhaXQgcHJpc21hLmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBub21pbmFsLFxyXG4gICAgICAgIHRpcGU6IFwiUEVOR0VMVUFSQU5cIixcclxuICAgICAgICBrYXRlZ29yaTogXCJQZW5nZWx1YXJhbiBFdmVudFwiLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgIHByb2tlcklkOiBldmVudElkLCAvLyBMaW5rIGtlIEV2ZW50XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCLiBVcGRhdGUgJ2FuZ2dhcmFuVGVycGFrYWknIGRpIHRhYmVsIFByb2tlclxyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IG5vbWluYWwgfSAvLyBUYW1iYWggb3RvbWF0aXNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmdlbHVhcmFuIGV2ZW50IGRpY2F0YXQhIPCfp75cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YSBldmVudC5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDkuIE1BTkFKRU1FTiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gMS4gVGFtYmFoL0VkaXQgQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSW52ZW50YXJpcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb2RlID0gZm9ybURhdGEuZ2V0KFwiY29kZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaGFyZ2EgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikpO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc2VyaWFsID0gZm9ybURhdGEuZ2V0KFwic2VyaWFsXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpZFJhdykge1xyXG4gICAgICAvLyBFZGl0XHJcbiAgICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihpZFJhdykgfSxcclxuICAgICAgICBkYXRhOiB7IG5hbWEsIGtvZGUsIGthdGVnb3JpLCBoYXJnYSwgc2VyaWFsTnVtOiBzZXJpYWwsIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlXHJcbiAgICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogeyBcclxuICAgICAgICAgICBuYW1hLCBrb2RlLCBrYXRlZ29yaSwgaGFyZ2EsIHNlcmlhbE51bTogc2VyaWFsLCBmb3RvVXJsLCBcclxuICAgICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCIsIGtvbmRpc2k6IFwiQmFpa1wiIFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIGFzZXQgdGVyc2ltcGFuISDwn5OmXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGFzZXQuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEhhcHVzIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW52ZW50YXJpcyhpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4gUGluamFtIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGluamFtQmFyYW5nKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBwZW1pbmphbSA9IGZvcm1EYXRhLmdldChcImJvcnJvd2VyXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IFwiQk9SUk9XRURcIixcclxuICAgICAgICBwZW1pbmphbTogcGVtaW5qYW0sXHJcbiAgICAgICAgdGdsUGluamFtOiBuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFyYW5nIGJlcmhhc2lsIGRpcGluamFtISDwn5WSXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcHJvc2VzIHBlbWluamFtYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDQuIEtlbWJhbGlrYW4gQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBrZW1iYWxpa2FuQmFyYW5nKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBrb25kaXNpID0gZm9ybURhdGEuZ2V0KFwiY29uZGl0aW9uXCIpIGFzIHN0cmluZztcclxuICBcclxuICB0cnkge1xyXG4gICAgLy8gQW1iaWwgZGF0YSBiYXJhbmcgZHVsdSBidWF0IHRhdSBzaWFwYSBwZW1pbmphbSB0ZXJha2hpclxyXG4gICAgY29uc3QgYmFyYW5nID0gYXdhaXQgcHJpc21hLmludmVudGFyaXMuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICBpZiAoIWJhcmFuZyB8fCAhYmFyYW5nLnBlbWluamFtKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJEYXRhIHRpZGFrIHZhbGlkLlwiIH07XHJcblxyXG4gICAgLy8gQS4gU2ltcGFuIGtlIFJpd2F5YXRcclxuICAgIGF3YWl0IHByaXNtYS5yaXdheWF0QXNldC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaW52ZW50YXJpc0lkOiBpZCxcclxuICAgICAgICBwZW1pbmphbTogYmFyYW5nLnBlbWluamFtLFxyXG4gICAgICAgIHRnbEtlbHVhcjogYmFyYW5nLnRnbFBpbmphbSB8fCBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHRnbEtlbWJhbGk6IG5ldyBEYXRlKCksXHJcbiAgICAgICAga29uZGlzaUtlbWJhbGk6IGtvbmRpc2lcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gUmVzZXQgU3RhdHVzIEJhcmFuZ1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czoga29uZGlzaSA9PT0gXCJSdXNha1wiID8gXCJNQUlOVEVOQU5DRVwiIDogXCJBVkFJTEFCTEVcIixcclxuICAgICAgICBrb25kaXNpOiBrb25kaXNpLFxyXG4gICAgICAgIHBlbWluamFtOiBudWxsLFxyXG4gICAgICAgIHRnbFBpbmphbTogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYXJhbmcgc3VkYWggZGlrZW1iYWxpa2FuISDinIVcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1wcm9zZXMgcGVuZ2VtYmFsaWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMTAuIE1BTkFKRU1FTiBHQUxFUkkgS0VHSUFUQU5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWwgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIEFtYmlsIEpTT04gc3RyaW5nIGRhcmkgZm9ybSBjbGllbnRcclxuICBjb25zdCBpbWFnZXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VzXCIpIGFzIHN0cmluZzsgXHJcblxyXG4gIGlmICghanVkdWwgfHwgIWltYWdlc0pzb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkp1ZHVsIGRhbiBtaW5pbWFsIDEgRm90byB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpZFJhdykge1xyXG4gICAgICAvLyBNT0RFIEVESVRcclxuICAgICAgYXdhaXQgcHJpc21hLmdhbGVyaS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWRSYXcpIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAganVkdWwsIGthdGVnb3JpLCBkZXNrcmlwc2ksXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsKSxcclxuICAgICAgICAgIGltYWdlczogaW1hZ2VzSnNvbiAvLyBTaW1wYW4gc2ViYWdhaSBKU09OIFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBNT0RFIEJBUlVcclxuICAgICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9nYWxlcmlcIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgYmVyaGFzaWwgZGlzaW1wYW4hIPCfk7hcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiR0FMRVJJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW55aW1wYW4gZ2FsZXJpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlR2FsZXJpKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1JBaWlCc0IsZ01BQUEifQ==
}),
"[project]/lib/data:b5db3e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventTrx",
    ()=>$$RSC_SERVER_ACTION_16
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409709da5f2a3420e97b519786a13d3fc9253f7543":"createEventTrx"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("409709da5f2a3420e97b519786a13d3fc9253f7543", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createEventTrx");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEhFTFBFUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvbnRlbiA9IGZvcm1EYXRhLmdldChcImtvbnRlblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSAoZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nKSB8fCBcIlVtdW1cIjtcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgaWYgKCFqdWR1bCB8fCAha29udGVuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCAmIEtvbnRlbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2x1ZyA9IGAke3NsdWdpZnkoanVkdWwpfS0ke0RhdGUubm93KCl9YDtcclxuXHJcbiAgLy8gPT09IFBFUkJBSUtBTiBESSBTSU5JID09PVxyXG4gIC8vIDEuIEtpdGEgY2FyaSBkdWx1IHVzZXIgKEFkbWluKSB5YW5nIGFkYSBkaSBkYXRhYmFzZVxyXG4gIC8vIE5hbnRpIGthbGF1IHN1ZGFoIGFkYSBsb2dpbiwga2l0YSBhbWJpbCBkYXJpIHNlc3Npb24gdXNlciB5YW5nIGxvZ2luXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KCk7XHJcblxyXG4gIGlmICghYWRtaW5Vc2VyKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvcjogQmVsdW0gYWRhIFVzZXIvQWRtaW4gZGkgZGF0YWJhc2UhXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhciB8fCBudWxsLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDIuIEh1YnVuZ2thbiBrZSBJRCBVc2VyIHlhbmcgZGl0ZW11a2FuIHRhZGlcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSmFuZ2FuIHBha2FpICdwZW51bGlzOiBcIkFkbWluIE9TSVNcIicsIGl0dSBzYWxhaC5cclxuICAgICAgICBzdGF0dXM6IFwiUFVCTElTSEVEXCIsXHJcbiAgICAgICAgdmlld3M6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9iZXJpdGFcIik7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgdGVyYml0ISDwn5OwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmVyYml0a2FuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgdmFsaWQuXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb250ZW4gPSBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAga29udGVuLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIC4uLihnYW1iYXIgJiYgeyBnYW1iYXIgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaXBlcmJhcnVpISDwn5OdXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCZXJpdGEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDQuIE1BTkFKRU1FTiBQUk9HUkFNIEtFUkpBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVQcm9rZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJzZWtiaWRcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByaW9yaXRhcyA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBhbmdnYXJhbiA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJidWRnZXRcIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBzdGFydERhdGUgPSBmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgYXMgc3RyaW5nKSA6IG51bGw7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IGZvcm1EYXRhLmdldChcImVuZERhdGVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJlbmREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsO1xyXG4gIGNvbnN0IHBpY05hbWUgPSBmb3JtRGF0YS5nZXQoXCJwaWNcIikgYXMgc3RyaW5nOyAvLyBTZWRlcmhhbmEgZHVsdSwgc2ltcGFuIG5hbWEgUElDIHNiZyB0ZXh0IHNlbWVudGFyYS9sb2thc2lcclxuXHJcbiAgLy8gTWFwcGluZyBTdGF0dXMgTG9naWNcclxuICBsZXQgc3RhdHVzOiBTdGF0dXNQcm9rZXIgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YVRvU2F2ZSA9IHtcclxuICAgICAgbmFtYSxcclxuICAgICAgZGVza3JpcHNpLFxyXG4gICAgICBkaXZpc2ksXHJcbiAgICAgIHByaW9yaXRhcyxcclxuICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgIHByb2dyZXNzLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgZGVhZGxpbmU6IGVuZERhdGUsXHJcbiAgICAgIGxva2FzaTogcGljTmFtZSwgLy8gS2l0YSBwaW5qYW0ga29sb20gbG9rYXNpIGJ1YXQgc2ltcGFuIG5hbWEgUElDIHNlbWVudGFyYVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gVVBEQVRFXHJcbiAgICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IGRhdGFUb1NhdmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ1JFQVRFXHJcbiAgICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiBkYXRhVG9TYXZlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlByb2tlciBiZXJoYXNpbCBkaXNpbXBhbiEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQVZFIFBST0tFUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2tlcihpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBNQU5BSkVNRU4gUEVOR1VSVVMgKExFTkdLQVApXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIDEuIEFtYmlsIERhdGEgV2FqaWJcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyAyLiBBbWJpbCBEYXRhIFRhbWJhaGFuIChPcHNpIEEpXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nOyAvLyBBbGFtYXRcclxuICBjb25zdCB0cmFuc3BvcnRhc2kgPSBmb3JtRGF0YS5nZXQoXCJ0cmFuc3BvcnRhc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1vdHRvID0gZm9ybURhdGEuZ2V0KFwibW90dG9cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBDZWsgVGFuZ2dhbCBMYWhpciAoQ29udmVydCBzdHJpbmcga2UgRGF0ZSlcclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gQ2VrIGFwYWthaCBHdXJ1L1BlbWJpbmFcclxuICBjb25zdCBpc0Fkdmlzb3IgPSBmb3JtRGF0YS5nZXQoXCJpc0Fkdmlzb3JcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBWYWxpZGFzaSBEYXNhclxyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMvTklQLCBkYW4gSmFiYXRhbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXM6IGtlbGFzIHx8IFwiLVwiLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIHRnbExhaGlyLFxyXG4gICAgICAgIGZvdG9Vcmw6IGZvdG9VcmwgfHwgbnVsbCxcclxuICAgICAgICBzdGF0dXM6IFwiQUtUSUZcIixcclxuICAgICAgICBpc0Fkdmlzb3I6IGlzQWR2aXNvclxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGJlcmhhc2lsIGRpdGFtYmFoa2FuISDwn5GkXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuYW1iYWggZGF0YS4gTklTIG11bmdraW4gc3VkYWggdGVyZGFmdGFyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGlkUmF3KTtcclxuXHJcbiAgLy8gQW1iaWwgc2VtdWEgZGF0YSBpbnB1dFxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBuaXMgPSBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGphYmF0YW4gPSBmb3JtRGF0YS5nZXQoXCJqYWJhdGFuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFLVElGXCIgfCBcIk5PTkFLVElGXCIgfCBcIkFMVU1OSVwiO1xyXG4gIFxyXG4gIC8vIERhdGEgVGFtYmFoYW5cclxuICBjb25zdCBocCA9IGZvcm1EYXRhLmdldChcImhwXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpbnN0YWdyYW0gPSBmb3JtRGF0YS5nZXQoXCJpbnN0YWdyYW1cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRpa3RvayA9IGZvcm1EYXRhLmdldChcInRpa3Rva1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZG9taXNpbGkgPSBmb3JtRGF0YS5nZXQoXCJkb21pc2lsaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdHJhbnNwb3J0YXNpID0gZm9ybURhdGEuZ2V0KFwidHJhbnNwb3J0YXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtb3R0byA9IGZvcm1EYXRhLmdldChcIm1vdHRvXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGNvbnN0IHRnbExhaGlyUmF3ID0gZm9ybURhdGEuZ2V0KFwidGdsTGFoaXJcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRnbExhaGlyID0gdGdsTGFoaXJSYXcgPyBuZXcgRGF0ZSh0Z2xMYWhpclJhdykgOiB1bmRlZmluZWQ7IC8vIFBha2FpIHVuZGVmaW5lZCBiaWFyIGdhayBrZXJlc2V0IG51bGwga2FsYXUgZ2FrIGRpaXNpXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgbmlzLFxyXG4gICAgICAgIGtlbGFzLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBocCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgdGlrdG9rLFxyXG4gICAgICAgIGRvbWlzaWxpLFxyXG4gICAgICAgIHRyYW5zcG9ydGFzaSxcclxuICAgICAgICBtb3R0byxcclxuICAgICAgICAvLyBVcGRhdGUgdGFuZ2dhbCBsYWhpciBjdW1hIGthbGF1IGFkYSBpbnB1dCBiYXJ1XHJcbiAgICAgICAgLi4uKHRnbExhaGlyICYmIHsgdGdsTGFoaXIgfSksXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvdG8gY3VtYSBrYWxhdSBhZGEgZm90byBiYXJ1IHlhbmcgZGlraXJpbVxyXG4gICAgICAgIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIHBlbmd1cnVzIGRpcGVyYmFydWkhIPCfk51cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IGlkQ2FyZERlc2lnbjogZGVzaWduVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgLy8gUmVmcmVzaCBoYWxhbWFuIElEIENhcmRcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBJRCBDQVJEIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJZENhcmRCYWNrZ3JvdW5kKGltYWdlVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIEtpdGEgcGFrdSBkaSBJRCA9IDEsIGthcmVuYSBpbmkgc2V0dGluZ2FuIGdsb2JhbCAoY3VtYSBhZGEgMSBiYXJpcyBkYXRhKVxyXG4gICAgYXdhaXQgcHJpc21hLmFwcENvbmZpZy51cHNlcnQoe1xyXG4gICAgICB3aGVyZTogeyBpZDogMSB9LFxyXG4gICAgICB1cGRhdGU6IHsgaWRDYXJkQmFja0ltYWdlOiBpbWFnZVVybCB9LFxyXG4gICAgICBjcmVhdGU6IHsgaWQ6IDEsIGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pZGNhcmRcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQVZFIEJHIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDcuIFNJU1RFTSBBQlNFTlNJIChTQ0FOTkVSKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZykge1xyXG4gIGlmICghbmlzKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJRUiBDb2RlIGtvc29uZyFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gMS4gQ2FyaSBQZW5ndXJ1cyBiZXJkYXNhcmthbiBOSVNcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBuaXM6IG5pcyB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwZW5ndXJ1cykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLinYwgUVIgQ29kZSBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGVuZ3VydXMuc3RhdHVzICE9PSBcIkFLVElGXCIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4pqg77iPIEFuZ2dvdGEgVGlkYWsgQWt0aWYvQWx1bW5pXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBDZWsgYXBha2FoIHN1ZGFoIGFic2VuIGhhcmkgaW5pPyAoT3BzaW9uYWw6IENlZ2FoIHNwYW0gc2NhbilcclxuICAgIGNvbnN0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdG9kYXlTdGFydC5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9kYXlFbmQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdG9kYXlFbmQuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcclxuXHJcbiAgICBjb25zdCBleGlzdGluZ0xvZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsXHJcbiAgICAgICAgdGFuZ2dhbDoge1xyXG4gICAgICAgICAgZ3RlOiB0b2RheVN0YXJ0LFxyXG4gICAgICAgICAgbHRlOiB0b2RheUVuZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nTG9nKSB7XHJcbiAgICAgIC8vIEthbGF1IHN1ZGFoIGFic2VuLCBraXRhIHRldGFwIHJldHVybiBzdWNjZXNzIHRhcGkga2FzaWggaW5mbyBcIlN1ZGFoIEFic2VuXCJcclxuICAgICAgLy8gQmlhciBVSSB0ZXRhcCBtZW5hbXBpbGthbiBwcm9maWxueWEsIHRhcGkgc3RhdHVzbnlhIGJlZGEuXHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiS2FtdSBzdWRhaCBhYnNlbiBoYXJpIGluaSEg8J+RjFwiLCBcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgbmFtZTogcGVuZ3VydXMubmFtYSxcclxuICAgICAgICAgICByb2xlOiBwZW5ndXJ1cy5qYWJhdGFuLFxyXG4gICAgICAgICAgIGltYWdlOiBwZW5ndXJ1cy5mb3RvVXJsLFxyXG4gICAgICAgICAgIHN0YXR1czogXCJEVVBMSUNBVEVcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4gU2ltcGFuIGtlIFRhYmVsIEFic2Vuc2lcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwZW5ndXJ1c0lkOiBwZW5ndXJ1cy5pZCxcclxuICAgICAgICBrZWdpYXRhbjogXCJBYnNlbnNpIEhhcmlhblwiLCAvLyBTZW1lbnRhcmEgaGFyZGNvZGUgZHVsdVxyXG4gICAgICAgIHN0YXR1czogXCJIQURJUlwiLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA0LiBSZXR1cm4gRGF0YSBQZW5ndXJ1cyBrZSBGcm9udGVuZFxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBtZXNzYWdlOiBcIkFic2Vuc2kgQmVyaGFzaWwhIOKchVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgIG5hbWU6IHBlbmd1cnVzLm5hbWEsXHJcbiAgICAgICAgIHJvbGU6IHBlbmd1cnVzLmphYmF0YW4sXHJcbiAgICAgICAgIGltYWdlOiBwZW5ndXJ1cy5mb3RvVXJsLFxyXG4gICAgICAgICBzdGF0dXM6IFwiSEFESVJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNDQU4gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlcnZlciBFcnJvci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDguIE1BTkFKRU1FTiBLRVVBTkdBTiAoS0FTICYgQU5HR0FSQU4pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gMS4gQ2F0YXQgVHJhbnNha3NpIEthcyBVbXVtXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5vbWluYWwgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcclxuICBjb25zdCB0aXBlID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIlBFTUFTVUtBTlwiIHwgXCJQRU5HRUxVQVJBTlwiO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBwaWMgPSBmb3JtRGF0YS5nZXQoXCJwaWNcIikgYXMgc3RyaW5nOyAvLyBLZXRlcmFuZ2FuIFBJQ1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBub21pbmFsLFxyXG4gICAgICAgIHRpcGUsXHJcbiAgICAgICAga2F0ZWdvcmksXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAga2V0ZXJhbmdhbjogYFBJQzogJHtwaWN9YCwgLy8gU2ltcGFuIFBJQyBkaSBrZXRlcmFuZ2FuXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlRyYW5zYWtzaSBiZXJoYXNpbCBkaWNhdGF0ISDwn5KwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuY2F0YXQgdHJhbnNha3NpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBCdWthIEFuZ2dhcmFuIEV2ZW50IEJhcnUgKFBpbmRhaCBCdWt1OiBLYXMgVW11bSAtPiBFdmVudClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50QnVkZ2V0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWFFdmVudCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBidWRnZXQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBBLiBDYXRhdCBQRU5HRUxVQVJBTiBkaSBLYXMgVW11bVxyXG4gICAgYXdhaXQgcHJpc21hLmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bDogYE1vZGFsIEV2ZW50OiAke25hbWFFdmVudH1gLFxyXG4gICAgICAgIG5vbWluYWw6IGJ1ZGdldCxcclxuICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAga2F0ZWdvcmk6IFwiQW5nZ2FyYW4gRXZlbnRcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBrZXRlcmFuZ2FuOiBcIkFsb2thc2kgZGFuYSBrZSBldmVudCBiYXJ1XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCLiBCdWF0IERhdGEgUHJva2VyIEJhcnUgKFN0YXR1czogQUNUSVZFKVxyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogbmFtYUV2ZW50LFxyXG4gICAgICAgIGFuZ2dhcmFuOiBidWRnZXQsXHJcbiAgICAgICAgYW5nZ2FyYW5UZXJwYWthaTogMCxcclxuICAgICAgICBzdGF0dXM6IFwiSU5fUFJPR1JFU1NcIiwgLy8gQW5nZ2FwIGV2ZW50IHNlZGFuZyBqYWxhblxyXG4gICAgICAgIGRpdmlzaTogXCJLZXBhbml0aWFhblwiLCAvLyBEZWZhdWx0IGRpdmlzaVxyXG4gICAgICAgIGRlYWRsaW5lOiBuZXcgRGF0ZShkYXRlU3RyKSwgLy8gU2VtZW50YXJhIHBha2FpIHRnbCB0cmFuc2Frc2lcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFuZ2dhcmFuIEV2ZW50IGJlcmhhc2lsIGRpYnVrYSEg8J+OiVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1a2EgYW5nZ2FyYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIENhdGF0IFRyYW5zYWtzaSBQZW5nZWx1YXJhbiBFdmVudFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZXZlbnRJZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJldmVudElkXCIpKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gQS4gU2ltcGFuIFRyYW5zYWtzaSAoTGlua2VkIGtlIFByb2tlcklEKVxyXG4gICAgYXdhaXQgcHJpc21hLmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBqdWR1bCxcclxuICAgICAgICBub21pbmFsLFxyXG4gICAgICAgIHRpcGU6IFwiUEVOR0VMVUFSQU5cIixcclxuICAgICAgICBrYXRlZ29yaTogXCJQZW5nZWx1YXJhbiBFdmVudFwiLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgIHByb2tlcklkOiBldmVudElkLCAvLyBMaW5rIGtlIEV2ZW50XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCLiBVcGRhdGUgJ2FuZ2dhcmFuVGVycGFrYWknIGRpIHRhYmVsIFByb2tlclxyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogZXZlbnRJZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IG5vbWluYWwgfSAvLyBUYW1iYWggb3RvbWF0aXNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmdlbHVhcmFuIGV2ZW50IGRpY2F0YXQhIPCfp75cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YSBldmVudC5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDkuIE1BTkFKRU1FTiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gMS4gVGFtYmFoL0VkaXQgQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSW52ZW50YXJpcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb2RlID0gZm9ybURhdGEuZ2V0KFwiY29kZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaGFyZ2EgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikpO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc2VyaWFsID0gZm9ybURhdGEuZ2V0KFwic2VyaWFsXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpZFJhdykge1xyXG4gICAgICAvLyBFZGl0XHJcbiAgICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihpZFJhdykgfSxcclxuICAgICAgICBkYXRhOiB7IG5hbWEsIGtvZGUsIGthdGVnb3JpLCBoYXJnYSwgc2VyaWFsTnVtOiBzZXJpYWwsIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlXHJcbiAgICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogeyBcclxuICAgICAgICAgICBuYW1hLCBrb2RlLCBrYXRlZ29yaSwgaGFyZ2EsIHNlcmlhbE51bTogc2VyaWFsLCBmb3RvVXJsLCBcclxuICAgICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCIsIGtvbmRpc2k6IFwiQmFpa1wiIFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIGFzZXQgdGVyc2ltcGFuISDwn5OmXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGFzZXQuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEhhcHVzIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW52ZW50YXJpcyhpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4gUGluamFtIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGluamFtQmFyYW5nKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBwZW1pbmphbSA9IGZvcm1EYXRhLmdldChcImJvcnJvd2VyXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IFwiQk9SUk9XRURcIixcclxuICAgICAgICBwZW1pbmphbTogcGVtaW5qYW0sXHJcbiAgICAgICAgdGdsUGluamFtOiBuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFyYW5nIGJlcmhhc2lsIGRpcGluamFtISDwn5WSXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcHJvc2VzIHBlbWluamFtYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDQuIEtlbWJhbGlrYW4gQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBrZW1iYWxpa2FuQmFyYW5nKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBrb25kaXNpID0gZm9ybURhdGEuZ2V0KFwiY29uZGl0aW9uXCIpIGFzIHN0cmluZztcclxuICBcclxuICB0cnkge1xyXG4gICAgLy8gQW1iaWwgZGF0YSBiYXJhbmcgZHVsdSBidWF0IHRhdSBzaWFwYSBwZW1pbmphbSB0ZXJha2hpclxyXG4gICAgY29uc3QgYmFyYW5nID0gYXdhaXQgcHJpc21hLmludmVudGFyaXMuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICBpZiAoIWJhcmFuZyB8fCAhYmFyYW5nLnBlbWluamFtKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJEYXRhIHRpZGFrIHZhbGlkLlwiIH07XHJcblxyXG4gICAgLy8gQS4gU2ltcGFuIGtlIFJpd2F5YXRcclxuICAgIGF3YWl0IHByaXNtYS5yaXdheWF0QXNldC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaW52ZW50YXJpc0lkOiBpZCxcclxuICAgICAgICBwZW1pbmphbTogYmFyYW5nLnBlbWluamFtLFxyXG4gICAgICAgIHRnbEtlbHVhcjogYmFyYW5nLnRnbFBpbmphbSB8fCBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHRnbEtlbWJhbGk6IG5ldyBEYXRlKCksXHJcbiAgICAgICAga29uZGlzaUtlbWJhbGk6IGtvbmRpc2lcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQi4gUmVzZXQgU3RhdHVzIEJhcmFuZ1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czoga29uZGlzaSA9PT0gXCJSdXNha1wiID8gXCJNQUlOVEVOQU5DRVwiIDogXCJBVkFJTEFCTEVcIixcclxuICAgICAgICBrb25kaXNpOiBrb25kaXNpLFxyXG4gICAgICAgIHBlbWluamFtOiBudWxsLFxyXG4gICAgICAgIHRnbFBpbmphbTogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYXJhbmcgc3VkYWggZGlrZW1iYWxpa2FuISDinIVcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1wcm9zZXMgcGVuZ2VtYmFsaWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMTAuIE1BTkFKRU1FTiBHQUxFUkkgS0VHSUFUQU5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWwgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIEFtYmlsIEpTT04gc3RyaW5nIGRhcmkgZm9ybSBjbGllbnRcclxuICBjb25zdCBpbWFnZXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VzXCIpIGFzIHN0cmluZzsgXHJcblxyXG4gIGlmICghanVkdWwgfHwgIWltYWdlc0pzb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkp1ZHVsIGRhbiBtaW5pbWFsIDEgRm90byB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpZFJhdykge1xyXG4gICAgICAvLyBNT0RFIEVESVRcclxuICAgICAgYXdhaXQgcHJpc21hLmdhbGVyaS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWRSYXcpIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAganVkdWwsIGthdGVnb3JpLCBkZXNrcmlwc2ksXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsKSxcclxuICAgICAgICAgIGltYWdlczogaW1hZ2VzSnNvbiAvLyBTaW1wYW4gc2ViYWdhaSBKU09OIFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBNT0RFIEJBUlVcclxuICAgICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9nYWxlcmlcIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgYmVyaGFzaWwgZGlzaW1wYW4hIPCfk7hcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiR0FMRVJJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW55aW1wYW4gZ2FsZXJpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlR2FsZXJpKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVJBdWtCc0IsNkxBQUEifQ==
}),
"[project]/app/admin/kas/KeuanganClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeuanganClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDownCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-ssr] (ecmascript)");
// Import Action Server
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$6af726__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:6af726 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$d3185f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:d3185f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$b5db3e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:b5db3e [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
// DEFINISI LANGKAH TUR (Sama kayak punya Koh)
const kasTourSteps = [
    {
        target: '.tour-kas-header',
        content: 'Pusat pengelolaan dana organisasi.',
        disableBeacon: true
    },
    {
        target: '.tour-tab-switcher',
        content: 'Pindah antara Kas Umum & Anggaran Event.'
    },
    {
        target: '.tour-stats-bar',
        content: 'Pantau Saldo & Arus Kas real-time.',
        placement: 'bottom'
    },
    {
        target: '.tour-trx-buttons',
        content: 'Catat transaksi baru.'
    },
    {
        target: '.tour-trx-table',
        content: 'Riwayat transaksi tercatat di sini.'
    }
];
const formatIDR = (val)=>new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(val);
function KeuanganClient({ generalTrx, events }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('general');
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // STATE MODAL & FORM
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalType, setModalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('general_in');
    const [selectedEventId, setSelectedEventId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        amount: "",
        date: "",
        category: "",
        pic: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    // HITUNG SALDO KAS UMUM (Client Side Calculation)
    const totalMasuk = generalTrx.filter((t)=>t.type === 'PEMASUKAN').reduce((acc, curr)=>acc + curr.amount, 0);
    const totalKeluar = generalTrx.filter((t)=>t.type === 'PENGELUARAN').reduce((acc, curr)=>acc + curr.amount, 0);
    const saldoUmum = totalMasuk - totalKeluar;
    // --- ACTIONS ---
    const handleOpenGeneralModal = (type)=>{
        setModalType(type === 'in' ? 'general_in' : 'general_out');
        setFormData({
            title: "",
            amount: "",
            date: new Date().toISOString().split('T')[0],
            category: "Umum",
            pic: ""
        });
        setIsModalOpen(true);
    };
    const handleOpenNewEventModal = ()=>{
        setModalType('new_event');
        setFormData({
            title: "",
            amount: "",
            date: new Date().toISOString().split('T')[0]
        });
        setIsModalOpen(true);
    };
    const handleOpenEventTrxModal = (eventId)=>{
        setSelectedEventId(eventId);
        setModalType('event_trx');
        setFormData({
            title: "",
            amount: "",
            date: new Date().toISOString().split('T')[0]
        });
        setIsModalOpen(true);
    };
    // --- SUBMIT HANDLER (TERKONEKSI DB) ---
    const handleSubmit = async ()=>{
        if (!formData.title || !formData.amount) return alert("Data tidak lengkap!");
        setIsSubmitting(true);
        const data = new FormData();
        data.append("title", formData.title);
        data.append("amount", formData.amount);
        data.append("date", formData.date);
        let result;
        try {
            if (modalType === 'general_in' || modalType === 'general_out') {
                data.append("type", modalType === 'general_in' ? "PEMASUKAN" : "PENGELUARAN");
                data.append("category", formData.category);
                data.append("pic", formData.pic || "Admin");
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$6af726__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createGeneralTrx"])(data);
            } else if (modalType === 'new_event') {
                if (Number(formData.amount) > saldoUmum) {
                    setIsSubmitting(false);
                    return alert("Saldo Kas Umum tidak cukup!");
                }
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$d3185f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createEventBudget"])(data);
            } else if (modalType === 'event_trx' && selectedEventId) {
                data.append("eventId", selectedEventId.toString());
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$b5db3e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createEventTrx"])(data);
            }
            if (result?.success) {
                alert(result.message);
                setIsModalOpen(false);
                window.location.reload();
            } else {
                alert("Gagal: " + result?.message);
            }
        } catch (e) {
            console.error(e);
            alert("Terjadi kesalahan.");
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh-6rem)] flex flex-col gap-6 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-end gap-4 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-black font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-kas-header",
                                        children: [
                                            "Keuangan OSIS ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full",
                                                children: "💰"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 117,
                                        columnNumber: 16
                                    }, this),
                                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        steps: kasTourSteps
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 120,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 dark:text-slate-400 text-sm font-medium mt-1",
                                children: "Kelola Kas Umum dan Anggaran Kegiatan."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                        lineNumber: 115,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-slate-100 dark:bg-[#1e293b] p-1 rounded-xl border border-slate-200 dark:border-white/10 tour-tab-switcher",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('general'),
                                className: `px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'general' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`,
                                children: "Buku Kas Umum"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('events'),
                                className: `px-6 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'events' ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`,
                                children: "Anggaran Event"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                        lineNumber: 125,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm overflow-hidden flex flex-col",
                children: [
                    activeTab === 'general' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-slate-100 dark:border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/50 dark:bg-white/5 tour-stats-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 119
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 138,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase font-bold text-slate-500",
                                                        children: "Saldo Akhir"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-black text-slate-800 dark:text-white",
                                                        children: formatIDR(saldoUmum)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 104
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 139,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircle$3e$__["ArrowUpCircle"], {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 123
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 142,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase font-bold text-slate-500",
                                                        children: "Pemasukan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-green-600",
                                                        children: formatIDR(totalMasuk)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 102
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 143,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownCircle$3e$__["ArrowDownCircle"], {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 115
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 146,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase font-bold text-slate-500",
                                                        children: "Pengeluaran"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-red-600",
                                                        children: formatIDR(totalKeluar)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 104
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 147,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 145,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 136,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 flex justify-between items-center border-b border-slate-100 dark:border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-slate-700 dark:text-white",
                                        children: "Riwayat Transaksi"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 tour-trx-buttons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleOpenGeneralModal('in'),
                                                className: "px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 193
                                                    }, this),
                                                    " Uang Masuk"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 154,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleOpenGeneralModal('out'),
                                                className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownCircle$3e$__["ArrowDownCircle"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 190
                                                    }, this),
                                                    " Uang Keluar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 155,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 151,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-auto custom-scrollbar p-2 tour-trx-table",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left border-collapse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-slate-50 dark:bg-white/5 sticky top-0 z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-[10px] font-black text-slate-400 uppercase",
                                                        children: "Tanggal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-[10px] font-black text-slate-400 uppercase",
                                                        children: "Keterangan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-[10px] font-black text-slate-400 uppercase",
                                                        children: "Kategori"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-[10px] font-black text-slate-400 uppercase text-right",
                                                        children: "Nominal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 162,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 161,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-slate-50 dark:divide-white/5",
                                            children: generalTrx.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 4,
                                                    className: "p-8 text-center text-slate-400 text-xs",
                                                    children: "Belum ada transaksi"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 171,
                                                columnNumber: 29
                                            }, this) : generalTrx.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-slate-50 dark:hover:bg-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-xs font-bold text-slate-600 dark:text-slate-300",
                                                            children: t.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 35
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-bold text-slate-800 dark:text-white",
                                                                    children: t.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 55
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-slate-400",
                                                                    children: t.pic
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 132
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 35
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 bg-slate-100 dark:bg-white/10 rounded text-[10px] font-bold text-slate-500",
                                                                children: t.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 55
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 35
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `p-4 text-right font-black ${t.type === 'PEMASUKAN' ? 'text-green-600' : 'text-red-600'}`,
                                                            children: [
                                                                t.type === 'PEMASUKAN' ? '+' : '-',
                                                                " ",
                                                                formatIDR(t.amount)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, t.id, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 32
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 169,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 160,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 159,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true),
                    activeTab === 'events' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-black text-slate-800 dark:text-white",
                                                children: "Manajemen Anggaran Event"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 193,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: "Pisahkan dana event agar tidak tercampur kas umum."
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 194,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 192,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleOpenNewEventModal,
                                        className: "px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs shadow-lg flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 197,
                                                columnNumber: 22
                                            }, this),
                                            " Buka Anggaran Event Baru"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                        lineNumber: 196,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 191,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-6 custom-scrollbar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: events.map((ev)=>{
                                        const percent = ev.budget > 0 ? Math.round(ev.used / ev.budget * 100) : 0;
                                        const sisa = ev.budget - ev.used;
                                        const isClosed = ev.status === 'DONE'; // Sesuaikan status dari Proker
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-2xl border p-5 shadow-sm relative overflow-hidden transition-all ${isClosed ? 'bg-slate-50 border-slate-200 opacity-70' : 'bg-white dark:bg-[#1e293b] border-slate-200 dark:border-white/10 hover:shadow-md'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-purple-100 dark:bg-purple-500/20 text-purple-600 rounded-xl",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 118
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 34
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-black text-slate-800 dark:text-white mb-1",
                                                    children: ev.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 mb-4",
                                                    children: [
                                                        "Total Anggaran: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-700 dark:text-slate-300",
                                                            children: formatIDR(ev.budget)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 90
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-[10px] font-bold",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-500",
                                                                    children: [
                                                                        "Terpakai (",
                                                                        percent,
                                                                        "%)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-purple-600",
                                                                    children: formatIDR(ev.used)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 34
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-2 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-purple-500 rounded-full transition-all duration-1000",
                                                                style: {
                                                                    width: `${percent}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 37
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 34
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right text-[10px] font-bold text-green-600",
                                                            children: [
                                                                "Sisa: ",
                                                                formatIDR(sisa)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-slate-100 dark:border-white/5 pt-4",
                                                    children: [
                                                        !isClosed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleOpenEventTrxModal(ev.id),
                                                            className: "w-full py-2.5 rounded-xl border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-slate-400 hover:text-purple-600 text-xs font-bold transition-all flex items-center justify-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 40
                                                                }, this),
                                                                " Catat Pengeluaran Event"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 space-y-2",
                                                            children: ev.transactions.slice(0, 2).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center text-[10px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400 truncate w-1/2",
                                                                            children: t.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 238,
                                                                            columnNumber: 43
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-red-500",
                                                                            children: [
                                                                                "-",
                                                                                formatIDR(t.amount)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                            lineNumber: 239,
                                                                            columnNumber: 43
                                                                        }, this)
                                                                    ]
                                                                }, t.id, true, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 40
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, ev.id, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 209,
                                            columnNumber: 28
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 202,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                lineNumber: 201,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                            lineNumber: 257,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-5 border-b flex justify-between items-center ${modalType.includes('in') ? 'bg-green-50 text-green-700' : modalType.includes('out') || modalType === 'event_trx' ? 'bg-red-50 text-red-700' : 'bg-purple-50 text-purple-700'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-black",
                                                    children: [
                                                        modalType === 'general_in' && 'Uang Masuk (Kas Umum)',
                                                        modalType === 'general_out' && 'Uang Keluar (Kas Umum)',
                                                        modalType === 'new_event' && 'Buka Anggaran Event Baru',
                                                        modalType === 'event_trx' && 'Catat Pengeluaran Event'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] opacity-80 mt-0.5",
                                                    children: "Pastikan data yang diinput valid."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 260,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "hover:bg-black/5 p-1 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                lineNumber: 269,
                                                columnNumber: 114
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 269,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 259,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-bold text-slate-500 uppercase mb-1 block",
                                                    children: modalType === 'new_event' ? 'Nama Event' : 'Keterangan Transaksi'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    autoFocus: true,
                                                    type: "text",
                                                    value: formData.title,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            title: e.target.value
                                                        }),
                                                    className: "w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold",
                                                    placeholder: "..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 273,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-bold text-slate-500 uppercase mb-1 block",
                                                    children: modalType === 'new_event' ? 'Alokasi Anggaran (Dari Kas Umum)' : 'Nominal (Rp)'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: formData.amount,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            amount: e.target.value
                                                        }),
                                                    className: "w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold",
                                                    placeholder: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 25
                                                }, this),
                                                modalType === 'new_event' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-orange-500 mt-1",
                                                    children: "*Saldo Kas Umum akan berkurang sejumlah ini."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 55
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 280,
                                            columnNumber: 22
                                        }, this),
                                        modalType !== 'new_event' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "Tanggal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: formData.date,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    date: e.target.value
                                                                }),
                                                            className: "w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 28
                                                }, this),
                                                modalType.includes('general') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-500 uppercase mb-1 block",
                                                            children: "Kategori"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 34
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: formData.category,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    category: e.target.value
                                                                }),
                                                            className: "w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-xs font-bold",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Umum"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Dana Sekolah"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 58
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Sponsorship"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 87
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Lainnya"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 115
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 289,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 272,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            disabled: isSubmitting,
                                            className: "px-4 py-2.5 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-200",
                                            children: "Batal"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 307,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: isSubmitting,
                                            className: "px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold shadow-lg transition-transform active:scale-95",
                                            children: isSubmitting ? "Menyimpan..." : "Simpan"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                            lineNumber: 308,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                                    lineNumber: 306,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                            lineNumber: 258,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                    lineNumber: 256,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/kas/KeuanganClient.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_5966769f._.js.map