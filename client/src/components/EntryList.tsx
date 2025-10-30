import type { Entry } from "../types/types";
import EntryContent from "./EntryContent";

interface props {
    entries: Entry[];
    onDelete: (id: string) => void;
    onUpdate: (id: string, updates:{title:string, content: string}) => void;
}

export default function EntryList({entries, onUpdate, onDelete}: props) {
    
    if (entries.length === 0) return <p>No journal entries yet</p>
    return (
        <div>
            {entries.map((entry) => (
                <EntryContent key={entry._id} entry={entry} onDelete={onDelete} onUpdate={onUpdate}/>
            ))}
        </div>
    )

}