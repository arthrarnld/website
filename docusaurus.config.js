const CORE_REPO_URL = "https://github.com/neon-bindings/neon";

module.exports = {
  customFields: {
    coreRepoUrl: CORE_REPO_URL,
  },
  title: "Neon",
  tagline: "Fast and Safe Native Node.js Modules",
  url: "https://neon-bindings.com",
  baseUrl: "/",
  favicon: "logo/letter-logo.png",
  organizationName: "neon-bindings",
  projectName: "website",
  plugins: [
    "@docusaurus/plugin-google-analytics",
    "@docusaurus/plugin-google-gtag",
    [
      "@docusaurus/plugin-sitemap",
      {
        cacheTime: 600 * 1000,
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    hideOnScroll: true,
    navbar: {
      title: "Neon",
      logo: {
        alt: "Neon Logo",
        src: "logo/letter-logo.png",
      },
      items: [
        { position: "left", to: "docs/intro", label: "Docs" },
        {
          position: "left",
          href: "https://github.com/neon-bindings/examples#table-of-contents",
          label: "Examples",
        },
        { position: "left", href: "https://docs.rs/neon", label: "API" },
        { position: "left", to: "docs/roadmap", label: "Roadmap" },
        {
          position: "left",
          href: "https://rust-bindings-slackin.herokuapp.com/",
          label: "Help",
        },
        { position: "left", to: "blog", label: "Blog" },
        {
          position: "left",
          href: CORE_REPO_URL,
          label: "GitHub",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started",
            },
            {
              label: "Examples",
              to: "https://github.com/neon-bindings/examples",
            },
            {
              label: "API Reference",
              to: "https://docs.rs/neon",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // @TODO
            // {
            //   label: 'User Showcase',
            //   to: 'user-showcase'
            // },
            {
              label: "Community Chat",
              to: "https://rust-bindings-slackin.herokuapp.com",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/rustneon",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              to: CORE_REPO_URL,
            },
          ],
        },
      ],
      logo: {
        alt: "Neon Logo",
        src: "logo/text-logo.svg",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Neon Bindings`,
    },
    algolia: {
      // "Search only api key". Safe to keep this public
      apiKey: "bfa6bb4b57d4fa853c0358ee9b195146",
      indexName: "amilajack_neon",
    },
    googleAnalytics: {
      trackingID: "UA-130626950-1",
    },
    gtag: {
      trackingID: "UA-130626950-1",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
      },
    ],
  ],
};
