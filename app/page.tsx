export default function Home() {
  const navLinks = ["Writing", "Projects", "About", "Now", "Uses"];

  const gridItems = [
    { num: "01", label: "Writing" },
    { num: "02", label: "Projects" },
    { num: "03", label: "About" },
    { num: "04", label: "Now" },
    { num: "05", label: "Uses" },
    { num: "06", label: "Contact" },
  ];

  const posts = [
    { date: "Coming soon", title: "Why parametric thinking changes how you build software" },
    { date: "Coming soon", title: "Building AI agents for the AEC industry" },
    { date: "Coming soon", title: "From Grasshopper to production: a developer's path" },
  ];

  return (
    <div className="container">
      <nav>
        {navLinks.map((l) => (
          <a key={l} href={`/${l.toLowerCase()}`}>{l}</a>
        ))}
      </nav>

      <section className="hero">
        <p className="hero-tag">Or Moscovitz — Orlando Studio</p>
        <h1>I build tools for those who build the world.</h1>
        <p style={{ marginTop: "1.5rem" }}>
          Parametric developer & software builder for the built environment.
          I create plugins, tools, and AI-powered workflows for architects,
          engineers, and AEC teams that need geometry expertise.
        </p>
      </section>

      <div className="grid">
        {gridItems.map((item) => (
          <div className="grid-item" key={item.num}>
            <span className="num">{item.num}</span>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>

      <section className="section">
        <p className="section-label">Latest writing</p>
        <div className="post-list">
          {posts.map((post, i) => (
            <div className="post-item" key={i}>
              <span className="post-date">{post.date}</span>
              <span className="post-title">{post.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-label">What I work with</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "0.5rem" }}>
          {["Rhino", "Grasshopper", "Revit", "Python", "C#", "Next.js", "AI Agents", "BIM", "Parametric Design"].map(tag => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <footer>
        <span>© 2026 Or Moscovitz · Orlando Studio</span>
        <span>Haifa, Israel</span>
      </footer>
    </div>
  );
}
