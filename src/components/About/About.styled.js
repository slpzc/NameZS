import styled from 'styled-components';
export const Main = styled.main`
  margin-top: 104px;
  position: relative;
  &::before{
    position: absolute;
    content: "";
    top: 160px;
    left: 0;
    width: 307px;
    height: 420px;
    transform: rotate(11deg);
    background-image: url("https://i.imgur.com/0PSQwIj.png");
  }
  
  .global-wrapper{
    display: flex;
    justify-content: space-between;
  }
  .about{
    p{
      max-width: 1056px;
      width: 100%;
      font-weight: 500;
      font-size: 32px;
      line-height: 120%;
      letter-spacing: 0.02em;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #FAFAFA;
      span{
        color: #9EFA8F;
      }
    }
  }
  span.title{
    font-family: 'mononoki';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    color: #999999;
  }
  .clients{
    margin-top: 84px;
    .partners{
      span{
        font-weight: 600;
        font-size: 36px;
        line-height: 42px;
        font-feature-settings: 'pnum' on, 'lnum' on;

        /* 98% */

        color: #FAFAFA;
      }
      p {
        margin-top: 40px;
        font-weight: 500;
        font-size: 32px;
        line-height: 120%;
        /* or 38px */
        letter-spacing: 0.02em;
        font-feature-settings: 'pnum' on, 'lnum' on;
        /* 40% */
        color: #666666;
      }

      div.inner {
        padding-top: 48px;
        padding-left: 32px;
      }

      &-blocks {
        margin-top: 100px;
        display: flex;
        flex-wrap: wrap;
        gap: 13px;

        &_block {
          text-transform: capitalize;
          width: 340px;
          height: 78px;
          background: #181A1B;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;

          font-weight: 600;
          font-size: 32px;
          line-height: 120%;
          letter-spacing: 0.02em;
          font-feature-settings: 'pnum' on, 'lnum' on;
          color: #666666;
        }
      }
    }
    .content{
      max-width: 1056px;
    }
  }
  
  // adaptive
  @media (max-width: 1400px) {
    /* … */
    .global-wrapper{
      flex-direction: column;
      gap: 40px;
    }
    &::before{
      display: none;
    }
  }
  @media (max-width: 1100px) {
    /* … */
    .about p{
      font-size: 28px;
    }
    .partners span, .clients .partners p{
      font-size: 30px !important;
    }
    .clients .partners-blocks{
      margin-top: 48px;
    }
  }
  @media (max-width: 732px) {
    /* … */
    .about p{
      font-size: 22px;
    }
    .partners span, .clients .partners p{
      font-size: 26px !important;
    }
    .clients .partners-blocks{
      margin-top: 48px;
    }
  }
`