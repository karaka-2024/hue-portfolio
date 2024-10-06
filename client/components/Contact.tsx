export default function Contact() {
  return (
    <div className="container">
      <div className="left-container">
        <h2>Contact</h2>
        <p>
          <img src="images/cv-icon.png" alt="CV" className="contact" />
          <a
            href="https://www.canva.com/design/DAGShNkzOvM/lBhT8a7BzvJNxmZWLwuWNg/edit?utm_content=DAGShNkzOvM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            download
          >
            {' '}
            click here for the CV{' '}
          </a>
        </p>

        <p>
          <img
            src="images/linkedin-icon.png"
            alt="linkedin"
            className="contact"
          />
          <a href="https://www.linkedin.com/in/hue-nguyen-832b41123/">
            {' '}
            https://www.linkedin.com/in/hue-nguyen-832b41123/
          </a>
        </p>

        <p>
          <img src="images/github-icon.png" alt="github" className="contact" />
          <a href="https://github.com/hunuu7347?tab=repositories">
            {' '}
            https://github.com/hunuu7347?tab=repositories
          </a>
        </p>

        <p>
          <img src="images/map-icon.png" alt="based" className="contact" />
          Wellington, New Zealand
        </p>

        <p>
          <img src="images/phone-icon.png" alt="phone" className="contact" />
          0064 20 4017 1728
        </p>
      </div>
    </div>
  )
}
