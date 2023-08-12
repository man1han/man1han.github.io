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
      end: 'Dec \'22',
      description: [
        '- Conducted benchmarking using the ML4KP library for kinodynamic planners, analyzing the performance of the DIRT algorithm against state-of-the-art alternatives.',
        '- Developed a website using Jekyll to showcase bibtex lists, meeting lab requirements and enhancing research dissemination.',
      ],
    },
    {
      id: 2,
      title: 'Project lead | Flutter App Developer',
      company: 'HackRU, Rutgers University',
      location: 'New Brunswick, NJ',
      start: 'Aug \'21',
      end: 'May \'23',
      description: [
        '- Led a team of 2 developers in creating a cross-platform application used by 300+ participants, mentors, organizers, and sponsors during the Rutgers Hackathon.',
        '- Implemented a QR scanning feature that reduced the check-in process time by 30%, resulting in faster and more efficient event entry for participants.',
        '- Extended app accessibility by integrating web-browsing capabilities, resulting in a 20% increase in user engagement.',
        '- Enhanced app functionality with day-of features including slack announcements, event schedules, and maps, resulting in a 90% positive feedback from users.',
      ],
    },
    {
      id: 3,
      title: 'Help Desk Operator',
      company: 'LCSR, Rutgers University',
      location: 'New Brunswick, NJ',
      start: 'Oct \'19',
      end: 'May \'23',
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