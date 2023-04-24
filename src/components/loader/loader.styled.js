import styled from 'styled-components'

export const Popup = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0A0B0A;
  bottom: -110vh;
  left: 0;
  z-index: 99999;
  &.active{
    animation: slideUp 3s ease-in-out forwards;
  }
  &.page{
    animation: pageLoader 3s ease-in-out forwards;
  }
  @keyframes slideUp {
    0% {
      bottom: -110vh;
    }
    30% {
      bottom: 0;
    }
    33% {
      bottom: 0;
    }
    66% {
      bottom: 100vh;
    }
    100% {
      bottom: 100vh;
    }
  }
  @keyframes pageLoader {
    0% {
      bottom: 0;
    }
    33% {
      bottom: 0;
    }
    66% {
      bottom: 100vh;
    }
    100% {
      bottom: 100vh;
    }
  }
`