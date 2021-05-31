import React from 'react'

const Jobs ({ jobs }) => {
  const jobCards = jobs.map(job () => {
    return
      (
        <Card
          image={job.image}
          name={job.name}
          date={job.date}
          pay={job.pay}
          fluff={job.fluff}
          key={job.id}
        />
      )
    })
  })
  return jobCards
}
