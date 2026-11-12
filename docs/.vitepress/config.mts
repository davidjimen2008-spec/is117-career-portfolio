import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'Frontend Futures',
  description: 'Evidence-led frontend career research and portfolio planning',
  base: '/is117-career-portfolio/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'Frontend Futures',
    logo: undefined,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Career Paths', link: '/research/roles' },
      { text: 'Compare Roles', link: '/research/comparison' },
      { text: 'Portfolio Roadmap', link: '/portfolio/plan' },
      { text: 'Review & Sources', link: '/review/log' }
    ],
    sidebar: [
      { text: 'Explore careers', items: [
        { text: 'Employer role cards', link: '/research/roles' },
        { text: 'Role comparison', link: '/research/comparison' }
      ] },
      { text: 'Build with evidence', items: [
        { text: 'Portfolio roadmap', link: '/portfolio/plan' },
        { text: 'Review & decisions', link: '/review/log' },
        { text: 'Method & AI use', link: '/research/method' }
      ] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/davidjimen2008-spec/is117-career-portfolio' }],
    footer: {
      message: 'IS117-005 · Source-linked research · Research dated November 12, 2026',
      copyright: 'Career information changes. Verify requirements on original employer sites.'
    },
    search: { provider: 'local' }
  },
  vite: { resolve: { alias: [{ find: '@', replacement: fileURLToPath(new URL('../', import.meta.url)) }] } }
})
