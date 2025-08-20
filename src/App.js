import './App.css';

function App() {
  return (
    <div className="Home">
      <nav className="Nav">
        <div className="Brand">
          <span className="BrandMark">{'</>'}</span>
          <span>Developer Tinder</span>
        </div>
        <div className="NavActions">
          <a href="#" className="NavLink">Explore</a>
          <a href="#" className="NavLink">How it works</a>
          <button className="PrimaryButton">Login</button>
        </div>
      </nav>

      <main className="Hero">
        <h1 className="HeroTitle">Find your next dev match</h1>
        <p className="HeroSubtitle">Swipe on projects and teammates you vibe with.</p>
        <div className="HeroActions">
          <button className="PrimaryButton">Get Started</button>
          <button className="SecondaryButton">Learn more</button>
        </div>

        <div className="CardDeck" aria-hidden="true">
          <div className="Card">
            <div className="CardTag">React • Node</div>
            <div className="CardTitle">Open source issue hunter</div>
            <div className="CardMeta">Looking for 2 contributors</div>
          </div>
          <div className="Card TiltLeft">
            <div className="CardTag">Python • ML</div>
            <div className="CardTitle">MLOps playground</div>
            <div className="CardMeta">Swipe to pass</div>
          </div>
          <div className="Card TiltRight">
            <div className="CardTag">Go • DevOps</div>
            <div className="CardTitle">Kubernetes autoscaler</div>
            <div className="CardMeta">New today</div>
          </div>
        </div>
      </main>

      <footer className="Footer">
        <span>© {new Date().getFullYear()} Developer Tinder</span>
        <span className="FooterLinks">
          <a href="#" className="FooterLink">Terms</a>
          <a href="#" className="FooterLink">Privacy</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
