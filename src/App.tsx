import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './assets/scss/styles.css';
import PortfolioHeader
from './js/atoms/header/header';
import PortfolioJobCard from './js/molecules/job-card/job-card';
import PortfolioSocialMedia from './js/atoms/icons/social-media';
import PortfolioProjectCard from './js/molecules/project-card/project-card';

function App() {
    return (
        <>
            <PortfolioHeader/>
            <main className="portfolio-main">
                <div className="portfolio-main-content">
                    <div id="intro" className="portfolio-main__section">
                        <div className="portfolio-dp"></div>
                        <h3 className="title-64 text-c hidden-sm hidden-md">Vinitra Muralikrishnan</h3>
                        <h3 className="title-32 text-c hidden-lg">Vinitra Muralikrishnan</h3>
                        <p className="paragraph-16 text-c">A polymath who happens to be a passionate programmer.</p>
                    </div>
                    <div id="about" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">About Me</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">About Me</h3>
                        <p className="paragraph-16 text-c">
                            As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world
                            of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.
                        </p>
                        <p className="paragraph-16 text-c">
                            With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves 
                            translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible
                        </p>
                    </div>
                    <div id="work-experience" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Work Experience</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Work Experience</h3>
                        <PortfolioJobCard companyName='Microsoft' position='Front-End Engineer' periodLocation='July 2019 - August 2023, Hyderabad, India'
                            skills={['Typescript', 'Javascript']}></PortfolioJobCard>
                    </div>
                    <div id="projects" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Projects</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Projects</h3>
                        <PortfolioProjectCard/>
                    </div>
                </div>
                <footer className="portfolio-main__footer">
                    <div className="text-c">
                        <PortfolioSocialMedia type='linkedin' className='m-r-3' link='https://www.linkedin.com/in/vinitramk'/>
                        <PortfolioSocialMedia type='github' link='https://github.com/VinitraMk'/>
                    </div>
                    <p className="paragraph-12 text-c">Design loosely inspired by <a className='fc-purple' href="https://www.figma.com/design/QEJiULtK3ZgM4aIoNlwnmc/Developer-Portfolio-Design-(Community)?node-id=0-3&t=LqKNhcc29KMcjEsA-0">Figma template</a> and coded in Visual Studio Code by. Built with React, Typescript
                    and SCSS, deployed with Github Pages. All text is set in the Poppins typeface.</p>
                </footer>
            </main>
        </>
    );
}

export default App;
