import { motion } from "framer-motion";
import myPicProfile from "../../assets/img/myPicProfile.jpg";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Me = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-4">
            <motion.img
              src={myPicProfile}
              alt="my-pic"
              className="border border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.3 }}
              transition={{ duration: 1, delay: 1.5 }}
              width={650}
              height={650}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <br></br>
          <br></br>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
          </motion.div>
          <br></br>
          <motion.p
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
          >
            a recent software development graduate with passion for learning and
            creating innovative software solutions. I am actively working on
            enhancing my skills in building web applictions using modern
            technologies as ASP.NET Core, React, JavaScript. I am eager to join
            a dynamic team that supports my career growth and helps me apply my
            knowledge in real-world work environment. I am committed to
            continuous improvement and excited about the opportunity to
            contribute to meaningful projects while further developing my
            technical expertise.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Me;
