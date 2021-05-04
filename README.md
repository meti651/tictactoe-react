# Project overview

A tictactoe game. In the game you can add as many player as you want, you can set the board size. In the play phase there is a side menu where you can see which player is up to put its sign, a restart button and a quit button.

The restart button reset the board, the quit button redirect the page to the config page where you can modify the players amount, the players name and sign.

# Getting started

Clone the repository. After that in the project folder run the `npm install` command. It will install all the dependecies that you need.

After the installation run the `npm start` command, it will start the application in a new tab.

# Description

The project is made with React.js. 

The `App.js` file setup the routing, and the `components` folder contains the components.

The `utility` folder contains classes for the purpose of better readability and utility functions for checking the win condition and initializing a matrix.

The `components` folder has components for the `Menu`, `Board` and `Cell`.

The `Menu` component is responsible for settuping the board, it is the landing page component.

The `Board` component is responsible for driving the game. It renders the cell, check whether one player wins by placing 5 adjacent signs after a move, change players. There is a possibility to play in teams. The players could have the same signs and the win condition is to have 5 of the same sign adjacent to eachother.

The `Cell` component is just the representation of one cell of the board, it just run the `playerMove` function, and change the sign in its content.