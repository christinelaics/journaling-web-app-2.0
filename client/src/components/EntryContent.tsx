import { useEffect } from "react";
import { useEntriesContext } from "../context/EntriesContext";
import EntryForm from "./EntryForm";

interface props {
    onDelete: (id: string) => void;
}

export default function EntryContent({onDelete}: props) {
    const {entries, selectedEntryId, setSelectedEntryId} = useEntriesContext()
    
    useEffect(() => {
        if (entries.length && !selectedEntryId) {
            const lastEntry = entries[0];
            setSelectedEntryId(lastEntry._id);
   
        }
    }, [entries]);

    const entry = entries.find(e => e._id === selectedEntryId);
    if (!entry) return <p>Add a new Entry</p>

    return (
        <div>
            <button onClick={() => onDelete(entry._id)}>Delete</button>
            <h2 className="text-xl py-4">{entry.title}</h2>
            <p className="whitespace-pre-wrap text-lg">{entry.content}</p>
        </div>
    )
}