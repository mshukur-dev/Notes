export type NoteColor =
    | "bg-note-green"
    | "bg-note-yellow"
    | "bg-note-lilac"
    | "bg-note-orange"
    | "bg-note-cyan";

export type Note = {
    id: number;
    content: string;
    date: string;
    color: NoteColor;
};
