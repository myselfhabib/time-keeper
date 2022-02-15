import React from 'react';
import './Reviews.css';
import img from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import { Link } from 'react-router-dom';

const Reviews = () => {
    return (
        <section id="testimonials">
            <div className="testimonial-heading">
                <span>Comments</span>
                <h2 className="testimonials-h2">Clients Says</h2>

            </div>
            {/* testimonials box container */}

            <div className="testimonial-box-container">
                <div className="testimonial-box">
                    <div className="box-top">
                        <div className="profile">
                            <div className="profile-img">
                                <img src={img} />
                            </div>
                            <div className="user-name">
                                <strong>Touseeq</strong>
                                <span>@touseeqijazweb</span>
                            </div>
                        </div>
                        <div className="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>

                    {/* comments */}
                    <div className="client-comment">
                        <p>I received this watch on 1-20-2021. I received my first Casio watch on Christmas morning somewhere around 1979. That watch, a simple, black</p>
                    </div>
                </div>
                <div className="testimonial-box">
                    <div className="box-top">
                        <div className="profile">
                            <div className="profile-img">
                                <img src={img2} />
                            </div>
                            <div className="user-name">
                                <strong>Fateema</strong>
                                <span>@fateemaIslam</span>
                            </div>
                        </div>
                        <div className="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                    {/* comments */}
                    <div className="client-comment">
                        <p>It's the watch your dad had in 1989. It is cool for this fact because you are now the same age as your dad in 1989. You never understood this</p>
                    </div>
                </div>
                <div className="testimonial-box">
                    <div className="box-top">
                        <div className="profile">
                            <div className="profile-img">
                                <img src={img3} />
                            </div>
                            <div className="user-name">
                                <strong>Monika</strong>
                                <span>@MonikaBing</span>
                            </div>
                        </div>
                        <div className="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                    {/* comments */}
                    <div className="client-comment">
                        <p>As I'm scrolling through Amazon looking for a new Fossil watch I ran into this one and immediately recognized it. I bought this exact one back</p>
                    </div>
                </div>
                <div className="testimonial-box">
                    <div className="box-top">
                        <div className="profile">
                            <div className="profile-img">
                                <img src={img4} />
                            </div>
                            <div className="user-name">
                                <strong>Pheobe</strong>
                                <span>@pheobeBufee</span>
                            </div>
                        </div>
                        <div className="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>

                    {/* comments */}
                    <div className="client-comment">
                        <p>This is a great gift. Got it for my boyfriend’s birthday. Took it to Michael Kors outlet so they could verify it’s authenticity. It’s REAL! band pretty</p>
                    </div>
                </div>
            </div>
            <Link to="/comments"><button className="glow-on-hover2 mb-5">Comments</button></Link>
        </section>
    );
};

export default Reviews;

























/* import React from 'react';
import './Reviews.css'
import img from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';

const Reviews = () => {
    return (
        <section className="Review">
            <h1>
                <span>R</span>
                <span>E</span>
                <span>V</span>
                <span>I</span>
                <span>E</span>
                <span>W</span>
                <span>S</span>
            </h1>
            <div className="owl-carousel Review-op owl-theme flex">
                <div class="item">
                    <img src={img} alt="" />
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                        fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur
                        ducimus beatae, reprehenderit exercitationem!</p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>

                </div>
                <div class="item">
                    <img src={img2} alt="" />
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                        fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur
                        ducimus beatae, reprehenderit exercitationem!</p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>


                </div>
                <div class="item">
                    <img src={img3} alt="" />
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                        fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur
                        ducimus beatae, reprehenderit exercitationem!</p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <div class="item">

                    <img src={img4} alt="" />
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                        fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur
                        ducimus beatae, reprehenderit exercitationem!</p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>

                </div>
                <div class="item">
                    <img src={img5} alt="" />
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                        fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur
                        ducimus beatae, reprehenderit exercitationem!</p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reviews; */