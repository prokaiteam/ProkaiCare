
const problems = [
  {
    icon: "fas fa-book",
    title: "Syllabus Confusion",
    highlight: "ProKai's 10-year analysis",
    description: "Overwhelmed by massive syllabi? ",
    highlightDesc: " identifies exactly what topics are exam-critical."
  },
  {
    icon: "fas fa-times-circle",
    title: "Irrelevant Practice",
    highlight: "unlimited exam-like questions",
    description: "Tired of off-pattern MCQs? Get ",
    highlightDesc: " with instant AI explanations."
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Expensive Courses",
    highlight: "₹250 one-time payment",
    description: "Spending thousands on courses? ",
    highlightDesc: " gives you everything you need."
  },
  {
    icon: "fas fa-hourglass-half",
    title: "Slow Support",
    highlight: "Real-time AI explanations",
    description: "Waiting hours for doubt clearance? ",
    highlightDesc: " in 2 seconds flat."
  },
  {
    icon: "fas fa-signal",
    title: "Internet Issues",
    highlight: "Works on low internet",
    description: "Struggling with connectivity? ",
    highlightDesc: " with offline PDF support."
  },
  {
    icon: "fas fa-cog",
    title: "Complex Setup",
    highlight: "3 clicks, 2 seconds",
    description: "Hours wasted on registration? ",
    highlightDesc: " to start studying."
  },
  
];

const container = document.getElementById("problemsContainer");

problems.forEach(problem => {
  const card = document.createElement("div");
  card.className = "problem-card hover-lift";

  const title = document.createElement("h4");
  title.innerHTML = `<i class="${problem.icon}"></i> ${problem.title}`;

  const paragraph = document.createElement("p");
  paragraph.innerHTML = `${problem.description}<span class="solution-highlight">${problem.highlight}</span>${problem.highlightDesc}`;

  card.appendChild(title);
  card.appendChild(paragraph);
  container.appendChild(card);
});
