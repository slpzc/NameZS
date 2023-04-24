import styled from 'styled-components';

export const FooterStyled = styled.footer`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0E0F10;
  transition: all .2s ease;
  padding: 72px 0;
  cursor: pointer;

  * {
    transition: all .2s ease;
  }

  h2 {
    font-weight: 600;
    font-size: 96px;
    line-height: 113px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FAFAFA;
    display: flex;
    align-items: center;

    svg {
      margin-left: 2.500vw;
    }
  }

  &:hover {
    background-color: #EBEBEB;

    h2 {
      color: #0A0B0A;

      svg path {
        fill: #0A0B0A;
      }
    }
  }
  
  @media (max-width: 1100px){
    h2{
      font-size: 66px;
    }
    svg{
      margin-left: 18px;
      transform: scale(0.7);
    }
    height: 71px;
  }
  @media (max-width: 760px){
    h2{
      font-size: 40px;
    }
    svg{
      transform: scale(0.5);
    }
  }
`
export const FooterNavigation = styled.footer`
  .global-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
    a, p{
      cursor: pointer;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      text-transform: uppercase;
      color: #FAFAFA;
    }
  }

  @media (max-width: 860px){
        li, a{
          font-size: 18px !important;
        }
  }
  @media (max-width: 600px){
      li, a{
        font-size: 14px !important;
      }
    }
`