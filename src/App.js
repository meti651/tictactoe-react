import "./App.css";
import Board from "./components/game/Board";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./components/menu/Menu";
import { Player, PlayersArray } from "./utility/game/classes/Players";
import { useState } from "react";

function App() {
    const [players, setPlayers] = useState(new PlayersArray(new Player("Player 1", "X"), new Player("Player 2", "O")));
    const [height, setHeight] = useState(10);
    const [width, setWidth] = useState(10);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Menu
                            players={players}
                            setPlayers={setPlayers}
                            height={height}
                            setHeight={setHeight}
                            width={width}
                            setWidth={setWidth}
                        />
                    </Route>
                    <Route path="/board">
                        <Board players={players} height={height} width={width} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
