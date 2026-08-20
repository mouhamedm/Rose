"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "rose-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    let parsed: string[] | null = null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) parsed = JSON.parse(stored);
    } catch {
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
