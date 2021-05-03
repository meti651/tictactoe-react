import React, { useEffect, useState } from "react";
import BoardPoint from "../../utility/game/classes/Point";

import * as Styles from "./Cell.module.scss";

export default function Cell({ value, rowIndex, columnIndex, style, playerMove, playerSign, isGameRunning }) {
    const [sign, setSign] = useState("");

    const placeSign = () => {
        if (!sign && isGameRunning) {
            setSign(playerSign);
            playerMove(new BoardPoint(rowIndex, columnIndex));
        }
    };

    useEffect(() => {
        setSign(value ? value : "");
    }, [value]);

    return (
        <div className={`${Styles.container} ${sign && Styles.occupied}`} style={{ ...style }} onClick={placeSign}>
            {sign}
        </div>
    );
}
