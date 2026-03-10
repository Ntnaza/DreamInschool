module.exports = [
"[project]/components/HeroOrbit.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroOrbit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function HeroOrbit() {
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [angle, setAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeLogoIndex, setActiveLogoIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        requestRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);
    const animate = ()=>{
        setAngle((prevAngle)=>(prevAngle + 0.003) % (Math.PI * 2));
        requestRef.current = requestAnimationFrame(animate);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setActiveLogoIndex((prev)=>(prev + 1) % centerLogos.length);
        }, 4000);
        return ()=>clearInterval(interval);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            const x = e.clientX / window.innerWidth * 2 - 1;
            const y = e.clientY / window.innerHeight * 2 - 1;
            setMousePosition({
                x,
                y
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>window.removeEventListener("mousemove", handleMouseMove);
    }, []);
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
    if (!isMounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[650px]"
    }, void 0, false, {
        fileName: "[project]/components/HeroOrbit.tsx",
        lineNumber: 79,
        columnNumber: 26
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[500px] md:h-[650px] flex items-center justify-center perspective-1000",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-40 h-40 md:w-56 md:h-56 flex items-center justify-center transition-transform duration-100 ease-out p-4",
                style: {
                    zIndex: 20,
                    background: 'transparent',
                    boxShadow: 'none',
                    transform: `translate(${sunX}px, ${sunY}px)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full z-10",
                    children: centerLogos.map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${index === activeLogoIndex ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 -rotate-12"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute flex items-center justify-center w-20 h-20 md:w-24 md:h-24 group cursor-pointer transition-transform duration-75 ease-linear",
                    style: {
                        zIndex: pos.zIndex,
                        transform: `translate(${pos.x + orbitX}px, ${pos.y + orbitY}px) scale(${pos.scale})`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 w-full h-full p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/components/GalleryClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
;
;
;
function GalleryClient({ items }) {
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // === LOGIKA MODAL (Sama persis dengan GaleriPublicClient) ===
    const openModal = (item)=>{
        setSelectedItem(item);
        setCurrentImageIndex(0);
        document.body.style.overflow = "hidden"; // Kunci scroll
    };
    const closeModal = ()=>{
        setSelectedItem(null);
        document.body.style.overflow = "auto"; // Buka scroll
    };
    const nextImage = (e)=>{
        e.stopPropagation();
        if (!selectedItem) return;
        setCurrentImageIndex((prev)=>(prev + 1) % selectedItem.album.length);
    };
    const prevImage = (e)=>{
        e.stopPropagation();
        if (!selectedItem) return;
        setCurrentImageIndex((prev)=>(prev - 1 + selectedItem.album.length) % selectedItem.album.length);
    };
    // Shortcut Keyboard
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (!selectedItem) return;
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") setCurrentImageIndex((prev)=>(prev + 1) % selectedItem.album.length);
            if (e.key === "ArrowLeft") setCurrentImageIndex((prev)=>(prev - 1 + selectedItem.album.length) % selectedItem.album.length);
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        selectedItem
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-white dark:bg-[#020617] border-t border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 mb-10 flex justify-between items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-black text-slate-900 dark:text-white",
                                children: [
                                    "Dokumentasi ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600",
                                        children: "Kegiatan"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GalleryClient.tsx",
                                        lineNumber: 63,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GalleryClient.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 dark:text-slate-400 mt-2",
                                children: "Momen-momen seru yang terekam kamera lensa OSIS."
                            }, void 0, false, {
                                fileName: "[project]/components/GalleryClient.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GalleryClient.tsx",
                        lineNumber: 61,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/galeri",
                        className: "hidden md:block text-sm font-bold text-blue-600 hover:underline",
                        children: "Lihat Semua Foto →"
                    }, void 0, false, {
                        fileName: "[project]/components/GalleryClient.tsx",
                        lineNumber: 69,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GalleryClient.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white dark:from-[#020617] to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/GalleryClient.tsx",
                        lineNumber: 76,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white dark:from-[#020617] to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/GalleryClient.tsx",
                        lineNumber: 77,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]",
                        children: [
                            ...items,
                            ...items,
                            ...items
                        ].slice(0, 15).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>openModal(item),
                                className: "relative w-[280px] h-[180px] md:w-[350px] md:h-[220px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all border border-slate-100 dark:border-white/10 shadow-sm group/item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.album[0],
                                        alt: item.title,
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 280px, 350px"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GalleryClient.tsx",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 flex flex-col justify-end p-4 transition-opacity duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-white bg-blue-600 px-2 py-0.5 rounded w-fit mb-1",
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/components/GalleryClient.tsx",
                                                lineNumber: 96,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-bold text-sm truncate",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/GalleryClient.tsx",
                                                lineNumber: 97,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GalleryClient.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/GalleryClient.tsx",
                                lineNumber: 82,
                                columnNumber: 16
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/GalleryClient.tsx",
                        lineNumber: 79,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GalleryClient.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            mounted && selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.1,
                        ease: "linear"
                    },
                    className: "fixed inset-0 z-[999999] flex items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/60 backdrop-blur-xl",
                            onClick: closeModal
                        }, void 0, false, {
                            fileName: "[project]/components/GalleryClient.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.98,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 0.98,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.2,
                                ease: "easeOut"
                            },
                            className: "relative w-full max-w-6xl h-[85vh] flex flex-col md:flex-row bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden shadow-2xl z-10 mx-4 ring-1 ring-black/5 dark:ring-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full md:w-3/4 h-[50%] md:h-full bg-white dark:bg-[#1e293b] flex items-center justify-center border-r border-slate-100 dark:border-slate-700/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GalleryClient.tsx",
                                            lineNumber: 131,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-full p-2 md:p-8 flex items-center justify-center z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: selectedItem.album[currentImageIndex],
                                                alt: "Detail",
                                                fill: true,
                                                className: "object-contain drop-shadow-sm",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/GalleryClient.tsx",
                                                lineNumber: 134,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GalleryClient.tsx",
                                            lineNumber: 133,
                                            columnNumber: 21
                                        }, this),
                                        selectedItem.album.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: prevImage,
                                                    className: "absolute left-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all opacity-0 md:opacity-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {}, void 0, false, {
                                                        fileName: "[project]/components/GalleryClient.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 233
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: nextImage,
                                                    className: "absolute right-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all opacity-0 md:opacity-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                                                        fileName: "[project]/components/GalleryClient.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 234
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white text-xs font-bold shadow-sm tracking-widest",
                                                    children: [
                                                        currentImageIndex + 1,
                                                        " / ",
                                                        selectedItem.album.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GalleryClient.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-1/4 h-[50%] md:h-full bg-white dark:bg-[#1e293b] p-6 md:p-8 flex flex-col relative z-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeModal,
                                            className: "absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/GalleryClient.tsx",
                                                lineNumber: 158,
                                                columnNumber: 24
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GalleryClient.tsx",
                                            lineNumber: 157,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-y-auto mt-4 custom-scrollbar pr-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-4",
                                                    children: selectedItem.category
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight",
                                                    children: selectedItem.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-100 dark:border-slate-700/50 pb-6",
                                                    children: [
                                                        "📅 ",
                                                        selectedItem.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-700 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-line",
                                                    children: selectedItem.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 24
                                                }, this),
                                                selectedItem.album.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3",
                                                            children: "Album Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/GalleryClient.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-2",
                                                            children: selectedItem.album.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setCurrentImageIndex(idx),
                                                                    className: `relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-blue-600 opacity-100' : 'border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: img,
                                                                        alt: "thumb",
                                                                        fill: true,
                                                                        className: "object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/GalleryClient.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, idx, false, {
                                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/GalleryClient.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/GalleryClient.tsx",
                                            lineNumber: 161,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GalleryClient.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GalleryClient.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GalleryClient.tsx",
                    lineNumber: 107,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GalleryClient.tsx",
                lineNumber: 106,
                columnNumber: 11
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GalleryClient.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/AuroraBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"); // Tambah 'memo'
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Stars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// === SHADER CODE (SAMA SEPERTI SEBELUMNYA - KARENA SUDAH BAGUS) ===
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uSeed;
  varying vec2 vUv;

  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 hangingUV = vec2(vUv.x, vUv.y + vUv.x * 0.2);
    float noiseVal = snoise(vec2(hangingUV.x * 6.0 + uSeed, hangingUV.y * 1.5 - uTime * 0.1));
    float baseWave = sin(hangingUV.x * 10.0 + noiseVal * 3.0 + uTime * 0.3);
    float sharpRays = smoothstep(0.5, 0.9, baseWave);
    float edgeFade = vUv.y * (1.0 - vUv.y);
    edgeFade = pow(edgeFade, 2.0);
    float finalAlpha = sharpRays * edgeFade;
    vec3 finalColor = uColor * 1.5;
    gl_FragColor = vec4(finalColor, finalAlpha); 
  }
`;
function AuroraMesh({ color, seed, speed }) {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ref untuk warna target (PENTING untuk transisi mulus)
    const targetColorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](color));
    // Saat props color berubah, update target ref saja (jangan re-render komponen)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        targetColorRef.current.set(color);
    }, [
        color
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        if (meshRef.current) {
            const material = meshRef.current.material;
            // Update Waktu
            material.uniforms.uTime.value = state.clock.getElapsedTime() * speed;
            // Update Warna (Lerp Smooth ke target)
            material.uniforms.uColor.value.lerp(targetColorRef.current, 0.05);
        }
    });
    // Init uniforms sekali saja
    const uniforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        uTime: {
            value: 0
        },
        uColor: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](color)
        },
        uSeed: {
            value: seed
        }
    }).current;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: meshRef,
        position: [
            0,
            3,
            -8
        ],
        scale: [
            50,
            25,
            1
        ],
        rotation: [
            0.5,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    1,
                    1,
                    300,
                    300
                ]
            }, void 0, false, {
                fileName: "[project]/components/AuroraBackground.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                uniforms: uniforms,
                transparent: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
            }, void 0, false, {
                fileName: "[project]/components/AuroraBackground.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AuroraBackground.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
// === KOMPONEN UTAMA ===
function AuroraBackgroundComponent({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-0 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    5
                ],
                fov: 65
            },
            dpr: [
                1,
                1.5
            ],
            gl: {
                antialias: false
            },
            frameloop: "always",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stars"], {
                    radius: 100,
                    depth: 50,
                    count: 1500,
                    factor: 3,
                    saturation: 0,
                    fade: true,
                    speed: 0.5
                }, void 0, false, {
                    fileName: "[project]/components/AuroraBackground.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuroraMesh, {
                    color: color,
                    seed: 10.0,
                    speed: 0.8
                }, void 0, false, {
                    fileName: "[project]/components/AuroraBackground.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        0,
                        -1,
                        -2
                    ],
                    rotation: [
                        0,
                        0,
                        0.05
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuroraMesh, {
                        color: color,
                        seed: 20.0,
                        speed: 1.1
                    }, void 0, false, {
                        fileName: "[project]/components/AuroraBackground.tsx",
                        lineNumber: 120,
                        columnNumber: 12
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AuroraBackground.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AuroraBackground.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AuroraBackground.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
// 🔥 FIX BUG NGE-FREEZE: MEMOIZATION
// Ini mencegah Canvas di-reset saat parent (MajorsClient) re-render karena hover/state change
const AuroraBackground = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(AuroraBackgroundComponent);
const __TURBOPACK__default__export__ = AuroraBackground;
}),
"[project]/components/MajorsClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MajorsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
// 🔥 IMPORT SIHIR 3D KITA
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuroraBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AuroraBackground.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function MajorsClient({ majors }) {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeMajor = majors[activeIndex];
    // --- AUTO PLAY ---
    const nextSlide = ()=>setActiveIndex((curr)=>(curr + 1) % majors.length);
    const prevSlide = ()=>setActiveIndex((curr)=>(curr - 1 + majors.length) % majors.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isPaused) timeoutRef.current = setTimeout(nextSlide, 8000);
        return ()=>{
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [
        activeIndex,
        isPaused
    ]);
    // === ANIMASI KONTEN (Teks & Logo) ===
    const textVariants = {
        hidden: {
            opacity: 0,
            x: -30
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: -30,
            transition: {
                duration: 0.5
            }
        }
    };
    const logoVariants = {
        hidden: {
            opacity: 0,
            x: 50,
            scale: 0.9
        },
        visible: {
            opacity: 0.5,
            x: 0,
            scale: 1,
            transition: {
                duration: 1,
                type: "spring",
                bounce: 0
            }
        },
        exit: {
            opacity: 0,
            x: 50,
            scale: 0.9,
            transition: {
                duration: 0.5
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617]",
        onMouseEnter: ()=>setIsPaused(true),
        onMouseLeave: ()=>setIsPaused(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuroraBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                color: activeMajor.MysteriousColor
            }, void 0, false, {
                fileName: "[project]/components/MajorsClient.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_95%)] pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/components/MajorsClient.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-20 h-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-5xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center min-h-[400px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "flex flex-col justify-center relative z-20 md:text-left",
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "exit",
                                        variants: textVariants,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest w-fit mb-4 backdrop-blur-md shadow-lg",
                                                style: {
                                                    color: activeMajor.MysteriousColor,
                                                    borderColor: `${activeMajor.MysteriousColor}40`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                        size: 12,
                                                        fill: "currentColor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MajorsClient.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 29
                                                    }, this),
                                                    " ",
                                                    activeMajor.roleName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 77,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl md:text-5xl font-black text-white leading-none mb-3 tracking-tight drop-shadow-2xl",
                                                children: activeMajor.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 84,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm md:text-base font-bold text-white/50 mb-6 uppercase tracking-wider",
                                                children: activeMajor.fullName
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 87,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[2px] w-20 mb-6 rounded-full",
                                                style: {
                                                    backgroundColor: activeMajor.MysteriousColor,
                                                    boxShadow: `0 0 15px ${activeMajor.MysteriousColor}`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 92,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-slate-300 leading-relaxed drop-shadow-md font-medium max-w-md",
                                                children: activeMajor.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 97,
                                                columnNumber: 25
                                            }, this),
                                            activeMajor.count !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-black text-white flex items-baseline gap-2",
                                                    style: {
                                                        textShadow: `0 0 20px ${activeMajor.MysteriousColor}80`
                                                    },
                                                    children: [
                                                        activeMajor.count,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]",
                                                            children: "Active Agents"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/MajorsClient.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/MajorsClient.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 103,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MajorsClient.tsx",
                                        lineNumber: 73,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "relative h-[250px] md:h-[320px] flex items-center justify-center z-10",
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "exit",
                                        variants: logoVariants,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-full max-w-[280px] max-h-[280px]",
                                            children: activeMajor.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: activeMajor.logo,
                                                alt: activeMajor.title,
                                                fill: true,
                                                className: "object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex items-center justify-center text-[100px] opacity-40",
                                                style: {
                                                    color: activeMajor.MysteriousColor,
                                                    textShadow: `0 0 30px ${activeMajor.MysteriousColor}`
                                                },
                                                children: activeMajor.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 126,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/MajorsClient.tsx",
                                            lineNumber: 116,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/MajorsClient.tsx",
                                        lineNumber: 112,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, activeIndex, true, {
                                fileName: "[project]/components/MajorsClient.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/MajorsClient.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MajorsClient.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevSlide,
                                className: "p-2 text-white/40 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/MajorsClient.tsx",
                                    lineNumber: 140,
                                    columnNumber: 105
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MajorsClient.tsx",
                                lineNumber: 140,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: majors.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveIndex(index),
                                        className: `h-1 rounded-full transition-all duration-500 ${index === activeIndex ? "w-8" : "w-2 bg-white/20 hover:bg-white/40"}`,
                                        style: {
                                            backgroundColor: index === activeIndex ? activeMajor.MysteriousColor : undefined,
                                            boxShadow: index === activeIndex ? `0 0 10px ${activeMajor.MysteriousColor}` : 'none'
                                        }
                                    }, index, false, {
                                        fileName: "[project]/components/MajorsClient.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/MajorsClient.tsx",
                                lineNumber: 141,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextSlide,
                                className: "p-2 text-white/40 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/MajorsClient.tsx",
                                    lineNumber: 151,
                                    columnNumber: 105
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MajorsClient.tsx",
                                lineNumber: 151,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MajorsClient.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MajorsClient.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MajorsClient.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data:8abbe7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitAspirasi",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4057499068e6161aa5838799dc06289ccd2643b4a7":"submitAspirasi"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4057499068e6161aa5838799dc06289ccd2643b4a7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitAspirasi");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUHJva2VyU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIG5hbWE6IHouc3RyaW5nKCkubWluKDMsIFwiTmFtYSBwcm9rZXIgbWluaW1hbCAzIGthcmFrdGVyXCIpLFxyXG4gIGRlc2tyaXBzaTogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbiAgZGl2aXNpOiB6LnN0cmluZygpLFxyXG4gIHByaW9yaXRhczogei5zdHJpbmcoKS5kZWZhdWx0KFwiTWVkaXVtXCIpLFxyXG4gIGFuZ2dhcmFuOiB6Lm51bWJlcigpLm5vbm5lZ2F0aXZlKCkuZGVmYXVsdCgwKSxcclxuICBwcm9ncmVzczogei5udW1iZXIoKS5taW4oMCkubWF4KDEwMCkuZGVmYXVsdCgwKSxcclxuICBsb2thc2k6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG4gIGltYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBpc0ZlYXR1cmVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcclxuICBzdGFydERhdGU6IHouZGF0ZSgpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBkZWFkbGluZTogei5kYXRlKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAxLiBBU1BJUkFTSSBTSVNXQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLy8gLi4uIChza2lwIGZvciBicmV2aXR5LCB3aWxsIGFwcGx5IGluIG11bHRpcGxlIHN0ZXBzIGlmIG5lZWRlZClcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEFTUElSQVNJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IEJlcml0YVNjaGVtYS5zYWZlUGFyc2Uoe1xyXG4gICAganVkdWw6IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpLFxyXG4gICAga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksXHJcbiAgICBrYXRlZ29yaTogZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgfHwgXCJVbXVtXCIsXHJcbiAgICBnYW1iYXI6IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgbWVzc2FnZTogZXJyb3JNc2cuanVkdWw/LlswXSB8fCBlcnJvck1zZy5rb250ZW4/LlswXSB8fCBcIkRhdGEgdGlkYWsgdmFsaWQuXCIgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBqdWR1bCwga29udGVuLCBrYXRlZ29yaSwgZ2FtYmFyIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuICBjb25zdCBzbHVnID0gYCR7c2x1Z2lmeShqdWR1bCl9LSR7RGF0ZS5ub3coKX1gO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlc2kgaGFiaXMuIFNpbGFrYW4gbG9naW4ga2VtYmFsaS5cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIWFkbWluVXNlcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRXJyb3I6IFVzZXIgdGlkYWsgZGl0ZW11a2FuIGRpIGRhdGFiYXNlIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBrb250ZW4sXHJcbiAgICAgICAga2F0ZWdvcmksXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIgfHwgbnVsbCxcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgc3RhdHVzOiBcIlBVQkxJU0hFRFwiLFxyXG4gICAgICAgIHZpZXdzOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYmVyaXRhXCIpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmVyaXRhIGJlcmhhc2lsIHRlcmJpdCEg8J+TsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5lcmJpdGthbiBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJlcml0YShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGlmICghaWRSYXcpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIklEIHRpZGFrIHZhbGlkLlwiIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29udGVuID0gZm9ybURhdGEuZ2V0KFwia29udGVuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICAuLi4oZ2FtYmFyICYmIHsgZ2FtYmFyIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCZXJpdGEgYmVyaGFzaWwgZGlwZXJiYXJ1aSEg8J+TnVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQmVyaXRhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYmVyaXRhXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEJFUklUQSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA0LiBNQU5BSkVNRU4gUFJPR1JBTSBLRVJKQSAoVVBEQVRFIEZJWClcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIC8vIEFtYmlsIGRhdGEgc2VzdWFpIG5hbWEgZmllbGQgZGkgRnJvbnRlbmRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByaW9yaXRhcyA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZzsgLy8gRnJvbnRlbmQga2lyaW0gJ3ByaW9yaXR5JywgREIgc2ltcGFuICdwcmlvcml0YXMnXHJcbiAgY29uc3QgYW5nZ2FyYW4gPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYW5nZ2FyYW5cIikpO1xyXG4gIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2dyZXNzXCIpKTtcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nOyAvLyBQSUMgZGlzaW1wYW4gZGkga29sb20gbG9rYXNpXHJcbiAgXHJcbiAgLy8g4pyFIEZJVFVSIEJBUlU6IEltYWdlICYgRmVhdHVyZWRcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZzsgXHJcbiAgY29uc3QgaXNGZWF0dXJlZCA9IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBEYXRlIEhhbmRsaW5nXHJcbiAgY29uc3Qgc3RhcnREYXRlUmF3ID0gZm9ybURhdGEuZ2V0KFwic3RhcnREYXRlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGFydERhdGUgPSBzdGFydERhdGVSYXcgPyBuZXcgRGF0ZShzdGFydERhdGVSYXcpIDogbnVsbDtcclxuICBjb25zdCBkZWFkbGluZVJhdyA9IGZvcm1EYXRhLmdldChcImRlYWRsaW5lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZWFkbGluZSA9IGRlYWRsaW5lUmF3ID8gbmV3IERhdGUoZGVhZGxpbmVSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gTWFwcGluZyBTdGF0dXMgTG9naWMgKE90b21hdGlzIGF0YXUgTWFudWFsIGRhcmkgRnJvbnRlbmQpXHJcbiAgLy8gS2l0YSBwYWthaSBzdGF0dXMgbWFudWFsIGthbGF1IGRpa2lyaW0sIGthbGF1IG5nZ2FrIHBha2FpIGxvZ2ljIHByb2dyZXNzXHJcbiAgbGV0IHN0YXR1cyA9IFwiVE9ET1wiO1xyXG4gIGlmIChwcm9ncmVzcyA+IDAgJiYgcHJvZ3Jlc3MgPCAxMDApIHN0YXR1cyA9IFwiSU5fUFJPR1JFU1NcIjtcclxuICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkgc3RhdHVzID0gXCJET05FXCI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIGRlc2tyaXBzaSxcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgcHJpb3JpdGFzLFxyXG4gICAgICAgIGFuZ2dhcmFuLFxyXG4gICAgICAgIHByb2dyZXNzLFxyXG4gICAgICAgIHN0YXR1cywgLy8gU2ltcGFuIHN0YXR1c1xyXG4gICAgICAgIGxva2FzaSwgLy8gUElDXHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIGRlYWRsaW5lLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZSB8fCBudWxsLCAvLyBTaW1wYW4gR2FtYmFyXHJcbiAgICAgICAgaXNGZWF0dXJlZDogaXNGZWF0dXJlZCAvLyBTaW1wYW4gU3RhdHVzIFVuZ2d1bGFuXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZWZyZXNoIGhhbGFtYW4gQWRtaW4gJiBIb21lcGFnZSAoa2FyZW5hIGFkYSBzZWN0aW9uIFByb2dyYW0gVW5nZ3VsYW4pXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGlidWF0ISDwn5qAXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBQUk9LRVIgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1YXQgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZ3JhbUtlcmphKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcHJpb3JpdGFzID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGFuZ2dhcmFuID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKTtcclxuICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcm9ncmVzc1wiKSk7XHJcbiAgY29uc3QgbG9rYXNpID0gZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpc0ZlYXR1cmVkID0gZm9ybURhdGEuZ2V0KFwiaXNGZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGNvbnN0IHN0YXJ0RGF0ZVJhdyA9IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gc3RhcnREYXRlUmF3ID8gbmV3IERhdGUoc3RhcnREYXRlUmF3KSA6IG51bGw7XHJcbiAgY29uc3QgZGVhZGxpbmVSYXcgPSBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVhZGxpbmUgPSBkZWFkbGluZVJhdyA/IG5ldyBEYXRlKGRlYWRsaW5lUmF3KSA6IG51bGw7XHJcblxyXG4gIC8vIFN0YXR1cyBMb2dpYyBVcGRhdGVcclxuICBsZXQgc3RhdHVzID0gXCJUT0RPXCI7XHJcbiAgaWYgKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEwMCkgc3RhdHVzID0gXCJJTl9QUk9HUkVTU1wiO1xyXG4gIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBzdGF0dXMgPSBcIkRPTkVcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBwcmlvcml0YXMsXHJcbiAgICAgICAgYW5nZ2FyYW4sXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGxva2FzaSxcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgZGVhZGxpbmUsXHJcbiAgICAgICAgaXNGZWF0dXJlZCxcclxuICAgICAgICAvLyBVcGRhdGUgZ2FtYmFyIENVTUEgamlrYSB1c2VyIHVwbG9hZCBiYXJ1IChzdHJpbmcgdGlkYWsga29zb25nKVxyXG4gICAgICAgIC4uLihpbWFnZSAmJiB7IGltYWdlIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJva2VyXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQcm9rZXIgYmVyaGFzaWwgZGl1cGRhdGUhIOKcqFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgcHJva2VyLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBHYW50aSBuYW1hIGRlbGV0ZVByb2tlciBqYWRpIGRlbGV0ZVByb2dyYW1LZXJqYSBiaWFyIGtvbnNpc3RlbiBzYW1hIGZyb250ZW5kXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9ncmFtS2VyamEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNS4gTUFOQUpFTUVOIFBFTkdVUlVTIChMRU5HS0FQKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAvLyAxLiBBbWJpbCBEYXRhIFdhamliXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8gMi4gQW1iaWwgRGF0YSBUYW1iYWhhblxyXG4gIGNvbnN0IGhwID0gZm9ybURhdGEuZ2V0KFwiaHBcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGluc3RhZ3JhbSA9IGZvcm1EYXRhLmdldChcImluc3RhZ3JhbVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGlrdG9rID0gZm9ybURhdGEuZ2V0KFwidGlrdG9rXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkb21pc2lsaSA9IGZvcm1EYXRhLmdldChcImRvbWlzaWxpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0cmFuc3BvcnRhc2kgPSBmb3JtRGF0YS5nZXQoXCJ0cmFuc3BvcnRhc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1vdHRvID0gZm9ybURhdGEuZ2V0KFwibW90dG9cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyDinIUgREFUQSBCQVJVOiBWSVNJICYgTUlTSSAoRGl0YW5na2FwIGRhcmkgRm9ybURhdGEpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyBDZWsgVGFuZ2dhbCBMYWhpciAoQ29udmVydCBzdHJpbmcga2UgRGF0ZSlcclxuICBjb25zdCB0Z2xMYWhpclJhdyA9IGZvcm1EYXRhLmdldChcInRnbExhaGlyXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0Z2xMYWhpciA9IHRnbExhaGlyUmF3ID8gbmV3IERhdGUodGdsTGFoaXJSYXcpIDogbnVsbDtcclxuXHJcbiAgLy8gQ2VrIGFwYWthaCBHdXJ1L1BlbWJpbmFcclxuICBjb25zdCBpc0Fkdmlzb3IgPSBmb3JtRGF0YS5nZXQoXCJpc0Fkdmlzb3JcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAvLyBWYWxpZGFzaSBEYXNhclxyXG4gIGlmICghbmFtYSB8fCAhbmlzIHx8ICFqYWJhdGFuKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hLCBOSVMvTklQLCBkYW4gSmFiYXRhbiB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBuaXMsXHJcbiAgICAgICAga2VsYXM6IGtlbGFzIHx8IFwiLVwiLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIGhwLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgICB0aWt0b2ssXHJcbiAgICAgICAgZG9taXNpbGksXHJcbiAgICAgICAgdHJhbnNwb3J0YXNpLFxyXG4gICAgICAgIG1vdHRvLFxyXG4gICAgICAgIC8vIOKchSBTSU1QQU4gVklTSSAmIE1JU0kgS0UgREFUQUJBU0VcclxuICAgICAgICB2aXNpOiB2aXNpIHx8IG51bGwsIFxyXG4gICAgICAgIG1pc2k6IG1pc2kgfHwgbnVsbCxcclxuICAgICAgICB0Z2xMYWhpcixcclxuICAgICAgICBmb3RvVXJsOiBmb3RvVXJsIHx8IG51bGwsXHJcbiAgICAgICAgc3RhdHVzOiBcIkFLVElGXCIsXHJcbiAgICAgICAgaXNBZHZpc29yOiBpc0Fkdmlzb3JcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJQZW5ndXJ1cyBiZXJoYXNpbCBkaXRhbWJhaGthbiEg8J+RpFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmFtYmFoIGRhdGEuIE5JUyBtdW5na2luIHN1ZGFoIHRlcmRhZnRhci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBlbmd1cnVzKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgaWYgKCFpZFJhdykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSUQgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuICBjb25zdCBpZCA9IE51bWJlcihpZFJhdyk7XHJcblxyXG4gIC8vIEFtYmlsIHNlbXVhIGRhdGEgaW5wdXRcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbmlzID0gZm9ybURhdGEuZ2V0KFwibmlzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrZWxhcyA9IGZvcm1EYXRhLmdldChcImtlbGFzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBqYWJhdGFuID0gZm9ybURhdGEuZ2V0KFwiamFiYXRhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBS1RJRlwiIHwgXCJOT05BS1RJRlwiIHwgXCJBTFVNTklcIjtcclxuICBcclxuICAvLyBEYXRhIFRhbWJhaGFuXHJcbiAgY29uc3QgaHAgPSBmb3JtRGF0YS5nZXQoXCJocFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaW5zdGFncmFtID0gZm9ybURhdGEuZ2V0KFwiaW5zdGFncmFtXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aWt0b2sgPSBmb3JtRGF0YS5nZXQoXCJ0aWt0b2tcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRvbWlzaWxpID0gZm9ybURhdGEuZ2V0KFwiZG9taXNpbGlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGFzaSA9IGZvcm1EYXRhLmdldChcInRyYW5zcG9ydGFzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbW90dG8gPSBmb3JtRGF0YS5nZXQoXCJtb3R0b1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZm90b1VybCA9IGZvcm1EYXRhLmdldChcImZvdG9VcmxcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIOKchSBEQVRBIEJBUlU6IFZJU0kgJiBNSVNJIChVcGRhdGUpXHJcbiAgY29uc3QgdmlzaSA9IGZvcm1EYXRhLmdldChcInZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1pc2kgPSBmb3JtRGF0YS5nZXQoXCJtaXNpXCIpIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgdGdsTGFoaXJSYXcgPSBmb3JtRGF0YS5nZXQoXCJ0Z2xMYWhpclwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGdsTGFoaXIgPSB0Z2xMYWhpclJhdyA/IG5ldyBEYXRlKHRnbExhaGlyUmF3KSA6IHVuZGVmaW5lZDsgXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgbmlzLFxyXG4gICAgICAgIGtlbGFzLFxyXG4gICAgICAgIGphYmF0YW4sXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBocCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgdGlrdG9rLFxyXG4gICAgICAgIGRvbWlzaWxpLFxyXG4gICAgICAgIHRyYW5zcG9ydGFzaSxcclxuICAgICAgICBtb3R0byxcclxuICAgICAgICAvLyDinIUgVVBEQVRFIFZJU0kgJiBNSVNJXHJcbiAgICAgICAgdmlzaSwgXHJcbiAgICAgICAgbWlzaSxcclxuICAgICAgICAvLyBVcGRhdGUgdGFuZ2dhbCBsYWhpciBjdW1hIGthbGF1IGFkYSBpbnB1dCBiYXJ1XHJcbiAgICAgICAgLi4uKHRnbExhaGlyICYmIHsgdGdsTGFoaXIgfSksXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvdG8gY3VtYSBrYWxhdSBhZGEgZm90byBiYXJ1IHlhbmcgZGlraXJpbVxyXG4gICAgICAgIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIHBlbmd1cnVzIGRpcGVyYmFydWkhIPCfk51cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCB1cGRhdGUgZGF0YS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBlbmd1cnVzKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRFTEVURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJZENhcmREZXNpZ24oaWQ6IG51bWJlciwgZGVzaWduVXJsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IGlkQ2FyZERlc2lnbjogZGVzaWduVXJsIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVUERBVEUgSUQgQ0FSRCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSWRDYXJkQmFja2dyb3VuZChpbWFnZVVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXBwQ29uZmlnLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiAxIH0sXHJcbiAgICAgIHVwZGF0ZTogeyBpZENhcmRCYWNrSW1hZ2U6IGltYWdlVXJsIH0sXHJcbiAgICAgIGNyZWF0ZTogeyBpZDogMSwgaWRDYXJkQmFja0ltYWdlOiBpbWFnZVVybCB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2lkY2FyZFwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNBVkUgQkcgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNy4gU0lTVEVNIEFCU0VOU0kgKFNDQU5ORVIgJiBBQ0FSQSlcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyAxLiBCdWF0IEFjYXJhIEJhcnUgKFVwZGF0ZTogVGFtYmFoIFdha3R1LCBUaXBlLCBIYXJpLCAmIEF1dG9TdGFydClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFjYXJhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWxTdHIgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBsb2thc2kgPSBmb3JtRGF0YS5nZXQoXCJsb2thc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG11bGFpU3RyID0gZm9ybURhdGEuZ2V0KFwid2FrdHVNdWxhaVwiKSBhcyBzdHJpbmc7IFxyXG4gIGNvbnN0IHNlbGVzYWlTdHIgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIikgYXMgc3RyaW5nOyBcclxuICBjb25zdCB0aXBlID0gKGZvcm1EYXRhLmdldChcInRpcGVcIikgYXMgYW55KSB8fCBcIlNFS0FMSV9QQUtBSVwiO1xyXG4gIGNvbnN0IGhhcmkgPSBmb3JtRGF0YS5nZXQoXCJoYXJpXCIpIGFzIHN0cmluZzsgLy8gQ29udG9oOiBcIlNlbmluLFNlbGFzYVwiXHJcbiAgY29uc3QgYXV0b1N0YXJ0ID0gZm9ybURhdGEuZ2V0KFwiYXV0b1N0YXJ0XCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgaWYgKCFuYW1hIHx8ICF0YW5nZ2FsU3RyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hIGRhbiBUYW5nZ2FsIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IG11bGFpU3RyID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHttdWxhaVN0cn1gKSA6IG51bGw7XHJcbiAgICBjb25zdCBlbmQgPSBzZWxlc2FpU3RyID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtzZWxlc2FpU3RyfWApIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBuZXdBY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBkZXNrcmlwc2k6IGRlc2tyaXBzaSB8fCBcIlwiLFxyXG4gICAgICAgIHRpcGUsXHJcbiAgICAgICAgaGFyaTogdGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBoYXJpIDogbnVsbCxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSxcclxuICAgICAgICB3YWt0dU11bGFpOiBzdGFydCxcclxuICAgICAgICB3YWt0dVNlbGVzYWk6IGVuZCxcclxuICAgICAgICBsb2thc2k6IGxva2FzaSB8fCBcIlNla29sYWhcIixcclxuICAgICAgICBzdGF0dXM6IFwiVVBDT01JTkdcIixcclxuICAgICAgICBhdXRvU3RhcnRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkFjYXJhIGJlcmhhc2lsIGRpYnVhdCEg8J+ThVwiLCBpZDogbmV3QWNhcmEuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBBQ0FSQSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtYnVhdCBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNi4gVXBkYXRlIFN0YXR1cyBLZWhhZGlyYW4gKFNha2l0LCBJemluLCBkbGwpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTdGF0dXNLZWhhZGlyYW4oYWJzZW5zaUlkOiBudW1iZXIsIHN0YXR1czogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBhYnNlbnNpSWQgfSxcclxuICAgICAgZGF0YTogeyBzdGF0dXMgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gQW1iaWwgU2VtdWEgQWNhcmEgKFRlcnV0YW1hIHlhbmcgYWt0aWYvbWVuZGF0YW5nKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyQWNhcmEoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWNhcmEuZmluZE1hbnkoe1xyXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0gLy8gVXJ1dGthbiBkYXJpIHlhbmcgdGVyYmFydSBkaWJ1YXRcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vLyAzLiBVcGRhdGUgQWNhcmEgKEVkaXQgZGV0YWlsICsgVGlwZSArIEhhcmkgKyBBdXRvU3RhcnQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBY2FyYShpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGFuZ2dhbFN0ciA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGxva2FzaSA9IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbXVsYWlTdHIgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dU11bGFpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBzZWxlc2FpU3RyID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0aXBlID0gKGZvcm1EYXRhLmdldChcInRpcGVcIikgYXMgYW55KSB8fCBcIlNFS0FMSV9QQUtBSVwiO1xyXG4gIGNvbnN0IGhhcmkgPSBmb3JtRGF0YS5nZXQoXCJoYXJpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBhdXRvU3RhcnQgPSBmb3JtRGF0YS5nZXQoXCJhdXRvU3RhcnRcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBtdWxhaVN0ciA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7bXVsYWlTdHJ9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gc2VsZXNhaVN0ciA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7c2VsZXNhaVN0cn1gKSA6IG51bGw7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIHRpcGUsXHJcbiAgICAgICAgaGFyaTogdGlwZSA9PT0gXCJSVVRJTkFOXCIgPyBoYXJpIDogbnVsbCxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsU3RyKSxcclxuICAgICAgICBsb2thc2ksXHJcbiAgICAgICAgd2FrdHVNdWxhaTogc3RhcnQsXHJcbiAgICAgICAgd2FrdHVTZWxlc2FpOiBlbmQsXHJcbiAgICAgICAgYXV0b1N0YXJ0XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDQuIEhhcHVzIEFjYXJhXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBY2FyYShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hY2FyYS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDUuIFN0YXJ0IFNlc2kgKE1hbnVhbCBPdmVycmlkZSAmIExvZ2ljIFNlc2kgQmFydSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0QWNhcmFTZXNzaW9uKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gMS4gVXBkYXRlIHN0YXR1cyBBY2FyYVxyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiBcIk9OR09JTkdcIixcclxuICAgICAgICAgIHdha3R1TXVsYWlBa3R1YWw6IG5ldyBEYXRlKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMi4gQnVhdCBTZXNpIEJhcnVcclxuICAgICAgcmV0dXJuIGF3YWl0IHR4LnNlc2lBY2FyYS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGFjYXJhSWQ6IGlkLFxyXG4gICAgICAgICAgd2FrdHVNdWxhaTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIHN0YXR1czogXCJPTkdPSU5HXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHNlc2lJZDogcmVzdWx0LmlkIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVEFSVCBTRVNTSU9OIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNi4gU3RvcCBTZXNpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9wQWNhcmFTZXNzaW9uKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWNhcmEgPSBhd2FpdCBwcmlzbWEuYWNhcmEuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICBpZiAoIWFjYXJhKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIDEuIENhcmkgc2VzaSB5YW5nIGFrdGlmXHJcbiAgICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHR4LnNlc2lBY2FyYS5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGFjYXJhSWQ6IGlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sXHJcbiAgICAgICAgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChzZXNpQWt0aWYpIHtcclxuICAgICAgICBhd2FpdCB0eC5zZXNpQWNhcmEudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGlkOiBzZXNpQWt0aWYuaWQgfSxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgc3RhdHVzOiBcIkNPTVBMRVRFRFwiLFxyXG4gICAgICAgICAgICB3YWt0dVNlbGVzYWk6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gVXBkYXRlIHN0YXR1cyBBY2FyYVxyXG4gICAgICAvLyBKaWthIFJ1dGluYW4sIGJhbGlrIGtlIFVQQ09NSU5HIGJpYXIgYmlzYSBkaS1zdGFydCBsYWdpIGJlc29rXHJcbiAgICAgIGNvbnN0IG5leHRTdGF0dXMgPSBhY2FyYS50aXBlID09PSBcIlJVVElOQU5cIiA/IFwiVVBDT01JTkdcIiA6IFwiQ09NUExFVEVEXCI7XHJcblxyXG4gICAgICBhd2FpdCB0eC5hY2FyYS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBpZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHN0YXR1czogbmV4dFN0YXR1cyxcclxuICAgICAgICAgIHdha3R1U2VsZXNhaUFrdHVhbDogbmV3IERhdGUoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiU1RPUCBTRVNTSU9OIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNy4gU2NhbiBBYnNlbnNpIChVcGRhdGU6IExvZ2lrYSBCZXJiYXNpcyBTZXNpKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2NhbkFic2Vuc2kobmlzOiBzdHJpbmcsIGFjYXJhSWQ6IG51bWJlcikge1xyXG4gIGlmICghbmlzIHx8ICFhY2FyYUlkKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJEYXRhIHRpZGFrIGxlbmdrYXAhXCIgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBlbmd1cnVzID0gYXdhaXQgcHJpc21hLnBlbmd1cnVzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBuaXMgfSB9KTtcclxuICAgIGlmICghcGVuZ3VydXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBRUiBDb2RlIFRpZGFrIFRlcmRhZnRhciFcIiB9O1xyXG4gICAgaWYgKHBlbmd1cnVzLnN0YXR1cyAhPT0gXCJBS1RJRlwiKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLimqDvuI8gQW5nZ290YSBUaWRhayBBa3RpZlwiIH07XHJcblxyXG4gICAgY29uc3QgYWNhcmEgPSBhd2FpdCBwcmlzbWEuYWNhcmEuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBhY2FyYUlkIH0gfSk7XHJcbiAgICBpZiAoIWFjYXJhKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLinYwgQWNhcmEgdGlkYWsgZGl0ZW11a2FuIVwiIH07XHJcblxyXG4gICAgLy8gQ0FSSSBTRVNJIEFLVElGXHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7IGFjYXJhSWQ6IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSxcclxuICAgICAgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBTZXNpIHRpZGFrIGFrdGlmISBTaWxha2FuIFN0YXJ0IGR1bHUuXCIgfTtcclxuXHJcbiAgICAvLyBDZWsgZHVwbGlrYXNpIGJlcmRhc2Fya2FuIHNlc2lJZFxyXG4gICAgY29uc3QgZXhpc3RpbmdMb2cgPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kRmlyc3QoeyBcclxuICAgICAgd2hlcmU6IHsgXHJcbiAgICAgICAgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsIFxyXG4gICAgICAgIHNlc2lJZDogc2VzaUFrdGlmLmlkIFxyXG4gICAgICB9IFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nTG9nKSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiU3VkYWggYWJzZW4gZGkgc2VzaSBpbmkhIPCfkYxcIiwgXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgIG5hbWU6IHBlbmd1cnVzLm5hbWEsXHJcbiAgICAgICAgICAgcm9sZTogcGVuZ3VydXMuamFiYXRhbixcclxuICAgICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgICBzdGF0dXM6IFwiRFVQTElDQVRFXCIgXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpbXBhbiBBYnNlbnNpXHJcbiAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ3VydXNJZDogcGVuZ3VydXMuaWQsXHJcbiAgICAgICAgYWNhcmFJZDogYWNhcmFJZCxcclxuICAgICAgICBzZXNpSWQ6IHNlc2lBa3RpZi5pZCwgLy8gV0FKSUIgc2ltcGFuIHNlc2lJZFxyXG4gICAgICAgIGtlZ2lhdGFuOiBhY2FyYS5uYW1hLFxyXG4gICAgICAgIHN0YXR1czogXCJIQURJUlwiLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgIG1lc3NhZ2U6IFwiQWJzZW5zaSBCZXJoYXNpbCEg4pyFXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAgbmFtZTogcGVuZ3VydXMubmFtYSxcclxuICAgICAgICAgcm9sZTogcGVuZ3VydXMuamFiYXRhbixcclxuICAgICAgICAgaW1hZ2U6IHBlbmd1cnVzLmZvdG9VcmwsXHJcbiAgICAgICAgIHN0YXR1czogXCJIQURJUlwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQ0FOIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXJ2ZXIgRXJyb3IuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDExLiBJbnB1dCBBYnNlbnNpIE1hbnVhbCAoVXBkYXRlOiBCZXJiYXNpcyBTZXNpKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5wdXRNYW51YWxBYnNlbnNpKGFjYXJhSWQ6IG51bWJlciwgcGVuZ3VydXNJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgYWNhcmFJZDogYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4pqg77iPIFRpZGFrIGFkYSBzZXNpIGFrdGlmISBTaWxha2FuIFN0YXJ0IGR1bHUuXCIgfTtcclxuXHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IGFjYXJhSWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFjYXJhIHRpZGFrIGRpdGVtdWthblwiIH07XHJcblxyXG4gICAgLy8gR3VuYWthbiBmaW5kRmlyc3QgKyBDcmVhdGUvVXBkYXRlIGthcmVuYSBBYnNlbnNpIHRpZGFrIHB1bnlhIHVuaXF1ZSBrZXkgZGkgc2NoZW1hIHlhbmcgbWVuZHVrdW5nIFVwc2VydCB1bnR1ayBzZXNpSWRcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmFic2Vuc2kuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBwZW5ndXJ1c0lkLCBzZXNpSWQ6IHNlc2lBa3RpZi5pZCB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogZXhpc3RpbmcuaWQgfSxcclxuICAgICAgICAgICAgZGF0YTogeyBzdGF0dXMgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhY2FyYUlkLFxyXG4gICAgICAgICAgICAgICAgc2VzaUlkOiBzZXNpQWt0aWYuaWQsXHJcbiAgICAgICAgICAgICAgICBwZW5ndXJ1c0lkLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAga2VnaWF0YW46IGFjYXJhLm5hbWEsXHJcbiAgICAgICAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIk1BTlVBTCBJTlBVVCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDEyLiBBdXRvLUFscGEgYmFnaSB5YW5nIHRpZGFrIGhhZGlyIHNhYXQgc2VzaSBkaXR1dHVwIChVcGRhdGU6IEJlcmJhc2lzIFNlc2kpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQWxwYVJlbWFpbmluZyhhY2FyYUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGFjYXJhSWQ6IGFjYXJhSWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaWYgKCFzZXNpQWt0aWYpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlRpZGFrIGFkYSBzZXNpIGFrdGlmXCIgfTtcclxuXHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IGFjYXJhSWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcblxyXG4gICAgLy8gMS4gQW1iaWwgc2VtdWEgcGVuZ3VydXMgYWt0aWZcclxuICAgIGNvbnN0IHNlbXVhUGVuZ3VydXMgPSBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LFxyXG4gICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gMi4gQW1iaWwgcGVuZ3VydXMgeWFuZyBTVURBSCBwdW55YSByZWNvcmQgZGkgU0VTSSBJTklcclxuICAgIGNvbnN0IHN1ZGFoQWJzZW4gPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHNlc2lJZDogc2VzaUFrdGlmLmlkIH0sXHJcbiAgICAgIHNlbGVjdDogeyBwZW5ndXJ1c0lkOiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGlkc1N1ZGFoQWJzZW4gPSBzdWRhaEFic2VuLm1hcChhID0+IGEucGVuZ3VydXNJZCk7XHJcblxyXG4gICAgLy8gMy4gRmlsdGVyIHNpYXBhIHlhbmcgYmVsdW0gYWRhIHJlY29yZG55YVxyXG4gICAgY29uc3QgYmVsdW1BYnNlbiA9IHNlbXVhUGVuZ3VydXMuZmlsdGVyKHAgPT4gIWlkc1N1ZGFoQWJzZW4uaW5jbHVkZXMocC5pZCkpO1xyXG5cclxuICAgIC8vIDQuIE1hc3Vra2FuIG1lcmVrYSBzZWJhZ2FpIEFMUEFcclxuICAgIGlmIChiZWx1bUFic2VuLmxlbmd0aCA+IDApIHtcclxuICAgICAgYXdhaXQgcHJpc21hLmFic2Vuc2kuY3JlYXRlTWFueSh7XHJcbiAgICAgICAgZGF0YTogYmVsdW1BYnNlbi5tYXAocCA9PiAoe1xyXG4gICAgICAgICAgYWNhcmFJZCxcclxuICAgICAgICAgIHNlc2lJZDogc2VzaUFrdGlmLmlkLFxyXG4gICAgICAgICAgcGVuZ3VydXNJZDogcC5pZCxcclxuICAgICAgICAgIHN0YXR1czogXCJBTFBBXCIsXHJcbiAgICAgICAgICBrZWdpYXRhbjogYWNhcmEubmFtYSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKClcclxuICAgICAgICB9KSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNS4gVHV0dXAgU2VzaSBzZWNhcmEgcmVzbWlcclxuICAgIGF3YWl0IHN0b3BBY2FyYVNlc3Npb24oYWNhcmFJZCk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50OiBiZWx1bUFic2VuLmxlbmd0aCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQVVUTyBBTFBBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMTMuIEFtYmlsIERhZnRhciBQZW5ndXJ1cyBBa3RpZiAoVW50dWsgRHJvcGRvd24gTWFudWFsKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyUGVuZ3VydXMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9LFxyXG4gICAgICBvcmRlckJ5OiB7IG5hbWE6IFwiYXNjXCIgfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDE0LiBBdXRvLVN0YXJ0IFNlc2kgYmVyZGFzYXJrYW4gV2FrdHVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kQXV0b1N0YXJ0QWNhcmEoKSB7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBcclxuICAvLyBGb3JtYXQgamFtIHNla2FyYW5nIGtlIEhIOm1tIChXSUIvTG9rYWwpXHJcbiAgY29uc3QgY3VycmVudEhvdXJzID0gU3RyaW5nKG5vdy5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgY3VycmVudFRpbWVTdHIgPSBgJHtjdXJyZW50SG91cnN9OiR7Y3VycmVudE1pbnV0ZXN9YDtcclxuXHJcbiAgY29uc3QgZGF5cyA9IFtcIk1pbmdndVwiLCBcIlNlbmluXCIsIFwiU2VsYXNhXCIsIFwiUmFidVwiLCBcIkthbWlzXCIsIFwiSnVtYXRcIiwgXCJTYWJ0dVwiXTtcclxuICBjb25zdCB0b2RheURheSA9IGRheXNbbm93LmdldERheSgpXTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVwY29taW5nQWNhcmEgPSBhd2FpdCBwcmlzbWEuYWNhcmEuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHN0YXR1czogXCJVUENPTUlOR1wiLFxyXG4gICAgICAgIGF1dG9TdGFydDogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBhY2FyYSBvZiB1cGNvbWluZ0FjYXJhKSB7XHJcbiAgICAgIGlmICghYWNhcmEud2FrdHVNdWxhaSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBBbWJpbCBISDptbSBkYXJpIHdha3R1TXVsYWkgKERhdGUgb2JqZWN0KVxyXG4gICAgICBjb25zdCBzY2hlZHVsZUhvdXJzID0gU3RyaW5nKGFjYXJhLndha3R1TXVsYWkuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgY29uc3Qgc2NoZWR1bGVNaW51dGVzID0gU3RyaW5nKGFjYXJhLndha3R1TXVsYWkuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBzY2hlZHVsZVRpbWVTdHIgPSBgJHtzY2hlZHVsZUhvdXJzfToke3NjaGVkdWxlTWludXRlc31gO1xyXG5cclxuICAgICAgY29uc3QgaXNUb2RheSA9IGFjYXJhLnRpcGUgPT09IFwiU0VLQUxJX1BBS0FJXCIgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2FyYS50YW5nZ2FsLnRvRGF0ZVN0cmluZygpID09PSBub3cudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBpc1JvdXRpbmVUb2RheSA9IGFjYXJhLnRpcGUgPT09IFwiUlVUSU5BTlwiICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjYXJhLmhhcmk/LmluY2x1ZGVzKHRvZGF5RGF5KTtcclxuXHJcbiAgICAgIC8vIEJhbmRpbmdrYW46IEppa2Egc3VkYWggbWFzdWsgd2FrdHVueWEgKGF0YXUgbGV3YXQgc2VkaWtpdClcclxuICAgICAgaWYgKChpc1RvZGF5IHx8IGlzUm91dGluZVRvZGF5KSAmJiBjdXJyZW50VGltZVN0ciA+PSBzY2hlZHVsZVRpbWVTdHIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQXV0by1zdGFydGluZyBzZXNzaW9uIGZvcjogJHthY2FyYS5uYW1hfSBhdCAke2N1cnJlbnRUaW1lU3RyfWApO1xyXG4gICAgICAgIGF3YWl0IHN0YXJ0QWNhcmFTZXNzaW9uKGFjYXJhLmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQVVUTyBTVEFSVCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDE1LiBBbWJpbCBEYWZ0YXIgU2VzaSAoVW50dWsgTGFwb3JhbiBQZXIgU2VzaSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhclNlc2koYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgYWNhcmFJZCB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gOC4gQW1iaWwgUmVrYXAgQWJzZW5zaSBMZW5na2FwIChVcGRhdGU6IEJlcmJhc2lzIFNlc2kpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWthcEFic2Vuc2koKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRvdGFsUGVuZ3VydXMgPSBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY291bnQoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9IH0pO1xyXG4gICAgXHJcbiAgICAvLyBBbWJpbCBzZW11YSBzZXNpIHlhbmcgcGVybmFoIGRpbGFrdWthblxyXG4gICAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHtcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGFjYXJhOiB0cnVlLFxyXG4gICAgICAgIF9jb3VudDoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIGFic2Vuc2k6IHsgd2hlcmU6IHsgc3RhdHVzOiBcIkhBRElSXCIgfSB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBzZXNpTGlzdC5tYXAocyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGdsID0gbmV3IERhdGUocy53YWt0dU11bGFpKTtcclxuICAgICAgICBjb25zdCBmb3JtYXRUZ2wgPSB0Z2wudG9Mb2NhbGVEYXRlU3RyaW5nKCdpZC1JRCcsIHsgZGF5OiAnMi1kaWdpdCcsIG1vbnRoOiAnMi1kaWdpdCcgfSk7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0SmFtID0gdGdsLnRvTG9jYWxlVGltZVN0cmluZygnaWQtSUQnLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogcy5pZCwgLy8gR3VuYWthbiBTZXNpSUQgc2ViYWdhaSBpZGVudGlmaWVyIGRpIFVJXHJcbiAgICAgICAgICBhY2FyYUlkOiBzLmFjYXJhSWQsXHJcbiAgICAgICAgICBuYW1hOiBgJHtzLmFjYXJhLm5hbWF9ICgke2Zvcm1hdFRnbH0gJHtmb3JtYXRKYW19KWAsXHJcbiAgICAgICAgICBsb2thc2k6IHMuYWNhcmEubG9rYXNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogcy53YWt0dU11bGFpLFxyXG4gICAgICAgICAgdG90YWxIYWRpcjogcy5fY291bnQuYWJzZW5zaSxcclxuICAgICAgICAgIHRvdGFsQW5nZ290YTogdG90YWxQZW5ndXJ1cyxcclxuICAgICAgICAgIHBlcnNlbnRhc2U6IHRvdGFsUGVuZ3VydXMgPiAwID8gTWF0aC5yb3VuZCgocy5fY291bnQuYWJzZW5zaSAvIHRvdGFsUGVuZ3VydXMpICogMTAwKSA6IDAsXHJcbiAgICAgICAgICBzdGF0dXNTZXNpOiBzLnN0YXR1c1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVLQVAgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbXVhdCByZWthcC5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gOS4gQW1iaWwgRGV0YWlsIEFic2Vuc2kgcGVyIFNlc2kgKExhcG9yYW4gLSBTb3J0IGJ5IE5hbWEpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZXRhaWxMYXBvcmFuKHNlc2lJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHNlc2lJZDogc2VzaUlkIH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSxcclxuICAgICAgb3JkZXJCeTogeyBwZW5ndXJ1czogeyBuYW1hOiAnYXNjJyB9IH1cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVUQUlMIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vLyAxMC4gQW1iaWwgTG9nIEFic2Vuc2kgcGVyIFNlc2kvQWNhcmEgKEFjdGl2aXR5IFN0cmVhbSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvZ3NCeUFjYXJhKGlkOiBudW1iZXIsIHR5cGU6ICdzZXNpJyB8ICdhY2FyYScgPSAnc2VzaScpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHRhcmdldFNlc2lJZCA9IGlkO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnYWNhcmEnKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2VzaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghYWN0aXZlU2VzaSkgcmV0dXJuIFtdOyAvLyBUaWRhayBhZGEgc2VzaSBha3RpZiA9IHRpZGFrIGFkYSBsb2dcclxuICAgICAgICB0YXJnZXRTZXNpSWQgPSBhY3RpdmVTZXNpLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHNlc2lJZDogdGFyZ2V0U2VzaUlkIH0sXHJcbiAgICAgIGluY2x1ZGU6IHsgcGVuZ3VydXM6IHRydWUgfSxcclxuICAgICAgb3JkZXJCeTogeyB0YW5nZ2FsOiAnZGVzYycgfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA4LiBNQU5BSkVNRU4gS0VVQU5HQU4gKEtBUyAmIEFOR0dBUkFOKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIENhdGF0IFRyYW5zYWtzaSBLYXMgVW11bVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2VuZXJhbFRyeChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgdGlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJQRU1BU1VLQU5cIiB8IFwiUEVOR0VMVUFSQU5cIjtcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGljID0gZm9ybURhdGEuZ2V0KFwicGljXCIpIGFzIHN0cmluZzsgLy8gS2V0ZXJhbmdhbiBQSUNcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgbm9taW5hbCxcclxuICAgICAgICB0aXBlLFxyXG4gICAgICAgIGthdGVnb3JpLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgIGtldGVyYW5nYW46IGBQSUM6ICR7cGljfWAsIC8vIFNpbXBhbiBQSUMgZGkga2V0ZXJhbmdhblxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJUcmFuc2Frc2kgYmVyaGFzaWwgZGljYXRhdCEg8J+SsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmNhdGF0IHRyYW5zYWtzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMi4gQnVrYSBBbmdnYXJhbiBFdmVudCBCYXJ1IChQaW5kYWggQnVrdTogS2FzIFVtdW0gLT4gRXZlbnQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hRXZlbnQgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYnVkZ2V0ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gQS4gQ2F0YXQgUEVOR0VMVUFSQU4gZGkgS2FzIFVtdW1cclxuICAgICAgYXdhaXQgdHgua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bDogYE1vZGFsIEV2ZW50OiAke25hbWFFdmVudH1gLFxyXG4gICAgICAgICAgbm9taW5hbDogYnVkZ2V0LFxyXG4gICAgICAgICAgdGlwZTogXCJQRU5HRUxVQVJBTlwiLFxyXG4gICAgICAgICAga2F0ZWdvcmk6IFwiQW5nZ2FyYW4gRXZlbnRcIixcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgICAga2V0ZXJhbmdhbjogXCJBbG9rYXNpIGRhbmEga2UgZXZlbnQgYmFydVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQi4gQnVhdCBEYXRhIFByb2tlciBCYXJ1IChTdGF0dXM6IEFDVElWRSlcclxuICAgICAgYXdhaXQgdHgucHJvZ3JhbUtlcmphLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtYTogbmFtYUV2ZW50LFxyXG4gICAgICAgICAgYW5nZ2FyYW46IGJ1ZGdldCxcclxuICAgICAgICAgIGFuZ2dhcmFuVGVycGFrYWk6IDAsXHJcbiAgICAgICAgICBzdGF0dXM6IFwiSU5fUFJPR1JFU1NcIiwgXHJcbiAgICAgICAgICBkaXZpc2k6IFwiS2VwYW5pdGlhYW5cIiwgXHJcbiAgICAgICAgICBkZWFkbGluZTogbmV3IERhdGUoZGF0ZVN0ciksIFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQW5nZ2FyYW4gRXZlbnQgYmVyaGFzaWwgZGlidWthISDwn46JXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBFVkVOVCBCVURHRVQgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1a2EgYW5nZ2FyYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIENhdGF0IFRyYW5zYWtzaSBQZW5nZWx1YXJhbiBFdmVudFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnRUcngoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZXZlbnRJZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJldmVudElkXCIpKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gQS4gU2ltcGFuIFRyYW5zYWtzaSAoTGlua2VkIGtlIFByb2tlcklEKVxyXG4gICAgICBhd2FpdCB0eC5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLFxyXG4gICAgICAgICAgbm9taW5hbCxcclxuICAgICAgICAgIHRpcGU6IFwiUEVOR0VMVUFSQU5cIixcclxuICAgICAgICAgIGthdGVnb3JpOiBcIlBlbmdlbHVhcmFuIEV2ZW50XCIsXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICAgIHByb2tlcklkOiBldmVudElkLCBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEIuIFVwZGF0ZSAnYW5nZ2FyYW5UZXJwYWthaScgZGkgdGFiZWwgUHJva2VyXHJcbiAgICAgIGF3YWl0IHR4LnByb2dyYW1LZXJqYS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBldmVudElkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYW5nZ2FyYW5UZXJwYWthaTogeyBpbmNyZW1lbnQ6IG5vbWluYWwgfSBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4va2V1YW5nYW5cIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBlbmdlbHVhcmFuIGV2ZW50IGRpY2F0YXQhIPCfp75cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ1JFQVRFIEVWRU5UIFRSWCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGRhdGEgZXZlbnQuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICA5LiBNQU5BSkVNRU4gSU5WRU5UQVJJU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIDEuIFRhbWJhaC9FZGl0IEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUludmVudGFyaXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga29kZSA9IGZvcm1EYXRhLmdldChcImNvZGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGhhcmdhID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByaWNlXCIpKTtcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHNlcmlhbCA9IGZvcm1EYXRhLmdldChcInNlcmlhbFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaWRSYXcpIHtcclxuICAgICAgLy8gRWRpdFxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWRSYXcpIH0sXHJcbiAgICAgICAgZGF0YTogeyBuYW1hLCBrb2RlLCBrYXRlZ29yaSwgaGFyZ2EsIHNlcmlhbE51bTogc2VyaWFsLCAuLi4oZm90b1VybCAmJiB7IGZvdG9VcmwgfSkgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENyZWF0ZVxyXG4gICAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgICAgbmFtYSwga29kZSwga2F0ZWdvcmksIGhhcmdhLCBzZXJpYWxOdW06IHNlcmlhbCwgZm90b1VybCwgXHJcbiAgICAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLCBrb25kaXNpOiBcIkJhaWtcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBhc2V0IHRlcnNpbXBhbiEg8J+TplwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbnlpbXBhbiBhc2V0LlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBIYXB1cyBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludmVudGFyaXMoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIFBpbmphbSBCYXJhbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBpbmphbUJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3QgcGVtaW5qYW0gPSBmb3JtRGF0YS5nZXQoXCJib3Jyb3dlclwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBcIkJPUlJPV0VEXCIsXHJcbiAgICAgICAgcGVtaW5qYW06IHBlbWluamFtLFxyXG4gICAgICAgIHRnbFBpbmphbTogbmV3IERhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJhcmFuZyBiZXJoYXNpbCBkaXBpbmphbSEg8J+VklwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbXByb3NlcyBwZW1pbmphbWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA0LiBLZW1iYWxpa2FuIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24ga2VtYmFsaWthbkJhcmFuZyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgY29uc3Qga29uZGlzaSA9IGZvcm1EYXRhLmdldChcImNvbmRpdGlvblwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIEFtYmlsIGRhdGEgYmFyYW5nIGR1bHUgYnVhdCB0YXUgc2lhcGEgcGVtaW5qYW0gdGVyYWtoaXJcclxuICAgICAgY29uc3QgYmFyYW5nID0gYXdhaXQgdHguaW52ZW50YXJpcy5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgICAgaWYgKCFiYXJhbmcgfHwgIWJhcmFuZy5wZW1pbmphbSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGEgYmFyYW5nIHRpZGFrIHZhbGlkIGF0YXUgdGlkYWsgc2VkYW5nIGRpcGluamFtLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQS4gU2ltcGFuIGtlIFJpd2F5YXRcclxuICAgICAgYXdhaXQgdHgucml3YXlhdEFzZXQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpbnZlbnRhcmlzSWQ6IGlkLFxyXG4gICAgICAgICAgcGVtaW5qYW06IGJhcmFuZy5wZW1pbmphbSxcclxuICAgICAgICAgIHRnbEtlbHVhcjogYmFyYW5nLnRnbFBpbmphbSB8fCBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgdGdsS2VtYmFsaTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIGtvbmRpc2lLZW1iYWxpOiBrb25kaXNpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEIuIFJlc2V0IFN0YXR1cyBCYXJhbmdcclxuICAgICAgYXdhaXQgdHguaW52ZW50YXJpcy51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiBrb25kaXNpID09PSBcIlJ1c2FrXCIgPyBcIk1BSU5URU5BTkNFXCIgOiBcIkFWQUlMQUJMRVwiLFxyXG4gICAgICAgICAga29uZGlzaToga29uZGlzaSxcclxuICAgICAgICAgIHBlbWluamFtOiBudWxsLFxyXG4gICAgICAgICAgdGdsUGluamFtOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFyYW5nIHN1ZGFoIGRpa2VtYmFsaWthbiEg4pyFXCIgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2ludmVudGFyaXNcIik7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJSRVRVUk4gSVRFTSBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJHYWdhbCBtZW1wcm9zZXMgcGVuZ2VtYmFsaWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMTEuIFNUQVRJU1RJSyBQRU5HVU5KVU5HIChWSVNJVE9SIFRSQUNLSU5HKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja1Zpc2l0b3IoaXA6IHN0cmluZywgdXNlckFnZW50OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xyXG4gIC8vIDEuIEFiYWlrYW4gcnV0ZSBpbnRlcm5hbC9hZG1pblxyXG4gIGlmIChwYXRoLnN0YXJ0c1dpdGgoJy9hZG1pbicpIHx8IHBhdGguc3RhcnRzV2l0aCgnL2FwaScpIHx8IHBhdGguaW5jbHVkZXMoJ19uZXh0JykgfHwgcGF0aC5pbmNsdWRlcygnZmF2aWNvbicpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyAyLiBGaWx0ZXIgQm90IERhc2FyIChNZW5jZWdhaCBqdXRhYW4gaGl0IGRhcmkgY3Jhd2xlcilcclxuICBjb25zdCBib3RLZXl3b3JkcyA9IFsnYm90JywgJ2NyYXdsZXInLCAnc3BpZGVyJywgJ2dvb2dsZWJvdCcsICdiaW5nYm90JywgJ3lhbmRleGJvdCcsICdzbHVycCcsICdiYWlkdXNwaWRlciddO1xyXG4gIGNvbnN0IHVhTG93ZXIgPSB1c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoYm90S2V5d29yZHMuc29tZShrZXl3b3JkID0+IHVhTG93ZXIuaW5jbHVkZXMoa2V5d29yZCkpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBTYWZldHkgY2hlY2s6IFBhc3Rpa2FuIG1vZGVsIHZpc2l0b3IgYWRhXHJcbiAgaWYgKCEocHJpc21hIGFzIGFueSkudmlzaXRvcikgcmV0dXJuO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gMy4gR3VuYWthbiByZW50YW5nIHdha3R1IHVudHVrIHBlbmdlY2VrYW4gXCJ1bmlxdWUgdmlzaXRcIlxyXG4gICAgLy8gS2l0YSBhbmdnYXAgc2F0dSBvcmFuZyBhZGFsYWggc2F0dSBrdW5qdW5nYW4gcGVyIDEgamFtIHBlciBoYWxhbWFuXHJcbiAgICBjb25zdCBvbmVIb3VyQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDYwICogNjAgKiAxMDAwKTtcclxuICAgIFxyXG4gICAgLy8gQ2VrIGFwYWthaCBzdWRhaCBhZGEga3VuanVuZ2FuIHNlcnVwYSAoZ3VuYWthbiBzZWxlY3QgaWQgc2FqYSBhZ2FyIHJpbmdhbilcclxuICAgIGNvbnN0IHJlY2VudFZpc2l0ID0gYXdhaXQgKHByaXNtYSBhcyBhbnkpLnZpc2l0b3IuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpcCxcclxuICAgICAgICBwYXRoLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogeyBndGU6IG9uZUhvdXJBZ28gfVxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZWNlbnRWaXNpdCkge1xyXG4gICAgICBhd2FpdCAocHJpc21hIGFzIGFueSkudmlzaXRvci5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgaXAsIHVzZXJBZ2VudDogdXNlckFnZW50LnN1YnN0cmluZygwLCAyNTUpLCBwYXRoIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEd1bmFrYW4gbG9nZ2luZyB5YW5nIHRpZGFrIG1lbmdoZW50aWthbiBwcm9zZXMgdXRhbWFcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJUUkFDSyBWSVNJVE9SIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMTAuIE1BTkFKRU1FTiBHQUxFUkkgS0VHSUFUQU5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRhbmdnYWwgPSBmb3JtRGF0YS5nZXQoXCJ0YW5nZ2FsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIEFtYmlsIEpTT04gc3RyaW5nIGRhcmkgZm9ybSBjbGllbnRcclxuICBjb25zdCBpbWFnZXNKc29uID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VzXCIpIGFzIHN0cmluZzsgXHJcblxyXG4gIGlmICghanVkdWwgfHwgIWltYWdlc0pzb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkp1ZHVsIGRhbiBtaW5pbWFsIDEgRm90byB3YWppYiBkaWlzaSFcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpZFJhdykge1xyXG4gICAgICAvLyBNT0RFIEVESVRcclxuICAgICAgYXdhaXQgcHJpc21hLmdhbGVyaS51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIoaWRSYXcpIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAganVkdWwsIGthdGVnb3JpLCBkZXNrcmlwc2ksXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsKSxcclxuICAgICAgICAgIGltYWdlczogaW1hZ2VzSnNvbiAvLyBTaW1wYW4gc2ViYWdhaSBKU09OIFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBNT0RFIEJBUlVcclxuICAgICAgYXdhaXQgcHJpc21hLmdhbGVyaS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLCBrYXRlZ29yaSwgZGVza3JpcHNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbCksXHJcbiAgICAgICAgICBpbWFnZXM6IGltYWdlc0pzb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9nYWxlcmlcIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJHYWxlcmkgYmVyaGFzaWwgZGlzaW1wYW4hIPCfk7hcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiR0FMRVJJIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW55aW1wYW4gZ2FsZXJpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlR2FsZXJpKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVJBNERzQiwyTEFBQSJ9
}),
"[project]/components/AspirasiSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AspirasiSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$8abbe7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:8abbe7 [app-ssr] (ecmascript) <text/javascript>"); // Import Server Action tadi
"use client";
;
;
;
function AspirasiSection() {
    const [isAnonymous, setIsAnonymous] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Status loading
    // Handle saat form dikirim
    async function handleSubmit(event) {
        event.preventDefault(); // Cegah refresh halaman
        setIsLoading(true);
        const form = event.currentTarget;
        const formData = new FormData(form);
        // Tambahkan status anonim ke data yang dikirim
        formData.append("isAnonim", isAnonymous.toString());
        // Panggil Server Action
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$8abbe7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitAspirasi"])(formData);
        if (result.success) {
            alert(result.message); // Tampilkan pesan sukses
            form.reset(); // Kosongkan form
            setIsAnonymous(false); // Reset toggle anonim
        } else {
            alert(result.message); // Tampilkan error
        }
        setIsLoading(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-24 z-10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#020617] dark:to-[#0b1121] z-0"
            }, void 0, false, {
                fileName: "[project]/components/AspirasiSection.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 w-96 h-96 bg-blue-500/10 dark:bg-slate-500/10 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/AspirasiSection.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 bottom-0 w-96 h-96 bg-indigo-500/10 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/AspirasiSection.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 md:px-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full lg:w-1/2 space-y-6 text-center lg:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-4 py-2 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest",
                                    children: "Suara Anda Berharga 📢"
                                }, void 0, false, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight",
                                    children: [
                                        "Punya Ide atau ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500",
                                            children: "Masukan Membangun?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 dark:text-slate-400 text-lg",
                                    children: "Jangan ragu untuk menyampaikan aspirasi, kritik, atau saran untuk kemajuan OSIS & SMK Nurul Islam. Identitasmu aman bersama kami."
                                }, void 0, false, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 pt-4",
                                    children: [
                                        'Privasi Terjaga',
                                        'Langsung Didengar Pengurus',
                                        'Bebas & Bertanggung Jawab'
                                    ].map((text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 justify-center lg:justify-start text-slate-700 dark:text-slate-300 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xs",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                text
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AspirasiSection.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full lg:w-1/2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-5 relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between bg-slate-50 dark:bg-black/40 p-3 rounded-xl border border-slate-100 dark:border-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-slate-700 dark:text-slate-300 pl-2",
                                                    children: "Kirim sebagai Anonim? 🕵️‍♂️"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsAnonymous(!isAnonymous),
                                                    className: `relative w-12 h-6 rounded-full transition-colors duration-300 ${isAnonymous ? 'bg-blue-600 dark:bg-slate-500' : 'bg-slate-300 dark:bg-slate-700'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${isAnonymous ? 'translate-x-6' : 'translate-x-0'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AspirasiSection.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `grid grid-cols-2 gap-4 transition-all duration-500 ${isAnonymous ? 'opacity-40 grayscale pointer-events-none select-none blur-[1px]' : 'opacity-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 dark:text-slate-400 ml-1",
                                                            children: "Nama Lengkap"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AspirasiSection.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "nama",
                                                            type: "text",
                                                            placeholder: "Nama Kamu",
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:border-transparent outline-none text-sm font-medium transition-all",
                                                            disabled: isAnonymous,
                                                            required: !isAnonymous
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AspirasiSection.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 dark:text-slate-400 ml-1",
                                                            children: "Kelas / Jurusan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AspirasiSection.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "kelas",
                                                            type: "text",
                                                            placeholder: "X PPLG 1",
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:border-transparent outline-none text-sm font-medium transition-all",
                                                            disabled: isAnonymous,
                                                            required: !isAnonymous
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AspirasiSection.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-slate-500 dark:text-slate-400 ml-1",
                                                    children: "Pesan Aspirasi"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "pesan",
                                                    rows: 4,
                                                    placeholder: "Tulis kritik, saran, atau ide kreatifmu di sini...",
                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:border-transparent outline-none text-sm font-medium resize-none transition-all",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isLoading,
                                            className: "w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-slate-100 dark:text-black dark:hover:bg-white text-white font-bold text-sm shadow-lg shadow-blue-500/30 dark:shadow-slate-500/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed",
                                            children: isLoading ? "MENGIRIM... ⏳" : "KIRIM ASPIRASI 🚀"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-[10px] text-slate-400",
                                            children: "*Pesan yang mengandung SARA atau ujaran kebencian tidak akan diproses."
                                        }, void 0, false, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AspirasiSection.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AspirasiSection.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AspirasiSection.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AspirasiSection.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AspirasiSection.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative w-full bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-500 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-[50%] -left-[20%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-[50%] -right-[20%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 md:px-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-600",
                                                children: "OSIS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 27,
                                                columnNumber: 15
                                            }, this),
                                            " MPK"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 dark:text-slate-400 text-sm leading-relaxed",
                                        children: "Wadah aspirasi dan kreasi siswa SMK Nurul Islam Cianjur. Membangun karakter kepemimpinan yang berakhlak mulia dan berdaya saing global."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://instagram.com/osis_smknuris",
                                                target: "_blank",
                                                className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white dark:hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "2",
                                                            y: "2",
                                                            width: "20",
                                                            height: "20",
                                                            rx: "5",
                                                            ry: "5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "17.5",
                                                            y1: "6.5",
                                                            x2: "17.51",
                                                            y2: "6.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 20
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 18
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 33,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://youtube.com/@smknuris",
                                                target: "_blank",
                                                className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-600 hover:text-white dark:hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 20
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 18
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 46,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://tiktok.com/@smknuris",
                                                target: "_blank",
                                                className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 20
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 18
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 58,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest",
                                        children: "Menu Utama"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/program",
                                                    className: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                                    children: "Program Kerja"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/pengurus",
                                                    className: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                                    children: "Struktur Organisasi"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/galeri",
                                                    className: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                                    children: "Galeri Kegiatan"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/berita",
                                                    className: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                                    children: "Berita Terkini"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest",
                                        children: "Jurusan"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hover:text-blue-600 cursor-default transition-colors",
                                                    children: "PPLG (RPL)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hover:text-blue-600 cursor-default transition-colors",
                                                    children: "TJKT (TKJ)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hover:text-blue-600 cursor-default transition-colors",
                                                    children: "DKV (Multimedia)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hover:text-blue-600 cursor-default transition-colors",
                                                    children: "MPLB (OTKP)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hover:text-blue-600 cursor-default transition-colors",
                                                    children: "AKL (Akuntansi)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hover:text-blue-600 cursor-default transition-colors",
                                                    children: "TO (Otomotif)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest",
                                        children: "Hubungi Kami"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 text-sm text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "📍"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Jl. Raya Cianjur - Bandung Km. 09, Bojong, Karangtengah, Cianjur, Jawa Barat."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "📧"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "osis@smknuris.sch.id"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "📞"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "(0263) 1234567"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-500 text-center md:text-left",
                                children: [
                                    "© ",
                                    currentYear,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-slate-700 dark:text-slate-300",
                                        children: "OSIS & MPK SMK Nurul Islam"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 118,
                                        columnNumber: 35
                                    }, this),
                                    ". All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 117,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 dark:text-slate-600 flex items-center gap-1",
                                children: [
                                    "Made with ❤️ by ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-500 font-bold",
                                        children: "Sultan Malik Ahmad"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 121,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 120,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_20fff2ef._.js.map