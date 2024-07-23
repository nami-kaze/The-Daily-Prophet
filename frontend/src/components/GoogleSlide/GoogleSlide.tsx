import React from 'react';
import './GoogleSlide.css'; // Import CSS file for styling

const GoogleSlide: React.FC = () => {
    return (
        <div className="google-slide-container">
            <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vS4ockj5ilR0GTbCgF1j6D8nyNVWSHi_x9xpqZ8hRx8VyJEFfVkNPBOsum92SZjJZHxYJoQ_skWeHtT/embed?start=true&loop=true&delayms=3000"
                width="100%"
                height="600"
                frameBorder="0"
                allow="autoplay; fullscreen"
                title="Google Slide"
            ></iframe>
        </div>
    );
};

export default GoogleSlide;
