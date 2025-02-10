import React from "react";
import { SiPython, SiCsharp, SiC, SiCplusplus, SiJavascript, SiFlutter, SiUnity, SiBlender, SiUnrealengine, SiGooglecloud, SiCss3, SiJava, SiReact, SiHtml5, SiAdobephotoshop, SiAndroid, SiIos, SiGooglechrome, SiTensorflow, SiMidi, SiAudacity, SiNumpy, SiPandas, SiKeras, SiGit, SiOpencv } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { FaAws, FaAngular } from "react-icons/fa";


/// Artworks
import legacy from '../artworkImages/legacy.png';
import lips from '../artworkImages/lips.png';
import diagonalley from '../artworkImages/diagonalley.png';
import ross from '../artworkImages/ross.png';
import selena from '../artworkImages/selena.png';
import ink2 from '../artworkImages/ink2.png';
import ink16 from '../artworkImages/ink16.png';
import ink20 from '../artworkImages/ink20.png';
import me_outline from '../artworkImages/me_outline.png';
import ink21 from '../artworkImages/ink21.png';
import ink24 from '../artworkImages/ink24.jpg';
import ink31 from '../artworkImages/ink31.png';
import donut from '../artworkImages/donut.png';
import mountainscape from '../artworkImages/mountainscape.png'
import sound5 from '../artworkImages/sound5.png';
import hall from '../artworkImages/hall.png';
import guitar from '../artworkImages/guitar.png';
import eyes from '../artworkImages/eyes.png';


/// Projects
import moodVault from '../projectImages/moodVault.png';
import oneApp from '../projectImages/hackru.png';
import cupmixup from '../projectImages/cupmixup.png';
import melodyai from '../projectImages/melodyai.png';
import oneWeOne from '../projectImages/oneWeOne.png';
import shortestpath from '../projectImages/shortestpath.png';
import stateestimation from '../projectImages/stateestimation.png';
import uply from '../projectImages/uply.png';
import webfolio from '../projectImages/webfolio.png';

