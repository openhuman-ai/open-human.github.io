const Folder = memo(function FolderInner(props) {
  const level = useContext(FolderLevelContext)
  return (
    <FolderLevelContext.Provider value={level + 1}>
      <FolderImpl {...props} />
    </FolderLevelContext.Provider>
  )
})

export { Folder }
