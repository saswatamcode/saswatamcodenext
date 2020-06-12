import React from "react"
import styled from "styled-components/macro"

const SocialsContainer = styled.div`
  width: 30%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 0px;
  margin-left: 7%;
  display: flex;
`

const Line = styled.div`
  background-color: white;
  width: 50%;
  border-radius: 10px;
  height: 7px;
  margin-top: 46px;
  float: right;
`

const Icon = styled.i`
  margin-top: 40px;
  color: white;
  margin-right: 15px;
  margin-left: 15px;
  transform: scale(1.5);
  float: left;
  transition: 0.2s;
  :hover {
    transform: scale(2);
  }
`

export default function Socials() {
  return (
    <>
      <SocialsContainer>
        <a
          title="GitHub Repositories"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/saswatamcode"
        >
          <Icon className="fab fa-github" />
        </a>
        <a
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/saswatamcode/"
        >
          <Icon className="fab fa-linkedin" />
        </a>
        <a
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/saswatamcode"
        >
          <Icon className="fab fa-twitter" />
        </a>
        <a
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/saswatamcode/"
        >
          <Icon className="fab fa-instagram" />
        </a>
        <a
          title="DEV"
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/saswatamcode"
        >
          <Icon className="fab fa-dev"/>
        </a>
        <a
          title="Medium"
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@saswatamcode"
        >
          <Icon className="fab fa-medium" />
        </a>
        <Line />
      </SocialsContainer>
    </>
  )
}
