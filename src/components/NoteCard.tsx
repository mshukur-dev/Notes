import type { Note } from "@/types/note";

const NoteCard = ({ content, color, date }: Note) => {
    return (
        <div
            className={`min-h-[260px] max-w-[280px] flex flex-col justify-between ${color} p-6 rounded-[10px] break-words`}
        >
            <h3 className="font-medium">{content}</h3>
            <p className="text-[16px]">
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
