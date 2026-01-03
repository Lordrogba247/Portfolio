import React from 'react'
import './Skills.css'

const Skills = () => {
    const designSkills = [
        { name: 'Adobe Photoshop', level: 95 },
        { name: 'CorelDRAW', level: 94 },
        { name: 'Adobe Illustrator', level: 90 },
        { name: 'Figma', level: 88 },
        { name: 'Adobe InDesign', level: 85 },
    ]

    const expertise = [
        'Brand Identity Design',
        'Social Media Graphics',
        'Logo Design',
        'Print Design',
        'Digital Illustrations',
        'Color Theory',
        'Layout Design',
        'Packaging Design',
        'Marketing Materials'
    ]

    return (
        <div className='skill-container' id='skills'>
            <div className='skills'>
                <h2 className='skills-title'>MY SKILLS</h2>
                <p className='skills-subtitle'>Professional Expertise in Graphic Design</p>

                <div className='skills-content'>
                    <div className='software-skills'>
                        <h3>Design Software</h3>
                        <div className='skill-bars'>
                            {designSkills.map((skill, index) => (
                                <div key={index} className='skill-item'>
                                    <div className='skill-info'>
                                        <span className='skill-name'>{skill.name}</span>
                                        <span className='skill-percentage'>{skill.level}%</span>
                                    </div>
                                    <div className='skill-bar'>
                                        <div
                                            className='skill-progress'
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='expertise-skills'>
                        <h3>Areas of Expertise</h3>
                        <div className='expertise-grid'>
                            {expertise.map((item, index) => (
                                <div key={index} className='expertise-item'>
                                    <span className='expertise-icon'>✦</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills