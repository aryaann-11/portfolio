import Head from 'next/head'
import React from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Skills from "../components/Skills"
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Skills />
    </>
  )
}
