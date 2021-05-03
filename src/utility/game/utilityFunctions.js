import BoardPoint from "./classes/Point";

/**
 * Checks if there are 5 signs in the same lign in the board.
 *
 * @param {Array[Array]} board a 2 dimensional array that represents the board state.
 * @param {BoardPoint} startingPoint the object representing the starting coordinate of the check.
 * @param {String} sign a simple string that we search in the board.
 * @returns {Boolean} true if there are 5 sign in the given direction, other ways false.
 */
export const checkWin = (board, startingPoint, sign) => {
    for (let xModifier = -1; xModifier <= 0; xModifier++) {
        for (let yModifier = -1; yModifier <= 1; yModifier++) {
            if (xModifier === 0 && yModifier === 0) {
                return null; // if the function reaches this point, there is no 5 matching signs
            }

            let inLineCells = [];
            const currentPoint = new BoardPoint(startingPoint.x, startingPoint.y);

            let isInBoard = currentPoint.x >= 0 && currentPoint.x < board.length;
            while (isInBoard && board[currentPoint.x][currentPoint.y] === sign) {
                inLineCells.push(new BoardPoint(currentPoint.x, currentPoint.y));
                currentPoint.x += xModifier;
                currentPoint.y += yModifier;
                isInBoard = currentPoint.x >= 0 && currentPoint.x < board.length;
            }

            currentPoint.x = startingPoint.x - xModifier;
            currentPoint.y = startingPoint.y - yModifier;

            isInBoard = currentPoint.x >= 0 && currentPoint.x < board.length;
            while (isInBoard && board[currentPoint.x][currentPoint.y] === sign) {
                inLineCells.push(new BoardPoint(currentPoint.x, currentPoint.y));
                currentPoint.x -= xModifier;
                currentPoint.y -= yModifier;
                isInBoard = currentPoint.x >= 0 && currentPoint.x < board.length;
            }
            if (inLineCells.length >= 5) {
                return inLineCells;
            }
        }
    }

    return null;
};

/**
 * Creates a 2 dimensional array full of null values.
 *
 * @param {Number} height a whole number describing how much rows the matrix have
 * @param {Number} width a whole number describing how much columns the matrix have
 * @returns {Array} a 2 dimensional array full of null values
 */
export const initializeMatrix = (height, width) => Array.from({ length: height }, () => Array(width).fill(null));
