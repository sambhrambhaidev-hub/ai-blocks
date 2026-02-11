import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import ThinkingBlock from './ThinkingBlock'

export default function MonolithicScene() {
    // Load the provided image as a texture if needed, or just use it as color reference
    // For now, let's create a procedural monolithic structure
    const groupRef = useRef<Group>(null!)

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
        }
    })

    return (
        <group ref={groupRef}>
            {/* Central Monolith */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4, 8, 4]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    roughness={0.2}
                    metalness={0.9}
                />
            </mesh>

            {/* AI Blocks orbiting/floating */}
            <ThinkingBlock position={[-3, 2, 2]} />
            <ThinkingBlock position={[3, -1, 2]} color="#ff00aa" />
            <ThinkingBlock position={[0, 4, -2]} color="#00aa00" />
            <ThinkingBlock position={[-2, -3, -2]} color="#aa00ff" />

            {/* Ambient Particles or details could go here */}
        </group>
    )
}
