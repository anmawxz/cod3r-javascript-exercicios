import React from 'react'
import ReactDOM from 'react-dom'

// ReactDOM.render(<h1>React 2</h1>, document.getElementById('root'))

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<h1>React 2</h1>);
