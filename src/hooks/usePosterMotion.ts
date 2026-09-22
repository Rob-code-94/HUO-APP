import { useEffect, useMemo, useState, type RefObject } from 'react';
import { useReducedMotion, useSpring, useMotionValueEvent, useScroll } from 'motion/react';

type LayerMotion = {
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
  rotate: ReturnType<typeof useSpring>;
};

function useLayerSpring(enabled: boolean): LayerMotion {
  const x = useSpring(0, { stiffness: 120, damping: 22, mass: 0.4 });
  const y = useSpring(0, { stiffness: 120, damping: 22, mass: 0.4 });
  const rotate = useSpring(0, { stiffness: 100, damping: 20, mass: 0.35 });

  useEffect(() => {
    if (!enabled) {
      x.set(0);
      y.set(0);
      rotate.set(0);
    }
  }, [enabled, x, y, rotate]);

  return { x, y, rotate };
}

export function usePosterMotion(posterRef: RefObject<HTMLElement | null>) {
  const prefersReduced = useReducedMotion();
  const [pointerOk, setPointerOk] = useState(false);
  const { scrollYProgress } = useScroll({
    target: posterRef,
    offset: ['start start', 'end start'],
  });
  const scrollFade = useSpring(0, { stiffness: 80, damping: 24 });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (prefersReduced) {
      scrollFade.set(0);
      return;
    }
    // 0 at top → up to ~18px drift / slight fade as poster leaves
    scrollFade.set(latest * 18);
  });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setPointerOk(mq.matches && !prefersReduced);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [prefersReduced]);

  const brand = useLayerSpring(pointerOk);
  const disciplines = useLayerSpring(pointerOk);
  const hero = useLayerSpring(pointerOk);
  const grain = useLayerSpring(pointerOk);

  useEffect(() => {
    if (!pointerOk) return;

    const onMove = (event: PointerEvent) => {
      const el = posterRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;

      brand.x.set(nx * -8);
      brand.y.set(ny * -6);
      brand.rotate.set(nx * -0.6);

      disciplines.x.set(nx * 10);
      disciplines.y.set(ny * -5);
      disciplines.rotate.set(nx * 0.5);

      hero.x.set(nx * 14);
      hero.y.set(ny * 10);
      hero.rotate.set(nx * 1.2);

      grain.x.set(nx * -4);
      grain.y.set(ny * 4);
    };

    const onLeave = () => {
      brand.x.set(0);
      brand.y.set(0);
      brand.rotate.set(0);
      disciplines.x.set(0);
      disciplines.y.set(0);
      disciplines.rotate.set(0);
      hero.x.set(0);
      hero.y.set(0);
      hero.rotate.set(0);
      grain.x.set(0);
      grain.y.set(0);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, [pointerOk, posterRef, brand, disciplines, hero, grain]);

  return useMemo(
    () => ({
      enabled: Boolean(pointerOk && !prefersReduced),
      brand,
      disciplines,
      hero,
      grain,
      scrollFade,
      prefersReduced: Boolean(prefersReduced),
    }),
    [pointerOk, prefersReduced, brand, disciplines, hero, grain, scrollFade]
  );
}
