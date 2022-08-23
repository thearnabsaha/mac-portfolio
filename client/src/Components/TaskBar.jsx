import React from 'react'
import "../Styles/Taskbar.scss"
import insta from '../assets/insta.svg';
import { motion } from "framer-motion"

const TaskBar = () => {
  return (
    <>
        <motion.div className="taskbar">
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}}/>
        </motion.div>
    </>
  )
}

export default TaskBar