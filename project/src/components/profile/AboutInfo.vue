<template>
  <div class="about-container">
    <div class="about-grid">
      <!-- Bio Section -->
      <div class="about-section">
        <h3 class="section-title">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            />
          </svg>
          About Me
        </h3>
        <p class="bio-text">
          Passionate Frontend Developer with 5+ years of experience building modern web
          applications. I specialize in Vue.js, React, and TypeScript, with a keen eye for user
          experience and performance optimization. I love turning complex problems into simple,
          beautiful, and intuitive designs.
        </p>

        <p class="bio-text">
          When I'm not coding, you can find me exploring new coffee shops ☕, reading tech blogs, or
          contributing to open-source projects. I believe in continuous learning and sharing
          knowledge with the community.
        </p>
      </div>

      <!-- Skills Section -->
      <div class="about-section">
        <h3 class="section-title">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H18V4l-1-1h-2v2h-4V3H9l-1 1v2H6.5C5.67 6 5 6.67 5 7.5S5.67 9 6.5 9H8v10c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V9h1.5c.83 0 1.5-.67 1.5-1.5S18.33 6 17.5 6z"
            />
          </svg>
          Skills & Technologies
        </h3>

        <div class="skills-categories">
          <div class="skill-category">
            <h4 class="category-title">Frontend</h4>
            <div class="skills-list">
              <span class="skill-tag vue">Vue.js</span>
              <span class="skill-tag react">React</span>
              <span class="skill-tag ts">TypeScript</span>
              <span class="skill-tag js">JavaScript</span>
              <span class="skill-tag css">CSS3</span>
              <span class="skill-tag html">HTML5</span>
            </div>
          </div>

          <div class="skill-category">
            <h4 class="category-title">Tools & Frameworks</h4>
            <div class="skills-list">
              <span class="skill-tag">Vite</span>
              <span class="skill-tag">Webpack</span>
              <span class="skill-tag">Tailwind CSS</span>
              <span class="skill-tag">Sass</span>
              <span class="skill-tag">Git</span>
              <span class="skill-tag">Docker</span>
            </div>
          </div>

          <div class="skill-category">
            <h4 class="category-title">Backend</h4>
            <div class="skills-list">
              <span class="skill-tag node">Node.js</span>
              <span class="skill-tag">Express</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">REST API</span>
              <span class="skill-tag">GraphQL</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="about-section">
        <h3 class="section-title">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20 6h-2.5l-1.5-1.5h-5L9.5 6H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H7V8h2.5l1.5-1.5h5L17.5 8H20v10z"
            />
          </svg>
          Experience
        </h3>

        <div class="experience-list">
          <div class="experience-item">
            <div class="exp-header">
              <h4 class="exp-title">Senior Frontend Developer</h4>
              <span class="exp-period">2022 - Present</span>
            </div>
            <p class="exp-company">TechCorp Indonesia</p>
            <p class="exp-description">
              Leading frontend development for enterprise web applications using Vue 3 and
              TypeScript. Improved application performance by 40% and mentored junior developers.
            </p>
          </div>

          <div class="experience-item">
            <div class="exp-header">
              <h4 class="exp-title">Frontend Developer</h4>
              <span class="exp-period">2020 - 2022</span>
            </div>
            <p class="exp-company">StartupXYZ</p>
            <p class="exp-description">
              Developed responsive web applications using React and Vue.js. Collaborated with design
              teams to implement pixel-perfect UI components.
            </p>
          </div>

          <div class="experience-item">
            <div class="exp-header">
              <h4 class="exp-title">Junior Web Developer</h4>
              <span class="exp-period">2019 - 2020</span>
            </div>
            <p class="exp-company">WebAgency Pro</p>
            <p class="exp-description">
              Built custom websites and landing pages for various clients. Gained experience in
              HTML, CSS, JavaScript, and content management systems.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="about-section">
        <h3 class="section-title">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
          Get In Touch
        </h3>

        <div class="contact-info">
          <div class="contact-item">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            <span>john.doe@email.com</span>
          </div>

          <div class="contact-item">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
            <span>linkedin.com/in/johndoe</span>
          </div>

          <div class="contact-item">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span>github.com/johndoe</span>
          </div>

          <div class="contact-item">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
            </svg>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>

        <div class="contact-actions">
          <button class="btn-primary">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            Send Message
          </button>
          <button class="btn-secondary">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 17H7v-2h6v2zm3-4H6V7h10v8z"
              />
            </svg>
            Download CV
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
.about-container {
  color: #ffffff;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.about-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.about-section:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  color: #667eea;
}

.bio-text {
  color: #e0e0e0;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-category {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.category-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1rem 0;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  background: rgba(102, 126, 234, 0.8);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.skill-tag.vue {
  background: #4fc08d;
}
.skill-tag.react {
  background: #61dafb;
  color: #1a1a2e;
}
.skill-tag.ts {
  background: #3178c6;
}
.skill-tag.js {
  background: #f7df1e;
  color: #1a1a2e;
}
.skill-tag.css {
  background: #1572b6;
}
.skill-tag.html {
  background: #e34f26;
}
.skill-tag.node {
  background: #339933;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.experience-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}

.experience-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(102, 126, 234, 0.3);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.exp-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.exp-period {
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 500;
}

.exp-company {
  color: #a0a0b8;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
}

.exp-description {
  color: #e0e0e0;
  line-height: 1.6;
  margin: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #e0e0e0;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  transform: translateX(4px);
}

.contact-item svg {
  color: #667eea;
  flex-shrink: 0;
}

.contact-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  justify-content: center;
  min-width: 140px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .exp-header {
    flex-direction: column;
    gap: 0.25rem;
  }

  .contact-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    flex: none;
  }
}
</style>
