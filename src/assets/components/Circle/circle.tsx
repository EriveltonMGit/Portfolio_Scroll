import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeDTorus: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Cena e câmera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 25);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;

    // Desabilitar zoom e movimento da câmera
    controls.enableZoom = false; // Desabilita o zoom
    controls.enablePan = false;  // Desabilita o movimento da câmera

    const ambientLight = new THREE.AmbientLight('white', 0.5);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight('white', 3);
    light.position.set(1, 1, 1);
    scene.add(light);

    function surface(u: number, v: number, target: THREE.Vector3) {
      const n = 10, t = 1.5;
      u *= 2 * Math.PI;
      v *= 2 * Math.PI;

      const r = Math.pow(Math.cos(v) ** n + Math.sin(v) ** n, -1 / n);
      const x = (4 + r * Math.cos(v + t * u)) * Math.cos(u);
      const y = (4 + r * Math.cos(v + t * u)) * Math.sin(u);
      const z = r * Math.sin(v + t * u);

      target.set(x, y, z);
    }

    const geometry = new ParametricGeometry(surface, 100, 100) as THREE.BufferGeometry;

    // Criar uma textura de gradiente
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d')!;
    const gradient = context.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, '#17a2b8'); // Azul escuro
    gradient.addColorStop(1, '#17a2b8'); // Azul claro
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 16);

    const gradientTexture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshStandardMaterial({ map: gradientTexture });

    const object = new THREE.Mesh(geometry, material);
    scene.add(object);

    const animationLoop = () => {
      // Girar apenas ao redor do eixo Y (horizontal)
      object.rotation.y += 0.005;

      controls.update();
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animationLoop);

    return () => {
      window.removeEventListener('resize', () => {});
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', overflow:" hidden" }} />;
};

export default ThreeDTorus;
