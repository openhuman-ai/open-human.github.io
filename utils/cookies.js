export const getCookie = (name) => {
  const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)
  return match ? match[2] : null
}
