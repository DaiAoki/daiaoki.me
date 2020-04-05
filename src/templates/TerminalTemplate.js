import NavLink from 'next/link'

const TerminalTemplate = props => (
  <>
    <main className="main">
      { props.children }
      <br/>
      <nav>
        <ul>
          <li>
            <NavLink href="/terminal">
              <a className={`print nav ${props.pathname === 'terminal' && 'active'}`}>
                {`${props.pathname === "terminal" ? '  -> Top' : '    Terminal'}`}
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/about">
              <a className={`print nav ${props.pathname === 'about' && 'active'}`}>
                {`${props.pathname === "about" ? '  -> About' : '    About'}`}
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/contact">
              <a className={`print nav ${props.pathname === 'contact' && 'active'}`}>
                {`${props.pathname === "contact" ? '  -> Contact' : '    Contact'}`}
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/">
              <a className="print nav">    Exit</a>
            </NavLink>
          </li>
        </ul>
      </nav>
      <br/>
      <p className="pwd">/Users/daiaoki</p>
      <p className="current">{">"}</p>
    </main>
    <style jsx>
      {`
        .main {
          width: 100%;
          height: 100vh;
          background-color: #000;
          font-family: 'Space Mono', monospace;
          font-size: 1.5rem;
          line-height: 1.4;
          padding: 4px 6px 120px;
          overflow-y: scroll;
          overflow-scrolling: touch;
        }
        .print {
          font-family: 'Space Mono', monospace;
          font-size: 1.5rem;
          line-height: 1.4;
          color: #7ef955;
          white-space: pre-wrap;
          &.nav {
            &:hover {
              font-weight: bold;
            }
          }
          &.active {
            font-weight: bold;
          }
        }
        .pwd {
          color: #4a37d4;
        }
        .current {
          display: flex;
          align-items: center;
          color: #5fb9c5;
          &:after {
            content: '';
            display: inline-block;
            height: 18px;
            width: 10px;
            background-color: #7ef955;
            margin-left: 8px;
            animation: flash 1.2s infinite linear;
            @keyframes flash {
              0% { opacity: 1; }
              49.9% { opacity: 1; }
              50% { opacity: 0; }
              99.9% { opacity: 0; }
              100% { opacity: 1; }
            }
          }
        }
      `}
    </style>
  </>
)

export default TerminalTemplate
