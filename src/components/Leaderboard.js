import { useState } from 'react';
import { useAuth } from "../hooks/AuthProvider.js";
import '../styles/leaderboard.css';

const Leaderboard = () => {
    const auth = useAuth();

    const calculateHighScores = (users) => {
        let allScores = [];
        users.forEach(user => {
            user.scores.forEach(score => {
                allScores.push({ username: user.username, score: score });
            });
        });

        allScores.sort((a, b) => b.score - a.score);
    
        return allScores;
    };
    
    
    const sortedScores = calculateHighScores(auth.users);
    console.log(sortedScores)
        return (
            <div className='leaderboard-cont'>
                <h1>Leaderboard</h1>
                <div className='scores first'>
                    <i className="fa-solid fa-crown"></i>
                    <div className='leaderboard-ranking'>1st</div>
                    <div className='leaderboard-username'>{sortedScores[0]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[0]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                <div className='scores second'>
                    <div className='leaderboard-ranking'>2nd</div>
                    <div className='leaderboard-username'>{sortedScores[1]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[1]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                <div className='scores third'>
                    <div className='leaderboard-ranking'>3rd</div>
                    <div className='leaderboard-username'>{sortedScores[2]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[2]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                <div className='scores'>
                    <div className='leaderboard-ranking'>4</div>
                    <div className='leaderboard-username'>{sortedScores[3]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[3]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                <div className='scores'>
                    <div className='leaderboard-ranking'>5</div>
                    <div className='leaderboard-username'>{sortedScores[4]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[4]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                <div className='scores'>
                    <div className='leaderboard-ranking'>6</div>
                    <div className='leaderboard-username'>{sortedScores[5]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[5]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                <div className='scores'>
                    <div className='leaderboard-ranking'>7</div>
                    <div className='leaderboard-username'>{sortedScores[6]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[6]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                <div className='scores'>
                    <div className='leaderboard-ranking'>8</div>
                    <div className='leaderboard-username'>{sortedScores[7]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[7]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                <div className='scores'>
                    <div className='leaderboard-ranking'>9</div>
                    <div className='leaderboard-username'>{sortedScores[8]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[8]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                <div className='scores'>
                    <div className='leaderboard-ranking'>10</div>
                    <div className='leaderboard-username'>{sortedScores[9]?.username}</div>
                    <div className='leaderboard-score'>{sortedScores[9]?.score}<div className='leaderboard-wpm'>WPM</div></div>
                </div>
                
            </div>
        )
}

export default Leaderboard;