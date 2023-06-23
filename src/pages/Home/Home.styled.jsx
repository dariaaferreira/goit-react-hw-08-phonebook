import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 900px;
    height: 60vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2F303A;
    color: white;
    margin-top: 50px;
    border-radius: 6px;
    box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.2);

`;

export const Title = styled.h1`
    color: #2196F3;
    line-height: 1.14;
    letter-spacing: 0.03em;
    font-size: 50px;
    margin-top: 100px;
    margin-bottom: 100px;
    font-family: Consolas;
`;

export const Text = styled.p`
    line-height: 1.14;
    letter-spacing: 0.03em;
    font-size: 30px;
    width: 450px;
    text-align: center;
    font-family: Consolas;
`;

export const LinkSection = styled(Link)`
  color: #2196F3;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const ContainerFooter = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  color: #2F303A;
  font-size: 14px;
  z-index: 999;
`;

export const LinkItem = styled.a`
  text-decoration: underline;
  color: #2196F3;
`;

export const TextFooter = styled.p`
  margin: 0;
`;