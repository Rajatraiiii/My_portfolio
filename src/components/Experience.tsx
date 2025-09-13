import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  const experience = [
    {
      title: "Python Intern",
      company: "YHills Educators",
      period: "May 2024 – July 2024",
       description: [
        "Completed a 2-month internship where I learned how Python is applied in real-world industry use cases, gaining hands-on experience in problem-solving and backend development.",
        "Developed small-scale automation scripts to streamline repetitive tasks.",
    "Explored and implemented API integration for data exchange.",
    "Worked with Python libraries for data handling and problem-solving.",
    "Collaborated with mentors and peers, following industry-standard coding practices.",
      ],
    },
    {
      title: "Senior Core Member",
      company: "Matrix Club, VIT Vellore",
      period: "2025 – Present",
      description:
        "Actively leading initiatives and currently working on the Matrix Project, collaborating with peers to drive impactful technical contributions within the club.",
    },
    // 🔽 You can keep adding your older experiences here in the same format
    // {
    //   title: "Your Previous Role",
    //   company: "Company/Organization",
    //   period: "2023 – 2024",
    //   description: "Brief description of your role and impact.",
    // },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0F2027]">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">
            Professional Experience
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-[#1C92D2] rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Roles and projects that shaped my journey as a developer
          </p>
        </motion.div>

        <div className="relative border-l-2 border-[#1C92D2]/40 pl-10 space-y-10">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Icon inside circle */}
              <div className="absolute -left-[60px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1C92D2] text-white shadow-lg">
                <Briefcase size={18} />
              </div>

              <div className="bg-[#1C92D2]/5 border border-[#1C92D2]/30 rounded-xl p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-300">{exp.period}</span>
                </div>
                <p className="text-[#1C92D2] font-medium mb-2">{exp.company}</p>
                <p className="leading-relaxed text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
