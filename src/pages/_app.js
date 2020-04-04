import Router from 'next/router'
import css from 'styled-jsx/css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{reset}</style>
      <style jsx global>{base}</style>
    </>
  )
}

const reset = css.global`
  /*
  html5doctor.com Reset Stylesheet
  v1.6.1
  Last Updated: 2010-09-17
  Author: Richard Clark - http://richclarkdesign.com
  Twitter: @rich_clark
  */
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    font-weight: normal;
    vertical-align:baseline;
    background:transparent;
  }
  body {
    line-height:1.8;
  }
  article,aside,details,figcaption,figure,
  footer,header,hgroup,menu,nav,section {
    display:block;
  }
  ul {
    list-style:none;
  }
  blockquote, q {
    quotes:none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content:'';
    content:none;
  }
  a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    text-decoration:none;
    color:initial;
  }
  /* change colours to suit your needs */
  ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
  }
  /* change colours to suit your needs */
  mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
  }
  del {
    text-decoration: line-through;
  }
  abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
  }
  table {
    border-collapse:collapse;
    border-spacing:0;
  }
  /* change border colour to suit your needs */
  hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
  }
  input, select {
    vertical-align:middle;
  }
  select {
    outline:none;
    border: none;
    border-radius: 0;
    text-indent: 0.01px;
    text-overflow: '';
    background: none transparent;
    vertical-align: middle;
    font-size: inherit;
    color: inherit;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
  }
  select option{
    background-color: #fff;
    color: #333;
  }
  select::-ms-expand {
    display: none;
  }
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #828c9a;
  }
  textarea {
    display: block;
  }
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }
`
const base = css.global`
  html {
    font-size: 62.5% !important;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: nimbus-sans, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                 "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
    font-size: 1.6rem !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "kern", "liga", "clig", "calt";
    text-rendering: optimizeSpeed;
  }
`

export default MyApp
