import cn from "clsx"
import { File } from "./file"
import { Folder } from "./folder"

export function Menu({ directories, anchors, className, onlyCurrentDocs }) {
  return (
    <ul className={cn(classes.list, className)}>
      {directories.map((item) =>
        !onlyCurrentDocs || item.isUnderCurrentDocsTree ? (
          item.type === "menu" ||
          (item.children && (item.children.length || !item.withIndexPage)) ? (
            <Folder key={item.name} item={item} anchors={anchors} />
          ) : (
            <File key={item.name} item={item} anchors={anchors} />
          )
        ) : null
      )}
    </ul>
  )
}
