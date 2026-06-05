import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Sparkles, BriefcaseBusiness, BarChart3, Users, Rocket, ShieldCheck } from "lucide-react";

const highlights = [
  { metric: "$13M → $130M", label: "CircleCI ARR growth journey" },
  { metric: "1M+", label: "developers reached through platform adoption" },
  { metric: "40M+", label: "monthly builds supported at CircleCI" },
  { metric: "5K+", label: "Snowflake Dev Day registrations ahead of target" },
  { metric: "10x", label: "launch content engagement lift at Anaconda" },
  { metric: "87%", label: "free sign-up growth driven at Inngest" },
];

const strengths = [
  "AI-native platform positioning",
  "Developer and open-source GTM",
  "Product-led and sales-led growth",
  "Executive messaging and narrative development",
  "Launch strategy and field enablement",
  "Analyst relations and competitive positioning",
  "Community, DevRel, and ecosystem marketing",
  "High-performing PMM org design",
];

const roles = [
  {
    company: "Anaconda",
    title: "Sr. Director of Product Marketing",
    time: "May 2025 – Present",
    location: "Remote",
    summary:
      "Leading GTM transformation during Anaconda’s shift from a traditional data science platform to a trusted foundation for AI-native development and enterprise AI workflows.",
    bullets: [
      "Led executive positioning workshops to redefine the company narrative around AI-native development.",
      "Established messaging frameworks centered on governance, reproducibility, workflow adoption, and enterprise AI development.",
      "Restructured sales enablement and field training programs, increasing enablement engagement by 5x.",
      "Oversaw Community and DevRel, aligning OSS initiatives, technical content, and field programs to platform adoption goals.",
    ],
  },
  {
    company: "Inngest",
    title: "Product Marketing Specialist",
    time: "Aug 2024 – Mar 2025",
    location: "Contract",
    summary:
      "Led GTM efforts for a fast-moving developer startup positioning itself as an AI workflow orchestration platform.",
    bullets: [
      "Defined ICPs and messaging that influenced website content, sales materials, and GTM strategy.",
      "Launched demand generation programs that contributed to 2x website traffic and 87% growth in free sign-ups.",
      "Built nurture strategy to convert free-tier users into paying customers and expand existing accounts.",
    ],
  },
  {
    company: "Snowflake",
    title: "Product Marketing Lead, Developer Experiences",
    time: "Oct 2023 – Aug 2024",
    location: "San Mateo, CA / Hybrid",
    summary:
      "Built GTM strategy for Snowflake developer experiences, including Notebooks, Streamlit in Snowflake, DevOps, and Copilot.",
    bullets: [
      "Drove developer-centric feature releases into GA and public preview at Data Cloud Summit.",
      "Created GTM motion and market assessment for Snowflake Developer Experiences.",
      "Led program development and messaging for Dev Day, exceeding 5K+ registrations more than a month ahead of target.",
    ],
  },
  {
    company: "CircleCI",
    title: "Sr. Director / Director / Sr. Product Marketing",
    time: "Jan 2017 – Aug 2023",
    location: "San Francisco, CA / Remote",
    summary:
      "Built and scaled CircleCI’s product marketing function across platform positioning, partner marketing, launch, analyst relations, and developer growth.",
    bullets: [
      "Helped scale ARR from $13M to $130M and platform adoption to 1M+ developers and 40M+ monthly builds.",
      "Built product marketing, technical marketing, partner marketing, and competitive intelligence functions.",
      "Launched CircleCI’s ecosystem and technology partner program as a lead-generating channel.",
      "Scaled GTM frameworks across the product lifecycle, from launch to end-of-life.",
    ],
  },
  {
    company: "Braintree, a PayPal Company",
    title: "Sr. Product Marketing",
    time: "Jun 2015 – Dec 2016",
    location: "San Francisco, CA",
    summary:
      "Owned product architecture, competitive positioning, and messaging for developer and entrepreneur audiences.",
    bullets: [
      "Redefined product messaging, value propositions, and positioning across audience segments.",
      "Delivered competitive analysis and brand tracker research for global competitors.",
      "Maintained high-engagement product communications with roughly 50% open rates.",
    ],
  },
];

