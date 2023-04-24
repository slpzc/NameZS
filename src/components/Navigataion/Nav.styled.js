import styled from 'styled-components';
export const Nav = styled.nav`
  height: 76px;
  width: 100%;
  border-bottom: 1px solid #181A1B;

  .boilerplate {
    z-index: 1;
    display: flex;
    align-items: center;
    transform: translateY(0);
    transition: transform .3s ease;
    background-color: #0A0B0A;
    height: 76px;
    border-bottom: 1px solid #181A1B;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
  }

  &.scrolled {
    .boilerplate {
      transform: translateY(-200px);
    }
  }

  .global-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      cursor: pointer;
    }
  }


  .links {
    max-width: 1056px;
    width: 100%;

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li, a {
        cursor: pointer;
        color: #FAFAFA;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1300px) {
    .links {
      max-width: 55vw;
    }
  }
  @media (max-width: 860px) {
    .links {
      max-width: 400px;

      li, a {
        font-size: 18px !important;
      }
    }
  }
  @media (max-width: 600px) {
    .links {
      max-width: 282px;

      li, a {
        font-size: 14px !important;
      }
    }
  }
`