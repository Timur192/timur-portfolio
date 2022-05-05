import "./about.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div data-aos="zoom-out"></div>
        <div data-aos="zoom-out" >
          <article class="card">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="card-inner">
              <img
                src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
                alt=""
                className="a-img"
              />
            </div>
          </article>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          A novice frontend developer on React.JS, I also have experience using Redux.
          I use the MUI style library,
          I have had experience using Mongodb,
          I also created a website using the API from Openweathermap
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">Skill</h4>
            <div data-aos="fade-right" className="blokk">
              <li className="a-award-desc">Photoshop - 70%
                <div class="progress">
                  <div class="ph">
                  </div>
                </div>
              </li>
              <li className="a-award-desc">Git - 20%
                <div class="progress">
                  <div class="git">
                  </div>
                </div>
              </li>
              <li className="a-award-desc">HTML - 80%
                <div class="progress">
                  <div class="html">
                  </div>
                </div>
              </li>
            </div>
            <div data-aos="fade-left" className="blokk">
              <li className="a-award-desc">CSS - 70%
                <div class="progress">
                  <div class="css">
                  </div>
                </div>
              </li>
              <li className="a-award-desc">JavaScript -40%
                <div class="progress">
                  <div class="js">
                  </div>
                </div>
              </li>
              <li className="a-award-desc">React JS - 60%
                <div class="progress">
                  <div class="react">
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AOS.init();
export default About;
