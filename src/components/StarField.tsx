import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  px: number
  py: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const stars: Star[] = []
    const NUM_STARS = 600
    const SPEED = 0.3
    let w = window.innerWidth
    let h = window.innerHeight

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    resize()
    window.addEventListener('resize', resize)

    // Initialize stars
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: (Math.random() - 0.5) * w,
        y: (Math.random() - 0.5) * h,
        z: Math.random() * w,
        px: 0,
        py: 0,
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, w, h)

      const cx = w / 2
      const cy = h / 2

      for (const star of stars) {
        star.z -= SPEED

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * w
          star.y = (Math.random() - 0.5) * h
          star.z = w
          star.px = cx + (star.x / star.z) * w
          star.py = cy + (star.y / star.z) * h
        }

        const sx = cx + (star.x / star.z) * w
        const sy = cy + (star.y / star.z) * h
        const r = Math.max(0, (1 - star.z / w) * 2.5)
        const brightness = Math.max(0, 1 - star.z / w)

        // Draw trail
        if (star.px !== 0 && star.py !== 0) {
          ctx.strokeStyle = `rgba(180, 160, 255, ${brightness * 0.3})`
          ctx.lineWidth = r * 0.5
          ctx.beginPath()
          ctx.moveTo(star.px, star.py)
          ctx.lineTo(sx, sy)
          ctx.stroke()
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(sx, sy, r, 0, Math.PI * 2)
        // Random tint between white, blue, purple
        const colors = [
          `rgba(255, 255, 255, ${brightness})`,
          `rgba(150, 130, 255, ${brightness})`,
          `rgba(100, 180, 255, ${brightness})`,
        ]
        ctx.fillStyle = colors[Math.floor(star.z) % 3]
        ctx.fill()

        star.px = sx
        star.py = sy
      }

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}
