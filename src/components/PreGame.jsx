import React, { useEffect, useState } from "react";
import styled from "styled-components";
import swipeImg from "../static/swipe.gif";
import Popsicle from "./Popsicle";
import { blue } from "../popsicles";

const CountdownWrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
position:relative;
z-index:220;
> span {
    font-size:60px;
    color:#fff;
    font-weight:700;
}
`;

const Instructions = styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
top:90px;
left:100px;
img {
    width:90px;
}
span {
    font-size:20px;
    color:#fff;
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
            setTime(time === 1 ? 'SAVE THE PLANET' : time - 1);
        }, 1000);
        return () => {
            cancel = true;
        }
    }, [time])
    return (
        <CountdownWrapper>
            <Popsicle speed={300} images={blue} disableTweaks className="mock-popsicle" />
            <Instructions>
                <span>Swipe the ice cream before it melts!</span>
                <img src={swipeImg} width="90" />
            </Instructions>
            <span>{time}</span>
        </CountdownWrapper>
    )
}

export default PreGame;