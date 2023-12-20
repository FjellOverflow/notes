import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Notes",
    enableSPA: false,
    enablePopovers: true,
    analytics: null,
    baseUrl: "fjelloverflow.github.io/notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Inter",
        body: "Inter",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#ECEFF4",
          lightgray: "#CCCCCC",
          gray: "#B8B8B8",
          darkgray: "#2E3440",
          dark: "#2E3440",
          secondary: "#5E81AC",
          tertiary: "#88C0D0",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#2E3440",
          lightgray: "#747E92",
          gray: "#747E92",
          darkgray: "#ECEFF4",
          dark: "#ECEFF4",
          secondary: "#88C0D0",
          tertiary: "#5E81AC",
          highlight: "#434C5E",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
