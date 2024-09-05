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
import cosProjectSrc from './assets/images/project-snapshots/cos-project.png';
import motionSynthesisProjectSrc from './assets/images/project-snapshots/motion-synthesis-project.gif';
import daapProjectSrc from './assets/images/project-snapshots/daap-project.png';

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
                        <PortfolioProjectCard title="Enhancing Camouflaged Object Segmentation in Limited Data Setting"
                            description='This project tackles the challenge of detecting camouflaged objects,
                            which are designed to blend seamlessly with their surroundings,
                            making them difficult to spot even for humans. These objects, common in nature and military contexts,
                            present unique detection challenges with significant real-world implications, such as search and rescue,
                            ecological surveys, and defect detection. Due to the limitations of existing Camouflaged Object Detection
                            (COD) datasets, the exploration focuses on innovative methods to overcome these challenges and drive future
                            research in this critical area.'
                            snapshotSrc={cosProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/UMass-CS670-Project"/>
                        <PortfolioProjectCard title="Exploring Human Motion Synthesis with Latent-Space GANs"
                            description='This project introduces a novel framework for human motion synthesis conditioned on text
                            inputs, leveraging Generative Adversarial Networks (GANs) in the latent space. By optimizing for faster
                            training and inference, it achieves efficient and high-quality results, with experiments on the HumanML3D
                            benchmark demonstrating an FID of 2.39 and a diversity score of 8.92. The work explores the potential of simpler
                            architectures, incorporating elements from StyleGAN and VAE models, to enhance performance in low-resource settings.'
                            snapshotSrc={motionSynthesisProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/UMass-CS674-Project"/>
                        <PortfolioProjectCard title="Defence against Adversarial Patches"
                            description='This project tackles the challenge of defending deep neural networks against adversarial patches designed
                            to manipulate model predictions. Various defense techniques were explored using attack patches of different shapes (square, circle, star),
                            reducing the misclassification error from 67% to 13%. The approach generalizes across different attack types and demonstrates robustness to non-adversarial,
                            patch-like objects, offering insights into improving model security in real-world applications.'
                            snapshotSrc={daapProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/682-Project-DAAP"/>


                        <PortfolioProjectCard title='Image Colorization'
                            description='In this project I attempt to colorize grayscale images. This project is a continuation of a course assignment at UMass, CS689.
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
