// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of all of my projects completed throughout college or in my personal daily life.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Below is a summarized version of my resume which portrays my work experience, skills, education, achievements. My intention is to become more invovled in the tech community and improve my current knowledge.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/al-folio/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/al-folio/blog/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/al-folio/books/the_godfather/";
            },},{id: "news-completed-my-charityhub-website-it-can-be-found-live-here",
          title: 'Completed my CharityHub website, it can be found live HERE',
          description: "",
          section: "News",},{id: "news-github-in-progress",
          title: 'GitHub in Progress',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/al-folio/news/announcement_2/";
            },},{id: "news-graduation-day-is-on-the-countdown-for-marc-and-he-couldn-t-be-more-ecstatic-sparkles-smile",
          title: 'Graduation day is on the countdown for Marc, and he couldn’t be more...',
          description: "",
          section: "News",},{id: "projects-helphub-charity-navigator",
          title: 'HelpHub Charity Navigator',
          description: "This is an HTML website which allows local charities to connect with national chartities around the United States. This helps create a better ecosystem for small charities to get involved and broaden the charity communities.",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/1_project/";
            },},{id: "projects-raspberry-pi-traffic-light-quot-robot-quot",
          title: 'Raspberry Pi Traffic Light &amp;quot;Robot&amp;quot;',
          description: "Raspberry Pi 4 and a combination of other devices with the integration of python code used to build and mimic a European traffic light. Uses python code to take inputs, and send responses based on each scenario.",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/7_project/";
            },},{id: "projects-my-first-website",
          title: 'My First Website',
          description: "This is my first introductory website using HTML and CSS in an introduction web development class. This project integrates simple use of CSS features and HTML properties. This webpage was managed through commits in GitHub and lauched using GitHub pages.",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/8_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/al-folio/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/al-folio/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%6F%62%65%72%74%73%6F%6E%6D%61%72%63@%6D%79%6F%63%75.%6F%61%6B.%65%64%75", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/triniboii868", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/triniboii868", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/marcrobertson", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.twitch.tv/xoonz", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
