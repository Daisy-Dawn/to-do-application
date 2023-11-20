import "./Home.css";

export const ThirdPage = () => {
  return (
    <>
      <div
        className="w3-col thirdPage-wrapper w3-center"
        style={{ height: "90vh" }}
      >
        <div className="w3-col">
          <div className="w3-content">
            <div className="w3-container">
              <div className="testimonials-section">
              <div className="testimonials-header-section">
                  <h2>Hear what our users have to say:</h2>
                </div>
                <div className="w3-col 14 m4 s12 w3-padding">
                  <div className="each-testimonial">
                    <div className="head">
                      <div className="flex">
                        <div className="img">
                          <img
                            src="/images/Home/image-jeanette.jpg"
                            alt="Sarah Watkins"
                          />
                        </div>
                        <div className="intro">
                          <div className="name">
                            <p>Sarah Watkins</p>
                          </div>
                          <div className="occupation">
                            <p>Product Manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main">
                      <p>"This app has completely transformed the way I manage my tasks. It's intuitive, efficient, and has become an essential part of my daily routine." </p>
                    </div>
                  </div>
                </div>
                <div className="w3-col 14 m4 s12 w3-padding">
                <div className="each-testimonial">
                    <div className="head">
                      <div className="flex">
                        <div className="img">
                          <img
                            src="/images/Home/image-patrick.jpg"
                            alt="Patrick Schwann"
                          />
                        </div>
                        <div className="intro">
                          <div className="name">
                            <p>Patrick Schwann</p>
                          </div>
                          <div className="occupation">
                            <p>Content Creator</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main">
                      <p>"I've tried many to-do apps, but none have come close to the simplicity and effectiveness of this one. Highly recommended!" </p>
                    </div>
                  </div>
                </div>
                <div className="w3-col 14 m4 s12 w3-padding">
                <div className="each-testimonial">
                    <div className="head">
                      <div className="flex">
                        <div className="img">
                          <img
                            src="/images/Home/image-kira.jpg"
                            alt="Kira Peters"
                          />
                        </div>
                        <div className="intro">
                          <div className="name">
                            <p>Kira Peters</p>
                          </div>
                          <div className="occupation">
                            <p>UI/UX Designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main">
                      <p>""Finally, a to-do app that actually helps me stay organized. I love how easy it is to prioritize and track my tasks. It has made a significant difference in my productivity." </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
