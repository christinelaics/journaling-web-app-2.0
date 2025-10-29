import React from "react";
import EntryList from "./components/EntryList";
import EntryForm from "./components/EntryForm";
import { useEntries } from "./hooks/useEntries";

export default function App() {
  const {entries, setEntries, loading, error} = useEntries();

  const handleAdd = (newEntry: typeof entries[0]) => {
    setEntries([newEntry, ...entries]);
  };

  if (loading) return <h1>...loading</h1>
  if (error) return <h1>Error: {error}</h1>

  return (
    <div>
      <EntryForm onAdd={handleAdd}/>
      <EntryList entries={entries}/>
    </div>
  )
}