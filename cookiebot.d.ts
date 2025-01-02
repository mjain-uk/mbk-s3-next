interface CookieConsent {
  consent: {
    statistics: boolean;
    marketing: boolean;
    preferences: boolean;
    necessary: boolean;
  };
}

interface Window {
  CookieConsent: CookieConsent;
}
declare function gtag(command: string, ...params: any[]): void;
