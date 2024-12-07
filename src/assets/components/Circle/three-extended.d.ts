declare module 'three/examples/jsm/geometries/ParametricGeometry.js' {
    import { Geometry } from 'three';
    export class ParametricGeometry extends Geometry {
      constructor(func: (u: number, v: number, target: THREE.Vector3) => void, slices: number, stacks: number);
    }
  }
  
  declare module 'three/examples/jsm/controls/OrbitControls.js' {
    import { Camera, MOUSE, TOUCH, Vector3 } from 'three';
    import { EventDispatcher } from 'three';
  
    export class OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement?: HTMLElement);
  
      object: Camera;
      domElement: HTMLElement | undefined;
  
      enabled: boolean;
      target: Vector3;
  
      minDistance: number;
      maxDistance: number;
  
      minZoom: number;
      maxZoom: number;
  
      minPolarAngle: number;
      maxPolarAngle: number;
  
      minAzimuthAngle: number;
      maxAzimuthAngle: number;
  
      enableDamping: boolean;
      dampingFactor: number;
  
      enableZoom: boolean;
      zoomSpeed: number;
  
      enableRotate: boolean;
      rotateSpeed: number;
  
      enablePan: boolean;
      panSpeed: number;
      screenSpacePanning: boolean;
  
      keyPanSpeed: number;
  
      autoRotate: boolean;
      autoRotateSpeed: number;
  
      enableKeys: boolean;
      keys: { LEFT: number; UP: number; RIGHT: number; BOTTOM: number };
      mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
      touches: { ONE: TOUCH; TWO: TOUCH };
  
      update(): void;
      saveState(): void;
      reset(): void;
      dispose(): void;
      getPolarAngle(): number;
      getAzimuthalAngle(): number;
      listenToKeyEvents(domElement: HTMLElement): void;
    }
  }
  