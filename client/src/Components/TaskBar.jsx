import React from 'react'
import "../Styles/Taskbar.scss"
import insta from '../assets/insta.svg';
import { motion } from "framer-motion"

const TaskBar = () => {
  return (
    <>
        <motion.div className="taskbar" initial={{translateX:"-2000px",translateY:"255px"}} animate={{translateX:"10px",translateY:"255px"}} transition={{duration:1,type:"spring"}}>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1,transition:"3s ease-in-out "}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.1,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.2,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.3,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.4,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.5,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.6,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.7,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.8,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.9,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:2,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:2.1,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:2.2,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:2.3,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:2.4,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:2.5,duration:1,type:"spring"}}/>
            <motion.img src={insta} alt="" whileHover={{scale:1.5,translateY:"-10px"}} initial={{scale:0}} animate={{scale:1}} transition={{delay:2.6,duration:1,type:"spring"}}/>
        </motion.div>
    </>
  )
}

export default TaskBar