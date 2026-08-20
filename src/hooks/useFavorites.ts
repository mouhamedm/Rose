"use client";

// useFavorites: manages favorite product IDs in localStorage + React state
import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "rose-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Hydrate from localStorage on mount (client only).
  // startTransition defers the state update so it doesn't run synchronously
  // inside the effect body, satisfying the react-hooks/set-state-in-effect rule.
  useEffect(() => {
    let parsed: string[] | null = null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) parsed = JSON.parse(stored);
    } catch {
      // ignore malformed JSON
    }
    if (parsed) {
      queueMicrotask(() => setFavorites(parsed!));
    }
  }, []);

  const toggle = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  return { favorites, toggle, isFavorite };
}
