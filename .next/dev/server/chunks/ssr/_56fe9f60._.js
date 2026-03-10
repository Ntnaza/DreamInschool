module.exports = [
"[project]/components/DashboardCharts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityChart",
    ()=>ActivityChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
"use client";
;
;
function ActivityChart({ data }) {
    // Custom Tooltip biar rapi dan gak melenceng
    const CustomTooltip = ({ active, payload, label })=>{
        if (active && payload && payload.length) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-slate-700/50 backdrop-blur-md min-w-[180px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold mb-2 text-slate-300 border-b border-slate-700 pb-2",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardCharts.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400",
                                        children: "Aspirasi Masuk:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardCharts.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-white",
                                        children: payload[0].value
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardCharts.tsx",
                                        lineNumber: 19,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DashboardCharts.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-400",
                                        children: "Proker Baru:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardCharts.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-white",
                                        children: payload[1].value
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardCharts.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DashboardCharts.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardCharts.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardCharts.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this);
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
            data: data,
            margin: {
                top: 10,
                right: 10,
                left: -20,
                bottom: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "colorAspirasi",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "5%",
                                    stopColor: "#3b82f6",
                                    stopOpacity: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardCharts.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "95%",
                                    stopColor: "#3b82f6",
                                    stopOpacity: 0
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardCharts.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DashboardCharts.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "colorKegiatan",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "5%",
                                    stopColor: "#a855f7",
                                    stopOpacity: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardCharts.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "95%",
                                    stopColor: "#a855f7",
                                    stopOpacity: 0
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardCharts.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DashboardCharts.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DashboardCharts.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                    strokeDasharray: "3 3",
                    vertical: false,
                    stroke: "#E2E8F0",
                    opacity: 0.5
                }, void 0, false, {
                    fileName: "[project]/components/DashboardCharts.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                    dataKey: "name",
                    axisLine: false,
                    tickLine: false,
                    tick: {
                        fontSize: 10,
                        fill: '#64748B'
                    },
                    dy: 10
                }, void 0, false, {
                    fileName: "[project]/components/DashboardCharts.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                    axisLine: false,
                    tickLine: false,
                    tick: {
                        fontSize: 10,
                        fill: '#64748B'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/DashboardCharts.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                        fileName: "[project]/components/DashboardCharts.tsx",
                        lineNumber: 64,
                        columnNumber: 27
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/components/DashboardCharts.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                    type: "monotone",
                    dataKey: "aspirasi",
                    stroke: "#3b82f6",
                    strokeWidth: 3,
                    fillOpacity: 1,
                    fill: "url(#colorAspirasi)"
                }, void 0, false, {
                    fileName: "[project]/components/DashboardCharts.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                    type: "monotone",
                    dataKey: "kegiatan",
                    stroke: "#a855f7",
                    strokeWidth: 3,
                    fillOpacity: 1,
                    fill: "url(#colorKegiatan)"
                }, void 0, false, {
                    fileName: "[project]/components/DashboardCharts.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DashboardCharts.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DashboardCharts.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/SpotlightCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpotlightCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SpotlightCard({ children, className = "", color = "blue" }) {
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleMouseMove = (e)=>{
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    const handleMouseEnter = ()=>setOpacity(1);
    const handleMouseLeave = ()=>setOpacity(0);
    // Mapping warna ke HEX untuk spotlight
    const colorMap = {
        blue: "#3b82f6",
        purple: "#a855f7",
        green: "#22c55e",
        yellow: "#eab308",
        red: "#ef4444",
        orange: "#f97316",
        pink: "#ec4899"
    };
    const spotlightColor = colorMap[color] || "#3b82f6";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: divRef,
        onMouseMove: handleMouseMove,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: `relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -inset-px opacity-0 transition duration-300",
                style: {
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}15, transparent 40%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/SpotlightCard.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 z-10 transition duration-300",
                style: {
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}40, transparent 40%)`,
                    maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px"
                }
            }, void 0, false, {
                fileName: "[project]/components/SpotlightCard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 h-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/SpotlightCard.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SpotlightCard.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/DashboardUI.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-ssr] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-ssr] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-left.js [app-ssr] (ecmascript) <export default as ArrowDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-ssr] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DashboardCharts.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SpotlightCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const formatCurrency = (amount)=>{
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
};
const formatDateShort = (date)=>{
    if (!date) return "TBA";
    return new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short'
    });
};
function DashboardUI({ stats, agenda, transaksiTerakhir, aspirasi, chartData }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const tagColorMap = {
        orange: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
        purple: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
        blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
        green: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
    };
    const iconColorMap = {
        blue: "text-blue-600 group-hover:text-blue-700",
        green: "text-green-600 group-hover:text-green-700",
        orange: "text-orange-600 group-hover:text-orange-700",
        pink: "text-pink-600 group-hover:text-pink-700"
    };
    const getKategoriColor = (kategori)=>{
        const k = kategori.toLowerCase();
        if (k.includes('sarana')) return 'orange';
        if (k.includes('event')) return 'purple';
        return 'blue';
    };
    const quickAccessItems = [
        {
            label: 'Tulis Berita',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"],
            color: 'blue',
            href: '/admin/berita'
        },
        {
            label: 'Buat Surat',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            color: 'pink',
            href: '/admin/surat'
        },
        {
            label: 'Scan Absensi',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"],
            color: 'green',
            href: '/admin/absensi'
        },
        {
            label: 'Input Kas',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
            color: 'orange',
            href: '/admin/kas'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto pb-20 pr-2 custom-scrollbar space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 tour-stats-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: "blue",
                        className: "p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-blue-300 transition-colors",
                        onClick: ()=>router.push('/admin/absensi'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                children: "Kehadiran Hari Ini"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                        children: stats.hadirHariIni
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-slate-400",
                                        children: [
                                            "/ ",
                                            stats.totalPengurus
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 75,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: "purple",
                        className: "p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-purple-300 transition-colors",
                        onClick: ()=>router.push('/admin/aspirasi'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 87,
                                    columnNumber: 172
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                children: "Aspirasi Baru"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                children: stats.aspirasiBaru
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 86,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: "green",
                        className: "p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-green-300 transition-colors",
                        onClick: ()=>router.push('/admin/proker'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 93,
                                    columnNumber: 168
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                children: "Proker Selesai"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                children: [
                                    stats.prokerPersen,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 92,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: "yellow",
                        className: "p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-yellow-300 transition-colors",
                        onClick: ()=>router.push('/admin/kas'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 99,
                                    columnNumber: 172
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                children: "Dana Kas"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                children: formatCurrency(stats.danaKas)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 98,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: "indigo",
                        className: "tour-total-views p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-indigo-300 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 105,
                                    columnNumber: 172
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                children: "Total Views"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                        children: stats.totalViews
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded",
                                        children: [
                                            "+",
                                            stats.viewsHariIni,
                                            " hari ini"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 104,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/DashboardUI.tsx",
                lineNumber: 74,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "lg:col-span-2 bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-activity-chart",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-black font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            size: 20,
                                            className: "text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 119,
                                            columnNumber: 116
                                        }, this),
                                        " Tren Aktivitas"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 119,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[250px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardCharts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActivityChart"], {
                                    data: chartData
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 121,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 117,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm flex flex-col tour-quick-access",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-black font-bold text-md text-slate-900 dark:text-white mb-6 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
                                        size: 18,
                                        className: "text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 126,
                                        columnNumber: 118
                                    }, this),
                                    " Akses Cepat"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 flex-1",
                                children: quickAccessItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push(item.href),
                                        className: "relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md transition-all group active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                size: 24,
                                                className: `${iconColorMap[item.color]}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 134,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-black font-bold text-slate-600 dark:text-slate-300",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 135,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 125,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/DashboardUI.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-agenda-widget",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-black font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 18,
                                        className: "text-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 145,
                                        columnNumber: 110
                                    }, this),
                                    " Agenda Penting"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: agenda.length > 0 ? agenda.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-3 rounded-lg border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors group cursor-pointer",
                                        onClick: ()=>router.push('/admin/proker'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 font-bold text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    size: 14,
                                                    className: "opacity-70"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 165
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 149,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-black font-bold text-slate-800 dark:text-white line-clamp-1",
                                                        children: item.nama
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                size: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 110
                                                            }, this),
                                                            " ",
                                                            formatDateShort(item.deadline)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 150,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 148,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 italic",
                                    children: "Belum ada agenda."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 155,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 144,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-recent-trx",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-black font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                        size: 18,
                                        className: "text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 160,
                                        columnNumber: 110
                                    }, this),
                                    " Transaksi Terakhir"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: transaksiTerakhir.length > 0 ? transaksiTerakhir.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer",
                                        onClick: ()=>router.push('/admin/kas'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-8 h-8 rounded-full flex items-center justify-center ${item.tipe === 'PEMASUKAN' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`,
                                                        children: item.tipe === 'PEMASUKAN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__["ArrowDownLeft"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 58
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 87
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 26
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-bold text-slate-800 dark:text-white line-clamp-1",
                                                                children: item.judul
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-500",
                                                                children: formatDateShort(item.tanggal)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 164,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-bold ${item.tipe === 'PEMASUKAN' ? 'text-green-600' : 'text-red-500'}`,
                                                children: [
                                                    item.tipe === 'PEMASUKAN' ? '+' : '-',
                                                    formatCurrency(item.nominal).replace('Rp', '')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 173,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 italic",
                                    children: "Belum ada transaksi."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 177,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 159,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm tour-inbox-widget",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-black font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 18,
                                        className: "text-pink-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 182,
                                        columnNumber: 110
                                    }, this),
                                    " Inbox Aspirasi"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: aspirasi.length > 0 ? aspirasi.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>router.push('/admin/aspirasi'),
                                        className: "group flex items-center justify-between p-3 rounded-xl bg-slate-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-xs font-black font-bold text-slate-700 dark:text-slate-300 shadow-sm shrink-0",
                                                        children: item.pengirim.charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-black font-bold text-slate-900 dark:text-white truncate",
                                                                children: item.pengirim
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5",
                                                                children: item.isi
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 28
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 186,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[9px] font-black font-bold px-2 py-0.5 rounded-md ${tagColorMap[getKategoriColor(item.kategori)]} shrink-0`,
                                                children: item.kategori
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 193,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 185,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 italic text-center p-4",
                                    children: "Belum ada aspirasi baru."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 195,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 181,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/DashboardUI.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/DashboardUI.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
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
        const { status, action } = data;
        // Pastikan tour berhenti jika sudah selesai, di-skip, atau ditutup (X)
        if (status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATUS"].FINISHED || status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATUS"].SKIPPED || action === "close") {
            setRun(false);
        }
    };
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
                                    className: "flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ...closeProps,
                            className: "text-slate-400 hover:text-red-500 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium",
                    children: step.content
                }, void 0, false, {
                    fileName: "[project]/components/TourGuide.tsx",
                    lineNumber: 53,
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
                            lineNumber: 58,
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
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ...primaryProps,
                                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-500/20 flex items-center gap-1 transition-transform active:scale-95",
                                    children: [
                                        isLastStep ? "Selesai" : "Lanjut",
                                        " ",
                                        !isLastStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/components/TourGuide.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$joyride$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/app/admin/DashboardHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const dashboardSteps = [
    {
        target: '.tour-dashboard-header',
        content: 'Selamat Datang! Ini adalah pusat kontrol utama untuk memantau seluruh aktivitas organisasi.',
        disableBeacon: true
    },
    {
        target: '.tour-stats-grid',
        content: 'Ringkasan data real-time: Pantau kehadiran pengurus, jumlah aspirasi, progres proker, saldo kas, hingga statistik pengunjung website dalam satu area.'
    },
    {
        target: '.tour-notif-bell',
        content: 'Klik ikon lonceng ini untuk melihat dan membalas aspirasi siswa secara cepat tanpa harus berpindah halaman.'
    },
    {
        target: '.tour-activity-chart',
        content: 'Grafik ini menampilkan tren kesibukan organisasi (Aspirasi vs Kegiatan) dalam 7 hari terakhir.'
    },
    {
        target: '.tour-quick-access',
        content: 'Jalan pintas ke menu yang paling sering digunakan untuk mempercepat kerja administrasi Anda.'
    },
    {
        target: '.tour-agenda-widget',
        content: 'Daftar agenda atau proker terdekat yang harus segera disiapkan agar tidak terlewat.'
    },
    {
        target: '.tour-recent-trx',
        content: 'Pantau arus kas masuk dan keluar terbaru agar pengelolaan keuangan tetap transparan.'
    },
    {
        target: '.tour-inbox-widget',
        content: 'Pesan dan aspirasi terbaru dari siswa yang perlu ditindaklanjuti lebih lanjut.'
    }
];
function DashboardHeader({ children }) {
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row justify-between items-end gap-6 mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3 tour-dashboard-header",
                                    children: [
                                        "Dashboard Overview ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full",
                                            children: "📊"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardHeader.tsx",
                                            lineNumber: 27,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/DashboardHeader.tsx",
                                    lineNumber: 26,
                                    columnNumber: 17
                                }, this),
                                isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    steps: dashboardSteps
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardHeader.tsx",
                                    lineNumber: 29,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/DashboardHeader.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 dark:text-slate-400 text-sm font-medium mt-1",
                            children: "Pantau performa organisasi secara real-time hari ini."
                        }, void 0, false, {
                            fileName: "[project]/app/admin/DashboardHeader.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/DashboardHeader.tsx",
                    lineNumber: 24,
                    columnNumber: 10
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 h-[48px] flex-shrink-0",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/admin/DashboardHeader.tsx",
                    lineNumber: 37,
                    columnNumber: 10
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/DashboardHeader.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/DashboardHeader.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data:6fd1e7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replyAspirasi",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40af2362acffe8e69c4774462c3ce745567b732491":"replyAspirasi"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40af2362acffe8e69c4774462c3ce745567b732491", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "replyAspirasi");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEuIEFTUElSQVNJIFNJU1dBXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcmF3TmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHJhd0tlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHBlc2FuID0gZm9ybURhdGEuZ2V0KFwicGVzYW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGlzQW5vbmltID0gZm9ybURhdGEuZ2V0KFwiaXNBbm9uaW1cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBpZiAoIXBlc2FuIHx8IHBlc2FuLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGVzYW4gdGlkYWsgYm9sZWgga29zb25nIVwiIH07XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoeyBkYXRhOiB7IHBlbmdpcmltLCBrZWxhcywgaXNpOiBwZXNhbiwga2F0ZWdvcmk6IFwiVW11bVwiLCBzdGF0dXM6IFwiUEVORElOR1wiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzcGlyYXNpIGJlcmhhc2lsIGRpa2lyaW0hIPCfmoBcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naXJpbSBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGx5QXNwaXJhc2koZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGJhbGFzYW4gPSBmb3JtRGF0YS5nZXQoXCJiYWxhc2FuXCIpIGFzIHN0cmluZztcclxuICBpZiAoIWJhbGFzYW4gfHwgYmFsYXNhbi50cmltKCkgPT09IFwiXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkJhbGFzYW4gdGlkYWsgYm9sZWgga29zb25nLlwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyBiYWxhc2FuLCBiYWxhc2FuQXQ6IG5ldyBEYXRlKCksIHN0YXR1czogXCJTRUxFU0FJXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYWxhc2FuIHRlcmtpcmltIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQkVSSVRBIChDTVMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gQmVyaXRhU2NoZW1hLnNhZmVQYXJzZSh7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSwga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSB8fCBcIlVtdW1cIiwgZ2FtYmFyOiBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgfSk7XHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayB2YWxpZC5cIiB9O1xyXG5cclxuICBjb25zdCB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xyXG4gIGNvbnN0IHNsdWcgPSBgJHtzbHVnaWZ5KGp1ZHVsKX0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIGhhYmlzLlwiIH07XHJcblxyXG4gIGNvbnN0IGFkbWluVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9IH0pO1xyXG4gIGlmICghYWRtaW5Vc2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVc2VyIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsLCBzbHVnLCBrb250ZW4sIGthdGVnb3JpLCBnYW1iYXI6IGdhbWJhciB8fCBudWxsLCBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIiwgdmlld3M6IDAgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGdhbWJhciA9IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSBhcyBzdHJpbmcgfCBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IGp1ZHVsLCBrb250ZW4sIGthdGVnb3JpLCBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLCAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7IHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGJlcml0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJlcml0YShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMy4gUFJPR1JBTSBLRVJKQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtS2VyamEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIHN0YXR1cywgcHJvZ3Jlc3MsXHJcbiAgICAgICAgZGVza3JpcHNpOiBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRpdmlzaTogZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBwcmlvcml0YXM6IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZyxcclxuICAgICAgICBhbmdnYXJhbjogTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKSxcclxuICAgICAgICBsb2thc2k6IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZyB8fCBudWxsLFxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpID8gbmV3IERhdGUoZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZykgOiBudWxsLFxyXG4gICAgICAgIGRlYWRsaW5lOiBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZykgOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzLCBwcm9ncmVzcyxcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBkZXNrcmlwc2k6IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHByaW9yaXRhczogZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGFuZ2dhcmFuOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc0ZlYXR1cmVkOiBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSA/IG5ldyBEYXRlKGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmcpIDogbnVsbCxcclxuICAgICAgICBkZWFkbGluZTogZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgPyBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmcpIDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7IHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGRpcGVyYmFydWkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2dyYW1LZXJqYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTsgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9ncmFtIGtlcmphIGRpaGFwdXMuXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgaGFwdXMgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gUEVOR1VSVVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMsIGRhbiBKYWJhdGFuIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsIG5pcywgamFiYXRhbiwgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAga2VsYXM6IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZyB8fCBcIi1cIixcclxuICAgICAgICBkaXZpc2k6IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmcgfHwgXCItXCIsXHJcbiAgICAgICAgZm90b1VybDogZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBpc0Fkdmlzb3I6IGZvcm1EYXRhLmdldChcImlzQWR2aXNvclwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmd1cnVzIGRpdGFtYmFoa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbmlzOiBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIGtlbGFzOiBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgamFiYXRhbjogZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGl2aXNpOiBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nLFxyXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIGFueSxcclxuICAgICAgICBmb3RvVXJsOiBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZyB8fCB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgcGVuZ3VydXMgZGlwZXJiYXJ1aSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGRhdGEgcGVuZ3VydXMuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA1LiBBQlNFTlNJICYgQUNBUkFcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNhcmEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7Zm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpfWApIDogbnVsbDtcclxuICAgIGNvbnN0IG5ld0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLCB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZyB8fCBcIlwiLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyB8fCBcIlNla29sYWhcIixcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWJ1YXQhXCIsIGlkOiBuZXdBY2FyYS5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke2Zvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIil9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIil9YCkgOiBudWxsO1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSwgd2FrdHVNdWxhaTogc3RhcnQsIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGxva2FzaTogZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZyxcclxuICAgICAgICB0aXBlOiAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCIsXHJcbiAgICAgICAgaGFyaTogZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmcgfHwgbnVsbCxcclxuICAgICAgICBhdXRvU3RhcnQ6IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGhhcHVzIGFjYXJhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogXCJPTkdPSU5HXCIsIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoeyBkYXRhOiB7IGFjYXJhSWQ6IGlkLCB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGltdWxhaSFcIiwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbXVsYWkgc2VzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgaWYgKHNlc2lBa3RpZikgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSwgZGF0YTogeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIsIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IHN0YXR1czogbmV4dFN0YXR1cywgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlNlc2kgZGloZW50aWthbi5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBzdG9wIHNlc2kuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmIVwiIH07XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9IH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuISDwn5GMXCIsIGRhdGE6IHsgbmFtZTogcGVuZ3VydXMubmFtYSwgc3RhdHVzOiBcIkRVUExJQ0FURVwiIH0gfTtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIGFjYXJhSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkLCBrZWdpYXRhbjogXCJTY2FuXCIsIHN0YXR1czogXCJIQURJUlwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpIH0gfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcmhhc2lsISDinIVcIiwgZGF0YTogeyBuYW1lOiBwZW5ndXJ1cy5uYW1hLCBzdGF0dXM6IFwiSEFESVJcIiB9IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNpc3RlbSBzY2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXNpIHRpZGFrIGFrdGlmXCIgfTtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSB9KTtcclxuICAgIGlmIChleGlzdGluZykgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7XHJcbiAgICBlbHNlIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7IGRhdGE6IHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQsIHN0YXR1cywga2VnaWF0YW46IFwiTWFudWFsXCIsIHRhbmdnYWw6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlN0YXR1cyBkaXBlcmJhcnVpIG1hbnVhbC5cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBpbnB1dCBtYW51YWwuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3QoeyB3aGVyZTogeyBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH0gfSk7XHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VzaSB0aWRhayBha3RpZlwiIH07XHJcbiAgICBjb25zdCBzZW11YSA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sIHNlbGVjdDogeyBpZDogdHJ1ZSB9IH0pO1xyXG4gICAgY29uc3Qgc3VkYWggPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH0gfSk7XHJcbiAgICBjb25zdCBzdWRhaElkcyA9IHN1ZGFoLm1hcChzID0+IHMucGVuZ3VydXNJZCk7XHJcbiAgICBjb25zdCBiZWx1bSA9IHNlbXVhLmZpbHRlcihwID0+ICFzdWRhaElkcy5pbmNsdWRlcyhwLmlkKSk7XHJcbiAgICBpZiAoYmVsdW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHsgZGF0YTogYmVsdW0ubWFwKHAgPT4gKHsgYWNhcmFJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIHBlbmd1cnVzSWQ6IHAuaWQsIHN0YXR1czogXCJBTFBBXCIsIGtlZ2lhdGFuOiBcIkF1dG9cIiwgdGFuZ2dhbDogbmV3IERhdGUoKSB9KSkgfSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2VzaSBkaXR1dHVwIG90b21hdGlzLlwiLCBjb3VudDogYmVsdW0ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIGF1dG8tYWxwYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhckFjYXJhKCkgeyByZXR1cm4gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBzZXNpOiB7IHdoZXJlOiB7IHN0YXR1czogXCJPTkdPSU5HXCIgfSwgdGFrZTogMSB9IH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9KTsgfVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7IHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LCBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfSB9KTsgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICBjb25zdCB0b3RhbCA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHsgaW5jbHVkZTogeyBhY2FyYTogdHJ1ZSwgYWJzZW5zaTogdHJ1ZSB9LCBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9IH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJla2FwIGRpbXVhdFwiLFxyXG4gICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4gKHtcclxuICAgICAgaWQ6IHMuaWQsIG5hbWE6IHMuYWNhcmEubmFtYSwgdGFuZ2dhbDogcy53YWt0dU11bGFpLCB0b3RhbEFuZ2dvdGE6IHRvdGFsLFxyXG4gICAgICBjb3VudHM6IHsgSEFESVI6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0hBRElSJykubGVuZ3RoLCBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLCBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsIEFMUEE6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0FMUEEnKS5sZW5ndGggfSxcclxuICAgICAgcGVyc2VudGFzZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgocy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGggLyB0b3RhbCkgKiAxMDApIDogMFxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHsgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHsgd2hlcmU6IHsgc2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH0gfSk7IH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHsgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSwgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfSB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7IHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSwgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gW107IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQ2hlY2tlZFwiIH07IH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJDaGVja2VkXCIgfTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDYuIEtFVUFOR0FOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRlc2tyaXBzaTogZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZywgY29sb3I6IFwiYmx1ZVwiLCBpY29uOiBcIldhbGxldFwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCdWt1IEthcyBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBhbnksIGthdGVnb3JpOiBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmcsIHRhbmdnYWw6IG5ldyBEYXRlKCksIGJ1a3VLYXNJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcImJ1a3VLYXNJZFwiKSkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpY2F0YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS51cGRhdGUoeyB3aGVyZTogeyBpZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9LCBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSkgfSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGlhbG9rYXNpa2FuIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xyXG4gICAgICBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHsgZGF0YTogeyBqdWR1bDogZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLCBub21pbmFsOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKSwgdGlwZTogXCJQRU5HRUxVQVJBTlwiLCBrYXRlZ29yaTogXCJFdmVudFwiLCB0YW5nZ2FsOiBuZXcgRGF0ZSgpLCBwcm9rZXJJZDogTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKSB9IH0pLFxyXG4gICAgICBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIH0sIGRhdGE6IHsgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikpIH0gfSB9KVxyXG4gICAgXSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VFdmVudEJ1ZGdldChwcm9rZXJJZDogbnVtYmVyLCB0YXJnZXRCdWt1SWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LCBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdHV0dXAhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA3LiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoeyBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nLCBrb2RlOiBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZywga2F0ZWdvcmk6IFwiVW11bVwiLCBrb25kaXNpOiBcIkJhaWtcIiwgc3RhdHVzOiBcIkFWQUlMQUJMRVwiIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFzZXQgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkJPUlJPV0VEXCIsIHBlbWluamFtOiBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmcsIHRnbFBpbmphbTogbmV3IERhdGUoKSB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXBpbmphbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpIH0sIGRhdGE6IHsgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBwZW1pbmphbTogbnVsbCwgdGdsUGluamFtOiBudWxsIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIktlbWJhbGkhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBHQUxFUklcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoeyBkYXRhOiB7IGp1ZHVsOiBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmcsIGthdGVnb3JpOiBcIlVtdW1cIiwgaW1hZ2VzOiBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nLCBkZXNrcmlwc2k6IFwiXCIgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgZGlzaW1wYW4hXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSGFwdXMhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBkaWJ1YXQhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVcGRhdGUhXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkhhcHVzIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTEFJTk5ZQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHsgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgaWRDYXJkRGVzaWduOiBkZXNpZ25VcmwgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaWRjYXJkXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRlc2FpbiBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5hcHBDb25maWcudXBzZXJ0KHsgd2hlcmU6IHsgaWQ6IDEgfSwgdXBkYXRlOiB7IGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSwgY3JlYXRlOiB7IGlkOiAxLCBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCRyBkaXNpbXBhblwiIH07IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWxcIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIHRyeSB7IGlmICghcGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSkgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHsgZGF0YTogeyBpcCwgdXNlckFnZW50LCBwYXRoIH0gfSk7IH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGl2aXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuY3JlYXRlKHsgZGF0YTogeyBuYW1hOiBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZyB9IH0pOyByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTsgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgZGlidWF0IVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURpdmlzaShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuZGl2aXNpLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEaXZpc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5kaXZpc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTsgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGl2aXNpIGRpaGFwdXNcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKYWJhdGFuKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmNyZWF0ZSh7IGRhdGE6IHsgbmFtYTogZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmcsIGRpdmlzaUlkOiBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiZGl2aXNpSWRcIikpIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlidWF0XCIgfTsgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwuXCIgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IG5hbWE6IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGlwZXJiYXJ1aVwiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUphYmF0YW4oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7IGF3YWl0IHByaXNtYS5qYWJhdGFuLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpOyByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gZGloYXB1c1wiIH07IH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsLlwiIH07IH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0tlaGFkaXJhbihhYnNlbnNpSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkgeyBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoeyB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sIGRhdGE6IHsgc3RhdHVzIH0gfSk7IHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7IHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3RhdHVzIGRpcGVyYmFydWlcIiB9OyB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbC5cIiB9OyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnUkE0RHNCLDBMQUFBIn0=
}),
"[project]/app/admin/DashboardBell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardBell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$6fd1e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:6fd1e7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function DashboardBell({ stats, aspirasi }) {
    const [isNotifOpen, setIsNotifOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const notifRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (notifRef.current && !notifRef.current.contains(event.target)) {
                setIsNotifOpen(false);
                setReplyingTo(null);
                setReplyText("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleReply = async (id)=>{
        if (!replyText.trim()) return;
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("id", id.toString());
        formData.append("balasan", replyText);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$6fd1e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["replyAspirasi"])(formData);
        if (res.success) {
            setReplyingTo(null);
            setReplyText("");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showToast"])("Balasan berhasil dikirim!", "success");
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showToast"])("Gagal membalas: " + res.message, "error");
        }
        setIsSubmitting(false);
    };
    const formatDateShort = (date)=>{
        if (!date) return "TBA";
        return new Date(date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-50",
        ref: notifRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setIsNotifOpen(!isNotifOpen);
                    if (isNotifOpen) {
                        setReplyingTo(null);
                        setReplyText("");
                    }
                },
                className: `tour-notif-bell w-10 h-10 rounded-lg border flex items-center justify-center relative shadow-sm transition-all active:scale-95 ${isNotifOpen ? "bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-500/20 dark:border-blue-500/30 dark:text-blue-400" : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 hover:shadow-md hover:bg-slate-50"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/app/admin/DashboardBell.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    stats.aspirasiBaru > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-[#0f172a] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/DashboardBell.tsx",
                        lineNumber: 71,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/DashboardBell.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isNotifOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95
                    },
                    className: "absolute right-0 top-12 w-80 md:w-[420px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                            size: 18,
                                            className: "text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardBell.tsx",
                                            lineNumber: 84,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-slate-900 dark:text-white text-sm",
                                            children: "Aspirasi Terbaru"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardBell.tsx",
                                            lineNumber: 85,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/DashboardBell.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full",
                                    children: [
                                        stats.aspirasiBaru,
                                        " Baru"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/DashboardBell.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/DashboardBell.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[450px] overflow-y-auto custom-scrollbar p-2 space-y-2 text-left",
                            children: aspirasi.length > 0 ? aspirasi.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3 rounded-xl transition-all border ${replyingTo === item.id ? "bg-blue-50/50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30" : "hover:bg-slate-50 dark:hover:bg-white/5 border-transparent hover:border-slate-100 dark:hover:border-white/5"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shrink-0",
                                                children: item.pengirim.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardBell.tsx",
                                                lineNumber: 96,
                                                columnNumber: 26
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                                children: item.pengirim
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardBell.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 32
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9px] text-slate-400",
                                                                children: formatDateShort(item.createdAt)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardBell.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardBell.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2",
                                                        children: item.isi
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardBell.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex justify-end",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setReplyingTo(replyingTo === item.id ? null : item.id),
                                                            className: "text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/DashboardBell.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 35
                                                                }, this),
                                                                " ",
                                                                replyingTo === item.id ? "Batal" : "Balas"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/DashboardBell.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardBell.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 29
                                                    }, this),
                                                    replyingTo === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                autoFocus: true,
                                                                value: replyText,
                                                                onChange: (e)=>setReplyText(e.target.value),
                                                                placeholder: "Jawaban...",
                                                                className: "w-full p-2 text-xs rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none resize-none h-20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardBell.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    disabled: isSubmitting || !replyText.trim(),
                                                                    onClick: ()=>handleReply(item.id),
                                                                    className: "bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-2",
                                                                    children: [
                                                                        isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                            size: 12,
                                                                            className: "animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/DashboardBell.tsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 53
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/DashboardBell.tsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 102
                                                                        }, this),
                                                                        " Kirim"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/DashboardBell.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardBell.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardBell.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/DashboardBell.tsx",
                                                lineNumber: 97,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardBell.tsx",
                                        lineNumber: 95,
                                        columnNumber: 23
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/app/admin/DashboardBell.tsx",
                                    lineNumber: 94,
                                    columnNumber: 20
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-8 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500",
                                    children: "Belum ada aspirasi."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/DashboardBell.tsx",
                                    lineNumber: 123,
                                    columnNumber: 52
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardBell.tsx",
                                lineNumber: 123,
                                columnNumber: 18
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/DashboardBell.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                router.push('/admin/aspirasi');
                                setIsNotifOpen(false);
                            },
                            className: "w-full p-3 text-center text-xs font-bold text-blue-600 border-t border-slate-100 dark:border-white/5 hover:bg-slate-50 transition-colors",
                            children: "Lihat Semua"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/DashboardBell.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/DashboardBell.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/DashboardBell.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/DashboardBell.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_56fe9f60._.js.map