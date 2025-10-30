import { useEffect } from 'react';
import {
  trackEvent,
  trackPurchase,
  trackInitiateCheckout,
  trackAddToCart,
  trackLead,
  trackViewContent,
} from '@/lib/tracking';

export const useTracking = () => {
  return {
    trackEvent,
    trackPurchase,
    trackInitiateCheckout,
    trackAddToCart,
    trackLead,
    trackViewContent,
  };
};

// Hook to track page views automatically
export const usePageTracking = (pageName: string, pageCategory?: string) => {
  useEffect(() => {
    trackViewContent(pageName, pageCategory);
  }, [pageName, pageCategory]);
};
