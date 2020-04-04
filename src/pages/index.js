import MockBookPro from '~/components/MockBookPro'

const Index = props => (
  <>
    <main className="main">
      <MockBookPro>
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
    </main>
    <style jsx>
      {`
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
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
      `}
    </style>
  </>
)

Index.getInitialProps = async function() {
  return {}
}

export default Index
