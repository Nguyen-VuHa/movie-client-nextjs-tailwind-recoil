"use client"

import React, { useEffect } from 'react';

const Chatwoot = () => {
  useEffect(() => {
    const BASE_URL = 'https://skychat.juloomob.net';
    const script = document.createElement('script');
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);

    script.onload = function () {
      window.chatwootSDK.run({
        websiteToken: 'guNSekbbQqKHgHVYvuEgNQC2',
        baseUrl: BASE_URL,
      });
    };
  }, []);

  return <div id="chatwoot-container"></div>;
};

export default Chatwoot;