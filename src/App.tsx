import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './assets/scss/styles.css';
import PortfolioHeader
from './js/molecules/header/header';
import PortfolioJobCard from './js/molecules/job-card/job-card';
import PortfolioSocialMedia from './js/atoms/icons/social-media';
import PortfolioProjectCard from './js/molecules/project-card/project-card';
import colorizationProjectSrc from './assets/images/project-snapshots/colorization-project.png';

function App() {
    return (
        <>
            <PortfolioHeader/>
            <main className="portfolio-main">
                <div className="portfolio-main-content">
                    <div id="intro" className="portfolio-main__section">
                        <div className="portfolio-dp"></div>
                        <h3 className="title-64 text-c hidden-sm hidden-md m-b-0">Vinitra Muralikrishnan</h3>
                        <h3 className="title-32 text-c hidden-lg">Vinitra Muralikrishnan</h3>
                        <p className="paragraph-16 text-c">A polymath who loves solving problems and happens to be a passionate programmer.</p>
                    </div>
                    <div id="about" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">About Me</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">About Me</h3>
                        <p className="paragraph-16 text-c">
                            As a polymath, I am passionate about a broad spectrum of subjects, with coding being one of my greatest interests.
                            My love for learning drives me to constantly explore new areas, ranging from science and technology to art and philosophy.
                        </p>
                        <p className="paragraph-16 text-c">
                            Writing code holds a special place in my heart, and I find immense joy in crafting innovative solutions to make my life and others'
                            lives easier while experimenting with the latest technologies
                        </p>
                    </div>
                    <div id="work-experience" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Work Experience</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Work Experience</h3>
                        <PortfolioJobCard 
                            description='I worked as a Lead UI developer and my work involved responsibilities around the delivery of solutions. I started working as a UI developer for various projects spanning simple static websites to developing component design systems for different products. I went on to lead a team of enthusiastic UI developers for the technical solution implementation and lending support in planning the objectives and milestones of projects.'
                            companyName='Microsoft' position='Front-End Engineer' periodLocation='July 2019 - August 2023, Hyderabad, India'
                            skills={['React', 'Angular', 'Vue', 'ASP.NET', 'C#', 'Typescript', 'Javascript']}></PortfolioJobCard>
                    </div>
                    <div id="projects" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Projects</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Projects</h3>
                        <PortfolioProjectCard title='Image Colorization'
                            description='In this project I try to attemp colorization of grayscale images. This project is a continuation of a course assignment.
                            I begin working with a custom dataset that was provided with the course assignment. After ablation studies performed with unet (with different number of layers) and convolution nets,
                            I am able to achieve a test loss of 0.0952 with the dataset. I am currently building deeper conv-nets for handling grayscaled imagenette images.'
                            snapshotSrc={colorizationProjectSrc} githubRepoUrl={'https://github.com/VinitraMk/Image-Colorization'}/>
                    </div>
                </div>
                <footer className="portfolio-main__footer">
                    <div className="text-c">
                        <PortfolioSocialMedia type='linkedin' className='m-r-3' link='https://www.linkedin.com/in/vinitramk'/>
                        <PortfolioSocialMedia type='github' link='https://github.com/VinitraMk'/>
                    </div>
                    <p className="paragraph-12 text-c">Design loosely inspired by <a className='fc-purple' href="https://www.figma.com/design/QEJiULtK3ZgM4aIoNlwnmc/Developer-Portfolio-Design-(Community)?node-id=0-3&t=LqKNhcc29KMcjEsA-0">Figma template</a> and coded in Visual Studio Code.
                    Built with React, Typescript and SCSS, deployed with Github Pages. All text is set in the Poppins typeface.</p>
                </footer>
            </main>
        </>
    );
}

export default App;
