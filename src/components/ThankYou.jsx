import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
padding:10px;
margin-top:75px;
color:#fff;
text-align:center;
position:relative;
z-index:200;
`;

const Disclaimer = styled.p`
font-size:30px;
`;

const ReplayButton = styled.button`
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

const ThankYou = ({ onNext }) => {
    const [decorated, setDecorated] = useState(true);

    useEffect(() => {
        let cancel = false;
        setTimeout(() => {
            if (cancel) return;
            setDecorated(!decorated)
        }, 500);

        return () => {
            cancel = true;
        }
    }, [decorated])
    return (
        <Container>
            <Disclaimer>
                Thank you for signing the petition.
            </Disclaimer>
            <ReplayButton decorated={decorated} onClick={() => {
                onNext('preGame');
            }}>PLAY AGAIN</ReplayButton>
        </Container >
    )
}

export default ThankYou;