import React from "react"
import PortfolioClose from "../../atoms/icons/close"
import PortfolioButton from "../../atoms/button/button";

interface PortfolioNavbarProps {
    display: boolean;
    onClose: () => void;
}

export default function PortfolioNavbar({ display = false, onClose = () => {} } : PortfolioNavbarProps) {
    return (
        <div className={`portfolio-navoverlay ${display ? 'active': ''}`}>
            <div className="portfolio-navoverlay__header">
                <PortfolioButton type="icon-button" onClick={onClose}>
                    <PortfolioClose/>
                </PortfolioButton>
            </div>
            <div className="portfolio-navoverlay__content">
                <ul>
                    <li><a href="#about" onClick={onClose}>About</a></li>
                    <li><a href="#work-experience" onClick={onClose}>Work Experience</a></li>
                    <li><a href="#projects" onClick={onClose}>Projects</a></li>
                </ul>
            </div>
        </div>
    )
}