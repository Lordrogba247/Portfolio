import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch('https://formsubmit.co/ajax/adedapomichael55@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Contact Form Message from ${formData.name}`
                })
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus(''), 5000)
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
            console.error('Error:', error)
        }
    }

    return (
        <div className='contact-container' id='contact'>
            <div className='contact'>
                <h2 className='contact-title'>GET IN TOUCH</h2>
                <p className='contact-subtitle'>Let's Create Something Amazing Together</p>

                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Your Name'
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='your.email@example.com'
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Tell me about your project...'
                            rows='6'
                            required
                        ></textarea>
                    </div>

                    <button
                        type='submit'
                        className='submit-btn'
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>

                    {status === 'success' && (
                        <p className='status-message success'>
                            ✓ Message sent successfully! I'll get back to you soon.
                        </p>
                    )}

                    {status === 'error' && (
                        <p className='status-message error'>
                            ✗ Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Contact