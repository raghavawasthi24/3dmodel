import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Model/model.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Wood_Wood_0.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Wall_Wall_0.geometry} material={materials.Wall} />
        <mesh geometry={nodes.WallBrick_Wall_Brick_0.geometry} material={materials.Wall_Brick} />
        <mesh geometry={nodes.Roof_Roof_0.geometry} material={materials.Roof} />
        <mesh geometry={nodes.DoorAndWindow_Door_And_Window_0.geometry} material={materials.Door_And_Window} />
      </group>
    </group>
  )
}

useGLTF.preload('/Model/model.gltf')
