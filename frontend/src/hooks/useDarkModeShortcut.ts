import { useEffect } from "react";

export function useDarkModeShortcut() {
  useEffect(() => {
    const toggleDarkMode = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "l") {
        e.preventDefault();
        document.documentElement.classList.toggle("dark");
      }
    };

    window.addEventListener("keydown", toggleDarkMode);
    return () => window.removeEventListener("keydown", toggleDarkMode);
  }, []);
}
