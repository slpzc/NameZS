import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 200px;
  .global-wrapper:nth-child(2){
    margin-top: 100px;
  }
  h2 {
    font-size: 64px;
  }

  .form {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 1200px;

    input {
      width: 100%;
      color: rgb(255, 255, 255);
      background-color: rgb(16 16 16);
      border-radius: 2px;
      font-size: 16px;
      font-weight: 500;
      height: 60px;
      margin: 0;
      padding: 20px;
      line-height: 1.33;

      &::placeholder {
        color: #666666;
      }
    }

    .bullets, .size {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;

      span {
        font-family: 'mononoki';
        font-size: 20px;
        padding: 10px 15px;
        border: 2px solid #999999;
        border-radius: 28px;
        color: #999999;
        cursor: pointer;
        transition: all .1s ease;
        &.active{
          background-color: white;
          color: #0a0b0a;
          border: 2px solid transparent;
          &:hover{
            background-color: white;
          }
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

  button {
    margin-top: 20px;
    cursor: pointer;
    font-family: mononoki;
    color: #333333;
    border: 1px solid #333333;
    background-color: transparent;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    height: 60px;
    //border: 0 none;
    font-size: 16px;
    padding-left: 60px;
    padding-right: 60px;
    font-weight: 700;
  }
`