import React, { useEffect, useState } from "react";
import BoardPoint from "../../utility/game/classes/Point";

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
        <div style={{ border: "1px solid #000", display: "grid", placeItems: "center", ...style }} onClick={placeSign}>
            {sign}
        </div>
    );
}
