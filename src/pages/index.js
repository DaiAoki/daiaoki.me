import React from 'react'
import Router from 'next/router'
import 'dayjs/locale/ja'
import dayjs from 'dayjs'
import MockBookPro from '~/components/MockBookPro'
import Mug from '~/components/Mug'
import Outlet from '~/components/Outlet'

class Index extends React.Component {
  componentDidMount() {
    window.setTimeout(
      () => {
        this.typePassword("＊＊＊＊＊＊＊").then(async(_) => {
          await new Promise(resolve => {
            window.setTimeout(
              () => {
                resolve()
                document.querySelector("#submit").classList.add("complete")
              }, "600"
            )
          }).then(async(_) => {
            await new Promise(resolve => {
              window.setTimeout(
                () => {
                  resolve()
                  document.querySelector("#login").classList.add("complete")
                }, "2000"
              )
            }).then(_ => {
              window.setTimeout(
                () => {
                  document.querySelector("#background").classList.add("complete")
                }, "400"
              )
            })
          })
        })
      }, "2500"
    )
  }

  componentWillUnmount() {
    if(window.interval) window.clearInterval(window.interval)
  }

  async typePassword(text) {
    const password = document.querySelector("#password")
    let len = text.length
    return await new Promise(resolve => {
      window.interval = window.setInterval(() => {
        password.innerHTML = text.substr(0, text.length - len)
        len--
        if(len < 0) {
          resolve()
          window.clearInterval(window.interval)
        }
      }, 75)
    })
  }

  async openTerminal() {
    if(!document.querySelector("#background").classList.contains("complete")) return
    await new Promise(resolve => {
      document.querySelector("#terminal").classList.add("clicked")
      resolve()
    }).then(async(_) => {
      await new Promise(resolve => {
        window.setTimeout(
          () => {
            resolve()
          }, "1000"
        )
      })
    }).then(_ => {
      document.querySelector("#new-window").classList.add("opened")
      window.setTimeout(
        () => {
          Router.push('/terminal')
        }, "600"
      )
    })
  }

