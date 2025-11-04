import { useEntriesContext } from "../context/EntriesContext";

export default function EntryList() {
  const { entries, selectedEntryId, setSelectedEntryId, setIsAddingEntry } = useEntriesContext();
  const handleNewEntry = () => {
    setIsAddingEntry(true);
    setSelectedEntryId(null)
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2>Journal Entries</h2>
        <button onClick={handleNewEntry}>+ New</button>
      </div>

      {entries.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li
              key={entry._id}
              onClick={() => setSelectedEntryId(entry._id)}
              className={` ${
                selectedEntryId === entry._id ? "border-1 rounded-md" : ""
              }`}
            >
              <div className="p-2">
                <h3 className="font-bold">{entry.title}</h3>
                <p>
                  {entry.content.slice(0, entry.content.lastIndexOf(" ", 25))}
                  ...
                </p>
                <span>{entry.createdAt.split("T")[0]}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
