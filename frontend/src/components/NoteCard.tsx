import { Pencil, Trash2, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import axios from "axios";

interface Note {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface NoteCardProps {
  note: Note;
  onDelete: () => void;
}

const NoteCard = ({ note, onDelete }: NoteCardProps) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/notes/${note._id}`);
      onDelete();
    } catch (error) {
      console.log("Error occurred while deleting the note: ", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return "Just now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
      });
    }
  };

  const formatFullDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isUpdated = note.createdAt !== note.updatedAt;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title and Description */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-foreground leading-tight line-clamp-2">
              {note.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {note.description}
            </p>
          </div>

          {/* Date Information */}
          <div className="space-y-2 text-xs text-muted-foreground">
            <div
              className="flex items-center gap-1.5"
              title={formatFullDate(note.createdAt)}
            >
              <Calendar className="h-3 w-3" />
              <span>Created {formatDate(note.createdAt)}</span>
            </div>
            {isUpdated && (
              <div
                className="flex items-center gap-1.5"
                title={formatFullDate(note.updatedAt)}
              >
                <Clock className="h-3 w-3" />
                <span>Updated {formatDate(note.updatedAt)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/edit/${note._id}`)}
            className="h-8 w-8 p-0 hover:bg-muted"
          >
            <Pencil className="h-4 w-4" />
            <span className="sr-only">Edit note</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete note</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
