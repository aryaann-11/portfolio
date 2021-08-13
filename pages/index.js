import Head from 'next/head'
import React from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Case from "../components/Case"
import Process from "../components/Process"
import client from "../client"
export default function Home({ skills, processStages }) {
  return (
    <>
      <Head>
        <title>Aryan Chatterjee</title>
      </Head>
      <Header />
      <Banner />
      <Skills skills={skills} />
      <Case />
      <Process stages={processStages} />
    </>
  )
}

export async function getStaticProps() {
  const skills = await client.fetch(
    `*[_type == 'skill']{title,description,link,level,"image_url":skillImage.asset->url}`
  )
  const processStages = await client.fetch(
    `*[_type == 'processStage']{title,description,stageNumber,"image_url":stageImage.asset->url}`
  )
  console.log(skills[0])
  return {
    props: {
      skills,
      processStages
    }
  }
}
