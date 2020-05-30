import React from "react";
import { Main, NavBar, BoxContent, Content } from "./styled";

export default function Linkedin() {
  return (
    <>
      <Main>
        <NavBar.Box>
          <img
            className="picture-profile"
            src={require("../../Assets/linkedin/person.png")}
            alt="MyPicture"
          />
          <NavBar.Items>
            <div className="logo-container">
              <img
                className="logo"
                src={require("../../Assets/linkedin/linkedin.png")}
                alt="#linkedinImage"
              />
              <div className="input-container">
                <i className="fas fa-search" />
                <input placeholder="Pesquisar" />
              </div>
            </div>
            <NavBar.SocialMedia>
              <div className="social-medias-box">
                <i className="fas fa-home" />
                <span className="spanbar">Home</span>
              </div>
              <div className="social-medias-box">
                <i className="fas fa-user-friends"></i>
                <span className="spanbar">My Network</span>
              </div>
              <div className="social-medias-box">
                <i className="fas fa-suitcase"></i>
                <span className="spanbar">Jobs</span>
              </div>
              <div className="social-medias-box">
                <i className="far fa-comments"></i>
                <span className="spanbar">Messaging</span>
              </div>
              <div className="social-medias-box">
                <i className="far fa-bell"></i>
                <span className="spanbar">Notifications</span>
              </div>
              <div className="social-medias-box">
                <img
                  src={require("../../Assets/linkedin/person.png")}
                  alt="MyPicture"
                />
                <span>Me</span>
              </div>
              <div className="social-medias-box white-wall">
                <i className="fas fa-th"></i>
                <span className="spanbar">Work</span>
              </div>
              <div className="premium-link">
                <a href="##">Try premium</a>
                <a href="##">Carrer for free</a>
              </div>
            </NavBar.SocialMedia>
          </NavBar.Items>
          <div className="chatbox">
            <i className="far fa-comments fa-2x"></i>
          </div>
        </NavBar.Box>
      </Main>
      <BoxContent>
        <Content.VerticarBar>
          <div className="topBackground" />
          <div className="middle-container">
            <div className="img-container">
              <img
                className="picture-profile"
                src={require("../../Assets/linkedin/person.png")}
                alt="MyPicture"
              />
            </div>
            <div className="descriptions">
              <h1>Marcos Aurélio Sousa Gonçalves</h1>
              <span>Full-stack Developer</span>
            </div>
            <div className="profile-viewers">
              <div className="profile-viewers-views">
                <a href="##">Who viewed your profile</a>
                <a href="##">1000</a>
              </div>
              <div className="profile-viewers-views">
                <a href="##">Views of your video</a>
                <a href="##">2000</a>
              </div>
            </div>
            <div className="premiumBox">
              <span>Access exclusive tools & insights</span>
              <span>Try premium Career for Free</span>
            </div>
          </div>
          <div className="divisor" />
          <div className="save-box">
            <i className="fas fa-envelope-open-text"></i>
            <span>Saved items</span>
          </div>
          <div className="mini-container-box">
            <span className="blue-title">Groups</span>
            <div className="events-box">
              <span>Events</span>
              <i className="fas fa-plus"></i>
            </div>
            <span className="blue-title">Followed Hashtags</span>
            <div className="discover-box">
              <span>Discover more</span>
            </div>
          </div>
        </Content.VerticarBar>
        <Content.HorizontalTab>
          <div className="button-first-box">
            <div className="button-box">
              <button
                onClick={() =>
                  alert("Is just a clone, you can not do anything!  ")
                }
              >
                <span className="post-centering">
                  <i className="far fa-file-alt" />
                  Start a post
                </span>
              </button>
              <div className="icons-box">
                <div className="grey-wall">
                  <i className="fas fa-camera" />
                </div>
                <div className="grey-wall">
                  <i className="fas fa-video" />
                </div>
                <div className="grey-wall">
                  <i className="far fa-file-alt" />
                </div>
              </div>
            </div>
            <div className="subtitle-box">
              <p>
                <span>Write an article</span>on Linkedin
              </p>
            </div>
          </div>
          <div>
            <div className="post-box">
              <div className="profile-nav">
                <div className="user-box">
                  <img
                    src={require("../../Assets/linkedin/person.png")}
                    alt="profile"
                  />
                  <div>
                    <h1>Marcos Aurélio</h1>
                    <span>Full-Stack Developer</span>
                  </div>
                </div>
                <p>New great games are coming to all platforms!!</p>
              </div>
              <div className="video-container">
                <video controls>
                  <source
                    src="https://media.contentapi.ea.com/content/dam/eacom/videos/2019/12/ea-video-mashup-trailer-update-dpc-23632.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="likes-box">
                  <i className="fas fa-thumbs-up"></i>
                  <i className="fas fa-praying-hands"></i>
                  <i className="far fa-heart"></i>
                  <span className="likes-span">50 Comments</span>
                </div>
              </div>
              <div className="media-actions-container">
                <div className="media-actions">
                  <i className="fas fa-thumbs-up blue">
                    <h2 className="blue">Like</h2>
                  </i>
                  <i className="far fa-comments">
                    <h2>Comments</h2>
                  </i>
                  <i className="fas fa-share">
                    <h2>Share</h2>
                  </i>
                </div>
                <div className="comments-container">
                  <img
                    src={require("../../Assets/linkedin/person.png")}
                    alt="profile-2"
                  />
                  <div className="input-camera">
                    <input placeholder="Add a comment..." />
                    <i className="fas fa-camera"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-box">
              <div className="profile-nav">
                <div className="user-box">
                  <img
                    src={require("../../Assets/linkedin/girl.png")}
                    alt="profile"
                  />
                  <div>
                    <h1>Vanessa Lima</h1>
                    <span>Front-end Developer</span>
                  </div>
                </div>
                <p>What a great GAME!</p>
              </div>
              <div className="video-container">
                <video controls>
                  <source
                    src="https://www.callofduty.com/cdn/mw/videos/seasons/s2-hero-vid-desktop.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="likes-box">
                  <i className="fas fa-thumbs-up"></i>
                  <i className="fas fa-praying-hands"></i>
                  <i className="far fa-heart"></i>
                  <span className="likes-span">150 Comments</span>
                </div>
              </div>
              <div className="media-actions-container">
                <div className="media-actions">
                  <i className="fas fa-thumbs-up blue">
                    <h2 className="blue">Like</h2>
                  </i>
                  <i className="far fa-comments">
                    <h2>Comments</h2>
                  </i>
                  <i className="fas fa-share">
                    <h2>Share</h2>
                  </i>
                </div>

                <div className="comments-container">
                  <img
                    src={require("../../Assets/linkedin/person.png")}
                    alt="profile-2"
                  />
                  <div className="input-camera">
                    <input placeholder="Add a comment..." />
                    <i className="fas fa-camera"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content.HorizontalTab>
        <Content.CorporationsTab>
          <div className="main-box">
            <div className="title-box">
              <h1>Add your Feed</h1>
              <i className="far fa-question-circle"></i>
            </div>
            <div className="social-container">
              <div className="profile-box">
                <img src={require("../../Assets/linkedin/girl.png")} alt="#" />
                <div className="info-box">
                  <h1>Vanessa Lima</h1>
                  <span>Front-end Developer</span>
                </div>
                <div className="button-container">
                  <button>
                    <i className="fas fa-plus" />
                    Follow
                  </button>
                </div>
              </div>
              <div className="profile-box">
                <img src={require("../../Assets/linkedin/boy.png")} alt="#" />
                <div className="info-box">
                  <h1>Tyrion Lannister</h1>
                  <span>Back-end Developer</span>
                </div>
                <div className="button-container">
                  <button>
                    <i className="fas fa-plus" />
                    Follow
                  </button>
                </div>
              </div>
              <h2>View all recomendations</h2>
            </div>
          </div>
          <div className="second-box">
            <div className="items-box">
              <span>About</span>
              <span>Accessibility</span>
              <span>Help Center</span>
            </div>
            <div className="items-box">
              <span>Privacy & Terms</span>
              <span>Ad Choices</span>
              <span>Advertising</span>
            </div>
            <div className="items-box">
              <span>Business Services</span>
              <span>Get the linkedin app</span>
            </div>
            <div className="linkedin-container">
              <span>More</span>
            </div>
            <p>LinkedIn Corporation © 2020</p>
          </div>
        </Content.CorporationsTab>
      </BoxContent>
    </>
  );
}
