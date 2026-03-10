(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/DashboardCharts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityChart",
    ()=>ActivityChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
"use client";
;
;
function ActivityChart({ data }) {
    // Custom Tooltip biar rapi dan gak melenceng
    const CustomTooltip = ({ active, payload, label })=>{
        if (active && payload && payload.length) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-slate-700/50 backdrop-blur-md min-w-[180px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold mb-2 text-slate-300 border-b border-slate-700 pb-2",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardCharts.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400",
                                        children: "Aspirasi Masuk:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardCharts.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-400",
                                        children: "Proker Baru:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardCharts.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
            data: data,
            margin: {
                top: 10,
                right: 10,
                left: -20,
                bottom: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "colorAspirasi",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "5%",
                                    stopColor: "#3b82f6",
                                    stopOpacity: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardCharts.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "colorKegiatan",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "5%",
                                    stopColor: "#a855f7",
                                    stopOpacity: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardCharts.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                    strokeDasharray: "3 3",
                    vertical: false,
                    stroke: "#E2E8F0",
                    opacity: 0.5
                }, void 0, false, {
                    fileName: "[project]/components/DashboardCharts.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                        fileName: "[project]/components/DashboardCharts.tsx",
                        lineNumber: 64,
                        columnNumber: 27
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/components/DashboardCharts.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
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
_c = ActivityChart;
var _c;
__turbopack_context__.k.register(_c, "ActivityChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SpotlightCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpotlightCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SpotlightCard({ children, className = "", color = "blue" }) {
    _s();
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: divRef,
        onMouseMove: handleMouseMove,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: `relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(SpotlightCard, "pLgJpozskY8nTOv7EjRk4tB3HJc=");
_c = SpotlightCard;
var _c;
__turbopack_context__.k.register(_c, "SpotlightCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/lib/data:f8b2a1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replyAspirasi",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40af2362acffe8e69c4774462c3ce745567b732491":"replyAspirasi"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40af2362acffe8e69c4774462c3ce745567b732491", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "replyAspirasi");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUHJva2VyU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIG5hbWE6IHouc3RyaW5nKCkubWluKDMsIFwiTmFtYSBwcm9rZXIgbWluaW1hbCAzIGthcmFrdGVyXCIpLFxyXG4gIGRlc2tyaXBzaTogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbiAgZGl2aXNpOiB6LnN0cmluZygpLFxyXG4gIHByaW9yaXRhczogei5zdHJpbmcoKS5kZWZhdWx0KFwiTWVkaXVtXCIpLFxyXG4gIGFuZ2dhcmFuOiB6Lm51bWJlcigpLm5vbm5lZ2F0aXZlKCkuZGVmYXVsdCgwKSxcclxuICBwcm9ncmVzczogei5udW1iZXIoKS5taW4oMCkubWF4KDEwMCkuZGVmYXVsdCgwKSxcclxuICBsb2thc2k6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG4gIGltYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBpc0ZlYXR1cmVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcclxuICBzdGFydERhdGU6IHouZGF0ZSgpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBkZWFkbGluZTogei5kYXRlKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAxLiBBU1BJUkFTSSBTSVNXQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLy8gLi4uIChza2lwIGZvciBicmV2aXR5LCB3aWxsIGFwcGx5IGluIG11bHRpcGxlIHN0ZXBzIGlmIG5lZWRlZClcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IEJlcml0YVNjaGVtYS5zYWZlUGFyc2Uoe1xyXG4gICAganVkdWw6IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpLFxyXG4gICAga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksXHJcbiAgICBrYXRlZ29yaTogZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgfHwgXCJVbXVtXCIsXHJcbiAgICBnYW1iYXI6IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgbWVzc2FnZTogZXJyb3JNc2cuanVkdWw/LlswXSB8fCBlcnJvck1zZy5rb250ZW4/LlswXSB8fCBcIkRhdGEgdGlkYWsgdmFsaWQuXCIgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBqdWR1bCwga29udGVuLCBrYXRlZ29yaSwgZ2FtYmFyIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuICBjb25zdCBzbHVnID0gYCR7c2x1Z2lmeShqdWR1bCl9LSR7RGF0ZS5ub3coKX1gO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlc2kgaGFiaXMuIFNpbGFrYW4gbG9naW4ga2VtYmFsaS5cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIWFkbWluVXNlcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRXJyb3I6IFVzZXIgdGlkYWsgZGl0ZW11a2FuIGRpIGRhdGFiYXNlIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBrb250ZW4sXHJcbiAgICAgICAga2F0ZWdvcmksXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIgfHwgbnVsbCxcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgc3RhdHVzOiBcIlBVQkxJU0hFRFwiLFxyXG4gICAgICAgIHZpZXdzOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGJlcmhhc2lsIHRlcmJpdCEg8J+TsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5lcmJpdGthbiBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGlmICghaWRSYXcpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIklEIHRpZGFrIHZhbGlkLlwiIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgZGlwZXJiYXJ1aSEg8J+TnVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQmVyaXRhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEJFUklUQSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA0LiBNQU5BSkVNRU4gUFJPR1JBTSBLRVJKQSAoVVBEQVRFIEZJWClcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIEFtYmlsIGRhdGEgc2VzdWFpIG5hbWEgZmllbGQgZGkgRnJvbnRlbmRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByaW9yaXRhcyA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZzsgLy8gRnJvbnRlbmQga2lyaW0gJ3ByaW9yaXR5JywgREIgc2ltcGFuICdwcmlvcml0YXMnXHJcbiAgY29uc3QgYW5nZ2FyYW4gPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nOyAvLyBQSUMgZGlzaW1wYW4gZGkga29sb20gbG9rYXNpXHJcbiAgXHJcbiAgLy8g4pyFIEZJVFVSIEJBUlU6IEltYWdlICYgRmVhdHVyZWRcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZzsgXHJcbiAgY29uc3QgaXNGZWF0dXJlZCA9IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBEYXRlIEhhbmRsaW5nXHJcbiAgY29uc3Qgc3RhcnREYXRlUmF3ID0gZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGFydERhdGUgPSBzdGFydERhdGVSYXcgPyBuZXcgRGF0ZShzdGFydERhdGVSYXcpIDogbnVsbDtcclxuICBjb25zdCBkZWFkbGluZVJhdyA9IGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZWFkbGluZSA9IGRlYWRsaW5lUmF3ID8gbmV3IERhdGUoZGVhZGxpbmVSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gTWFwcGluZyBTdGF0dXMgTG9naWMgKE90b21hdGlzIGF0YXUgTWFudWFsIGRhcmkgRnJvbnRlbmQpXHJcbiAgLy8gS2l0YSBwYWthaSBzdGF0dXMgbWFudWFsIGthbGF1IGRpa2lyaW0sIGthbGF1IG5nZ2FrIHBha2FpIGxvZ2ljIHByb2dyZXNzXHJcbiAgbGV0IHN0YXR1cyA9IFwiVE9ET1wiO1xyXG4gIGlmIChwcm9ncmVzcyA+IDAgJiYgcHJvZ3Jlc3MgPCAxMDApIHN0YXR1cyA9IFwiSU5fUFJPR1JFU1NcIjtcclxuICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkgc3RhdHVzID0gXCJET05FXCI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIGRlc2tyaXBzaSxcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgcHJpb3JpdGFzLFxyXG4gICAgICAgIGFuZ2dhcmFuLFxyXG4gICAgICAgIHByb2dyZXNzLFxyXG4gICAgICAgIHN0YXR1cywgLy8gU2ltcGFuIHN0YXR1c1xyXG4gICAgICAgIGxva2FzaSwgLy8gUElDXHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIGRlYWRsaW5lLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZSB8fCBudWxsLCAvLyBTaW1wYW4gR2FtYmFyXHJcbiAgICAgICAgaXNGZWF0dXJlZDogaXNGZWF0dXJlZCAvLyBTaW1wYW4gU3RhdHVzIFVuZ2d1bGFuXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZWZyZXNoIGhhbGFtYW4gQWRtaW4gJiBIb21lcGFnZSAoa2FyZW5hIGFkYSBzZWN0aW9uIFByb2dyYW0gVW5nZ3VsYW4pXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGlidWF0ISDwn5qAXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1YXQgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJpb3JpdGFzID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGFuZ2dhcmFuID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKTtcclxuICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcm9ncmVzc1wiKSk7XHJcbiAgY29uc3QgbG9rYXNpID0gZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpc0ZlYXR1cmVkID0gZm9ybURhdGEuZ2V0KFwiaXNGZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGNvbnN0IHN0YXJ0RGF0ZVJhdyA9IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gc3RhcnREYXRlUmF3ID8gbmV3IERhdGUoc3RhcnREYXRlUmF3KSA6IG51bGw7XHJcbiAgY29uc3QgZGVhZGxpbmVSYXcgPSBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVhZGxpbmUgPSBkZWFkbGluZVJhdyA/IG5ldyBEYXRlKGRlYWRsaW5lUmF3KSA6IG51bGw7XHJcblxyXG4gIC8vIFN0YXR1cyBMb2dpYyBVcGRhdGVcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBwcmlvcml0YXMsXHJcbiAgICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGxva2FzaSxcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgZGVhZGxpbmUsXHJcbiAgICAgICAgaXNGZWF0dXJlZCxcclxuICAgICAgICAvLyBVcGRhdGUgZ2FtYmFyIENVTUEgamlrYSB1c2VyIHVwbG9hZCBiYXJ1IChzdHJpbmcgdGlkYWsga29zb25nKVxyXG4gICAgICAgIC4uLihpbWFnZSAmJiB7IGltYWdlIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJva2VyXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGl1cGRhdGUhIOKcqFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBHYW50aSBuYW1hIGRlbGV0ZVByb2tlciBqYWRpIGRlbGV0ZVByb2dyYW1LZXJqYSBiaWFyIGtvbnNpc3RlbiBzYW1hIGZyb250ZW5kXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9ncmFtS2VyamEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNS4gTUFOQUpFTUVOIFBFTkdVUlVTIChMRU5HS0FQKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAvLyAxLiBBbWJpbCBEYXRhIFdhamliXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8gMi4gQW1iaWwgRGF0YSBUYW1iYWhhblxyXG4gIGNvbnN0IGhwID0gZm9ybURhdGEuZ2V0KFwiaHBcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGluc3RhZ3JhbSA9IGZvcm1EYXRhLmdldChcImluc3RhZ3JhbVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGlrdG9rID0gZm9ybURhdGEuZ2V0KFwidGlrdG9rXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkb21pc2lsaSA9IGZvcm1EYXRhLmdldChcImRvbWlzaWxpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0cmFuc3BvcnRhc2kgPSBmb3JtRGF0YS5nZXQoXCJ0cmFuc3BvcnRhc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1vdHRvID0gZm9ybURhdGEuZ2V0KFwibW90dG9cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyDinIUgREFUQSBCQVJVOiBWSVNJICYgTUlTSSAoRGl0YW5na2FwIGRhcmkgRm9ybURhdGEpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBDZWsgVGFuZ2dhbCBMYWhpciAoQ29udmVydCBzdHJpbmcga2UgRGF0ZSlcclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gQ2VrIGFwYWthaCBHdXJ1L1BlbWJpbmFcclxuICBjb25zdCBpc0Fkdmlzb3IgPSBmb3JtRGF0YS5nZXQoXCJpc0Fkdmlzb3JcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBWYWxpZGFzaSBEYXNhclxyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMvTklQLCBkYW4gSmFiYXRhbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXM6IGtlbGFzIHx8IFwiLVwiLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIC8vIOKchSBTSU1QQU4gVklTSSAmIE1JU0kgS0UgREFUQUJBU0VcclxuICAgICAgICB2aXNpOiB2aXNpIHx8IG51bGwsIFxyXG4gICAgICAgIG1pc2k6IG1pc2kgfHwgbnVsbCxcclxuICAgICAgICB0Z2xMYWhpcixcclxuICAgICAgICBmb3RvVXJsOiBmb3RvVXJsIHx8IG51bGwsXHJcbiAgICAgICAgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAgaXNBZHZpc29yOiBpc0Fkdmlzb3JcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5ndXJ1cyBiZXJoYXNpbCBkaXRhbWJhaGthbiEg8J+RpFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuIE5JUyBtdW5na2luIHN1ZGFoIHRlcmRhZnRhci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIC8vIEFtYmlsIHNlbXVhIGRhdGEgaW5wdXRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBS1RJRlwiIHwgXCJOT05BS1RJRlwiIHwgXCJBTFVNTklcIjtcclxuICBcclxuICAvLyBEYXRhIFRhbWJhaGFuXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGFzaSA9IGZvcm1EYXRhLmdldChcInRyYW5zcG9ydGFzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbW90dG8gPSBmb3JtRGF0YS5nZXQoXCJtb3R0b1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImZvdG9VcmxcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIOKchSBEQVRBIEJBUlU6IFZJU0kgJiBNSVNJIChVcGRhdGUpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgdGdsTGFoaXJSYXcgPSBmb3JtRGF0YS5nZXQoXCJ0Z2xMYWhpclwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGdsTGFoaXIgPSB0Z2xMYWhpclJhdyA/IG5ldyBEYXRlKHRnbExhaGlyUmF3KSA6IHVuZGVmaW5lZDsgXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgbmlzLFxyXG4gICAgICAgIGtlbGFzLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBocCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgdGlrdG9rLFxyXG4gICAgICAgIGRvbWlzaWxpLFxyXG4gICAgICAgIHRyYW5zcG9ydGFzaSxcclxuICAgICAgICBtb3R0byxcclxuICAgICAgICAvLyDinIUgVVBEQVRFIFZJU0kgJiBNSVNJXHJcbiAgICAgICAgdmlzaSwgXHJcbiAgICAgICAgbWlzaSxcclxuICAgICAgICAvLyBVcGRhdGUgdGFuZ2dhbCBsYWhpciBjdW1hIGthbGF1IGFkYSBpbnB1dCBiYXJ1XHJcbiAgICAgICAgLi4uKHRnbExhaGlyICYmIHsgdGdsTGFoaXIgfSksXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvdG8gY3VtYSBrYWxhdSBhZGEgZm90byBiYXJ1IHlhbmcgZGlraXJpbVxyXG4gICAgICAgIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIHBlbmd1cnVzIGRpcGVyYmFydWkhIPCfk51cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IGlkQ2FyZERlc2lnbjogZGVzaWduVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgSUQgQ0FSRCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwQ29uZmlnLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiAxIH0sXHJcbiAgICAgIHVwZGF0ZTogeyBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0sXHJcbiAgICAgIGNyZWF0ZTogeyBpZDogMSwgaWRDYXJkQmFja0ltYWdlOiBpbWFnZVVybCB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNBVkUgQkcgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNy4gU0lTVEVNIEFCU0VOU0kgKFNDQU5ORVIgJiBBQ0FSQSlcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBCdWF0IEFjYXJhIEJhcnUgKFVwZGF0ZTogVGFtYmFoIFdha3R1LCBUaXBlLCBIYXJpLCAmIEF1dG9TdGFydClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFjYXJhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG11bGFpU3RyID0gZm9ybURhdGEuZ2V0KFwid2FrdHVNdWxhaVwiKSBhcyBzdHJpbmc7IFxyXG4gIGNvbnN0IHNlbGVzYWlTdHIgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIikgYXMgc3RyaW5nOyBcclxuICBjb25zdCB0aXBlID0gKGZvcm1EYXRhLmdldChcInRpcGVcIikgYXMgYW55KSB8fCBcIlNFS0FMSV9QQUtBSVwiO1xyXG4gIGNvbnN0IGhhcmkgPSBmb3JtRGF0YS5nZXQoXCJoYXJpXCIpIGFzIHN0cmluZzsgLy8gQ29udG9oOiBcIlNlbmluLFNlbGFzYVwiXHJcbiAgY29uc3QgYXV0b1N0YXJ0ID0gZm9ybURhdGEuZ2V0KFwiYXV0b1N0YXJ0XCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgaWYgKCFuYW1hIHx8ICF0YW5nZ2FsU3RyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hIGRhbiBUYW5nZ2FsIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IG11bGFpU3RyID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHttdWxhaVN0cn1gKSA6IG51bGw7XHJcbiAgICBjb25zdCBlbmQgPSBzZWxlc2FpU3RyID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtzZWxlc2FpU3RyfWApIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBuZXdBY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBkZXNrcmlwc2k6IGRlc2tyaXBzaSB8fCBcIlwiLFxyXG4gICAgICAgIHRpcGUsXHJcbiAgICAgICAgaGFyaTogdGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBoYXJpIDogbnVsbCxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSxcclxuICAgICAgICB3YWt0dU11bGFpOiBzdGFydCxcclxuICAgICAgICB3YWt0dVNlbGVzYWk6IGVuZCxcclxuICAgICAgICBsb2thc2k6IGxva2FzaSB8fCBcIlNla29sYWhcIixcclxuICAgICAgICBzdGF0dXM6IFwiVVBDT01JTkdcIixcclxuICAgICAgICBhdXRvU3RhcnRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFjYXJhIGJlcmhhc2lsIGRpYnVhdCEg8J+ThVwiLCBpZDogbmV3QWNhcmEuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBBQ0FSQSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtYnVhdCBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNi4gVXBkYXRlIFN0YXR1cyBLZWhhZGlyYW4gKFNha2l0LCBJemluLCBkbGwpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTdGF0dXNLZWhhZGlyYW4oYWJzZW5zaUlkOiBudW1iZXIsIHN0YXR1czogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBhYnNlbnNpSWQgfSxcclxuICAgICAgZGF0YTogeyBzdGF0dXMgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gQW1iaWwgU2VtdWEgQWNhcmEgKFByaW9yaXRhcyBSVVRJTkFOIGRpIGF0YXMpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYWZ0YXJBY2FyYSgpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5hY2FyYS5maW5kTWFueSh7XHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBzZXNpOiB7XHJcbiAgICAgICAgICB3aGVyZTogeyBzdGF0dXM6IFwiT05HT0lOR1wiIH0sXHJcbiAgICAgICAgICB0YWtlOiAxLFxyXG4gICAgICAgICAgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeTogW1xyXG4gICAgICAgIHsgdGlwZTogJ2Rlc2MnIH0sIC8vICdSVVRJTkFOJyAoUikgdnMgJ1NFS0FMSV9QQUtBSScgKFMpLCBSIGxlYmloIGR1bHUgamlrYSBkZXNjIChzZWNhcmEgYWxmYWJldGlzIFMgPiBSLCBqYWRpIGtpdGEgYnV0dWggbG9naWMgbGFpbiBhdGF1IHBhc3Rpa2FuIG9yZGVybnlhIGJlbmFyKVxyXG4gICAgICAgIHsgY3JlYXRlZEF0OiAnZGVzYycgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4gVXBkYXRlIEFjYXJhIChFZGl0IGRldGFpbCArIFRpcGUgKyBIYXJpICsgQXV0b1N0YXJ0KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWNhcmEoaWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG11bGFpU3RyID0gZm9ybURhdGEuZ2V0KFwid2FrdHVNdWxhaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc2VsZXNhaVN0ciA9IGZvcm1EYXRhLmdldChcIndha3R1U2VsZXNhaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGlwZSA9IChmb3JtRGF0YS5nZXQoXCJ0aXBlXCIpIGFzIGFueSkgfHwgXCJTRUtBTElfUEFLQUlcIjtcclxuICBjb25zdCBoYXJpID0gZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYXV0b1N0YXJ0ID0gZm9ybURhdGEuZ2V0KFwiYXV0b1N0YXJ0XCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gbXVsYWlTdHIgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke211bGFpU3RyfWApIDogbnVsbDtcclxuICAgIGNvbnN0IGVuZCA9IHNlbGVzYWlTdHIgPyBuZXcgRGF0ZShgJHt0YW5nZ2FsU3RyfVQke3NlbGVzYWlTdHJ9YCkgOiBudWxsO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5hY2FyYS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICB0aXBlLFxyXG4gICAgICAgIGhhcmk6IHRpcGUgPT09IFwiUlVUSU5BTlwiID8gaGFyaSA6IG51bGwsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbFN0ciksXHJcbiAgICAgICAgbG9rYXNpLFxyXG4gICAgICAgIHdha3R1TXVsYWk6IHN0YXJ0LFxyXG4gICAgICAgIHdha3R1U2VsZXNhaTogZW5kLFxyXG4gICAgICAgIGF1dG9TdGFydFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA0LiBIYXB1cyBBY2FyYVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWNhcmEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYWNhcmEuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA1LiBTdGFydCBTZXNpIChNYW51YWwgT3ZlcnJpZGUgJiBMb2dpYyBTZXNpIEJhcnUpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEFjYXJhU2Vzc2lvbihpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIDEuIFVwZGF0ZSBzdGF0dXMgQWNhcmFcclxuICAgICAgYXdhaXQgdHguYWNhcmEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogXCJPTkdPSU5HXCIsXHJcbiAgICAgICAgICB3YWt0dU11bGFpQWt0dWFsOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDIuIEJ1YXQgU2VzaSBCYXJ1XHJcbiAgICAgIHJldHVybiBhd2FpdCB0eC5zZXNpQWNhcmEuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhY2FyYUlkOiBpZCxcclxuICAgICAgICAgIHdha3R1TXVsYWk6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBzdGF0dXM6IFwiT05HT0lOR1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzZXNpSWQ6IHJlc3VsdC5pZCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU1RBUlQgU0VTU0lPTiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDYuIFN0b3AgU2VzaVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvcEFjYXJhU2Vzc2lvbihpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgaWYgKCFhY2FyYSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyAxLiBDYXJpIHNlc2kgeWFuZyBha3RpZlxyXG4gICAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCB0eC5zZXNpQWNhcmEuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBhY2FyYUlkOiBpZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoc2VzaUFrdGlmKSB7XHJcbiAgICAgICAgYXdhaXQgdHguc2VzaUFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBpZDogc2VzaUFrdGlmLmlkIH0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHN0YXR1czogXCJDT01QTEVURURcIixcclxuICAgICAgICAgICAgd2FrdHVTZWxlc2FpOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDIuIFVwZGF0ZSBzdGF0dXMgQWNhcmFcclxuICAgICAgLy8gSmlrYSBSdXRpbmFuLCBiYWxpayBrZSBVUENPTUlORyBiaWFyIGJpc2EgZGktc3RhcnQgbGFnaSBiZXNva1xyXG4gICAgICBjb25zdCBuZXh0U3RhdHVzID0gYWNhcmEudGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBcIlVQQ09NSU5HXCIgOiBcIkNPTVBMRVRFRFwiO1xyXG5cclxuICAgICAgYXdhaXQgdHguYWNhcmEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6IG5leHRTdGF0dXMsXHJcbiAgICAgICAgICB3YWt0dVNlbGVzYWlBa3R1YWw6IG5ldyBEYXRlKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNUT1AgU0VTU0lPTiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDcuIFNjYW4gQWJzZW5zaSAoVXBkYXRlOiBMb2dpa2EgQmVyYmFzaXMgU2VzaSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNjYW5BYnNlbnNpKG5pczogc3RyaW5nLCBhY2FyYUlkOiBudW1iZXIpIHtcclxuICBpZiAoIW5pcyB8fCAhYWNhcmFJZCkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRGF0YSB0aWRhayBsZW5na2FwIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwZW5ndXJ1cyA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kVW5pcXVlKHsgd2hlcmU6IHsgbmlzIH0gfSk7XHJcbiAgICBpZiAoIXBlbmd1cnVzKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLinYwgUVIgQ29kZSBUaWRhayBUZXJkYWZ0YXIhXCIgfTtcclxuICAgIGlmIChwZW5ndXJ1cy5zdGF0dXMgIT09IFwiQUtUSUZcIikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4pqg77iPIEFuZ2dvdGEgVGlkYWsgQWt0aWZcIiB9O1xyXG5cclxuICAgIGNvbnN0IGFjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogYWNhcmFJZCB9IH0pO1xyXG4gICAgaWYgKCFhY2FyYSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4p2MIEFjYXJhIHRpZGFrIGRpdGVtdWthbiFcIiB9O1xyXG5cclxuICAgIC8vIENBUkkgU0VTSSBBS1RJRlxyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyBhY2FyYUlkOiBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLimqDvuI8gU2VzaSB0aWRhayBha3RpZiEgU2lsYWthbiBTdGFydCBkdWx1LlwiIH07XHJcblxyXG4gICAgLy8gQ2VrIGR1cGxpa2FzaSBiZXJkYXNhcmthbiBzZXNpSWRcclxuICAgIGNvbnN0IGV4aXN0aW5nTG9nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHsgXHJcbiAgICAgIHdoZXJlOiB7IFxyXG4gICAgICAgIHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLCBcclxuICAgICAgICBzZXNpSWQ6IHNlc2lBa3RpZi5pZCBcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0xvZykge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICBtZXNzYWdlOiBcIlN1ZGFoIGFic2VuIGRpIHNlc2kgaW5pISDwn5GMXCIsIFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBuYW1lOiBwZW5ndXJ1cy5uYW1hLFxyXG4gICAgICAgICAgIHJvbGU6IHBlbmd1cnVzLmphYmF0YW4sXHJcbiAgICAgICAgICAgaW1hZ2U6IHBlbmd1cnVzLmZvdG9VcmwsXHJcbiAgICAgICAgICAgc3RhdHVzOiBcIkRVUExJQ0FURVwiIFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaW1wYW4gQWJzZW5zaVxyXG4gICAgYXdhaXQgcHJpc21hLmFic2Vuc2kuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBlbmd1cnVzSWQ6IHBlbmd1cnVzLmlkLFxyXG4gICAgICAgIGFjYXJhSWQ6IGFjYXJhSWQsXHJcbiAgICAgICAgc2VzaUlkOiBzZXNpQWt0aWYuaWQsIC8vIFdBSklCIHNpbXBhbiBzZXNpSWRcclxuICAgICAgICBrZWdpYXRhbjogYWNhcmEubmFtYSxcclxuICAgICAgICBzdGF0dXM6IFwiSEFESVJcIixcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBtZXNzYWdlOiBcIkFic2Vuc2kgQmVyaGFzaWwhIOKchVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgIG5hbWU6IHBlbmd1cnVzLm5hbWEsXHJcbiAgICAgICAgIHJvbGU6IHBlbmd1cnVzLmphYmF0YW4sXHJcbiAgICAgICAgIGltYWdlOiBwZW5ndXJ1cy5mb3RvVXJsLFxyXG4gICAgICAgICBzdGF0dXM6IFwiSEFESVJcIlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU0NBTiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VydmVyIEVycm9yLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAxMS4gSW5wdXQgQWJzZW5zaSBNYW51YWwgKFVwZGF0ZTogQmVyYmFzaXMgU2VzaSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlucHV0TWFudWFsQWJzZW5zaShhY2FyYUlkOiBudW1iZXIsIHBlbmd1cnVzSWQ6IG51bWJlciwgc3RhdHVzOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGFjYXJhSWQ6IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBUaWRhayBhZGEgc2VzaSBha3RpZiEgU2lsYWthbiBTdGFydCBkdWx1LlwiIH07XHJcblxyXG4gICAgY29uc3QgYWNhcmEgPSBhd2FpdCBwcmlzbWEuYWNhcmEuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBhY2FyYUlkIH0gfSk7XHJcbiAgICBpZiAoIWFjYXJhKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJBY2FyYSB0aWRhayBkaXRlbXVrYW5cIiB9O1xyXG5cclxuICAgIC8vIEd1bmFrYW4gZmluZEZpcnN0ICsgQ3JlYXRlL1VwZGF0ZSBrYXJlbmEgQWJzZW5zaSB0aWRhayBwdW55YSB1bmlxdWUga2V5IGRpIHNjaGVtYSB5YW5nIG1lbmR1a3VuZyBVcHNlcnQgdW50dWsgc2VzaUlkXHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgcGVuZ3VydXNJZCwgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLmFic2Vuc2kudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgc3RhdHVzIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLmFic2Vuc2kuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWNhcmFJZCxcclxuICAgICAgICAgICAgICAgIHNlc2lJZDogc2VzaUFrdGlmLmlkLFxyXG4gICAgICAgICAgICAgICAgcGVuZ3VydXNJZCxcclxuICAgICAgICAgICAgICAgIHN0YXR1cyxcclxuICAgICAgICAgICAgICAgIGtlZ2lhdGFuOiBhY2FyYS5uYW1hLFxyXG4gICAgICAgICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJNQU5VQUwgSU5QVVQgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAxMi4gQXV0by1BbHBhIGJhZ2kgeWFuZyB0aWRhayBoYWRpciBzYWF0IHNlc2kgZGl0dXR1cCAoVXBkYXRlOiBCZXJiYXNpcyBTZXNpKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b0FscGFSZW1haW5pbmcoYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBhY2FyYUlkOiBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sXHJcbiAgICAgICAgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJUaWRhayBhZGEgc2VzaSBha3RpZlwiIH07XHJcblxyXG4gICAgY29uc3QgYWNhcmEgPSBhd2FpdCBwcmlzbWEuYWNhcmEuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBhY2FyYUlkIH0gfSk7XHJcbiAgICBpZiAoIWFjYXJhKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG5cclxuICAgIC8vIDEuIEFtYmlsIHNlbXVhIHBlbmd1cnVzIGFrdGlmXHJcbiAgICBjb25zdCBzZW11YVBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgc3RhdHVzOiBcIkFLVElGXCIgfSxcclxuICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDIuIEFtYmlsIHBlbmd1cnVzIHlhbmcgU1VEQUggcHVueWEgcmVjb3JkIGRpIFNFU0kgSU5JXHJcbiAgICBjb25zdCBzdWRhaEFic2VuID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9LFxyXG4gICAgICBzZWxlY3Q6IHsgcGVuZ3VydXNJZDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpZHNTdWRhaEFic2VuID0gc3VkYWhBYnNlbi5tYXAoYSA9PiBhLnBlbmd1cnVzSWQpO1xyXG5cclxuICAgIC8vIDMuIEZpbHRlciBzaWFwYSB5YW5nIGJlbHVtIGFkYSByZWNvcmRueWFcclxuICAgIGNvbnN0IGJlbHVtQWJzZW4gPSBzZW11YVBlbmd1cnVzLmZpbHRlcihwID0+ICFpZHNTdWRhaEFic2VuLmluY2x1ZGVzKHAuaWQpKTtcclxuXHJcbiAgICAvLyA0LiBNYXN1a2thbiBtZXJla2Egc2ViYWdhaSBBTFBBXHJcbiAgICBpZiAoYmVsdW1BYnNlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZU1hbnkoe1xyXG4gICAgICAgIGRhdGE6IGJlbHVtQWJzZW4ubWFwKHAgPT4gKHtcclxuICAgICAgICAgIGFjYXJhSWQsXHJcbiAgICAgICAgICBzZXNpSWQ6IHNlc2lBa3RpZi5pZCxcclxuICAgICAgICAgIHBlbmd1cnVzSWQ6IHAuaWQsXHJcbiAgICAgICAgICBzdGF0dXM6IFwiQUxQQVwiLFxyXG4gICAgICAgICAga2VnaWF0YW46IGFjYXJhLm5hbWEsXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDUuIFR1dHVwIFNlc2kgc2VjYXJhIHJlc21pXHJcbiAgICBhd2FpdCBzdG9wQWNhcmFTZXNzaW9uKGFjYXJhSWQpO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogYmVsdW1BYnNlbi5sZW5ndGggfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkFVVE8gQUxQQSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDEzLiBBbWJpbCBEYWZ0YXIgUGVuZ3VydXMgQWt0aWYgKFVudHVrIERyb3Bkb3duIE1hbnVhbClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhclBlbmd1cnVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgc3RhdHVzOiBcIkFLVElGXCIgfSxcclxuICAgICAgb3JkZXJCeTogeyBuYW1hOiBcImFzY1wiIH1cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vLyAxNC4gQXV0by1TdGFydCBTZXNpIGJlcmRhc2Fya2FuIFdha3R1XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0FuZEF1dG9TdGFydEFjYXJhKCkge1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3Qgc3RhcnRPZlRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBzdGFydE9mVG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgXHJcbiAgLy8gSGl0dW5nIHRvdGFsIG1lbml0IGRhcmkgamFtIHNla2FyYW5nIChMb2thbClcclxuICBjb25zdCBjdXJyZW50VGltZVZhbCA9IG5vdy5nZXRIb3VycygpICogNjAgKyBub3cuZ2V0TWludXRlcygpO1xyXG5cclxuICBjb25zdCBkYXlzID0gW1wiTWluZ2d1XCIsIFwiU2VuaW5cIiwgXCJTZWxhc2FcIiwgXCJSYWJ1XCIsIFwiS2FtaXNcIiwgXCJKdW1hdFwiLCBcIlNhYnR1XCJdO1xyXG4gIGNvbnN0IHRvZGF5RGF5ID0gZGF5c1tub3cuZ2V0RGF5KCldO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXBjb21pbmdBY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCIsXHJcbiAgICAgICAgYXV0b1N0YXJ0OiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGFjYXJhIG9mIHVwY29taW5nQWNhcmEpIHtcclxuICAgICAgaWYgKCFhY2FyYS53YWt0dU11bGFpKSBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIEhpdHVuZyB0b3RhbCBtZW5pdCBkYXJpIGphZHdhbFxyXG4gICAgICBjb25zdCBzY2hlZHVsZUhvdXJzID0gYWNhcmEud2FrdHVNdWxhaS5nZXRIb3VycygpO1xyXG4gICAgICBjb25zdCBzY2hlZHVsZU1pbnV0ZXMgPSBhY2FyYS53YWt0dU11bGFpLmdldE1pbnV0ZXMoKTtcclxuICAgICAgY29uc3Qgc2NoZWR1bGVUaW1lVmFsID0gc2NoZWR1bGVIb3VycyAqIDYwICsgc2NoZWR1bGVNaW51dGVzO1xyXG5cclxuICAgICAgY29uc3QgaXNUb2RheSA9IGFjYXJhLnRpcGUgPT09IFwiU0VLQUxJX1BBS0FJXCIgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2FyYS50YW5nZ2FsLnRvRGF0ZVN0cmluZygpID09PSBub3cudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBpc1JvdXRpbmVUb2RheSA9IGFjYXJhLnRpcGUgPT09IFwiUlVUSU5BTlwiICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjYXJhLmhhcmk/LmluY2x1ZGVzKHRvZGF5RGF5KTtcclxuXHJcbiAgICAgIGlmICgoaXNUb2RheSB8fCBpc1JvdXRpbmVUb2RheSkgJiYgY3VycmVudFRpbWVWYWwgPj0gc2NoZWR1bGVUaW1lVmFsKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gMS4gQ2VrIGFwYWthaCBhZGEgc2VzaSB5YW5nIHNlZGFuZyBPTkdPSU5HIChKYW5nYW4gZG91YmxlIHN0YXJ0KVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVNlc2kgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGFjYXJhSWQ6IGFjYXJhLmlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoYWN0aXZlU2VzaSkgY29udGludWU7XHJcblxyXG4gICAgICAgIC8vIDIuIENlayBTZXNpIHRlcmFraGlyIGhhcmkgaW5pXHJcbiAgICAgICAgY29uc3QgbGFzdFNlc2lIYXJpSW5pID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBcclxuICAgICAgICAgICAgICAgIGFjYXJhSWQ6IGFjYXJhLmlkLCBcclxuICAgICAgICAgICAgICAgIHdha3R1TXVsYWk6IHsgZ3RlOiBzdGFydE9mVG9kYXkgfSBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWxhc3RTZXNpSGFyaUluaSkge1xyXG4gICAgICAgICAgICAvLyBCZWx1bSBhZGEgc2VzaSBzYW1hIHNla2FsaSBoYXJpIGluaSwgYm9sZWggc3RhcnRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEF1dG8tc3RhcnRpbmcgc2Vzc2lvbiBmb3I6ICR7YWNhcmEubmFtYX1gKTtcclxuICAgICAgICAgICAgYXdhaXQgc3RhcnRBY2FyYVNlc3Npb24oYWNhcmEuaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEppa2Egc3VkYWggYWRhIHNlc2ksIGJhbmRpbmdrYW4gamFtIGphZHdhbG55YS5cclxuICAgICAgICAgICAgLy8gSmlrYSBqYWR3YWwgZGllZGl0IGtlIHdha3R1IHlhbmcgbGViaWggYmFydSBkYXJpIHNlc2kgdGVyYWtoaXIsIGJvbGVoIHN0YXJ0IGxhZ2kuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RTZXNpVGltZVZhbCA9IGxhc3RTZXNpSGFyaUluaS53YWt0dU11bGFpLmdldEhvdXJzKCkgKiA2MCArIGxhc3RTZXNpSGFyaUluaS53YWt0dU11bGFpLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzY2hlZHVsZVRpbWVWYWwgPiBsYXN0U2VzaVRpbWVWYWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOZXcgc2NoZWR1bGUgZGV0ZWN0ZWQgZm9yICR7YWNhcmEubmFtYX0sIHJlc3RhcnRpbmcgc2Vzc2lvbi4uLmApO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgc3RhcnRBY2FyYVNlc3Npb24oYWNhcmEuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJBVVRPIFNUQVJUIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMTQuNSBBdXRvLVN0b3AgU2VzaSBiZXJkYXNhcmthbiBXYWt0dSAoUmVmaW5lZClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0b3BBY2FyYSgpIHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBvbmdvaW5nQWNhcmEgPSBhd2FpdCBwcmlzbWEuYWNhcmEuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBzdGF0dXM6IFwiT05HT0lOR1wiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChvbmdvaW5nQWNhcmEubGVuZ3RoID09PSAwKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudDogMCB9O1xyXG5cclxuICAgIGxldCBzdG9wcGVkQ291bnQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBhY2FyYSBvZiBvbmdvaW5nQWNhcmEpIHtcclxuICAgICAgaWYgKCFhY2FyYS53YWt0dVNlbGVzYWkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgbGV0IHNob3VsZFN0b3AgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChhY2FyYS50aXBlID09PSBcIlNFS0FMSV9QQUtBSVwiKSB7XHJcbiAgICAgICAgLy8gQmFuZGluZ2thbiB0aW1lc3RhbXAgbGVuZ2thcCB1bnR1ayBha3VyYXNpIG1ha3NpbWFsXHJcbiAgICAgICAgaWYgKG5vdyA+PSBhY2FyYS53YWt0dVNlbGVzYWkpIHtcclxuICAgICAgICAgIHNob3VsZFN0b3AgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBVbnR1ayBSVVRJTkFOLCBiYW5kaW5na2FuIEphbSAmIE1lbml0IGhhcmkgaW5pXHJcbiAgICAgICAgY29uc3QgY3VycmVudFZhbCA9IG5vdy5nZXRIb3VycygpICogNjAgKyBub3cuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIGNvbnN0IGVuZFZhbCA9IGFjYXJhLndha3R1U2VsZXNhaS5nZXRIb3VycygpICogNjAgKyBhY2FyYS53YWt0dVNlbGVzYWkuZ2V0TWludXRlcygpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFZhbCA+PSBlbmRWYWwpIHtcclxuICAgICAgICAgIHNob3VsZFN0b3AgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNob3VsZFN0b3ApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW0FVVE8tU1RPUF0gRW5kaW5nIHNlc3Npb246ICR7YWNhcmEubmFtYX1gKTtcclxuICAgICAgICBhd2FpdCBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYS5pZCk7XHJcbiAgICAgICAgc3RvcHBlZENvdW50Kys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHN0b3BwZWRDb3VudCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQVVUTyBTVE9QIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogU3RyaW5nKGVycm9yKSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMTUuIEFtYmlsIERhZnRhciBTZXNpIChVbnR1ayBMYXBvcmFuIFBlciBTZXNpKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyU2VzaShhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBhY2FyYUlkIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH1cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vLyA4LiBBbWJpbCBSZWthcCBBYnNlbnNpIExlbmdrYXAgKFVwZGF0ZTogQmVyYmFzaXMgU2VzaSAmIE11bHRpLVN0YXR1cylcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJla2FwQWJzZW5zaSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG90YWxQZW5ndXJ1cyA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jb3VudCh7IHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0gfSk7XHJcbiAgICBcclxuICAgIC8vIEFtYmlsIHNlbXVhIHNlc2kgeWFuZyBwZXJuYWggZGlsYWt1a2FuXHJcbiAgICBjb25zdCBzZXNpTGlzdCA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZE1hbnkoe1xyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgYWNhcmE6IHRydWUsXHJcbiAgICAgICAgYWJzZW5zaToge1xyXG4gICAgICAgICAgc2VsZWN0OiB7IHN0YXR1czogdHJ1ZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBzZXNpTGlzdC5tYXAocyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGdsID0gbmV3IERhdGUocy53YWt0dU11bGFpKTtcclxuICAgICAgICBjb25zdCBmb3JtYXRUZ2wgPSB0Z2wudG9Mb2NhbGVEYXRlU3RyaW5nKCdpZC1JRCcsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnMi1kaWdpdCcgfSk7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0SmFtID0gdGdsLnRvTG9jYWxlVGltZVN0cmluZygnaWQtSUQnLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvdW50cyA9IHtcclxuICAgICAgICAgIEhBRElSOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdIQURJUicpLmxlbmd0aCxcclxuICAgICAgICAgIElaSU46IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ0laSU4nKS5sZW5ndGgsXHJcbiAgICAgICAgICBTQUtJVDogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnU0FLSVQnKS5sZW5ndGgsXHJcbiAgICAgICAgICBBTFBBOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdBTFBBJykubGVuZ3RoLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogcy5pZCxcclxuICAgICAgICAgIGFjYXJhSWQ6IHMuYWNhcmFJZCxcclxuICAgICAgICAgIG5hbWE6IGAke3MuYWNhcmEubmFtYX0gKCR7Zm9ybWF0VGdsfSAke2Zvcm1hdEphbX0pYCxcclxuICAgICAgICAgIGxva2FzaTogcy5hY2FyYS5sb2thc2ksXHJcbiAgICAgICAgICB0YW5nZ2FsOiBzLndha3R1TXVsYWksXHJcbiAgICAgICAgICBjb3VudHMsXHJcbiAgICAgICAgICB0b3RhbEFuZ2dvdGE6IHRvdGFsUGVuZ3VydXMsXHJcbiAgICAgICAgICBwZXJzZW50YXNlOiB0b3RhbFBlbmd1cnVzID4gMCA/IE1hdGgucm91bmQoKGNvdW50cy5IQURJUiAvIHRvdGFsUGVuZ3VydXMpICogMTAwKSA6IDAsXHJcbiAgICAgICAgICBzdGF0dXNTZXNpOiBzLnN0YXR1c1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVLQVAgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbXVhdCByZWthcC5cIiwgZGF0YTogW10gfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDkuIEFtYmlsIERldGFpbCBBYnNlbnNpIHBlciBTZXNpIChMYXBvcmFuIC0gU29ydCBieSBOYW1hKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGV0YWlsTGFwb3JhbihzZXNpSWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBzZXNpSWQ6IHNlc2lJZCB9LFxyXG4gICAgICBpbmNsdWRlOiB7IHBlbmd1cnVzOiB0cnVlIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgcGVuZ3VydXM6IHsgbmFtYTogJ2FzYycgfSB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFVEFJTCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gMTAuIEFtYmlsIExvZyBBYnNlbnNpIHBlciBTZXNpL0FjYXJhIChBY3Rpdml0eSBTdHJlYW0pXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dzQnlBY2FyYShpZDogbnVtYmVyLCB0eXBlOiAnc2VzaScgfCAnYWNhcmEnID0gJ3Nlc2knKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0YXJnZXRTZXNpSWQgPSBpZDtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ2FjYXJhJykge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVNlc2kgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGFjYXJhSWQ6IGlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNlc2kpIHJldHVybiBbXTsgLy8gVGlkYWsgYWRhIHNlc2kgYWt0aWYgPSB0aWRhayBhZGEgbG9nXHJcbiAgICAgICAgdGFyZ2V0U2VzaUlkID0gYWN0aXZlU2VzaS5pZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBzZXNpSWQ6IHRhcmdldFNlc2lJZCB9LFxyXG4gICAgICBpbmNsdWRlOiB7IHBlbmd1cnVzOiB0cnVlIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgdGFuZ2dhbDogJ2Rlc2MnIH1cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOC4gTUFOQUpFTUVOIEtFVUFOR0FOIChLQVMgJiBBTkdHQVJBTiAtIE1VTFRJIExFREdFUilcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBUYW1iYWggQnVrdSBLYXMgKEthdGVnb3JpIFBlbWJ1a3VhbiBCYXJ1KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnVrdUthcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBjb2xvciA9IGZvcm1EYXRhLmdldChcImNvbG9yXCIpIGFzIHN0cmluZyB8fCBcImJsdWVcIjtcclxuICBcclxuICB0cnkge1xyXG4gICAgY29uc3QgYnVrdSA9IGF3YWl0IHByaXNtYS5idWt1S2FzLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgbmFtYSwgZGVza3JpcHNpLCBjb2xvciB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYEJ1a3UgS2FzICR7bmFtYX0gYmVyaGFzaWwgZGlidWF0ISDwn5OaYCwgaWQ6IGJ1a3UuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtYnVhdCBrYXRlZ29yaSBwZW1idWt1YW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIENhdGF0IFRyYW5zYWtzaSBLYXMgKFVwZGF0ZWQgd2l0aCBidWt1S2FzSWQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHZW5lcmFsVHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5vbWluYWwgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcclxuICBjb25zdCB0aXBlID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIlBFTUFTVUtBTlwiIHwgXCJQRU5HRUxVQVJBTlwiO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBwaWMgPSBmb3JtRGF0YS5nZXQoXCJwaWNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGJ1a3VLYXNJZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJidWt1S2FzSWRcIikpO1xyXG5cclxuICBpZiAoIWJ1a3VLYXNJZCkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGlsaWggQnVrdSBLYXMhXCIgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgIGtldGVyYW5nYW46IGBQSUM6ICR7cGljfWAsXHJcbiAgICAgICAgYnVrdUthc0lkXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlRyYW5zYWtzaSBiZXJoYXNpbCBkaWNhdGF0ISDwn5KwXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVuY2F0YXQgdHJhbnNha3NpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBCdWthIEFuZ2dhcmFuIEV2ZW50IEJhcnUgKFBpbmRhaCBCdWt1IC8gQWxva2FzaSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50QnVkZ2V0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWFFdmVudCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBidWRnZXQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJva2VySWQgPSBmb3JtRGF0YS5nZXQoXCJwcm9rZXJJZFwiKSA/IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcm9rZXJJZFwiKSkgOiBudWxsO1xyXG4gIGNvbnN0IGlzU3Vic2lkaSA9IGZvcm1EYXRhLmdldChcImlzU3Vic2lkaVwiKSA9PT0gXCJ0cnVlXCI7IFxyXG4gIGNvbnN0IGZyb21CdWt1SWQgPSBmb3JtRGF0YS5nZXQoXCJmcm9tQnVrdUlkXCIpID8gTnVtYmVyKGZvcm1EYXRhLmdldChcImZyb21CdWt1SWRcIikpIDogbnVsbDsgXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyBBLiBKaWthIFNVQlNJREksIGNlayBzYWxkbyB0ZXJsZWJpaCBkYWh1bHVcclxuICAgICAgaWYgKGlzU3Vic2lkaSAmJiBmcm9tQnVrdUlkKSB7XHJcbiAgICAgICAgLy8gSGl0dW5nIHNhbGRvIGRvbXBldCBzdW1iZXIgc2VjYXJhIHJlYWwtdGltZVxyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGF3YWl0IHR4LmtldWFuZ2FuLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYnVrdUthc0lkOiBmcm9tQnVrdUlkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjdXJyZW50QmFsYW5jZSA9IHRyYW5zYWN0aW9ucy5yZWR1Y2UoKGFjYywgY3VycikgPT4gXHJcbiAgICAgICAgICAgIGN1cnIudGlwZSA9PT0gJ1BFTUFTVUtBTicgPyBhY2MgKyBjdXJyLm5vbWluYWwgOiBhY2MgLSBjdXJyLm5vbWluYWwsIDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoYnVkZ2V0ID4gY3VycmVudEJhbGFuY2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTYWxkbyB0aWRhayBtZW5jdWt1cGkhIFRlcnNlZGlhOiBScCAke2N1cnJlbnRCYWxhbmNlLnRvTG9jYWxlU3RyaW5nKCdpZC1JRCcpfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgdHgua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAganVkdWw6IGBTdWJzaWRpIEthczogJHtuYW1hRXZlbnR9YCxcclxuICAgICAgICAgICAgbm9taW5hbDogYnVkZ2V0LFxyXG4gICAgICAgICAgICB0aXBlOiBcIlBFTkdFTFVBUkFOXCIsXHJcbiAgICAgICAgICAgIGthdGVnb3JpOiBcIkRhbmEgRGFydXJhdCBQcm9rZXJcIixcclxuICAgICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAgICAgIGtldGVyYW5nYW46IGBTdWJzaWRpIHVudHVrIFByb2tlciBJRDogJHtwcm9rZXJJZCB8fCAnQmFydSd9YCxcclxuICAgICAgICAgICAgYnVrdUthc0lkOiBmcm9tQnVrdUlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCLiBVcGRhdGUgYXRhdSBCdWF0IERhdGEgUHJva2VyL0tlZ2lhdGFuXHJcbiAgICAgIGlmIChwcm9rZXJJZCkge1xyXG4gICAgICAgIGF3YWl0IHR4LnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IHByb2tlcklkIH0sXHJcbiAgICAgICAgICBkYXRhOiB7IGFuZ2dhcmFuOiB7IGluY3JlbWVudDogYnVkZ2V0IH0sIHN0YXR1czogXCJJTl9QUk9HUkVTU1wiIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBCdWF0IGVudGl0YXMgYW5nZ2FyYW4gYmFydSAoU3RhbmRhbG9uZSBFdmVudClcclxuICAgICAgICBhd2FpdCB0eC5wcm9ncmFtS2VyamEuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmFtYTogbmFtYUV2ZW50LFxyXG4gICAgICAgICAgICBhbmdnYXJhbjogYnVkZ2V0LFxyXG4gICAgICAgICAgICBhbmdnYXJhblRlcnBha2FpOiAwLFxyXG4gICAgICAgICAgICBzdGF0dXM6IFwiSU5fUFJPR1JFU1NcIiwgXHJcbiAgICAgICAgICAgIGRpdmlzaTogXCJLZWdpYXRhbiBVbXVtXCIsIC8vIERlZmF1bHQgZGl2aXNpIHVudHVrIGV2ZW50IG5vbi1wcm9rZXJcclxuICAgICAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKGRhdGVTdHIpLCBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBpc1N1YnNpZGkgPyBcIlN1YnNpZGkgZGFuYSBiZXJoYXNpbCEg8J+boe+4j1wiIDogXCJBbmdnYXJhbiBTZWtvbGFoIGRpY2F0YXQhIPCfj6tcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ1JFQVRFIEVWRU5UIEJVREdFVCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcHJvc2VzIGFuZ2dhcmFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA0LiBDYXRhdCBUcmFuc2Frc2kgUGVuZ2VsdWFyYW4gRXZlbnQgKEZpeGVkOiBNYXRjaCBmcm9udGVuZCBrZXkgKyBEZXRhaWwgQmFyYW5nKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgcHJva2VySWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpO1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5vbWluYWwgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpKTtcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b0JhcmFuZyA9IGZvcm1EYXRhLmdldChcImZvdG9CYXJhbmdcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9Ob3RhID0gZm9ybURhdGEuZ2V0KFwiZm90b05vdGFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGt1YW50aXRhcyA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJrdWFudGl0YXNcIikpIHx8IDE7XHJcbiAgY29uc3Qgc2F0dWFuID0gZm9ybURhdGEuZ2V0KFwic2F0dWFuXCIpIGFzIHN0cmluZyB8fCBcInBjc1wiO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gMS4gQW1iaWwgZGF0YSBQcm9rZXIgKENlayBzaXNhIGFuZ2dhcmFuKVxyXG4gICAgICBjb25zdCBwcm9rZXIgPSBhd2FpdCB0eC5wcm9ncmFtS2VyamEuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9IH0pO1xyXG4gICAgICBpZiAoIXByb2tlcikgdGhyb3cgbmV3IEVycm9yKFwiUHJva2VyIHRpZGFrIGRpdGVtdWthbi5cIik7XHJcblxyXG4gICAgICBjb25zdCBzaXNhQW5nZ2FyYW4gPSBwcm9rZXIuYW5nZ2FyYW4gLSBwcm9rZXIuYW5nZ2FyYW5UZXJwYWthaTtcclxuICAgICAgaWYgKG5vbWluYWwgPiBzaXNhQW5nZ2FyYW4pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuZ2dhcmFuIHRpZGFrIGN1a3VwISBTaXNhOiBScCAke3Npc2FBbmdnYXJhbi50b0xvY2FsZVN0cmluZygnaWQtSUQnKX0uYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDIuIENhdGF0IFRyYW5zYWtzaSB0YW5wYSBidWt1S2FzSWQgKE11cm5pIFJlYWxpc2FzaSBQcm9rZXIpXHJcbiAgICAgIGF3YWl0IHR4LmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAganVkdWwsXHJcbiAgICAgICAgICBub21pbmFsLFxyXG4gICAgICAgICAgdGlwZTogXCJQRU5HRUxVQVJBTlwiLFxyXG4gICAgICAgICAga2F0ZWdvcmk6IFwiUmVhbGlzYXNpIFByb2tlclwiLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoZGF0ZVN0ciksXHJcbiAgICAgICAgICBwcm9rZXJJZDogcHJva2VySWQsXHJcbiAgICAgICAgICBidWt1S2FzSWQ6IG51bGwsXHJcbiAgICAgICAgICBmb3RvQmFyYW5nLFxyXG4gICAgICAgICAgZm90b05vdGEsXHJcbiAgICAgICAgICBrdWFudGl0YXMsXHJcbiAgICAgICAgICBzYXR1YW5cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuIFVwZGF0ZSByZWFsaXNhc2kgcGVtYWthaWFuIGRhbmEgZGkgUHJva2VyXHJcbiAgICAgIHJldHVybiBhd2FpdCB0eC5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcHJva2VySWQgfSxcclxuICAgICAgICBkYXRhOiB7IGFuZ2dhcmFuVGVycGFrYWk6IHsgaW5jcmVtZW50OiBub21pbmFsIH0gfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5nZWx1YXJhbiBiZXJoYXNpbCBkaWNhdGF0IVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJHYWdhbCBtZW5jYXRhdCBwZW5nZWx1YXJhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNS4gU2VsZXNhaWthbiBBbmdnYXJhbiBFdmVudCAmIEtlbWJhbGlrYW4gU2lzYSAoQ2xvc2luZyB3aXRoIFJlZnVuZClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsb3NlRXZlbnRCdWRnZXQocHJva2VySWQ6IG51bWJlciwgdGFyZ2V0QnVrdUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgY29uc3QgcHJva2VyID0gYXdhaXQgdHgucHJvZ3JhbUtlcmphLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogcHJva2VySWQgfSB9KTtcclxuICAgICAgaWYgKCFwcm9rZXIpIHRocm93IG5ldyBFcnJvcihcIlByb2tlciB0aWRhayBkaXRlbXVrYW4uXCIpO1xyXG5cclxuICAgICAgY29uc3Qgc2lzYSA9IHByb2tlci5hbmdnYXJhbiAtIHByb2tlci5hbmdnYXJhblRlcnBha2FpO1xyXG5cclxuICAgICAgLy8gSmlrYSBhZGEgc2lzYSwgYnVhdCBQRU1BU1VLQU4ga2UgZG9tcGV0IHR1anVhblxyXG4gICAgICBpZiAoc2lzYSA+IDApIHtcclxuICAgICAgICBhd2FpdCB0eC5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBqdWR1bDogYFBlbmdlbWJhbGlhbiBTaXNhOiAke3Byb2tlci5uYW1hfWAsXHJcbiAgICAgICAgICAgIG5vbWluYWw6IHNpc2EsXHJcbiAgICAgICAgICAgIHRpcGU6IFwiUEVNQVNVS0FOXCIsXHJcbiAgICAgICAgICAgIGthdGVnb3JpOiBcIlNpc2EgQW5nZ2FyYW4gUHJva2VyXCIsXHJcbiAgICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGJ1a3VLYXNJZDogdGFyZ2V0QnVrdUlkLFxyXG4gICAgICAgICAgICBrZXRlcmFuZ2FuOiBgU2lzYSBkYW5hIGRhcmkga2VnaWF0YW4gJHtwcm9rZXIubmFtYX0gZGlrZW1iYWxpa2FuLmBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVHV0dXAgUHJva2VyXHJcbiAgICAgIGF3YWl0IHR4LnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LFxyXG4gICAgICAgIGRhdGE6IHsgc3RhdHVzOiBcIkRPTkVcIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFuZ2dhcmFuIGRpdHV0dXAgJiBzaXNhIGRhbmEgZGlrZW1iYWxpa2FuISDinIVcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgOS4gTUFOQUpFTUVOIElOVkVOVEFSSVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBUYW1iYWgvRWRpdCBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVJbnZlbnRhcmlzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvZGUgPSBmb3JtRGF0YS5nZXQoXCJjb2RlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBoYXJnYSA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSk7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzZXJpYWwgPSBmb3JtRGF0YS5nZXQoXCJzZXJpYWxcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKGlkUmF3KSB7XHJcbiAgICAgIC8vIEVkaXRcclxuICAgICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHsgbmFtYSwga29kZSwga2F0ZWdvcmksIGhhcmdhLCBzZXJpYWxOdW06IHNlcmlhbCwgLi4uKGZvdG9VcmwgJiYgeyBmb3RvVXJsIH0pIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGVcclxuICAgICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7IFxyXG4gICAgICAgICAgIG5hbWEsIGtvZGUsIGthdGVnb3JpLCBoYXJnYSwgc2VyaWFsTnVtOiBzZXJpYWwsIGZvdG9VcmwsIFxyXG4gICAgICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIiwga29uZGlzaTogXCJCYWlrXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGEgYXNldCB0ZXJzaW1wYW4hIPCfk6ZcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW55aW1wYW4gYXNldC5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gSGFwdXMgQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnZlbnRhcmlzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBQaW5qYW0gQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5qYW1CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IHBlbWluamFtID0gZm9ybURhdGEuZ2V0KFwiYm9ycm93ZXJcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0YXR1czogXCJCT1JST1dFRFwiLFxyXG4gICAgICAgIHBlbWluamFtOiBwZW1pbmphbSxcclxuICAgICAgICB0Z2xQaW5qYW06IG5ldyBEYXRlKClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYXJhbmcgYmVyaGFzaWwgZGlwaW5qYW0hIPCflZJcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1wcm9zZXMgcGVtaW5qYW1hbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNC4gS2VtYmFsaWthbiBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtlbWJhbGlrYW5CYXJhbmcoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiaWRcIikpO1xyXG4gIGNvbnN0IGtvbmRpc2kgPSBmb3JtRGF0YS5nZXQoXCJjb25kaXRpb25cIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyBBbWJpbCBkYXRhIGJhcmFuZyBkdWx1IGJ1YXQgdGF1IHNpYXBhIHBlbWluamFtIHRlcmFraGlyXHJcbiAgICAgIGNvbnN0IGJhcmFuZyA9IGF3YWl0IHR4LmludmVudGFyaXMuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICAgIGlmICghYmFyYW5nIHx8ICFiYXJhbmcucGVtaW5qYW0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEYXRhIGJhcmFuZyB0aWRhayB2YWxpZCBhdGF1IHRpZGFrIHNlZGFuZyBkaXBpbmphbS5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEEuIFNpbXBhbiBrZSBSaXdheWF0XHJcbiAgICAgIGF3YWl0IHR4LnJpd2F5YXRBc2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaW52ZW50YXJpc0lkOiBpZCxcclxuICAgICAgICAgIHBlbWluamFtOiBiYXJhbmcucGVtaW5qYW0sXHJcbiAgICAgICAgICB0Z2xLZWx1YXI6IGJhcmFuZy50Z2xQaW5qYW0gfHwgbmV3IERhdGUoKSxcclxuICAgICAgICAgIHRnbEtlbWJhbGk6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBrb25kaXNpS2VtYmFsaToga29uZGlzaVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCLiBSZXNldCBTdGF0dXMgQmFyYW5nXHJcbiAgICAgIGF3YWl0IHR4LmludmVudGFyaXMudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czoga29uZGlzaSA9PT0gXCJSdXNha1wiID8gXCJNQUlOVEVOQU5DRVwiIDogXCJBVkFJTEFCTEVcIixcclxuICAgICAgICAgIGtvbmRpc2k6IGtvbmRpc2ksXHJcbiAgICAgICAgICBwZW1pbmphbTogbnVsbCxcclxuICAgICAgICAgIHRnbFBpbmphbTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJhcmFuZyBzdWRhaCBkaWtlbWJhbGlrYW4hIOKchVwiIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVUVVJOIElURU0gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiR2FnYWwgbWVtcHJvc2VzIHBlbmdlbWJhbGlhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDExLiBTVEFUSVNUSUsgUEVOR1VOSlVORyAoVklTSVRPUiBUUkFDS0lORylcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tWaXNpdG9yKGlwOiBzdHJpbmcsIHVzZXJBZ2VudDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcclxuICAvLyAxLiBBYmFpa2FuIHJ1dGUgaW50ZXJuYWwvYWRtaW5cclxuICBpZiAocGF0aC5zdGFydHNXaXRoKCcvYWRtaW4nKSB8fCBwYXRoLnN0YXJ0c1dpdGgoJy9hcGknKSB8fCBwYXRoLmluY2x1ZGVzKCdfbmV4dCcpIHx8IHBhdGguaW5jbHVkZXMoJ2Zhdmljb24nKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gMi4gRmlsdGVyIEJvdCBEYXNhciAoTWVuY2VnYWgganV0YWFuIGhpdCBkYXJpIGNyYXdsZXIpXHJcbiAgY29uc3QgYm90S2V5d29yZHMgPSBbJ2JvdCcsICdjcmF3bGVyJywgJ3NwaWRlcicsICdnb29nbGVib3QnLCAnYmluZ2JvdCcsICd5YW5kZXhib3QnLCAnc2x1cnAnLCAnYmFpZHVzcGlkZXInXTtcclxuICBjb25zdCB1YUxvd2VyID0gdXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKGJvdEtleXdvcmRzLnNvbWUoa2V5d29yZCA9PiB1YUxvd2VyLmluY2x1ZGVzKGtleXdvcmQpKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gU2FmZXR5IGNoZWNrOiBQYXN0aWthbiBtb2RlbCB2aXNpdG9yIGFkYVxyXG4gIGlmICghKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IpIHJldHVybjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIDMuIEd1bmFrYW4gcmVudGFuZyB3YWt0dSB1bnR1ayBwZW5nZWNla2FuIFwidW5pcXVlIHZpc2l0XCJcclxuICAgIC8vIEtpdGEgYW5nZ2FwIHNhdHUgb3JhbmcgYWRhbGFoIHNhdHUga3VuanVuZ2FuIHBlciAxIGphbSBwZXIgaGFsYW1hblxyXG4gICAgY29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBcclxuICAgIC8vIENlayBhcGFrYWggc3VkYWggYWRhIGt1bmp1bmdhbiBzZXJ1cGEgKGd1bmFrYW4gc2VsZWN0IGlkIHNhamEgYWdhciByaW5nYW4pXHJcbiAgICBjb25zdCByZWNlbnRWaXNpdCA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS52aXNpdG9yLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaXAsXHJcbiAgICAgICAgcGF0aCxcclxuICAgICAgICBjcmVhdGVkQXQ6IHsgZ3RlOiBvbmVIb3VyQWdvIH1cclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVjZW50VmlzaXQpIHtcclxuICAgICAgYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7IGlwLCB1c2VyQWdlbnQ6IHVzZXJBZ2VudC5zdWJzdHJpbmcoMCwgMjU1KSwgcGF0aCB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBHdW5ha2FuIGxvZ2dpbmcgeWFuZyB0aWRhayBtZW5naGVudGlrYW4gcHJvc2VzIHV0YW1hXHJcbiAgICBjb25zb2xlLmVycm9yKFwiVFJBQ0sgVklTSVRPUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDEwLiBNQU5BSkVNRU4gR0FMRVJJIEtFR0lBVEFOXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVHYWxlcmkoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBBbWJpbCBKU09OIHN0cmluZyBkYXJpIGZvcm0gY2xpZW50XHJcbiAgY29uc3QgaW1hZ2VzSnNvbiA9IGZvcm1EYXRhLmdldChcImltYWdlc1wiKSBhcyBzdHJpbmc7IFxyXG5cclxuICBpZiAoIWp1ZHVsIHx8ICFpbWFnZXNKc29uKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKdWR1bCBkYW4gbWluaW1hbCAxIEZvdG8gd2FqaWIgZGlpc2khXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gTU9ERSBFRElUXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkUmF3KSB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb24gLy8gU2ltcGFuIHNlYmFnYWkgSlNPTiBTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTU9ERSBCQVJVXHJcbiAgICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCwga2F0ZWdvcmksIGRlc2tyaXBzaSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWwpLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXNKc29uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiR2FsZXJpIGJlcmhhc2lsIGRpc2ltcGFuISDwn5O4XCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkdBTEVSSSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGdhbGVyaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5nYWxlcmkuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdSQStGc0IsMExBQUEifQ==
}),
"[project]/app/admin/DashboardUI.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-client] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-left.js [app-client] (ecmascript) <export default as ArrowDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DashboardCharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SpotlightCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$f8b2a1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:f8b2a1 [app-client] (ecmascript) <text/javascript>");
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
// ✅ UPDATE: 8 LANGKAH PANDUAN LENGKAP
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
function DashboardUI({ stats, agenda, transaksiTerakhir, aspirasi, chartData }) {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNotifOpen, setIsNotifOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const notifRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardUI.useEffect": ()=>{
            setIsClient(true);
            // Handle click outside to close notif
            const handleClickOutside = {
                "DashboardUI.useEffect.handleClickOutside": (event)=>{
                    if (notifRef.current && !notifRef.current.contains(event.target)) {
                        setIsNotifOpen(false);
                        setReplyingTo(null);
                        setReplyText("");
                    }
                }
            }["DashboardUI.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "DashboardUI.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["DashboardUI.useEffect"];
        }
    }["DashboardUI.useEffect"], []);
    const handleReply = async (id)=>{
        if (!replyText.trim()) return;
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("id", id.toString());
        formData.append("balasan", replyText);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$f8b2a1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["replyAspirasi"])(formData);
        if (res.success) {
            setReplyingTo(null);
            setReplyText("");
        // Aspirasi akan terupdate otomatis via revalidatePath di action
        } else {
            alert(res.message);
        }
        setIsSubmitting(false);
    };
    // Helpers Warna Tag
    const tagColorMap = {
        orange: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
        purple: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
        blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
        green: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
    };
    // Helpers Warna Icon Akses Cepat
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
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"],
            color: 'blue',
            href: '/admin/berita'
        },
        {
            label: 'Buat Surat',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            color: 'pink',
            href: '/admin/surat'
        },
        {
            label: 'Scan Absensi',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"],
            color: 'green',
            href: '/admin/absensi'
        },
        {
            label: 'Input Kas',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
            color: 'orange',
            href: '/admin/kas'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh-140px)] flex flex-col font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6 pb-6 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-black font-bold text-slate-900 dark:text-white tracking-tight tour-dashboard-header",
                                        children: "Dashboard Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this),
                                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        steps: dashboardSteps
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 142,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 dark:text-slate-400 text-sm font-medium",
                                children: "Pantau performa organisasi secara real-time hari ini."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 137,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 relative",
                        ref: notifRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsNotifOpen(!isNotifOpen);
                                    if (isNotifOpen) {
                                        setReplyingTo(null);
                                        setReplyText("");
                                    }
                                },
                                className: `tour-notif-bell w-10 h-10 rounded-lg border flex items-center justify-center relative shadow-sm transition-all active:scale-95 ${isNotifOpen ? "bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-500/20 dark:border-blue-500/30 dark:text-blue-400" : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 hover:shadow-md hover:bg-slate-50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    stats.aspirasiBaru > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-[#0f172a] animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 164,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 149,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isNotifOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut"
                                    },
                                    className: "absolute right-0 top-12 w-80 md:w-[420px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                                            size: 18,
                                                            className: "text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-black font-bold text-slate-900 dark:text-white text-sm",
                                                            children: "Aspirasi Terbaru"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full",
                                                    children: [
                                                        stats.aspirasiBaru,
                                                        " Baru"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 177,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-[450px] overflow-y-auto custom-scrollbar p-2 space-y-2",
                                            children: aspirasi.length > 0 ? aspirasi.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 rounded-xl transition-all border ${replyingTo === item.id ? "bg-blue-50/50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30" : "hover:bg-slate-50 dark:hover:bg-white/5 border-transparent hover:border-slate-100 dark:hover:border-white/5"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black font-bold text-xs shrink-0 shadow-sm",
                                                                children: item.pengirim.charAt(0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between mb-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-xs font-black font-bold text-slate-900 dark:text-white truncate pr-2",
                                                                                children: item.pengirim
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                lineNumber: 204,
                                                                                columnNumber: 40
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] text-slate-400 font-medium shrink-0",
                                                                                children: formatDateShort(item.createdAt || new Date())
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                lineNumber: 205,
                                                                                columnNumber: 40
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed",
                                                                        children: item.isi
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                        lineNumber: 207,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-[8px] font-black font-bold px-1.5 py-0.5 rounded ${tagColorMap[getKategoriColor(item.kategori)]}`,
                                                                                children: item.kategori
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                lineNumber: 212,
                                                                                columnNumber: 40
                                                                            }, this),
                                                                            item.status !== 'SELESAI' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    if (replyingTo === item.id) {
                                                                                        setReplyingTo(null);
                                                                                        setReplyText("");
                                                                                    } else {
                                                                                        setReplyingTo(item.id);
                                                                                        setReplyText("");
                                                                                    }
                                                                                },
                                                                                className: "text-[10px] font-black font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                                        size: 12
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                        lineNumber: 229,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    replyingTo === item.id ? "Batal" : "Balas Cepat"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                lineNumber: 217,
                                                                                columnNumber: 42
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] text-green-500 font-bold flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                        size: 10
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                        lineNumber: 234,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    " Terjawab"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                lineNumber: 233,
                                                                                columnNumber: 42
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                                        children: replyingTo === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                            initial: {
                                                                                opacity: 0,
                                                                                height: 0
                                                                            },
                                                                            animate: {
                                                                                opacity: 1,
                                                                                height: "auto"
                                                                            },
                                                                            exit: {
                                                                                opacity: 0,
                                                                                height: 0
                                                                            },
                                                                            className: "mt-3 overflow-hidden",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                    autoFocus: true,
                                                                                    value: replyText,
                                                                                    onChange: (e)=>setReplyText(e.target.value),
                                                                                    placeholder: "Tulis jawaban Anda...",
                                                                                    className: "w-full p-2 text-xs rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none resize-none h-20"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                    lineNumber: 248,
                                                                                    columnNumber: 43
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mt-2 flex justify-end",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        disabled: isSubmitting || !replyText.trim(),
                                                                                        onClick: ()=>handleReply(item.id),
                                                                                        className: "bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-[10px] font-black font-bold px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors",
                                                                                        children: [
                                                                                            isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                                size: 12,
                                                                                                className: "animate-spin"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                                lineNumber: 261,
                                                                                                columnNumber: 63
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                                                size: 12
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                                lineNumber: 261,
                                                                                                columnNumber: 112
                                                                                            }, this),
                                                                                            "Kirim Balasan"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                        lineNumber: 256,
                                                                                        columnNumber: 45
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                                    lineNumber: 255,
                                                                                    columnNumber: 43
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                        lineNumber: 240,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 31
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 28
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-12 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 32
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 italic",
                                                        children: "Belum ada aspirasi baru."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 273,
                                                columnNumber: 26
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 187,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                router.push('/admin/aspirasi');
                                                setIsNotifOpen(false);
                                            },
                                            className: "w-full p-3 text-center text-xs font-black font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors border-t border-slate-100 dark:border-white/5 flex items-center justify-center gap-2 group",
                                            children: [
                                                "Lihat Semua Aspirasi",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 14,
                                                    className: "group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 282,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                    lineNumber: 170,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 168,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 148,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/DashboardUI.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto pb-20 pr-2 custom-scrollbar space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 tour-stats-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                color: "blue",
                                className: "p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-blue-300 transition-colors",
                                onClick: ()=>router.push('/admin/absensi'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                        children: "Kehadiran Hari Ini"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                                children: stats.hadirHariIni
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-slate-400",
                                                children: [
                                                    "/ ",
                                                    stats.totalPengurus
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 302,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                color: "purple",
                                className: "p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-purple-300 transition-colors",
                                onClick: ()=>router.push('/admin/aspirasi'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 314,
                                            columnNumber: 172
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                        children: "Aspirasi Baru"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                        children: stats.aspirasiBaru
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 313,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                color: "green",
                                className: "p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-green-300 transition-colors",
                                onClick: ()=>router.push('/admin/proker'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 320,
                                            columnNumber: 168
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                        children: "Proker Selesai"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                        children: [
                                            stats.prokerPersen,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 319,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                color: "yellow",
                                className: "p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-yellow-300 transition-colors",
                                onClick: ()=>router.push('/admin/kas'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 326,
                                            columnNumber: 172
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                        children: "Dana Kas"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                        children: formatCurrency(stats.danaKas)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 325,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                color: "indigo",
                                className: "tour-total-views p-6 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-indigo-300 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 332,
                                            columnNumber: 172
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1",
                                        children: "Total Views"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-black font-bold text-slate-900 dark:text-white tracking-tight",
                                                children: stats.totalViews
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded",
                                                children: [
                                                    "+",
                                                    stats.viewsHariIni,
                                                    " hari ini"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 331,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 301,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-black font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    size: 20,
                                                    className: "text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 116
                                                }, this),
                                                " Tren Aktivitas"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 346,
                                            columnNumber: 16
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[250px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivityChart"], {
                                            data: chartData
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 348,
                                            columnNumber: 40
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 344,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-black font-bold text-md text-slate-900 dark:text-white mb-6 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
                                                size: 18,
                                                className: "text-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 353,
                                                columnNumber: 118
                                            }, this),
                                            " Akses Cepat"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 flex-1",
                                        children: quickAccessItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push(item.href),
                                                className: "relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md transition-all group active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        size: 24,
                                                        className: `${iconColorMap[item.color]}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-black font-bold text-slate-600 dark:text-slate-300",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 352,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 342,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-black font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 18,
                                                className: "text-orange-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 374,
                                                columnNumber: 110
                                            }, this),
                                            " Agenda Penting"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: agenda.length > 0 ? agenda.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 p-3 rounded-lg border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors group cursor-pointer",
                                                onClick: ()=>router.push('/admin/proker'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 font-bold text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            size: 14,
                                                            className: "opacity-70"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 165
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-black font-bold text-slate-800 dark:text-white line-clamp-1",
                                                                children: item.nama
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        size: 10
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                        lineNumber: 381,
                                                                        columnNumber: 110
                                                                    }, this),
                                                                    " ",
                                                                    formatDateShort(item.deadline)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 italic",
                                            children: "Belum ada agenda."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 384,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 373,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-black font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                size: 18,
                                                className: "text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 390,
                                                columnNumber: 110
                                            }, this),
                                            " Transaksi Terakhir"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: transaksiTerakhir.length > 0 ? transaksiTerakhir.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer",
                                                onClick: ()=>router.push('/admin/kas'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-8 h-8 rounded-full flex items-center justify-center ${item.tipe === 'PEMASUKAN' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`,
                                                                children: item.tipe === 'PEMASUKAN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__["ArrowDownLeft"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 58
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 87
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 26
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-xs font-bold text-slate-800 dark:text-white line-clamp-1",
                                                                        children: item.judul
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] text-slate-500",
                                                                        children: formatDateShort(item.tanggal)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 26
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-bold ${item.tipe === 'PEMASUKAN' ? 'text-green-600' : 'text-red-500'}`,
                                                        children: [
                                                            item.tipe === 'PEMASUKAN' ? '+' : '-',
                                                            formatCurrency(item.nominal).replace('Rp', '')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 393,
                                                columnNumber: 19
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 italic",
                                            children: "Belum ada transaksi."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 407,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 389,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-black font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 18,
                                                className: "text-pink-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 414,
                                                columnNumber: 110
                                            }, this),
                                            " Inbox Aspirasi"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: aspirasi.length > 0 ? aspirasi.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>router.push('/admin/aspirasi'),
                                                className: "group flex items-center justify-between p-3 rounded-xl bg-slate-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-xs font-black font-bold text-slate-700 dark:text-slate-300 shadow-sm shrink-0",
                                                                children: item.pengirim.charAt(0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 419,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-xs font-black font-bold text-slate-900 dark:text-white truncate",
                                                                        children: item.pengirim
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                        lineNumber: 421,
                                                                        columnNumber: 28
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5",
                                                                        children: item.isi
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 28
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[9px] font-black font-bold px-2 py-0.5 rounded-md ${tagColorMap[getKategoriColor(item.kategori)]} shrink-0`,
                                                        children: item.kategori
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 italic text-center p-4",
                                            children: "Belum ada aspirasi baru."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/DashboardUI.tsx",
                                            lineNumber: 428,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/DashboardUI.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/DashboardUI.tsx",
                                lineNumber: 413,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/DashboardUI.tsx",
                        lineNumber: 370,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/DashboardUI.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/DashboardUI.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(DashboardUI, "SZWhTHvmqjqU88mwGDiE3+1wSPE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardUI;
var _c;
__turbopack_context__.k.register(_c, "DashboardUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9777488d._.js.map