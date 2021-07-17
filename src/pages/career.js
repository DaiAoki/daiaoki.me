import TerminalTemplate from '~/templates/TerminalTemplate'

const Career = () => {
  return (
    <>
      <TerminalTemplate pathname="career">
        <p className="print">Welcome to career page!</p>
        <p className="print">Let me introduce my career.</p>
        <br/>
        <br/>
        <p className="print">  Self-study 2015.08 ~ 2015.12</p>
        <p className="print">    Java</p>
        <p className="print">    PHP</p>
        <p className="print">    Perl</p>
        <p className="print">    Lisp</p>
        <p className="print">    ShellScrpt</p>
        <p className="print">    HTML/CSS</p>
        <p className="print">    JavaScript</p>
        <p className="print">      VanillaJS</p>
        <p className="print">      jQuery</p>
        <p className="print">    RDBMS</p>
        <p className="print">      MySQL</p>
        <p className="print">      PostgreSQL</p>
        <p className="print">    Git</p>
        <p className="print">    Unix</p>
        <p className="print">    Network</p>
        <p className="print">    Algorithm</p>
        <p className="print">    Object-orientation</p>
        <p className="print">    ...and more(about 100 books read)</p>
        <br/>
        <p className="print">  SES in Sapporo 2016.01 ~ 2017.06</p>
        <p className="print">    Embedded system</p>
        <p className="print">    C programming language</p>
        <p className="print">    Assembly language</p>
        <br/>
        <p className="print">  Trenders inc. 2017.07 ~ 2018.3</p>
        <p className="print">    Role: Tech lead</p>
        <p className="print">    Service</p>
        <p className="print">      Anny: gift EC with media(Web/iOS FullScrached)</p>
        <p className="print">    Ruby on Rails</p>
        <p className="print">    JavaScript</p>
        <p className="print">      VanillaJS</p>
        <p className="print">      jQuery</p>
        <p className="print">      React</p>
        <p className="print">    Haml/ERB</p>
        <p className="print">    Scss/Sass(BEM)</p>
        <p className="print">    RSpec</p>
        <p className="print">    Docker</p>
        <p className="print">    CircleCI2.0</p>
        <p className="print">    capistrano</p>
        <p className="print">    Stripe</p>
        <p className="print">    SoftbankPayment</p>
        <p className="print">    Bugsnag</p>
        <p className="print">    Mailchimp</p>
        <p className="print">    AWS</p>
        <p className="print">      EC2, ECS, ECR, VPC, ALB, S3, CloudFront, RDS, Route53, ...</p>
        <br/>
        <p className="print">  BLT inc. 2018.04 ~ 2018.05</p>
        <p className="print">    Anny</p>
        <br/>
        <p className="print">  Freelance 2018.07 ~ 2019.09</p>
        <p className="print">    Anny</p>
        <p className="print">    MeCel ( Social portfolio service )</p>
        <p className="print">    Start up a company</p>
        <p className="print">      yollo inc. ( <a href="https://yollo.jp" target="_blank">https://yollo.jp</a> )</p>
        <p className="print">      Co-founder and Chief Technical Officer</p>
        <p className="print">    Knowlegde sharing service in major securities company</p>
        <p className="print">    Private Project</p>
        <p className="print">      BookHub ( closed )</p>
        <p className="print">      WebCheatsheet</p>
        <p className="print">      StartupGit ( closed )</p>
        <p className="print">      Chatform ( closed )</p>
        <br/>
        <p className="print">  Bullz inc. 2019.10 ~</p>
        <p className="print">    Role: Chief Technical Officer, Business Manager(Crunch)</p>
        <p className="print">    Service</p>
        <p className="print">      andHatch: Online salon for videographer(Web)</p>
        <p className="print">      SocialAnalyst: Instagram Analytics(Web) ( closed )</p>
        <p className="print">      Crunch: Video production management(Web)</p>
        <p className="print">    Ruby on Rails</p>
        <p className="print">    React(TypeScript)</p>
        <p className="print">    AWS</p>
        <p className="print">    ...and more</p>
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

export default Career
