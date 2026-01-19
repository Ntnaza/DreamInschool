"use client";

import { useRef, useEffect, memo } from "react"; // Tambah 'memo'
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

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

function AuroraMesh({ color, seed, speed }: { color: string; seed: number; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Ref untuk warna target (PENTING untuk transisi mulus)
  const targetColorRef = useRef(new THREE.Color(color));

  // Saat props color berubah, update target ref saja (jangan re-render komponen)
  useEffect(() => {
    targetColorRef.current.set(color);
  }, [color]);
  
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      // Update Waktu
      material.uniforms.uTime.value = state.clock.getElapsedTime() * speed;
      // Update Warna (Lerp Smooth ke target)
      material.uniforms.uColor.value.lerp(targetColorRef.current, 0.05);
    }
  });

  // Init uniforms sekali saja
  const uniforms = useRef({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uSeed: { value: seed },
  }).current;

  return (
    <mesh ref={meshRef} position={[0, 3, -8]} scale={[50, 25, 1]} rotation={[0.5, 0, 0]}>
      <planeGeometry args={[1, 1, 300, 300]} /> 
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// === KOMPONEN UTAMA ===
function AuroraBackgroundComponent({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* frameloop="always" memastikan animasi jalan terus walau parent re-render */}
      <Canvas camera={{ position: [0, 0, 5], fov: 65 }} dpr={[1, 1.5]} gl={{ antialias: false }} frameloop="always">
        <Stars radius={100} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />
        
        {/* Layer 1 */}
        <AuroraMesh color={color} seed={10.0} speed={0.8} />
        
        {/* Layer 2 */}
        <group position={[0, -1, -2]} rotation={[0, 0, 0.05]}>
           <AuroraMesh color={color} seed={20.0} speed={1.1} />
        </group>
      </Canvas>
    </div>
  );
}

// 🔥 FIX BUG NGE-FREEZE: MEMOIZATION
// Ini mencegah Canvas di-reset saat parent (MajorsClient) re-render karena hover/state change
const AuroraBackground = memo(AuroraBackgroundComponent);

export default AuroraBackground;