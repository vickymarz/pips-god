import { useEffect } from "react"
import { useLocation } from "react-router-dom";

export const GoTop = () => {
    const routePath = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [routePath])

  return null
}

