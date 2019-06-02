import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CountdownWrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
text-align:center;
padding:10px;
span {
    font-size:20px;
    color:#fff;
    font-weight:700;
}
`;


const GameHeading = ({ score, gameTime = 45, onFinish }) => {
    const [time, setTime] = useState(gameTime);
    const [tick, setTick] = useState(0);
    useEffect(() => {
        let cancel = false;
        setTimeout(() => {
            if (cancel) return;
            if (time === 0) {
                onFinish();
                return;
            }
            setTime(time - 1);
            setTick(tick + 1);
        }, 1000);
        return () => {
            cancel = true;
        }
    }, [time, tick])
    const _timeDisplay = time >= 10 ? `00:${time}` : `00:0${time}`;


    return (
        <>
            <CountdownWrapper>
                <span>{score}</span>
                <span>{_timeDisplay}</span>
            </CountdownWrapper>
        </>
    )
}
export default GameHeading;