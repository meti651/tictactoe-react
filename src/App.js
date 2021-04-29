import "./App.css";
import Board from "./components/game/Board";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./components/menu/Menu";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Menu />
                    </Route>
                    <Route path="/board">
                        <Board />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
