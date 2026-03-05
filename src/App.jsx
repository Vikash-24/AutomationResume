import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/Navbar.css"; // navbar styles
import "./index.css";             // global styles

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        {/* ===== HERO / HOME ===== */}
        <section id="home" className="section hero">
          <div className="hero__text">
            <h1>Hi, I'm <span className="brand">Botu Vikash Kumar</span> 👋</h1>
            <h2 className="subtitle">Automation Tester • QA Engineer</h2>
            <p className="lead">
              I build robust, scalable test automation that improves quality and accelerates releases.
            </p>

            <div className="hero__ctas" href="/assets/BotuVikash_Resume.pdf"><a>
                Download Resume
              </a>
              <a href="#contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I’m an Automation Tester focused on building reliable test suites for web and API layers.
            I enjoy designing maintainable frameworks, integrating with CI/CD, and delivering readable reports
            that help teams make decisions quickly.
          </p>
          <ul className="bullets">
            <li>Specialized in Selenium / Playwright / Cypress</li>
            <li>Comfortable with Java / JavaScript</li>
            <li>CI/CD with Jenkins / GitHub Actions</li>
            <li>Reporting: Allure / Extent</li>
          </ul>
        </section>

        {/* ===== SKILLS ===== */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="grid skills">
            <div className="card">
              <h3>Automation</h3>
              <p>Selenium, Playwright, Cypress, WebdriverIO, Appium</p>
            </div>
            <div className="card">
              <h3>Languages</h3>
              <p>Java, JavaScript (TypeScript optional), Python (basic)</p>
            </div>
            <div className="card">
              <h3>Testing</h3>
              <p>UI, API, Regression, Smoke, Integration, E2E</p>
            </div>
            <div className="card">
              <h3>DevTools</h3>
              <p>Git, Jenkins, Postman, JMeter, Docker (basics)</p>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid projects">
            <article className="card">
              <h3>E‑Commerce Automation Suite</h3>
              <p className="meta">Selenium • Java • TestNG • Jenkins</p>
              <p>
                Automated login, product search, cart, checkout, and payments with 120+ test cases.
                Integrated with CI for nightly runs and Allure reports.
              </p>
              <div className="card-actions">
                <a href="#demo">Demo</a>
              </div>
            </article>
            <article className="card">
              <h3>API Regression for Payments</h3>
              <p className="meta">Rest Assured • Java • Allure</p>
              <p>
                Built regression pack for payments APIs with schema validation and contract tests.
              </p>
              <div className="card-actions">
                <a href="#github">GitHub</a>
              </div>
            </article>
          </div>
        </section>

        {/* ===== WORKFLOW ===== */}
        <section id="workflow" className="section">
          <h2>Automation Workflow</h2>
          <ol className="workflow">
            <li>Requirements & Test Planning</li>
            <li>Framework & Script Development</li>
            <li>Test Data & Environments</li>
            <li>CI/CD Integration</li>
            <li>Reports & Metrics</li>
            <li>Defects & Retesting</li>
          </ol>
        </section>

        {/* ===== EXPERIENCE ===== */}
        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Programmer Analyst — Cognizant</h3>
              <p className="meta">YYYY – Present · Chennai, India</p>
              <ul className="bullets">
                <li>Designed regression automation suite for web apps (Selenium/Java).</li>
                <li>Integrated with Jenkins pipeline; scheduled nightly runs and reporting.</li>
                <li>Collaborated with developers to triage flaky tests and reduce failures.</li>
              </ul>
            </div>
            {/* Add more roles here */}
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Let’s connect! I’m open to roles and collaborations.</p>
          <ul className="contact">
            <li><strong>Email:</strong> your.email@example.com</li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/your-handle">linkedin.com/in/your-handle</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/your-handle">github.com/your-handle</a></li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}