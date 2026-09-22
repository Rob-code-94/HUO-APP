import {
  BUSINESS_FORM_URL,
  COLLAB_HANDLES,
  DISCIPLINES,
  HERO_LINES,
  INSTAGRAM_URL,
  TALENT_FORM_URL,
} from '../data/landing';

const linkRel = 'noopener noreferrer';

export function LandingPage() {
  return (
    <div className="landing-root">
      <div className="landing-grain" aria-hidden="true" />

      <header className="landing-corners">
        <div className="landing-brand landing-fade landing-fade-delay-1">
          <p className="landing-micro">HUO</p>
          <p className="landing-micro">COLUMBUS, OHIO</p>
          <p className="landing-micro">CREATIVE NETWORK</p>
        </div>

        <ul className="landing-disciplines landing-fade landing-fade-delay-2">
          {DISCIPLINES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>

      <main className="landing-main">
        <h1 className="landing-hero landing-fade landing-fade-delay-3">
          {HERO_LINES.map((line) => (
            <span key={line} className="landing-hero-line">
              {line}
            </span>
          ))}
        </h1>
      </main>

      <footer className="landing-footer landing-fade landing-fade-delay-4">
        <div className="landing-call">
          <p className="landing-micro">HUO CREATIVE TALENT CALL</p>
          <p className="landing-micro landing-call-sub">SCAN / LINK IN BIO</p>
        </div>

        <nav className="landing-ctas" aria-label="Talent call actions">
          <a
            className="landing-cta landing-cta-primary"
            href={TALENT_FORM_URL}
            target="_blank"
            rel={linkRel}
          >
            Join the talent call
          </a>
          <a
            className="landing-cta landing-cta-secondary"
            href={BUSINESS_FORM_URL}
            target="_blank"
            rel={linkRel}
          >
            Hiring / business
          </a>
          <a
            className="landing-cta landing-cta-ghost"
            href={INSTAGRAM_URL}
            target="_blank"
            rel={linkRel}
          >
            @huoapp
          </a>
        </nav>

        <ul className="landing-collab">
          {COLLAB_HANDLES.map(({ handle, url }) => (
            <li key={handle}>
              <a href={url} target="_blank" rel={linkRel}>
                @{handle}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default LandingPage;
