export const docsSidebarList = [
  {
    id: "getting-started",
    heading: "Getting Started",
    items: [
      {
        id: "introduction",
        title: "Introduction",
        href: "/docs/introduction"
      },
      {
        id: "installation",
        title: "Installation",
        href: "/docs/installation"
      },
      {
        id: "quick-start",
        title: "Quick Start",
        href: "/docs/quick-start"
      }
    ]
  },
  {
    id: "commands",
    heading: "Commands",
    items: [
      {
        id: "init",
        title: "Init",
        href: "/docs/commands/init"
      },
      {
        id: "commit",
        title: "Commit",
        href: "/docs/commands/commit"
      },
      {
        id: "analyze",
        title: "Analyze",
        href: "/docs/commands/analyze"
      },
      {
        id: "reinit",
        title: "Reinit",
        href: "/docs/commands/reinit"
      },
      {
        id: "whoami",
        title: "Whoami",
        href: "/docs/commands/whoami"
      },
      {
        id: "help",
        title: "Help",
        href: "/docs/commands/help"
      },
    ]
  },
  {
    id: "configuration",
    heading: "Configuration",
    items: [
      {
        id: ".sutra file",
        title: "The .sutra file",
        href: "/docs/configuration/sutra-file"
      },
      {
        id: "custom-models",
        title: "Custom Models",
        href: "/docs/configuration/custom-models"
      }
    ],
  }
] as const;