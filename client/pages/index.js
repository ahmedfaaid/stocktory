import { useEffect } from 'react'
import Router from 'next/router'

 export default function HomePage() {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/dashboard')
    }
  })

   return <div>Redirecting...</div>
 }