import React from 'react';

interface PortfolioHamburgerProps {
    color?: string;
}

export default function PortfolioHamburger({ color = "#fff" }: PortfolioHamburgerProps) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_17_4624)">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill={color}/>
            </g>
            <defs>
            <clipPath id="clip0_17_4624">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )

}