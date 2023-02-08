import React from 'react'
import githubIcon from '../../assets/imgs/github.svg';
import './styles.css';

function index() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>

                    <a href="https://github.com/jaomanoel" target="_blank">
                        <div className='dsmovie-contact-container'>
                            <img src={githubIcon} alt="GitHub" />
                            <p>/jaomanoel</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default index