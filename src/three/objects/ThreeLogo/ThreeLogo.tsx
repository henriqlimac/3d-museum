import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh
  }
  materials: {
    material_0: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function ThreeLogo(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/ThreeLogo.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/ThreeLogo.glb')
