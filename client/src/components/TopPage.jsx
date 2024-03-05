import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export default function TopPage() {
    const {pathname} = useLocation()
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [pathname])
  return null
}
