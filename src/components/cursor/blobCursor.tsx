"use client";

import { useEffect, useRef, useState } from "react";

export default function BlobCursor() {
  const blobRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function animate() {
      const node = blobRef.current;
      if (!node) return;

      current.current.x = lerp(current.current.x, mouse.current.x, 0.13);
      current.current.y = lerp(current.current.y, mouse.current.y, 0.13);

      const vx = mouse.current.x - current.current.x;
      const vy = mouse.current.y - current.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);

      // Estica na direção do movimento
      const stretch = Math.min(speed * 0.012, 0.45);
      const sx = 1 + stretch;
      const sy = 1 - stretch * 0.5;

      node.style.left = `${current.current.x}px`;
      node.style.top = `${current.current.y}px`;
      node.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scaleX(${sx}) scaleY(${sy})`;

      rafRef.current = requestAnimationFrame(animate);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setVisible(true);
    };

    if (!blobRef.current) return;

    // Detecta hover em interativos
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="pointer-events-none fixed z-[99999]"
      style={{
        width: hovered ? "50px" : "28px",
        height: hovered ? "50px" : "28px",
        borderRadius: "50%",
        backgroundColor: "#a3e635",
        mixBlendMode: "difference",
        opacity: visible ? 1 : 0,
        transition:
          "width 0.4s cubic-bezier(0.23,1,0.32,1), height 0.4s cubic-bezier(0.23,1,0.32,1), opacity 0.3s",
        willChange: "transform, width, height",
      }}
    />
  );
}
