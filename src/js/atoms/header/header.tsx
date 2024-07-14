import React from 'react';

function PortfolioHeader() {
    return (
        <header className="portfolio-header">
            <div className="portfolio-header__content">
                <div>
                    <div className="portfolio-header__fname">Vinitra</div>
                    <div className="portfolio-header__lname">Muralikrishnan</div>
                </div>
                <div className="d-iflex hidden-sm">
                    <a href="#about" className='portfolio-header__btn-link'>About</a>
                    <a href="#work-experience" className='portfolio-header__btn-link m-l-2'>Work Experience</a>
                    <a href="#projects" className='portfolio-header__btn-link m-l-2'>Projects</a>
                </div>
            </div>
        </header>
    );
}

export default PortfolioHeader;
