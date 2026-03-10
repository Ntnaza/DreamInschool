(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/HeroOrbit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroOrbit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroOrbit() {
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [angle, setAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeLogoIndex, setActiveLogoIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const centerLogos = [
        {
            src: "/logos/SMK.png",
            alt: "SMK Nurul Islam"
        },
        {
            src: "/logos/OSKA.png",
            alt: "OSIS & MPK"
        }
    ];
    // === DATA PLANET ===
    const planets = [
        {
            name: "PPLG",
            img: "/logos/PPLG.png",
            shadow: "#1d4ed8"
        },
        {
            name: "TO",
            img: "/logos/TO.png",
            shadow: "#1e3a8a"
        },
        {
            name: "DKV",
            img: "/logos/DKV.png",
            shadow: "#a1a1aa"
        },
        {
            name: "AKL",
            img: "/logos/AKL.png",
            shadow: "#fbbf24"
        },
        {
            name: "MPLB",
            img: "/logos/MPLB.png",
            shadow: "#9ca3af"
        },
        {
            name: "TJKT",
            img: "/logos/TJKT.png",
            shadow: "#ef4444"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroOrbit.useEffect": ()=>{
            setIsMounted(true);
            requestRef.current = requestAnimationFrame(animate);
            return ({
                "HeroOrbit.useEffect": ()=>{
                    if (requestRef.current) cancelAnimationFrame(requestRef.current);
                }
            })["HeroOrbit.useEffect"];
        }
    }["HeroOrbit.useEffect"], []);
    const animate = ()=>{
        setAngle((prevAngle)=>(prevAngle + 0.003) % (Math.PI * 2));
        requestRef.current = requestAnimationFrame(animate);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroOrbit.useEffect": ()=>{
            const interval = setInterval({
                "HeroOrbit.useEffect.interval": ()=>{
                    setActiveLogoIndex({
                        "HeroOrbit.useEffect.interval": (prev)=>(prev + 1) % centerLogos.length
                    }["HeroOrbit.useEffect.interval"]);
                }
            }["HeroOrbit.useEffect.interval"], 4000);
            return ({
                "HeroOrbit.useEffect": ()=>clearInterval(interval)
            })["HeroOrbit.useEffect"];
        }
    }["HeroOrbit.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroOrbit.useEffect": ()=>{
            const handleMouseMove = {
                "HeroOrbit.useEffect.handleMouseMove": (e)=>{
                    const x = e.clientX / window.innerWidth * 2 - 1;
                    const y = e.clientY / window.innerHeight * 2 - 1;
                    setMousePosition({
                        x,
                        y
                    });
                }
            }["HeroOrbit.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "HeroOrbit.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["HeroOrbit.useEffect"];
        }
    }["HeroOrbit.useEffect"], []);
    const radiusX = 320;
    const radiusY = 110;
    const getPosition = (index, total)=>{
        const offsetAngle = index / total * Math.PI * 2;
        const currentAngle = angle + offsetAngle;
        const x = Math.cos(currentAngle) * radiusX;
        const y = Math.sin(currentAngle) * radiusY;
        const scale = (Math.sin(currentAngle) + 2.2) / 3.2;
        const isFront = Math.sin(currentAngle) > 0;
        const zIndex = isFront ? 30 : 10;
        return {
            x,
            y,
            scale,
            zIndex
        };
    };
    const sunX = mousePosition.x * -15;
    const sunY = mousePosition.y * -15;
    const orbitX = mousePosition.x * -8;
    const orbitY = mousePosition.y * -8;
    if (!isMounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[650px]"
    }, void 0, false, {
        fileName: "[project]/components/HeroOrbit.tsx",
        lineNumber: 79,
        columnNumber: 26
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[500px] md:h-[650px] flex items-center justify-center perspective-1000",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-40 h-40 md:w-56 md:h-56 flex items-center justify-center transition-transform duration-100 ease-out p-4",
                style: {
                    zIndex: 20,
                    background: 'transparent',
                    boxShadow: 'none',
                    transform: `translate(${sunX}px, ${sunY}px)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full z-10",
                    children: centerLogos.map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${index === activeLogoIndex ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 -rotate-12"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: logo.src,
                                alt: logo.alt,
                                fill: true,
                                className: "object-contain",
                                style: {
                                    // AURA PUTIH KUAT (Motherbase Glow)
                                    // Drop Shadow 1 (Hitam): Biar timbul
                                    // Drop Shadow 2 (Putih Terang): Aura suci mengikuti bentuk logo
                                    filter: `drop-shadow(0 10px 15px rgba(0,0,0,0.5)) drop-shadow(0 0 35px rgba(255,255,255,0.8))`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/HeroOrbit.tsx",
                                lineNumber: 104,
                                columnNumber: 18
                            }, this)
                        }, logo.src, false, {
                            fileName: "[project]/components/HeroOrbit.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/HeroOrbit.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeroOrbit.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[640px] h-[640px] scale-y-[0.35] transition-transform duration-100 ease-out",
                style: {
                    zIndex: 0,
                    transform: `translate(${orbitX}px, ${orbitY}px) scaleY(0.35)`
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroOrbit.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            planets.map((planet, index)=>{
                const pos = getPosition(index, planets.length);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute flex items-center justify-center w-20 h-20 md:w-24 md:h-24 group cursor-pointer transition-transform duration-75 ease-linear",
                    style: {
                        zIndex: pos.zIndex,
                        transform: `translate(${pos.x + orbitX}px, ${pos.y + orbitY}px) scale(${pos.scale})`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 w-full h-full p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: planet.img,
                                alt: planet.name,
                                fill: true,
                                className: "object-contain transform group-hover:scale-110 transition-transform duration-300",
                                style: {
                                    // AURA WARNA (Sesuai Jurusan)
                                    filter: `drop-shadow(0 5px 5px rgba(0,0,0,0.5)) drop-shadow(0 0 20px ${planet.shadow})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/HeroOrbit.tsx",
                                lineNumber: 144,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HeroOrbit.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border border-slate-200 dark:border-slate-500/30 whitespace-nowrap shadow-lg z-50 pointer-events-none",
                            children: planet.name
                        }, void 0, false, {
                            fileName: "[project]/components/HeroOrbit.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this)
                    ]
                }, planet.name, true, {
                    fileName: "[project]/components/HeroOrbit.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroOrbit.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(HeroOrbit, "VuWyAki9pytdZuTHmc3NeTkqlGg=");
_c = HeroOrbit;
var _c;
__turbopack_context__.k.register(_c, "HeroOrbit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LeaderSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeaderSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function LeaderSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full pt-20 pb-40 z-10 overflow-hidden transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-[#020617] dark:to-[#0f172a] z-0 transition-colors duration-500"
            }, void 0, false, {
                fileName: "[project]/components/LeaderSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] dark:opacity-[0.10] mix-blend-overlay z-0"
            }, void 0, false, {
                fileName: "[project]/components/LeaderSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px] dark:hidden"
            }, void 0, false, {
                fileName: "[project]/components/LeaderSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-[100px] dark:hidden"
            }, void 0, false, {
                fileName: "[project]/components/LeaderSection.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden dark:block absolute top-[20%] left-[20%] w-96 h-96 bg-slate-500/10 rounded-full blur-[100px] animate-pulse"
            }, void 0, false, {
                fileName: "[project]/components/LeaderSection.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden dark:block absolute bottom-[20%] right-[20%] w-96 h-96 bg-slate-400/10 rounded-full blur-[100px] animate-pulse"
            }, void 0, false, {
                fileName: "[project]/components/LeaderSection.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 max-w-6xl mx-auto px-8 md:px-12 space-y-48",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center gap-12 md:gap-24 relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-5/12 flex justify-center md:justify-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-blue-200/50 dark:bg-white/10 blur-[70px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 33,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-700/50 bg-white/50 dark:bg-white/5 shadow-2xl dark:shadow-none transition-all duration-500 group-hover:-translate-y-2 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
                                                alt: "Ketua OSIS",
                                                fill: true,
                                                className: "object-cover transition-transform duration-700 group-hover:scale-110 grayscale-0 dark:grayscale-[30%] dark:group-hover:grayscale-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 36,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-[#0f172a] dark:via-[#0f172a]/80 p-6 pt-24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-black uppercase tracking-wide text-white",
                                                        children: "Raka Aditya"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LeaderSection.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-[1px] w-8 bg-blue-400 dark:bg-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LeaderSection.tsx",
                                                                lineNumber: 47,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-blue-300 dark:text-slate-300 text-xs font-bold tracking-[0.2em] uppercase",
                                                                children: "Ketua OSIS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LeaderSection.tsx",
                                                                lineNumber: 48,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/LeaderSection.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 18
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeaderSection.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-7/12 text-center md:text-left space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white",
                                        children: [
                                            "Aksi Nyata, ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 59,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500",
                                                children: "Bukan Sekadar Janji."
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-700 dark:text-slate-400 leading-relaxed text-sm md:text-base font-medium dark:font-light max-w-xl mx-auto md:mx-0 border-l-2 border-blue-600/30 dark:border-slate-500/50 pl-4",
                                        children: '"OSIS adalah wajah kedisiplinan dan prestasi. Kami hadir untuk melayani, menginspirasi, dan membawa nama baik sekolah ke tingkat yang lebih tinggi."'
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center md:justify-start gap-3 pt-2",
                                        children: [
                                            'Kolaborasi',
                                            'Digitalisasi',
                                            'Prestasi'
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-4 py-1.5 rounded-full bg-white/60 dark:bg-slate-800 border border-blue-300 dark:border-slate-600/50 text-xs font-bold text-blue-800 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-default tracking-wide shadow-sm",
                                                children: [
                                                    "✦ ",
                                                    item
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeaderSection.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeaderSection.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-5/12 flex justify-center md:justify-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-blue-200/50 dark:bg-white/10 blur-[70px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-700/50 bg-white/50 dark:bg-white/5 shadow-2xl dark:shadow-none transition-all duration-500 group-hover:-translate-y-2 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
                                                alt: "Ketua MPK",
                                                fill: true,
                                                className: "object-cover transition-transform duration-700 group-hover:scale-110 grayscale-0 dark:grayscale-[30%] dark:group-hover:grayscale-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 90,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-[#0f172a] dark:via-[#0f172a]/80 p-6 pt-24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-black uppercase tracking-wide text-white",
                                                        children: "Siti Aminah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LeaderSection.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-[1px] w-8 bg-blue-400 dark:bg-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LeaderSection.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-blue-300 dark:text-slate-300 text-xs font-bold tracking-[0.2em] uppercase",
                                                                children: "Ketua MPK"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LeaderSection.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/LeaderSection.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 18
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeaderSection.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-7/12 text-center md:text-left space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white",
                                        children: [
                                            "Suara Anda, ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 113,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500",
                                                children: "Amanah Kami."
                                            }, void 0, false, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-700 dark:text-slate-400 leading-relaxed text-sm md:text-base font-medium dark:font-light max-w-xl mx-auto md:mx-0 border-l-2 border-blue-600/30 dark:border-slate-500/50 pl-4",
                                        children: '"MPK berdiri di atas prinsip transparansi dan keadilan. Kami memastikan setiap kebijakan sekolah berpihak pada siswa dan setiap suara didengar."'
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center md:justify-start gap-3 pt-2",
                                        children: [
                                            'Transparansi',
                                            'Keadilan',
                                            'Solutif'
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-4 py-1.5 rounded-full bg-white/60 dark:bg-slate-800 border border-blue-300 dark:border-slate-600/50 text-xs font-bold text-blue-800 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-default tracking-wide shadow-sm",
                                                children: [
                                                    "✦ ",
                                                    item
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/components/LeaderSection.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/LeaderSection.tsx",
                                        lineNumber: 123,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LeaderSection.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LeaderSection.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LeaderSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LeaderSection.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = LeaderSection;
var _c;
__turbopack_context__.k.register(_c, "LeaderSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProgramSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgramSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function ProgramSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-24 z-10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-slate-300 dark:bg-[#0f172a] z-0"
            }, void 0, false, {
                fileName: "[project]/components/ProgramSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 dark:opacity-20 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[10%] left-[10%] w-96 h-96 bg-blue-400/30 dark:bg-slate-400/10 rounded-full blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/components/ProgramSection.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[10%] right-[10%] w-96 h-96 bg-indigo-400/30 dark:bg-white/5 rounded-full blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/components/ProgramSection.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProgramSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 md:px-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto mb-16 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-5xl font-black text-slate-900 dark:text-white",
                                children: [
                                    "Program ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-200 dark:to-slate-500",
                                        children: "Unggulan"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProgramSection.tsx",
                                        lineNumber: 23,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProgramSection.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 dark:text-slate-400 font-medium",
                                children: "Inovasi kegiatan untuk mengembangkan bakat, minat, dan karakter siswa SMK Nurul Islam Cianjur."
                            }, void 0, false, {
                                fileName: "[project]/components/ProgramSection.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProgramSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative col-span-1 md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 z-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
                                                alt: "E-Sport",
                                                fill: true,
                                                className: "object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-70"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 36,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 43,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProgramSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 p-8 w-full z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wider mb-3 inline-block shadow-lg shadow-blue-600/50",
                                                children: "TRENDING 🔥"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl md:text-4xl font-black text-white mb-2",
                                                children: "SMK NI E-Sport Championship"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-200 text-sm md:text-base max-w-lg line-clamp-2",
                                                children: "Wadah kompetisi Mobile Legends, PUBG, dan Valorant antar kelas. Junjung tinggi sportivitas dan kembangkan strategi tim."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProgramSection.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProgramSection.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative col-span-1 md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 z-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "https://images.unsplash.com/photo-1459749411177-287ce112a8bf?q=80&w=800&auto=format&fit=crop",
                                                alt: "Pensi",
                                                fill: true,
                                                className: "object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-70"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 62,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 69,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProgramSection.tsx",
                                        lineNumber: 61,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 p-6 w-full z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-white mb-1",
                                                children: "Gebyar Seni (PENSI)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-purple-200 text-xs font-medium",
                                                children: "Ajang unjuk bakat musik & tari."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProgramSection.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProgramSection.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative col-span-1 md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 z-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
                                                alt: "Leadership",
                                                fill: true,
                                                className: "object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-70"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/20 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 87,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProgramSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 p-6 w-full z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-white mb-1",
                                                children: "LDKS & Leadership"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-orange-200 text-xs font-medium",
                                                children: "Membentuk karakter pemimpin tangguh."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProgramSection.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProgramSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProgramSection.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProgramSection.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProgramSection.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProgramSection.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = ProgramSection;
var _c;
__turbopack_context__.k.register(_c, "ProgramSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_fe803efd._.js.map