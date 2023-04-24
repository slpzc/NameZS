import styled from 'styled-components';
export const  Main = styled.main`
  margin-top: 80px;

  .global-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;

    b.title {
      text-align: center;
      font-weight: 600;
      font-size: 48px;
      line-height: 56px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #FAFAFA;
    }

    .filters {
      margin-top: 32px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      max-width: 878px;

      span {
        cursor: pointer;
        font-family: 'mononoki';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        color: #999999;
        padding: 10px 32px;
        border: 1px solid #999999;
        border-radius: 28px;
        transition: all .2s ease;

        &:hover, &.selected {
          background: #FAFAFA;
          border: 1px solid #FAFAFA;
          color: #181A1B;
        }
      }
    }

    .works {
      margin-top: 80px;
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      width: 100%;

      &-card {
        height: 481px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &:hover {
          img {
            max-height: 400px;
            transform: scale(1.04);
          }
        }

        img {
          height: 100%;
          max-width: 100%;
          max-height: 384px;
          object-fit: cover;
          transform: scale(1);
          transition: all .2s ease;
        }

        p {
          margin-top: 18px;
          font-weight: 500;
          font-size: 26px;
          line-height: 31px;
          font-feature-settings: 'pnum' on, 'lnum' on;
          color: #FAFAFA;
        }

        div.bullets {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          span {
            cursor: pointer;
            padding-right: 8px;
            margin-top: 10px;
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: #999999;

            &:first-child {
              padding-left: 0;
            }

            &:hover {
              color: #ababab;
            }
          }
        }

        &_content {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
  
  @media (max-width: 1100px){
    .global-wrapper .works-card{
      width: 100% !important;
      height: 460px;
    }
  }
  @media (max-width: 500px){
    .global-wrapper b.title{
      font-size: 40px;
    }
    .global-wrapper .filters span{
      font-size: 20px;
      line-height: 22px;
    }
    .global-wrapper .works-card {
      &_content{
        p{
          margin-top: 0;
          font-size: 18px;
          line-height: 21px;
        }
        .bullets{
          span{
            font-size: 13px;
            line-height: 15px;
          }
        }
      }
    }
    
  }
`
export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  user-select: none;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease;
  .popup-content{
    height: 72%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
  }
  iframe{
    user-select: none;
    position: relative;
    opacity: 0;
    bottom: -20px;
    transition: all .2s ease;
  }
  svg{
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 8.33%;
    opacity: 0;
    transition: all .2s ease;
    &:hover{
      opacity: .5;
    }
  }
  &.active{
    background-color: rgba(0, 0, 0, 0.5);
    user-select: all;
    pointer-events: all;
    iframe{
      opacity: 1;
      bottom: 0;
    }
    svg{
      opacity: 1;
    }
  }
`