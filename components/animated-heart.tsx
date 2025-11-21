"use client"

import { useEffect, useRef } from "react"

export function AnimatedHeart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rotationRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const animate = () => {
      const width = rect.width
      const height = rect.height

      ctx.clearRect(0, 0, width, height)

      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "rgba(53, 167, 142, 0.05)")
      gradient.addColorStop(1, "rgba(234, 179, 8, 0.05)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      ctx.save()
      ctx.translate(width / 2, height / 2)
      ctx.rotate(rotationRef.current)

      // Heart shape with 3D effect
      const scale = 1 + Math.sin(Date.now() / 1000) * 0.1
      ctx.scale(scale, scale)

      const heartPath = new Path2D()
      const size = 40

      // Draw heart shape
      heartPath.moveTo(0, -size / 2)
      heartPath.bezierCurveTo(-size, -size / 2, -size, size / 4, 0, size)
      heartPath.bezierCurveTo(size, size / 4, size, -size / 2, 0, -size / 2)

      // Main heart fill with gradient
      const heartGradient = ctx.createLinearGradient(-size, -size, size, size)
      heartGradient.addColorStop(0, "rgba(239, 68, 68, 0.9)")
      heartGradient.addColorStop(1, "rgba(220, 38, 38, 1)")
      ctx.fillStyle = heartGradient
      ctx.fill(heartPath)

      // Heart glow
      ctx.strokeStyle = "rgba(239, 68, 68, 0.4)"
      ctx.lineWidth = 2
      ctx.stroke(heartPath)

      // Extra glow layers
      ctx.strokeStyle = "rgba(239, 68, 68, 0.2)"
      ctx.lineWidth = 4
      ctx.stroke(heartPath)

      ctx.restore()

      rotationRef.current += 0.01
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-64 h-64 rounded-full"
      style={{
        filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.3))",
      }}
    />
  )
}
