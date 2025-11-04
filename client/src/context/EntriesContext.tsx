import { createContext, useContext, useState } from "react";
import { useEntries } from "../hooks/useEntries";
import type { Entry } from "../types/types";

// Define the type
interface EntriesContextType {
  entries: Entry[];
  loading: boolean;
  error: string | null;
  addEntry: (data: { title: string; content: string }) => Promise<void>;
  updateEntry: (
    id: string,
    data: { title: string; content: string }
  ) => Promise<void>;
  deleteEntry: (id: string) => Promise<void>;
  selectedEntryId: string | null;
  setSelectedEntryId: React.Dispatch<React.SetStateAction<string | null>>;
  isAddingEntry: boolean;
  setIsAddingEntry: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const EntriesContext = createContext<EntriesContextType | null>(null);

export function EntriesProvider({ children }: { children: React.ReactNode }) {
  const entriesState = useEntries();
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  return (
    <EntriesContext.Provider
      value={{ ...entriesState, selectedEntryId, setSelectedEntryId, isAddingEntry, setIsAddingEntry}}
    >
      {children}
    </EntriesContext.Provider>
  );
}

export function useEntriesContext() {
  const context = useContext(EntriesContext);
  if (!context) {
    throw new Error("useEntriesContext must be used within EntriesProvider");
  }
  return context;
}
