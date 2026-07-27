import type { Note } from "@/types/note";
import NoteCard from "../NoteCard";

const Notes = () => {
    const notes: Note[] = [
        {
            id: 1,
            content:
                "This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍",
            date: "2026-06-07",
            color: "bg-note-green",
        },
        {
            id: 2,
            content:
                "This is how a Note on Note.me looks like! Very simple, clean and asthetic!",
            date: "2026-06-07",
            color: "bg-note-yellow",
        },
        {
            id: 3,
            content: "This is how a Note on Note.me looks like!",
            date: "2026-07-27",
            color: "bg-note-lilac",
        },
    ];

    return (
        <div className="mt-12">
            <div className="flex flex-wrap max-mb:justify-center gap-9 items-stretch">
                {notes.length > 0 ? (
                    notes.map((note) => <NoteCard key={note.id} {...note} />)
                ) : (
                    <h1>Заметок нет</h1>
                )}
            </div>
        </div>
    );
};

export default Notes;
