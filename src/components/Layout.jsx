import React from "react";
import styled from 'styled-components';
import Logo from "./Logo";
import coneImg from "../static/landing-cone.gif";
import pngImg from "../static/sun.png";

const Container = styled.div`
height:100vh;
position:relative;
overflow:hidden;
`;

const Cone = styled.div`
position:absolute;
bottom:-3px;
left:10px;
width: 148px;
img {
    max-width:100%;
}
transform:${props => props.show ? 'translate3d(0, 0, 0)' : 'translate3d(0, 200px, 0)'};
transition: transform 1.5s;
`;

const Sun = styled.div`
position:absolute;
bottom:0;
right:0;
width: 500px;
img {
    max-width:100%;
}
transform:${props => props.show ? 'translate3d(190px,0,0) rotate(91deg)' : 'translate3d(390px,0,0) rotate(91deg)'};
transition: transform 1.5s;
`;

const Credit = styled.span`
position:absolute;
bottom:5px;
left:0;
right:0;
text-align:center;
color:#fff;
font-size:16px;
`

export default ({ children, showDecorations }) => (
    <Container>
        <Logo />
        <>
            {children}
        </>
        <Cone show={showDecorations}>
            <img src={coneImg} />
        </Cone>
        <Sun show={showDecorations}>
            <img src={pngImg} />
        </Sun>
        {/* <Credit>&#9400;{' '}טל פרלשטיין ומאור עוז </Credit> */}
    </Container>
)