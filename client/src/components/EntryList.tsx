import type { Entry } from "../types/types";
import EntryContent from "./EntryContent";

interface props {
    entries: Entry[];
}

export default function EntryList({entries}: props) {
    if (entries.length === 0) return <p>No journal entries yet</p>
    return (
        <div>
            {entries.map((entry) => (
                <EntryContent key={entry._id} entry={entry}/>
            ))}
        </div>
    )

}