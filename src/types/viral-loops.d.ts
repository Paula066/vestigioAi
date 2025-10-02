// Type declarations for Viral Loops Widgets V2 custom elements so TSX accepts them
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'form-widget': any;
      'rewards-widget': any;
      'referral-count-widget': any;
      'referral-url-widget': any;
      'sharing-options-widget': any;
      [elemName: string]: any;
    }
  }
}

export {};


