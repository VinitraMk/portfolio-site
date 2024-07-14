import React from 'react';
import PortfolioHamburger from '../../atoms/icons/hamburger';
import PortfolioButton from '../../atoms/button/button';
import PortfolioNavbar from '../navbar/navbar';

function PortfolioHeader() {
    const [displayNavMenu, setDisplayNavMenu] = React.useState(false);

    const handleClick = () => {
        window.open('/portfolio-site', '_self');
    }

    return (
        <header className="portfolio-header">
            <div className="portfolio-header__content">
                <div className="cursor-pointer" onClick={handleClick}>
                    <div className="portfolio-header__fname">Vinitra</div>
                    <div className="portfolio-header__lname">Muralikrishnan</div>
                </div>
                <div className="d-iflex hidden-sm hidden-md">
                    <a href="#about" className='portfolio-header__btn-link'>About</a>
                    <a href="#work-experience" className='portfolio-header__btn-link m-l-2'>Work Experience</a>
                    <a href="#projects" className='portfolio-header__btn-link m-l-2'>Projects</a>
                </div>
                <div className="hidden-lg">
                    <PortfolioButton type="icon-button" onClick={() => setDisplayNavMenu(true)}>
                        <PortfolioHamburger/>
                    </PortfolioButton>
                    <PortfolioNavbar display={displayNavMenu} onClose={() => setDisplayNavMenu(false)}/>
                </div>
            </div>
        </header>
    );
}

export default PortfolioHeader;
