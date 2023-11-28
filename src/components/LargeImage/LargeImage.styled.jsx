import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const GaleryImage = styled.img`
  display: block;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Items = styled.li`
  /* width: 65%; */

  padding: 5px;

  /* border-bottom: 2px #404b51 dotted; */
`;

export const Text = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-items: center; */
  font-size: 25px;
  color: darkblue;
  font-weight: 500;
`;
