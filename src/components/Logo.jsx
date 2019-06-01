import React from "react";
import styled from "styled-components";
import logoImg from "../static/logo.png";

const LogoContainer = styled.div`
width:250px;
margin: 0 auto;
img {
    max-width:100%;
}
position:absolute;
top:10px;
left:0;
right:0;
`
export default () => (
    <LogoContainer>
        <img src={logoImg} />
    </LogoContainer>
);