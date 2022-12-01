import React from 'react'

const Staff = () => {
    return (
        <div>
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className='fw-bold text-warning'>STAFF</h1>
                        <hr />
                    </div>
                </div>
            </div>
             {/* <!-- Designer --> */}
            <div id="designer">
                <div class="container justify-content-around mb-5">
                    <div class="row mb-5">
                    
                    </div>
                    <div class="row">
                        {/* <!-- 1 --> */}
                        <div class="col-md-3 ">
                            <div class="card border-0">
                                <img src="./assets/images/ceo.png" class="card-img-top" alt="..."/>
                                <div class="card-body text-center">
                                <h4 class="card-title text-warning">CEO</h4>
                                <h6 class="card-title lead">GnahYuD</h6>
                                <p class="card-text">When life changes to be harder, change yourself to be stronger</p>
                                <a href="/infostaff" class="btn btn-outline-warning rounded-pill mt-1">More Info</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- 2 --> */}
                        <div class="col-md-3">
                            <div class="card border-0">
                                <img src="./assets/images/trưởng phòng.png" class="card-img-top" alt="..."/>
                                <div class="card-body text-center">
                                <h4 class="card-title text-warning">Manager</h4>
                                <h6 class="card-title lead">Glong</h6>
                                <p class="card-text">In three words I can sum up I’ve learned in life: it goes on.</p>
                                <a href="/infostaff" class="btn btn-outline-warning rounded-pill mt-1">More Info</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- 3 --> */}
                        <div class="col-md-3">
                            <div class="card border-0">
                                <img src="./assets/images/bảo vệ.png" class="card-img-top h-100" alt="..."/>
                                <div class="card-body text-center">
                                <h4 class="card-title text-warning">Security Guards</h4>
                                <h6 class="card-title lead">Ốc Piêu</h6>
                                <p class="card-text">In three words I can sum up I’ve learned in life: it goes on..</p>
                                <a href="/infostaff" class="btn btn-outline-warning mt-1 rounded-pill">More Info</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- 4 --> */}
                        <div class="col-md-3">
                            <div class="card border-0">
                                <img src="./assets/images/lao công.png" class="card-img-top" alt="..."/>
                                <div class="card-body text-center">
                                <h4 class="card-title text-warning">Labor</h4>
                                <h6 class="card-title lead">Như Hiền</h6>
                                <p class="card-text">Sadness flies away on the wings of time.</p>
                                <a href="/infostaff" class="btn btn-outline-warning rounded-pill mt-1">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff
