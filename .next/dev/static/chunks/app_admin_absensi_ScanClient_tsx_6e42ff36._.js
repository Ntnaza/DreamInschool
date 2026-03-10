(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/absensi/ScanClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScanClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/atom.js [app-client] (ecmascript) <export default as Atom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/library.js [app-client] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$40a8dd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:40a8dd [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$9c6f25__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:9c6f25 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$7fbf92__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:7fbf92 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$884b29__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:884b29 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$3818a2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:3818a2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$38f993__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:38f993 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$ba83e4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:ba83e4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$abd51e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:abd51e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$1dbae0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:1dbae0 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$72f34d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:72f34d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$be77f7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:be77f7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$4fb804__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:4fb804 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$352c6b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:352c6b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/html5-qrcode.js [app-client] (ecmascript)");
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
const DAYS_LIST = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu"
];
const absensiTourSteps = [
    {
        target: '.tour-acara-header',
        content: 'Kelola sesi absensi aktif Anda di sini.',
        disableBeacon: true
    },
    {
        target: '.tour-session-controls',
        content: 'Klik START untuk mulai menerima absensi.'
    },
    {
        target: '.tour-scanner-btn',
        content: 'Klik di sini untuk meluncurkan mode kamera scanner.'
    }
];
const FloatingIcon = ({ children, delay = 0, x = 0, y = 0, size = 24, duration = 10 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.5
        },
        animate: {
            opacity: [
                0.7,
                1,
                0.7
            ],
            y: [
                y,
                y - 60,
                y
            ],
            x: [
                x,
                x + 20,
                x
            ],
            rotate: [
                0,
                360
            ],
            scale: [
                1,
                1.2,
                1
            ]
        },
        transition: {
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        },
        style: {
            left: `${x}%`,
            top: `${y}%`,
            position: 'absolute'
        },
        className: "text-blue-600/40 dark:text-blue-400/30 pointer-events-none drop-shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
            size
        })
    }, void 0, false, {
        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = FloatingIcon;
function ScanClient() {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('manage');
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    // DATA STATES
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [daftarAcara, setDaftarAcara] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pengurusList, setPengurusList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAcaraId, setSelectedAcaraId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scanResult, setScanResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // UI STATES
    const [isLoadingLogs, setIsLoadingLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isManualModalOpen, setIsManualModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalMode, setModalMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('create');
    const [soundEnabled, setSoundEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newAcara, setNewAcara] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nama: "",
        tanggal: new Date().toISOString().split('T')[0],
        lokasi: "Sekolah",
        waktuMulai: "07:00",
        waktuSelesai: "15:00",
        tipe: "SEKALI_PAKAI",
        hari: "",
        autoStart: false
    });
    const [manualInput, setManualInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        pengurusId: "",
        status: "HADIR"
    });
    const scannerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTransitioning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScanClient.useCallback[loadData]": async (autoSelectLatest = false)=>{
            setIsLoadingLogs(true);
            try {
                // Cek Auto Start & Auto Stop setiap kali data dimuat/di-refresh
                await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$4fb804__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["checkAndAutoStartAcara"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$352c6b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["checkAndAutoStopAcara"])()
                ]);
                const [list, pengurus] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$7fbf92__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDaftarAcara"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$be77f7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDaftarPengurus"])()
                ]);
                setDaftarAcara(list);
                setPengurusList(pengurus);
                if (list.length > 0) {
                    let targetId = selectedAcaraId;
                    if (autoSelectLatest || !selectedAcaraId) {
                        targetId = list[0].id;
                        setSelectedAcaraId(targetId);
                    }
                    if (targetId) {
                        const dbLogs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$884b29__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLogsByAcara"])(targetId, 'acara');
                        setLogs(dbLogs.map({
                            "ScanClient.useCallback[loadData]": (item)=>({
                                    dbId: item.id,
                                    name: item.pengurus.nama,
                                    role: item.pengurus.jabatan,
                                    image: item.pengurus.fotoUrl,
                                    time: new Date(item.tanggal).toLocaleTimeString('id-ID', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }),
                                    status: item.status,
                                    scanId: item.id
                                })
                        }["ScanClient.useCallback[loadData]"]));
                    }
                }
            } catch (err) {} finally{
                setIsLoadingLogs(false);
            }
        }
    }["ScanClient.useCallback[loadData]"], [
        selectedAcaraId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanClient.useEffect": ()=>{
            setIsClient(true);
            loadData();
            // Update Jam Real-time setiap detik
            const timeInterval = setInterval({
                "ScanClient.useEffect.timeInterval": ()=>setCurrentTime(new Date())
            }["ScanClient.useEffect.timeInterval"], 1000);
            // Setup interval untuk Auto-Start & Auto-Stop (Cek setiap 30 detik)
            const autoSyncInterval = setInterval({
                "ScanClient.useEffect.autoSyncInterval": async ()=>{
                    // loadData sudah memanggil checkAndAutoStart dan checkAndAutoStop
                    await loadData();
                    // Cek jika sesi yang sedang dibuka scanner-nya sudah selesai
                    if (viewMode === 'scanning' && selectedAcaraId) {
                        const currentList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$7fbf92__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDaftarAcara"])();
                        const updatedAcara = currentList.find({
                            "ScanClient.useEffect.autoSyncInterval.updatedAcara": (a)=>a.id === selectedAcaraId
                        }["ScanClient.useEffect.autoSyncInterval.updatedAcara"]);
                        if (updatedAcara && updatedAcara.status !== 'ONGOING') {
                            setViewMode('manage');
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Sesi absensi telah berakhir otomatis sesuai jadwal.", "info", "Sesi Selesai");
                        }
                    }
                }
            }["ScanClient.useEffect.autoSyncInterval"], 30000);
            return ({
                "ScanClient.useEffect": ()=>{
                    clearInterval(timeInterval);
                    clearInterval(autoSyncInterval);
                }
            })["ScanClient.useEffect"];
        }
    }["ScanClient.useEffect"], [
        loadData,
        viewMode
    ]);
    const initScanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScanClient.useCallback[initScanner]": async ()=>{
            if (!isClient || viewMode !== 'scanning' || isTransitioning.current) return;
            const checkInterval = setInterval({
                "ScanClient.useCallback[initScanner].checkInterval": async ()=>{
                    const element = document.getElementById("reader");
                    if (element && !isTransitioning.current) {
                        clearInterval(checkInterval);
                        isTransitioning.current = true;
                        try {
                            if (scannerRef.current) {
                                if (scannerRef.current.isScanning) await scannerRef.current.stop();
                                scannerRef.current = null;
                            }
                            const html5QrCode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5Qrcode"]("reader");
                            scannerRef.current = html5QrCode;
                            await html5QrCode.start({
                                facingMode: "environment"
                            }, {
                                fps: 25,
                                qrbox: {
                                    width: 320,
                                    height: 320
                                },
                                aspectRatio: 1.0
                            }, {
                                "ScanClient.useCallback[initScanner].checkInterval": (text)=>handleScan(text)
                            }["ScanClient.useCallback[initScanner].checkInterval"], {
                                "ScanClient.useCallback[initScanner].checkInterval": ()=>{}
                            }["ScanClient.useCallback[initScanner].checkInterval"]);
                        } catch (err) {} finally{
                            isTransitioning.current = false;
                        }
                    }
                    if (attempts > 50) clearInterval(checkInterval);
                }
            }["ScanClient.useCallback[initScanner].checkInterval"], 150);
            let attempts = 0;
        }
    }["ScanClient.useCallback[initScanner]"], [
        isClient,
        viewMode,
        selectedAcaraId
    ]);
    const stopScanner = async ()=>{
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        if (scannerRef.current) {
            if (scannerRef.current.isScanning) await scannerRef.current.stop();
            scannerRef.current = null;
        }
        isTransitioning.current = false;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanClient.useEffect": ()=>{
            if (viewMode === 'scanning') initScanner();
            else stopScanner();
            return ({
                "ScanClient.useEffect": ()=>{
                    stopScanner();
                }
            })["ScanClient.useEffect"];
        }
    }["ScanClient.useEffect"], [
        viewMode,
        initScanner
    ]);
    const handleScan = async (nis)=>{
        if (!nis || scanResult || !selectedAcaraId) return;
        if (soundEnabled) new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3').play().catch(()=>{});
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$40a8dd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["scanAbsensi"])(nis, selectedAcaraId);
            if (result.success && result.data) {
                const timestamp = new Date().toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                setScanResult({
                    type: 'success',
                    data: {
                        ...result.data,
                        time: timestamp
                    },
                    message: result.message
                });
                loadData();
            } else {
                setScanResult({
                    type: 'error',
                    message: result.message
                });
            }
        } catch (err) {
            setScanResult({
                type: 'error',
                message: "Koneksi Bermasalah"
            });
        }
        setTimeout(()=>{
            setScanResult(null);
        }, 2500);
    };
    const handleManualSubmit = async (e)=>{
        e.preventDefault();
        if (!selectedAcaraId || !manualInput.pengurusId) return;
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$72f34d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["inputManualAbsensi"])(selectedAcaraId, Number(manualInput.pengurusId), manualInput.status);
        if (res.success) {
            setIsManualModalOpen(false);
            setManualInput({
                pengurusId: "",
                status: "HADIR"
            });
            loadData();
        }
    };
    const handleCloseSession = async ()=>{
        if (!selectedAcaraId) return;
        if (confirm("Tutup sesi sekarang? Pengurus yang tidak scan atau izin akan otomatis dianggap ALPA.")) {
            setIsSubmitting(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$1dbae0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["autoAlpaRemaining"])(selectedAcaraId);
            if (res.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])(`Sesi ditutup! ${res.count} pengurus otomatis dianggap ALPA.`, "success", "Sesi Berakhir");
                loadData();
            }
            setIsSubmitting(false);
        }
    };
    const handleCreateOrUpdate = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData();
        Object.entries(newAcara).forEach(([key, val])=>formData.append(key, String(val)));
        const res = modalMode === 'create' ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$9c6f25__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createAcara"])(formData) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$ba83e4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateAcara"])(selectedAcaraId, formData);
        if (res.success) {
            setIsModalOpen(false);
            loadData(modalMode === 'create');
        }
        setIsSubmitting(false);
    };
    const handleDayToggle = (day)=>{
        const currentDays = newAcara.hari ? newAcara.hari.split(',') : [];
        const newDays = currentDays.includes(day) ? currentDays.filter((d)=>d !== day) : [
            ...currentDays,
            day
        ];
        setNewAcara({
            ...newAcara,
            hari: newDays.join(',')
        });
    };
    const handleStartSession = async ()=>{
        if (selectedAcaraId) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$abd51e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["startAcaraSession"])(selectedAcaraId).then(()=>loadData());
    };
    const handleUpdateStatus = async (absensiId, status)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$3818a2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateStatusKehadiran"])(absensiId, status).then(()=>loadData());
    };
    const selectedAcara = daftarAcara.find((a)=>a.id === selectedAcaraId);
    const renderManagement = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden h-full px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-80 shrink-0 flex flex-col gap-4 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-5 shadow-sm overflow-hidden h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center px-1 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                            className: "text-blue-600",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 248,
                                            columnNumber: 106
                                        }, this),
                                        " Sesi Acara"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setModalMode('create');
                                        setIsModalOpen(true);
                                    },
                                    className: "p-1.5 bg-blue-600 text-white rounded-lg hover:scale-105 active:scale-95 transition-all shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 14,
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 249,
                                        columnNumber: 200
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 249,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar",
                            children: isLoadingLogs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 animate-pulse",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-16 bg-slate-200 dark:bg-slate-800 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-12 bg-slate-100 dark:bg-slate-800/50 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 256,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 260,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 w-20 bg-slate-100 dark:bg-slate-800/50 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 w-12 bg-slate-100 dark:bg-slate-800/50 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 261,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 255,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 253,
                                columnNumber: 21
                            }, this) : daftarAcara.map((acara)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedAcaraId(acara.id),
                                    className: `p-4 rounded-xl cursor-pointer transition-all border group relative ${selectedAcaraId === acara.id ? 'bg-blue-50/50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30' : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-white/5'}`,
                                    children: [
                                        selectedAcaraId === acara.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "activeAcaraIndicator",
                                            className: "absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-full z-10",
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 281,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-semibold px-2 py-0.5 rounded-md border ${selectedAcaraId === acara.id ? 'bg-blue-100/50 dark:bg-blue-500/20 border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500'}`,
                                                    children: acara.tipe === 'RUTINAN' ? 'Rutinan' : 'Sekali Pakai'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex gap-1 transition-all ${selectedAcaraId === acara.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                setModalMode('edit');
                                                                setNewAcara({
                                                                    nama: acara.nama,
                                                                    tanggal: new Date(acara.tanggal).toISOString().split('T')[0],
                                                                    lokasi: acara.lokasi,
                                                                    waktuMulai: acara.waktuMulai ? new Date(acara.waktuMulai).toTimeString().slice(0, 5) : "07:00",
                                                                    waktuSelesai: acara.waktuSelesai ? new Date(acara.waktuSelesai).toTimeString().slice(0, 5) : "15:00",
                                                                    tipe: acara.tipe || "SEKALI_PAKAI",
                                                                    hari: acara.hari || "",
                                                                    autoStart: acara.autoStart || false
                                                                });
                                                                setSelectedAcaraId(acara.id);
                                                                setIsModalOpen(true);
                                                            },
                                                            className: "p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-blue-600 shadow-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 719
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                if (confirm("Hapus?")) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$38f993__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteAcara"])(acara.id).then(()=>loadData(true));
                                                            },
                                                            className: "p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-rose-600 shadow-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 305
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 288,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: `text-sm font-semibold truncate mb-1.5 ${selectedAcaraId === acara.id ? 'text-blue-900 dark:text-blue-100' : 'text-slate-900 dark:text-white'}`,
                                            children: acara.nama
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 302,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-medium text-slate-500 flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    size: 12,
                                                                    className: "opacity-70"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 41
                                                                }, this),
                                                                new Date(acara.tanggal).toLocaleDateString('id-ID', {
                                                                    day: 'numeric',
                                                                    month: 'short'
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 37
                                                        }, this),
                                                        acara.waktuMulai && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-medium text-slate-400 flex items-center gap-1.5 border-l border-slate-200 dark:border-white/10 pl-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    size: 12,
                                                                    className: "opacity-70"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 45
                                                                }, this),
                                                                new Date(acara.waktuMulai).toLocaleTimeString('id-ID', {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[9px] font-bold px-1.5 py-0.5 rounded border ${acara.status === 'ONGOING' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20' : 'bg-slate-50 text-slate-400 border-slate-100 dark:bg-white/5 dark:border-white/10'}`,
                                                    children: acara.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 306,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, acara.id, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 270,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col gap-6 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-12 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-3 bg-white dark:bg-[#0f172a] p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-1",
                                            children: "Kehadiran Hari Ini"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 336,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold text-slate-900 dark:text-white tracking-tight",
                                                    children: logs.filter((l)=>l.status === 'HADIR').length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-medium text-slate-400",
                                                    children: [
                                                        "/ ",
                                                        pengurusList.length,
                                                        " Anggota"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 337,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-500/20",
                                                    children: [
                                                        logs.filter((l)=>l.status === 'HADIR').length,
                                                        " Hadir"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-semibold text-blue-600 bg-blue-50 dark:bg-blue-500/10 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-500/20",
                                                    children: [
                                                        logs.filter((l)=>l.status !== 'HADIR').length,
                                                        " Absen"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 343,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 335,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-9 flex flex-col md:flex-row gap-3 tour-session-controls",
                                    children: !selectedAcara || selectedAcara.status === 'UPCOMING' || selectedAcara.status === 'COMPLETED' && selectedAcara.tipe === 'RUTINAN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleStartSession,
                                        disabled: !selectedAcara,
                                        className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm transition-all active:scale-[0.98] disabled:opacity-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-5 py-2.5 flex items-center justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    fill: "currentColor",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-semibold leading-tight",
                                                            children: "Buka Sesi Absensi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-medium opacity-70",
                                                            children: "Mulai penerimaan kehadiran"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 361,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 356,
                                        columnNumber: 25
                                    }, this) : selectedAcara.status === 'ONGOING' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode('scanning'),
                                                className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm transition-all active:scale-[0.98] tour-scanner-btn",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2.5 flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-semibold leading-tight",
                                                                    children: "Launch Scanner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 381,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-medium opacity-70",
                                                                    children: "Sesi aktif & siap scan"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 372,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsManualModalOpen(true),
                                                className: "flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl shadow-sm transition-all active:scale-[0.98]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2.5 flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-semibold leading-tight",
                                                                    children: "Izin / Sakit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-medium opacity-70",
                                                                    children: "Input manual"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 388,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCloseSession,
                                                className: "flex-1 bg-white dark:bg-rose-500/5 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all active:scale-[0.98]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2.5 flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 bg-rose-50 dark:bg-rose-500/10 rounded-lg flex items-center justify-center shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                                fill: "currentColor",
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-semibold leading-tight",
                                                                    children: "End Session"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-medium opacity-60",
                                                                    children: "Tutup rekap sesi"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 404,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center text-slate-400 gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 421,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-medium",
                                                children: "Sesi absensi telah selesai dijalankan"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 422,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 420,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 354,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm flex flex-col overflow-hidden tour-activity-stream",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 border-b border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 dark:bg-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    size: 18,
                                                    className: "text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 110
                                                }, this),
                                                " Activity Stream"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 429,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2",
                                            children: [
                                                (selectedAcara?.sesi?.[0]?.waktuMulai || selectedAcara?.waktuMulaiAktual) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm border border-emerald-100 dark:border-emerald-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 33
                                                        }, this),
                                                        " Started at ",
                                                        isClient ? new Date(selectedAcara?.sesi?.[0]?.waktuMulai || selectedAcara.waktuMulaiAktual).toLocaleTimeString('id-ID', {
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        }) : "--:--"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 29
                                                }, this),
                                                selectedAcara?.waktuSelesai && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] font-semibold text-rose-600 bg-rose-50 dark:bg-rose-500/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm border border-rose-100 dark:border-rose-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 33
                                                        }, this),
                                                        " Ends at ",
                                                        isClient ? new Date(selectedAcara.waktuSelesai).toLocaleTimeString('id-ID', {
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        }) : "--:--"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 430,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 428,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar",
                                    children: isLoadingLogs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 animate-pulse",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5
                                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 p-3 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-11 h-11 rounded-lg bg-slate-200 dark:bg-slate-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-3 w-20 bg-slate-100 dark:bg-slate-800/50 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-8 w-20 bg-slate-100 dark:bg-slate-800/50 rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-12 bg-slate-100 dark:bg-slate-800/50 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 447,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 445,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "popLayout",
                                        children: logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex flex-col items-center justify-center opacity-20 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                    size: 48,
                                                    className: "mb-3 mx-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-slate-500",
                                                    children: "Belum ada aktivitas yang tercatat"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 461,
                                            columnNumber: 33
                                        }, this) : logs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layout: true,
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                className: "flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-11 h-11 rounded-lg overflow-hidden shrink-0 shadow-sm border border-slate-100 dark:border-white/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: log.image || "https://source.unsplash.com/random/100x100/?portrait",
                                                            alt: log.name,
                                                            fill: true,
                                                            className: "object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-bold text-slate-900 dark:text-white truncate",
                                                                children: log.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium text-slate-500",
                                                                children: log.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: log.status,
                                                                onChange: (e)=>handleUpdateStatus(log.dbId, e.target.value),
                                                                className: `text-xs font-bold px-3 py-1.5 rounded-lg outline-none border transition-all ${log.status === 'HADIR' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : log.status === 'IZIN' ? 'bg-blue-50 text-blue-600 border-blue-100' : log.status === 'SAKIT' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-rose-50 text-rose-600 border-rose-100'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "HADIR",
                                                                        children: "HADIR"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 492
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "IZIN",
                                                                        children: "IZIN"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 528
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "SAKIT",
                                                                        children: "SAKIT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 562
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "ALPA",
                                                                        children: "ALPA"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 598
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 476,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right min-w-[60px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-slate-400",
                                                                    children: log.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 86
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, log.scanId, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 467,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 459,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 443,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 427,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
            lineNumber: 245,
            columnNumber: 5
        }, this);
    const renderScannerPortal = ()=>{
        if (!isClient || viewMode !== 'scanning') return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "jsx-8ec4ae4a05f922c6" + " " + "fixed inset-0 z-[999999] bg-white dark:bg-[#020617] flex flex-col items-center justify-center p-6 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "8ec4ae4a05f922c6",
                    children: "body{overflow:hidden!important}#reader,#reader__scan_region{border:none!important}#reader__scan_region>div{box-shadow:none!important;opacity:0!important;border:none!important}#reader__dashboard{display:none!important}video{border-radius:2rem!important}"
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8ec4ae4a05f922c6" + " " + "absolute inset-0 overflow-hidden pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 15,
                            y: 15,
                            size: 48,
                            duration: 12,
                            delay: 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 496,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 496,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 80,
                            y: 20,
                            size: 52,
                            duration: 15,
                            delay: 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 497,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 497,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 10,
                            y: 70,
                            size: 42,
                            duration: 10,
                            delay: 2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 498,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 498,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 85,
                            y: 75,
                            size: 64,
                            duration: 18,
                            delay: 3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 499,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 499,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 50,
                            y: 8,
                            size: 38,
                            duration: 11,
                            delay: 4,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 500,
                                columnNumber: 78
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 500,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 5,
                            y: 45,
                            size: 50,
                            duration: 14,
                            delay: 5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 501,
                                columnNumber: 78
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 501,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 92,
                            y: 50,
                            size: 46,
                            duration: 13,
                            delay: 0.5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 502,
                                columnNumber: 81
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 502,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                            x: 45,
                            y: 85,
                            size: 44,
                            duration: 16,
                            delay: 1.5,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {}, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 503,
                                columnNumber: 81
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 503,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 495,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8ec4ae4a05f922c6" + " " + "absolute top-8 left-0 w-full px-10 flex justify-between items-center z-[1000]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setViewMode('manage'),
                            className: "jsx-8ec4ae4a05f922c6" + " " + "p-4 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-3 font-bold text-sm text-slate-600 dark:text-slate-300 hover:scale-105 active:scale-95 transition-all shadow-blue-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 506,
                                    columnNumber: 317
                                }, this),
                                " Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 506,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8ec4ae4a05f922c6" + " " + "flex flex-col items-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8ec4ae4a05f922c6" + " " + "px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-xl font-bold text-sm uppercase tracking-widest flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                            size: 18,
                                            className: "animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 508,
                                            columnNumber: 161
                                        }, this),
                                        " ",
                                        selectedAcara?.nama
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 508,
                                    columnNumber: 21
                                }, this),
                                selectedAcara?.waktuSelesai && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8ec4ae4a05f922c6" + " " + "px-4 py-2 bg-rose-500 text-white rounded-xl shadow-lg font-bold text-[10px] uppercase tracking-wider flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 511,
                                            columnNumber: 29
                                        }, this),
                                        " Ends at ",
                                        new Date(selectedAcara.waktuSelesai).toLocaleTimeString('id-ID', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 510,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 507,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 505,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8ec4ae4a05f922c6" + " " + "relative w-full max-w-[500px] aspect-square group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8ec4ae4a05f922c6" + " " + "absolute inset-[-40px] bg-blue-500/10 blur-[100px] rounded-full opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 517,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8ec4ae4a05f922c6" + " " + "w-full h-full relative rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_120px_rgba(0,0,0,0.8)] bg-black",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "reader",
                                    style: {
                                        transform: 'scaleX(-1)'
                                    },
                                    className: "jsx-8ec4ae4a05f922c6" + " " + "absolute inset-0 z-0 [&>video]:object-cover [&>video]:h-full [&>video]:w-full overflow-hidden"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 519,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8ec4ae4a05f922c6" + " " + "absolute inset-0 z-20 flex items-center justify-center pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8ec4ae4a05f922c6" + " " + "relative w-[320px] h-[320px] shadow-[0_0_0_2000px_rgba(0,0,0,0.7)] rounded-none border-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -top-1 -left-1 w-16 h-16 border-t-[6px] border-l-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 522,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -top-1 -right-1 w-16 h-16 border-t-[6px] border-r-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 523,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -bottom-1 -left-1 w-16 h-16 border-b-[6px] border-l-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 524,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -bottom-1 -right-1 w-16 h-16 border-b-[6px] border-r-[6px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 525,
                                                columnNumber: 29
                                            }, this),
                                            !scanResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    top: [
                                                        "5%",
                                                        "95%",
                                                        "5%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                },
                                                className: "absolute left-[5%] w-[90%] h-1.5 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_30px_rgba(255,255,255,1)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 526,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: scanResult && scanResult.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0.8,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        scale: 1.1
                                                    },
                                                    className: `absolute inset-[-40px] flex flex-col items-center justify-center text-center p-8 backdrop-blur-[100px] rounded-[3rem] z-50 pointer-events-auto border-4 shadow-2xl ${scanResult.type === 'success' ? scanResult.data.status === 'DUPLICATE' ? 'bg-amber-500/95 border-amber-400/50' : 'bg-emerald-500/95 border-emerald-400/50' : 'bg-rose-600/95 border-rose-400/50'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8ec4ae4a05f922c6" + " " + "relative mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-8ec4ae4a05f922c6" + " " + "w-40 h-40 rounded-full p-1.5 bg-white shadow-2xl ring-8 ring-white/20",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-8ec4ae4a05f922c6" + " " + "relative w-full h-full rounded-full overflow-hidden border-4 border-white",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: scanResult.data.image || "https://source.unsplash.com/random/100x100/?portrait",
                                                                            alt: "",
                                                                            fill: true,
                                                                            className: "object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                            lineNumber: 530,
                                                                            columnNumber: 219
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 128
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        scale: 0
                                                                    },
                                                                    animate: {
                                                                        scale: 1
                                                                    },
                                                                    className: `absolute -bottom-1 -right-1 p-2.5 rounded-full shadow-xl border-4 border-white ${scanResult.data.status === 'DUPLICATE' ? 'bg-amber-600' : 'bg-emerald-600'}`,
                                                                    children: scanResult.data.status === 'DUPLICATE' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "text-white",
                                                                        size: 24
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 531,
                                                                        columnNumber: 312
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        className: "text-white",
                                                                        size: 24
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 531,
                                                                        columnNumber: 357
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 531,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "jsx-8ec4ae4a05f922c6" + " " + "text-3xl font-black text-white mb-1 tracking-tight leading-tight",
                                                            children: scanResult.data.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-8ec4ae4a05f922c6" + " " + "text-xs font-bold text-white/80 uppercase tracking-[0.3em] mb-8",
                                                            children: scanResult.data.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 534,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8ec4ae4a05f922c6" + " " + "px-8 py-4 bg-white rounded-2xl shadow-xl flex flex-col items-center gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-8ec4ae4a05f922c6" + " " + `text-xs font-black uppercase tracking-widest ${scanResult.data.status === 'DUPLICATE' ? 'text-amber-700' : 'text-emerald-700'}`,
                                                                    children: scanResult.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 535,
                                                                    columnNumber: 130
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-8ec4ae4a05f922c6" + " " + "text-[9px] font-bold text-slate-400 tracking-widest",
                                                                    children: scanResult.data.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 535,
                                                                    columnNumber: 304
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 535,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 527,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 521,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 520,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 518,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8ec4ae4a05f922c6" + " " + "absolute -bottom-20 left-0 w-full text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8ec4ae4a05f922c6" + " " + "inline-flex items-center gap-4 px-8 py-4 bg-white dark:bg-slate-900 shadow-2xl rounded-full border border-slate-100 dark:border-white/5 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8ec4ae4a05f922c6" + " " + "flex h-3 w-3 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 542,
                                                columnNumber: 228
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-8ec4ae4a05f922c6" + " " + "relative inline-flex rounded-full h-3 w-3 bg-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 542,
                                                columnNumber: 337
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 542,
                                        columnNumber: 189
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-8ec4ae4a05f922c6" + " " + "text-xs font-black text-slate-600 dark:text-blue-400 uppercase tracking-[0.4em]",
                                        children: "Intelligence Scanner Active"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 542,
                                        columnNumber: 422
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 542,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 541,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 516,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
            lineNumber: 493,
            columnNumber: 9
        }, this), document.body);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-cfb0aa1549696570" + " " + "h-[calc(100vh-140px)] flex flex-col gap-6 font-sans relative px-4 md:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cfb0aa1549696570" + " " + "flex flex-col md:flex-row justify-between items-end gap-6 mb-2 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cfb0aa1549696570",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cfb0aa1549696570" + " " + "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-cfb0aa1549696570" + " " + "text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3",
                                        children: [
                                            "Smart Attendance ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-cfb0aa1549696570" + " " + "text-2xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full",
                                                children: "⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 555,
                                                columnNumber: 139
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 555,
                                        columnNumber: 17
                                    }, this),
                                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        steps: absensiTourSteps
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 556,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 554,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-cfb0aa1549696570" + " " + "text-slate-500 dark:text-slate-400 text-sm font-medium mt-1",
                                children: "Kelola kehadiran organisasi secara efisien dan real-time."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 558,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                        lineNumber: 553,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cfb0aa1549696570" + " " + "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cfb0aa1549696570" + " " + "px-4 py-2.5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl shadow-sm flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "text-blue-600 animate-pulse",
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 562,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-cfb0aa1549696570" + " " + "text-sm font-bold text-slate-900 dark:text-white font-mono",
                                        children: isClient ? currentTime.toLocaleTimeString('id-ID', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit'
                                        }) : "--:--:--"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 563,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 561,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSoundEnabled(!soundEnabled),
                                className: "jsx-cfb0aa1549696570" + " " + "p-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl text-slate-500 hover:text-blue-600 shadow-sm transition-all",
                                children: soundEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 567,
                                    columnNumber: 244
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 567,
                                    columnNumber: 267
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 567,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                        lineNumber: 560,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: viewMode === 'manage' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "flex-1 overflow-hidden",
                    children: renderManagement()
                }, "manage", false, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 572,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 571,
                columnNumber: 7
            }, this),
            isClient && renderScannerPortal(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isManualModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-cfb0aa1549696570" + " " + "fixed inset-0 z-[2000] flex items-center justify-center p-6 backdrop-blur-md",
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
                            onClick: ()=>setIsManualModalOpen(false),
                            className: "absolute inset-0 bg-slate-900/70"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 581,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95
                            },
                            className: "relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-white/20 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cfb0aa1549696570" + " " + "p-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-cfb0aa1549696570" + " " + "flex justify-between items-center mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-cfb0aa1549696570" + " " + "text-xl font-bold text-slate-900 dark:text-white tracking-tight uppercase",
                                                children: "Input Izin / Sakit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 585,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsManualModalOpen(false),
                                                className: "jsx-cfb0aa1549696570" + " " + "p-2 bg-slate-100 dark:bg-white/5 rounded-lg transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 152
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 586,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 584,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleManualSubmit,
                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                        children: "Pilih Pengurus"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        required: true,
                                                        value: manualInput.pengurusId,
                                                        onChange: (e)=>setManualInput({
                                                                ...manualInput,
                                                                pengurusId: e.target.value
                                                            }),
                                                        className: "jsx-cfb0aa1549696570" + " " + "w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                className: "jsx-cfb0aa1549696570",
                                                                children: "-- Pilih Nama --"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 37
                                                            }, this),
                                                            pengurusList.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: p.id,
                                                                    className: "jsx-cfb0aa1549696570",
                                                                    children: [
                                                                        p.nama,
                                                                        " (",
                                                                        p.jabatan,
                                                                        ")"
                                                                    ]
                                                                }, p.id, true, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 594,
                                                                    columnNumber: 41
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 589,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-sm font-medium text-slate-500",
                                                        children: "Status Kehadiran"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setManualInput({
                                                                        ...manualInput,
                                                                        status: 'IZIN'
                                                                    }),
                                                                className: "jsx-cfb0aa1549696570" + " " + `py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${manualInput.status === 'IZIN' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500'}`,
                                                                children: "IZIN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 601,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setManualInput({
                                                                        ...manualInput,
                                                                        status: 'SAKIT'
                                                                    }),
                                                                className: "jsx-cfb0aa1549696570" + " " + `py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${manualInput.status === 'SAKIT' ? 'bg-amber-500 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500'}`,
                                                                children: "SAKIT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 598,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "jsx-cfb0aa1549696570" + " " + "w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all",
                                                children: "Simpan Status"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 605,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 588,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                lineNumber: 583,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 582,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 580,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-cfb0aa1549696570" + " " + "fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6 backdrop-blur-md",
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
                            className: "absolute inset-0 bg-slate-900/70"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 617,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95,
                                y: 20
                            },
                            className: "relative w-full max-w-lg bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[90vh]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-cfb0aa1549696570" + " " + "p-6 md:p-7 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-white dark:bg-[#0f172a] shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-cfb0aa1549696570" + " " + "text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3",
                                            children: [
                                                modalMode === 'create' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "text-blue-600",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 77
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    className: "text-blue-600",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 124
                                                }, this),
                                                modalMode === 'create' ? 'Tambah Sesi Acara' : 'Edit Sesi Acara'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 626,
                                            columnNumber: 47
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "jsx-cfb0aa1549696570" + " " + "p-2 bg-slate-100 dark:bg-white/5 rounded-lg hover:bg-rose-500 hover:text-white transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 631,
                                                columnNumber: 51
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                            lineNumber: 630,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 625,
                                    columnNumber: 43
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-cfb0aa1549696570" + " " + "flex-1 overflow-y-auto p-6 md:p-7 custom-scrollbar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleCreateOrUpdate,
                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-[11px] font-semibold text-slate-500 ml-0.5 uppercase tracking-wider",
                                                        children: "Nama Kegiatan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: newAcara.nama,
                                                        onChange: (e)=>setNewAcara({
                                                                ...newAcara,
                                                                nama: e.target.value
                                                            }),
                                                        type: "text",
                                                        placeholder: "e.g. Rapat Koordinasi",
                                                        className: "jsx-cfb0aa1549696570" + " " + "w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5 focus:border-blue-500 transition-all shadow-inner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 55
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 638,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-cfb0aa1549696570" + " " + `p-2 rounded-lg ${newAcara.autoStart ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-400'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                    size: 16,
                                                                    fill: newAcara.autoStart ? "currentColor" : "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 191
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 645,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-cfb0aa1549696570",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-cfb0aa1549696570" + " " + "text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-tight",
                                                                        children: "Auto Start Session"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 647,
                                                                        columnNumber: 63
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-cfb0aa1549696570" + " " + "text-[10px] font-medium text-slate-500 leading-tight",
                                                                        children: "Mulai otomatis sesuai jadwal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 648,
                                                                        columnNumber: 63
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 646,
                                                                columnNumber: 59
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setNewAcara({
                                                                ...newAcara,
                                                                autoStart: !newAcara.autoStart
                                                            }),
                                                        className: "jsx-cfb0aa1549696570" + " " + `w-10 h-5 rounded-full transition-all relative ${newAcara.autoStart ? 'bg-blue-600' : 'bg-slate-300 dark:bg-white/10'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-cfb0aa1549696570" + " " + `absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${newAcara.autoStart ? 'left-5.5' : 'left-0.5'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 284
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 55
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 643,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-[11px] font-semibold text-slate-500 ml-0.5 uppercase tracking-wider",
                                                        children: "Tipe Absensi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setNewAcara({
                                                                        ...newAcara,
                                                                        tipe: 'SEKALI_PAKAI'
                                                                    }),
                                                                className: "jsx-cfb0aa1549696570" + " " + `py-2.5 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${newAcara.tipe === 'SEKALI_PAKAI' ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-white/5 text-slate-500'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 657,
                                                                        columnNumber: 440
                                                                    }, this),
                                                                    " Sekali Pakai"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 657,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setNewAcara({
                                                                        ...newAcara,
                                                                        tipe: 'RUTINAN'
                                                                    }),
                                                                className: "jsx-cfb0aa1549696570" + " " + `py-2.5 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${newAcara.tipe === 'RUTINAN' ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-white/5 text-slate-500'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                        lineNumber: 658,
                                                                        columnNumber: 430
                                                                    }, this),
                                                                    " Rutinan"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 59
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 55
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 654,
                                                columnNumber: 51
                                            }, this),
                                            newAcara.tipe === 'RUTINAN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "space-y-3 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-500/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest",
                                                        children: "Hari Rutinan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 59
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "flex flex-wrap gap-2",
                                                        children: DAYS_LIST.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleDayToggle(day),
                                                                className: "jsx-cfb0aa1549696570" + " " + `px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${newAcara.hari?.split(',').includes(day) ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-500 border border-slate-100 dark:border-white/5'}`,
                                                                children: day
                                                            }, day, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 67
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 59
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 663,
                                                columnNumber: 55
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-cfb0aa1549696570" + " " + "text-[11px] font-semibold text-slate-500 ml-0.5 uppercase tracking-wider",
                                                                children: "Jam Mulai"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 84
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: newAcara.waktuMulai,
                                                                onChange: (e)=>setNewAcara({
                                                                        ...newAcara,
                                                                        waktuMulai: e.target.value
                                                                    }),
                                                                type: "time",
                                                                className: "jsx-cfb0aa1549696570" + " " + "w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5 focus:border-blue-500 transition-all shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 193
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-cfb0aa1549696570" + " " + "text-[11px] font-semibold text-slate-500 ml-0.5 uppercase tracking-wider",
                                                                children: "Jam Selesai"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 675,
                                                                columnNumber: 84
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: newAcara.waktuSelesai,
                                                                onChange: (e)=>setNewAcara({
                                                                        ...newAcara,
                                                                        waktuSelesai: e.target.value
                                                                    }),
                                                                type: "time",
                                                                className: "jsx-cfb0aa1549696570" + " " + "w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5 focus:border-blue-500 transition-all shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 675,
                                                                columnNumber: 195
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 55
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 673,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cfb0aa1549696570" + " " + "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-cfb0aa1549696570" + " " + "text-[11px] font-semibold text-slate-500 ml-0.5 uppercase tracking-wider",
                                                                children: "Tanggal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 84
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: newAcara.tanggal,
                                                                onChange: (e)=>setNewAcara({
                                                                        ...newAcara,
                                                                        tanggal: e.target.value
                                                                    }),
                                                                type: "date",
                                                                className: "jsx-cfb0aa1549696570" + " " + "w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5 focus:border-blue-500 transition-all shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 191
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cfb0aa1549696570" + " " + "space-y-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-cfb0aa1549696570" + " " + "text-[11px] font-semibold text-slate-500 ml-0.5 uppercase tracking-wider",
                                                                children: "Lokasi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 680,
                                                                columnNumber: 84
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: newAcara.lokasi,
                                                                onChange: (e)=>setNewAcara({
                                                                        ...newAcara,
                                                                        lokasi: e.target.value
                                                                    }),
                                                                type: "text",
                                                                placeholder: "e.g. Aula Sekolah",
                                                                className: "jsx-cfb0aa1549696570" + " " + "w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl outline-none text-sm font-medium dark:text-white border border-slate-100 dark:border-white/5 focus:border-blue-500 transition-all shadow-inner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                                lineNumber: 680,
                                                                columnNumber: 190
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                        lineNumber: 680,
                                                        columnNumber: 55
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 678,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: isSubmitting,
                                                type: "submit",
                                                className: "jsx-cfb0aa1549696570" + " " + "w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 hover:brightness-110 active:scale-[0.98] transition-all",
                                                children: isSubmitting ? "Processing..." : modalMode === 'create' ? 'Buat Sesi Acara' : 'Simpan Perubahan'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                                lineNumber: 683,
                                                columnNumber: 51
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                        lineNumber: 637,
                                        columnNumber: 47
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                                    lineNumber: 636,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                            lineNumber: 618,
                            columnNumber: 39
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                    lineNumber: 616,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/absensi/ScanClient.tsx",
                lineNumber: 614,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "cfb0aa1549696570",
                children: ".custom-scrollbar::-webkit-scrollbar{width:4px}.custom-scrollbar::-webkit-scrollbar-thumb{background:#3b82f6;border-radius:10px}.dark .custom-scrollbar::-webkit-scrollbar-thumb{background:#1e293b}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/absensi/ScanClient.tsx",
        lineNumber: 551,
        columnNumber: 5
    }, this);
}
_s(ScanClient, "d0vN4Ks4zA7J3mWrdL5S1ri6Eco=");
_c1 = ScanClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "FloatingIcon");
__turbopack_context__.k.register(_c1, "ScanClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_absensi_ScanClient_tsx_6e42ff36._.js.map