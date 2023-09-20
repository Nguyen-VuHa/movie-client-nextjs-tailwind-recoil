"use client"

import React, { useEffect } from 'react';

const Chatwoot = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://skychat.juloomob.net/cable');

    // WebSocket event listeners
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);

      // You can send initial messages or perform other actions here.
    });

    socket.addEventListener('message', (event) => {
      console.log('Received message from WebSocket:', event.data);

      // Handle incoming WebSocket messages here.
    });

    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);

      // You can handle reconnection or other cleanup here if needed.
    });

    socket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);

      // Handle WebSocket errors here.
    });

    // Clean up WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, [])
  
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