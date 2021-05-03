import React from "react";
import { Link } from "react-router-dom";
import { PlayersArray } from "../../utility/game/classes/Players";

export default function Menu({ players, setPlayers, heightState, widthState }) {
    const handlePlayerPropChange = (event, index) => {
        const property = event.target.getAttribute("name");
        setPlayers((currentPlayers) =>
            currentPlayers.map((player, currentIndex) =>
                currentIndex === index ? { ...player, [property]: event.target.value } : player
            )
        );
    };

    const addPlayer = () => {
        setPlayers((state) => new PlayersArray(...state, { name: `Player ${state.length + 1}`, sign: "L" }));
    };

    const deletePlayer = (index) => {
        const newPlayers = players.filter((player, playerIndex) => playerIndex !== index);
        setPlayers(new PlayersArray(...newPlayers));
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
                                <div>
                                    <button onClick={() => deletePlayer(index)} disabled={index < 2}>
                                        x
                                    </button>
                                </div>
                            </li>
                        ))}
                </ul>
                <div>
                    <button onClick={addPlayer}>+ Add player</button>
                </div>
                <div>
                    <h2>Set board size:</h2>
                    <label htmlFor="height">Height</label>
                    <input
                        name="height"
                        type="number"
                        value={heightState.height}
                        onChange={({ target }) => heightState.setHeight(() => +target.value)}
                    />
                    <label htmlFor="width">Width</label>
                    <input
                        name="width"
                        type="number"
                        value={widthState.width}
                        onChange={({ target }) => widthState.setWidth(() => +target.value)}
                    />
                </div>
                <Link to="/board">Play</Link>
            </div>
        </div>
    );
}
