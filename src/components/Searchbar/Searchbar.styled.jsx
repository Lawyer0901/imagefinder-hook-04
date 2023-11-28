import styled from 'styled-components';

export const Form = styled.form`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 5px;
  /* background: blue; */
  /* max-width: 320px; */
  color: #090c9b;
  padding: 15px;
  outline: #9c1010;
`;
export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 0.85rem 1rem;
  /* margin-top: 2rem; */
  background-color: #0e39fe;
  color: white;
  font-size: 0.75rem;
  text-transform: uppercase;
  width: 20%;
  /* height: 50%; */

  letter-spacing: 0.15em;
  transition: ease-in 1000ms;
  &:hover {
    outline: 3px solid #090c9b;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 15px;
  padding: 10px 20px;
  border: 4px solid white;
  &::placeholder {
    color: #9c1010;
  }
  &:focus {
    color: #0e39fe;
    outline: 0;
    border: 3px solid #0e39fe;
  }
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
    width: 25px;
    height: 25px;
    background: url('https://cdn0.iconfinder.com/data/icons/ThemeShock-credit-cards-icons/64/mastercard.png')
      no-repeat;
    background-size: cover;
  }
`;
