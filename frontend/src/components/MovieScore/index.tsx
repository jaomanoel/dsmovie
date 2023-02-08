import MovieStars from '../MovieStars';
import React, {useState} from 'react'

import "./style.css";

function index() {
    const [score, setScore] = useState(3.5);
    const [count, setCount] = useState(13);

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
                <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default index