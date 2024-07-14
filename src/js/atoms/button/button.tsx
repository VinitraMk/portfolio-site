import React from "react";

interface PortfolioButtonProps {
    height?: number | string;
    width?: number | string;
    children?: React.ReactElement | null;
    type: string;
    onClick: () => void
}

export default function PortfolioButton({ height = "24px", width = "24px", children = null, type = "icon-button", onClick = () => {}} : PortfolioButtonProps) {
    return (
        <>
            {
                type === 'icon-button' && <button onClick={onClick} style={{height: height, width: width}} className="portfolio-btn-transparent">
                {children}
            </button>}
        </>
    )
}
