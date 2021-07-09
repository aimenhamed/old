import styled from 'styled-components';

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 50;
    padding-top: 55px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 80px;
    max-width: 1500px;
`;

export const NavbarMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 2rem;
`;

export const NavItem = styled.li`
    margin-right: 1rem;
    &:after {
        content: "";
        display: block;
        height: 3px;
        width: 0;
        background: transparent;
        transition: width 0.7s ease, background-color 0.5s ease;
    }
    &:hover:after {
        width: 100%;
        background: #03fcdf;
    }
    .norm {
        text-decoration: none; 
        color: white;
        padding: 0.5rem 1rem;
        height: 100%;
        border-bottom: 3px solid transparent;
    }
    .active {
        color: #03fcdf;
        font-weight: bold;
    }
`;
