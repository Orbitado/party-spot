import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MainErrorBoundary from '@/shared/components/errors/main';

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={MainErrorBoundary}>{children}</ErrorBoundary>
    </Suspense>
  );
}

export default AppProvider;
