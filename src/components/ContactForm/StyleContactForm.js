import styled from 'styled-components';

export const Styled = {
  Form: styled.form`
    padding: 24px;
    border: 2px solid grey;
    width: 350px;
  `,
  Label: styled.label`
    margin-bottom: 10px;
  `,
  Input: styled.input`
    margin-top: 10px;
    margin-bottom: 8px;
  `,
  Button: styled.button`
    margin-top: 10px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 1px 10px;
    :hover {
      background: rgb(240, 240, 240);
    }
  `,
};
