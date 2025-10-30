import { useEffect } from 'react';
import { initTracking } from '@/lib/tracking';

/**
 * Component to initialize all tracking scripts
 * Place this component in your App.tsx or main layout
 */
export const TrackingScripts = () => {
  useEffect(() => {
    // Initialize all tracking scripts on mount
    initTracking();
  }, []);

  return null; // This component doesn't render anything
};
