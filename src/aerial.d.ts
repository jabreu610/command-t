declare module '*aerial.json' {
  const content: {
    success: number;
    data: {
      name: string;
      screensavers: {
        indentifier: string;
        timedCaptions: {
          [key: number]: string;
        };
        urls: {
          h264: string;
          [key: string]: string;
        };
      }[];
    }[];
  };
  export default content;
}
