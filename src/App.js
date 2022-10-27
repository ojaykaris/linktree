import "./App.css";
import prfImg from "./images/profile__img.png";
import shareIcon from "./images/share-Icon.svg";
import githubIcon from "./images/github.svg";
import slackIcon from "./images/slack.svg";
import dotsHorizontal from "./images/dots-horizontal.svg";
import zuriLogo from "./images/zuri-logo.svg";
import i4gLogo from "./images/I4G-logo.svg";
import { Button } from "./components/button/button";

function App() {
  return (
    <>
      <div className="profile-section">
        <div className="container">
          <img src={prfImg} id="profile__img" alt="profile" />
          <h1 className="twitter" id="twitter">
            Agbonika Ojone
          </h1>
          <h2 hidden id="slack">
            ojaykaris
          </h2>

          <a href="#share" className="share-button share-button-desktop">
            <img src={shareIcon} alt="share icon" />
          </a>

          <a href="#share" className="share-button share-button-mobile">
            <img src={dotsHorizontal} alt="share icon" />
          </a>
        </div>
      </div>
      <main className="main">
        <div className="container">
          <Button
            link="https://twitter.com/ojaykaris"
            text="Twitter Link"
            id="btn__twitter"
          />

          <Button
            link="https://training.zuri.team/"
            text="Zuri Team"
            id="btn__zuri"
          />

          <Button
            link="https://books.zuri.team/"
            text="Zuri Books"
            id="books"
          />
          <Button
            link="https://books.zuri.team/python-for-beginners?ref_id=Abonika ojone"
            text="Python Books"
            id="book__python"
          />
          <Button
            link="https://background.zuri.team/"
            text="Background Check for Coders"
            id="pitch"
          />
          <Button
            link="https://books.zuri.team/design-rules"
            text="Design Books"
            id="book__design"
          />
        </div>
      </main>
      <div className="social-section">
        <div className="container">
          <img src={slackIcon} alt="slack icon" />
          <img src={githubIcon} alt="github icon" />
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <img src={zuriLogo} alt="zuri logo" />
          <p className="footer-info">HNG Internship 9 Frontend Task</p>
          <img src={i4gLogo} alt="i4g logo" />
        </div>
      </footer>
    </>
  );
}

export default App;
