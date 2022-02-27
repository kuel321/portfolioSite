import React from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
function Header() {
    const variant = {
        hidden: { rotate: -50 },
        visible: {
            rotate: 0,
            transition: { duration: 1 }
        }
    }

    const pathVariant = {
        hidden: {

            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className='logoBody'>
            <div className="logo">
                <motion.svg version="1.1" id="Capa_1" x="0px" y="0px"
                    width="100%" height="auto" viewBox="0 0 401.931 401.931"
                    variants={variant} initial="hidden" animate="visible"

                >

                    <motion.path fill="#608DB2" variants={pathVariant} d="M395.928,187.794l-272.1-135.687c-5.358-2.669-11.866-0.494-14.538,4.864L51.24,173.379
			c-1.283,2.573-1.491,5.55-0.579,8.276c0.912,2.727,2.869,4.979,5.443,6.262l81.242,40.511l-7.208,14.455
			c-2.671,5.358-0.494,11.866,4.864,14.538l2.561,1.278l-13.998,24.929H41.027C33.351,268.782,17.867,258.626,0,258.626v92.338
			c17.454,0,32.642-9.688,40.49-23.978h95.766c7.838,0,15.065-4.229,18.903-11.063l21.255-37.85l3.695,1.842
			c5.357,2.671,11.867,0.493,14.539-4.863l7.208-14.455l60.7,30.271c3.501,1.746,7.671,1.471,10.911-0.723l16.753-11.332
			l29.912,14.916c1.518,0.758,3.174,1.14,4.837,1.14c1.159,0,2.32-0.188,3.439-0.562c2.727-0.91,4.979-2.869,6.262-5.441
			l30.624-61.413l31.757-20.903c3.239-2.132,5.092-5.832,4.86-9.702C401.679,192.976,399.397,189.525,395.928,187.794z"/>

                </motion.svg>
            </div>
            <div className="titleContainer">
                <motion.div className='title'
                    initial={{ y: -800 }} animate={{ y: -20 }} transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}>
                    <h1> WV TRAFFIC CAMS</h1>

                </motion.div>
            </div>
        </div>
  
  )
}

export default Header