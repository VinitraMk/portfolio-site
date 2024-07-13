import React from "react";

export default function PortfolioProjectCard() {
    return (
        <div className="portfolio-project">
            <div className="portfolio-project__content">
                <div className="portfolio-project__title">Project Title</div>
                <div className="portfolio-project__desc">
                    <div className="portfolio-project__desc-text">
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.

                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                    </div>
                </div>
            </div>
            <div className="portfolio-project__snapshot"></div>
        </div>
    )
}