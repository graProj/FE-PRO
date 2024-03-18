import React, { useState, useEffect } from 'react';
import LoginBox from '../components/login/LoginBox';
import JoinBox from '../components/login/JoinBox';
import styled from 'styled-components';
const Login = () => {
  const words = ['편리함', '학습 효율', '집중력', '배움'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [loginShow, setLoginShow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(intervalId);
  });

  const showLoginBox = () => {
    setLoginShow(true);
  };
  const showJoin = () => {
    setLoginShow(false);
  };

  return (
    <>
      <>
        <Container>
          <TextContainer>
            <div>
              {words.map((word, index) => (
                <span key={index} className={`word ${index === currentWordIndex ? 'active' : ''}`}>
                  {word}
                  {index !== words.length - 1 && <br />}
                </span>
              ))}
            </div>

            <UnderComment>
              * didacto는 학습 효율을 증진시키기 위해 개발된 프리미엄 서비스입니다.
            </UnderComment>
          </TextContainer>

          <ButtonContainer>
            <button onClick={showLoginBox}>로그인</button>
            <button onClick={showJoin}>회원가입</button>
          </ButtonContainer>

          <div>{loginShow ? <LoginBox /> : <JoinBox />}</div>
        </Container>
      </>
    </>
  );
};
export default Login;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
  gap: 150px;

  @media screen and (min-width: 640px) {
    padding-top: 100px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
  color: #3b82f6;
  font-size: 50px;
  margin-left: 10px;
  margin-top: 100px;

  .word {
    opacity: 0;
    transition: opacity 0.5s;
    &.active {
      opacity: 1;
    }
  }

  .mt-10 {
    margin-top: 10px;
  }

  .text-sm {
    font-size: small;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 10px;
  margin-left: 10px;

  button {
    padding: 8px 16px;
    margin-right: 8px;
    font-weight: bold;
    color: #3b82f6;
    background-color: white;
    border: 1px solid #3b82f6;
    border-radius: 5px;
    transition:
      transform 0.3s,
      background-color 0.3s,
      color 0.3s;

    &:hover {
      background-color: #3b82f6;
      color: white;
      transform: scale(1.1);
    }
  }
`;

const UnderComment = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;
