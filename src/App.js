import React, { useRef } from 'react';
import './style.css';
const esfmt = require('esfmt/package/esfmt');

export default function App() {
  const code = useRef(
    esfmt.format(`   <div>
  <h1>Hello StackBlitz!</h1>
  <p>Start editing to see some magic happen :)</p>
</div>`)
  );
  return <pre>{code.current}</pre>;
}
