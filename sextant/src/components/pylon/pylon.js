import * as React from 'react';
const W3CWebSocket = require('websocket').w3cwebsocket;


/**
 *
 * @return {ReactDOM}
 */
export default function PylonDisplay() {
  const client = new W3CWebSocket('ws://localhost:55455', '');

  client.onerror = function() {
    console.log('Connection Error');
  };

  client.onopen = function() {
    console.log('WebSocket Client Connected');
  };

  client.onclose = function() {
    console.log('echo-protocol Client Closed');
  };

  client.onmessage = function(e) {
    if (typeof e.data === 'string') {
      // console.log('Received: ' + e.data );
      // const now = new Date();
      // console.log('Now: ' + now);
      // const dif = ((new Date()) - e.data);
      // console.log(dif);
      setPing((new Date()) - e.data);
    }
  };

  const [latency, setPing] = React.useState();
  // React.useEffect(() => {

  // });
  return (
    <div>
      {latency + 'ms'}
    </div>
  );
}
