import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
position:relative;
z-index:300;
`

const StartButton = styled.button`
appearance:none;
border:0;
padding:0;
margin:0;
background:none;
outline:none;
color:#fff;
font-size:50px;
font-weight:700;
font-family:monospace;
width:100%;

text-decoration:${props => props.decorated ? 'underline' : 'none'};
`;

const Start = ({ onNext }) => {
    const [decorated, setDecorated] = useState(true);

    useEffect(() => {
        let cancel = false;
        setTimeout(() => {
            if(cancel) return;
            setDecorated(!decorated)
        }, 500);

        return () => {
            cancel = true;
        }
    }, [decorated])

    return (
        <Container>
            <StartButton decorated={decorated} onClick={() => onNext('preGame')}>START GAME</StartButton>
        </Container>
    )
}

export default Start;