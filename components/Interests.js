import React from 'react'
import ArrowLeft from '../icons/Arrow-left'

export default function Interests() {
    return (
        <div className="content-wrapper">
            <h2>Interests</h2>
            <p>Music enthusiast. Video gamer. Eater of food. Enjoyer of books. Cold Brew loyalist. Devourer of sweets.</p>
            <details name="interests">
                <summary>
                    <h3>Book Series</h3>
                    <ArrowLeft />
                </summary>
                <div className="description-wrapper">
                    <ul>
                        <li>The Cosmere novels</li>
                        <li>The Wheel of Time</li>
                        <li>The Dresden Files</li>
                        <li>The Black Tower series</li>
                    </ul>
                </div>
            </details>
            <details name="interests">
                <summary>
                    <h3>Current Games</h3>
                    <ArrowLeft />
                </summary>
                <div className="description-wrapper">
                    <ul>
                        <li>Diablo 4</li>
                        <li>Balatro</li>
                        <li>Baldur's Gate 3</li>
                        <li>Alan Wake 2</li>
                        <li>Helldivers 2</li>
                    </ul>
                </div>
            </details>
        </div>
    )
}