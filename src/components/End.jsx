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
font-size:4vh;
span {
    display:inline-block;
    margin-top:20px;
    font-weight:700;
}
`;

const FormContainer = styled.div`
display:flex;
flex-direction:column;

input {
    outline:none;
    background:none;
    border:0;
    border-bottom:2px solid #fff;
    padding:10px;
    padding-top:0;
    max-width:400px;
    margin:0 auto 10px;
    color:#fff;
    font-size:18px;
    &::placeholder {
        color:#fff;
        opacity:.6;
    }
}

button {
    background:#fff;
    border:1px solid #fff;
    border-radius:50%;
    width:105px;
    height:105px;
    margin:0 auto;
    outline:none;
    color:#001a71;
    font-weight:700;
    font-size:20px;
}
`

const End = ({ onNext }) => {
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        if (email.length === 0) {
            return;
        }
        onNext('thankYou');
    }
    return (
        <Container>
            <Disclaimer>
                While you may have more shots in winning this game, <br />
                our planet only has ONE. <br />
                <span>Save the planet, sign the petition now.</span>
            </Disclaimer>
            <FormContainer>
                <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button type="button" onClick={handleSubmit}>SIGN UP</button>
            </FormContainer>
        </Container>
    )
}

export default End;