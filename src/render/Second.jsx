// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// Command: npx gltfjsx@6.5.2 second.glb 
// */

// import React, { useRef } from 'react'
// import { useGLTF, PerspectiveCamera } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber';

// export function Plates(props) {
//   const { nodes, materials } = useGLTF('/second.glb')

//   const ref = useRef();
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.009; // Adjust the value to control speed
//     }
//   });

//   return (
//     <group {...props} dispose={null}>
//       <pointLight castShadow intensity={1.5} decay={2} position={[0, 0.355, 0]} rotation={[-Math.PI / 2, 0, 0]} />
//       <pointLight castShadow intensity={0.5} decay={2} position={[-0.411, 0.351, -0.814]} rotation={[-Math.PI / 2, 0, 0]} />
//       <pointLight castShadow intensity={0.5} decay={2} position={[0.628, -0.008, 1.119]} rotation={[-Math.PI / 2, 0, 0]} />
//       <pointLight castShadow intensity={0.5} decay={2} position={[-0.573, 0.008, 1.071]} rotation={[-Math.PI / 2, 0, 0]} />
//       <pointLight castShadow intensity={0.5} decay={2} position={[0.429, 0.34, -0.813]} rotation={[-Math.PI / 2, 0, 0]} />
//       <group scale={0.061} ref={ref}>
//         <mesh castShadow geometry={nodes.Circle008.geometry} material={materials.Porcelain} />
//         <mesh castShadow geometry={nodes.Circle008_1.geometry} material={materials['Material.003']} />
//         <mesh castShadow geometry={nodes.Circle008_2.geometry} material={materials.Sauce} />
//         <mesh castShadow geometry={nodes.Circle008_3.geometry} material={materials.Sauce_Bits} />
//         <mesh castShadow geometry={nodes.Circle008_4.geometry} material={materials.Lumpia_Material} />
//       </group>
//       <mesh receiveShadow geometry={nodes.Plane.geometry} material={materials.plane} position={[0, -0.204, 0]} scale={[1.293, 1.4, 1.7]} />
//     </group>
//   )
// }

// useGLTF.preload('/second.glb')
