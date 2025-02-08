import React from "react";
import { SiPython, SiCsharp, SiC, SiCplusplus, SiJavascript, SiFlutter, SiUnity, SiBlender, SiUnrealengine, SiGooglecloud, SiCss3, SiJava, SiReact, SiHtml5, SiAdobephotoshop } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { FaAws, FaAngular } from "react-icons/fa";
import moodVault from '../projectImages/moodVault.png';
import oneApp from '../projectImages/OneApp.png';
import donut from '../artworkImages/donut.png';
import inpainting from '../blogImages/inpainting.png';
import kuroo from '../artworkImages/kuroo.png';
import legacy from '../artworkImages/legacy.png';
import me_outline from '../artworkImages/me_outline.png';
import snor from '../artworkImages/snor.jpg';


export const featuredProjects = [
    {
        id: 1,
        title: 'Mood Vault',
        description: 'A google chrome extension to save mood boards for all your creative needs.',
        image: moodVault,
        link: 'https://example.com/project-one'
    },
    {
        id: 2,
        title: 'OneApp',
        description: 'The official app used at HackRU for check-in and other day-of needs',
        image: oneApp,
        link: 'https://example.com/project-one'
    },
    {
        id: 3,
        title: 'OneApp',
        description: 'The official app used at HackRU for check-in and other day-of needs',
        image: oneApp,
        link: 'https://example.com/project-one'
    }]
export const featuredArtwork = [
    {
        id: 1,
        title: 'Donut try this at home',
        description: 'The “hello world” of 3D modeling in Blender.',
        image: donut,
        link: 'https://example.com/project-two'
    }]
export const featuredBlog = [
    {
        id: 1,
        title: 'In-painting using Machine Learning',
        description: 'Filling the pot holes in images using the artificially intelligent cement.',
        image: inpainting,
        link: 'https://example.com/project-three'
    },
    {
        id: 2,
        title: 'In-painting using Machine Learning',
        description: 'Filling the pot holes in images using the artificially intelligent cement.',
        image: inpainting,
        link: 'https://example.com/project-three'
    },
]



/// PROJECT DATA

export const projectCards = [
    {
        id: 1,
        slug: 'cup-mix-up',
        title: 'Cup Mix Up',
        image: oneApp,
        description: " A digital take of the classic cup shuffle game",
        stack: [<SiUnity />, <SiCsharp />],
        tags: ['Web', 'Mobile'],
        ongoing: true,
        github: 'https://man1han.github.io/cmu',
        demo: 'https://example.com/project-three',
    },
    {
        id: 2,
        slug: 'one-app',
        title: 'OneApp',
        image: oneApp,
        description: 'Mobile App used in Rutgers\' hackathon: HackRU',
        stack: [<SiFlutter />],
        tags: ['Android', 'iOS', 'Web'],
        ongoing: false,
        github: 'https://github.com/HackRU/OneAppFlutter',
        demo: 'https://example.com/project-three',
    },
    {
        id: 3,
        slug: 'webfolio',
        title: 'Webfolio',
        image: oneApp,
        description: 'This webpage developed using React.',
        stack: [<SiReact />, <SiCss3 />],
        tags: ['Web', 'UI'],
        ongoing: false,
        github: 'https://github.com/man1han/man1han.github.io',
        demo: 'https://example.com/project-three',
    },
    {
        id: 4,
        slug: 'mood-vault',
        title: 'Mood Vault',
        image: moodVault,
        description: 'Mood Vault is a powerful Google Chrome extension that provides an intuitive and seamless way for creative minds to create and manage mood boards effortlessly',
        stack: [<SiJavascript />, <SiCss3 />, <SiHtml5 />],
        tags: ['Web'],
        ongoing: false,
        github: 'https://chrome.google.com/webstore/detail/mood-vault/fdnlmnoceadijklmomfedckgjdclacgo',
        demo: 'https://example.com/project-three',
    },

]


