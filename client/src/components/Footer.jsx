import React from 'react'
import TT from '../assets/thanhtoan.png'
import CN from '../assets/chungnhan.png'
import DMCA from '../assets/dmca.png'
import '../style/style.css';

const Footer = () => {
    return (
            <footer class="text-center text-lg-start bg-dark text-muted">
                <section class="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
                    <div class="me-5 d-none d-lg-block">
                        <span class="text-secondary fs-4 fw-bold">Social</span>
                    </div>

                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100007746304417" class="me-4">
                            <i class="fa fa-facebook-f"></i>
                        </a>
                        <a href="/" class="me-4">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="/" class="me-4">
                            <i class="fa fa-google"></i>
                        </a>
                        <a href="https://www.instagram.com/hoangduy315/" class="me-4">
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a href="/" class="me-4">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/HoangDuy315" class="me-4">
                            <i class="fa fa-github"></i>
                        </a>
                    </div>
                </section>
                
                <div className="class">
                    <div class="container text-center text-md-start mt-4">
                        <div class="row mt-2">
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fa fa-gem "></i>GNAHYUD HD
                                </h6>
                                <p>
                                    <a href="/about" class="text-secondary">Introduction</a>
                                </p>
                                <p>
                                    <a href="https://vietthuong.vn/chi-nhanh" class="text-secondary">Showroom</a>
                                </p>
                                <p>
                                    <a href="/contact" class="text-secondary">Contact</a>
                                </p>
                                <p>
                                    <a href="/https://vietthuong.vn/mua-tra-gop" class="text-secondary">Hire-Purchase</a>
                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mb-3">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    General Guidance
                                </h6>
                                <p>
                                    <a href="https://vietthuong.vn/chinh-sach-doi-tra" class="text-secondary">Delivery - Exchange</a>
                                </p>
                                <p>
                                    <a href="https://vietthuong.vn/huong-dan-mua-hang" class="text-secondary">Shopping guide</a>
                                </p>
                                <p>
                                    <a href="https://vietthuong.vn/chinh-sach-thanh-toan-va-bao-mat" class="text-secondary">Payment and Security</a>
                                </p>
                                <p>
                                    <a href="https://vietthuong.vn/chinh-sach-bao-hanh.html" class="text-secondary">Guitar warranty</a>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Support
                                </h6>
                                <p>
                                    <a href="tel:18006715" class="text-secondary">Call: <span className='text-danger'>1800 6789 </span></a>
                                </p>
                                <p>
                                    <a href="/" class="text-secondary">Time: 8h-22h</a>
                                </p>
                                <p>
                                    <a href="/" class="text-secondary">Hotline: 1234 6789 </a>
                                </p> 
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-2 mb-md-0 mb-3">
                                <h6 class="text-uppercase fw-bold mb-4">Address</h6>
                                <p><i class="fa fa-home me-3 text-secondary"></i>6** ****, P.26, Q.BT, TP.HCM</p>
                                <p>
                                    <i class="fa fa-envelope me-3 text-secondary"></i>
                                    19521425@gm.uit.edu.vn
                                </p>
                                <p><i class="fa fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                                <p><i class="fa fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                            </div>

                            <div class="d-flex justify-content-center justify-content-lg-between p-4 ">
                                <h6 class="text-uppercase fw-bold mt-3">Payment Method</h6>
                                    <img href="" src={TT} alt="" className='tt mx-0'/>
                                <h6 class="text-uppercase fw-bold mt-3 px-3">Certificate</h6>
                                <a href="http://online.gov.vn/Home/WebDetails/29527" className='ms-0 '>
                                    <img src={CN} alt="" className='dmaca' height="50px" width="100px"/>
                                </a>
                                <a className='' href="https://www.dmca.com/Protection/Status.aspx?ID=eef1ddde-2dff-4626-ac14-95eda3e1eddd&refurl=https://vietthuong.vn/dan-guitar.html">
                                    <img src={DMCA} alt=" "className='dmac' height="50px" width="100px" />
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
                <div class="text-center p-2">
                    © 2022 Design by:
                    <a class="navbar-brand text-reset fw-bold" href="https://www.facebook.com/profile.php?id=100007746304417"> GNAHYUD</a>
                </div>
        </footer>
    )
}

export default Footer
