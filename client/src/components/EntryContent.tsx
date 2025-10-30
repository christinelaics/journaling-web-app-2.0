import type { Entry } from "../types/types";

interface props {
  entry: Entry;
  onDelete: (id: string) => void;
  onUpdate: (id: string, update: {title: string, content: string}) => void;
}

export default function EntryContent({ entry, onDelete, onUpdate }: props) {
  return (
    <div>
      <h3>{entry.title}</h3>
      <p>{entry.content}</p>
      <button onClick={() => onDelete(entry._id)}>Delete</button>
    </div>
  );
}
