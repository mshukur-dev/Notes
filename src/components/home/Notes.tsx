import type { Note } from "@/types/note";

import NoteCard from "../NoteCard";
import { useEffect, useState } from "react";
import { api } from "@/api/axios";
import NoteCardSkeleton from "../NoteCardSkeleton";
import { Button } from "../ui/button";
const Notes = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    async function getData() {
        try {
            setError(null);
            setIsLoading(true);
            const { data } = await api.get("notes");
            setNotes(data);
        } catch (error) {
            setError("Не удалось загрузить заметки");
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="mt-12">
            <div className="flex flex-wrap max-mb:justify-center gap-9 items-stretch">
                {isLoading ? (
                    Array.from({ length: 10 }).map((_, i) => (
                        <NoteCardSkeleton key={i} />
                    ))
                ) : error !== null ? (
                    <div className="flex flex-col gap-3 items-start">
                        <h1 className="text-[24px]">{error}</h1>
                        <Button
                            onClick={getData}
                            variant="outline"
                            disabled={isLoading}
                            className={
                                "rounded-[5px] px-10 py-4.5 cursor-pointer text-[18px]"
                            }
                        >
                            Повторить
                        </Button>
                    </div>
                ) : notes.length > 0 ? (
                    notes.map((note) => <NoteCard key={note.id} {...note} />)
                ) : (
                    <h1>Заметок нет</h1>
                )}
            </div>
        </div>
    );
};

export default Notes;
