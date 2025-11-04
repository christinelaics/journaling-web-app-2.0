import { useState } from "react";
import type { Entry } from "../types/types";
import { useEntries } from "../hooks/useEntries";
import { useEntriesContext } from "../context/EntriesContext";

interface props {
  onAdd: (entry: { title: string; content: string }) => void;
}
export default function EntryForm({ onAdd}: props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {setIsAddingEntry} = useEntriesContext()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onAdd({ title, content });
      setTitle("");
      setContent("");
      setIsAddingEntry(false);

    } catch {
      alert("Failed to add entry");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title.."
        required
        className="w-full"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write journal entry.."
        required
        className="w-full h-65"
      />

      <button type="submit" className="self-start">
        Add Entry
      </button>
    </form>
  );
}
