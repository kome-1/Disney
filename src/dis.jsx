import React from 'react'
import './dis.css'

function Dis() {
    return(
        <>
        <div id='first-page'>

            <nav>
            <div id='list'>
                <img id='log' src={'/public/logo.png'} alt="Logo" />
                <ul>
                    <li><a href="">DISNEY+</a></li>
                    <li><a href="">SHOP</a></li>
                    <li><a href="">MOVIES</a></li>
                    <li><a href="">SHOWS</a></li>
                    <li><a href="">PARK</a></li>
                </ul>
            </div>
            </nav>
            
            <img id='log2' src={'/public/swift.png'} alt="Swift" />

            <div id='text-on-image'>
              <img id='log3' src={'/public/font.png'} alt="Font" />
            </div>

            <div id='text-on-image2'>
              <p>Includes "cardigan" and four additional acoustis songs.</p>
              <p id='line2'>Now streaming on Disney+.</p>
               <button>SUBSCRIBE NOW*</button>
            </div>
            
        </div>
        </>
    )
}
export default Dis