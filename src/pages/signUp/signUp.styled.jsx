import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-image: url("../images/cocktails.jpg"); 
    background-position: center; 
    background-repeat: no-repeat; 
    height: 100vh; 
    `

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #008fb3;
  border-radius: 10px;
  margin: auto;
  width: 300px;
  padding: 40px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const Linker = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 20px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
  }
`;