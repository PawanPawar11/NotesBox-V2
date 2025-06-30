import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { ThemeToggle } from "./theme-toggle";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
              Notes
            </h1>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/create">
              <Button
                size="icon"
                className="h-10 w-10 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Create new note</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
