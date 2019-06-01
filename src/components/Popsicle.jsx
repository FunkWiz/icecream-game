import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable'

function getRandomPosition(element) {
    var x = document.body.offsetWidth - element.clientWidth;
    var y = document.body.offsetHeight - element.clientHeight - 90;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const PopsicleContainer = styled.div`
    opacity: ${props => props.isGone ? '0' : '1'};
    transition: opacity 2s, visibility 2s;
    position:absolute;
    top:0;
    left:0;
`;

const PopsicleImage = styled.img`
    width: ${props => `${props.width}`};
`;

const Popsicle = ({ images, index, delay = 0, speed = 150, onScore, disableTweaks = false, className = '' }) => {
    const [width, setWidth] = useState(disableTweaks ? 90 : getRandomArbitrary(120, 300));
    const popElement = useRef(null);
    const [start, setStart] = useState(false);
    const [frame, setFrame] = useState({
        idx: 0,
        value: images[0]
    });
    const [position, setPosition] = useState(disableTweaks ? {
        x: 0,
        y: 0
    } : {
            x: -1000,
            y: -1000
        });
    const [melted, setMelted] = useState(false);
    const [fixed, setFixed] = useState(false);
    const handleSwipe = eventData => {
        if (!start || fixed || melted || frame.idx >= 6) {
            return;
        }
        if (eventData.dir.toLowerCase() !== 'up') {
            return;
        }
        setFixed(true);
        onScore();
    }

    const handlers = useSwipeable({ onSwiped: handleSwipe })
    useEffect(() => {
        let cancel = false;
        if (popElement.current && position.x < 0 && !disableTweaks) {
            const [x, y] = getRandomPosition(popElement.current);
            setPosition({ x, y });
        }
        if (start) {
            return;
        }
        setTimeout(() => {
            if (cancel) return;
            setStart(true);
        }, delay);

        return () => {
            cancel = true;
        }
    }, [popElement]);

    useEffect(() => {
        let cancel = false;
        if (!start || position.x < 0) {
            return;
        }
        setTimeout(() => {
            if (fixed || melted || cancel) {
                return;
            }
            const newIdx = frame.idx + 1;
            if (newIdx >= images.length) {
                if (cancel) return;
                setMelted(true);
                return;
            }
            requestAnimationFrame(() => {
                if (fixed || melted || cancel) return;
                setFrame({
                    idx: newIdx,
                    value: images[newIdx]
                })
            })
        }, speed);

        return () => {
            cancel = true;
        }
    }, [frame, fixed, start, melted, position])

    return (
        <PopsicleContainer
            className={className}
            style={{
                zIndex: index,
                transform: `translate3d(${position.x}px, ${position.y}px ,0)`
            }}
            isGone={fixed}
            ref={popElement}
        >
            <PopsicleImage src={frame.value} {...handlers} width={width} />
        </PopsicleContainer>
    )
}

export default Popsicle;