export const languages = [
    {
        id: 1,
        icon: <SiPython />,
        name: 'Python',
    },
    {
        id: 2,
        icon: <SiJava />,
        name: 'Java',
    },
    {
        id: 3,
        icon: <SiC />,
        name: 'C',
    },
    {
        id: 4,
        icon: <SiCplusplus />,
        name: 'C++',
    },
    {
        id: 5,
        icon: <SiCsharp />,
        name: 'C#',
    },
    {
        id: 6,
        icon: <SiHtml5 />,
        name: 'HTML5',
    },
    {
        id: 7,
        icon: <SiCss3 />,
        name: 'CSS3',
    },
    {
        id: 8,
        icon: <SiJavascript />,
        name: 'Javascript',
    },

    {
        id: 9,
        icon: <GrMysql />,
        name: 'MySQL',
    },

]


export const technologies = [
    {
        id: 1,
        icon: <SiReact />,
        name: 'React',
    },
    {
        id: 2,
        icon: <FaAngular />,
        name: 'Angular',
    },
    {
        id: 3,
        icon: <SiFlutter />,
        name: 'Flutter',
    },
    {
        id: 4,
        icon: <FaAws />,
        name: 'Amazon Web Services',
    },
    {
        id: 5,
        icon: <SiGooglecloud />,
        name: 'Google Cloud Platform',
    },
    {
        id: 6,
        icon: <SiUnity />,
        name: 'Unity',
    },
    {
        id: 7,
        icon: <SiUnrealengine />,
        name: 'Unreal Engine',
    },
    {
        id: 8,
        icon: <SiBlender />,
        name: 'Blender',
    },
    {
        id: 9,
        icon: <SiAdobephotoshop />,
        name: 'Photoshop',
    },
]

export const education = [
    {
        id: 1,
        school: 'Rutgers University',
        location: 'New Brunswick, NJ',
        degree: 'Bachelor of Science - Computer Science',
        gpa: '3.6 / 4.0',
        start: 'Sep 2019',
        end: 'May 2023',
    },
    {
        id: 2,
        school: 'Shanti Devi Shukla Junior College',
        location: 'Mumbai, India',
        degree: 'High School - Physical Sciences',
        gpa: '',
        start: 'Jun 2016',
        end: 'May 2018',
    },
    {
        id: 3,
        school: 'St. Xavier\'s High School',
        location: 'Mumbai, India',
        degree: 'High School',
        gpa: '',
        start: 'Sep 2006',
        end: 'May 2016',
    }
]

export const workExperience = [
    {
        id: 1,
        title: 'Senior Mobile App Developer',
        company: 'HackRU',
        location: 'New Brunswick, NJ',
        start: 'May 2023',
        end: 'Aug 2021',
        description: [
            'Supervised a team of 2 developers using agile methodologies in improving a cross-platform flutter application used by 300+ participants, mentors, organizers, and sponsors during the Rutgers Hackathon for day-of activities.'
        ]
    },
    {
        id: 2,
        title: 'Help Desk Operator',
        company: 'Rutgers University',
        location: 'Piscatway, NJ',
        start: 'Oct 2019',
        end: 'May 2023',
        description: [
            'Provide basic operational support for the departments of Computer Science, Mathematics and Statistics at Rutgers University through the ticketing system and administer 50+ Linux servers and computers for regularly monitoring basic operations and perform Tier 1 troubleshooting and maintenance if necessary.'
        ]
    },
    {
        id: 3,
        title: 'Research Assistant',
        company: 'PRACSYS Robotics Lab',
        location: 'New Brunswick, NJ',
        start: 'May 2022',
        end: 'Dec 2022',
        description: [
            'Performed comprehensive benchmarking using the ML4KP library for kinodynamic planners, analyzing and comparing the performance of the DIRT algorithm against state-of-the-art alternatives.'
        ]
    }
]

export const certifications = [
    {
        id: 1,
        title: 'AWS Cloud Practioner',
        from: 'Amazon Web Services',
        date: 'May 2024',
        link: 'https://www.credly.com/badges/d7178c74-ac1b-426c-acbd-c9fe050d07e4/linked_in_profile'
    },
    {
        id: 2,
        title: 'Agile Virtual Experience Program',
        from: 'JPMorganChase',
        date: 'May 2024',
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20&%20Co._eeXkSJESRooQDpnQv_1689186608744_completion_certificate.pdf'
    },
    {
        id: 3,
        title: 'Software Engineering Virtual Experience',
        from: 'JPMorganChase',
        date: 'May 2020',
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_eeXkSJESRooQDpnQv_1728362015638_completion_certificate.pdf'
    },
]





