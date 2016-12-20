const React = require('react');
const ReactDOM = require('react-dom');

const Invitation = require('./components/Invitation');
const ThemedParty = require('./components/ThemedDecorations');

ReactDOM.render(
  <div>
    <Invitation>Hey, you should totally come to this awesome party I'm throwing!</Invitation>
    <ThemedDecorations theme="heaven">
      <p>A decoration</p>
      <p>Some other decoration</p>
      <p>A last decoration</p>
    </ThemedDecorations>
    
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
