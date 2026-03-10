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
"[project]/components/GalleryClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function GalleryClient({ items }) {
    _s();
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryClient.useEffect": ()=>{
            setMounted(true);
        }
    }["GalleryClient.useEffect"], []);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryClient.useEffect": ()=>{
            const handleKeyDown = {
                "GalleryClient.useEffect.handleKeyDown": (e)=>{
                    if (!selectedItem) return;
                    if (e.key === "Escape") closeModal();
                    if (e.key === "ArrowRight") setCurrentImageIndex({
                        "GalleryClient.useEffect.handleKeyDown": (prev)=>(prev + 1) % selectedItem.album.length
                    }["GalleryClient.useEffect.handleKeyDown"]);
                    if (e.key === "ArrowLeft") setCurrentImageIndex({
                        "GalleryClient.useEffect.handleKeyDown": (prev)=>(prev - 1 + selectedItem.album.length) % selectedItem.album.length
                    }["GalleryClient.useEffect.handleKeyDown"]);
                }
            }["GalleryClient.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "GalleryClient.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["GalleryClient.useEffect"];
        }
    }["GalleryClient.useEffect"], [
        selectedItem
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-white dark:bg-[#020617] border-t border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 mb-10 flex justify-between items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-black text-slate-900 dark:text-white",
                                children: [
                                    "Dokumentasi ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white dark:from-[#020617] to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/GalleryClient.tsx",
                        lineNumber: 76,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white dark:from-[#020617] to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/GalleryClient.tsx",
                        lineNumber: 77,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]",
                        children: [
                            ...items,
                            ...items,
                            ...items
                        ].slice(0, 15).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>openModal(item),
                                className: "relative w-[280px] h-[180px] md:w-[350px] md:h-[220px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all border border-slate-100 dark:border-white/10 shadow-sm group/item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 flex flex-col justify-end p-4 transition-opacity duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-white bg-blue-600 px-2 py-0.5 rounded w-fit mb-1",
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/components/GalleryClient.tsx",
                                                lineNumber: 96,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            mounted && selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/60 backdrop-blur-xl",
                            onClick: closeModal
                        }, void 0, false, {
                            fileName: "[project]/components/GalleryClient.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full md:w-3/4 h-[50%] md:h-full bg-white dark:bg-[#1e293b] flex items-center justify-center border-r border-slate-100 dark:border-slate-700/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GalleryClient.tsx",
                                            lineNumber: 131,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-full p-2 md:p-8 flex items-center justify-center z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        selectedItem.album.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: prevImage,
                                                    className: "absolute left-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all opacity-0 md:opacity-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {}, void 0, false, {
                                                        fileName: "[project]/components/GalleryClient.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 233
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: nextImage,
                                                    className: "absolute right-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all opacity-0 md:opacity-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                                                        fileName: "[project]/components/GalleryClient.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 234
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-1/4 h-[50%] md:h-full bg-white dark:bg-[#1e293b] p-6 md:p-8 flex flex-col relative z-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeModal,
                                            className: "absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-y-auto mt-4 custom-scrollbar pr-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-4",
                                                    children: selectedItem.category
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight",
                                                    children: selectedItem.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-700 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-line",
                                                    children: selectedItem.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GalleryClient.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 24
                                                }, this),
                                                selectedItem.album.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3",
                                                            children: "Album Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/GalleryClient.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-2",
                                                            children: selectedItem.album.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setCurrentImageIndex(idx),
                                                                    className: `relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-blue-600 opacity-100' : 'border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(GalleryClient, "VwA5NC7+0lF3mhhmJTqi9XXSElI=");
_c = GalleryClient;
var _c;
__turbopack_context__.k.register(_c, "GalleryClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AuroraBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // Tambah 'memo'
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Stars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ref untuk warna target (PENTING untuk transisi mulus)
    const targetColorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color));
    // Saat props color berubah, update target ref saja (jangan re-render komponen)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuroraMesh.useEffect": ()=>{
            targetColorRef.current.set(color);
        }
    }["AuroraMesh.useEffect"], [
        color
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "AuroraMesh.useFrame": (state)=>{
            if (meshRef.current) {
                const material = meshRef.current.material;
                // Update Waktu
                material.uniforms.uTime.value = state.clock.getElapsedTime() * speed;
                // Update Warna (Lerp Smooth ke target)
                material.uniforms.uColor.value.lerp(targetColorRef.current, 0.05);
            }
        }
    }["AuroraMesh.useFrame"]);
    // Init uniforms sekali saja
    const uniforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        uTime: {
            value: 0
        },
        uColor: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color)
        },
        uSeed: {
            value: seed
        }
    }).current;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                uniforms: uniforms,
                transparent: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
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
_s(AuroraMesh, "v8kU5B+m0GVJVfEViyQFaFmQCGQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = AuroraMesh;
// === KOMPONEN UTAMA ===
function AuroraBackgroundComponent({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-0 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuroraMesh, {
                    color: color,
                    seed: 10.0,
                    speed: 0.8
                }, void 0, false, {
                    fileName: "[project]/components/AuroraBackground.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuroraMesh, {
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
_c1 = AuroraBackgroundComponent;
// 🔥 FIX BUG NGE-FREEZE: MEMOIZATION
// Ini mencegah Canvas di-reset saat parent (MajorsClient) re-render karena hover/state change
const AuroraBackground = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(AuroraBackgroundComponent);
_c2 = AuroraBackground;
const __TURBOPACK__default__export__ = AuroraBackground;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AuroraMesh");
__turbopack_context__.k.register(_c1, "AuroraBackgroundComponent");
__turbopack_context__.k.register(_c2, "AuroraBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MajorsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MajorsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
// 🔥 IMPORT SIHIR 3D KITA
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuroraBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AuroraBackground.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MajorsClient({ majors }) {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeMajor = majors[activeIndex];
    // --- AUTO PLAY ---
    const nextSlide = ()=>setActiveIndex((curr)=>(curr + 1) % majors.length);
    const prevSlide = ()=>setActiveIndex((curr)=>(curr - 1 + majors.length) % majors.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MajorsClient.useEffect": ()=>{
            if (!isPaused) timeoutRef.current = setTimeout(nextSlide, 8000);
            return ({
                "MajorsClient.useEffect": ()=>{
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }
            })["MajorsClient.useEffect"];
        }
    }["MajorsClient.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617]",
        onMouseEnter: ()=>setIsPaused(true),
        onMouseLeave: ()=>setIsPaused(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuroraBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: activeMajor.MysteriousColor
            }, void 0, false, {
                fileName: "[project]/components/MajorsClient.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_95%)] pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/components/MajorsClient.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-20 h-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-5xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center min-h-[400px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "flex flex-col justify-center relative z-20 md:text-left",
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "exit",
                                        variants: textVariants,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest w-fit mb-4 backdrop-blur-md shadow-lg",
                                                style: {
                                                    color: activeMajor.MysteriousColor,
                                                    borderColor: `${activeMajor.MysteriousColor}40`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl md:text-5xl font-black text-white leading-none mb-3 tracking-tight drop-shadow-2xl",
                                                children: activeMajor.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 84,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm md:text-base font-bold text-white/50 mb-6 uppercase tracking-wider",
                                                children: activeMajor.fullName
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 87,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-slate-300 leading-relaxed drop-shadow-md font-bold max-w-md",
                                                children: activeMajor.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 97,
                                                columnNumber: 25
                                            }, this),
                                            activeMajor.count !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-black text-white flex items-baseline gap-2",
                                                    style: {
                                                        textShadow: `0 0 20px ${activeMajor.MysteriousColor}80`
                                                    },
                                                    children: [
                                                        activeMajor.count,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "relative h-[250px] md:h-[320px] flex items-center justify-center z-10",
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "exit",
                                        variants: logoVariants,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-full max-w-[280px] max-h-[280px]",
                                            children: activeMajor.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: activeMajor.logo,
                                                alt: activeMajor.title,
                                                fill: true,
                                                className: "object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/MajorsClient.tsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevSlide,
                                className: "p-2 text-white/40 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: majors.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextSlide,
                                className: "p-2 text-white/40 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
_s(MajorsClient, "vNLKvIWaMmVkZuM4bMrX99FD5Cg=");
_c = MajorsClient;
var _c;
__turbopack_context__.k.register(_c, "MajorsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data:b2c245 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitAspirasi",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4057499068e6161aa5838799dc06289ccd2643b4a7":"submitAspirasi"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4057499068e6161aa5838799dc06289ccd2643b4a7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitAspirasi");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNQcm9rZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxyXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW9zaXMtbXBrLTIwMjYtc2FuZ2F0LWt1YXRcIlxyXG4pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJzZXNzaW9uX3Rva2VuXCIpPy52YWx1ZTtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQgYXMgeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgWk9EIFNDSEVNQVMgKFZBTElEQVRJT04pXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3QgQmVyaXRhU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGp1ZHVsOiB6LnN0cmluZygpLm1pbig1LCBcIkp1ZHVsIG1pbmltYWwgNSBrYXJha3RlclwiKSxcclxuICBrb250ZW46IHouc3RyaW5nKCkubWluKDIwLCBcIktvbnRlbiBtaW5pbWFsIDIwIGthcmFrdGVyXCIpLFxyXG4gIGthdGVnb3JpOiB6LnN0cmluZygpLmRlZmF1bHQoXCJVbXVtXCIpLFxyXG4gIGdhbWJhcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbn0pO1xyXG5cclxuY29uc3QgUHJva2VyU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIG5hbWE6IHouc3RyaW5nKCkubWluKDMsIFwiTmFtYSBwcm9rZXIgbWluaW1hbCAzIGthcmFrdGVyXCIpLFxyXG4gIGRlc2tyaXBzaTogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCksXHJcbiAgZGl2aXNpOiB6LnN0cmluZygpLFxyXG4gIHByaW9yaXRhczogei5zdHJpbmcoKS5kZWZhdWx0KFwiTWVkaXVtXCIpLFxyXG4gIGFuZ2dhcmFuOiB6Lm51bWJlcigpLm5vbm5lZ2F0aXZlKCkuZGVmYXVsdCgwKSxcclxuICBwcm9ncmVzczogei5udW1iZXIoKS5taW4oMCkubWF4KDEwMCkuZGVmYXVsdCgwKSxcclxuICBsb2thc2k6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG4gIGltYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBpc0ZlYXR1cmVkOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcclxuICBzdGFydERhdGU6IHouZGF0ZSgpLm9wdGlvbmFsKCkubnVsbGFibGUoKSxcclxuICBkZWFkbGluZTogei5kYXRlKCkub3B0aW9uYWwoKS5udWxsYWJsZSgpLFxyXG59KTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAxLiBBU1BJUkFTSSBTSVNXQVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLy8gLi4uIChza2lwIGZvciBicmV2aXR5LCB3aWxsIGFwcGx5IGluIG11bHRpcGxlIHN0ZXBzIGlmIG5lZWRlZClcclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMS4gQVNQSVJBU0kgU0lTV0FcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRBc3BpcmFzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCByYXdOYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmF3S2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGVzYW4gPSBmb3JtRGF0YS5nZXQoXCJwZXNhblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNBbm9uaW0gPSBmb3JtRGF0YS5nZXQoXCJpc0Fub25pbVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghcGVzYW4gfHwgcGVzYW4udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQZXNhbiB0aWRhayBib2xlaCBrb3NvbmchXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlbmdpcmltID0gaXNBbm9uaW0gfHwgIXJhd05hbWEgPyBcIkFub25pbVwiIDogcmF3TmFtYTtcclxuICBjb25zdCBrZWxhcyA9IGlzQW5vbmltID8gXCItXCIgOiByYXdLZWxhcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5hc3BpcmFzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGVuZ2lyaW0sXHJcbiAgICAgICAga2VsYXMsXHJcbiAgICAgICAgaXNpOiBwZXNhbixcclxuICAgICAgICBrYXRlZ29yaTogXCJVbXVtXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQXNwaXJhc2kgYmVyaGFzaWwgZGlraXJpbSEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJNSVQgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdpcmltIGFzcGlyYXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMi4gQURNSU4gQVNQSVJBU0lcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXBseUFzcGlyYXNpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBiYWxhc2FuID0gZm9ybURhdGEuZ2V0KFwiYmFsYXNhblwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGlmICghYmFsYXNhbiB8fCBiYWxhc2FuLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0aWRhayBib2xlaCBrb3NvbmcuXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJhbGFzYW4sXHJcbiAgICAgICAgYmFsYXNhbkF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHN0YXR1czogXCJTRUxFU0FJXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hc3BpcmFzaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFsYXNhbiB0ZXJraXJpbSFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkVQTFkgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJhbGFzIHBlc2FuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXNwaXJhc2koaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXNwaXJhc2kuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2FzcGlyYXNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBc3BpcmFzaSBiZXJoYXNpbCBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQVNQSVJBU0kgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdoYXB1cyBhc3BpcmFzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDMuIEJFUklUQSAoQ01TKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PSAzLiBGSVRVUiBCRVJJVEEgPT09XHJcblxyXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1teXFx3XFxzLV0vZywgXCJcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIik7XHJcbn1cclxuXHJcbi8vIEZpbGU6IGxpYi9hY3Rpb25zLnRzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmVyaXRhKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IEJlcml0YVNjaGVtYS5zYWZlUGFyc2Uoe1xyXG4gICAganVkdWw6IGZvcm1EYXRhLmdldChcImp1ZHVsXCIpLFxyXG4gICAga29udGVuOiBmb3JtRGF0YS5nZXQoXCJrb250ZW5cIiksXHJcbiAgICBrYXRlZ29yaTogZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIikgfHwgXCJVbXVtXCIsXHJcbiAgICBnYW1iYXI6IGZvcm1EYXRhLmdldChcImdhbWJhclwiKSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzO1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgbWVzc2FnZTogZXJyb3JNc2cuanVkdWw/LlswXSB8fCBlcnJvck1zZy5rb250ZW4/LlswXSB8fCBcIkRhdGEgdGlkYWsgdmFsaWQuXCIgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBqdWR1bCwga29udGVuLCBrYXRlZ29yaSwgZ2FtYmFyIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuICBjb25zdCBzbHVnID0gYCR7c2x1Z2lmeShqdWR1bCl9LSR7RGF0ZS5ub3coKX1gO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlc2kgaGFiaXMuIFNpbGFrYW4gbG9naW4ga2VtYmFsaS5cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRtaW5Vc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIWFkbWluVXNlcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRXJyb3I6IFVzZXIgdGlkYWsgZGl0ZW11a2FuIGRpIGRhdGFiYXNlIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmJlcml0YS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAganVkdWwsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBrb250ZW4sXHJcbiAgICAgICAga2F0ZWdvcmksXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIgfHwgbnVsbCxcclxuICAgICAgICBwZW51bGlzSWQ6IGFkbWluVXNlci5pZCwgXHJcbiAgICAgICAgc3RhdHVzOiAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZykgfHwgXCJQVUJMSVNIRURcIixcclxuICAgICAgICB2aWV3czogMCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Jlcml0YVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Jlcml0YVwiKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaXNpbXBhbiEg8J+TsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW55aW1wYW4gYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCZXJpdGEoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgaWRSYXcgPSBmb3JtRGF0YS5nZXQoXCJpZFwiKTtcclxuICBpZiAoIWlkUmF3KSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJRCB0aWRhayB2YWxpZC5cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoaWRSYXcpO1xyXG4gIGNvbnN0IGp1ZHVsID0gZm9ybURhdGEuZ2V0KFwianVkdWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtvbnRlbiA9IGZvcm1EYXRhLmdldChcImtvbnRlblwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc3RhdHVzID0gZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBnYW1iYXIgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJcIikgYXMgc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5iZXJpdGEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIGtvbnRlbixcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICBzdGF0dXM6IHN0YXR1cyB8fCBcIlBVQkxJU0hFRFwiLFxyXG4gICAgICAgIC4uLihnYW1iYXIgJiYgeyBnYW1iYXIgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaXBlcmJhcnVpISDwn5OdXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBCRVJJVEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIHVwZGF0ZSBiZXJpdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCZXJpdGEoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYmVyaXRhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9iZXJpdGFcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkJlcml0YSBiZXJoYXNpbCBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgQkVSSVRBIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naGFwdXMgYmVyaXRhLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgNC4gTUFOQUpFTUVOIFBST0dSQU0gS0VSSkEgKFVQREFURSBGSVgpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAvLyBBbWJpbCBkYXRhIHNlc3VhaSBuYW1hIGZpZWxkIGRpIEZyb250ZW5kXHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGl2aXNpID0gZm9ybURhdGEuZ2V0KFwiZGl2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBwcmlvcml0YXMgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKSBhcyBzdHJpbmc7IC8vIEZyb250ZW5kIGtpcmltICdwcmlvcml0eScsIERCIHNpbXBhbiAncHJpb3JpdGFzJ1xyXG4gIGNvbnN0IGFuZ2dhcmFuID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFuZ2dhcmFuXCIpKTtcclxuICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJwcm9ncmVzc1wiKSk7XHJcbiAgY29uc3QgbG9rYXNpID0gZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZzsgLy8gUElDIGRpc2ltcGFuIGRpIGtvbG9tIGxva2FzaVxyXG4gIFxyXG4gIC8vIOKchSBGSVRVUiBCQVJVOiBJbWFnZSAmIEZlYXR1cmVkXHJcbiAgY29uc3QgaW1hZ2UgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKSBhcyBzdHJpbmc7IFxyXG4gIGNvbnN0IGlzRmVhdHVyZWQgPSBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgLy8gRGF0ZSBIYW5kbGluZ1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZVJhdyA9IGZvcm1EYXRhLmdldChcInN0YXJ0RGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gc3RhcnREYXRlUmF3ID8gbmV3IERhdGUoc3RhcnREYXRlUmF3KSA6IG51bGw7XHJcbiAgY29uc3QgZGVhZGxpbmVSYXcgPSBmb3JtRGF0YS5nZXQoXCJkZWFkbGluZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVhZGxpbmUgPSBkZWFkbGluZVJhdyA/IG5ldyBEYXRlKGRlYWRsaW5lUmF3KSA6IG51bGw7XHJcblxyXG4gIC8vIE1hcHBpbmcgU3RhdHVzIExvZ2ljIChPdG9tYXRpcyBhdGF1IE1hbnVhbCBkYXJpIEZyb250ZW5kKVxyXG4gIC8vIEtpdGEgcGFrYWkgc3RhdHVzIG1hbnVhbCBrYWxhdSBkaWtpcmltLCBrYWxhdSBuZ2dhayBwYWthaSBsb2dpYyBwcm9ncmVzc1xyXG4gIGxldCBzdGF0dXMgPSBcIlRPRE9cIjtcclxuICBpZiAocHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMTAwKSBzdGF0dXMgPSBcIklOX1BST0dSRVNTXCI7XHJcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHN0YXR1cyA9IFwiRE9ORVwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtYSxcclxuICAgICAgICBkZXNrcmlwc2ksXHJcbiAgICAgICAgZGl2aXNpLFxyXG4gICAgICAgIHByaW9yaXRhcyxcclxuICAgICAgICBhbmdnYXJhbixcclxuICAgICAgICBwcm9ncmVzcyxcclxuICAgICAgICBzdGF0dXMsIC8vIFNpbXBhbiBzdGF0dXNcclxuICAgICAgICBsb2thc2ksIC8vIFBJQ1xyXG4gICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICBkZWFkbGluZSxcclxuICAgICAgICBpbWFnZTogaW1hZ2UgfHwgbnVsbCwgLy8gU2ltcGFuIEdhbWJhclxyXG4gICAgICAgIGlzRmVhdHVyZWQ6IGlzRmVhdHVyZWQgLy8gU2ltcGFuIFN0YXR1cyBVbmdndWxhblxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVmcmVzaCBoYWxhbWFuIEFkbWluICYgSG9tZXBhZ2UgKGthcmVuYSBhZGEgc2VjdGlvbiBQcm9ncmFtIFVuZ2d1bGFuKVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJva2VyXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpOyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpYnVhdCEg8J+agFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgUFJPS0VSIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW1idWF0IHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2dyYW1LZXJqYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGlmICghaWRSYXcpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIklEIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoaWRSYXcpO1xyXG5cclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByaW9yaXRhcyA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBhbmdnYXJhbiA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhbmdnYXJhblwiKSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJvZ3Jlc3NcIikpO1xyXG4gIGNvbnN0IGxva2FzaSA9IGZvcm1EYXRhLmdldChcImxva2FzaVwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3QgaW1hZ2UgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaXNGZWF0dXJlZCA9IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICBjb25zdCBzdGFydERhdGVSYXcgPSBmb3JtRGF0YS5nZXQoXCJzdGFydERhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVJhdyA/IG5ldyBEYXRlKHN0YXJ0RGF0ZVJhdykgOiBudWxsO1xyXG4gIGNvbnN0IGRlYWRsaW5lUmF3ID0gZm9ybURhdGEuZ2V0KFwiZGVhZGxpbmVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlYWRsaW5lID0gZGVhZGxpbmVSYXcgPyBuZXcgRGF0ZShkZWFkbGluZVJhdykgOiBudWxsO1xyXG5cclxuICAvLyBTdGF0dXMgTG9naWMgVXBkYXRlXHJcbiAgbGV0IHN0YXR1cyA9IFwiVE9ET1wiO1xyXG4gIGlmIChwcm9ncmVzcyA+IDAgJiYgcHJvZ3Jlc3MgPCAxMDApIHN0YXR1cyA9IFwiSU5fUFJPR1JFU1NcIjtcclxuICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkgc3RhdHVzID0gXCJET05FXCI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZ3JhbUtlcmphLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIGRlc2tyaXBzaSxcclxuICAgICAgICBkaXZpc2ksXHJcbiAgICAgICAgcHJpb3JpdGFzLFxyXG4gICAgICAgIGFuZ2dhcmFuLFxyXG4gICAgICAgIHByb2dyZXNzLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBsb2thc2ksXHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIGRlYWRsaW5lLFxyXG4gICAgICAgIGlzRmVhdHVyZWQsXHJcbiAgICAgICAgLy8gVXBkYXRlIGdhbWJhciBDVU1BIGppa2EgdXNlciB1cGxvYWQgYmFydSAoc3RyaW5nIHRpZGFrIGtvc29uZylcclxuICAgICAgICAuLi4oaW1hZ2UgJiYgeyBpbWFnZSB9KSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2tlclwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJva2VyIGJlcmhhc2lsIGRpdXBkYXRlISDinKhcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIFBST0tFUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIHByb2tlci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gR2FudGkgbmFtYSBkZWxldGVQcm9rZXIgamFkaSBkZWxldGVQcm9ncmFtS2VyamEgYmlhciBrb25zaXN0ZW4gc2FtYSBmcm9udGVuZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZ3JhbUtlcmphKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnByb2dyYW1LZXJqYS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJva2VyXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIFBST0tFUiBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDUuIE1BTkFKRU1FTiBQRU5HVVJVUyAoTEVOR0tBUClcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGVuZ3VydXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgLy8gMS4gQW1iaWwgRGF0YSBXYWppYlxyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBuaXMgPSBmb3JtRGF0YS5nZXQoXCJuaXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGtlbGFzID0gZm9ybURhdGEuZ2V0KFwia2VsYXNcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGphYmF0YW4gPSBmb3JtRGF0YS5nZXQoXCJqYWJhdGFuXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkaXZpc2kgPSBmb3JtRGF0YS5nZXQoXCJkaXZpc2lcIikgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIC8vIDIuIEFtYmlsIERhdGEgVGFtYmFoYW5cclxuICBjb25zdCBocCA9IGZvcm1EYXRhLmdldChcImhwXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBpbnN0YWdyYW0gPSBmb3JtRGF0YS5nZXQoXCJpbnN0YWdyYW1cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRpa3RvayA9IGZvcm1EYXRhLmdldChcInRpa3Rva1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZG9taXNpbGkgPSBmb3JtRGF0YS5nZXQoXCJkb21pc2lsaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdHJhbnNwb3J0YXNpID0gZm9ybURhdGEuZ2V0KFwidHJhbnNwb3J0YXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtb3R0byA9IGZvcm1EYXRhLmdldChcIm1vdHRvXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBmb3RvVXJsID0gZm9ybURhdGEuZ2V0KFwiZm90b1VybFwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8g4pyFIERBVEEgQkFSVTogVklTSSAmIE1JU0kgKERpdGFuZ2thcCBkYXJpIEZvcm1EYXRhKVxyXG4gIGNvbnN0IHZpc2kgPSBmb3JtRGF0YS5nZXQoXCJ2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtaXNpID0gZm9ybURhdGEuZ2V0KFwibWlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8gQ2VrIFRhbmdnYWwgTGFoaXIgKENvbnZlcnQgc3RyaW5nIGtlIERhdGUpXHJcbiAgY29uc3QgdGdsTGFoaXJSYXcgPSBmb3JtRGF0YS5nZXQoXCJ0Z2xMYWhpclwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGdsTGFoaXIgPSB0Z2xMYWhpclJhdyA/IG5ldyBEYXRlKHRnbExhaGlyUmF3KSA6IG51bGw7XHJcblxyXG4gIC8vIENlayBhcGFrYWggR3VydS9QZW1iaW5hXHJcbiAgY29uc3QgaXNBZHZpc29yID0gZm9ybURhdGEuZ2V0KFwiaXNBZHZpc29yXCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgLy8gVmFsaWRhc2kgRGFzYXJcclxuICBpZiAoIW5hbWEgfHwgIW5pcyB8fCAhamFiYXRhbikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiTmFtYSwgTklTL05JUCwgZGFuIEphYmF0YW4gd2FqaWIgZGlpc2khXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgbmlzLFxyXG4gICAgICAgIGtlbGFzOiBrZWxhcyB8fCBcIi1cIixcclxuICAgICAgICBqYWJhdGFuLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBocCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgdGlrdG9rLFxyXG4gICAgICAgIGRvbWlzaWxpLFxyXG4gICAgICAgIHRyYW5zcG9ydGFzaSxcclxuICAgICAgICBtb3R0byxcclxuICAgICAgICAvLyDinIUgU0lNUEFOIFZJU0kgJiBNSVNJIEtFIERBVEFCQVNFXHJcbiAgICAgICAgdmlzaTogdmlzaSB8fCBudWxsLCBcclxuICAgICAgICBtaXNpOiBtaXNpIHx8IG51bGwsXHJcbiAgICAgICAgdGdsTGFoaXIsXHJcbiAgICAgICAgZm90b1VybDogZm90b1VybCB8fCBudWxsLFxyXG4gICAgICAgIHN0YXR1czogXCJBS1RJRlwiLFxyXG4gICAgICAgIGlzQWR2aXNvcjogaXNBZHZpc29yXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUGVuZ3VydXMgYmVyaGFzaWwgZGl0YW1iYWhrYW4hIPCfkaRcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ1JFQVRFIFBFTkdVUlVTIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5hbWJhaCBkYXRhLiBOSVMgbXVuZ2tpbiBzdWRhaCB0ZXJkYWZ0YXIuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQZW5ndXJ1cyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGlmICghaWRSYXcpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIklEIHRpZGFrIGRpdGVtdWthblwiIH07XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoaWRSYXcpO1xyXG5cclxuICAvLyBBbWJpbCBzZW11YSBkYXRhIGlucHV0XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG5pcyA9IGZvcm1EYXRhLmdldChcIm5pc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2VsYXMgPSBmb3JtRGF0YS5nZXQoXCJrZWxhc1wiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgamFiYXRhbiA9IGZvcm1EYXRhLmdldChcImphYmF0YW5cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaSA9IGZvcm1EYXRhLmdldChcImRpdmlzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc3RhdHVzID0gZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUtUSUZcIiB8IFwiTk9OQUtUSUZcIiB8IFwiQUxVTU5JXCI7XHJcbiAgXHJcbiAgLy8gRGF0YSBUYW1iYWhhblxyXG4gIGNvbnN0IGhwID0gZm9ybURhdGEuZ2V0KFwiaHBcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGluc3RhZ3JhbSA9IGZvcm1EYXRhLmdldChcImluc3RhZ3JhbVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGlrdG9rID0gZm9ybURhdGEuZ2V0KFwidGlrdG9rXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkb21pc2lsaSA9IGZvcm1EYXRhLmdldChcImRvbWlzaWxpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0cmFuc3BvcnRhc2kgPSBmb3JtRGF0YS5nZXQoXCJ0cmFuc3BvcnRhc2lcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IG1vdHRvID0gZm9ybURhdGEuZ2V0KFwibW90dG9cIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJmb3RvVXJsXCIpIGFzIHN0cmluZztcclxuICBcclxuICAvLyDinIUgREFUQSBCQVJVOiBWSVNJICYgTUlTSSAoVXBkYXRlKVxyXG4gIGNvbnN0IHZpc2kgPSBmb3JtRGF0YS5nZXQoXCJ2aXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtaXNpID0gZm9ybURhdGEuZ2V0KFwibWlzaVwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIGNvbnN0IHRnbExhaGlyUmF3ID0gZm9ybURhdGEuZ2V0KFwidGdsTGFoaXJcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRnbExhaGlyID0gdGdsTGFoaXJSYXcgPyBuZXcgRGF0ZSh0Z2xMYWhpclJhdykgOiB1bmRlZmluZWQ7IFxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnBlbmd1cnVzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1hLFxyXG4gICAgICAgIG5pcyxcclxuICAgICAgICBrZWxhcyxcclxuICAgICAgICBqYWJhdGFuLFxyXG4gICAgICAgIGRpdmlzaSxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgaHAsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgaW5zdGFncmFtLFxyXG4gICAgICAgIHRpa3RvayxcclxuICAgICAgICBkb21pc2lsaSxcclxuICAgICAgICB0cmFuc3BvcnRhc2ksXHJcbiAgICAgICAgbW90dG8sXHJcbiAgICAgICAgLy8g4pyFIFVQREFURSBWSVNJICYgTUlTSVxyXG4gICAgICAgIHZpc2ksIFxyXG4gICAgICAgIG1pc2ksXHJcbiAgICAgICAgLy8gVXBkYXRlIHRhbmdnYWwgbGFoaXIgY3VtYSBrYWxhdSBhZGEgaW5wdXQgYmFydVxyXG4gICAgICAgIC4uLih0Z2xMYWhpciAmJiB7IHRnbExhaGlyIH0pLFxyXG4gICAgICAgIC8vIFVwZGF0ZSBmb3RvIGN1bWEga2FsYXUgYWRhIGZvdG8gYmFydSB5YW5nIGRpa2lyaW1cclxuICAgICAgICAuLi4oZm90b1VybCAmJiB7IGZvdG9VcmwgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiRGF0YSBwZW5ndXJ1cyBkaXBlcmJhcnVpISDwn5OdXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlVQREFURSBQRU5HVVJVUyBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgdXBkYXRlIGRhdGEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZW5ndXJ1cyhpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERUxFVEUgUEVOR1VSVVMgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSWRDYXJkRGVzaWduKGlkOiBudW1iZXIsIGRlc2lnblVybDogc3RyaW5nIHwgbnVsbCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucGVuZ3VydXMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YTogeyBpZENhcmREZXNpZ246IGRlc2lnblVybCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pZGNhcmRcIik7IFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIElEIENBUkQgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUlkQ2FyZEJhY2tncm91bmQoaW1hZ2VVcmw6IHN0cmluZyB8IG51bGwpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFwcENvbmZpZy51cHNlcnQoe1xyXG4gICAgICB3aGVyZTogeyBpZDogMSB9LFxyXG4gICAgICB1cGRhdGU6IHsgaWRDYXJkQmFja0ltYWdlOiBpbWFnZVVybCB9LFxyXG4gICAgICBjcmVhdGU6IHsgaWQ6IDEsIGlkQ2FyZEJhY2tJbWFnZTogaW1hZ2VVcmwgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pZGNhcmRcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTQVZFIEJHIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDcuIFNJU1RFTSBBQlNFTlNJIChTQ0FOTkVSICYgQUNBUkEpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gMS4gQnVhdCBBY2FyYSBCYXJ1IChVcGRhdGU6IFRhbWJhaCBXYWt0dSwgVGlwZSwgSGFyaSwgJiBBdXRvU3RhcnQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBY2FyYShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsU3RyID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbG9rYXNpID0gZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtdWxhaVN0ciA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgYXMgc3RyaW5nOyBcclxuICBjb25zdCBzZWxlc2FpU3RyID0gZm9ybURhdGEuZ2V0KFwid2FrdHVTZWxlc2FpXCIpIGFzIHN0cmluZzsgXHJcbiAgY29uc3QgdGlwZSA9IChmb3JtRGF0YS5nZXQoXCJ0aXBlXCIpIGFzIGFueSkgfHwgXCJTRUtBTElfUEFLQUlcIjtcclxuICBjb25zdCBoYXJpID0gZm9ybURhdGEuZ2V0KFwiaGFyaVwiKSBhcyBzdHJpbmc7IC8vIENvbnRvaDogXCJTZW5pbixTZWxhc2FcIlxyXG4gIGNvbnN0IGF1dG9TdGFydCA9IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIGlmICghbmFtYSB8fCAhdGFuZ2dhbFN0cikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiTmFtYSBkYW4gVGFuZ2dhbCB3YWppYiBkaWlzaSFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBtdWxhaVN0ciA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7bXVsYWlTdHJ9YCkgOiBudWxsO1xyXG4gICAgY29uc3QgZW5kID0gc2VsZXNhaVN0ciA/IG5ldyBEYXRlKGAke3RhbmdnYWxTdHJ9VCR7c2VsZXNhaVN0cn1gKSA6IG51bGw7XHJcblxyXG4gICAgY29uc3QgbmV3QWNhcmEgPSBhd2FpdCBwcmlzbWEuYWNhcmEuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgZGVza3JpcHNpOiBkZXNrcmlwc2kgfHwgXCJcIixcclxuICAgICAgICB0aXBlLFxyXG4gICAgICAgIGhhcmk6IHRpcGUgPT09IFwiUlVUSU5BTlwiID8gaGFyaSA6IG51bGwsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUodGFuZ2dhbFN0ciksXHJcbiAgICAgICAgd2FrdHVNdWxhaTogc3RhcnQsXHJcbiAgICAgICAgd2FrdHVTZWxlc2FpOiBlbmQsXHJcbiAgICAgICAgbG9rYXNpOiBsb2thc2kgfHwgXCJTZWtvbGFoXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlVQQ09NSU5HXCIsXHJcbiAgICAgICAgYXV0b1N0YXJ0XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBiZXJoYXNpbCBkaWJ1YXQhIPCfk4VcIiwgaWQ6IG5ld0FjYXJhLmlkIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgQUNBUkEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1YXQgYWNhcmEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDYuIFVwZGF0ZSBTdGF0dXMgS2VoYWRpcmFuIChTYWtpdCwgSXppbiwgZGxsKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3RhdHVzS2VoYWRpcmFuKGFic2Vuc2lJZDogbnVtYmVyLCBzdGF0dXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogYWJzZW5zaUlkIH0sXHJcbiAgICAgIGRhdGE6IHsgc3RhdHVzIH1cclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vYWJzZW5zaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEFtYmlsIFNlbXVhIEFjYXJhIChQcmlvcml0YXMgUlVUSU5BTiBkaSBhdGFzKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFmdGFyQWNhcmEoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuYWNhcmEuZmluZE1hbnkoe1xyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgc2VzaToge1xyXG4gICAgICAgICAgd2hlcmU6IHsgc3RhdHVzOiBcIk9OR09JTkdcIiB9LFxyXG4gICAgICAgICAgdGFrZTogMSxcclxuICAgICAgICAgIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IFtcclxuICAgICAgICB7IHRpcGU6ICdkZXNjJyB9LCAvLyAnUlVUSU5BTicgKFIpIHZzICdTRUtBTElfUEFLQUknIChTKSwgUiBsZWJpaCBkdWx1IGppa2EgZGVzYyAoc2VjYXJhIGFsZmFiZXRpcyBTID4gUiwgamFkaSBraXRhIGJ1dHVoIGxvZ2ljIGxhaW4gYXRhdSBwYXN0aWthbiBvcmRlcm55YSBiZW5hcilcclxuICAgICAgICB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDMuIFVwZGF0ZSBBY2FyYSAoRWRpdCBkZXRhaWwgKyBUaXBlICsgSGFyaSArIEF1dG9TdGFydClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFjYXJhKGlkOiBudW1iZXIsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCB0YW5nZ2FsU3RyID0gZm9ybURhdGEuZ2V0KFwidGFuZ2dhbFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbG9rYXNpID0gZm9ybURhdGEuZ2V0KFwibG9rYXNpXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBtdWxhaVN0ciA9IGZvcm1EYXRhLmdldChcIndha3R1TXVsYWlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHNlbGVzYWlTdHIgPSBmb3JtRGF0YS5nZXQoXCJ3YWt0dVNlbGVzYWlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRpcGUgPSAoZm9ybURhdGEuZ2V0KFwidGlwZVwiKSBhcyBhbnkpIHx8IFwiU0VLQUxJX1BBS0FJXCI7XHJcbiAgY29uc3QgaGFyaSA9IGZvcm1EYXRhLmdldChcImhhcmlcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGF1dG9TdGFydCA9IGZvcm1EYXRhLmdldChcImF1dG9TdGFydFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdGFydCA9IG11bGFpU3RyID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHttdWxhaVN0cn1gKSA6IG51bGw7XHJcbiAgICBjb25zdCBlbmQgPSBzZWxlc2FpU3RyID8gbmV3IERhdGUoYCR7dGFuZ2dhbFN0cn1UJHtzZWxlc2FpU3RyfWApIDogbnVsbDtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEuYWNhcmEudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWEsXHJcbiAgICAgICAgdGlwZSxcclxuICAgICAgICBoYXJpOiB0aXBlID09PSBcIlJVVElOQU5cIiA/IGhhcmkgOiBudWxsLFxyXG4gICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWxTdHIpLFxyXG4gICAgICAgIGxva2FzaSxcclxuICAgICAgICB3YWt0dU11bGFpOiBzdGFydCxcclxuICAgICAgICB3YWt0dVNlbGVzYWk6IGVuZCxcclxuICAgICAgICBhdXRvU3RhcnRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNC4gSGFwdXMgQWNhcmFcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFjYXJhKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmFjYXJhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBY2FyYSBiZXJoYXNpbCBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdoYXB1cyBhY2FyYS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNS4gU3RhcnQgU2VzaSAoTWFudWFsIE92ZXJyaWRlICYgTG9naWMgU2VzaSBCYXJ1KVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAvLyAxLiBVcGRhdGUgc3RhdHVzIEFjYXJhXHJcbiAgICAgIGF3YWl0IHR4LmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6IFwiT05HT0lOR1wiLFxyXG4gICAgICAgICAgd2FrdHVNdWxhaUFrdHVhbDogbmV3IERhdGUoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAyLiBCdWF0IFNlc2kgQmFydVxyXG4gICAgICByZXR1cm4gYXdhaXQgdHguc2VzaUFjYXJhLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWNhcmFJZDogaWQsXHJcbiAgICAgICAgICB3YWt0dU11bGFpOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIk9OR09JTkdcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc2VzaUlkOiByZXN1bHQuaWQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNUQVJUIFNFU1NJT04gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA2LiBTdG9wIFNlc2lcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3BBY2FyYVNlc3Npb24oaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gMS4gQ2FyaSBzZXNpIHlhbmcgYWt0aWZcclxuICAgICAgY29uc3Qgc2VzaUFrdGlmID0gYXdhaXQgdHguc2VzaUFjYXJhLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgYWNhcmFJZDogaWQsIHN0YXR1czogXCJPTkdPSU5HXCIgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHNlc2lBa3RpZikge1xyXG4gICAgICAgIGF3YWl0IHR4LnNlc2lBY2FyYS51cGRhdGUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc2lBa3RpZi5pZCB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBzdGF0dXM6IFwiQ09NUExFVEVEXCIsXHJcbiAgICAgICAgICAgIHdha3R1U2VsZXNhaTogbmV3IERhdGUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAyLiBVcGRhdGUgc3RhdHVzIEFjYXJhXHJcbiAgICAgIC8vIEppa2EgUnV0aW5hbiwgYmFsaWsga2UgVVBDT01JTkcgYmlhciBiaXNhIGRpLXN0YXJ0IGxhZ2kgYmVzb2tcclxuICAgICAgY29uc3QgbmV4dFN0YXR1cyA9IGFjYXJhLnRpcGUgPT09IFwiUlVUSU5BTlwiID8gXCJVUENPTUlOR1wiIDogXCJDT01QTEVURURcIjtcclxuXHJcbiAgICAgIGF3YWl0IHR4LmFjYXJhLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RhdHVzOiBuZXh0U3RhdHVzLFxyXG4gICAgICAgICAgd2FrdHVTZWxlc2FpQWt0dWFsOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Fic2Vuc2lcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVE9QIFNFU1NJT04gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA3LiBTY2FuIEFic2Vuc2kgKFVwZGF0ZTogTG9naWthIEJlcmJhc2lzIFNlc2kpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2FuQWJzZW5zaShuaXM6IHN0cmluZywgYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgaWYgKCFuaXMgfHwgIWFjYXJhSWQpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkRhdGEgdGlkYWsgbGVuZ2thcCFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcGVuZ3VydXMgPSBhd2FpdCBwcmlzbWEucGVuZ3VydXMuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IG5pcyB9IH0pO1xyXG4gICAgaWYgKCFwZW5ndXJ1cykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4p2MIFFSIENvZGUgVGlkYWsgVGVyZGFmdGFyIVwiIH07XHJcbiAgICBpZiAocGVuZ3VydXMuc3RhdHVzICE9PSBcIkFLVElGXCIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKaoO+4jyBBbmdnb3RhIFRpZGFrIEFrdGlmXCIgfTtcclxuXHJcbiAgICBjb25zdCBhY2FyYSA9IGF3YWl0IHByaXNtYS5hY2FyYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IGFjYXJhSWQgfSB9KTtcclxuICAgIGlmICghYWNhcmEpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIuKdjCBBY2FyYSB0aWRhayBkaXRlbXVrYW4hXCIgfTtcclxuXHJcbiAgICAvLyBDQVJJIFNFU0kgQUtUSUZcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgYWNhcmFJZDogYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwi4pqg77iPIFNlc2kgdGlkYWsgYWt0aWYhIFNpbGFrYW4gU3RhcnQgZHVsdS5cIiB9O1xyXG5cclxuICAgIC8vIENlayBkdXBsaWthc2kgYmVyZGFzYXJrYW4gc2VzaUlkXHJcbiAgICBjb25zdCBleGlzdGluZ0xvZyA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRGaXJzdCh7IFxyXG4gICAgICB3aGVyZTogeyBcclxuICAgICAgICBwZW5ndXJ1c0lkOiBwZW5ndXJ1cy5pZCwgXHJcbiAgICAgICAgc2VzaUlkOiBzZXNpQWt0aWYuaWQgXHJcbiAgICAgIH0gXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdMb2cpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgbWVzc2FnZTogXCJTdWRhaCBhYnNlbiBkaSBzZXNpIGluaSEg8J+RjFwiLCBcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgbmFtZTogcGVuZ3VydXMubmFtYSxcclxuICAgICAgICAgICByb2xlOiBwZW5ndXJ1cy5qYWJhdGFuLFxyXG4gICAgICAgICAgIGltYWdlOiBwZW5ndXJ1cy5mb3RvVXJsLFxyXG4gICAgICAgICAgIHN0YXR1czogXCJEVVBMSUNBVEVcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2ltcGFuIEFic2Vuc2lcclxuICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwZW5ndXJ1c0lkOiBwZW5ndXJ1cy5pZCxcclxuICAgICAgICBhY2FyYUlkOiBhY2FyYUlkLFxyXG4gICAgICAgIHNlc2lJZDogc2VzaUFrdGlmLmlkLCAvLyBXQUpJQiBzaW1wYW4gc2VzaUlkXHJcbiAgICAgICAga2VnaWF0YW46IGFjYXJhLm5hbWEsXHJcbiAgICAgICAgc3RhdHVzOiBcIkhBRElSXCIsXHJcbiAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoKSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgbWVzc2FnZTogXCJBYnNlbnNpIEJlcmhhc2lsISDinIVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgICBuYW1lOiBwZW5ndXJ1cy5uYW1hLFxyXG4gICAgICAgICByb2xlOiBwZW5ndXJ1cy5qYWJhdGFuLFxyXG4gICAgICAgICBpbWFnZTogcGVuZ3VydXMuZm90b1VybCxcclxuICAgICAgICAgc3RhdHVzOiBcIkhBRElSXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNDQU4gRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlcnZlciBFcnJvci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMTEuIElucHV0IEFic2Vuc2kgTWFudWFsIChVcGRhdGU6IEJlcmJhc2lzIFNlc2kpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnB1dE1hbnVhbEFic2Vuc2koYWNhcmFJZDogbnVtYmVyLCBwZW5ndXJ1c0lkOiBudW1iZXIsIHN0YXR1czogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc2lBa3RpZiA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZTogeyBhY2FyYUlkOiBhY2FyYUlkLCBzdGF0dXM6IFwiT05HT0lOR1wiIH0sXHJcbiAgICAgICAgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmICghc2VzaUFrdGlmKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLimqDvuI8gVGlkYWsgYWRhIHNlc2kgYWt0aWYhIFNpbGFrYW4gU3RhcnQgZHVsdS5cIiB9O1xyXG5cclxuICAgIGNvbnN0IGFjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogYWNhcmFJZCB9IH0pO1xyXG4gICAgaWYgKCFhY2FyYSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQWNhcmEgdGlkYWsgZGl0ZW11a2FuXCIgfTtcclxuXHJcbiAgICAvLyBHdW5ha2FuIGZpbmRGaXJzdCArIENyZWF0ZS9VcGRhdGUga2FyZW5hIEFic2Vuc2kgdGlkYWsgcHVueWEgdW5pcXVlIGtleSBkaSBzY2hlbWEgeWFuZyBtZW5kdWt1bmcgVXBzZXJ0IHVudHVrIHNlc2lJZFxyXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEuYWJzZW5zaS5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IHBlbmd1cnVzSWQsIHNlc2lJZDogc2VzaUFrdGlmLmlkIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleGlzdGluZy5pZCB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7IHN0YXR1cyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS5hYnNlbnNpLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjYXJhSWQsXHJcbiAgICAgICAgICAgICAgICBzZXNpSWQ6IHNlc2lBa3RpZi5pZCxcclxuICAgICAgICAgICAgICAgIHBlbmd1cnVzSWQsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBrZWdpYXRhbjogYWNhcmEubmFtYSxcclxuICAgICAgICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiTUFOVUFMIElOUFVUIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMTIuIEF1dG8tQWxwYSBiYWdpIHlhbmcgdGlkYWsgaGFkaXIgc2FhdCBzZXNpIGRpdHV0dXAgKFVwZGF0ZTogQmVyYmFzaXMgU2VzaSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dG9BbHBhUmVtYWluaW5nKGFjYXJhSWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNpQWt0aWYgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgYWNhcmFJZDogYWNhcmFJZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAoIXNlc2lBa3RpZikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiVGlkYWsgYWRhIHNlc2kgYWt0aWZcIiB9O1xyXG5cclxuICAgIGNvbnN0IGFjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogYWNhcmFJZCB9IH0pO1xyXG4gICAgaWYgKCFhY2FyYSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuXHJcbiAgICAvLyAxLiBBbWJpbCBzZW11YSBwZW5ndXJ1cyBha3RpZlxyXG4gICAgY29uc3Qgc2VtdWFQZW5ndXJ1cyA9IGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sXHJcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAyLiBBbWJpbCBwZW5ndXJ1cyB5YW5nIFNVREFIIHB1bnlhIHJlY29yZCBkaSBTRVNJIElOSVxyXG4gICAgY29uc3Qgc3VkYWhBYnNlbiA9IGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgc2VzaUlkOiBzZXNpQWt0aWYuaWQgfSxcclxuICAgICAgc2VsZWN0OiB7IHBlbmd1cnVzSWQ6IHRydWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaWRzU3VkYWhBYnNlbiA9IHN1ZGFoQWJzZW4ubWFwKGEgPT4gYS5wZW5ndXJ1c0lkKTtcclxuXHJcbiAgICAvLyAzLiBGaWx0ZXIgc2lhcGEgeWFuZyBiZWx1bSBhZGEgcmVjb3JkbnlhXHJcbiAgICBjb25zdCBiZWx1bUFic2VuID0gc2VtdWFQZW5ndXJ1cy5maWx0ZXIocCA9PiAhaWRzU3VkYWhBYnNlbi5pbmNsdWRlcyhwLmlkKSk7XHJcblxyXG4gICAgLy8gNC4gTWFzdWtrYW4gbWVyZWthIHNlYmFnYWkgQUxQQVxyXG4gICAgaWYgKGJlbHVtQWJzZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYWJzZW5zaS5jcmVhdGVNYW55KHtcclxuICAgICAgICBkYXRhOiBiZWx1bUFic2VuLm1hcChwID0+ICh7XHJcbiAgICAgICAgICBhY2FyYUlkLFxyXG4gICAgICAgICAgc2VzaUlkOiBzZXNpQWt0aWYuaWQsXHJcbiAgICAgICAgICBwZW5ndXJ1c0lkOiBwLmlkLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIkFMUEFcIixcclxuICAgICAgICAgIGtlZ2lhdGFuOiBhY2FyYS5uYW1hLFxyXG4gICAgICAgICAgdGFuZ2dhbDogbmV3IERhdGUoKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA1LiBUdXR1cCBTZXNpIHNlY2FyYSByZXNtaVxyXG4gICAgYXdhaXQgc3RvcEFjYXJhU2Vzc2lvbihhY2FyYUlkKTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9hYnNlbnNpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IGJlbHVtQWJzZW4ubGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJBVVRPIEFMUEEgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAxMy4gQW1iaWwgRGFmdGFyIFBlbmd1cnVzIEFrdGlmIChVbnR1ayBEcm9wZG93biBNYW51YWwpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYWZ0YXJQZW5ndXJ1cygpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5wZW5ndXJ1cy5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHN0YXR1czogXCJBS1RJRlwiIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgbmFtYTogXCJhc2NcIiB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gMTQuIEF1dG8tU3RhcnQgU2VzaSBiZXJkYXNhcmthbiBXYWt0dVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tBbmRBdXRvU3RhcnRBY2FyYSgpIHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHN0YXJ0T2ZUb2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgc3RhcnRPZlRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gIFxyXG4gIC8vIEhpdHVuZyB0b3RhbCBtZW5pdCBkYXJpIGphbSBzZWthcmFuZyAoTG9rYWwpXHJcbiAgY29uc3QgY3VycmVudFRpbWVWYWwgPSBub3cuZ2V0SG91cnMoKSAqIDYwICsgbm93LmdldE1pbnV0ZXMoKTtcclxuXHJcbiAgY29uc3QgZGF5cyA9IFtcIk1pbmdndVwiLCBcIlNlbmluXCIsIFwiU2VsYXNhXCIsIFwiUmFidVwiLCBcIkthbWlzXCIsIFwiSnVtYXRcIiwgXCJTYWJ0dVwiXTtcclxuICBjb25zdCB0b2RheURheSA9IGRheXNbbm93LmdldERheSgpXTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVwY29taW5nQWNhcmEgPSBhd2FpdCBwcmlzbWEuYWNhcmEuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHN0YXR1czogXCJVUENPTUlOR1wiLFxyXG4gICAgICAgIGF1dG9TdGFydDogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBhY2FyYSBvZiB1cGNvbWluZ0FjYXJhKSB7XHJcbiAgICAgIGlmICghYWNhcmEud2FrdHVNdWxhaSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBIaXR1bmcgdG90YWwgbWVuaXQgZGFyaSBqYWR3YWxcclxuICAgICAgY29uc3Qgc2NoZWR1bGVIb3VycyA9IGFjYXJhLndha3R1TXVsYWkuZ2V0SG91cnMoKTtcclxuICAgICAgY29uc3Qgc2NoZWR1bGVNaW51dGVzID0gYWNhcmEud2FrdHVNdWxhaS5nZXRNaW51dGVzKCk7XHJcbiAgICAgIGNvbnN0IHNjaGVkdWxlVGltZVZhbCA9IHNjaGVkdWxlSG91cnMgKiA2MCArIHNjaGVkdWxlTWludXRlcztcclxuXHJcbiAgICAgIGNvbnN0IGlzVG9kYXkgPSBhY2FyYS50aXBlID09PSBcIlNFS0FMSV9QQUtBSVwiICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNhcmEudGFuZ2dhbC50b0RhdGVTdHJpbmcoKSA9PT0gbm93LnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgaXNSb3V0aW5lVG9kYXkgPSBhY2FyYS50aXBlID09PSBcIlJVVElOQU5cIiAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2FyYS5oYXJpPy5pbmNsdWRlcyh0b2RheURheSk7XHJcblxyXG4gICAgICBpZiAoKGlzVG9kYXkgfHwgaXNSb3V0aW5lVG9kYXkpICYmIGN1cnJlbnRUaW1lVmFsID49IHNjaGVkdWxlVGltZVZhbCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDEuIENlayBhcGFrYWggYWRhIHNlc2kgeWFuZyBzZWRhbmcgT05HT0lORyAoSmFuZ2FuIGRvdWJsZSBzdGFydClcclxuICAgICAgICBjb25zdCBhY3RpdmVTZXNpID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBhY2FyYUlkOiBhY2FyYS5pZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGFjdGl2ZVNlc2kpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAvLyAyLiBDZWsgU2VzaSB0ZXJha2hpciBoYXJpIGluaVxyXG4gICAgICAgIGNvbnN0IGxhc3RTZXNpSGFyaUluaSA9IGF3YWl0IHByaXNtYS5zZXNpQWNhcmEuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgXHJcbiAgICAgICAgICAgICAgICBhY2FyYUlkOiBhY2FyYS5pZCwgXHJcbiAgICAgICAgICAgICAgICB3YWt0dU11bGFpOiB7IGd0ZTogc3RhcnRPZlRvZGF5IH0gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgd2FrdHVNdWxhaTogJ2Rlc2MnIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFsYXN0U2VzaUhhcmlJbmkpIHtcclxuICAgICAgICAgICAgLy8gQmVsdW0gYWRhIHNlc2kgc2FtYSBzZWthbGkgaGFyaSBpbmksIGJvbGVoIHN0YXJ0XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBdXRvLXN0YXJ0aW5nIHNlc3Npb24gZm9yOiAke2FjYXJhLm5hbWF9YCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHN0YXJ0QWNhcmFTZXNzaW9uKGFjYXJhLmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBKaWthIHN1ZGFoIGFkYSBzZXNpLCBiYW5kaW5na2FuIGphbSBqYWR3YWxueWEuXHJcbiAgICAgICAgICAgIC8vIEppa2EgamFkd2FsIGRpZWRpdCBrZSB3YWt0dSB5YW5nIGxlYmloIGJhcnUgZGFyaSBzZXNpIHRlcmFraGlyLCBib2xlaCBzdGFydCBsYWdpLlxyXG4gICAgICAgICAgICBjb25zdCBsYXN0U2VzaVRpbWVWYWwgPSBsYXN0U2VzaUhhcmlJbmkud2FrdHVNdWxhaS5nZXRIb3VycygpICogNjAgKyBsYXN0U2VzaUhhcmlJbmkud2FrdHVNdWxhaS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc2NoZWR1bGVUaW1lVmFsID4gbGFzdFNlc2lUaW1lVmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTmV3IHNjaGVkdWxlIGRldGVjdGVkIGZvciAke2FjYXJhLm5hbWF9LCByZXN0YXJ0aW5nIHNlc3Npb24uLi5gKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHN0YXJ0QWNhcmFTZXNzaW9uKGFjYXJhLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQVVUTyBTVEFSVCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDE0LjUgQXV0by1TdG9wIFNlc2kgYmVyZGFzYXJrYW4gV2FrdHUgKFJlZmluZWQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0FuZEF1dG9TdG9wQWNhcmEoKSB7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb25nb2luZ0FjYXJhID0gYXdhaXQgcHJpc21hLmFjYXJhLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgc3RhdHVzOiBcIk9OR09JTkdcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAob25nb2luZ0FjYXJhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAgfTtcclxuXHJcbiAgICBsZXQgc3RvcHBlZENvdW50ID0gMDtcclxuICAgIGZvciAoY29uc3QgYWNhcmEgb2Ygb25nb2luZ0FjYXJhKSB7XHJcbiAgICAgIGlmICghYWNhcmEud2FrdHVTZWxlc2FpKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGxldCBzaG91bGRTdG9wID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoYWNhcmEudGlwZSA9PT0gXCJTRUtBTElfUEFLQUlcIikge1xyXG4gICAgICAgIC8vIEJhbmRpbmdrYW4gdGltZXN0YW1wIGxlbmdrYXAgdW50dWsgYWt1cmFzaSBtYWtzaW1hbFxyXG4gICAgICAgIGlmIChub3cgPj0gYWNhcmEud2FrdHVTZWxlc2FpKSB7XHJcbiAgICAgICAgICBzaG91bGRTdG9wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVW50dWsgUlVUSU5BTiwgYmFuZGluZ2thbiBKYW0gJiBNZW5pdCBoYXJpIGluaVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWwgPSBub3cuZ2V0SG91cnMoKSAqIDYwICsgbm93LmdldE1pbnV0ZXMoKTtcclxuICAgICAgICBjb25zdCBlbmRWYWwgPSBhY2FyYS53YWt0dVNlbGVzYWkuZ2V0SG91cnMoKSAqIDYwICsgYWNhcmEud2FrdHVTZWxlc2FpLmdldE1pbnV0ZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRWYWwgPj0gZW5kVmFsKSB7XHJcbiAgICAgICAgICBzaG91bGRTdG9wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzaG91bGRTdG9wKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtBVVRPLVNUT1BdIEVuZGluZyBzZXNzaW9uOiAke2FjYXJhLm5hbWF9YCk7XHJcbiAgICAgICAgYXdhaXQgYXV0b0FscGFSZW1haW5pbmcoYWNhcmEuaWQpO1xyXG4gICAgICAgIHN0b3BwZWRDb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50OiBzdG9wcGVkQ291bnQgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkFVVE8gU1RPUCBFUlJPUjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFN0cmluZyhlcnJvcikgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDE1LiBBbWJpbCBEYWZ0YXIgU2VzaSAoVW50dWsgTGFwb3JhbiBQZXIgU2VzaSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhZnRhclNlc2koYWNhcmFJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgYWNhcmFJZCB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gOC4gQW1iaWwgUmVrYXAgQWJzZW5zaSBMZW5na2FwIChVcGRhdGU6IEJlcmJhc2lzIFNlc2kgJiBNdWx0aS1TdGF0dXMpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWthcEFic2Vuc2koKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRvdGFsUGVuZ3VydXMgPSBhd2FpdCBwcmlzbWEucGVuZ3VydXMuY291bnQoeyB3aGVyZTogeyBzdGF0dXM6IFwiQUtUSUZcIiB9IH0pO1xyXG4gICAgXHJcbiAgICAvLyBBbWJpbCBzZW11YSBzZXNpIHlhbmcgcGVybmFoIGRpbGFrdWthblxyXG4gICAgY29uc3Qgc2VzaUxpc3QgPSBhd2FpdCBwcmlzbWEuc2VzaUFjYXJhLmZpbmRNYW55KHtcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGFjYXJhOiB0cnVlLFxyXG4gICAgICAgIGFic2Vuc2k6IHtcclxuICAgICAgICAgIHNlbGVjdDogeyBzdGF0dXM6IHRydWUgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeTogeyB3YWt0dU11bGFpOiAnZGVzYycgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgZGF0YTogc2VzaUxpc3QubWFwKHMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRnbCA9IG5ldyBEYXRlKHMud2FrdHVNdWxhaSk7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0VGdsID0gdGdsLnRvTG9jYWxlRGF0ZVN0cmluZygnaWQtSUQnLCB7IGRheTogJzItZGlnaXQnLCBtb250aDogJzItZGlnaXQnIH0pO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdEphbSA9IHRnbC50b0xvY2FsZVRpbWVTdHJpbmcoJ2lkLUlEJywgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjb3VudHMgPSB7XHJcbiAgICAgICAgICBIQURJUjogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnSEFESVInKS5sZW5ndGgsXHJcbiAgICAgICAgICBJWklOOiBzLmFic2Vuc2kuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdJWklOJykubGVuZ3RoLFxyXG4gICAgICAgICAgU0FLSVQ6IHMuYWJzZW5zaS5maWx0ZXIoYSA9PiBhLnN0YXR1cyA9PT0gJ1NBS0lUJykubGVuZ3RoLFxyXG4gICAgICAgICAgQUxQQTogcy5hYnNlbnNpLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnQUxQQScpLmxlbmd0aCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHMuaWQsXHJcbiAgICAgICAgICBhY2FyYUlkOiBzLmFjYXJhSWQsXHJcbiAgICAgICAgICBuYW1hOiBgJHtzLmFjYXJhLm5hbWF9ICgke2Zvcm1hdFRnbH0gJHtmb3JtYXRKYW19KWAsXHJcbiAgICAgICAgICBsb2thc2k6IHMuYWNhcmEubG9rYXNpLFxyXG4gICAgICAgICAgdGFuZ2dhbDogcy53YWt0dU11bGFpLFxyXG4gICAgICAgICAgY291bnRzLFxyXG4gICAgICAgICAgdG90YWxBbmdnb3RhOiB0b3RhbFBlbmd1cnVzLFxyXG4gICAgICAgICAgcGVyc2VudGFzZTogdG90YWxQZW5ndXJ1cyA+IDAgPyBNYXRoLnJvdW5kKChjb3VudHMuSEFESVIgLyB0b3RhbFBlbmd1cnVzKSAqIDEwMCkgOiAwLFxyXG4gICAgICAgICAgc3RhdHVzU2VzaTogcy5zdGF0dXNcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlJFS0FQIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW11YXQgcmVrYXAuXCIsIGRhdGE6IFtdIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA5LiBBbWJpbCBEZXRhaWwgQWJzZW5zaSBwZXIgU2VzaSAoTGFwb3JhbiAtIFNvcnQgYnkgTmFtYSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbExhcG9yYW4oc2VzaUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgc2VzaUlkOiBzZXNpSWQgfSxcclxuICAgICAgaW5jbHVkZTogeyBwZW5ndXJ1czogdHJ1ZSB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHBlbmd1cnVzOiB7IG5hbWE6ICdhc2MnIH0gfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJERVRBSUwgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDEwLiBBbWJpbCBMb2cgQWJzZW5zaSBwZXIgU2VzaS9BY2FyYSAoQWN0aXZpdHkgU3RyZWFtKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9nc0J5QWNhcmEoaWQ6IG51bWJlciwgdHlwZTogJ3Nlc2knIHwgJ2FjYXJhJyA9ICdzZXNpJykge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgdGFyZ2V0U2VzaUlkID0gaWQ7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdhY2FyYScpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVTZXNpID0gYXdhaXQgcHJpc21hLnNlc2lBY2FyYS5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBhY2FyYUlkOiBpZCwgc3RhdHVzOiBcIk9OR09JTkdcIiB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IHdha3R1TXVsYWk6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFhY3RpdmVTZXNpKSByZXR1cm4gW107IC8vIFRpZGFrIGFkYSBzZXNpIGFrdGlmID0gdGlkYWsgYWRhIGxvZ1xyXG4gICAgICAgIHRhcmdldFNlc2lJZCA9IGFjdGl2ZVNlc2kuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5hYnNlbnNpLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgc2VzaUlkOiB0YXJnZXRTZXNpSWQgfSxcclxuICAgICAgaW5jbHVkZTogeyBwZW5ndXJ1czogdHJ1ZSB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHRhbmdnYWw6ICdkZXNjJyB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDguIE1BTkFKRU1FTiBLRVVBTkdBTiAoS0FTICYgQU5HR0FSQU4gLSBNVUxUSSBMRURHRVIpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gMS4gVGFtYmFoIEJ1a3UgS2FzIChLYXRlZ29yaSBQZW1idWt1YW4gQmFydSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1a3VLYXMoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgY29sb3IgPSBmb3JtRGF0YS5nZXQoXCJjb2xvclwiKSBhcyBzdHJpbmcgfHwgXCJibHVlXCI7XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGJ1a3UgPSBhd2FpdCBwcmlzbWEuYnVrdUthcy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IG5hbWEsIGRlc2tyaXBzaSwgY29sb3IgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBCdWt1IEthcyAke25hbWF9IGJlcmhhc2lsIGRpYnVhdCEg8J+TmmAsIGlkOiBidWt1LmlkIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbWJ1YXQga2F0ZWdvcmkgcGVtYnVrdWFuLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAyLiBDYXRhdCBUcmFuc2Frc2kgS2FzIChVcGRhdGVkIHdpdGggYnVrdUthc0lkKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2VuZXJhbFRyeChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgdGlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJQRU1BU1VLQU5cIiB8IFwiUEVOR0VMVUFSQU5cIjtcclxuICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcGljID0gZm9ybURhdGEuZ2V0KFwicGljXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBidWt1S2FzSWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwiYnVrdUthc0lkXCIpKTtcclxuXHJcbiAgaWYgKCFidWt1S2FzSWQpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlBpbGloIEJ1a3UgS2FzIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp1ZHVsLFxyXG4gICAgICAgIG5vbWluYWwsXHJcbiAgICAgICAgdGlwZSxcclxuICAgICAgICBrYXRlZ29yaSxcclxuICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZShkYXRlU3RyKSxcclxuICAgICAgICBrZXRlcmFuZ2FuOiBgUElDOiAke3BpY31gLFxyXG4gICAgICAgIGJ1a3VLYXNJZFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJUcmFuc2Frc2kgYmVyaGFzaWwgZGljYXRhdCEg8J+SsFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmNhdGF0IHRyYW5zYWtzaS5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4gQnVrYSBBbmdnYXJhbiBFdmVudCBCYXJ1IChQaW5kYWggQnVrdSAvIEFsb2thc2kpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudEJ1ZGdldChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hRXZlbnQgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgYnVkZ2V0ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHByb2tlcklkID0gZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikgPyBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJva2VySWRcIikpIDogbnVsbDtcclxuICBjb25zdCBpc1N1YnNpZGkgPSBmb3JtRGF0YS5nZXQoXCJpc1N1YnNpZGlcIikgPT09IFwidHJ1ZVwiOyBcclxuICBjb25zdCBmcm9tQnVrdUlkID0gZm9ybURhdGEuZ2V0KFwiZnJvbUJ1a3VJZFwiKSA/IE51bWJlcihmb3JtRGF0YS5nZXQoXCJmcm9tQnVrdUlkXCIpKSA6IG51bGw7IFxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gQS4gSmlrYSBTVUJTSURJLCBjZWsgc2FsZG8gdGVybGViaWggZGFodWx1XHJcbiAgICAgIGlmIChpc1N1YnNpZGkgJiYgZnJvbUJ1a3VJZCkge1xyXG4gICAgICAgIC8vIEhpdHVuZyBzYWxkbyBkb21wZXQgc3VtYmVyIHNlY2FyYSByZWFsLXRpbWVcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCB0eC5rZXVhbmdhbi5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGJ1a3VLYXNJZDogZnJvbUJ1a3VJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEJhbGFuY2UgPSB0cmFuc2FjdGlvbnMucmVkdWNlKChhY2MsIGN1cnIpID0+IFxyXG4gICAgICAgICAgICBjdXJyLnRpcGUgPT09ICdQRU1BU1VLQU4nID8gYWNjICsgY3Vyci5ub21pbmFsIDogYWNjIC0gY3Vyci5ub21pbmFsLCAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZGdldCA+IGN1cnJlbnRCYWxhbmNlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2FsZG8gdGlkYWsgbWVuY3VrdXBpISBUZXJzZWRpYTogUnAgJHtjdXJyZW50QmFsYW5jZS50b0xvY2FsZVN0cmluZygnaWQtSUQnKX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LmtldWFuZ2FuLmNyZWF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGp1ZHVsOiBgU3Vic2lkaSBLYXM6ICR7bmFtYUV2ZW50fWAsXHJcbiAgICAgICAgICAgIG5vbWluYWw6IGJ1ZGdldCxcclxuICAgICAgICAgICAgdGlwZTogXCJQRU5HRUxVQVJBTlwiLFxyXG4gICAgICAgICAgICBrYXRlZ29yaTogXCJEYW5hIERhcnVyYXQgUHJva2VyXCIsXHJcbiAgICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgICAgICBrZXRlcmFuZ2FuOiBgU3Vic2lkaSB1bnR1ayBQcm9rZXIgSUQ6ICR7cHJva2VySWQgfHwgJ0JhcnUnfWAsXHJcbiAgICAgICAgICAgIGJ1a3VLYXNJZDogZnJvbUJ1a3VJZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQi4gVXBkYXRlIGF0YXUgQnVhdCBEYXRhIFByb2tlci9LZWdpYXRhblxyXG4gICAgICBpZiAocHJva2VySWQpIHtcclxuICAgICAgICBhd2FpdCB0eC5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGlkOiBwcm9rZXJJZCB9LFxyXG4gICAgICAgICAgZGF0YTogeyBhbmdnYXJhbjogeyBpbmNyZW1lbnQ6IGJ1ZGdldCB9LCBzdGF0dXM6IFwiSU5fUFJPR1JFU1NcIiB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQnVhdCBlbnRpdGFzIGFuZ2dhcmFuIGJhcnUgKFN0YW5kYWxvbmUgRXZlbnQpXHJcbiAgICAgICAgYXdhaXQgdHgucHJvZ3JhbUtlcmphLmNyZWF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWE6IG5hbWFFdmVudCxcclxuICAgICAgICAgICAgYW5nZ2FyYW46IGJ1ZGdldCxcclxuICAgICAgICAgICAgYW5nZ2FyYW5UZXJwYWthaTogMCxcclxuICAgICAgICAgICAgc3RhdHVzOiBcIklOX1BST0dSRVNTXCIsIFxyXG4gICAgICAgICAgICBkaXZpc2k6IFwiS2VnaWF0YW4gVW11bVwiLCAvLyBEZWZhdWx0IGRpdmlzaSB1bnR1ayBldmVudCBub24tcHJva2VyXHJcbiAgICAgICAgICAgIGRlYWRsaW5lOiBuZXcgRGF0ZShkYXRlU3RyKSwgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogaXNTdWJzaWRpID8gXCJTdWJzaWRpIGRhbmEgYmVyaGFzaWwhIPCfm6HvuI9cIiA6IFwiQW5nZ2FyYW4gU2Vrb2xhaCBkaWNhdGF0ISDwn4+rXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNSRUFURSBFVkVOVCBCVURHRVQgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbXByb3NlcyBhbmdnYXJhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gNC4gQ2F0YXQgVHJhbnNha3NpIFBlbmdlbHVhcmFuIEV2ZW50IChGaXhlZDogTWF0Y2ggZnJvbnRlbmQga2V5ICsgRGV0YWlsIEJhcmFuZylcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50VHJ4KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IHByb2tlcklkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInByb2tlcklkXCIpKTtcclxuICBjb25zdCBqdWR1bCA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBub21pbmFsID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImFtb3VudFwiKSk7XHJcbiAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGZvdG9CYXJhbmcgPSBmb3JtRGF0YS5nZXQoXCJmb3RvQmFyYW5nXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBmb3RvTm90YSA9IGZvcm1EYXRhLmdldChcImZvdG9Ob3RhXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrdWFudGl0YXMgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwia3VhbnRpdGFzXCIpKSB8fCAxO1xyXG4gIGNvbnN0IHNhdHVhbiA9IGZvcm1EYXRhLmdldChcInNhdHVhblwiKSBhcyBzdHJpbmcgfHwgXCJwY3NcIjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIC8vIDEuIEFtYmlsIGRhdGEgUHJva2VyIChDZWsgc2lzYSBhbmdnYXJhbilcclxuICAgICAgY29uc3QgcHJva2VyID0gYXdhaXQgdHgucHJvZ3JhbUtlcmphLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogcHJva2VySWQgfSB9KTtcclxuICAgICAgaWYgKCFwcm9rZXIpIHRocm93IG5ldyBFcnJvcihcIlByb2tlciB0aWRhayBkaXRlbXVrYW4uXCIpO1xyXG5cclxuICAgICAgY29uc3Qgc2lzYUFuZ2dhcmFuID0gcHJva2VyLmFuZ2dhcmFuIC0gcHJva2VyLmFuZ2dhcmFuVGVycGFrYWk7XHJcbiAgICAgIGlmIChub21pbmFsID4gc2lzYUFuZ2dhcmFuKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbmdnYXJhbiB0aWRhayBjdWt1cCEgU2lzYTogUnAgJHtzaXNhQW5nZ2FyYW4udG9Mb2NhbGVTdHJpbmcoJ2lkLUlEJyl9LmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAyLiBDYXRhdCBUcmFuc2Frc2kgdGFucGEgYnVrdUthc0lkIChNdXJuaSBSZWFsaXNhc2kgUHJva2VyKVxyXG4gICAgICBhd2FpdCB0eC5rZXVhbmdhbi5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGp1ZHVsLFxyXG4gICAgICAgICAgbm9taW5hbCxcclxuICAgICAgICAgIHRpcGU6IFwiUEVOR0VMVUFSQU5cIixcclxuICAgICAgICAgIGthdGVnb3JpOiBcIlJlYWxpc2FzaSBQcm9rZXJcIixcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKGRhdGVTdHIpLFxyXG4gICAgICAgICAgcHJva2VySWQ6IHByb2tlcklkLFxyXG4gICAgICAgICAgYnVrdUthc0lkOiBudWxsLFxyXG4gICAgICAgICAgZm90b0JhcmFuZyxcclxuICAgICAgICAgIGZvdG9Ob3RhLFxyXG4gICAgICAgICAga3VhbnRpdGFzLFxyXG4gICAgICAgICAgc2F0dWFuXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAzLiBVcGRhdGUgcmVhbGlzYXNpIHBlbWFrYWlhbiBkYW5hIGRpIFByb2tlclxyXG4gICAgICByZXR1cm4gYXdhaXQgdHgucHJvZ3JhbUtlcmphLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHByb2tlcklkIH0sXHJcbiAgICAgICAgZGF0YTogeyBhbmdnYXJhblRlcnBha2FpOiB7IGluY3JlbWVudDogbm9taW5hbCB9IH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9rZXVhbmdhblwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUGVuZ2VsdWFyYW4gYmVyaGFzaWwgZGljYXRhdCFcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiR2FnYWwgbWVuY2F0YXQgcGVuZ2VsdWFyYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDUuIFNlbGVzYWlrYW4gQW5nZ2FyYW4gRXZlbnQgJiBLZW1iYWxpa2FuIFNpc2EgKENsb3Npbmcgd2l0aCBSZWZ1bmQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbG9zZUV2ZW50QnVkZ2V0KHByb2tlcklkOiBudW1iZXIsIHRhcmdldEJ1a3VJZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2tlciA9IGF3YWl0IHR4LnByb2dyYW1LZXJqYS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHByb2tlcklkIH0gfSk7XHJcbiAgICAgIGlmICghcHJva2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9rZXIgdGlkYWsgZGl0ZW11a2FuLlwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHNpc2EgPSBwcm9rZXIuYW5nZ2FyYW4gLSBwcm9rZXIuYW5nZ2FyYW5UZXJwYWthaTtcclxuXHJcbiAgICAgIC8vIEppa2EgYWRhIHNpc2EsIGJ1YXQgUEVNQVNVS0FOIGtlIGRvbXBldCB0dWp1YW5cclxuICAgICAgaWYgKHNpc2EgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgua2V1YW5nYW4uY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAganVkdWw6IGBQZW5nZW1iYWxpYW4gU2lzYTogJHtwcm9rZXIubmFtYX1gLFxyXG4gICAgICAgICAgICBub21pbmFsOiBzaXNhLFxyXG4gICAgICAgICAgICB0aXBlOiBcIlBFTUFTVUtBTlwiLFxyXG4gICAgICAgICAgICBrYXRlZ29yaTogXCJTaXNhIEFuZ2dhcmFuIFByb2tlclwiLFxyXG4gICAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBidWt1S2FzSWQ6IHRhcmdldEJ1a3VJZCxcclxuICAgICAgICAgICAga2V0ZXJhbmdhbjogYFNpc2EgZGFuYSBkYXJpIGtlZ2lhdGFuICR7cHJva2VyLm5hbWF9IGRpa2VtYmFsaWthbi5gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFR1dHVwIFByb2tlclxyXG4gICAgICBhd2FpdCB0eC5wcm9ncmFtS2VyamEudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogcHJva2VySWQgfSxcclxuICAgICAgICBkYXRhOiB7IHN0YXR1czogXCJET05FXCIgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2tldWFuZ2FuXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJBbmdnYXJhbiBkaXR1dHVwICYgc2lzYSBkYW5hIGRpa2VtYmFsaWthbiEg4pyFXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDkuIE1BTkFKRU1FTiBJTlZFTlRBUklTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gMS4gVGFtYmFoL0VkaXQgQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSW52ZW50YXJpcyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBpZFJhdyA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBrb2RlID0gZm9ybURhdGEuZ2V0KFwiY29kZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgaGFyZ2EgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikpO1xyXG4gIGNvbnN0IGZvdG9VcmwgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qgc2VyaWFsID0gZm9ybURhdGEuZ2V0KFwic2VyaWFsXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpZFJhdykge1xyXG4gICAgICAvLyBFZGl0XHJcbiAgICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihpZFJhdykgfSxcclxuICAgICAgICBkYXRhOiB7IG5hbWEsIGtvZGUsIGthdGVnb3JpLCBoYXJnYSwgc2VyaWFsTnVtOiBzZXJpYWwsIC4uLihmb3RvVXJsICYmIHsgZm90b1VybCB9KSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ3JlYXRlXHJcbiAgICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogeyBcclxuICAgICAgICAgICBuYW1hLCBrb2RlLCBrYXRlZ29yaSwgaGFyZ2EsIHNlcmlhbE51bTogc2VyaWFsLCBmb3RvVXJsLCBcclxuICAgICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCIsIGtvbmRpc2k6IFwiQmFpa1wiIFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEYXRhIGFzZXQgdGVyc2ltcGFuISDwn5OmXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVueWltcGFuIGFzZXQuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDIuIEhhcHVzIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW52ZW50YXJpcyhpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9pbnZlbnRhcmlzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gMy4gUGluamFtIEJhcmFuZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGluamFtQmFyYW5nKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBwZW1pbmphbSA9IGZvcm1EYXRhLmdldChcImJvcnJvd2VyXCIpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzdGF0dXM6IFwiQk9SUk9XRURcIixcclxuICAgICAgICBwZW1pbmphbTogcGVtaW5qYW0sXHJcbiAgICAgICAgdGdsUGluamFtOiBuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiQmFyYW5nIGJlcmhhc2lsIGRpcGluamFtISDwn5WSXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcHJvc2VzIHBlbWluamFtYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDQuIEtlbWJhbGlrYW4gQmFyYW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBrZW1iYWxpa2FuQmFyYW5nKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICBjb25zdCBrb25kaXNpID0gZm9ybURhdGEuZ2V0KFwiY29uZGl0aW9uXCIpIGFzIHN0cmluZztcclxuICBcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgLy8gQW1iaWwgZGF0YSBiYXJhbmcgZHVsdSBidWF0IHRhdSBzaWFwYSBwZW1pbmphbSB0ZXJha2hpclxyXG4gICAgICBjb25zdCBiYXJhbmcgPSBhd2FpdCB0eC5pbnZlbnRhcmlzLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgICBpZiAoIWJhcmFuZyB8fCAhYmFyYW5nLnBlbWluamFtKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YSBiYXJhbmcgdGlkYWsgdmFsaWQgYXRhdSB0aWRhayBzZWRhbmcgZGlwaW5qYW0uXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBLiBTaW1wYW4ga2UgUml3YXlhdFxyXG4gICAgICBhd2FpdCB0eC5yaXdheWF0QXNldC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGludmVudGFyaXNJZDogaWQsXHJcbiAgICAgICAgICBwZW1pbmphbTogYmFyYW5nLnBlbWluamFtLFxyXG4gICAgICAgICAgdGdsS2VsdWFyOiBiYXJhbmcudGdsUGluamFtIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICB0Z2xLZW1iYWxpOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAga29uZGlzaUtlbWJhbGk6IGtvbmRpc2lcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQi4gUmVzZXQgU3RhdHVzIEJhcmFuZ1xyXG4gICAgICBhd2FpdCB0eC5pbnZlbnRhcmlzLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGF0dXM6IGtvbmRpc2kgPT09IFwiUnVzYWtcIiA/IFwiTUFJTlRFTkFOQ0VcIiA6IFwiQVZBSUxBQkxFXCIsXHJcbiAgICAgICAgICBrb25kaXNpOiBrb25kaXNpLFxyXG4gICAgICAgICAgcGVtaW5qYW06IG51bGwsXHJcbiAgICAgICAgICB0Z2xQaW5qYW06IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJCYXJhbmcgc3VkYWggZGlrZW1iYWxpa2FuISDinIVcIiB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vaW52ZW50YXJpc1wiKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlJFVFVSTiBJVEVNIEVSUk9SOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkdhZ2FsIG1lbXByb3NlcyBwZW5nZW1iYWxpYW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAxMS4gU1RBVElTVElLIFBFTkdVTkpVTkcgKFZJU0lUT1IgVFJBQ0tJTkcpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrVmlzaXRvcihpcDogc3RyaW5nLCB1c2VyQWdlbnQ6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XHJcbiAgLy8gMS4gQWJhaWthbiBydXRlIGludGVybmFsL2FkbWluXHJcbiAgaWYgKHBhdGguc3RhcnRzV2l0aCgnL2FkbWluJykgfHwgcGF0aC5zdGFydHNXaXRoKCcvYXBpJykgfHwgcGF0aC5pbmNsdWRlcygnX25leHQnKSB8fCBwYXRoLmluY2x1ZGVzKCdmYXZpY29uJykpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIDIuIEZpbHRlciBCb3QgRGFzYXIgKE1lbmNlZ2FoIGp1dGFhbiBoaXQgZGFyaSBjcmF3bGVyKVxyXG4gIGNvbnN0IGJvdEtleXdvcmRzID0gWydib3QnLCAnY3Jhd2xlcicsICdzcGlkZXInLCAnZ29vZ2xlYm90JywgJ2Jpbmdib3QnLCAneWFuZGV4Ym90JywgJ3NsdXJwJywgJ2JhaWR1c3BpZGVyJ107XHJcbiAgY29uc3QgdWFMb3dlciA9IHVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gIGlmIChib3RLZXl3b3Jkcy5zb21lKGtleXdvcmQgPT4gdWFMb3dlci5pbmNsdWRlcyhrZXl3b3JkKSkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFNhZmV0eSBjaGVjazogUGFzdGlrYW4gbW9kZWwgdmlzaXRvciBhZGFcclxuICBpZiAoIShwcmlzbWEgYXMgYW55KS52aXNpdG9yKSByZXR1cm47XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyAzLiBHdW5ha2FuIHJlbnRhbmcgd2FrdHUgdW50dWsgcGVuZ2VjZWthbiBcInVuaXF1ZSB2aXNpdFwiXHJcbiAgICAvLyBLaXRhIGFuZ2dhcCBzYXR1IG9yYW5nIGFkYWxhaCBzYXR1IGt1bmp1bmdhbiBwZXIgMSBqYW0gcGVyIGhhbGFtYW5cclxuICAgIGNvbnN0IG9uZUhvdXJBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgXHJcbiAgICAvLyBDZWsgYXBha2FoIHN1ZGFoIGFkYSBrdW5qdW5nYW4gc2VydXBhIChndW5ha2FuIHNlbGVjdCBpZCBzYWphIGFnYXIgcmluZ2FuKVxyXG4gICAgY29uc3QgcmVjZW50VmlzaXQgPSBhd2FpdCAocHJpc21hIGFzIGFueSkudmlzaXRvci5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlwLFxyXG4gICAgICAgIHBhdGgsXHJcbiAgICAgICAgY3JlYXRlZEF0OiB7IGd0ZTogb25lSG91ckFnbyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlY2VudFZpc2l0KSB7XHJcbiAgICAgIGF3YWl0IChwcmlzbWEgYXMgYW55KS52aXNpdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogeyBpcCwgdXNlckFnZW50OiB1c2VyQWdlbnQuc3Vic3RyaW5nKDAsIDI1NSksIHBhdGggfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gR3VuYWthbiBsb2dnaW5nIHlhbmcgdGlkYWsgbWVuZ2hlbnRpa2FuIHByb3NlcyB1dGFtYVxyXG4gICAgY29uc29sZS5lcnJvcihcIlRSQUNLIFZJU0lUT1IgRVJST1I6XCIsIGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAxMC4gTUFOQUpFTUVOIEdBTEVSSSBLRUdJQVRBTlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlR2FsZXJpKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGlkUmF3ID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcbiAgY29uc3QganVkdWwgPSBmb3JtRGF0YS5nZXQoXCJqdWR1bFwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3Qga2F0ZWdvcmkgPSBmb3JtRGF0YS5nZXQoXCJrYXRlZ29yaVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGFuZ2dhbCA9IGZvcm1EYXRhLmdldChcInRhbmdnYWxcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRlc2tyaXBzaSA9IGZvcm1EYXRhLmdldChcImRlc2tyaXBzaVwiKSBhcyBzdHJpbmc7XHJcbiAgXHJcbiAgLy8gQW1iaWwgSlNPTiBzdHJpbmcgZGFyaSBmb3JtIGNsaWVudFxyXG4gIGNvbnN0IGltYWdlc0pzb24gPSBmb3JtRGF0YS5nZXQoXCJpbWFnZXNcIikgYXMgc3RyaW5nOyBcclxuXHJcbiAgaWYgKCFqdWR1bCB8fCAhaW1hZ2VzSnNvbikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSnVkdWwgZGFuIG1pbmltYWwgMSBGb3RvIHdhamliIGRpaXNpIVwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKGlkUmF3KSB7XHJcbiAgICAgIC8vIE1PREUgRURJVFxyXG4gICAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihpZFJhdykgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBqdWR1bCwga2F0ZWdvcmksIGRlc2tyaXBzaSxcclxuICAgICAgICAgIHRhbmdnYWw6IG5ldyBEYXRlKHRhbmdnYWwpLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXNKc29uIC8vIFNpbXBhbiBzZWJhZ2FpIEpTT04gU3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE1PREUgQkFSVVxyXG4gICAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAganVkdWwsIGthdGVnb3JpLCBkZXNrcmlwc2ksXHJcbiAgICAgICAgICB0YW5nZ2FsOiBuZXcgRGF0ZSh0YW5nZ2FsKSxcclxuICAgICAgICAgIGltYWdlczogaW1hZ2VzSnNvblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTsgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkdhbGVyaSBiZXJoYXNpbCBkaXNpbXBhbiEg8J+TuFwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJHQUxFUkkgRVJST1I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbnlpbXBhbiBnYWxlcmkuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxlcmkoaWQ6IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuZ2FsZXJpLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9nYWxlcmlcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgMTIuIE1BTkFKRU1FTiBESVZJU0kgKERpbmFtaXMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURpdmlzaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgZGVza3JpcHNpID0gZm9ybURhdGEuZ2V0KFwiZGVza3JpcHNpXCIpIGFzIHN0cmluZztcclxuXHJcbiAgaWYgKCFuYW1hKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hIGRpdmlzaSB3YWppYiBkaWlzaSFcIiB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmRpdmlzaS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IG5hbWEsIGRlc2tyaXBzaSB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJva2VyXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgYmVyaGFzaWwgZGl0YW1iYWhrYW4hIPCfj6JcIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hIGRpdmlzaSBzdWRhaCBhZGEgYXRhdSB0ZXJqYWRpIGVycm9yLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGl2aXNpKGlkOiBudW1iZXIsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICBjb25zdCBkZXNrcmlwc2kgPSBmb3JtRGF0YS5nZXQoXCJkZXNrcmlwc2lcIikgYXMgc3RyaW5nO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmRpdmlzaS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IG5hbWEsIGRlc2tyaXBzaSB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJva2VyXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJEaXZpc2kgYmVyaGFzaWwgZGlwZXJiYXJ1aSEg4pyoXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcGVyYmFydWkgZGl2aXNpLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGl2aXNpKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmRpdmlzaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9rZXJcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkRpdmlzaSBiZXJoYXNpbCBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdoYXB1cyBkaXZpc2kuIE11bmdraW4gbWFzaWggYWRhIGFuZ2dvdGEgZGkgZGFsYW1ueWEuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAxMy4gTUFOQUpFTUVOIEpBQkFUQU4gKFJlbGFzaSBEaXZpc2kpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUphYmF0YW4oZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgbmFtYSA9IGZvcm1EYXRhLmdldChcIm5hbWFcIikgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGRpdmlzaUlkID0gTnVtYmVyKGZvcm1EYXRhLmdldChcImRpdmlzaUlkXCIpKTtcclxuXHJcbiAgaWYgKCFuYW1hIHx8ICFkaXZpc2lJZCkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiTmFtYSBkYW4gRGl2aXNpIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuamFiYXRhbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IG5hbWEsIGRpdmlzaUlkIH1cclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcGVuZ3VydXNcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkphYmF0YW4gYmVyaGFzaWwgZGl0YW1iYWhrYW4hIPCfjpbvuI9cIiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJKYWJhdGFuIHN1ZGFoIGFkYSBkaSBkaXZpc2kgaW5pLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSmFiYXRhbihpZDogbnVtYmVyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuamFiYXRhbi51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IG5hbWEgfVxyXG4gICAgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wZW5ndXJ1c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiSmFiYXRhbiBkaXBlcmJhcnVpIVwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbXBlcmJhcnVpIGphYmF0YW4uXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVKYWJhdGFuKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmphYmF0YW4uZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Blbmd1cnVzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJHYWdhbCBtZW5naGFwdXMgamFiYXRhbi5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIDE0LiBNQU5BSkVNRU4gS0FURUdPUkkgR0FMRVJJIChEaW5hbWlzKVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVLYXRlZ29yaUdhbGVyaShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBuYW1hID0gZm9ybURhdGEuZ2V0KFwibmFtYVwiKSBhcyBzdHJpbmc7XHJcbiAgaWYgKCFuYW1hKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJOYW1hIGthdGVnb3JpIHdhamliIGRpaXNpIVwiIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua2F0ZWdvcmlHYWxlcmkuY3JlYXRlKHsgZGF0YTogeyBuYW1hIH0gfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9nYWxlcmlcIik7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9nYWxlcmlcIik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkthdGVnb3JpIGJlcmhhc2lsIGRpdGFtYmFoa2FuISDwn5OBXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiS2F0ZWdvcmkgc3VkYWggYWRhIGF0YXUgdGVyamFkaSBlcnJvci5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUthdGVnb3JpR2FsZXJpKGlkOiBudW1iZXIsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWEgPSBmb3JtRGF0YS5nZXQoXCJuYW1hXCIpIGFzIHN0cmluZztcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmthdGVnb3JpR2FsZXJpLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGE6IHsgbmFtYSB9XHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2dhbGVyaVwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2dhbGVyaVwiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiS2F0ZWdvcmkgYmVyaGFzaWwgZGlwZXJiYXJ1aSEg4pyoXCIgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiR2FnYWwgbWVtcGVyYmFydWkga2F0ZWdvcmkuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYXRlZ29yaUdhbGVyaShpZDogbnVtYmVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS5rYXRlZ29yaUdhbGVyaS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZ2FsZXJpXCIpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZ2FsZXJpXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJLYXRlZ29yaSBiZXJoYXNpbCBkaWhhcHVzLlwiIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkdhZ2FsIG1lbmdoYXB1cyBrYXRlZ29yaS5cIiB9O1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVJBNERzQiwyTEFBQSJ9
}),
"[project]/components/AspirasiSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AspirasiSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$b2c245__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:b2c245 [app-client] (ecmascript) <text/javascript>"); // Import Server Action tadi
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AspirasiSection() {
    _s();
    const [isAnonymous, setIsAnonymous] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Status loading
    // Handle saat form dikirim
    async function handleSubmit(event) {
        event.preventDefault(); // Cegah refresh halaman
        setIsLoading(true);
        const form = event.currentTarget;
        const formData = new FormData(form);
        // Tambahkan status anonim ke data yang dikirim
        formData.append("isAnonim", isAnonymous.toString());
        try {
            // Panggil Server Action
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$b2c245__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitAspirasi"])(formData);
            if (result.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Aspirasi terkirim! Terima kasih atas masukannya.", "success");
                form.reset(); // Kosongkan form
                setIsAnonymous(false); // Reset toggle anonim
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(result.message, "error");
            }
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Terjadi kesalahan sistem.", "error");
        } finally{
            setIsLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-24 z-10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#020617] dark:to-[#0b1121] z-0"
            }, void 0, false, {
                fileName: "[project]/components/AspirasiSection.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 w-96 h-96 bg-blue-500/10 dark:bg-slate-500/10 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/AspirasiSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 bottom-0 w-96 h-96 bg-indigo-500/10 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/AspirasiSection.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 md:px-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full lg:w-1/2 space-y-6 text-center lg:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-4 py-2 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest",
                                    children: "Suara Anda Berharga 📢"
                                }, void 0, false, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight",
                                    children: [
                                        "Punya Ide atau ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 60,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500",
                                            children: "Masukan Membangun?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 dark:text-slate-400 text-lg font-bold",
                                    children: "Jangan ragu untuk menyampaikan aspirasi, kritik, atau saran untuk kemajuan OSIS & SMK Nurul Islam. Identitasmu aman bersama kami."
                                }, void 0, false, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 pt-4",
                                    children: [
                                        'Privasi Terjaga',
                                        'Langsung Didengar Pengurus',
                                        'Bebas & Bertanggung Jawab'
                                    ].map((text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 justify-center lg:justify-start text-slate-700 dark:text-slate-300 font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xs",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this),
                                                text
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AspirasiSection.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full lg:w-1/2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-5 relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between bg-slate-50 dark:bg-black/40 p-3 rounded-xl border border-slate-100 dark:border-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-slate-700 dark:text-slate-300 pl-2",
                                                    children: "Kirim sebagai Anonim? 🕵️‍♂️"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsAnonymous(!isAnonymous),
                                                    className: `relative w-12 h-6 rounded-full transition-colors duration-300 ${isAnonymous ? 'bg-blue-600 dark:bg-slate-500' : 'bg-slate-300 dark:bg-slate-700'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${isAnonymous ? 'translate-x-6' : 'translate-x-0'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AspirasiSection.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `grid grid-cols-2 gap-4 transition-all duration-500 ${isAnonymous ? 'opacity-40 grayscale pointer-events-none select-none blur-[1px]' : 'opacity-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 dark:text-slate-400 ml-1",
                                                            children: "Nama Lengkap"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AspirasiSection.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "nama",
                                                            type: "text",
                                                            placeholder: "Nama Kamu",
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:border-transparent outline-none text-sm font-medium transition-all",
                                                            disabled: isAnonymous,
                                                            required: !isAnonymous
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AspirasiSection.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-500 dark:text-slate-400 ml-1",
                                                            children: "Kelas / Jurusan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AspirasiSection.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "kelas",
                                                            type: "text",
                                                            placeholder: "X PPLG 1",
                                                            className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:border-transparent outline-none text-sm font-medium transition-all",
                                                            disabled: isAnonymous,
                                                            required: !isAnonymous
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AspirasiSection.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-slate-500 dark:text-slate-400 ml-1",
                                                    children: "Pesan Aspirasi"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "pesan",
                                                    rows: 4,
                                                    placeholder: "Tulis kritik, saran, atau ide kreatifmu di sini...",
                                                    className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-400 focus:border-transparent outline-none text-sm font-medium resize-none transition-all",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AspirasiSection.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isLoading,
                                            className: "w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-slate-100 dark:text-black dark:hover:bg-white text-white font-bold text-sm shadow-lg shadow-blue-500/30 dark:shadow-slate-500/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed",
                                            children: isLoading ? "MENGIRIM... ⏳" : "KIRIM ASPIRASI 🚀"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-[10px] text-slate-400",
                                            children: "*Pesan yang mengandung SARA atau ujaran kebencian tidak akan diproses."
                                        }, void 0, false, {
                                            fileName: "[project]/components/AspirasiSection.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AspirasiSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AspirasiSection.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AspirasiSection.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AspirasiSection.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AspirasiSection.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AspirasiSection.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(AspirasiSection, "JEQHvLfXYLHw9vJWcSTf1qSJ48A=");
_c = AspirasiSection;
var _c;
__turbopack_context__.k.register(_c, "AspirasiSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative w-full bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-500 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-[50%] -left-[20%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 md:px-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-bold",
                                        children: "Wadah aspirasi dan kreasi siswa SMK Nurul Islam Cianjur. Membangun karakter kepemimpinan yang berakhlak mulia dan berdaya saing global."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://instagram.com/osis_smknuris",
                                                target: "_blank",
                                                className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white dark:hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://youtube.com/@smknuris",
                                                target: "_blank",
                                                className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-600 hover:text-white dark:hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://tiktok.com/@smknuris",
                                                target: "_blank",
                                                className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest",
                                        children: "Menu Utama"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest",
                                        children: "Jurusan"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest",
                                        children: "Hubungi Kami"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 text-sm text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "📍"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "📧"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "📞"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-500 text-center md:text-left",
                                children: [
                                    "© ",
                                    currentYear,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 dark:text-slate-600 flex items-center gap-1",
                                children: [
                                    "Made with ❤️ by ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_33f93f1c._.js.map