import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style = {
                    {
                        backgroundSize: 'cover',
                        backgroundImage: 'url(https://www.asianentrepreneur.org/wp-content/uploads/2018/09/itsgreatoutthere-unsplash-03.jpg)'
                    }
                }
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem creando cositas en react :D
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
