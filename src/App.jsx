import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Sparkles, BriefcaseBusiness, BarChart3, Users, Rocket, ShieldCheck } from "lucide-react";

const highlights = [
  { metric: "$13M → $130M", label: "CircleCI ARR growth journey" },
  { metric: "1M+", label: "CircleCI developer adoption during my tenure" },
  { metric: "40M+", label: "CircleCI monthly build volume during my tenure" },
  { metric: "5K+", label: "Snowflake Dev Day registrations ahead of target" },
  { metric: "5x", label: "engagement growth across PMM-owned and optimized enablement content and assets at Anaconda (May 2025–July 2026)" },
  { metric: "87%", label: "free sign-up growth during Inngest website and email lifecycle experiments (Jan–Mar 2025)" },
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
    title: "Senior Director of Product Marketing",
    time: "May 2025 – Aug 2026",
    location: "Remote",
    summary:
      "Led GTM transformation during Anaconda’s shift from a traditional data science platform to a trusted foundation for AI-native development and enterprise AI workflows.",
    bullets: [
      "Led executive positioning workshops to redefine the company narrative around AI-native development.",
      "Helped connect the expanding portfolio into an enterprise AI platform narrative, expressed through a customer workflow and four capability pillars for the platform overview and homepage.",
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
      "Developed positioning and product stories for Notebooks, Streamlit, Copilot, and DevOps experiences, including authored and ghostwritten launch content.",
      "Led program development and messaging for Dev Day, exceeding 5K+ registrations more than a month ahead of target.",
    ],
  },
  {
    company: "CircleCI",
    title: "Senior Director of Product Marketing (promoted twice)",
    time: "Jan 2017 – Aug 2023",
    location: "San Francisco, CA / Remote",
    summary:
      "Built and scaled CircleCI’s product marketing function across platform positioning, partner marketing, launch, analyst relations, and developer growth.",
    bullets: [
      "Helped scale ARR from $13M to $130M and platform adoption to 1M+ developers and 40M+ monthly builds.",
      "Built product marketing, technical marketing, partner marketing, and competitive intelligence functions.",
      "Launched CircleCI’s ecosystem and technology partner program as a lead-generating channel.",
      "Led PMM strategy for the State of Software Delivery report, translating research into messaging, sales enablement, blog content, and campaign assets.",
    ],
  },
  {
    company: "Braintree, a PayPal Company",
    title: "Senior Product Marketing Manager",
    time: "Jun 2015 – Dec 2016",
    location: "San Francisco, CA",
    summary:
      "Owned product architecture, competitive positioning, and messaging for developer and entrepreneur audiences.",
    bullets: [
      "Simplified the positioning of a multi-product offering through product architecture, audience-specific messaging, and value propositions.",
      "Delivered competitive analysis and brand tracker research for global competitors.",
      "Maintained high-engagement product communications with roughly 50% open rates.",
    ],
  },
];

const tools = ["ChatGPT", "Claude", "Figma", "Miro", "Gong", "Amplitude", "HubSpot", "Salesforce"];

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
            <a href="#tooling">How I work</a>

          </div>
          <a className="nav-button" href="mailto:cheryl.manalo@gmail.com">Contact</a>
        </nav>

        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="pill"><Sparkles size={16} /> Product Marketing Leader for AI-native platforms</div>
            <h1>Translating complex technical platforms into market narratives that drive adoption, engagement, and revenue.</h1>
            <p className="hero-copy">
              I build and scale product marketing functions across developer tools, open-source ecosystems, AI workflows, and enterprise technology, with experience at Anaconda, Snowflake, CircleCI, PayPal, and Intuit.
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
              <p>I thrive in fast-moving environments that require crisp positioning, compelling messaging, creative execution, and alignment across product, engineering, DevRel, sales, and executive teams.</p>
            </div>
            <div className="focus-grid">
              {[
                [Rocket, "GTM transformation"],
                [ShieldCheck, "Enterprise AI trust"],
                [Users, "Messaging & storytelling"],
                [BarChart3, "Product-led growth"],
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
        <SectionHeader eyebrow="Impact" title="Metrics that show scale, adoption, and market momentum." description="Company scale during my tenure alongside marketing program results. ARR, developer adoption, and build volume reflect company-wide outcomes supported by cross-functional teams." />
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


      <section id="selected-work" className="content-section">
        <SectionHeader eyebrow="Selected work" title="The story, the craft, and the output." description="A few examples of how I turn complex products and market insight into clear narratives and useful marketing." />
        <div className="role-list">
          <article className="role-card">
            <div className="company-pill">Anaconda · Platform narrative</div>
            <h3>Connecting an expanding portfolio to the enterprise AI workflow.</h3>
            <p>I investigated customer and analyst concerns about putting AI into production, built internal alignment, and helped establish a platform story connecting acquired capabilities. The work translated into a workflow narrative and four capability pillars applied to the platform overview and homepage.</p>
          </article>
          <article className="role-card">
            <div className="company-pill">CircleCI · Research-led storytelling</div>
            <h3>Making software delivery data useful to the market.</h3>
            <p>To differentiate CircleCI in a crowded CI/CD market, I led PMM strategy for the State of Software Delivery report and created the supporting messaging, sales enablement, blog, and campaign assets. The program gave teams a data-backed story to support enterprise sales conversations.</p>
          </article>
          <article className="role-card">
            <div className="company-pill">Snowflake · Developer narrative and launch</div>
            <h3>Bringing developer experiences to market with a clear story.</h3>
            <p>I led positioning and launch work for Notebooks, Streamlit, Copilot, and DevOps experiences, including writing and ghostwriting product content. For Snowflake’s inaugural Dev Day, I developed the narrative, positioning, and GTM motion that secured more than 5,000 registrations over a month ahead of the event.</p>
          </article>
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
        <SectionHeader eyebrow="Approach" title="How I work." description="Clear positioning starts with understanding the customer. I connect research and competitive insight to messaging, then refine the story with product and sales teams. AI-assisted workflows and marketing tools support the research, iteration, and execution; the judgment behind the work is mine." />
        <div className="tool-list">
          {tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>

<footer>
  <div className="footer-card">
    <div>
      <h2>Let’s build a clear story for your next stage of growth.</h2>
      <p>Positioning, messaging, launches, and go-to-market strategy for complex products and evolving markets.</p>
      <p id="work-samples-note">Work samples PDF available below. Password provided upon request: <a href="mailto:cheryl.manalo@gmail.com?subject=Work%20samples%20password%20request" style={{ textDecoration: "underline" }}>request the password</a>.</p>
    </div>

    <a className="primary-button" href="mailto:cheryl.manalo@gmail.com">
      Contact Cheryl <ArrowRight size={16} />
    </a>

    <a
      className="secondary-button"
      href={`${import.meta.env.BASE_URL}portfolio/Cheryl-Manalo-Work-Samples.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      aria-describedby="work-samples-note"
    >
      View work samples (PDF)
    </a>
  </div>
</footer>
    </main>
  );
}
