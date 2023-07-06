import React, { useState } from 'react';
import './poll.css';
const Poll = () => {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const dummyData = ['Oshi no ko', 'Naruto', 'Bleach', 'Onepiece'];
    // Function to handle vote selection
    const handleVote = (option) => {
        setSelectedOption(option);
    };

    // Function to submit the poll
    const submitPoll = () => {
        // Handle the poll submission here
    };

    return (
        <div className='poll-container'>
            <div className='poll-header'>
                <h3 className='poll-title'>Monthly Anime Selection</h3>
            </div>

            <div className='poll-body'>
                {/* Render poll options */}
                {dummyData.map((option, index) => (
                    <div key={index} className='poll-option'>
                        <label>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleVote(option)}
                            />
                            {option}
                        </label>
                    </div>


                ))}
            </div>
            <div className='poll-footer'>
                <button onClick={submitPoll}>Submit</button>
            </div>
            {/* Render submit button */}
            <hr style={{ marginTop: '16px' }} />
        </div>
    );
};

export default Poll;
