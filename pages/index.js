import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Home() {
  const [designs, setDesigns] = useState([]);

  const getDesigns = async () => {
    const res = await axios.get('/api/designs')
    setDesigns(res.data.designsData)
  }

  useEffect(() => { getDesigns() }, [])

  return (
    <>
      <Link href="/api/auth/login">Login</Link>
      <br />
      <Link href="/api/auth/logout">Logout</Link>
      <br />
      <p>Desgins: {String(designs.map(design => design.name))} </p>
    </>
  )
}
