import { useEffect, useState } from 'react'

function normalisePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  return pathname.replace(/\/+$/, '') || '/'
}

export function navigate(to) {
  const nextPath = normalisePath(to)

  if (window.location.pathname === nextPath) {
    return
  }

  window.history.pushState({}, '', nextPath)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'auto' })
}

export function useRoute() {
  const [path, setPath] = useState(() => normalisePath(window.location.pathname))

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(normalisePath(window.location.pathname))
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  return path
}
