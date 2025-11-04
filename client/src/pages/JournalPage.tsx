import EntryList from "../components/EntryList";
import EntryContent from "../components/EntryContent";
import { useEntriesContext } from "../context/EntriesContext";
import EntryForm from "../components/EntryForm";

export default function JournalPage() {
  const { isAddingEntry, addEntry, deleteEntry, selectedEntryId } =
    useEntriesContext();
  return (
    <div className="flex h-screen">
      <div className="w-[250px] min-w-[200px] border-r p-2 overflow-y-auto">
        <EntryList />
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        {isAddingEntry && !selectedEntryId ? (
          <EntryForm onAdd={addEntry} />
        ) : (
          <EntryContent onDelete={deleteEntry} />
        )}
      </div>
    </div>
  );
}
