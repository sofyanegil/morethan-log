const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Sofyan Egi Lesmana",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Web Developer",
    bio: "Passionate about learning new things",
    email: "contact.sofyanegi@gmail.com",
    linkedin: "sofyanegi",
    github: "sofyanegil",
    instagram: "",
  },
  projects: [
    {
      name: `sofyanegi`,
      href: "https://github.com/sofyanegil/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "sofyanegi",
    description: "welcome to sofyanegi!",
  },

  // CONFIG configration (required)
  link: "https://sofyanegi.my.id",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "f1ae8777-5ff0-4cec-9a1c-a21e00f2410c", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
