export class PlayersArray extends Array {
    /**
     * Get's the next playey in the list. If the current player is the last player, it returns the first player.
     * @param {Player} currentPlayer The player we want the player after.
     * @returns {Player}
     */
    getNextPlayer(currentPlayer) {
        const currentIndex = this.findIndex((player) => player.name === currentPlayer.name);
        const nextPlayerIndex = currentIndex + 1 === this.length ? 0 : currentIndex + 1;
        return this.find((player, index) => index === nextPlayerIndex);
    }
}

/**
 * The player object
 */
export class Player {
    /**
     *
     * @param {String} name a string describing the player name
     * @param {String} sign a string describing the player sign which he/she will play with
     */
    constructor(name, sign) {
        this.name = name;
        this.sign = sign;
    }
}
