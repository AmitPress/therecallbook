import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: 'recallbook.netlify.app',
  title: 'RecallBook',
  subtitle: 'Recall Your Actions',
  lang: 'en-US',
  description: 'Powered by SvelteKit',
  author: {
    name: 'Amit Malaker',
    photo: '/assets/maskable@192.png',
    status: '❤️',
    bio: 'Student | Crepuscular | SCP enthusiast'
  },
  themeColor: '#3D4451'
}
