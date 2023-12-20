import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <div style="display: flex; justify-content: start; align-items: center;">
      <a href={baseDir}>
        <img src={`https://${cfg.baseUrl}/static/icon.svg`} class="desktop-only page-hero" />
      </a>
      <h1 class={`page-title ${displayClass ?? ""}`}>
        <a href={baseDir}>{title}</a>
      </h1>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  font-size: 3rem;
}

.page-hero {
  width: 64px;
  margin-right: 16px;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
