import TerminalTemplate from '~/templates/TerminalTemplate'

const Project = () => {
  return (
    <>
      <TerminalTemplate pathname="project">
        <p className="print">Welcome to project page!</p>
        <p className="print">Here are the projects I have been involved in.</p>
        <br/>
        <br/>
        <p className="print">  Anny</p>
        <p className="print">    -> <a href="https://anny.gift" target="_blank">https://anny.gift</a></p>
        <br/>
        <p className="print">  andHatch</p>
        <p className="print">    -> <a href="https://andhatch.com" target="_blank">https://andhatch.com</a></p>
        <br/>
        <p className="print">  SocialAnalyst</p>
        <p className="print">    -> <a href="https://social-analyst.com" target="_blank">https://social-analyst.com</a></p>
        <br/>
        <p className="print">  CreativeHunt</p>
        <p className="print">    -> in development</p>
        <br/>
        <p className="print">  ...and more</p>
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

export default Project