  render() {
    return (
      <>
        <main className="main">
          <MockBookPro style={{zIndex: 2}}>
            <div className="screen">
              <div id="background" className="background">
                <header className="header">
                  <nav className="navigation">
                    <span className="apple">&#63743;</span>
                    <span>DaiAoki's Portfolio</span>
                  </nav>
                  <div className="basic">
                    <span><img src="/assets/images/wifi.svg" alt="wifi icon"/></span>
                    <span><img src="/assets/images/volume.svg" alt="volume icon"/></span>
                    <span>{ dayjs().format("M/D H:mm") }</span>
                  </div>
                </header>
                <img src="/assets/images/mojave.jpg" alt="Mojave Wallpaper" className="background__image"/>
                <ul className="icon-list">
                  <li className="icon-list__item">
                    <a href="#" onClick={this.openTerminal}>
                      <img src="/assets/images/terminal.png" alt="Terminal icon" id="terminal"/>
                    </a>
                  </li>
                  <li className="icon-list__item">
                    <a href="https://github.com/DaiAoki" target="_blank">
                      <img src="/assets/images/github.png" alt="GitHub icon"/>
                    </a>
                  </li>
                  <li className="icon-list__item">
                    <a href="https://twitter.com/DaiAoki30" target="_blank">
                      <img src="/assets/images/twitter.png" alt="Twitter icon"/>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="login" className="login">
                <img src="/assets/images/icon.jpeg" alt="DaiAoki" className="icon"/>
                <p className="name">DaiAoki</p>
                <div className="password">
                  <div className="password__form">
                    <div className="password__form-background"></div>
                    <div id="password" className="password__form-text">パスワードを入力</div>
                  </div>
                  <button id="submit" className="password__submit"></button>
                </div>
              </div>
            </div>
          </MockBookPro>
          <a href="https://www.buymeacoffee.com/daiaoki" target="_blank" className="mug-container">
            <Mug/>
          </a>
          <div className="outlet-container">
            <Outlet/>
          </div>
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
          <div id="new-window" className="new-window"/>
        </main>
        <style jsx>
          {`
            .new-window {
              position: absolute;
              height: 100vh;
              width: 100vw;
              top: 0;
              right: 0;
              background-color: #000;
              z-index: 2;
              transform: translateX(100%);
              transition-duration: 0.6s;
              &.opened {
                transform: translateX(0);
              }
            }
            .main {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              width: 100%;
              background: linear-gradient(to right, rgb(243,240,229), rgb(233,225,218));
              padding: 0 16px;
              position: relative;
              overflow: hidden;
            }
            .mug-container {
              position: absolute;
              top: 50%;
              right: 0;
              width: 15%;
              max-width: 200px;
              transform: translate(30%, 100%);
              z-index: 2;
            }
            .outlet-container {
              position: absolute;
              top: 50%;
              left: 4%;
              transform: translateY(-100%);
              width: 10%;
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
            .header {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 16px;
              background-color: #c6dff1;
              z-index: 1;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-shadow: 4px 4px 4px 8px rgba(0,0,0,0.3);
            }
            .navigation {
              display: flex;
              align-items: center;
              padding-left: 16px;
              span {
                display: inline-block;
                font-size: 1.0rem;
                font-weight: bold;
                line-height: 1;
                &.apple {
                  font-size: 1.2rem;
                }
                &:not(:last-child) {
                  margin-right: 16px;
                }
              }
            }
            .basic {
              display: flex;
              align-items: center;
              padding-right: 16px;
              span {
                display: inline-block;
                font-size: 1.0rem;
                line-height: 1;
                &:not(:last-child) {
                  margin-right: 8px;
                }
                &:last-child {
                  margin-left: 4px;
                }
                img {
                  height: 12px;
                }
              }
            }
            .background {
              height: 100%;
              width: 100%;
              -webkit-backface-visibility: hidden;
              transition-duration: 0.8s;
              filter: blur(8px);
              &.complete {
                filter: blur(0);
              }
              &__image {
                height: calc(100% + 40px);
                width: calc(100% + 40px);
                object-fit: cover;
              }
            }
            .icon-list {
              position: absolute;;
              top: 40px;
              right: 16px;
              &__item {
                height: 40px;
                width: 40px;
                &:not(:last-child) {
                  margin-bottom: 16px;
                }
                img {
                  height: 100%;
                  width: 100%;
                  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.4));
                  &.clicked {
                    filter: brightness(0.6);
                  }
                }
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
              opacity: 1;
              transition-duration: 0.4s;
              &.complete {
                opacity: 0;
              }
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
                overflow: hidden;
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
                font-weight: bold;
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
                transition-duration: 0.2s;
                &.complete {
                  background-color: #202020;
                }
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
              .icon-list {
                top: 36px;
                right: 12px;
                &__item {
                  height: 32px;
                  width: 32px;
                  &:not(:last-child) {
                    margin-bottom: 12px;
                  }
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
                width: 120px;
                &__form {
                  height: 18px;
                  margin-right: 4px;
                }
                &__form-text {
                  left: 4px;
                  font-size: 1.0rem;
                  white-space: nowrap;
                  transform: translateY(-50%);
                }
                &__submit {
                  height: 14px;
                  max-height: 14px;
                  min-height: 14px;
                  width: 14px;
                  max-width: 14px;
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
              .header {
                height: 8px;
                box-shadow: 2px 2px 2px 4px rgba(0,0,0,0.4);
              }
              .navigation {
                padding-left: 4px;
                span {
                  font-size: 1.0rem;
                  transform: scale(0.6);
                  &.apple {
                    font-size: 1.1rem;
                  }
                  &:not(:last-child) {
                    margin-right: 4px;
                  }
                  &:last-child {
                    margin-left: -16px;
                  }
                }
              }
              .basic {
                padding-right: 4px;
                span {
                  font-size: 1.0rem;
                  transform: scale(0.6);
                  &:not(:last-child) {
                    margin-right: 2px;
                  }
                  &:last-child {
                    margin: 0 -8px 0 -6px;
                  }
                  img {
                    height: 8px;
                  }
                }
              }
              .icon-list {
                top: 24px;
                right: 8px;
                &__item {
                  height: 24px;
                  width: 24px;
                  &:not(:last-child) {
                    margin-bottom: 8px;
                  }
                }
              }
            }
          `}
        </style>
      </>
    )
  }
}
export default Index
