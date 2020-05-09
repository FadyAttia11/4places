import React from 'react'
import './Discover.css'

const Discover = props => (
    <div className="Discover-main">
        <div className="Discover-sentence">
            <h2><span>Discover</span> the best places of your choice by their categories</h2>
        </div>

        <div className="Discover-categories">
            <ul>
                <li><a href="/categories/Food"></a>Food</li>
                <li><a href="/categories/Drinks"></a>Drinks</li>
                <li><a href="/categories/Cinema"></a>Cinema</li>
                <li><a href="/categories/Sport"></a>Sport</li>
                <li><a href="/categories/Kids"></a>Kids</li>
            </ul>
        </div>
    </div>
)

export default Discover