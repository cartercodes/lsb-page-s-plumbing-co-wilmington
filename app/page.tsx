'use client';

import { useEffect } from 'react';

const phoneIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>';

const checkBadgeSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/></svg>';

const mapPinSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>';

const serviceIcons = [
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/></svg>',
];

const services = [
  { title: 'Emergency Leak Repair', desc: 'Burst pipe at 2 AM? Page\'s Plumbing Co responds fast across Wilmington, from Wrightsville Beach to Ogden. We stop the damage before it spreads.', icon: serviceIcons[0] },
  { title: 'Drain Cleaning & Clearing', desc: 'Wilmington\'s older homes and coastal soil conditions mean stubborn clogs. We use hydro-jetting and camera inspection to clear your drains for good.', icon: serviceIcons[1] },
  { title: 'Water Heater Installation', desc: 'Tank or tankless, we size it right for your household and install it to code. Wilmington homeowners trust us for reliable hot water year-round.', icon: serviceIcons[2] },
  { title: 'Sewer Line Repair', desc: 'Shifting sandy soil and mature tree roots wreak havoc on Cape Fear-area sewer lines. We diagnose fast with trenchless technology that saves your yard.', icon: serviceIcons[3] },
  { title: 'Bathroom & Kitchen Remodels', desc: 'From fixture upgrades in Historic Downtown bungalows to full bathroom builds in Mayfaire-area new construction, we handle the plumbing so your renovation stays on schedule.', icon: serviceIcons[4] },
  { title: 'Backflow Prevention', desc: 'Stay compliant with New Hanover County regulations. We test, certify, and install backflow prevention devices to keep your water supply safe.', icon: serviceIcons[5] },
];

const trustItems = [
  'Serving Wilmington & New Hanover County Since Day One',
  'Licensed, Insured & NC State Certified Master Plumbers',
  'Same-Day Service Available — No Overtime Surprises',
  'Hundreds of 5-Star Reviews from Cape Fear Homeowners',
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== NAV ===== */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <span className="nav-logo">{'Page\'s Plumbing Co'}</span>
          <a
            href="tel:19107913752"
            className="nav-phone-btn"
            aria-label="Call Page\'s Plumbing Co at +1 910-791-3752"
          >
            <span
              className="nav-phone-icon"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: phoneIconSvg }}
            />
            <span className="nav-phone-text">{'+1 910-791-3752'}</span>
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Hero">
        <div className="hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1581244277943-fe8e2e81a748?auto=format&fit=crop&w=1400&q=80"
            alt=""
            loading="eager"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="hero-content">
          <span className="hero-badge">Licensed &amp; Insured Plumbers</span>
          <h1 className="hero-title">
            Trusted Plumbing Experts in {'Wilmington'}, {'NC'}
          </h1>
          <p className="hero-subtitle">
            From burst pipes to full remodels, {'Page\'s Plumbing Co'} delivers
            fast, code-compliant plumbing solutions for homes and businesses
            across {'Wilmington'}.
          </p>
          <a
            href="tel:19107913752"
            className="hero-cta"
            aria-label="Call now at +1 910-791-3752"
          >
            <span
              className="hero-cta-icon"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: phoneIconSvg }}
            />
            Call {'+1 910-791-3752'}
          </a>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="trust-bar" aria-label="Why trust us">
        <div className="trust-bar-inner">
          {trustItems.map((item, i) => (
            <div className="trust-item" key={i} data-animate data-delay={i + 1}>
              <span
                className="trust-icon"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: checkBadgeSvg }}
              />
              <span className="trust-text">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services" id="services" aria-label="Our plumbing services">
        <div className="services-inner">
          <span className="section-label" data-animate>Our Services</span>
          <h2 className="section-title" data-animate data-delay="1">
            Professional Plumbing Solutions
          </h2>
          <p className="section-desc" data-animate data-delay="2">
            Whether you need an emergency repair at 2 AM or a planned sewer
            line replacement, our licensed plumbers have you covered.
          </p>
          <div className="services-grid">
            {services.map((service, i) => (
              <div
                className="service-card"
                key={i}
                data-animate
                data-delay={i + 1}
              >
                <div
                  className="service-icon-wrap"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: service.icon }}
                />
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about" id="about" aria-label="About us">
        <div className="about-inner">
          <div className="about-image-wrap" data-animate>
            <img
              src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1400&q=80"
              alt=""
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
              }}
            />
          </div>
          <div className="about-content">
            <span className="section-label" data-animate>About Us</span>
            <h2 className="about-title" data-animate data-delay="1">
              Why {'Wilmington'} Trusts {'Page\'s Plumbing Co'}
            </h2>
            <p className="about-text" data-animate data-delay="2">
              {'Page\'s Plumbing Co was built on a simple idea: Wilmington deserves a plumber who shows up on time, explains the problem honestly, and fixes it right the first time. From the salt-air challenges near Wrightsville Beach to the aging pipes in Historic Downtown, we know this region\'s plumbing inside and out. When your home needs expert care, Page\'s Plumbing Co is the name your neighbors already trust.'}
            </p>
            <div className="about-stats" data-animate data-delay="3">
              <div>
                <div className="about-stat-number">24/7</div>
                <div className="about-stat-label">Emergency Service</div>
              </div>
              <div>
                <div className="about-stat-number">100%</div>
                <div className="about-stat-label">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-section" aria-label="Contact us">
        <div className="cta-section-inner" data-animate>
          <h2 className="cta-section-title">
            Contact {'Page\'s Plumbing Co'}
          </h2>
          <p className="cta-section-desc">
            Leaking faucet? Clogged drain? Broken water heater? Don&apos;t wait
            for water damage — call our licensed plumbers now for a free
            estimate.
          </p>
          <a
            href="tel:19107913752"
            className="cta-section-btn"
            aria-label="Call Page\'s Plumbing Co at +1 910-791-3752"
          >
            <span
              className="cta-section-btn-icon"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: phoneIconSvg }}
            />
            Call {'+1 910-791-3752'}
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" role="contentinfo">
        <div className="footer-inner">
          <span className="footer-brand">{'Page\'s Plumbing Co'}</span>
          <div className="footer-info">
            <div className="footer-info-item">
              <span
                className="footer-info-icon"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: mapPinSvg }}
              />
              <span>
                {'4607 Franklin Ave, Wilmington, NC 28403, USA'}, {'Wilmington'}, {'NC'}
              </span>
            </div>
            <div className="footer-info-item">
              <span
                className="footer-info-icon"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: phoneIconSvg }}
              />
              <a
                href="tel:19107913752"
                className="footer-phone-link"
                aria-label="Call Page\'s Plumbing Co at +1 910-791-3752"
              >
                {'+1 910-791-3752'}
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} {'Page\'s Plumbing Co'}. All rights
            reserved. Licensed &amp; insured plumbing professionals.
          </div>
        </div>
      </footer>
    </>
  );
}