import React from 'react';
import './Comments.css'

const Comments = () => {
    return (
        <body className="body2">
            <section id="form-section">
                <h1 className="h1-tag">Your Feedback Is important For Us</h1>
                <form className="form-content-section">
                    <div className="form-group">
                        <label for="exampleInputText">Name</label>
                        <input type="text" className="form-control"
                            id="exampleInputText" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputText">Contact Number(Optional)
                        </label>
                        <input type="text" className="form-control"
                            id="exampleInputText" placeholder="Phone" />
                    </div>
                    <div className="form-group text-area">
                        <label for="exampleFormControlTextarea1">Your Feedback here
                        </label>
                        <textarea className="form-control"
                            id="exampleFormControlTextarea1" rows="3" placeholder="Your feedback"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary myclass" >
                        Send Feedback</button>
                </form>
            </section>
        </body>
    );
};

export default Comments;