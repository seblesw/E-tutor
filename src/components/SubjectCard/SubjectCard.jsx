import React from "react";
import { motion } from "framer-motion";
import { FaComputer, FaBook } from "react-icons/fa6";

const subjectList = [
  {
    id: 1,
    name: "Data Science ",
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6,
  },
  {
    id: 2,
    name: "Programming",
    icon: <FaComputer />,
    color: "#922aee",
    delay: 0.4,
  },
  {
    id: 3,
    name: "AI",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7,
  },
  {
    id: 4,
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9,
  },
];

const SubjectCard = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-500">
            Our tutor subjects
          </h1>
          <p className="font-semibold text-3xl">
            Find Online Tutor in Any Subject
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {subjectList.map((subject) => {
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: subject.delay,
                }}
                className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
              >
                <div
                  style={{
                    color: subject.color,
                    backgroundColor: subject.color + "20",
                  }}
                  className="w-10 h-10 rounded-md flex justify-center items-center"
                >
                  {subject.icon}
                </div>
                <p>{subject.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubjectCard;