const tools = ["Claude", "ChatGPT", "Notion AI", "Granola", "HubSpot", "Salesforce", "Figma", "Miro", "Gong", "Amplitude", "Google Analytics", "CMS", "Webinar tooling", "Enablement platforms"];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" />
        <nav>
          <span className="brand">Cheryl Manalo</span>
          <div className="nav-links">
            <a href="#impact">Impact</a>
            <a href="#experience">Experience</a>
            <a href="#tooling">Tooling</a>
          </div>
          <a className="nav-button" href="mailto:cheryl.manalo@gmail.com">Contact</a>
        </nav>

        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="pill"><Sparkles size={16} /> Product Marketing Leader for AI-native platforms</div>
            <h1>Translating complex technical platforms into market narratives that drive adoption, engagement, and revenue.</h1>
            <p className="hero-copy">
              I build and scale product marketing functions across developer tools, open-source ecosystems, AI workflows, and enterprise technology — with experience at Anaconda, Snowflake, CircleCI, PayPal, and Intuit.
            </p>
            <div className="contact-row">
              <span><MapPin size={16} /> San Francisco Bay Area</span>
              <a href="mailto:cheryl.manalo@gmail.com"><Mail size={16} /> cheryl.manalo@gmail.com</a>
              <a href="https://www.linkedin.com/in/cheryl-manalo-9491074/"> LinkedIn</a>
            </div>
            <div className="button-row">
              <a className="primary-button" href="#experience">View experience <ArrowRight size={16} /></a>
              <a className="secondary-button" href="#impact">See impact metrics</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="leadership-card">
            <div className="dark-card">
              <p className="eyebrow green">Leadership focus</p>
              <h3>Strategic clarity for technical markets.</h3>
              <p>I thrive in fast-moving environments that require crisp positioning, operational execution, and alignment across product, engineering, DevRel, sales, and executive teams.</p>
            </div>
            <div className="focus-grid">
              {[
                [Rocket, "GTM transformation"],
                [ShieldCheck, "Enterprise AI trust"],
                [Users, "Team building"],
                [BarChart3, "PLG growth"],
              ].map(([Icon, label]) => (
                <div className="focus-card" key={label}>
                  <Icon />
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="impact" className="content-section">
        <SectionHeader eyebrow="Impact" title="Metrics that show scale, adoption, and market momentum." description="A track record of building product marketing engines that connect technical depth to business outcomes." />
        <div className="metrics-grid">
          {highlights.map((item) => (
            <div className="metric-card" key={item.metric}>
              <p className="metric">{item.metric}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="white-section">
        <div className="split">
          <SectionHeader eyebrow="Positioning" title="Where I create leverage." description="I specialize in turning technical platforms into clear market stories, practical GTM motions, and enablement that helps field teams sell value instead of features." />
          <div className="strength-grid">
            {strengths.map((strength) => <div className="strength" key={strength}>{strength}</div>)}
          </div>
        </div>
      </section>

      <section id="experience" className="content-section">
        <SectionHeader eyebrow="Experience" title="Built across every stage: startup, scale-up, and enterprise." description="From 0→1 GTM strategy to scaled PMM organizations, my work spans AI-native development, developer experience, infrastructure, payments, and open-source ecosystems." />
        <div className="role-list">
          {roles.map((role) => (
            <article className="role-card" key={`${role.company}-${role.title}`}>
              <div className="role-top">
                <div>
                  <div className="company-pill"><BriefcaseBusiness size={16} /> {role.company}</div>
                  <h3>{role.title}</h3>
                  <p>{role.summary}</p>
                </div>
                <div className="date-card">
                  <p>{role.time}</p>
                  <p>{role.location}</p>
                </div>
              </div>
              <ul>
                {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="tooling" className="dark-section">
        <SectionHeader eyebrow="AI & GTM workflow tooling" title="Modern PMM operating system." description="I use AI-assisted workflows and GTM tooling to accelerate messaging iteration, launch planning, executive briefings, competitive research, campaign execution, and field readiness." />
        <div className="tool-list">
          {tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>
<a
  href="/cheryl-resume-website/portfolio/Cheryl-Manalo-Portfolio.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Work Samples
</a>

      <footer>
        <div className="footer-card">
          <div>
            <h2>Let’s build the story behind the next technical platform.</h2>
            <p>Product marketing leadership for AI, developer tools, and open-source ecosystems.</p>
          </div>
          <a className="primary-button" href="mailto:cheryl.manalo@gmail.com">Contact Cheryl <ArrowRight size={16} /></a>
        </div>
      </footer>
    </main>
  );
}
