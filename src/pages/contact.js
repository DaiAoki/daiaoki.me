import TerminalTemplate from '~/templates/TerminalTemplate'

const Contact = () => {
  return (
    <>
      <TerminalTemplate pathname="contact">
        <p className="print">Welcome to contact page!</p>
        <br/>
        <p className="print">{`contact: \{`}</p>
        <p className="print">  email: a.dai.0814ap@gmail.com,</p>
        <p className="print">  twitter: https://twitter.com/DaiAoki30</p>
        <p className="print">{`\}`}</p>
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

export default Contact
