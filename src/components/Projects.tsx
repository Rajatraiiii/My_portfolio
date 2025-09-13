import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ML from "../assets/ML.png";
import AIvirtual from "../assets/AIvirtual.png";
import TODO from "../assets/TODO.png";


const Projects: React.FC = () => {
  const projects = [
    {
      title: "Image_Classifier",
      description:
        "Built and deployed a deep learning–based image classification model capable of categorizing images into predefined classes with high accuracy. Implemented the solution using Python, TensorFlow/Keras, and OpenCV for preprocessing. Deployed the trained model with a cloud-hosted API and developed a frontend interface for real-time predictions. Focused on model optimization, dataset balancing, and performance evaluation using metrics such as accuracy and F1-score.",
      image: ML,
      technologies: ["Python", "Streamlit", "Docker", "OpenCV", "PIL","NumPy","Pandas"],
      liveUrl: "https://imageclassifier-ml-rajat.onrender.com/",
      githubUrl: "https://github.com/Rajatraiiii/ImageClassifier_ML",
    },
    {
      title: "To-Do List",
      description:
        "Developed a responsive To-Do List web application using HTML, CSS, JavaScript, and React.js. Implemented features such as adding, editing, marking tasks as complete, and deleting tasks to enhance productivity. Focused on clean UI/UX design, state management in React, and reusable components to ensure scalability and maintainability.",
      image: TODO,
      technologies: ["HTML", "CSS", "JavaScript","React"],
      liveUrl: "https://rajatlistify.netlify.app/",
      githubUrl: "https://github.com/Rajatraiiii/ToDOList-main",
    },
    {
      title: "AI-Virtual-Assistant",
      description:
        "An intelligent, desktop-based AI Virtual Assistant developed using Python and Tkinter. This assistant can interact with users via voice and text commands, automating everyday tasks like web searches, opening applications, providing date & time info, and much more — making your digital experience smarter and hands-free.",
      image: AIvirtual,
      technologies: ["Python 3.x", "Tkinter"," Pyttsx3", "SpeechRecognition", "Pyaudio (for microphone input)"],
      liveUrl: "https://ai-virtual-assistant-one.vercel.app/",
      githubUrl: "https://github.com/Rajatraiiii/AI-VIRTUAL-ASSISTANT",
    },
    
    
  ];

  return (
    <section id="projects" className="py-20 bg-[#0F2027]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#1C92D2] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#1C92D2]/10 border border-[#1C92D2]/30 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-[#1C92D2] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-full h-64 p-2 bg-black"
                />
                <div className="absolute inset-0 bg-[#0F2027]/0 group-hover:bg-[#0F2027]/70 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#1C92D2] text-white p-3 rounded-full hover:bg-[#1C92D2]/80 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#1C92D2] text-white p-3 rounded-full hover:bg-[#1C92D2]/80 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#1C92D2]/20 text-[#1C92D2] px-3 py-1 rounded-full text-sm font-medium border border-[#1C92D2]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#1C92D2] hover:text-white transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#1C92D2] hover:text-white transition-colors font-medium"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;