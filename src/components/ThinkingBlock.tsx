import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface ThinkingBlockProps {
    position: [number, number, number]
    color?: string
}

export default function ThinkingBlock({ position, color = '#00ffee' }: ThinkingBlockProps) {
    const meshRef = useRef<Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.2
        meshRef.current.rotation.y += delta * 0.3
        // subtle floating effect
        const time = state.clock.getElapsedTime()
        meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.1
    })

    return (
        <mesh
            ref={meshRef}
            position={position}
            scale={active ? 1.2 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color={hovered ? '#ffffff' : color}
                emissive={hovered ? '#ffffff' : color}
                emissiveIntensity={hovered ? 0.8 : 0.2}
                roughness={0.1}
                metalness={0.8}
            />
        </mesh>
    )
}
