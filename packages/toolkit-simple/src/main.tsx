import { createRoot } from 'react-dom/client'

import App from './App'

const render = () => {
    createRoot(document.querySelector("#root")!).render(<App />)
}

render();
