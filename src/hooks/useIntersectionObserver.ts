import { RefObject, useEffect } from "react";

interface UseIntersectionObserverProps {
  enabled: boolean;
  onIntersect: () => void;
  root?: RefObject<HTMLDivElement>;
  rootMargin?: string;
  target: RefObject<HTMLDivElement | undefined>;
  threshold?: number;
  trigger: unknown;
}

export default function useIntersectionObserver({
  enabled = true,
  onIntersect,
  root,
  rootMargin = "0px",
  target,
  threshold = 0.1,
  trigger,
}: UseIntersectionObserverProps) {

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      },
    )

    const el = target && target.current;

    if (!el) return;

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [target.current, enabled, trigger])
}