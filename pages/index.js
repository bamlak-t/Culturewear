import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"
import { getUser } from "../src/mockdata";

export default function Home() {
  const [designs, setDesigns] = useState([]);
  const [user, setUser] = useState({});

  const getDesigns = async () => {
    const res = await axios.get('/api/designs')
    setDesigns(res.data.designsData)
  }

  const getCurrentUser = async () => {
    const res = await axios.get('/api/users/me')
    setUser(res.data.userData)
  }

  useEffect(() => { getDesigns(); getCurrentUser() }, [])

  return (
    <>
      <Link href="/api/auth/login">Login</Link>
      <br />
      <Link href="/api/auth/logout">Logout</Link>
      <br />
      <p>Desgins: {String(designs.map(design => design.name))} </p>
      <p>User: {String(user.name)}</p>
    </>
  )
}
