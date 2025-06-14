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
import sbiceProjectSrc from './assets/images/project-snapshots/sbice-project.png';
import agenticChatbotProjectSrc from './assets/images/project-snapshots/agentic-chatbot.gif';
import PublicationCard from './js/molecules/publication-card/publication-card';

function App() {
    return (
        <>
            <PortfolioHeader/>
            <main className="portfolio-main">
                <div className="portfolio-main-content">
                    <div id="intro" className="portfolio-main__section">
                        <div className="portfolio-dp"></div>
                        <div className="text-c m-t-6">
                            <PortfolioSocialMedia type='google-scholar' link='https://scholar.google.com/citations?user=N_Xv6FUAAAAJ&hl=en' className='m-r-3'/>
                            <PortfolioSocialMedia type='email' link='mailto:vinitramk@gmail.com' className='m-r-3'/>
                            <PortfolioSocialMedia type='linkedin' className='m-r-3' link='https://www.linkedin.com/in/vinitramk'/>
                            <PortfolioSocialMedia type='github' link='https://github.com/VinitraMk'/>
                        </div>
                        <h3 className="title-64 text-c hidden-sm hidden-md m-b-0 m-t-5">Vinitra Muralikrishnan</h3>
                        <h3 className="title-32 text-c hidden-lg">Vinitra Muralikrishnan</h3>
                        <p className="paragraph-16 text-c">A polymath who loves solving problems and happens to be a passionate and excellent programmer.</p>
                    </div>
                    <div id="about" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">About Me</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">About Me</h3>
                        <p className="paragraph-16 text-c">
                            As a polymath, I am passionate about a broad spectrum of subjects and disciplines, with computer science being one of them.
                            My curiosity and drive for learning drives me to constantly explore new areas, ranging from science and technology to art and philosophy.
                        </p>
                        <p className="paragraph-16 text-c">
                            I find immense fulfillment in crafting innovative solutions that enhance everyday life while also experimenting with emerging technologies
                            to expand my understanding.
                        </p>
                    </div>
                     <div id="research-interests" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Research Interests</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Research Interests</h3>
                        <p className="paragraph-16 text-c">
                            With ongoing empirical research in machine learning at UMass Amherst and prior experience in app development at Microsoft, my work spans both methodological inquiry and practical deployment of ML systems. I’ve contributed to projects involving LLM-based agentic systems for telemetry analysis and evaluation frameworks for retrieval-augmented generation (RAG) in collaboration with Prof. Andrew McCallum and Goldman Sachs. I also helped develop SBICE, a simulation-based inference framework for causal benchmarking under Prof. David Jensen. My primary research interest lies in self-supervised and weakly-supervised learning methods, particularly for solving ML tasks in low-data regimes. This has led me to explore a range of computer vision problems, including fine-grained classification, object detection, segmentation, and human motion synthesis. Looking ahead, I plan to extend this work into audio synthesis and recommendation systems, continuing to explore underconstrained domains where data efficiency and generalization are critical.
                        </p>
                    </div>

                    <div id="work-experience" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Work Experience</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Work Experience</h3>
                        <PortfolioJobCard 
                            description='As part of a project with Prof. Andrew McCallum and Goldman Sachs, I am designing a benchmark dataset generation workflow for evaluating Retrieval Augmented Generation (RAG) systems on two financial question-answering tasks: single-document and multi-document QA. This work involves experimenting with two novel context-retrieval strategies and using prompt engineering techniques on large language models such as Qwen 32B and LLaMA 70B to create a high-quality dataset for reliable RAG evaluation.'
                            companyName='University of Massachusetts Amherst' position='Graduate Researcher' periodLocation='January 2025 - Present, Remote'
                            skills={["Pytorch", "vLLM", "Langchain", "RAG", "LLMs"]}></PortfolioJobCard>
                        <PortfolioJobCard 
                            description='I helped develop SBICE under the guidance of Prof. David Jensen—a simulation-based inference framework designed to infer posteriors over data-generating parameters for causal evaluation. Using SBICE, I generated three realistic synthetic datasets and tuned their parameters to achieve an AUC of approximately 0.5, demonstrating close alignment with the source data and supporting more reliable causal estimator selection.'
                            companyName='Knowledge Discovery Lab' position='Graduate Researcher' periodLocation='September 2024 - May 2025, Amherst, Massachusetts, USA'
                            skills={["Pytorch", "Pytorch Lightning", "Ray", "Bayesian Inference", "Causal Inference"]}></PortfolioJobCard>
                        <PortfolioJobCard 
                            description={<div>
                                <p>
                                  As a <strong>Lead Front-End Developer</strong> at Microsoft India’s Azure Cloud and AI UX team, I built scalable user interfaces across platforms for enterprise clients such as <strong>Ford</strong>, <strong>Outokumpu</strong>, the <strong>Monetary Authority of Singapore</strong>, and <strong>Petronas</strong>. I specialized in modern frontend stacks—<code>React</code>, <code>Redux</code>, <code>Angular</code>, <code>Vue</code>—with backend integrations via the <code>.NET</code> framework. Key projects include:
                                </p>
                          
                                <ul>
                                  <li>
                                    <strong>ASIS (Outokumpu):</strong> Built web solutions to support steel defect detection using ML, with real-time data updates via <code>SignalR</code> and rich visualizations using <code>Chart.js</code>.
                                  </li>
                                  <li>
                                    <strong>SFF x SWITCH (Monetary Authority of Singapore):</strong> Engineered a <code>React</code>-based virtual event platform capable of hosting 1M+ users, with <code>Teams</code> integration and rigorous performance testing.
                                  </li>
                                  <li>
                                    <strong>Ford UI Library:</strong> Led the creation of a Ford-branded <code>Material UI</code>-based component library, ensuring responsive design, accessibility, and cross-browser/device compatibility.
                                  </li>
                                </ul>
                          
                                <p>
                                  This experience reflects both strong engineering execution and stakeholder collaboration across high-impact, enterprise-scale products.
                                </p>
                              </div>}
                            companyName='Microsoft' position='Software Engineer' periodLocation='July 2019 - August 2023, Hyderabad, India'
                            skills={['React', 'Angular', 'Vue', 'ASP.NET', 'C#', 'Typescript', 'Javascript']}></PortfolioJobCard>
                    </div>
                    <div id="publications" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Publications</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Publications</h3>
                        <PublicationCard title="Exploring Human Motion Synthesis with Latent-Space GANs"
                            authors={["Avinash Amballa", "Gayathri Akkinapalli", "Vinitra Muralikrishnan"]}
                            venue="Proceedings of the Winter Conference on Applications of Computer Vision"
                            description="Human motion synthesis conditioned on textual input has gained significant attention in recent years due to its potential applications in various domains such as gaming film production and virtual reality. Conditioned Motion synthesis takes a text input and outputs a 3D motion corresponding to the text. While previous works have explored motion synthesis using raw motion data and latent space representations with diffusion models these approaches often suffer from high training and inference times. In this paper we introduce a novel framework that utilizes Generative Adversarial Networks (GANs) in the latent space to enable faster training and inference while achieving results comparable to those of the state-of-the-art diffusion methods. We perform experiments on the HumanML3D HumanAct12 benchmarks and demonstrate that a remarkably simple GAN in the latent space achieves a FID of 0.482 with more than 91% in FLOPs reduction compared to latent diffusion model. Our work opens up new possibilities for efficient and high-quality motion synthesis using latent space GANs."
                            publicationPdfUrl={"https://openaccess.thecvf.com/content/WACV2025W/ImageQuality/papers/Amballa_LS-GAN_Human_Motion_Synthesis_with_Latent-space_GANs_WACVW_2025_paper.pdf"}/>
                    </div>
                    <div id="projects" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Projects</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Projects</h3>
                        <PortfolioProjectCard title="Improving Generative Methods for Causal Evaluation via Simulation-Based Inference"
                            snapshotSize='orig'
                            description='Simulation-Based Inference for Causal Evaluation (SBICE) is a framework for generating synthetic datasets that
                            closely resemble real-world observational data while incorporating uncertainty in key generative parameters such as treatment effect
                            and confounding. Unlike prior methods that rely on fixed, user-specified values, SBICE uses simulation-based inference to infer
                            posterior distributions over these parameters from a source dataset. This approach enables realistic, data-consistent evaluation of causal estimators under
                            uncertainty. (Under review at NeurIPS 2025).'
                            snapshotSrc={sbiceProjectSrc}/>
                        <PortfolioProjectCard title="UAV Log Viewer - Agentic Chatbot"
                            snapshotSize='orig'
                            description='As part of a volunteer initiative with Arena, I developed an agentic chatbot to interpret and analyze UAV telemetry logs
                            through natural language interaction. The system follows a modular, agent-based architecture in which specialized agents collaborate
                            to understand user queries, retrieve relevant telemetry data, and synthesize concise responses. This structure supports dynamic query
                            planning, step-wise data extraction, and context-aware follow-up interactions. The backend was built using Python and FastAPI, leveraging
                            LangGraph and LangChain for agent coordination and Google Gemini as the LLM engine. The existing Vue.js frontend was integrated with this backend
                            to deliver a seamless chat experience. This project showcases how agentic architectures can effectively support complex data exploration in
                            high-dimensional, structured domains like UAV telemetry.'
                            snapshotSrc={agenticChatbotProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/UAVLogViewer/tree/dev/vinitra"/>
                        <PortfolioProjectCard title="Enhancing Camouflaged Object Segmentation in Limited Data Setting"
                            snapshotSize='fill'
                            description='This project addresses the challenge of detecting camouflaged objects, which blend so seamlessly with their environment that they are difficult
                            to detect even by humans. Our proposed solution leverages two distinct data augmentation techniques — style transfer and data synthesis using Stable Diffusion -
                            to enhance the training dataset and improve the IoU score. Through style transfer, we apply natural textures to existing training images, enriching the dataset,
                            while Stable Diffusion is employed to generate entirely new, realistic images from text prompts. Our approach outperforms the benchmark Camouflaged Object Detection model,
                            SINet, and includes a comparative analysis with SAM.'
                            snapshotSrc={cosProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/UMass-CS670-Project"/>
                        <PortfolioProjectCard title="Exploring Human Motion Synthesis with Latent-Space GANs"
                            snapshotSize='fill'
                            description='This project introduces a novel framework for human motion synthesis conditioned on text
                            inputs, leveraging Generative Adversarial Networks (GANs) in the latent space. By optimizing for faster
                            training and inference, it achieves efficient and high-quality results, with experiments on the HumanML3D
                            benchmark demonstrating an FID of 2.39 and a diversity score of 8.92. The work explores the potential of simpler
                            architectures, incorporating elements from StyleGAN and VAE models, to enhance performance in low-resource settings.'
                            snapshotSrc={motionSynthesisProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/UMass-CS674-Project"/>
                        <PortfolioProjectCard title="Defence against Adversarial Patches"
                            snapshotSize='fill'
                            description='This project tackles the challenge of defending deep neural networks against adversarial patches designed
                            to manipulate model predictions. Various defense techniques were explored using attack patches of different shapes (square, circle, star),
                            reducing the misclassification error from 67% to 13%. The approach generalizes across different attack types and demonstrates robustness to non-adversarial,
                            patch-like objects, offering insights into improving model security in real-world applications.'
                            snapshotSrc={daapProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/682-Project-DAAP"/>
                        {/* 
                        <PortfolioProjectCard title='Image Colorization'
                            description='In this project I attempt to colorize grayscale images. This project is a continuation of a course assignment at UMass, CS689.
                            I begin working with a custom dataset that was provided with the course assignment. After ablation studies performed with unet (with different number of layers) and convolution nets,
                            I am able to achieve a test loss of 0.0952 with the dataset. I am currently building deeper conv-nets for handling grayscaled imagenette images.'
                            snapshotSrc={colorizationProjectSrc} githubRepoUrl={'https://github.com/VinitraMk/Image-Colorization'}/>
                        */}
                    </div>
                </div>
                <footer className="portfolio-main__footer">
                    
                    <p className="paragraph-12 text-c">Design loosely inspired by <a className='fc-purple' href="https://www.figma.com/design/QEJiULtK3ZgM4aIoNlwnmc/Developer-Portfolio-Design-(Community)?node-id=0-3&t=LqKNhcc29KMcjEsA-0">Figma template</a> and coded in Visual Studio Code.
                    Built with React, Typescript and SCSS, deployed with Github Pages. All text is set in the Poppins typeface.</p>
                </footer>
            </main>
        </>
    );
}

export default App;
