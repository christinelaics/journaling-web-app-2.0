import React from "react";
import EntryList from "./components/EntryList";
import { useEntries } from "./hooks/useEntries";

export default function App() {
  const {entries, setEntries, loading, error} = useEntries();

  return (
    <div>
      <EntryList entries={entries}/>
    </div>
  )
}