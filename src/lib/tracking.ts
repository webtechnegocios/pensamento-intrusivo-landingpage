// Tracking utilities for Facebook Pixel, Google Analytics, and Google Ads

import { trackingConfig } from '@/config/tracking.config';

// Extend Window interface for tracking scripts
/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// Configuration - usa arquivo commitável ou fallback para .env
const config = {
  gaId: trackingConfig.gaId || import.meta.env.VITE_GA_MEASUREMENT_ID,
  googleAdsId: trackingConfig.googleAdsId || import.meta.env.VITE_GOOGLE_ADS_ID,
  googleAdsConversionLabel: trackingConfig.googleAdsConversionLabel || import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL,
  fbPixelId: trackingConfig.fbPixelId || import.meta.env.VITE_FACEBOOK_PIXEL_ID,
  enabled: trackingConfig.enabled ?? (import.meta.env.VITE_ENABLE_TRACKING === 'true'),
};

// Initialize Google Analytics
export const initGA = () => {
  if (!config.enabled || !config.gaId) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // Google Tag Manager official snippet - uses 'arguments'
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', config.gaId);

  console.log('Google Analytics initialized:', config.gaId);
};

// Initialize Google Ads
export const initGoogleAds = () => {
  if (!config.enabled || !config.googleAdsId) return;

  window.gtag('config', config.googleAdsId);
  console.log('Google Ads initialized:', config.googleAdsId);
};

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (!config.enabled || !config.fbPixelId) return;

  // Facebook Pixel Code (official snippet from Facebook)
  /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-expressions, prefer-rest-params, prefer-spread */
  !(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );
  /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-expressions, prefer-rest-params, prefer-spread */

  window.fbq('init', config.fbPixelId);
  window.fbq('track', 'PageView');

  console.log('Facebook Pixel initialized:', config.fbPixelId);
};

// Track events

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (!config.enabled) return;

  // Google Analytics
  if (config.gaId && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }

  // Facebook Pixel
  if (config.fbPixelId && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) => {
  if (!config.enabled) return;

  // Google Analytics
  if (config.gaId && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }

  console.log('Event tracked:', eventName, eventParams);
};

// Conversion events

export const trackPurchase = (value: number, currency: string = 'BRL') => {
  if (!config.enabled) return;

  // Google Analytics
  if (config.gaId && window.gtag) {
    window.gtag('event', 'purchase', {
      value: value,
      currency: currency,
      transaction_id: `${Date.now()}`,
    });
  }

  // Google Ads Conversion
  if (config.googleAdsId && config.googleAdsConversionLabel && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${config.googleAdsId}/${config.googleAdsConversionLabel}`,
      value: value,
      currency: currency,
    });
  }

  // Facebook Pixel
  if (config.fbPixelId && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
    });
  }

  console.log('Purchase tracked:', value, currency);
};

export const trackInitiateCheckout = () => {
  if (!config.enabled) return;

  // Google Analytics
  if (config.gaId && window.gtag) {
    window.gtag('event', 'begin_checkout');
  }

  // Facebook Pixel
  if (config.fbPixelId && window.fbq) {
    window.fbq('track', 'InitiateCheckout');
  }

  console.log('InitiateCheckout tracked');
};

export const trackAddToCart = (value: number, currency: string = 'BRL') => {
  if (!config.enabled) return;

  // Google Analytics
  if (config.gaId && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      value: value,
      currency: currency,
    });
  }

  // Facebook Pixel
  if (config.fbPixelId && window.fbq) {
    window.fbq('track', 'AddToCart', {
      value: value,
      currency: currency,
    });
  }

  console.log('AddToCart tracked:', value, currency);
};

export const trackLead = () => {
  if (!config.enabled) return;

  // Google Analytics
  if (config.gaId && window.gtag) {
    window.gtag('event', 'generate_lead');
  }

  // Facebook Pixel
  if (config.fbPixelId && window.fbq) {
    window.fbq('track', 'Lead');
  }

  console.log('Lead tracked');
};

export const trackViewContent = (contentName: string, contentCategory?: string) => {
  if (!config.enabled) return;

  // Google Analytics
  if (config.gaId && window.gtag) {
    window.gtag('event', 'view_item', {
      item_name: contentName,
      item_category: contentCategory,
    });
  }

  // Facebook Pixel
  if (config.fbPixelId && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      content_category: contentCategory,
    });
  }

  console.log('ViewContent tracked:', contentName, contentCategory);
};

// Initialize all tracking
export const initTracking = () => {
  initGA();
  initGoogleAds();
  initFacebookPixel();
};
