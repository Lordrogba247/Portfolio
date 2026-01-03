import React from 'react'
import './Portfolio.css'
import image1 from '/src/assets/New Year.png'
import image2 from '/src/assets/Practice.jpg'
import image3 from '/src/assets/Pretty Crown.jpg'
import image4 from '/src/assets/December.png'
import image5 from '/src/assets/MK COUTURE 1.jpg'
import image6 from '/src/assets/New.jpg'
import image7 from '/src/assets/October.jpg'
import image8 from '/src/assets/Wealth apparel 2.jpg'
import image9 from '/src/assets/November.png'
import image10 from '/src/assets/SISI PELEBE SHARWAMA 1.jpg'
import image11 from '/src/assets/Willow nest november3.jpg'
import image12 from '/src/assets/Enrol 3.jpg'
import image13 from '/src/assets/Mich Birthday.jpg'
import image14 from '/src/assets/New Slide 1.png'
import image15 from '/src/assets/New Month 1.png'
import image16 from '/src/assets/New Tech3.png'
import image17 from '/src/assets/BUBU ESSENTIALS.jpg'
import image18 from '/src/assets/Christmas academy.png'
import image19 from '/src/assets/Ashake 2.jpg'
import image20 from '/src/assets/New Start 1.png'
import image21 from '/src/assets/We are hiring 1.png'

const Portfolio = () => {
    const images = [
        image1, image2, image3, image4, image8, image6,
        image7, image5, image9, image10, image11, image12,
        image13, image14, image15, image20, image17, image18,
        image19, image16, image21
    ]

    return (
        <div className='portfolio' id='portfolio'>
            <div className='portfolio-head'>
                <h1>PORTFOLIO</h1>
                <p>A Collection of My Design Works</p>
            </div>
            <div className='portfolio-gallery'>
                {images.map((image, index) => (
                    <div key={index} className='portfolio-item'>
                        <img src={image} alt={`Design work ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio