import { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const observer = new IntersectionObserver((([entry]) => {
    setIsOnScreen(entry.isIntersecting)
  }), {
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect()
  })
  
  return isOnScreen;
}