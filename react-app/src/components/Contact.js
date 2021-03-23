
import firebase from './firebase';
import React, { useState } from "react";



const Contact = () => {
    const db = firebase.firestore();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
   
    const submitMessage = (e) => {
    e.preventDefault();
    
    db.collection('contactData').add({
        name:name,
        email:email,
        message:message,

    })
    .then(() => {
        alert('Message Submitted')
    })
    .catch(error => {
        alert('error');
    });

    setName('');
    setEmail('');
    setMessage('');

};




    return (
         <form className="form" id="contact" onSubmit={submitMessage}>
             
       <div className="container mt-4 card card-body p-3">
           <h4 className="text-center">Contact</h4>
           <div className="form-group">
               <label htmlFor="Name">Full Name</label>
               <input value={name} onChange={(e => setName(e.target.value))} className="form-control"/>
           </div>
           <div className="form-group">
               <label htmlFor="Name">Email</label>
               <input value={email} onChange={(e => setEmail(e.target.value))} className="form-control"/>
           </div>
           <div className="form-group">
               <label htmlFor="Name">Message</label>
               <textarea value={message} onChange={(e => setMessage(e.target.value))} className="form-control"></textarea>
           </div>
           <button type="submit" className="btn btn-info">Submit</button>
       </div>
  
       </form>
    )
}
export default Contact;