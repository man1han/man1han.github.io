
import moodVault from '../projectImages/moodVault.png';
import oneApp from '../projectImages/hackru.png';
import cupmixup from '../projectImages/cupmixup.png';
import melodyai from '../projectImages/melodyai.png';
import oneWeOne from '../projectImages/oneWeOne.png';
import shortestpath from '../projectImages/shortestpath.png';
import stateestimation from '../projectImages/stateestimation.png';
import uply from '../projectImages/uply.png';
import webfolio from '../projectImages/webfolio.png';
import classical from '../projectImages/classicalDL.mp3'
import heatmap from '../projectImages/heatmap1.gif'

export const projectDetails = [
    {
        id: 1,
        slug: 'webfolio',
        title: 'WebFolio',
        image: webfolio,
        description: 'This website-portfolio made for personal branding',
        timeline: '2 months',
        stack: ['ReactJS', 'CSS', 'HTML', 'JavaScript'],
        skills: ['Web Development', 'Responsive Development', 'UI/UX Design'],
        background: 'WebFolio was created as a personal branding project to showcase my skills, projects, and achievements. The goal was to design a visually appealing yet functional website that serves as a digital resume and portfolio. The project involved designing a responsive layout, implementing smooth animations, and optimizing performance for seamless navigation. Through this project, I aimed to enhance my front-end development skills and gain experience in deploying and maintaining a professional website.',
        dnd: [
            { "type": "text", "data": "The WebFolio project began with wireframing and designing a clean UI. I focused on making the site easy to navigate while maintaining a modern and minimalistic aesthetic. The design process included experimenting with different layouts, typography, and color schemes to ensure a visually appealing experience." },
            { "type": "heading", "data": "Development" },
            { "type": "text", "data": "During development, I leveraged ReactJS to build reusable components and CSS for styling. I used JavaScript to handle interactive elements like animations and transitions. Additionally, I implemented accessibility best practices to ensure the site is usable by a wider audience." }
        ],
        challenges: [
            { "type": "text", "data": "One of the major challenges in building WebFolio was ensuring cross-browser compatibility. Different browsers render elements differently, and it took several iterations to fine-tune styles and fix inconsistencies. Additionally, optimizing performance was crucial to ensure fast loading times without compromising the quality of animations." },
            { "type": "heading", "data": "Responsiveness" },
            { "type": "text", "data": "Making the website fully responsive across various devices required extensive testing and tweaking. Ensuring that all elements aligned properly on different screen sizes took careful planning and adjustments." }
        ],
        results: [
            { "type": "text", "data": "The final version of WebFolio successfully serves as a professional portfolio, attracting potential employers and clients. The smooth user experience, clean design, and well-structured content contribute to a strong online presence." },
            { "type": "heading", "data": "Key Takeaways" },
            { "type": "text", "data": "Through this project, I improved my front-end development skills, learned about optimizing website performance, and gained hands-on experience with deploying and maintaining a personal website. WebFolio continues to evolve as I add new projects and refine its features." }
        ],
        github: 'https://github.com/man1han/man1han.github.io',
        demo: 'https://manthanbhatt.com',
    },
    {
        id: 2,
        slug: 'one-app',
        title: 'OneApp',
        image: oneApp,
        description: 'A cross-platform mobile application for hackers, organizers, mentors, and sponsors at the HackRU.',
        timeline: '3 years',
        stack: ['Flutter', 'AWS', 'Android', 'iOS'],
        skills: ['Mobile Development', 'Cross-Platform Apps'],
        background: 'OneApp was designed to streamline hackathon experiences by providing a single platform for hackers, organizers, mentors, and sponsors. As the team lead for OneApp, I played a crucial role in reviving the app post-COVID. Due to a major null safety update in Flutter, much of the existing code had to be rewritten from scratch to ensure compatibility. This provided an opportunity to enhance the app\'s architecture and improve overall performance.',
        dnd: [
            { "type": "text", "data": "The initial phase focused on understanding user needs and defining core functionalities. We gathered feedback from previous hackathon attendees to design an intuitive and efficient user interface." },
            { "type": "text", "data": "A key feature added during redevelopment was the QR scanning functionality, which significantly improved the check-in process on the day of the event. Attendees could scan their unique QR codes for instant registration, reducing manual errors and wait times." },
            { "type": "heading", "data": "Development" },
            { "type": "text", "data": "Using Flutter for cross-platform compatibility, we developed a seamless mobile experience that works across iOS and Android devices. AWS services were utilized for database management and real-time event updates." }
        ],
        challenges: [
            { "type": "text", "data": "One of the main challenges was ensuring smooth real-time updates during the event. This required efficient database management and optimizing API calls to prevent delays." },
            { "type": "heading", "data": "Null Safety" },
            { "type": "text", "data": "Rewriting the app to comply with Flutter\'s null safety updates was a major challenge. Ensuring backward compatibility while leveraging new features required careful planning and incremental testing." },
            { "type": "heading", "data": "Data Consistency" },
            { "type": "text", "data": "Handling registration states properly involved updating Python logic and SQL queries. By aligning the Flutter app with the corrected workflow, system reliability was improved by 95%." }
        ],
        results: [
            { "type": "text", "data": "OneApp was successfully deployed and used in multiple hackathons, enhancing event organization and attendee experience. It received positive feedback for its intuitive design and real-time features." },
        ],
        github: 'https://github.com/HackRU/OneAppFlutter',
        demo: 'https://oneapp.hackru.org/',
    },
    {
        id: 3,
        slug: 'cup-mix-up',
        title: 'Cup Mix Up',
        image: cupmixup,
        description: 'A digital version of the classic cup shuffle game.',
        timeline: '3 months',
        stack: ['Unity', 'C#', 'Blender'],
        skills: ['Game Development', '3D Modeling'],
        background: 'Cup Mix Up is 3D game I made as a personal project to learn the complete game development process from ideation, to 3D modelling, to programming, to deployment.',
        dnd: [
            { "type": "text", "data": " The game starts with a ball hidden under one of the cups, and after shuffling, the player must guess which cup contains the ball. As the game progresses, more cups are added, and the shuffle speed increases, making it more challenging. The game includes a high-score tracker, rewarding players for consecutive correct guesses." },
            { "type": "heading", "data": "Development Process" },
            { "type": "text", "data": "The cups were designed in Blender and then imported into Unity3D, where I programmed the game mechanics. The shuffle animation was one of the key focus areas to ensure a smooth and realistic experience." }
        ],
        challenges: [
            { "type": "text", "data": "One of the biggest challenges was animating the cup shuffle. Initially, the cups would phase through each other, creating an unrealistic effect." },
            { "type": "heading", "data": "Solving the Shuffle Animation" },
            { "type": "text", "data": "To resolve this, I calculated a curved path equation using cubic Bézier curves, allowing the cups to follow a circular shuffle pattern. This created a more natural-looking animation, greatly improving the gameplay experience." }
        ],
        results: [
            { "type": "text", "data": "The improved shuffle animation and progressive difficulty made the game more engaging and visually appealing. The game mechanics now feel intuitive, and players find the increasing challenge exciting." },
            { "type": "heading", "data": "Future Plans" },
            { "type": "text", "data": " The game is currently deployed on web browsers via GitHub, but I plan to enhance the game\'s graphics, refine user interactions, and expand deployment to additional platforms such as mobile and desktop for a wider audience." }
        ],
        github: 'https://github.com/man1han/cmu',
        demo: 'https://manthanbhatt.com/cmu/',
    },
    {
        id: 4,
        slug: 'mood-vault',
        title: 'Mood Vault',
        image: moodVault,
        description: 'A Chrome extension for creating and managing mood boards.',
        timeline: '1 month',
        stack: ['JavaScript', 'CSS', 'HTML', 'Google Chrome'],
        skills: ['Chrome Extensions', 'Web Development'],
        background: 'MoodVault is a Google Chrome extension I developed to simplify the process of creating mood boards for artists and designers. Traditional methods of organizing inspiration for projects often involve a lot of manual effort, so I wanted to create something more efficient.',
        dnd: [
            { "type": "text", "data": "I focused on making the extension user-friendly and efficient for creative professionals. I built the screenshot capture functionality to allow users to quickly add images they find online to their mood boards." },
            { "type": "text", "data": "Additionally, I enabled the option to download the entire mood board as a single image, making it easy to share with others. I made sure that the extension worked smoothly on the Google Chrome browser and that the user experience was streamlined for creative work." },
            { "type": "heading", "data": "Color Palettes" },
            { "type": "text", "data": "Another key feature I implemented was the automatic generation of color palettes based on the images in the vault, which helps users visualize their ideas more clearly." }
        ],
        challenges: [
            { "type": "heading", "data": "Screenshots" },
            { "type": "text", "data": "One of the biggest challenges I faced was integrating the screenshot capture functionality with Chrome's API while maintaining good browser performance." },
            { "type": "heading", "data": "UI vs Color" },
            { "type": "text", "data": "Designing an intuitive yet colorful interface was also tricky; I had to ensure that users could organize their mood boards efficiently without extra steps. Balancing the color palette generation with the aesthetic quality of the images was another hurdle." }
        ],
        results: [
            { "type": "text", "data": "After developing MoodVault, I was able to streamline the mood board creation process for artists and designers. The extension drastically reduced the time users would typically spend organizing their images manually. I received positive feedback from the first users, who appreciated how simple and effective the tool was." },
            { "type": "heading", "data": "Future Plans" },
            { "type": "text", "data": "In the future, I plan to refine the UI for a more polished look and optimize the extension for better SEO, so it can reach a wider audience. I also want to add more features based on user feedback to make MoodVault even more valuable to creative professionals." }
        ],
        github: 'https://github.com/man1han/moodvault',
        demo: 'https://chromewebstore.google.com/detail/mood-vault/fdnlmnoceadijklmomfedckgjdclacgow',
    },
    {
        id: 5,
        slug: 'melody-ai',
        title: 'MelodyAI',
        image: melodyai,
        description: 'An AI-driven music composition tool using LSTMs.',
        timeline: '2 months',
        stack: ['Python', 'TensorFlow', 'MIDI', 'Audacity'],
        skills: ['Machine Learning', 'Music AI'],
        background: 'MelodyAI focuses on addressing the distinctive structural differences in melodic content across genres like jazz, classical, and pop. By expanding the training architecture of LSTM networks, this project aimed to introduce stylistic features for generating music in different styles based on labeled datasets. The goal was to demonstrate that deep learning models can generate diverse styles of music by capturing genre-specific patterns.',
        dnd: [
            { "type": "text", "data": "The research explored how deep learning models, specifically LSTM networks, can generate music that reflects the stylistic differences found in various genres. By converting MIDI files into symbolic notation and training an LSTM network, I was able to model musical patterns. The generated output was then converted back into MIDI format for playback." },
            { "type": "heading", "data": "Design and Development Process" },
            { "type": "text", "data": "I used Python to convert MIDI files into symbolic representations, which were then used to train the LSTM network. The Music21 library played a crucial role in converting between MIDI and symbolic notation. After training the model on a variety of musical data, I used the trained network to generate new music in symbolic notation and converted it back into MIDI for further use." }
        ],
        challenges: [
            { "type": "text", "data": "One of the primary challenges was ensuring the generated music sounded meaningful in terms of style, genre, and mood. LSTM networks require large amounts of data and training time to learn these complex patterns, which was limited by computational resources." },
            { "type": "heading", "data": "Computational Limitations and Model Training" },
            { "type": "text", "data": "Due to limited computational resources, I had to restrict the number of training epochs to 25, which still took a significant amount of time (25 minutes per training run). Despite this, the results showed potential in generating meaningful music, but further training could improve the quality." }
        ],
        results: [
            { "type": "text", "data": "The project successfully demonstrated the potential of deep learning models, particularly LSTM networks, in generating music in different genres. The model was able to learn patterns and generate melodies that captured the essence of various musical styles." },
            { "type": "text", "data": "A lot of the input data was classical music in the public domain so here's one of the good outputs in the classical genre generated (despite the computing limitaitons). I call it the Classical Deep:" },
            { "type": "audio", "data": classical },
            { "type": "heading", "data": "Future Plans" },
            { "type": "text", "data": "In the future, I plan to expand the models by training them for more epochs to improve their performance. Additionally, I aim to incorporate other stylistic elements such as mood and tempo to further refine the music generation process." }
        ],

        github: '',
        demo: '',
    },
    {
        id: 6,
        slug: 'state-estimation',
        title: 'State Estimation',
        image: heatmap,
        description: 'AI-powered state estimation for predicting agent movement.',
        timeline: '3 weeks',
        stack: ['Python', 'NumPy'],
        skills: ['AI', 'Data Science'],
        background: 'This repository contains code for a state estimation algorithm that predicts an agent\'s location based on its recorded transitions and observations. The state space is represented by a 100x50 grid, where each cell is assigned a label from [B, H, T, N]. The agent performs 100 random moves within the grid, observing the cell it is currently on after each move.',
        dnd: [
            { "type": "text", "data": "Before running the algorithm, the system generates a 100x50 state space grid with each cell labeled from [B, H, T, N]. The agent is placed randomly on the grid and performs 100 random moves. After each move, the agent records the cell it is standing on. The transition model has a 90% success rate, meaning the agent moves most of the time, with a 10% chance of failure where the agent doesn’t move even though it thinks it has. The observation model has a 90% accuracy rate, but there's a 10% chance it records the wrong cell, with a 5% chance of recording one of two other cells." },
            { "type": "heading", "data": "Design and Development Process" },
            { "type": "text", "data": "I designed the state estimation algorithm to simulate an agent's behavior in a grid world. The agent performs a series of random moves, and after each action, it observes its current state. The challenge was to model both transition and observation failures and account for the uncertainty in the agent's movements and observations. After running the simulation 10 times for each of the 10 maps, I collected data including the agent’s actions, observations, and true locations for analysis." }
        ],
        challenges: [
            { "type": "text", "data": "One of the main challenges was ensuring that the algorithm could handle uncertainty in both the agent's movements and observations. The transition model had to be robust enough to deal with the 10% failure rate, and the observation model needed to accommodate the possibility of errors in recording the agent’s current state." },
            { "type": "heading", "data": "Handling Uncertainty in State Estimation" },
            { "type": "text", "data": "I used probabilistic models to account for the uncertainty in the agent’s actions and observations. This allowed the algorithm to estimate the agent’s location despite the transition and observation failures. The process involved simulating numerous random moves and leveraging the collected data to improve the algorithm's accuracy over multiple runs." }
        ],
        results: [
            { "type": "text", "data": "The state estimation algorithm successfully predicted the agent's location despite the transition and observation uncertainties. The accuracy improved as the algorithm processed more data and adjusted based on the observed errors in movement and state recording." },
        ],
        github: 'https://github.com/man1han/AI-StateEstimation',
        demo: '',
    },
    {
        id: 7,
        slug: 'shortest-path',
        title: 'Shortest Path',
        image: shortestpath,
        description: 'A grid-based shortest path finder using A* and Theta*.',
        timeline: '2 weeks',
        stack: ['Python', 'NumPy'],
        skills: ['Pathfinding Algorithms', 'AI'],
        background: 'This repository contains a main.py file that either creates a random grid or takes a grid input and finds the shortest path using both the A* and Theta* algorithms. These algorithms are efficient in terms of memory usage compared to traditional approaches like Dijkstra’s or Breadth-First Search, but they come with a slight trade-off in terms of potential errors.',
        dnd: [
            { "type": "text", "data": "I implemented both the A* and Theta* algorithms in Python and used Matplotlib to visualize the grid and pathfinding process. The key idea was to optimize the search process by reducing the memory consumption while still finding the correct shortest path. The program dynamically calculates paths and displays the result through a visually appealing and easy-to-understand interface." }
        ],
        challenges: [
            { "type": "text", "data": "One of the biggest challenges I faced was designing a visually appealing and intuitive UI. The complexity of showing the pathfinding process in real-time required careful consideration of how to present the information clearly. I used Matplotlib to create a proper visual representation of the grid and the algorithms’ progress, ensuring users could easily follow the process." },
        ],
        results: [
            { "type": "text", "data": "The program successfully found the shortest path using both A* and Theta* algorithms, with clear visual representation of the grid, nodes, and paths. The memory efficiency of the algorithms was evident, and the visual UI made the entire process easy to understand." },
        ],

        github: 'https://github.com/man1han/AI-ShortestPath',
        demo: '',
    },
    {
        id: 8,
        slug: 'one-we-one',
        title: 'One We One',
        image: oneWeOne,
        description: 'An online two-player competitive game platform.',
        timeline: 'Ongoing',
        stack: ['JavaScript', 'CSS', 'HTML', 'Google Chrome'],
        skills: ['Game Development', 'Multiplayer Games'],
        background: 'OneWeOne is a browser-based game I am developing in JavaScript to settle debates among friends by providing a competitive platform for one-on-one battles. Currently, it features a 2D platform fighter similar to Street Fighter, but the plan is to add more two-player games to expand the experience.',
        dnd: [
            { "type": "text", "data": "The goal of OneWeOne is to create a space where friends can challenge each other in quick, skill-based games. The first game mode is a 2D platform fighter where two players compete in a battle similar to classic fighting games like Street Fighter. The mechanics focus on responsive controls, smooth animations, and fair competitive gameplay." },
            { "type": "heading", "data": "Development Process" },
            { "type": "text", "data": "I built the game using JavaScript, leveraging the HTML5 Canvas API for rendering and handling game logic. The physics system was carefully designed to ensure responsive character movement and combat mechanics. I focused on creating intuitive controls and fluid animations to enhance the player experience. The project is structured to allow for the easy addition of new games in the future." }
        ],
        challenges: [
            { "type": "text", "data": "One of the main challenges was balancing gameplay mechanics to ensure that fights feel fair and engaging. Implementing responsive player inputs while maintaining smooth animations and collision detection required significant fine-tuning." },
            { "type": "heading", "data": "Optimizing Performance and Multiplayer Features" },
            { "type": "text", "data": "Since the game is browser-based, I had to optimize rendering performance to prevent lag, especially during fast-paced fights. Additionally, I am exploring options for implementing real-time online multiplayer so that players can challenge each other remotely." }
        ],
        results: [
            { "type": "text", "data": "The current version of OneWeOne provides a fun and competitive 2D fighting game experience. Players have enjoyed testing their skills against friends, and the foundation is in place for adding more games in the future." },
            { "type": "heading", "data": "Future Plans" },
            { "type": "text", "data": "I plan to expand OneWeOne by adding more two-player games, making it a go-to platform for friendly competitions. Additionally, I am looking into implementing an online multiplayer mode to allow players to challenge friends from anywhere." }
        ],
        github: 'https://github.com/man1han/oneWeOne',
        demo: 'https://manthanbhatt.com/oneWeOne/',
    },
    {
        id: 9,
        slug: 'uply',
        title: 'UPLY',
        image: uply,
        description: 'A job discovery platform for hackathon participants.',
        timeline: '24 hours',
        stack: ['Flutter', 'Google Cloud', 'Android', 'iOS'],
        skills: ['Mobile Development', 'Cloud Computing'],
        background: 'UPLY is an AR-powered job-hunting and networking app that I developed using Flutter and AR-Core. The goal was to provide a fresh approach to learning about job opportunities and sponsors at hackathons by rendering user profiles and job openings in augmented reality.',
        dnd: [
            { "type": "text", "data": "UPLY allows users to explore job postings and company information through an augmented reality interface. By leveraging AR-Core, the app enables interactive networking by displaying job opportunities and user profiles in a more engaging and immersive way. The app was designed to enhance hackathon experiences by making it easier to connect with sponsors and recruiters." },
            { "type": "heading", "data": "Development Process" },
            { "type": "text", "data": "I built UPLY using Flutter for the user interface and AR-Core for the augmented reality features. The iCIMS API was integrated to fetch job listings, applications, and user data, allowing for real-time updates. One of the key focuses was ensuring a seamless experience between the AR interface and traditional UI components." }
        ],
        challenges: [
            { "type": "text", "data": "One of the biggest challenges was integrating AR-Core with Flutter. Since AR-Core primarily supports native Android development, adapting it for Flutter required extensive troubleshooting and custom implementations." },
            { "type": "heading", "data": "Overcoming AR Integration Challenges" },
            { "type": "text", "data": "To successfully render AR elements within Flutter, I had to bridge the gap between AR-Core’s native functionalities and Flutter’s UI framework. This involved optimizing performance to ensure smooth AR interactions while keeping the app lightweight and responsive." }
        ],
        results: [
            { "type": "text", "data": "UPLY won first place in the iCIMS category during the HackHers  2020 hackathon." },
            { "type": "text", "data": "UPLY successfully demonstrated the potential of augmented reality in job hunting and networking. The app provided a novel way to interact with sponsors and job postings at hackathons, making conversations more meaningful and engaging." },
        ],

        github: '',
        demo: '',
    },
];
