import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tooth-To-Bytes: A Dental Management System",
      imgUrl: projImg1,
      link: "https://github.com/KrisNathanielDimaapi/clinic-project.git",  // Replace with your actual GitHub URL
    },
    {
      title: "BTHS Student Portal",
      imgUrl: projImg2,
      link: "https://github.com/KrisNathanielDimaapi/student-portal.git",  // Replace with your actual GitHub URL
    },
    {
      title: "Data-Driven Management Information System for PAPSAS INC",
      imgUrl: projImg3,
      link: "https://papsasinc.com",  // Replace with your actual GitHub URL
    },
  ];
  

  return (
<section className="project" id="projects">
  <Container>
    <Row>
      <Col size={12}>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>My Projects</h2>
              <p>Explore some of the web development projects I’ve worked on, each designed with creativity and functionality in mind. These projects range from healthcare solutions, educational institutions, to organizations dedicated to supporting student affairs. I focus on crafting user-friendly, responsive websites that not only look great but are also built with the latest technologies to ensure seamless user experiences. Below are a few examples of my work.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>}
        </TrackVisibility>
      </Col>
    </Row>
  </Container>
</section>

  )
}
