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

    const alen = props.authors.length;
    const handleSnapshotClick = () => {
        if (props.publicationPdfUrl && props.publicationPdfUrl!== '') {
            window.open(props.publicationPdfUrl, '_blank');
        } else {
            alert('Oops! Github or project site url not provided!')
        }
    }
    return (
        <div className="portfolio-publication m-b-12">
            <div className="portfolio-publication__content">
                <div className="portfolio-publication__title">{props.title}</div>
                <div className="portfolio-publication__citation"><span className="portfolio-publication__citation--venue m-r-2">{props.venue}</span>
                    <span>
                    {props.authors && props.authors.length > 0 &&
                        props.authors.map((author, aidx) => author.startsWith("Vinitra") ?<span className="fw-bold fs-italic">{author}{aidx === alen - 1 ? '' : ', '}</span>: <span className="fs-italic">{author}{aidx === alen - 1 ? '' : ', '}</span>)}
                    </span>
                </div>
                <div className="portfolio-publication__desc">
                    <div className="portfolio-publication__desc-text">
                        {props.description}
                    </div>
                    <div className="d-flex">
                        <PortfolioTag type="project" title="PDF" onClick={handleSnapshotClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}