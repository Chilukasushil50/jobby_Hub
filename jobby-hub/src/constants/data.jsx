import { google, microsoft, netflix } from "./imgData";

export const jobsData = [
  {
    id: 1,
    jobTitle: "DevOops Engineer",
    companyLogo: netflix,
    rating: 4,
    location: "Delhi",
    workingType: "Full Time",
    package: "10",
    description: "Join our Netflix cloud team to ensure seamless streaming.",
    workType:
      "As a DevOps Engineer, you will be responsible for automating deployments, managing cloud infrastructure, and ensuring system reliability.",
    responsibilities: [
      "Automate and streamline deployment processes.",
      "Monitor system performance and reliability.",
      "Manage cloud services on AWS, Azure, or Google Cloud.",
      "Ensure security compliance and best practices.",
      "Collaborate with software engineers and IT teams to optimize performance.",
      "Troubleshoot and resolve technical issues.",
    ],
    skillsRequired: [
      "Proficiency in CI/CD tools like Jenkins, GitHub Actions, or GitLab CI/CD.",
      "Experience with cloud platforms such as AWS, Google Cloud, or Azure.",
      "Strong scripting skills in Bash, Python, or PowerShell.",
      "Knowledge of containerization using Docker and Kubernetes.",
      "Experience with infrastructure as code (Terraform, Ansible, or CloudFormation).",
      "Understanding of networking, security, and system administration.",
    ],
    benefits: [
      "Competitive salary with performance bonuses.",
      "Work-from-home flexibility.",
      "Health and wellness programs.",
      "Learning and development budget.",
      "Stock options and employee benefits.",
    ],
    applicationProcess: [
      "Submit an online application with your resume.",
      "Initial screening with the recruitment team.",
      "Technical interview with the DevOps engineering team.",
      "Final HR interview and offer discussion.",
    ],
  },

  {
    id: 2,
    companyName: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    jobTitle: "Software Engineer",
    rating: 4.7,
    location: "Bangalore",
    workingType: "Full Time",
    package: 15,
    description:
      "Design, develop, and maintain scalable software solutions for high-performance applications.",
    companyDetails:
      "Google is a global technology company specializing in internet services, AI, and cloud computing.",
    workType:
      "Build backend systems, optimize algorithms, and collaborate with product teams.",
    responsibilities: [
      "Develop and maintain backend APIs and services.",
      "Optimize performance and scalability of systems.",
      "Write clean, maintainable code following industry best practices.",
      "Collaborate with cross-functional teams.",
    ],
    skillsRequired: [
      "Proficiency in Java, Python, or Go.",
      "Experience with cloud services (AWS, Google Cloud).",
      "Strong knowledge of algorithms and data structures.",
      "Experience with databases (SQL, NoSQL).",
    ],
    benefits: ["Health insurance", "Flexible work hours", "Stock options"],
    applicationProcess: [
      "Resume screening",
      "Coding test",
      "Technical interview",
      "HR interview",
    ],
  },
  {
    id: 3,
    companyName: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Facebook_Logo_2023.png",
    jobTitle: "Frontend Developer",
    rating: 4.5,
    location: "New York",
    workingType: "Remote",
    package: 12,
    description:
      "Create modern and responsive web applications with seamless user experiences.",
    companyDetails:
      "Meta (Facebook) is a leader in social networking and digital communication.",
    workType:
      "Work with UI/UX designers and backend teams to implement interactive interfaces.",
    responsibilities: [
      "Develop and optimize frontend applications.",
      "Ensure cross-browser compatibility and mobile responsiveness.",
      "Work with UI/UX designers for improved user experience.",
    ],
    skillsRequired: [
      "Expertise in React, Angular, or Vue.js.",
      "Strong understanding of JavaScript, HTML, CSS.",
      "Experience with state management (Redux, Context API).",
      "Knowledge of performance optimization techniques.",
    ],
    benefits: ["Remote work option", "Annual bonuses", "Health insurance"],
    applicationProcess: [
      "Resume review",
      "Technical interview",
      "Live coding challenge",
    ],
  },
  {
    id: 4,
    companyName: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Systems_logo_and_wordmark.svg",
    jobTitle: "UI/UX Designer",
    rating: 4.6,
    location: "San Francisco",
    workingType: "Full Time",
    package: 11,
    description:
      "Design intuitive and visually appealing user interfaces for web and mobile applications.",
    companyDetails:
      "Adobe specializes in creative software tools, digital experiences, and AI-driven design solutions.",
    workType: "Research, prototype, and create visually compelling designs.",
    responsibilities: [
      "Conduct user research and design wireframes.",
      "Develop UI components and interactive prototypes.",
      "Work closely with developers to implement UI designs.",
    ],
    skillsRequired: [
      "Expertise in Figma, Sketch, or Adobe XD.",
      "Strong understanding of user-centered design principles.",
      "Knowledge of accessibility and usability best practices.",
      "Basic understanding of frontend development.",
    ],
    benefits: ["Creative work environment", "Health and wellness programs"],
    applicationProcess: [
      "Portfolio review",
      "Design challenge",
      "Final interview",
    ],
  },
  {
    id: 5,
    companyName: "Unity Technologies",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Unity_2021.svg",
    jobTitle: "3D Designer",
    rating: 4.4,
    location: "Los Angeles",
    workingType: "Contract",
    package: 10,
    description:
      "Create stunning 3D models and assets for games, AR/VR, and animations.",
    companyDetails:
      "Unity is a leading game engine and 3D development company used in gaming and simulation.",
    workType:
      "Design and implement high-quality 3D assets for various digital applications.",
    responsibilities: [
      "Develop high-quality 3D models, textures, and animations.",
      "Work with game developers and UI/UX designers.",
      "Optimize assets for real-time rendering.",
    ],
    skillsRequired: [
      "Proficiency in Blender, Maya, or 3ds Max.",
      "Experience with game engines like Unity or Unreal Engine.",
      "Knowledge of PBR workflow and texturing techniques.",
      "Strong understanding of lighting and rendering.",
    ],
    benefits: ["Project-based bonuses", "Flexible work hours"],
    applicationProcess: ["Portfolio review", "Skill test", "Final interview"],
  },
  {
    id: 6,
    companyName: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    jobTitle: "iOS Developer",
    rating: 4.8,
    location: "Cupertino",
    workingType: "Full Time",
    package: 14,
    description:
      "Build and maintain high-performance iOS applications for Apple's ecosystem.",
    companyDetails:
      "Apple is a global leader in consumer electronics, software, and digital services.",
    workType:
      "Develop iOS applications that integrate seamlessly with Apple's hardware and services.",
    responsibilities: [
      "Develop iOS apps using Swift and Objective-C.",
      "Ensure high performance, quality, and responsiveness.",
      "Collaborate with designers and backend developers.",
    ],
    skillsRequired: [
      "Expertise in Swift and SwiftUI.",
      "Experience with iOS frameworks like CoreData and UIKit.",
      "Understanding of RESTful APIs and third-party integrations.",
      "Knowledge of Apple's Human Interface Guidelines.",
    ],
    benefits: ["Stock options", "Employee discounts", "Relocation support"],
    applicationProcess: [
      "Resume screening",
      "Technical interview",
      "Live coding test",
    ],
  },
  {
    id: 7,
    companyName: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Airbnb_Logo_Bélo.svg",
    jobTitle: "Flutter Developer",
    rating: 4.6,
    location: "Remote",
    workingType: "Full Time",
    package: 13,
    description: "Develop cross-platform mobile applications using Flutter.",
    companyDetails:
      "Airbnb is a global marketplace for lodging and tourism experiences.",
    workType:
      "Build smooth, scalable mobile applications for iOS and Android using Flutter.",
    responsibilities: [
      "Develop Flutter applications for mobile platforms.",
      "Ensure smooth UI interactions and performance optimizations.",
      "Integrate APIs and third-party services.",
    ],
    skillsRequired: [
      "Proficiency in Dart and Flutter framework.",
      "Experience with Firebase and backend integration.",
      "Strong understanding of mobile architecture patterns.",
      "Familiarity with state management solutions like Riverpod or Bloc.",
    ],
    benefits: ["Remote work flexibility", "Annual performance bonuses"],
    applicationProcess: [
      "Resume submission",
      "Technical screening",
      "Live coding interview",
    ],
  },
];
