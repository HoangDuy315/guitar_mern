import React from 'react'
import './About.css'
import Avatar from './avatar.jpg'
const About = () => {
  return (
        <>
        <header>
                <div className="header__profile">
                    <h1 className="title title--color">Profile</h1>
                        <p className="header__text">I'm a student</p>
                </div>
                <div className="introduction boder--top">
                    <div className="about">
                        <h2 className="about__title title--color">About me</h2>
                        <div className="content">
                            <p className="about__text">I am a sociable person who loves to travel to many different places. I often research and learn new knowledge about technology</p>
                        </div>
                    </div>
                    <img src={Avatar} alt="Avatar" className="avatar"/>
                    <div className="details">
                        <h2 className="details__title title--color">Details</h2>
                        <div className="content">
                            <p className="details__text"><strong>Name:</strong> Luong Tien Thuan Hai</p>
                            <p className="details__text"><strong>Age:</strong> 22 years</p>
                            <p className="details__text"><strong>Location:</strong> UIT, VNU-HCM</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- ARTICLE  -->
            <!-- ARTICLE  -->
            <!-- ARTICLE  -->
            <!-- ARTICLE  --> */}
            <article>
                <h1 className="title title--color">Experiences</h1>
                <div className="educations boder--top">
                    <h3 className="educations--title">Educations</h3>
                    <div className="educations__info">
                        <div className="educations__info--time">
                            <h5><strong>UIT,VNU-HCM</strong></h5>
                            <p className="text--s content-detail">Apr 2019 - june 2024</p>
                        </div>
                        <div className="educations__info--detail">
                            <h5><strong>Information System</strong></h5>
                            <p className="text--s content-detail">The education was mainly System design-basec course, 
                                but I also learned about Web, Data analysis and more. During my time in college, 
                                I specialized in OOP, data science. 
                                Now, I'm learning web development</p>
                            
                        </div>
                    </div>
                </div>
                <div className="educations boder--top">
                    <h3 className="educations--title">Working Experiences</h3>
                    <div className="educations__info">
                        <div className="educations__info--time">
                            <h5><strong>Facebook I Fresher Engineer</strong></h5>
                            <p className="text--s content-detail">Sep 2021 - current</p>
                        </div>
                        <div className="educations__info--detail">
                            <h5><strong>Partime - Fresher Web Developer</strong></h5>
                            <p className="text--s content-detail">Working as a Fresher Developer 
                                on a dating function on Facebook page. 
                                Dating function is an app as Tinder</p>
                            
                        </div>
                    </div>
                </div>
            </article>


        {/* <!-- MORE  -->
        <!-- MORE  -->
        <!-- MORE  --> */}
        <div className="more">
            <h1 className="title title--color">Abilities</h1>

            {/* <!-- SKILL  -->
            <!-- SKILL  -->
            <!-- SKILL  --> */}
            <div className="skills boder--top">
                <h2 className="abilities__skills">Skills</h2>

                {/* <!-- FORM SKILL  -->
                <!-- FORM SKILL  -->
                <!-- FORM SKILL  -->
                <!-- FORM SKILL  --> */}
                <div className="skill__form">
                    <ul className="skills__list">
                        <li className="skills__item">
                            <span className="skills__item--name">HTML/CSS</span>
                            <div className="skills__item--name-rating">
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square"></i>
                            </div>
                        </li>
                        <li className="skills__item">
                            <span className="skills__item--name">SQL</span>
                            <div className="skills__item--name-rating">
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                            </div>
                        </li>
                        <li className="skills__item">
                            <span className="skills__item--name">JQuery</span>
                            <div className="skills__item--name-rating">
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                            </div>
                        </li>
                        <li className="skills__item">
                            <span className="skills__item--name">Javascrip</span>
                            <div className="skills__item--name-rating">
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                            </div>
                        </li>
                        
        
                    </ul>
                    <ul className="skills__list">
                        <li className="skills__item">
                            <span className="skills__item--name">Object Orientated Programing</span>
                            <div className="skills__item--name-rating">
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                            </div>
                        </li>
                        <li className="skills__item">
                            <span className="skills__item--name">SEO</span>
                            <div className="skills__item--name-rating">
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                            </div>
                        </li>
                        <li className="skills__item">
                            <span className="skills__item--name">React</span>
                            <div className="skills__item--name-rating">
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                

                {/* <!-- FOOTER SKILL  -->
                <!-- FOOTER SKILL  -->
                <!-- FOOTER SKILL  --> */}

                <div className="skill__footer">
                    <span className="skill__footer--span">See my profile on github.</span>
                    <button className="skill__footer--btn" href="">See project on Github</button>
                </div>
            </div>

            {/* <!-- LANGUAGE  -->
            <!-- LANGUAGE  -->
            <!-- LANGUAGE  --> */}
            <div className="skills boder--top">
                <h2 className="abilities__skills">Languages</h2>
                <div className="skill__form">
                    <ul className="skills__list">
                        <li className="skills__item">
                            <span className="skills__item--name">Vietnamese (Native)</span>
                            <div className="skills__item--name-rating">
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                            </div>
                        </li>
                        <li className="skills__item">
                            <span className="skills__item--name">English (IELTS 6.5)</span>
                            <div className="skills__item--name-rating">
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square rating--active"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                                <i className="fa fa-square"></i>
                            </div>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
        </div>
    </>
  )
}

export default About