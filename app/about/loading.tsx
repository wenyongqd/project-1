import { Skeleton } from '@/components/ui/skeleton';

export default function AboutLoading() {
  return (
    <div className="p-6 space-y-4">
      {/* Title Skeleton */}
      <Skeleton className="h-8 w-[200px] mb-4" />
      
      {/* Content Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[70%]" />
      </div>
      
      {/* Additional Section Skeleton */}
      <div className="mt-8 space-y-4">
        <Skeleton className="h-6 w-[150px] mb-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
}
