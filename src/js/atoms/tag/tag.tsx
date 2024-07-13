import React from "react";

interface PortfolioTagProps {
    title: string;
}

function PortfolioTag(props : PortfolioTagProps) {
    return (
        <span className="portfolio-tag">
            <span className="portfolio-tag__body">{props.title}</span>
        </span>
    )
}

export default PortfolioTag;
