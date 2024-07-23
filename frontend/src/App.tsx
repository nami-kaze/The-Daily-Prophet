import React from 'react';
import GoogleSlide from './components/GoogleSlide/GoogleSlide';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';

function App() {
    return (
        <div>
            <h1>Welcome to My Digital Notice Board</h1>
            <GoogleSlide />
            <PomodoroTimer />
        </div>
    );
}

export default App;
