import MockBookPro from '~/components/MockBookPro'

const Index = props => (
  <>
    <main className="main">
      <MockBookPro style={{zIndex: 1}}>
        <div className="screen">
          <div className="background">
            <img src="/assets/images/mojave.jpg" alt="Mojave Wallpaper" className="usme-logo__sub"/>
          </div>
          <div className="login">
            <img src="/assets/images/icon.jpeg" alt="DaiAoki" className="icon"/>
            <p className="name">DaiAoki</p>
            <div className="password">
              <div className="password__form">
                <div className="password__form-background"></div>
                <div className="password__form-text">パスワードを入力</div>
              </div>
              <button className="password__submit"></button>
            </div>
          </div>
        </div>
      </MockBookPro>
      <div className="desk">
        <div className="desk__board"/>
        <div className="desk__board"/>
        <div className="desk__board"/>
        <div className="desk__board"/>
        <div className="desk__board"/>
        <div className="desk__board"/>
        <div className="desk__board"/>
        <div className="desk__board"/>
        <div className="desk__board"/>
        <div className="desk__board"/>
      </div>
    </main>
    <style jsx>
      {`
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
          background: linear-gradient(to right, rgb(243,240,229), rgb(233,225,218));
          position: relative;
          overflow: hidden;
        }
        .desk {
          position: absolute;
          bottom: 0;
          height: 60vh;
          width: 180%;
          background-color: rgba(118,104,81,1);
          display: flex;
          transform: perspective(200px) rotateX(30deg);
          &__board {
            height: 100%;
            width: calc(100% / 10);
            min-width: calc(100% / 10);
            flex-basis: calc(100% / 10);
            background-image: url(/assets/images/wood.png);
            background-repeat: repeat;
            border-right: solid 1px #1c1c1c;
            border-left: solid 1px #1c1c1c;
          　box-shadow: -4px 0px 4px -1px #333, 4px 0px 4px -1px #333;
          }
        }
        .screen {
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        .background {
          height: 100%;
          width: 100%;
          filter: blur(6px);
          transform: scale(1.3);
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .login {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .icon {
          height: 64px;
          width: 64px;
          border-radius: 50%;
        }
        .name {
          color: #efefef;
          font-size: 1.4rem;
          line-height: 1;
          text-align: center;
          margin: 16px 0 24px;
        }
        .password {
          display: flex;
          align-items: center;
          width: 240px;
          &__form {
            flex-grow: 1;
            position: relative;
            height: 24px;
            margin-right: 8px;
          }
          &__form-background {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #fff;
            border-radius: 2px;
            opacity: 0.1;
            z-index: 1;
          }
          &__form-text {
            position: absolute;
            top: 50%;
            left: 6px;
            transform: translateY(-50%);
            z-index: 2;
            font-size: 1.1rem;
            color: #fff;
          }
          &__submit {
            appearance: none;
            border: none;
            outline: none;
            cursor: pointer;
            height: 20px;
            width: 20px;
            min-width: 20px;
            flex-basis: 20px;
            background-color: #929292;
            border-radius: 50%;
            position: relative;
            &::before{
              content: "";
              position: absolute;
              top: 50%;
              left: 4px;
              transform: translateY(-50%);
              width: 10px;
              height: 2px;
              background: #5a5a5a;
            }
            &::after{
              content: "";
              position: absolute;
              top: 50%;
              left: 5px;
              transform: translateY(-50%) rotate(45deg);
              width: 10px;
              height: 10px;
              border-top: 2px solid #5a5a5a;
              border-right: 2px solid #5a5a5a;
            }
          }
        }
        @media screen and (max-width: 768px) {
          .icon {
            height: 48px;
            width: 48px;
          }
          .name {
            font-size: 1.3rem;
            margin: 12px 0 20px;
          }
          .password {
            width: 160px;
            &__form {
              height: 20px;
            }
            &__form-text {
              font-size: 1.0rem;
            }
            &__submit {
              height: 16px;
              width: 16px;
              min-width: 16px;
              flex-basis: 16px;
              &::before{
                left: 4px;
                width: 9px;
                height: 2px;
              }
              &::after{
                left: 4px;
                width: 8px;
                height: 8px;
              }
            }
          }
          @media screen and (max-width: 420px) {
            .icon {
              height: 24px;
              width: 24px;
            }
            .name {
              font-size: 1.0rem;
              margin: 4px 0 8px;
              transform: scale(0.7);
            }
            .password {
              width: 96px;
              &__form {
                height: 14px;
                margin-right: 4px;
              }
              &__form-text {
                left: -10px;
                font-size: 1.0rem;
                transform: translateY(-50%) scale(0.6);
              }
              &__submit {
                height: 14px;
                width: 14px;
                min-width: 14px;
                flex-basis: 14px;
                transform: scale(0.8);
                &::before{
                  left: 3px;
                  width: 8px;
                  height: 1px;
                }
                &::after{
                  left: 5px;
                  width: 6px;
                  height: 6px;
                  border-top: 1px solid #5a5a5a;
                  border-right: 1px solid #5a5a5a;
                }
              }
            }
          }
        }
      `}
    </style>
  </>
)

Index.getInitialProps = async function() {
  return {}
}

export default Index
