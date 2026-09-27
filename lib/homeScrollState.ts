type HeroVisibilityListener = (visible: boolean) => void;

let heroVisible = true;
const listeners = new Set<HeroVisibilityListener>();

export function setHomeHeroVisible(visible: boolean): void {
  if (heroVisible === visible) return;
  heroVisible = visible;
  listeners.forEach((listener) => listener(visible));
}

export function subscribeHomeHeroVisible(
  listener: HeroVisibilityListener,
): () => void {
  listeners.add(listener);
  listener(heroVisible);
  return () => {
    listeners.delete(listener);
  };
}

export function getHomeHeroVisible(): boolean {
  return heroVisible;
}
