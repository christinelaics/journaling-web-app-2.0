import { useState, useEffect } from "react";
import type { Entry } from "../types/types";

const BASE_URL = "http://localhost:3000/api/entries";

export function useEntries() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchEntries() {
            try {
                const res = await fetch(BASE_URL);
                if (!res.ok) throw new Error("Failed to fetch entries");
                const data = await res.json();
                setEntries(data);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchEntries();
    }, []);

    return {entries, setEntries, loading, error};
}