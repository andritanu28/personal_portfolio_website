import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { useForm, ValidationError } from '@formspree/react';
import axios from "axios";
import './Footer.scss';

const Footer = () => {

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value })
  }

  const handleOnSubmit = () => {
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xyyojoyj',
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been sent.'
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  // const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  // const [loading, setLoading] = useState(false)

  // const { name, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value })
  // }

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: name,
  //     email: email,
  //     message: message
  //   }

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  // }

  return (
    <>
      <h2 className="head-text">Take A Coffee & <span>Chat</span> With Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:andritanuwijaya28@gmail.com" className="p-text">andritanuwijaya28@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="https://wa.me/6281289189437" className="p-text">+62 (812) 8918-9437</a>
        </div>
      </div>

    
      <form onSubmit={handleOnSubmit} className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={inputs.name} onChange={handleOnChange} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={inputs.email} onChange={handleOnChange} />
        </div>
        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
            value={inputs.message}
            name="message"
            onChange={handleOnChange}
          />
        </div>
        <button type="button" className="p-text" onClick={handleOnSubmit} >{!status.submitting
            ? !status.submitted
              ? 'Send'
              : 'Sent'
            : 'Sending...'}</button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}

    {/* {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} required />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
    : <div>
        <h3 className="head-text">Thank you for getting in touch!</h3>
      </div>} */}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
);