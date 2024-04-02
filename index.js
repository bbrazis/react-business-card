import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const root = document.getElementById('root')

ReactDOM.render(<App />, root)


/* detect if using dark mode theme */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.querySelectorAll('.app')[0].classList.add('dark-mode')
}

/* watching for theme changes */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    
    if(newColorScheme === "dark") {
        root.querySelectorAll('.app')[0].classList.add('dark-mode')
    } else {
	    root.querySelectorAll('.app')[0].classList.remove('dark-mode')
    }
});