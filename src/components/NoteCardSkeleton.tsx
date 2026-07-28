import { Skeleton } from "./ui/skeleton";

const NoteCardSkeleton = () => {
    return (
        <Skeleton
            className={`min-h-[260px] w-[280px] p-6 rounded-[10px] flex flex-col justify-between`}
        >
            <div className="flex flex-col gap-4">
                <Skeleton className="w-full h-4 bg-gray-200" />
                <Skeleton className="w-3/4 h-4 bg-gray-200" />
                <Skeleton className="w-2/4 h-4 bg-gray-200" />
            </div>
            <Skeleton className="w-20 h-4 bg-gray-200" />
        </Skeleton>
    );
};

export default NoteCardSkeleton;
