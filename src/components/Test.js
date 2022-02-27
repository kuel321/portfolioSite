import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, NavLink } from 'react-router-dom';
import data from './example.json';
import ReactHlsPlayer from 'react-hls-player';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IconButton from '@mui/material/IconButton';


export default function Test() {
    const [newData, setNewData] = React.useState();
    let { city } = useParams();
    const datafilter = data.filter((x) => x.city.includes(city));
    const mapIt = () => {
        datafilter.map((x) => {
            x.urls.map((z) => {

                return (
                    <div>{z.title}</div>
                )
            })
        })
    }
    const cityData = datafilter.map((x) => (
        x.urls.map((y) => (
            <div className='cityStreamContainer'>
                <div className='cityStreamTitle'>
                   
                    
                    <h1 className='cityStreamTitleText'>
                        {y.title}
                    </h1>
                </div>
                <div className='cityStreamVideoContainer'>
                    <div className='cityStreamVideo'>
                        <ReactHlsPlayer
                            src={y.url}
                            autoPlay={true}
                            controls={true}
                            width="100%"
                            height="auto"
                        />
                    </div>
                </div>
            </div>
        ))
    ))


    //console.log(datafilter);


    return (
        <motion.div exit={{ opacity: 0, x: -500 }} initial={{  x: -500 }} animate={{ y: -10, x: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 50 }} >
            <div className='cityContainer'>

                <div className='cityBody'>
                <div className='cityStreamBackButton'> <IconButton component={NavLink} to="/"> <KeyboardBackspaceIcon></KeyboardBackspaceIcon></IconButton></div>
                    <h1 className="cityTitle">{city}</h1>

                </div>
                <div className='camContainer'>
                   {cityData}
                </div>

            </div>






        </motion.div>
    )
}
