import Head from 'next/head'
import React from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Skills from "../components/Skills"
import client from "../client"
export default function Home({ skills }) {
  return (
    <>
      <Head>
        <title>Aryan Chatterjee</title>
      </Head>
      <Header />
      <Banner />
      <Skills skills={skills} />
    </>
  )
}

export async function getStaticProps() {
  const skills = await client.fetch(
    `*[_type == 'skill']{title,description,link,level,"image_url":skillImage.asset->url}`
  )
  console.log(skills[0])
  return {
    props: {
      skills
    }
  }
}