/// Blogs
import compsci from '../blogImages/compsci.jpg'


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
        icon: <SiPandas />,
        name: 'Pandas',
    },
    {
        id: 2,
        icon: <SiNumpy />,
        name: 'Numpy',
    },
    {
        id: 3,
        icon: <SiTensorflow />,
        name: 'TensorFlow',
    },
    {
        id: 4,
        icon: <SiKeras />,
        name: 'Keras',
    },
    {
        id: 5,
        icon: <FaAws />,
        name: 'Amazon Web Services',
    },
    {
        id: 6,
        icon: <SiGooglecloud />,
        name: 'Google Cloud Platform',
    },
    {
        id: 7,
        icon: <SiReact />,
        name: 'React',
    },
    {
        id: 8,
        icon: <FaAngular />,
        name: 'Angular',
    },
    {
        id: 9,
        icon: <SiFlutter />,
        name: 'Flutter',
    },

    {
        id: 10,
        icon: <SiUnity />,
        name: 'Unity',
    },
    {
        id: 11,
        icon: <SiUnrealengine />,
        name: 'Unreal Engine',
    },
    {
        id: 12,
        icon: <SiBlender />,
        name: 'Blender',
    },
    {
        id: 13,
        icon: <SiAdobephotoshop />,
        name: 'Photoshop',
    },
    {
        id: 14,
        icon: <SiGit />,
        name: 'Git',
    },
    {
        id: 15,
        icon: <SiOpencv />,
        name: 'OpenCV',
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



/// PROJECT CARDS
export const projectCards = [
    {
        id: 1,
        slug: 'webfolio',
        title: 'WebFolio',
        image: webfolio,
        description: 'This website-portfolio made for personal branding',
        stack: [<SiReact />, <SiCss3 />, <SiHtml5 />, <SiJavascript />],
        tag: 'Website',
        ongoing: false,
    },
    {
        id: 2,
        slug: 'one-app',
        title: 'OneApp',
        image: oneApp,
        description: 'A cross-platform mobile application for hackers, organizers, mentors, and sponsors at the HackRU.',
        stack: [<SiFlutter />, <FaAws />, <SiAndroid />, <SiIos />],
        tag: 'Mobile App',
        ongoing: false,
    },
    {
        id: 3,
        slug: 'cup-mix-up',
        title: 'Cup Mix Up',
        image: cupmixup,
        description: 'A digital version of the classic cup shuffle game',
        stack: [<SiUnity />, <SiCsharp />, <SiBlender />],
        tag: 'Video Game',
        ongoing: true,
    },
    {
        id: 4,
        slug: 'mood-vault',
        title: 'Mood Vault',
        image: moodVault,
        description: 'Mood Vault is a powerful Google Chrome extension that provides an intuitive way to create and manage mood boards effortlessly',
        stack: [<SiJavascript />, <SiCss3 />, <SiHtml5 />, <SiGooglechrome />],
        tag: 'Chrome Extension',
        ongoing: false
    },
    {
        id: 5,
        slug: 'melody-ai',
        title: 'MelodyAI',
        image: melodyai,
        description: 'An LSTM-based neural network using Tensorflow for AI-driven music composition, capable of generating complex melodies with human-like structure',
        stack: [<SiPython />, <SiTensorflow />, <SiMidi />, <SiAudacity />],
        tag: 'Deep Learning',
        ongoing: false
    },
    {
        id: 6,
        slug: 'state-estimation',
        title: 'State Estimation',
        image: stateestimation,
        description: 'An AI-powered state estimation algorithm in Python that predicts an agent\'s location based on recorded transitions and observations.',
        stack: [<SiPython />, <SiNumpy />],
        tag: 'Artificial Intelligence',
        ongoing: false
    },
    {
        id: 7,
        slug: 'shortest-path',
        title: 'Shortest Path',
        image: shortestpath,
        description: 'A python program which either creates a random grid or takes a grid input and finds the shortest path using both the A* and Theta* algorithms.',
        stack: [<SiPython />, <SiNumpy />],
        tag: 'Artificial Intelligence',
        ongoing: false
    },
    {
        id: 8,
        slug: 'one-we-one',
        title: 'One We One',
        image: oneWeOne,
        description: 'One We One is an ongoing game project designed to include multiple two-player games, allowing friends to settle debates in a fun and competitive way.',
        stack: [<SiJavascript />, <SiCss3 />, <SiHtml5 />, <SiGooglechrome />],
        tag: 'Video Game',
        ongoing: true
    },
    {
        id: 9,
        slug: 'uply',
        title: 'UPLY',
        image: uply,
        description: 'A fresh approach to job hunting and learning about opportunities and sponsors at Hackathons.',
        stack: [<SiFlutter />, <SiGooglecloud />, <SiAndroid />, <SiIos />],
        tag: 'Mobile App',
        ongoing: false
    },
]

export const artworkCards = [
    {
        id: 1,
        image: legacy,
        title: 'Hogwarts Legacy',
        medium: 'Digital - Photoshop',
        description: 'A digital artwork inspired by the magical world of Hogwarts Legacy.',
    },
    {
        id: 16,
        image: hall,
        title: 'Hall',
        medium: 'Digital - Blender3d',
        description: 'A moody digital 3d Model of an empty hall, playing with light and shadows.',
    },
    {
        id: 6,
        image: ink2,
        title: 'Discover',
        medium: 'Black Marker',
        description: 'A bold black marker illustration created for Inktober challenge, Day 2.',
    },
    {
        id: 4,
        image: ross,
        title: 'Ross Lynch',
        medium: 'Poster Color',
        description: 'A study in shadows with poster color painting of Ross Lynch',
    },
    {
        id: 18,
        image: eyes,
        title: 'Eyes',
        medium: 'Pencil',
        description: 'A pencil sketch focusing on the depth and emotion captured in human eyes.',
    },
    {
        id: 8,
        image: ink20,
        title: 'Uncharted',
        medium: 'Black Marker',
        description: 'A bold black marker illustration created for Inktober challenge, Day 20.',
    },
    {
        id: 2,
        image: lips,
        title: 'Lips',
        medium: 'Watercolor on paper',
        description: 'A delicate watercolor painting focusing on the soft details of lips.',
    },
    {
        id: 13,
        image: donut,
        title: 'Donut',
        medium: 'Digital - Blender3d',
        description: 'A colorful digital 3d model of a delicious, glazed donut.',
    },
    {
        id: 10,
        image: ink24,
        title: 'Expedition',
        medium: 'Black Marker',
        description: 'A bold black marker illustration created for Inktober challenge, Day 24.',
    },
    {
        id: 11,
        image: me_outline,
        title: 'Myself',
        medium: 'Digital - Autodesk mobile',
        description: 'An outline of myself made on my phone',
    },
    {
        id: 5,
        image: selena,
        title: 'Selena Gomez',
        medium: 'Pencil',
        description: 'A realistic pencil portrait of Selena Gomez, showcasing detailed shading and textures.',
    },
    {
        id: 3,
        image: diagonalley,
        title: 'Diagon Alley',
        medium: 'Digital - Photoshop',
        description: 'A digital illustration capturing me walking through enchanting atmosphere of Diagon Alley.',
    },
    {
        id: 7,
        image: ink16,
        title: 'Grunge',
        medium: 'Black Marker',
        description: 'A bold black marker illustration created for Inktober challenge, Day 16.',
    },
    {
        id: 9,
        image: ink21,
        title: 'Rhinoceros',
        medium: 'Black Marker',
        description: 'A bold black marker illustration created for Inktober challenge, Day 21.',
    },
    {
        id: 14,
        image: mountainscape,
        title: 'Mountain Scape',
        medium: 'Digital - Photoshop',
        description: 'A breathtaking digital landscape painting of towering mountains and foggy skies.',
    },
    {
        id: 12,
        image: ink31,
        title: 'Landmark',
        medium: 'Black Marker',
        description: 'A bold black marker illustration created for Inktober challenge, Day 31.',
    },
    {
        id: 15,
        image: sound5,
        title: 'Sound 4 ft. Sasuke',
        medium: 'Watercolor',
        description: 'A watercolor piece inspired by Sound 4 and Sasuke.',
    },
    {
        id: 17,
        image: guitar,
        title: 'Guitar',
        medium: 'Acrylic on Canvas',
        description: 'A vibrant acrylic painting on canvas featuring a guitar.',
    }
];

export const blogCards = [
    {
        id: 1,
        title: 'Why I Chose to Pursue Computer Science',
        slug: 'why-i-chose-to-pursue-comp-sci',
        image: compsci,
        description: 'Have you ever wondered how your favorite app or game was made? For me, that curiosity turned into a passion for computer science.',
        tags: ['Non-Fiction'],
        time: '3 min',
    },
]