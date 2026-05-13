"use client";

import { useEffect, useRef } from "react";

export default function SimpleCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    console.log("Cursor component mounted");

    const moveCursor = (e: MouseEvent) => {
      console.log("Mouse moved:", e.clientX, e.clientY);

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 bg-red-500 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      style={{ mixBlendMode: "difference" }}
    />
  );
}
