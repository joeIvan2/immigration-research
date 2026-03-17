// @ts-ignore
import filterScript from "./scripts/filter.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const SentimentFilter: QuartzComponent = (_props: QuartzComponentProps) => {
  // This component renders nothing visible — its sole purpose is injecting the
  // client-side filter script that activates the .claim-filters buttons already
  // present in the markdown content.
  return <></>
}

SentimentFilter.afterDOMLoaded = filterScript

export default (() => SentimentFilter) satisfies QuartzComponentConstructor
