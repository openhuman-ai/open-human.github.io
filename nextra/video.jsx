import cn from 'clsx'

export default function Video({ src, className, ...props }) {
  return (
    <video
      muted={false}
      autoPlay={false}
      playsInline
      loop
      controls
      className={cn('rounded-xl border dark:border-zinc-800', className)}
      {...props}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
