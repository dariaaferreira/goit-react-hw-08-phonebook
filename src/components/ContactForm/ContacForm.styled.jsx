import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
`;

export const Input = styled.input`
    width: 300px;
    margin-bottom: 20px;
    margin-top: 5px;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
    font-size: 16px;
    line-height: 1.2;
    color: white;
    cursor: pointer;
`;

export const Button = styled.button`
    position: relative;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: inline-flex;
    padding: 10px 28px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.88;
    letter-spacing: 0.06em;
    color: white;
    background-color: #116eb7;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: inherit;

    &:hover, &:focus {
    cursor: pointer;
    background-color: #2196F3;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

export const Message = styled.p`
  font-size: 14px;
  color: #fff; 
  margin: 0; 
`;