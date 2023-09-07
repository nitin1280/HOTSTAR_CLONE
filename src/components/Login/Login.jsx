import React from 'react';
import styled from 'styled-components';
import "./login.css"
import { useNavigate } from 'react-router-dom';
import Header from '../hedaer/Header';
function Login() {
    
    const navigate = useNavigate();
    const handleLogin=()=>{
        navigate("/register")
    }
    
    
    return (
        <>
        <Header/>
        <Container className='back'>
            <CTA>
                <CTALogoOne src="https://my-disney-plus.netlify.app/images/cta-logo-one.svg" />
                <SignUp onClick={handleLogin}>LOGIN NOW</SignUp>
                <Description className='Description'>
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 03/26/21, the price of Disney+
                    and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="https://my-disney-plus.netlify.app/images/cta-logo-two.png" />
            </CTA>
        </Container>
        </>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/netflix-india.jpeg?ssl=1");      
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`