type ScrollProgressListener = (progress: number) => void;

let scrollProgress = 0;
const listeners = new Set<ScrollProgressListener>();

export function setDocumentScrollProgress(progress: number): void {
  const clamped = Math.min(1, Math.max(0, progress));
  if (scrollProgress === clamped) return;
  scrollProgress = clamped;
  listeners.forEach((listener) => listener(clamped));
}

export function subscribeDocumentScrollProgress(
  listener: ScrollProgressListener,
): () => void {
  listeners.add(listener);
  listener(scrollProgress);
  return () => {
    listeners.delete(listener);
  };
}
