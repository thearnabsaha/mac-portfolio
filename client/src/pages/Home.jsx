import React from 'react'
import "../Styles/Home.scss"
import icon from '../assets/blue.svg';
import TaskBar from '../Components/TaskBar';
import { motion } from "framer-motion"
const Home = () => {
  return (
    <>
      <div id="home">
        <div className="iconBox">
          <motion.div className="icons">
            <motion.img src={icon} alt="folder" whileHover={{scale:1.2}}/>
            <p>Profile</p>
          </motion.div>
          <motion.div className="icons">
            <motion.img src={icon} alt="folder" whileHover={{scale:1.2}}/>
            <p>Profile</p>
          </motion.div>
          <motion.div className="icons">
            <motion.img src={icon} alt="folder" whileHover={{scale:1.2}}/>
            <p>Profile</p>
          </motion.div>
          <motion.div className="icons">
            <motion.img src={icon} alt="folder" whileHover={{scale:1.2}}/>
            <p>Profile</p>
          </motion.div>
          <motion.div className="icons">
            <motion.img src={icon} alt="folder" whileHover={{scale:1.2}}/>
            <p>Profile</p>
          </motion.div>
        </div>
        <div className="textbox">
          right
        </div>
      </div>
      <TaskBar/>
    </>
  )
}

export default Home