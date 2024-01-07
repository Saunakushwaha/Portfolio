import React from 'react'
import "../Form/Form.css"
const Form = () => {
  return (
    <div className='form'>
        <div className="form-head"><h1>Contact Form</h1></div>

      <form className='forms'>                                                    
                <p className='lg-username'>Name</p>
                { <input type="text" required  placeholder='Name'/> }
                <p className='lgpassword'>Email</p>
               { <input type="email" required placeholder='Email'/>}
                             
            <button type="submit" className='lg-button'>Submit</button>
            
        </form>
        <div className="message">
                <h4>* Kindly submit your email, will contact you shortly</h4>
                </div>
    </div>
  )
}

export default Form
