import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"
import { getUser } from "../src/mockdata";

export default function Home() {
  const [designs, setDesigns] = useState([])
  const [user, setUser] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [tailor, setTailor] = useState({})
  const [tailors, setTailors] = useState([])
  const [reviews, setReviews] = useState([])


  const getDesigns = async () => {
    const res = await axios.get('/api/designs')
    setDesigns(res.data.designsData)
  }

  const getCurrentUser = async () => {
    const res = await axios.get('/api/users/me')
    setUser(res.data.userData)
  }

  const getUser = async (id) => {
    const res = await axios.get(`/api/users/${id}`)
    setCurrentUser(res.data.userData)
  }

  const getTailor = async (id) => {
    const res = await axios.get(`/api/tailors/${id}`)
    setTailor(res.data.tailorData)
  }

  const getTailors = async () => {
    const res = await axios.get(`/api/tailors`)
    setTailors(res.data.tailorsData)
  }

  const getReviews = async (id) => {
    const res = await axios.get(`/api/reviews/${id}`)
    setReviews(res.data.reviewsData)
  }


  const TAILOR_ID = "SOGY9Qi0SOHdFAjS4WTL"

  useEffect(() => {
    getDesigns();
    getUser(TAILOR_ID);
    getCurrentUser();

    getTailor(TAILOR_ID);
    getReviews(TAILOR_ID);

    getTailors();
  }, [])

  return (
    <>
      <Link href="/api/auth/login">Login</Link>
      <br />
      <Link href="/api/auth/logout">Logout</Link>
      <br />
      <p>Desgins: {String(designs.map(design => design.name))} </p>
      <p>Any user: {String(user.name)}</p>
      <p>Current User: {String(currentUser.name)}</p>
      <p>Tailor User Id: {String(tailor.id)}</p>
      <p>All Tailors: {String(tailors.map(tailor => tailor.id))}</p>
      <p>Reviews: {String(reviews.map(review => review.body))}</p>
    </>
  )
}
