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

export const projectDetails = [
    {
        id: 1,
        slug: 'cup-mix-up',
        title: 'Cup Mix Up',
        image: oneApp,
        description: 'this is the caption',
        timeline: '2 months',
        stack: ['Unity' , 'C#'],
        skills: ['Web', 'Mobile'],
        background: 'This is the background for this project',
        dnd: 'This is the design and developemment for this project',
        challenges: 'This is the challeges for this project',
        results: 'This is the result for this project',
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