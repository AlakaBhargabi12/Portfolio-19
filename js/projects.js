/**
 * Projects Data & Dynamic Filter Engine
 * Supports interactive category filtering, tech pills, and live demo / source links
 */

const PROJECTS_DATA = [
  {
    id: 'neurovision-ai',
    title: 'NeuroVision AI',
    category: 'ai',
    categoryLabel: 'AI & Deep Learning',
    bannerClass: 'project-banner-ai',
    featured: true,
    description: 'Real-time computer vision engine performing ultra-fast convolutional neural inference and edge object detection directly in the browser with sub-50ms latency.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Neural Networks', 'WebGL'],
    githubUrl: 'https://github.com/alaka-bhargabi-sahu/neurovision-ai',
    liveUrl: 'https://neurovision-ai-demo.pages.dev'
  },
  {
    id: 'hederapay-dlt',
    title: 'HederaPay Micro-DLT',
    category: 'web3',
    categoryLabel: 'Hedera / Web3',
    bannerClass: 'project-banner-dlt',
    featured: true,
    description: 'Decentralized high-throughput micropayments and tamper-proof ledger audit logging interface leveraging the Hedera Consensus Service (HCS) and Token Service (HTS).',
    tags: ['Hedera SDK', 'Hashgraph', 'Smart Contracts', 'Web3.js', 'Node.js'],
    githubUrl: 'https://github.com/alaka-bhargabi-sahu/hederapay-dlt',
    liveUrl: 'https://hederapay-micro.pages.dev'
  },
  {
    id: 'algoflow-visualizer',
    title: 'AlgoFlow AI Simulator',
    category: 'ai',
    categoryLabel: 'AI & Data Science',
    bannerClass: 'project-banner-web',
    featured: false,
    description: 'Interactive visual platform demonstrating backpropagation, gradient descent convergence paths, and neural activation weight adjustments in real-time.',
    tags: ['JavaScript ES6+', 'Canvas 2D', 'Math.js', 'Deep Learning', 'Data Viz'],
    githubUrl: 'https://github.com/alaka-bhargabi-sahu/algoflow-simulator',
    liveUrl: 'https://algoflow-simulator.pages.dev'
  },
  {
    id: 'edupulse-ai',
    title: 'EduPulse Predictive Analytics',
    category: 'web',
    categoryLabel: 'Web Engineering & ML',
    bannerClass: 'project-banner-edu',
    featured: false,
    description: 'Academic performance analytics dashboard combining machine learning predictive models with personalized study curriculum optimization for engineering students.',
    tags: ['Python', 'Scikit-Learn', 'FastAPI', 'Vanilla CSS', 'Chart.js'],
    githubUrl: 'https://github.com/alaka-bhargabi-sahu/edupulse-ai',
    liveUrl: 'https://edupulse-ai-analytics.pages.dev'
  }
];

function renderProjects(categoryFilter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = categoryFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === categoryFilter);

  container.innerHTML = '';

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card reveal-on-scroll is-visible';
    card.setAttribute('data-category', project.category);
    card.id = `project-card-${project.id}`;

    const tagsHtml = project.tags
      .map(tag => `<span class="tag-pill">${tag}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-card-banner ${project.bannerClass}">
        <span class="project-badge-pill">${project.categoryLabel}</span>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 16 4-4-4-4"/>
          <path d="m6 8-4 4 4 4"/>
          <path d="m14.5 4-5 16"/>
        </svg>
      </div>
      <div class="project-card-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${tagsHtml}
        </div>
        <div class="project-card-actions">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" aria-label="View source code for ${project.title}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            Source Code
          </a>
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn primary" aria-label="View live demo for ${project.title}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  initProjectFilters();
});
