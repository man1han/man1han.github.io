import React from 'react'
import './blog.css'
import { useNav } from '../../hooks/useNav'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Blog = () => {
  const works = [
    {
      id: 1,
      title: 'Undergraduate Research Assistant',
      company: 'PRACSYS, Rutgers University',
      location: 'New Brunswick, NJ',
      start: 'May \'22',
      end: 'Present',
      description: [
        '- Assisting in benchmarking using the ML4KP library for kinodynamic planners under the guidance of Prof. Kostas Bekris.',
        '- Testing the DIRT algorithm against other state-of-the-art algorithms for comparing and potentially improving its performance on the established benchmarks.',
      ],
    },
    {
      id: 2,
      title: 'Project lead | Flutter App Developer',
      company: 'HackRU, Rutgers University',
      location: 'New Brunswick, NJ',
      start: 'Aug \'21',
      end: 'Present',
      description: [
        '- Led the mobile development team for the cross-platform application used by 250+ participants, mentors, organizers, and sponsors at the Rutgers Hackathon.',
        '- Implemented a QR scanning feature for a 30% faster check-in process.',
        '- Expanded the cross-platform capabilities to web-browsers for ease-of-access.',
        '- Added day-of features such as slack announcements, event schedule, map, etc.',
      ],
    },
    {
      id: 3,
      title: 'Help Desk Operator',
      company: 'LCSR, Rutgers University',
      location: 'New Brunswick, NJ',
      start: 'Oct \'19',
      end: 'Present',
      description: [
        '- Provide basic operational support for the departments of Computer Science, Mathematics and Statistics at Rutgers University through the ticketing system.',
        '- Administer 50+ Linux servers and computers for regularly monitoring basic operations and perform Tier 1 troubleshooting and maintenance if necessary.',
        '- Follow standard operation protocols for preserving day-to-day logs.',
      ],
    },
  ]
  const blogRef = useNav("Blog")
  return (
    <section ref={blogRef} id='blog'>
      <h2>Experience</h2>
      <div className="container blog__container">
        <div className="blog__exp">
          {works.map((item, index) => (
            <article key={item.id} className="exp__card">
              <div className="exp__title">
                {item.title}
              </div>
              <div className="exp__subtitle">
                <h5>{item.company}</h5>
                <h5 className='location'>
                  <HiOutlineLocationMarker />
                  {item.location}
                </h5>
              </div>
              <div className="exp__date">
                {item.start} - {item.end}
              </div>
              <div className="line"></div>
              <div className="exp__desc-wrap">
                {item.description.map((des, index) => (
                  <p className="exp__desc" key={index}>{des}</p>
                )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog