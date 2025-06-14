import React from "react";
import PortfolioTag from "../../atoms/tag/tag";

interface PublicationCardProps {
    title: string;
    authors: string[];
    venue: string;
    description: string | React.ReactElement;
    publicationPdfUrl?: string | null;
}

export default function PublicationCard(props: PublicationCardProps) {

    const handleSnapshotClick = () => {
        if (props.publicationPdfUrl && props.publicationPdfUrl!== '') {
            window.open(props.publicationPdfUrl, '_blank');
        } else {
            alert('Oops! Github or project site url not provided!')
        }
    }
    return (
        <div className="portfolio-project m-b-12">
            <div className="portfolio-project__content portfolio-project__content--fullw">
                <div className="portfolio-project__title">{props.title}</div>
                <div className="portfolio-project__citation"><span className="portfolio-project__citation--venue">{props.venue}</span> <span>{props.authors.join(", ")}</span></div>
                <div className="portfolio-project__desc">
                    <div className="portfolio-project__desc-text">
                        {props.description}
                    </div>
                    <div className="d-flex p-x-3 p-b-3">
                        <PortfolioTag type="project" title="Paper" onClick={handleSnapshotClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}