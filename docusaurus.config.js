// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cash Compass Docs",
  tagline: "Documentation for Cash Compass, your personal finance tracker",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.cashcompass.co",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ericdudley", // Usually your GitHub org/user name.
  projectName: "cash-compass-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-G17KP0CG2B",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Cash Compass Docs",
        logo: {
          alt: "Cash Compass Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "appDocsSidebar",
            position: "right",
            label: "Documentation",
          },
          {
            type: "docSidebar",
            sidebarId: "releasesSidebar",
            position: "right",
            label: "Releases",
          },
          { to: "/blog", label: "Blog", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Pages",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Documentation",
                to: "/docs/app/getting-started",
              },
              {
                label: "Roadmap",
                to: "https://github.com/users/ericdudley/projects/1/views/1?pane=info",
              },
              {
                label: "Status",
                to: "https://status.cashcompass.co",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Reddit",
                href: "https://reddit.com/r/cashcompass",
              },
              {
                label: "Discord",
                href: "https://discord.gg/Au332G8CJW",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/CashCompass",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                to: "/legal/privacy",
              },
              {
                label: "Terms of Service",
                to: "/legal/terms",
              },
              {
                label: "Cookie Policy",
                to: "/legal/cookie",
              },
              {
                label: "Company Information",
                to: "/legal/company-information",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Cash Compass",
                href: "https://cashcompass.co",
              },
              {
                label: "Support",
                href: "mailto:support@cashcompass.co",
              },
            ],
          },
        ],
        copyright: `Cash Compass © ${new Date().getFullYear()} All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
