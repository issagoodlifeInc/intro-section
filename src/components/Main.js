import heroMobile from "../images/image-hero-mobile.png";
import heroDesktop from "../images/image-hero-desktop.png";

import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

export default function Main() {
  return (
    <main>
      <div className="main--img">
        <picture>
          <source media="(min-width: 620px)" srcset={heroDesktop} />
          <img src={heroMobile} alt="Hero" />
        </picture>
      </div>

      <div className="main--content">
        <h1 className="main--title">Make remote work</h1>
        <p className="main--text">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button className="btn-learn">Learn more</button>

        <div className="main-links">
          <button className="links">
            <img src={databiz} alt="Companies" className="link-img" />
          </button>
          <button className="links">
            <img src={audiophile} alt="Companies" className="link-img" />
          </button>
          <button className="links">
            <img src={meet} alt="Companies" className="link-img" />
          </button>
          <button className="links">
            <img src={maker} alt="Companies" className="link-img" />
          </button>
        </div>
      </div>
    </main>
  );
}
