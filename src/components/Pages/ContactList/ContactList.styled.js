import styled from 'styled-components';

export const StyledUl = styled.ul`
	list-style: none;
    padding: 0;
`

export const StyledSpanName = styled.span`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 400;
`;
export const StyledSpanNumber = styled.span`
  margin-right: 10px;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
`;
export const StyledButton = styled.button`
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #43d1af;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #43d1af;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

    &:hover,
    &:focus {
  background-color: #b3d3ea;
  color: #2c5777;
}

&:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

&:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}
`;