// import styles from "./styles.module.css"
import cn from "clsx"

export const Loading = ({ color = "#000", className }) => {
  return (
    // <span className={cn(styles.loading, className)}>
    <span className={cn(className)}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  )
}
