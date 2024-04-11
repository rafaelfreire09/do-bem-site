import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;

  background-color: #FACC15;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  
`;

export const Navbar = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: row;

  /* justify-content: space-around; */
`;

export const NavbarItem = styled.li`

  margin-left: 25px;
  margin-right: 25px;
`;