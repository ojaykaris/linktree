import prfImg from "../../images/profile__img.png";
import shareIcon from "../../images/share-Icon.svg";
import githubIcon from "../../images/github.svg";
import slackIcon from "../../images/slack.svg";
import dotsHorizontal from "../../images/dots-horizontal.svg";
import { Button } from "../../components/button/button";
import DefaultLayout from "../../layouts/default-layout/default-layout";
import "./landing-page.css";

function LandingPage() {
  return (
    <DefaultLayout>
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
            component="a"
            href="https://twitter.com/ojaykaris"
            id="btn__twitter"
          >
            Twitter Link
          </Button>

          <Button
            component="a"
            href="https://training.zuri.team/"
            id="btn__zuri"
          >
            Zuri Team
          </Button>

          <Button component="a" href="https://books.zuri.team/" id="books">
            Zuri Books
          </Button>
          <Button
            component="a"
            href="https://books.zuri.team/python-for-beginners?ref_id=Abonika ojone"
            id="book__python"
          >
            Python Books
          </Button>
          <Button component="a" href="https://background.zuri.team/" id="pitch">
            Background Check for Coders
          </Button>
          <Button
            component="a"
            href="https://books.zuri.team/design-rules"
            id="book__design"
          >
            Design Books
          </Button>

          <Button component="link" to="/linktree/contact" id="contact">
            Contact Me
          </Button>
        </div>
      </main>
      <div className="social-section">
        <div className="container">
          <img src={slackIcon} alt="slack icon" />
          <img src={githubIcon} alt="github icon" />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default LandingPage;
