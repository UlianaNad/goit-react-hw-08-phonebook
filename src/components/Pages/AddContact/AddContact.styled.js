import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 400px;
  padding: 16px;
  background: #f7f7f7;
`;
export const StyledInput = styled.input`
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;

  &:focus {
    box-shadow: 0 0 5px #43d1af;
    padding: 3%;
    border: 1px solid #43d1af;
  }
  &:hover {
    background: rgba(46, 188, 153, 0.2);
  }
`;
export const StyledButtonSubmit = styled.button`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  padding: 3%;
  background: #43d1af;
  border-bottom: 2px solid #30c29e;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  color: #fff;
`;
