import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((_, ...components: QuartzComponent[]) => {
  if (components.length > 0) {
    function FlexBox(props: QuartzComponentProps) {
       return <div style="display: flex; justify-content: space-between;">
        {components.map((Component) => (
          <Component {...props} />
        ))}
      </div>
    }

    return FlexBox
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor
