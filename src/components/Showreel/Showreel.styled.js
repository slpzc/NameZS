import styled from "styled-components";

export const Showreel = styled.div`
      margin-top: 80px;
      
      .card {
        width: 100%;
        height: 216px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
        border-radius: 4px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        gap: 16px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

        &:hover {
          p {
            font-size: 24.89px;
          }
        }

        &::before {
          content: "";
          position: absolute;
          width: 110%;
          height: 100%;
          left: 0;
          top: 0;
          background-image: url("https://i.imgur.com/UAGE1rQ.png");
          background-position: -5px -69.458vw;
          background-repeat: no-repeat;
          background-size: cover;
          z-index: -1;
        }

        p {
          font-family: 'mononoki';
          font-size: 24px;
          line-height: 27px;
          transition: all .2s ease;
        }
      }
  
  @media (max-width: 740px) {
    /* … */
   display: none;
  
    `