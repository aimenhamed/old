import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './About.styles';

const About = () =>  (
    <div>
      <h1 className="heading" style={{color: "white", textAlign: "center"}}>Technologies</h1>
      <body style={{ textAlign: "center", backgroundColor: "rgb(36, 36, 36)", color: "white"}}>
        I work with a range of web technologies from both
        Frontend to Backend
      </body>
      <List>
        <ListItem>
          <picture style={{ backgroundColor: "white", width: "15%" }}>
            <DiReact size="3rem" />
          </picture>
          <br></br>
          <ListContainer>
            <ListTitle>Frontend</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture style={{ backgroundColor: "white", width: "15%" }}>
            <DiFirebase size="3rem" />
          </picture>
          <br></br>
          <ListContainer>
            <ListTitle>Backend</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture style={{ backgroundColor: "white", width: "15%" }}>
            <DiZend size="3rem" />
          </picture>
          <br></br>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </div>
  );

export default About;  