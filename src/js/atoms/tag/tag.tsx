import React from "react";

interface PortfolioTagProps {
    title: string;
    type?: string;
    onClick?: () => void
}

function PortfolioTag(props : PortfolioTagProps = { title: 'title', type: 'default' }) {

    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    }
    if (props.type === "project") {
        return (<span className="portfolio-tag-project" onClick={() => handleClick()}>
            {props.title}
        </span>)
    }
    return (
        <span className="portfolio-tag-def" onClick={() => handleClick()}>
            <span className="portfolio-tag-def__body">{props.title}</span>
        </span>
    )
}

export default PortfolioTag;
