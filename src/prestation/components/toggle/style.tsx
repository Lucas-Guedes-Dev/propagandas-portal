import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    @media (max-width: 950px) {
      flex-direction: column;
    }
`;

export const Label = styled.label`
    font-size: medium;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondBackground};

    @media (max-width: 550px) {
      display: none;
    }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  outline: none;
`;

export const Input = styled.input`
  position: absolute;
  top: -99999px;
  left: -99999px;

  &:checked + .slider {
    background-color: #2196F3;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;