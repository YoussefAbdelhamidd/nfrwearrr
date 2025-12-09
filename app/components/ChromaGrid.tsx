'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface ChromaGridItem {
  image: string;
  title: string;
  subtitle: string;
  handle: string;
  borderColor: string;
  gradient: string;
  url: string;
}

interface ChromaGridProps {
  items: ChromaGridItem[];
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

export default function ChromaGrid({
  items,
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
}: ChromaGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Animate each item based on mouse position
      itemRefs.current.forEach((item) => {
        if (!item) return;

        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2 - rect.left;
        const itemCenterY = itemRect.top + itemRect.height / 2 - rect.top;

        const dx = x - itemCenterX;
        const dy = y - itemCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          const angle = Math.atan2(dy, dx);
          const force = (radius - distance) / radius;
          const moveX = Math.cos(angle) * force * 20;
          const moveY = Math.sin(angle) * force * 20;
          const opacity = 1 - force * fadeOut;

          gsap.to(item, {
            x: moveX,
            y: moveY,
            scale: 1 + force * 0.1,
            opacity: opacity,
            duration: damping,
            ease: ease as any,
          });
        } else {
          gsap.to(item, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: damping,
            ease: ease as any,
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [radius, damping, fadeOut, ease]);

  return (
    <div
      ref={containerRef}
      className="relative grid h-full w-full grid-cols-1 gap-6 md:grid-cols-3"
      style={{ height: '600px' }}
    >
      {items.map((item, index) => (
        <a
          key={index}
          ref={(el) => { itemRefs.current[index] = el; }}
          href={item.url}
          className="group relative overflow-hidden rounded-lg"
          style={{
            border: `2px solid ${item.borderColor}`,
            background: item.gradient,
          }}
        >
          <div className="relative h-full w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
              <p className="mb-2 text-sm text-gray-300">{item.subtitle}</p>
              <p className="text-xs text-gray-400">{item.handle}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
