import cn from "clsx"

export const Table = ({ className = "", ...props }) => (
  <table className={cn("block overflow-x-scroll", className)} {...props} />
)
