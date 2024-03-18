import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import Input from '../Input/Input';
import styled from 'styled-components';

const StyledLoginBox = styled.div`
  width: 400px;
  border: 1px solid #3b82f6;
  border-radius: 20px;
  padding: 16px;

  .inner {
    padding: 32px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }

  form {
    .mb-8 {
      margin-bottom: 20px;
    }

    label {
      color: #4b5563;
      font-size: 0.875rem;
      font-weight: medium;
      margin-bottom: 8px;
      display: block;
    }

    button {
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      color: #fff;
      background-color: #3b82f6;
      transition:
        background-color 0.3s,
        color 0.3s;

      &:hover,
      &:focus {
        background-color: #2563eb;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: #3b82f6;
      }
    }
  }
`;

const LoginBox = () => {
  //const navigate = useNavigate();
  const [schoolCode, setSchoolCode] = useState('');
  const [password, setPassword] = useState('');
  const [isSchoolCodeValid, setIsSchoolCodeValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [loginMessage] = useState('');

  const handleSchoolCodeChange = (event) => {
    const enterSchoolCode = event.target.value;
    const isValid = enterSchoolCode.length >= 8;
    setSchoolCode(enterSchoolCode);
    setIsSchoolCodeValid(isValid);
  };

  const handlePasswordChange = (event) => {
    const enterPassword = event.target.value;
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    const isValidPassword = passwordRegex.test(enterPassword);
    setPassword(enterPassword);
    setPasswordValid(isValidPassword);
  };

  //   const handleSubmit = async (event) => {
  //     // 로그인 api 연결
  //     event.preventDefault();
  //     try {
  //       const response = await postLogin(schoolCode, password);
  //       console.log(response);
  //       const type = response.code;
  //       if (type === 'MEMBER4007' || type === 'MEMBER4001') {
  //         setLoginMessage(response.message);
  //       } else {
  //         localStorage.setItem('accessToken', response.access_token);
  //         localStorage.setItem('refreshToken', response.refresh_token);
  //         navigate('/');
  //       }
  //     } catch (error) {
  //       console.error('에러', error);
  //       // Handle the error appropriately
  //     }
  //   };

  return (
    <StyledLoginBox>
      <div className="inner">
        <h2>로그인</h2>
        <form>
          <div className="mb-8">
            <label htmlFor="username">학번</label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="학번을 입력해주세요"
              value={schoolCode}
              onChange={handleSchoolCodeChange}
              isValid={isSchoolCodeValid}
              errorMessage="올바른 학번 형식이 아닙니다"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password">비밀번호</label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handlePasswordChange}
              isValid={passwordValid}
              errorMessage="올바른 비밀번호 형식이 아닙니다."
            />
          </div>
          <button type="submit" disabled={!isSchoolCodeValid || !passwordValid}>
            로그인
          </button>
        </form>
        {loginMessage && <div>{loginMessage}</div>}
      </div>
    </StyledLoginBox>
  );
};

export default LoginBox;
