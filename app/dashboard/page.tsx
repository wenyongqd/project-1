import { Suspense } from 'react';
import DashboardLoading from './loading';

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Dashboard Home</h2>
        <p>Welcome to your dashboard!</p>
        <div className="text-muted-foreground">
          <p>Navigate to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>/dashboard/analytics - Nested route</li>
            <li>/dashboard/settings - Dynamic segment (next exercise)</li>
          </ul>
        </div>
      </div>
    </Suspense>
  );
}
