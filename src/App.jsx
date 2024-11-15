import "./App.css";
import ImgExperience from "/public/experience.svg";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <div className="menu">
            <div className="logo-and-links">
              <div className="logo">
                <img src="../public/header-logo.svg" alt="" />
              </div>
              <div className="links">
                <ul>
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact">
              <a href="#">contact us</a>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className="navigation">
              <div className="nav-content">
                <h1>
                  Find the best <span>talent</span>
                </h1>
              </div>
              <div className="nav-subtitle">
                <div className="line"></div>
                <p>
                  Finding the right people and building high performing teams
                  can be hard. Most companies aren’t tapping into the abundance
                  of global talent. We’re about to change that.
                </p>
              </div>
            </div>
          </div>
        </nav>
        <img
          className="nav-left-side-img"
          src="../public/navigation-left-side-img.png"
          alt=""
        />
        <img
          className="nav-bottom-img"
          src="../public/navigation-bottom-img.png"
          alt=""
        />
      </header>
      <main>
        <section>
          <div className="section-info">
            <div className="container">
              <div className="section-info-content">
                <div className="left-side">
                  <div className="left-side-line"></div>
                  <p>Build & manage distributed teams like no one else.</p>
                </div>
                <div className="right-side">
                  <div className="stats">
                    <div className="experience first-experience">
                      <img src={ImgExperience} alt="" />
                      <div className="experience-content">
                        <h2>Experienced Individuals</h2>
                        <p>
                          Our network is made up of highly experienced
                          professionals who are passionate about what they do.
                        </p>
                      </div>
                    </div>
                    <div className="experience">
                      <img src="../public/implement.svg" alt="" />
                      <div className="experience-content">
                        <h2>Easy to Implement</h2>
                        <p>
                          Our processes have been refined over years of
                          implementation meaning our teams always deliver.
                        </p>
                      </div>
                    </div>{" "}
                    <div className="experience">
                      <img src="../public/stat.svg" alt="" />
                      <div className="experience-content">
                        <h2>Enhanced Productivity</h2>
                        <p>
                          Our customized platform with in-built analytics helps
                          you manage your distributed teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="last-section-img"
              src="../public/last-section-img.png"
              alt=""
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
