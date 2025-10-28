import type { Entry } from "../types/types";

interface props {
  entry: Entry;
}

export default function EntryContent({ entry }: props) {
  return (
    <div>
      <h3>{entry.title}</h3>
      <p>{entry.content}</p>
    </div>
  );
}
