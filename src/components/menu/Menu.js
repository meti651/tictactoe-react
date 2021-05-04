import React from "react";
import { Link } from "react-router-dom";
import { PlayersArray } from "../../utility/game/classes/Players";

import * as Styles from "./Menu.module.scss";

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
        <div id={Styles.container}>
            <div id={Styles.wrapper}>
                <h2>Players:</h2>
                <ul>
                    {players &&
                        players.map((player, index) => (
                            <li key={`Player_${index}`}>
                                <div className={Styles.title}>
                                    <h4>Player {index + 1}</h4>
                                    <div>
                                        <button onClick={() => deletePlayer(index)} disabled={players.length < 3}>
                                            &#10006;
                                        </button>
                                    </div>
                                </div>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={player.name}
                                        onChange={(event) => handlePlayerPropChange(event, index)}
                                        autoComplete="off"
                                    />
                                    <label htmlFor="sign">Sign</label>
                                    <input
                                        type="text"
                                        name="sign"
                                        value={player.sign}
                                        onChange={(event) => handlePlayerPropChange(event, index)}
                                        autoComplete="off"
                                        maxLength="1"
                                    />
                                </form>
                            </li>
                        ))}
                </ul>
                <div id={Styles.add_player}>
                    <button onClick={addPlayer}>
                        <i className="fa fa-plus"></i> Add player
                    </button>
                </div>
                <div id={Styles.board_config}>
                    <h2>Set board size</h2>
                    <div id={Styles.size}>
                        <div>
                            <label htmlFor="height">Height</label>
                            <input
                                name="height"
                                type="number"
                                value={heightState.height}
                                onChange={({ target }) => heightState.setHeight(() => +target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="width">Width</label>
                            <input
                                name="width"
                                type="number"
                                value={widthState.width}
                                onChange={({ target }) => widthState.setWidth(() => +target.value)}
                            />
                        </div>
                    </div>
                </div>
                <Link to="/board" id={Styles.play}>
                    Play
                </Link>
            </div>
        </div>
    );
}
