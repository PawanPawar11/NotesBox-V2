import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreateNote from "./pages/CreateNote";
import UpdateNote from "./pages/UpdateNote";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import { useDarkModeShortcut } from "@/hooks/useDarkModeShortcut";

const App = () => {
  useDarkModeShortcut();
  return (
    <ThemeProvider defaultTheme="system" storageKey="notes-app-theme">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/edit/:id" element={<UpdateNote />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
