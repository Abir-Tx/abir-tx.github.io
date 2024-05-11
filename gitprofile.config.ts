// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'abir-tx', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 16, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [],
      },
    },
    external: {
      header: 'My External Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
          {
              title: 'AIUB Web API',
              description: 'Unofficial API for American International University of Bangladesh (AIUB)',
              imageUrl: 'https://aiub-discobot.vercel.app/images/aiub-logo.png',
              link: 'https://aiub-api.vercel.app/',
          },
        {
          title: 'MPM',
          description:
            'Mass People Management desktop software written in C#. It is a simple app to connect to a database and manage people/data.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'AIUB Discobot',
          description:
            'The most complete & only bot for American International University of Bangladesh (AIUB). Get auto notice updates & fetch AIUB information',
          imageUrl:
            'https://cdn.discordapp.com/avatars/970102591155499038/2433de12c3497e39f637e708e0af938d.png?size=256',
          link: 'https://aiub-discobot.vercel.app/',
        },
        {
          title: 'Sopno IT Solutions Website',
          description:
            'The official landing page for the IT center named Sopno IT Solutions',
          imageUrl:
            'https://sopnoitsolutions-web.vercel.app/images/sits-logo.png',
          link: 'https://sopnoitsolutions-web.vercel.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Git Portfolio of Mushfiqur Rahman Abir',
    description:
      'A dynamic and lightweight portfolio for Mushfiqur Rahman Abir using Github projects and stats. Mushfiqur Rahman Abir AKA Abir-Tx is a Software Engineer, Photographer, and Content Creator.',
    imageURL:
      'https://i1.rgstatic.net/ii/profile.image/11431281085824721-1663906924347_Q512/Mushfiqur-Abir.jpg',
  },
  social: {
    linkedin: 'mushfiqur-rahman-abir',
    twitter: 'abir_tx',
    facebook: 'mushfiqurrohoman.abir',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'abirtx',
    stackoverflow: '13353813/mushfiqur-rahman-abir', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://abir-tx.github.io',
    phone: '',
    email: 'abirtx@yandex.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'PHP',
    'Python',
    'Linux',
    'C#',
    'QT-5',
    'OpenGL',
    'Bash',
    // 'Laravel',
    'JavaScript',
    // 'React.js',
    // 'Node.js',
    // 'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    // 'PHPUnit',
    'CSS',
    // 'Antd',
    // 'Tailwind',
    'Bootstrap',
    'Java',
    'Photography',
  ],
  experiences: [
    {
      company: 'AIUB Photography Club',
      position: 'Photographer',
      from: 'February 2022',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Mushifuqur Rahman Abir Imagery',
      position: 'Owner & Photographer',
      from: 'December 2019',
      to: 'Present',
    },
    {
      company: 'Sopno IT Solutions',
      position: 'Web Developer',
      from: 'December 2021',
      to: 'Present',
    },
  ],
  /*   certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ], */
  education: [
    {
      institution: 'American International University-Bangladesh',
      degree: 'Bachelor of Science',
      from: '2019',
      to: '',
    },
    {
      institution: 'Birshreshtha Munshi Abdur Rouf Public College',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'Rajapur High School',
      degree: 'Secondary School Certificate (SSC)',
      from: '2011',
      to: '2017',
    },
  ],

  publications: [
    {
      title:
        'Extended reality in education and training: Enhancing trustworthiness',
      conferenceName: '',
      journalName: 'International Journal of Science and Research Archive',
      authors: 'Mushfiqur Rahman Abir, Asif Zaman and Sawon Mursalin',
      link: 'https://ijsra.net/content/extended-reality-education-and-training-enhancing-trustworthiness',
      description:
        'Extended reality (XR) technology, including virtual reality (VR), augmented reality (AR), and mixed reality (MR), has the potential to revolutionize education by providing immersive and interactive learning experiences. However, to ensure successful implementation and adoption of XR in education, it is crucial to establish trust among all stakeholders. This paper presents a comprehensive framework for enhancing trust in XR technology in education and Training.',
    },
    {
        title: 'Synchronizing Object Detection: Applications, Advancements and Existing Challenges',
        conferenceName: '',
        journalName: 'IEEE Access',
        authors: 'Mushfiqur Rahman Abir,MD Tanzib Hossain, Asif Zaman, Sawon Mursalin, Shanjida Akter and Shadman sakeeb Khan',
        link: 'https://ieeexplore.ieee.org/document/10499817'
        description: 'From pivotal roles in autonomous vehicles, healthcare diagnostics, and surveillance systems to seamlessly integrating with augmented reality, object detection algorithms stand as the cornerstone in unraveling the complexities of the visual world. Tracing the trajectory from conventional region-based methods to the latest neural network architectures reveals a technological renaissance where algorithms metamorphose into digital artisans. However, this journey is not without hurdles, prompting researchers to grapple with real-time detection, robustness in varied environments, and interpretability amidst the intricacies of deep learning. The allure of addressing issues such as occlusions, scale variations, and fine-grained categorization propels exploration into uncharted territories, beckoning the scholarly community to contribute to an ongoing saga of innovation and discovery. This research offers a comprehensive panorama, encapsulating the applications reshaping our digital reality, the advancements pushing the boundaries of perception, and the open issues extending an invitation to the next generation of visionaries to explore uncharted frontiers within object detection.'
    }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'abirtx',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-XTJQL7VC6J', // Please remove this and use your own tag id or keep it empty
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    // id: '2617601', //  Please remove this and use your own id or keep it empty
    // snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
