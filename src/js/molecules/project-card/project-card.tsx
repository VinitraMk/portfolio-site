import React from "react";

interface PortfolioProjectCardProps {
    title: string;
    description: string | React.ReactElement;
    githubRepoUrl?: string | null;
    projectSiteUrl?: string | null;
    snapshotSrc: string;
}

export default function PortfolioProjectCard(props: PortfolioProjectCardProps) {

    const handleSnapshotClick = () => {
        if (props.projectSiteUrl && props.projectSiteUrl !== '') {
            window.open(props.projectSiteUrl, '_blank');
        } else if (props.githubRepoUrl && props.githubRepoUrl !== '') {
            window.open(props.githubRepoUrl, '_blank');
        } else {
            alert('Oops! Github or project site url not provided!')
        }
    }
    return (
        <div className="portfolio-project">
            <div className="portfolio-project__content">
                <div className="portfolio-project__title">{props.title}</div>
                <div className="portfolio-project__desc">
                    <div className="portfolio-project__desc-text">
                        {props.description}
                    </div>
                </div>
            </div>
            <div className="portfolio-project__snapshot" onClick={handleSnapshotClick}>
                <img className="portfolio-project__snapshot-image" src={props.snapshotSrc}/>
            </div>
        </div>
    )
}