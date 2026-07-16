import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../components/Card'

function Courses() {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://courses-api-worker.aniruddharautofficial.workers.dev/api/courses")

    setData(response.data.data)
  }

  useEffect(() => {
    getData()
  })

  return (
    <>
      <div className='bg-(--color-bg) p-8 grid grid-cols-3  justify-center items-center gap-8'>
        {data.map((course) => (
          <Card
            title={course.title}
            image={course.image}
            category={course.category}
            level={course.level}
            duration={course.duration}
            price={course.price}
            description={course.description}
            instructor={course.instructor}
          />
        ))}

      </div>
    </>
  )
}



// D6275



export default Courses