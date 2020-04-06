import TerminalTemplate from '~/templates/TerminalTemplate'

const Contact = () => {
  return (
    <>
      <TerminalTemplate pathname="contact">
        <p className="print">Welcome to contact page!</p>
        <br/>
        <p className="print">{`contact: \{`}</p>
        <p className="print">  email: <a href="mailto:a.dai.0814ap@gmail.com">a.dai.0814ap@gmail.com,</a></p>
        <p className="print">  twitter: <a href="https://twitter.com/DaiAoki30" target="_blank">https://twitter.com/DaiAoki30</a></p>
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
            a {
              color: #7ef955;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
