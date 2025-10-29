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

    const addEntry = (newEntry: Entry) => {
        setEntries((prev) => [newEntry, ...prev]);
    }

    const updateEntry = async (id: string, updated: { title: string; content: string }) => {
        try {
            const res = await fetch(`${BASE_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updated)
            });
            if (!res.ok) throw new Error("Failed to update entry");
            const data = await res.json();
            setEntries((prev) => prev.map((e) => (e._id === id ? data : e)));
        } catch (err: any) {
            setError(err.message || "Unknown error while updating");
        }
    };

    const deleteEntry = async (id: string) => {
        try {
            const res = await fetch(`${BASE_URL}/${id}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error("Failed to delete entry");
            setEntries((prev) => prev.filter((e) => (e._id !== id)));
        } catch (err: any) {
            setError(err.message || "Unknown error while deleting");
        }
        
    }

    return { entries, setEntries, loading, error };
}