export const artworkCards = [
    {
        id: 1,
        image: legacy,
        title: 'Artwork 1',
        description: 'Some description of this artwork limited to a line',
        medium: 'Digital',
    },
    {
        id: 2,
        image: me_outline,
        title: 'Artwork 2',
        description: 'Some description of this artwork limited to a line',
        medium: 'Pencil on paper',
    },
    {
        id: 3,
        image: snor,
        title: 'Artwork 3',
        description: 'Some description of this artwork limited to a line',
        medium: 'Watercolor on paper',
    },
    {
        id: 4,
        image: kuroo,
        title: 'Artwork 4',
        description: 'Some description of this artwork limited to a line',
        medium: 'Digital',
    },
    {
        id: 5,
        image: donut,
        title: 'Artwork 5',
        description: 'Some description of this artwork limited to a line',
        medium: 'Digital',
    },
    {
        id: 6,
        image: legacy,
        title: 'Artwork 6',
        description: 'Some description of this artwork limited to a line',
        medium: 'Acrylic on paper',
    },
    {
        id: 1,
        image: legacy,
        title: 'Artwork 1',
        description: 'Some description of this artwork limited to a line',
        medium: 'Digital',
    },
    {
        id: 3,
        image: snor,
        title: 'Artwork 3',
        description: 'Some description of this artwork limited to a line',
        medium: 'Watercolor on paper',
    },
    {
        id: 4,
        image: kuroo,
        title: 'Artwork 4',
        description: 'Some description of this artwork limited to a line',
        medium: 'Digital',
    },
    {
        id: 5,
        image: donut,
        title: 'Artwork 5',
        description: 'Some description of this artwork limited to a line',
        medium: 'Digital',
    },
    {
        id: 6,
        image: legacy,
        title: 'Artwork 6',
        description: 'Some description of this artwork limited to a line',
        medium: 'Acrylic on paper',
    },
]

export const blogCards = [
    {
        id: 1,
        title: 'Story 1',
        slug: 'story1',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Fiction'],
        time: '6 min',
        link: 'https://example.com/project-two',
        content: [
            { "type": "text", "data": "Welcome to my first blog post! Here, I will share my thoughts on React and dynamic content rendering. Typing more shit so that i can check if longer paragraphs work in this blog page. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
            { "type": "image", "data": inpainting, "alt": "React Logo" },
            {"type": "heading", "data": "Chapter two"},
            { "type": "text", "data": "React makes it super easy to work with dynamic data. Using JSON, we can store blog content flexibly.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
            { "type": "image", "data": snor, "alt": "A code snippet" },
            { "type": "text", "data": "Stay tuned for more insights!" }
        ]
    },
    {
        id: 2,
        title: 'Story 2',
        slug: 'story2',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Case Study', 'Non-Fiction'],
        time: '4 min',
        link: 'https://example.com/project-two',
    },
    {
        id: 3,
        title: 'Story 3',
        slug: 'story3',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Non-Fiction'],
        time: '3 min',
        link: 'https://example.com/project-two',
    },
    {
        id: 4,
        title: 'Story 4',
        slug: 'story4',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Review'],
        time: '11 min',
        link: 'https://example.com/project-two',
    },
    {
        id: 5,
        title: 'Story 5',
        slug: 'story5',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Tutorial'],
        time: '2 min',
        link: 'https://example.com/project-two',
    },
    {
        id: 1,
        title: 'Story 1',
        slug: 'story6',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Fiction'],
        time: '6 min',
        link: 'https://example.com/project-two',
    },
    {
        id: 2,
        title: 'Story 2',
        slug: 'story7',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Case Study'],
        time: '4 min',
        link: 'https://example.com/project-two',
    },
    {
        id: 3,
        title: 'Story 3',
        slug: 'story8',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Non-Fiction'],
        time: '3 min',
        link: 'https://example.com/project-two',
    },
    {
        id: 4,
        title: 'Story 4',
        slug: 'story9',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Review'],
        time: '11 min',
        link: 'https://example.com/project-two',
    },
    {
        id: 5,
        title: 'Story 5',
        slug: 'story10',
        image: inpainting,
        description: 'Some description of this writing not limited to a line and it is actually pretty long since I need to fill the space taken from having to put an image here.',
        tags: ['Tutorial'],
        time: '2 min',
        link: 'https://example.com/project-two',
    },
]