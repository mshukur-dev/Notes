import type { Note } from "@/types/note";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import { useClickOutside } from "@/hooks/useClickOutside";

const NoteCard = ({
    content,
    color,
    date,
    id,
    updateNote,
}: Note & { updateNote: (id: number, newText: string) => void }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const cardRef = useClickOutside(() => {
        if (inputRef.current) {
            const newText = inputRef.current?.value;
            updateNote(id, newText);
        }
        setIsEditing(false);
    });

    useEffect(() => {
        if (isEditing) {
            const length = inputRef.current?.value.length ?? 0;
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(length, length);
        }
    }, [isEditing]);

    return (
        <div
            ref={cardRef}
            className={`min-h-[260px] w-[280px] ${isEditing ? "shadow-lg" : ""} transition-shadow duration-400 flex flex-col justify-between ${color} p-5 rounded-[10px] break-words`}
        >
            {isEditing ? (
                <Textarea
                    className="border-none font-medium px-0 py-0 resize-none rounded-[10px] p-1"
                    defaultValue={content}
                    ref={inputRef}
                />
            ) : (
                <button
                    onClick={() => setIsEditing(true)}
                    className="font-medium p-1 text-left bg-transparent border-none w-full"
                >
                    {content}
                </button>
            )}

            <p className="text-[16px] p-1">
                {new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })}
            </p>
        </div>
    );
};

export default NoteCard;
