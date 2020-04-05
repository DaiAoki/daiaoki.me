import TerminalTemplate from '~/templates/TerminalTemplate'

const Terminal = () => {
  return (
    <>
      <TerminalTemplate pathname="terminal">
        <p className="print">Hello, visitor!</p>
        <p className="print">My name is DaiAoki. I'm Japanese software engineer.</p>
        <p className="print">This is my portfolio page:)</p>
        <br/>
        <p className="print">Please select from the following!</p>
      </TerminalTemplate>
      <style jsx>
        {`
          .print {
            font-family: 'Space Mono', monospace;
            font-size: 1.5rem;
            line-height: 1.4;
            color: #7ef955;
            white-space: pre-wrap;
          }
        `}
      </style>
    </>
  )
}

export default Terminal
