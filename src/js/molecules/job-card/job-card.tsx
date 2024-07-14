import React from "react";
import PortfolioTag from "../../atoms/tag/tag";

interface PorfolioJobProps {
    companyName: string;
    position: string;
    periodLocation: string;
    description: string;
    skills: string[];
}

export default function PortfolioJobCard(props: PorfolioJobProps) {
    return (
        <div className="portfolio-job">
            <div className="portfolio-job__header">
                <div>
                    <div className="portfolio-job__company">
                       {props.companyName} 
                    </div>
                    <div className="portfolio-job__title">
                        {props.position}
                    </div>
                </div>
                <div className="portfolio-job__period">
                    {props.periodLocation}
                </div>
            </div>
            <p className="portfolio-job__desc">
                {/*Currently, I am working on WebHR Mobile Application, WebHR is a Cloud based Social HR Software for SMEs by Verge Systems Inc.
                WebHR is currently used in over 160 countries world wide by thousands of organizations to manage HR, As a React.js developer
                with 1.5 year of experience, I have a strong foundation in creating dynamic and responsive mobile and web applications.
                My experience with React Native has allowed me to develop cross-platform mobile applications that run seamlessly on both iOS
                and Android platforms. Additionally, my proficiency in React.js has equipped me with the skills to create fast, scalable, and
                dynamic web pages with excellent user experiences. I have a deep understanding of component-based architecture and state management, and
    I am well-versed in the latest web development trends and technologies.*/}
                {props.description}
            </p>
            <div className="d-flex flex-wrap">
                {props.skills !== null && props.skills.length > 0 && props.skills.map((skill:string) => {
                    return (
                        <PortfolioTag title={skill}/>
                    )
                })}
            </div>
        </div>
    )
}