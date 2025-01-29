particlesJS("particles-js", {
    particles: {
      number: {
        value: 110, // Change this number for the amount of particles
        density: {
          enable: true,
          value_area: 1000, // Adjust the area density
        },
      },
      color: {
        value: "#B81D24", // Red particles
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ff0000", // Red connections
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  