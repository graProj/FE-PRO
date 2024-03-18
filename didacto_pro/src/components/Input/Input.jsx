import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #a0aec0; /* Default border color */
  border-radius: 0.375rem; /* Default border radius */
  outline: none; /* Remove default focus outline */
  transition: border-color 0.3s; /* Smooth transition for border color */

  &:focus {
    border-color: #3b82f6; /* Border color on focus */
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  color: #e53e3e; /* Red color for error message */
  font-size: 0.875rem; /* Smaller font size for error message */
`;

const Input = (id, name, type, placeholder, value, onChange, isValid, errorMessage) => {
  return (
    <InputWrapper>
      <StyledInput
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {!isValid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  );
};

export default Input;
