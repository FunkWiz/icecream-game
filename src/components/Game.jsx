import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Popsicle from "./Popsicle";
import { getRandom } from "../popsicles";
import GameHeading from "./GameHeading";

const mapPopsicle = popsicle => ({
    images: popsicle
});

const _getRandomPopsicle = () => mapPopsicle(getRandom());

const Container = styled.div`
overflow:hidden;
height:100%;
position:relative;
z-index:350;
`;

const GameContainer = styled.div`
height:100%;
width:100%;
overflow:hidden;
position:absolute;
top:0;
left:0;
z-index:100;
`;

const Game = ({ onNext }) => {
    const [score, setScore] = useState(0);
    const [popsicles, setPopsicles] = useState([_getRandomPopsicle()]);
    const [popTimeout, setPopTimeout] = useState(2000);
    const [speed, setSpeed] = useState(600);

    const handleFinish = useCallback(() => {
        onNext('end');
    }, [score]);

    const handleScore = useCallback(() => {
        setScore(score + 1);
    });

    useEffect(() => {
        let cancel = false;
        setTimeout(() => {
            if (cancel) return;
            setPopsicles([...popsicles, _getRandomPopsicle()]);
            if (popsicles.length % 4 === 0 && speed >= 220) {
                const newSpeed = speed - 100;
                setSpeed(newSpeed < 220 ? 220 : newSpeed);
            }

            if (popTimeout <= 300) {
                return;
            }
            if (popsicles.length % 2 !== 0) {
                return;
            }

            const newTimeout = popTimeout - 120;
            setPopTimeout(newTimeout < 300 ? 300 : newTimeout);
        }, popTimeout);
        return () => {
            cancel = true;
        }
    }, [popsicles]);

    return (
        <Container>
            <GameHeading
                score={score}
                onFinish={handleFinish}
            />
            <GameContainer>
                <PopsicleList
                    popsicles={popsicles}
                    speed={speed}
                    onScore={handleScore}
                />
            </GameContainer>
        </Container>
    )
}

const PopsicleListEl = styled.ul`
    display:flex;
    flex-wrap:wrap;
`;
const PopsicleList = ({ popsicles, speed, onScore }) => {
    return (
        <PopsicleListEl>
            {popsicles.map((p, idx) =>
                <Popsicle
                    {...p}
                    index={idx}
                    key={idx}
                    speed={speed}
                    onScore={onScore}
                />)}
        </PopsicleListEl>
    )
}

export default Game;