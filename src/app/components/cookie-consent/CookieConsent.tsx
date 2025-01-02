'use client'
import React from "react";
import CookieConsent from "react-cookie-consent";



const initializeAnalytics = () => {
    // Check if gtag is already loaded to avoid duplication
    if (!window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-6VML0J9EQ0`;
      document.head.appendChild(script);
  
      script.onload = () => {
        // Initialize gtag once the script is loaded
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag() {
          (window as any).dataLayer.push(arguments);
        }
        (window as any).gtag = gtag;
  
        (window as any).gtag("js", new Date());
        (window as any).gtag("config", "G-6VML0J9EQ0"); // Replace with your Google Analytics ID
        (window as any).gtag('config', 'AW-16749609188');
        console.log("Google Analytics initialized");
      };
    } else {
      console.log("Google Analytics already initialized");
    }
  };

  const disableAnalytics = () => {
    if (window.gtag) {
      window.gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
      console.log("Google Analytics tracking disabled");
    }
  
    // Optionally remove the gtag script
    const script = document.querySelector(
      'script[src*="googletagmanager.com/gtag/js"]'
    );
    if (script) {
      script.remove();
      console.log("Google Analytics script removed");
    }
  };
  
const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="yourAppCookieConsent"
      style={{ background: "#2B373B", color: "#FFF" }}
      buttonStyle={{ backgroundColor: "#4CAF50", color: "#FFF", fontSize: "14px" }}
      declineButtonStyle={{ backgroundColor: "#f44336", color: "#FFF", fontSize: "14px" }}
      expires={365}  // Number of days before the cookie expires
      onAccept={() => {
        // 1. Set consent status in local storage or cookie
        localStorage.setItem('cookieConsent', 'accepted');
        
        // 2. Initialize analytics and tracking services
        initializeAnalytics();  // e.g., Google Analytics
      
      }}
      onDecline={() => {
        
        localStorage.setItem('cookieConsent', 'declined');
  
        // 2. Disable analytics and tracking services
        disableAnalytics();
       
      }}
    >
      This website uses cookies to enhance your experience. By using our website, you consent to the use of cookies. 
      
    </CookieConsent>
  );
};

export default CookieConsentBanner;