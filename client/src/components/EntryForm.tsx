import { useState } from "react";
import type { Entry } from "../types/types";
import { useEntries } from "../hooks/useEntries";

interface props {
    onAdd: (entry: {title: string, content: string}) => void;
}
export default function EntryForm({onAdd}: props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await onAdd({title, content});
            setTitle("");
            setContent("");
        } catch {
            alert("Failed to add entry")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter title.."
            required
            />
            <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Write journal entry.."
            required
            />
            <button type="submit">Add Entry</button>
        </form>

    )

}