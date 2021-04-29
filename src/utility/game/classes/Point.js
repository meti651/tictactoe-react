/**
 * A little help to create a coordinate for the board.
 */
export default class BoardPoint {
    /**
     *
     * @param {Number} x the number describing the row of the point.
     * @param {Number} y the number describing the column of the point
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `Row: ${this.x}, Column: ${this.y}`;
    }
}
