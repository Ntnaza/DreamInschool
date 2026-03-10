(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/galeri/GaleriPublicClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GaleriPublicClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
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
function GaleriPublicClient({ galleryItems }) {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Semua");
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const categories = [
        "Semua",
        ...Array.from(new Set(galleryItems.map((item)=>item.category)))
    ];
    const filteredImages = activeFilter === "Semua" ? galleryItems : galleryItems.filter((item)=>item.category === activeFilter);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GaleriPublicClient.useEffect": ()=>{
            setMounted(true);
        }
    }["GaleriPublicClient.useEffect"], []);
    const openModal = (item)=>{
        setSelectedItem(item);
        setCurrentImageIndex(0);
        document.body.style.overflow = "hidden";
    };
    const closeModal = ()=>{
        setSelectedItem(null);
        document.body.style.overflow = "auto";
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GaleriPublicClient.useEffect": ()=>{
            const handleKeyDown = {
                "GaleriPublicClient.useEffect.handleKeyDown": (e)=>{
                    if (!selectedItem) return;
                    if (e.key === "Escape") closeModal();
                    if (e.key === "ArrowRight") setCurrentImageIndex({
                        "GaleriPublicClient.useEffect.handleKeyDown": (prev)=>(prev + 1) % selectedItem.album.length
                    }["GaleriPublicClient.useEffect.handleKeyDown"]);
                    if (e.key === "ArrowLeft") setCurrentImageIndex({
                        "GaleriPublicClient.useEffect.handleKeyDown": (prev)=>(prev - 1 + selectedItem.album.length) % selectedItem.album.length
                    }["GaleriPublicClient.useEffect.handleKeyDown"]);
                }
            }["GaleriPublicClient.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "GaleriPublicClient.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["GaleriPublicClient.useEffect"];
        }
    }["GaleriPublicClient.useEffect"], [
        selectedItem
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pt-24 pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.10] pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 md:px-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-4 py-2 rounded-full bg-blue-100 dark:bg-white/10 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-200 dark:border-white/10",
                                children: "Arsip Visual 📸"
                            }, void 0, false, {
                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-black text-blue-700 mt-4 mb-4 pb-2 leading-tight dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-300 dark:to-slate-500",
                                children: "Galeri Kegiatan"
                            }, void 0, false, {
                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 dark:text-slate-400 text-lg",
                                children: "Rekaman jejak langkah, tawa, dan kerja keras kami dalam membangun cerita di SMK Nurul Islam."
                            }, void 0, false, {
                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-3 mb-12",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFilter(cat),
                                className: `px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 ${activeFilter === cat ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"}`,
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        className: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: filteredImages.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layout: true,
                                    initial: {
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.5
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    onClick: ()=>openModal(item),
                                    className: "break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl dark:shadow-none transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.album[0],
                                                alt: item.title,
                                                width: 500,
                                                height: 500,
                                                className: "w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            }, void 0, false, {
                                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded mb-2 w-fit",
                                                        children: item.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg leading-tight",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white/70 text-xs flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                        lineNumber: 116,
                                                                        columnNumber: 84
                                                                    }, this),
                                                                    " ",
                                                                    item.date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 23
                                                            }, this),
                                                            item.album.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white/90 text-[10px] font-bold uppercase tracking-wider border border-white/30 px-2 py-0.5 rounded-full backdrop-blur-sm flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                        size: 10
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " +",
                                                                    item.album.length
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                }, item.id, false, {
                                    fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                        lineNumber: 96,
                        columnNumber: 9
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
                            // 🔥 FIX 1: Transisi super cepat & linear biar blur terasa instan
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
                                    fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                    lineNumber: 142,
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
                                    // Transisi container sedikit lebih lambat dari backdrop biar smooth
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut"
                                    },
                                    className: "relative w-full max-w-6xl h-[85vh] flex flex-col md:flex-row bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden shadow-2xl z-10 mx-4 ring-1 ring-black/5 dark:ring-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full md:w-3/4 h-[50%] md:h-full bg-white dark:bg-[#1e293b] flex items-center justify-center group overflow-hidden border-r border-slate-100 dark:border-slate-700/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 20
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
                                                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 22
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 20
                                                }, this),
                                                selectedItem.album.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: prevImage,
                                                            className: "absolute left-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all group-hover:opacity-100 opacity-0 md:opacity-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {}, void 0, false, {
                                                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 256
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: nextImage,
                                                            className: "absolute right-4 z-20 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow-sm hover:scale-110 transition-all group-hover:opacity-100 opacity-0 md:opacity-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                                                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 257
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white text-xs font-bold shadow-sm tracking-widest",
                                                            children: [
                                                                currentImageIndex + 1,
                                                                " / ",
                                                                selectedItem.album.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                            lineNumber: 159,
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
                                                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 overflow-y-auto mt-4 custom-scrollbar pr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-4",
                                                            children: selectedItem.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight",
                                                            children: selectedItem.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-100 dark:border-slate-700/50 pb-6",
                                                            children: [
                                                                "📅 ",
                                                                selectedItem.date
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-700 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-line",
                                                            children: selectedItem.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 23
                                                        }, this),
                                                        selectedItem.album.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3",
                                                                    children: "Album Preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-3 gap-2",
                                                                    children: selectedItem.album.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setCurrentImageIndex(idx),
                                                                            className: `relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-blue-600 opacity-100 ring-2 ring-blue-500/20' : 'border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: img,
                                                                                alt: "thumb",
                                                                                fill: true,
                                                                                className: "object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                                lineNumber: 217,
                                                                                columnNumber: 34
                                                                            }, this)
                                                                        }, idx, false, {
                                                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                            lineNumber: 212,
                                                                            columnNumber: 32
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this), document.body)
                ]
            }, void 0, true, {
                fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/galeri/GaleriPublicClient.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(GaleriPublicClient, "8qS62ZSXyGWpz0rJBeps46sEJgU=");
_c = GaleriPublicClient;
var _c;
__turbopack_context__.k.register(_c, "GaleriPublicClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_galeri_GaleriPublicClient_tsx_280b249d._.js.map