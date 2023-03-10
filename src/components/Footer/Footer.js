import React, { Component } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social">
          <a
            className="social-github"
            href="https://github.com/Gianna22"
            target="blank"
          >
            <GitHub
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
          <a
            className="social-linkedin"
            href="https://www.linkedin.com/in/gianna-antonacci1/"
            target="blank"
          >
            <LinkedIn
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
        </div>

      </footer>
    );
  }
}

export default Footer;
