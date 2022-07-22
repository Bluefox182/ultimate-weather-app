import React from "react";
import styled from "styled-components";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <div className="icons">
        <a href="https://github.com/Bluefox182" className="icon i-github">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/fernandogaldos/"
          className="icon i-linkedin"
        >
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/bluefox182" className="icon i-twitter">
          <TwitterIcon />
        </a>
      </div>
    </StyledSocialIcons>
  );
}

export default SocialIcons;

const StyledSocialIcons = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: flex-end;
  padding-right: 10px;
  position: fixed;
  right: 0;
  bottom: 100px;
  width: 50px;
  z-index: 15;
  .icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .icon {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #ffffff;
    }
    svg {
      :hover {
        color: #0779e4;
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;
