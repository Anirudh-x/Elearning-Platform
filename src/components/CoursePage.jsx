import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CoursePage = () => {

  const { id } = useParams()

  const [data, setData] = useState([])

  const getCourseData = async () => {
    const response = await axios.get("https://courses-api-worker.aniruddharautofficial.workers.dev/api/courses")
    const courseData = response.data.data
    const courseFound = courseData.find((course) => course.id == id)

    setData(courseFound)
  }

  useEffect(() => {
    getCourseData()
  }, [id])

  return (
    <div>
      <img src={data.image} className='h-6 w-8' />
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>


  )
}

export default CoursePage





























// B0900