import React, { Component } from 'react'
import Header from '../icons/Header'
import VerticalTabs from './VerticalTabs';
import { motion, AnimatePresence } from 'framer-motion';
export default class Body extends Component {
  render() {
   
    return (
      <div className="tabBody"> 
          <motion.div  exit={{ x: +500, opacity: 0}}  initial={{x: +500}} animate={{ y: 10, x: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 50 }} className="tabs">
             
                  
                
                 <VerticalTabs />
          
       
          </motion.div>
      </div>
    )
  }
}
