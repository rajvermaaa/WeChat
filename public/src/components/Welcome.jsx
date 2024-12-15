import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);

  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  flex-direction: column;
  background-color: #FFF5E1;
  font-family: 'Inter', sans-serif;
  height: 100%;

  img {
    height: 20rem;
    border-radius: 20px;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #FF6B35;
    font-weight: 600;
  }

  span {
    color: #FF9F1C;
    font-weight: 700;
  }

  h3 {
    font-size: 1.2rem;
    color: #333;
    font-weight: 400;
  }
`;