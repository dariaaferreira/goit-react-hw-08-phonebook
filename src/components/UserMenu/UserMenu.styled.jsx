import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
    position: relative;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    display: inline-flex;
    padding: 10px 28px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.88;
    color: white;
    background-color: #116eb7;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: inherit;
    font-family: Consolas;

    &:hover, &:focus {
    cursor: pointer;
    background-color: #2196F3;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

export const Text = styled.span`
  font-size: 24px;
  color: #2F303A;
`;