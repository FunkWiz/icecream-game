import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CountdownWrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
position:relative;
z-index:220;
span {
    font-size:60px;
    color:#fff;
    font-weight:700;
}
`;

const PreGame = ({ onNext }) => {
    const [time, setTime] = useState(5);

    useEffect(() => {
        let cancel = false;
        setTimeout(() => {
            if (cancel) return;
            if (isNaN(time)) {
                onNext('game');
                return;
            }
            setTime(time === 1 ? 'SAVE THE WORLD' : time - 1);
        }, 1000);
        return () => {
            cancel = true;
        }
    }, [time])
    return (
        <CountdownWrapper>
            <span>{time}</span>
        </CountdownWrapper>
    )
}

export default PreGame;