// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reading_list/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-an-introduction-to-exponentially-weighted-moving-averages",
        
          title: "An introduction to Exponentially Weighted Moving Averages",
        
        description: "Understanding the difference between normalized and unnormalized EWMA",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/EWA/";
          
        },
      },{id: "post-placeholder",
        
          title: "PLACEHOLDER",
        
        description: "PLACEHOLDER",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/NAG/";
          
        },
      },{id: "post-momentum-based-stochastic-gradient-descent",
        
          title: "Momentum Based Stochastic Gradient Descent",
        
        description: "Understanding how momentum accelerates gradient descent by accumulating velocity from past gradients, using exponentially weighted moving averages to overcome slow convergence in low-gradient regions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Momentum/";
          
        },
      },{id: "post-an-introduction-to-optimizers-for-deep-learning",
        
          title: "An Introduction to Optimizers for Deep learning",
        
        description: "This post introduces a fundamental classification of deep learning optimizers, categorizing them based on whether they modify the gradient direction (Momentum), the parameter-specific learning rate (Adaptive η), or both (Hybrid). It provides the core intuition behind these modifications to the standard SGD update rule, serving as a pedagogical framework and a table of contents for the detailed posts in this series.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Optimizer_prep/";
          
        },
      },{id: "post-a-mathematical-intuition-behind-adam",
        
          title: "A mathematical intuition behind adam",
        
        description: "A mathematical analysis of the Adam (Adaptive Moment Estimation) optimizer. This post details how Adam combines momentum and adaptive learning rates (hybrid approach), focusing on the critical role and derivation of bias correction to prevent stalled updates during the early stages of training.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/adam/";
          
        },
      },{id: "post-a-mathematical-understanding-of-adadelta-optimzer",
        
          title: "A mathematical understanding of AdaDelta Optimzer",
        
        description: "A mathematical deep dive into the AdaDelta optimizer. This post explains how it eliminates the need for a manual global learning rate (η) by using a dimensionally consistent ratio of past RMS steps and current RMS gradients, leading to self-correcting, adaptive updates.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Adadelta/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
