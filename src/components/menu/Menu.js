import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu({ players, setPlayers, height, setHeight, width, setWidth }) {
    const handlePlayerPropChange = (event, index) => {
        const property = event.target.getAttribute("name");
        setPlayers((currentPlayers) =>
            currentPlayers.map((player, currentIndex) =>
                currentIndex === index ? { ...player, [property]: event.target.value } : player
            )
        );
    };

    return (
        <div>
            <div>
                <h2>Players:</h2>
                <ul>
                    {players &&
                        players.map((player, index) => (
                            <li key={`Player_${index}`}>
                                <h4>Player {index + 1}:</h4>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={player.name}
                                    onChange={(event) => handlePlayerPropChange(event, index)}
                                />
                                <label htmlFor="sign">Sign:</label>
                                <input
                                    type="text"
                                    name="sign"
                                    value={player.sign}
                                    onChange={(event) => handlePlayerPropChange(event, index)}
                                />
                            </li>
                        ))}
                </ul>
                <div>
                    <h2>Set board size:</h2>
                    <label htmlFor="height">Height</label>
                    <input
                        name="height"
                        type="number"
                        value={height}
                        onChange={({ target }) => setHeight(() => +target.value)}
                    />
                    <label htmlFor="width">Width</label>
                    <input
                        name="width"
                        type="number"
                        value={width}
                        onChange={({ target }) => setWidth(() => +target.value)}
                    />
                </div>
                <Link to="/board">Play</Link>
            </div>
        </div>
    );
}
