"use client";

import { useEffect, useState, useMemo } from "react";
import { fetchProducts } from "../services/productService";

export default function useProducts() {
  const [raw, setRaw] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchProducts();
      setRaw(data);
      setLoading(false);
    }
    load();
  }, []);

  const items = useMemo(() => {
    let list = [...raw];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }

    if (sortType === "low-high") list.sort((a, b) => a.price - b.price);
    if (sortType === "high-low") list.sort((a, b) => b.price - a.price);

    return list;
  }, [raw, search, sortType]);

  return {
    items,
    loading,
    search,
    setSearch,
    sortType,
    setSortType,
  };
}
