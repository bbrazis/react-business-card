import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App () {
    return (
        <main className="app">
            <Info />
            <About />
            <Interests />
            <Footer />
        </main>
    )
}