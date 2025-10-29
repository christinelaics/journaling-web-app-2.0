import { useState } from "react";
import type { Entry } from "../types/types";

interface props {
    onAdd: (entry: Entry) => void
}
export default function EntryForm({onAdd}: props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/entries", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, content})
        });
        if (!res.ok) return alert("Failed to create entry");
        const data = await res.json();
        onAdd(data);
        setTitle("");
        setContent("")
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