import type {
  NavItem,
  SkillCategory,
  Experience,
  Project,
  Education,
  Certification,
  SocialLink,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

export const PERSONAL_INFO = {
  name: "Sumit Singh",
  roles: ["Software Engineer", "Full Stack Developer", "Cloud Enthusiast"],
  tagline:
    "6+ years building scalable web applications, cloud solutions, and intelligent systems for enterprises and startups alike",
  email: "contact@sumitsingh.dev",
  location: "Dallas, TX",
  resumeUrl: "/resume/Sumit_Singh_Resume.pdf",
};

export const ABOUT_TEXT = [
  "I am a Software Engineer at MinMax Technologies in Dallas, TX, with over 6 years of experience in the IT industry. My expertise spans full-stack development, data engineering, cloud computing, ETL processes, and machine learning.",
  "Having worked at both large tech companies like TCS and innovative startups, I bring a versatile perspective to every project. I hold a Master's degree in Computer Science from Indiana State University with a 3.9 GPA.",
  "I'm passionate about building high-performance applications that solve real-world problems, leveraging modern technologies across the full stack — from React and .NET frontends to cloud-native backends on Azure and AWS.",
];

export const STATS = [
  { label: "Years Experience", value: 6, suffix: "+" },
  { label: "Companies", value: 3, suffix: "" },
  { label: "Projects", value: 5, suffix: "+" },
  { label: "GPA (Masters)", value: 3.9, suffix: "", decimals: 1 },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 85 },
      { name: "Java", level: 90 },
      { name: "C#", level: 88 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Web Technologies",
    icon: "web",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Node.js", level: 88 },
      { name: "Angular", level: 82 },
      { name: "ASP.NET", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Django", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "SQL Server", level: 85 },
      { name: "Oracle PL/SQL", level: 82 },
      { name: "Redis", level: 78 },
      { name: "Neo4J", level: 70 },
    ],
  },
  {
    title: "Cloud Services",
    icon: "cloud",
    skills: [
      { name: "Azure", level: 88 },
      { name: "AWS", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Jenkins", level: 78 },
    ],
  },
  {
    title: "Data & ML",
    icon: "data",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Power BI", level: 85 },
      { name: "Pandas", level: 82 },
      { name: "Tableau", level: 78 },
      { name: "NumPy", level: 80 },
      { name: "Deep Learning", level: 75 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "tools",
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 85 },
      { name: "JIRA", level: 88 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Bitbucket", level: 82 },
      { name: "Kubernetes", level: 80 },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "minmax-swe",
    role: "Software Engineer",
    company: "MinMax Technologies",
    location: "Dallas, TX",
    period: "Dec 2023 — Present",
    type: "work",
    description: [
      "Optimized eSmart application architecture using C#/.NET/React/JavaScript, achieving a 20% increase in scalability",
      "Configured Azure/Kubernetes CI/CD pipelines, reducing deployment time from 2 hours to 30 minutes (75% automation)",
      "Reduced query execution time by 25% and developed Power BI dashboards for data-driven decisions",
      "Manages utility asset data processing up to 1 million records",
    ],
    technologies: ["C#", ".NET", "React", "Azure", "Kubernetes", "Power BI"],
  },
  {
    id: "isu-ga",
    role: "Graduate Assistant",
    company: "Indiana State University",
    location: "Terre Haute, IN",
    period: "Aug 2022 — Dec 2023",
    type: "part-time",
    description: [
      "Built WordPress, SharePoint, and Drupal websites for university departments",
      "Designed Power Automate workflows and Power BI/Python reporting dashboards",
      "Managed Banner student records system with strict FERPA compliance",
    ],
    technologies: [
      "WordPress",
      "SharePoint",
      "Power BI",
      "Python",
      "Power Automate",
    ],
  },
  {
    id: "minmax-intern",
    role: "Data Engineer Intern",
    company: "MinMax Technologies",
    location: "Dallas, TX",
    period: "May 2023 — Aug 2023",
    type: "work",
    description: [
      "Developed full-stack applications using Angular, JavaScript, C#, and .NET",
      "Designed RESTful APIs using ASP.NET Web API for seamless data communication",
      "Achieved 30% query performance improvement through MS SQL Server optimization",
    ],
    technologies: ["Angular", "C#", ".NET", "ASP.NET", "MS SQL Server", "Azure"],
  },
  {
    id: "isu-ra",
    role: "Research Assistant",
    company: "Indiana State University",
    location: "Terre Haute, IN",
    period: "Mar 2022 — Aug 2022",
    type: "part-time",
    description: [
      "Co-authored contrast pavement markings research published by Illinois Center for Transportation",
      "Developed benefit-cost analysis tool using R and Excel DAX",
      "Applied statistical modeling and data-driven solutions for transportation safety",
    ],
    technologies: ["R", "Excel DAX", "Statistical Modeling", "Data Analysis"],
  },
  {
    id: "tcs",
    role: "Systems Developer",
    company: "Tata Consultancy Services",
    location: "India",
    period: "Feb 2019 — Feb 2022",
    type: "work",
    description: [
      "Built risk analysis and underwriting features using Angular, J2EE, and Spring Boot, decreasing processing time by 15%",
      "Developed RESTful services with Node.js/Docker, achieving 40% resource reduction and 2x concurrent request capacity",
      "Authored 70+ Oracle PL/SQL scripts, enhancing data analytics by 30%",
      "Delivered full-stack solutions across three insurance companies with Selenium testing",
    ],
    technologies: [
      "Angular",
      "J2EE",
      "Spring Boot",
      "Node.js",
      "Docker",
      "Oracle PL/SQL",
    ],
  },
  {
    id: "openweb",
    role: "Web Developer",
    company: "Openweb Solutions",
    location: "India",
    period: "Apr 2018 — Jan 2019",
    type: "work",
    description: [
      "Built full-stack applications using React.js, Django, Python, PostgreSQL, and Redis caching",
      "Achieved 50% site speed improvement and 20% increase in user engagement",
      "Implemented role-based access control and database optimization strategies",
    ],
    technologies: ["React.js", "Django", "Python", "PostgreSQL", "Redis"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "walmart-rto",
    title: "RTO Hackathon — Walmart Global Tech",
    description:
      "Missing pet finder solution built during Walmart's hackathon. Features exploratory data analysis, ML model training with regression, and interactive Streamlit deployment.",
    technologies: ["Python", "Machine Learning", "Streamlit", "Data Analytics"],
    githubUrl: "https://github.com/sumitsingh34/Walmart-RTO-Hackathon",
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Clone — MERN Stack",
    description:
      "Full-featured property listing and booking system with user authentication, search functionality, and responsive design built with the MERN stack.",
    technologies: ["React", "MongoDB", "Node.js", "Express.js"],
    githubUrl: "https://github.com/sumitsingh34/Airbnb-Clone",
  },
  {
    id: "crypto-tracker",
    title: "Crypto Tracker Dashboard",
    description:
      "Interactive cryptocurrency tracking dashboard with real-time API data, search functionality, and dynamic price visualization using React Hooks.",
    technologies: ["React", "APIs", "CSS", "React Hooks"],
    githubUrl: "https://github.com/sumitsingh34/react-api-crypto-tracker",
    liveUrl: "https://sumitsingh34.github.io/react-api-crypto-tracker/",
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone — Web Application",
    description:
      "Social media application with user authentication, post creation, profile management, and real-time feed built with Django and PostgreSQL.",
    technologies: ["Django", "PostgreSQL", "Bootstrap", "HTML"],
    githubUrl: "https://github.com/sumitsingh34/django-blog-app",
  },
  {
    id: "doc-similarity",
    title: "Data Mining — Document Similarity",
    description:
      "Deep learning-based pattern identification across 10 topics using PyTorch. Focuses on text classification accuracy through neural network architectures.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Text Analysis"],
    githubUrl: "https://github.com/sumitsingh34/school-projects",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Indiana State University",
    location: "Terre Haute, United States",
    year: "2023",
    gpa: "3.9 / 4.0",
    coursework: [
      "Machine Learning",
      "Data Mining",
      "Artificial Intelligence",
      "Big Data",
      "Neural Networks",
      "Statistics for Data Science",
    ],
  },
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "West Bengal University of Technology",
    location: "Kolkata, India",
    year: "2018",
    gpa: "3.71 / 4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management",
      "Cloud Computing",
      "Cryptography & Security",
      "Software Design",
      "Operating Systems",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Research Paper Publication",
    issuer: "Illinois Center for Transportation",
    description: "Co-authored contrast pavement markings research paper",
  },
  {
    title: "Big Data Level 2",
    issuer: "Credly",
    description:
      "Hadoop, Spark, RDDs, DataFrames, MLlib, Spark SQL, Spark Streaming, GraphX",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Certification Body",
    description: "AI, Neural Networks, Deep Learning, ML, Computer Vision",
  },
  {
    title: "AWS Fundamentals",
    issuer: "Udemy",
    description: "Hands-on AWS features and cloud services",
  },
  {
    title: "Web Development Fundamentals",
    issuer: "Udemy",
    description: "Full-stack web development, deployment, front & back end",
  },
  {
    title: "PostgreSQL Bootcamp",
    issuer: "Training Program",
    description: "Complex queries and large dataset implementation",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/sumitsingh34",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sumitsinghusa/",
    icon: "linkedin",
  },
  {
    label: "Email",
    url: "mailto:contact@sumitsingh.dev",
    icon: "email",
  },
];
