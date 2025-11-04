import { Routes, Route } from "react-router-dom";
import JournalPage from "./pages/JournalPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
    </Routes>
  );
}
