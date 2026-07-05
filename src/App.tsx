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
import motionSynthesisProjectSrc from './assets/images/project-snapshots/motion-synthesis-project-new.gif';
import motionEditingProjectSrc from './assets/images/project-snapshots/motion-editing-project.gif';
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
                            I am currently a Machine Learning Engineer on the Model Factory team at d-Matrix, where I develop compiler tools to lower PyTorch models onto d-Matrix’s proprietary AI hardware accelerators.
                            <br/>
                            I co-authored SBICE, a simulation-based inference framework for causal benchmarking under Prof. David Jensen, which has been accepted at CLeaR 2026. I also collaborated with Prof. Andrew McCallum and Goldman Sachs, to develop evaluation frameworks for retrieval-augmented generation (RAG), focusing on robust, task-grounded assessment of LLM-based systems.
                            <br/>
                            Prior to this, my empirical research in machine learning at UMass Amherst and my full-stack engineering experience at Microsoft have allowed me to bridge methodological inquiry with practical deployment. My primary research interests lie in self-supervised and weakly supervised learning methods, particularly for solving ML tasks in low-data regimes. My current focus is on generative problems related to 3D content such as human motion or shapes.
                            <br/>
                        </p>
                    </div>

                    <div id="work-experience" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Work Experience</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Work Experience</h3>
                        <PortfolioJobCard description="As part of the compiler team, I develop compiler tools to lower PyTorch models onto d-Matrix's proprietary hardware accelerator. This includes implementing and testing tensor and pipeline model parallelism, designing quantization configurations, running calibration and benchmark evaluations, and extending the framework to support new model architectures."
                            companyName='d-Matrix Corporation' position='Machine Learning Engineer' periodLocation='September 2025 - Present, Remote'
                            skills={["Pytorch", "Python", "MLIR", "LLMs"]}></PortfolioJobCard>
                        <PortfolioJobCard 
                            description='Designed and implemented a fully automated benchmark dataset generation pipeline for evaluating retrieval-augmented generation (RAG) systems in financial question answering, as part of a collaboration with Goldman Sachs and Prof. Andrew McCallum at UMass Amherst. Led the end-to-end process from SEC 10-K document preprocessing and salient entity detection to high-variance question generation using prompt-engineered LLMs. Incorporated LLM-as-a-judge (using Gemini) for answer quality control and conducted rigorous RAG benchmarking using GPT-4 and LLaMA-70B. The resulting datasets support multi-hop, multi-document QA and enable robust, model-agnostic evaluation of domain-specific LLM pipelines.'
                            companyName='UMass Amherst - Goldman Sachs' position='Graduate Researcher' periodLocation='January 2025 - August 2025, Remote'
                            skills={["Pytorch", "vLLM", "Langchain", "RAG", "LLMs"]}></PortfolioJobCard>
                        <PortfolioJobCard 
                            description='I helped develop SBICE under the guidance of Prof. David Jensen—a simulation-based inference framework under Prof. David Jensen, designed to generate realistic, data-consistent synthetic datasets for evaluating causal estimators. SBICE addresses the challenge of arbitrary hand-tuned data-generating processes by using likelihood-free inference (SMC-ABC) to infer plausible generative model configurations from real-world observational data. These inferred parameters are then used with flexible generative models (e.g., Frugal Flows) to create synthetic datasets that preserve the structural properties of the source data, enabling principled, uncertainty-aware benchmarking of causal inference methods. The work is currently under review at NeurIPS 2025.'
                            companyName='Knowledge Discovery Lab' position='Graduate Researcher' periodLocation='September 2024 - May 2025, Amherst, Massachusetts, USA'
                            skills={["Pytorch", "Pytorch Lightning", "Ray", "Bayesian Inference", "Causal Inference"]}></PortfolioJobCard>
                        <PortfolioJobCard 
                            description={<div>
                                <p>
                                  As a <strong>Full-Stack Engineer</strong> at Microsoft India’s Azure Cloud and AI UX team, I built scalable user interfaces across platforms for enterprise clients such as <strong>Ford</strong>, <strong>Outokumpu</strong>, the <strong>Monetary Authority of Singapore</strong>, and <strong>Petronas</strong>. I specialized in modern frontend stacks—<code>React</code>, <code>Redux</code>, <code>Angular</code>, <code>Vue</code>—with backend integrations via the <code>.NET</code> framework. Key projects include:
                                </p>
                          
                                <ul>
                                  <li>
                                    <strong>ASIS (Outokumpu):</strong> Delivered a full-stack web dashboard for steel-defect detection using <code>React/Redux</code> and <code>ASP.NET</code>. Implemented <code>SignalR</code> and <code>Azure Redis Cache</code> for real-time telemetry and faster page loads, with <code>Chart.js</code> visualizations for quality analytics.
                                  </li>
                                  <li>
                                    <strong>SFF x SWITCH (Monetary Authority of Singapore):</strong> Built and optimized a <code>React</code>-based event platform with Microsoft Teams integration; used Lighthouse and A/B testing to eliminate performance bottlenecks, enabling smooth, large-scale virtual conferences.
                                  </li>
                                  <li>
                                    <strong>Ford UI Library:</strong> Led the creation of a Ford-branded <code>Material UI</code>-based component library, ensuring responsive design, accessibility, and cross-browser/device compatibility.
                                  </li>
                                </ul>
                              </div>}
                            companyName='Microsoft' position='Full-Stack Engineer' periodLocation='July 2019 - August 2023, Hyderabad, India'
                            skills={['React', 'Angular', 'Vue', 'ASP.NET', 'C#', 'Typescript', 'Javascript']}></PortfolioJobCard>
                    </div>
                    <div id="publications" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Publications</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Publications</h3>
                        <PublicationCard title="Improving Generative Methods for Causal Evaluation via Simulation-Based Inference"
                            authors={["Pracheta Amaranath", "Vinitra Muralikrishnan", "Amit Sharma", "David Jensen"]}
                            venue="Proceedings of the Causal Learning and Reasoning"
                            description="Simulation-based Inference for Causal Evaluation (SBICE) addresses the challenge of generating synthetic datasets that both resemble real-world observational data and vary key causal parameters (treatment effects, confounding) for benchmarking estimators. Instead of requiring fixed, hand-chosen generative models and parameter values, SBICE treats both as uncertain and infers their posterior distributions from a source dataset using simulation-based inference. This yields realistic synthetic datasets whose causal estimates align with those of the source data, improving the robustness and reliability of causal estimator evaluation."
                            publicationPdfUrl={"https://arxiv.org/pdf/2509.02892"}/>
                        <PublicationCard title="Exploring Human Motion Synthesis with Latent-Space GANs"
                            authors={["Avinash Amballa", "Gayathri Akkinapalli", "Vinitra Muralikrishnan"]}
                            venue="Proceedings of the Winter Conference on Applications of Computer Vision"
                            description="Human motion synthesis conditioned on textual input has gained significant attention in recent years due to its potential applications in various domains such as gaming film production and virtual reality. Conditioned Motion synthesis takes a text input and outputs a 3D motion corresponding to the text. While previous works have explored motion synthesis using raw motion data and latent space representations with diffusion models these approaches often suffer from high training and inference times. In this paper we introduce a novel framework that utilizes Generative Adversarial Networks (GANs) in the latent space to enable faster training and inference while achieving results comparable to those of the state-of-the-art diffusion methods. We perform experiments on the HumanML3D HumanAct12 benchmarks and demonstrate that a remarkably simple GAN in the latent space achieves a FID of 0.482 with more than 91% in FLOPs reduction compared to latent diffusion model. Our work opens up new possibilities for efficient and high-quality motion synthesis using latent space GANs."
                            publicationPdfUrl={"https://openaccess.thecvf.com/content/WACV2025W/ImageQuality/papers/Amballa_LS-GAN_Human_Motion_Synthesis_with_Latent-space_GANs_WACVW_2025_paper.pdf"}/>
                    </div>
                    <div id="projects" className="portfolio-main__section">
                        <h3 className="title-45 text-c text-uppercase hidden-sm hidden-md">Projects</h3>
                        <h3 className="title-32 text-c text-uppercase hidden-lg">Projects</h3>
                        {/*<PortfolioProjectCard title="Improving Generative Methods for Causal Evaluation via Simulation-Based Inference"
                            snapshotSize='orig'
                            description='Simulation-Based Inference for Causal Evaluation (SBICE) is a framework for generating synthetic datasets that
                            closely resemble real-world observational data while incorporating uncertainty in key generative parameters such as treatment effect
                            and confounding. Unlike prior methods that rely on fixed, user-specified values, SBICE uses simulation-based inference to infer
                            posterior distributions over these parameters from a source dataset. This approach enables realistic, data-consistent evaluation of causal estimators under
                            uncertainty. (Under review at NeurIPS 2025).'
                            snapshotSrc={sbiceProjectSrc}/>*/}
                        <PortfolioProjectCard title="Motion Synthesis using Shortcut Diffusion"
                            snapshotSize='fill'
                            description='This project explores whether a shortcut diffusion model can significantly speeds up inference for text-conditioned motion generation, while maintaining the motion quality of a diffusion-based baseline.'
                            snapshotSrc={motionSynthesisProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/motion-synthesis"/>
                        {/*<PortfolioProjectCard title="Exploring Human Motion Synthesis with Latent-Space GANs"
                            snapshotSize='fill'
                            description='This project introduces a novel framework for human motion synthesis conditioned on text
                            inputs, leveraging Generative Adversarial Networks (GANs) in the latent space. By optimizing for faster
                            training and inference, it achieves efficient and high-quality results, with experiments on the HumanML3D
                            benchmark demonstrating an FID of 2.39 and a diversity score of 8.92. The work explores the potential of simpler
                            architectures, incorporating elements from StyleGAN and VAE models, to enhance performance in low-resource settings.'
                            snapshotSrc={motionSynthesisProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/UMass-CS674-Project"/>*/}
                        <PortfolioProjectCard title="Enhancing Camouflaged Object Segmentation in Limited Data Setting"
                            snapshotSize='fill'
                            description='This project addresses the challenge of detecting camouflaged objects, which blend so seamlessly with their environment that they are difficult
                            to detect even by humans. Our proposed solution leverages two distinct data augmentation techniques — style transfer and data synthesis using Stable Diffusion -
                            to enhance the training dataset and improve the IoU score. Through style transfer, we apply natural textures to existing training images, enriching the dataset,
                            while Stable Diffusion is employed to generate entirely new, realistic images from text prompts. Our approach outperforms the benchmark Camouflaged Object Detection model,
                            SINet, and includes a comparative analysis with SAM.'
                            snapshotSrc={cosProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/UMass-CS670-Project"/>
                        <PortfolioProjectCard title="Defence against Adversarial Patches"
                            snapshotSize='fill'
                            description='This project tackles the challenge of defending deep neural networks against adversarial patches designed
                            to manipulate model predictions. Various defense techniques were explored using attack patches of different shapes (square, circle, star),
                            reducing the misclassification error from 67% to 13%. The approach generalizes across different attack types and demonstrates robustness to non-adversarial,
                            patch-like objects, offering insights into improving model security in real-world applications.'
                            snapshotSrc={daapProjectSrc}
                            githubRepoUrl="https://github.com/VinitraMk/682-Project-DAAP"/>
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
