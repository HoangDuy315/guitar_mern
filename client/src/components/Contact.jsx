import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/style.css';


const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className='fw-bold text-warning fs-2'>HAVE SOME QUESTIONS ?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row fw-bold fs-4 text-warning">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/home/email.jpg" alt="Contact us" className='ctact' height="300px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Title</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ex:123@gmail.com"/>
                            </div>
                            
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Text</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type text'></textarea>
                            </div>
                            <NavLink to="/sendsuccess">
                                <button type="submit" class="btn btn-outline-warning rounded-pill">
                                    Send 
                                </button>
                            </NavLink>  
                            <div className='p-4'></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
