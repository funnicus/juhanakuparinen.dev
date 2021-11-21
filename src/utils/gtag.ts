/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Helper functions for Google Analytics
 * https://hoangtrinhj.com/using-google-analytics-with-next-js
 */

export const GA_TRACKING_ID = 'G-V1C3K6VP15'; // This is your GA Tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
 
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: any): void => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};