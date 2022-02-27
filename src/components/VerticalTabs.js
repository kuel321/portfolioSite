import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, fontSize: '50px'}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const exitAnimation = {
     exit: {opacity: 0, x: 10}
      
  }

  const style = {
      fontSize: '20px'
  }

  return (
      <motion.div variants={exitAnimation}>
    <Box
      sx={{ flexGrow: 1,  fontSize: '80px', minWidth: '340px', maxWidth: '320px', bgcolor: 'background.paper', display: 'flex', height: 400 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', fontSize: '100px' }}
        style={style}
      >
        <Tab label="Putnam" {...a11yProps(0)} />
        <Tab label="Kanawha" {...a11yProps(1)} />
        <Tab label="Cabell" {...a11yProps(2)} />
        <Tab label="Mason" {...a11yProps(3)} />
        <Tab label="Jefferson" {...a11yProps(4)} />
        <Tab label="Monongalia" {...a11yProps(5)} />
        <Tab label="Harrison" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
          <motion.div  exit={{ opacity: 0, y: +500 }} initial={{ y: -500 }} animate={{ y: -10, x: 0 }} >
      <NavLink className="tabLinkItems" to='/cams/Scott%20Depot'>
          <span>
              Scott Depot
              </span>
              
            </NavLink>
            <NavLink className="tabLinkItems" to='/cams/Hurricane'>
          <span>
              Hurricane
              </span>
              
            </NavLink>
            <NavLink className="tabLinkItems" to='/cams/Culloden'>
          <span>
              Culloden
              </span>
              
            </NavLink>
            <NavLink className="tabLinkItems" to='/cams/Buffalo'>
          <span>
              Buffalo
              </span>
              
            </NavLink>
            <NavLink className="tabLinkItems" to='/cams/Milton'>
          <span>
              Milton
              </span>
              
            </NavLink>
            </motion.div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <motion.div  exit={{ opacity: 0, y: +500 }} initial={{ y: -500 }} animate={{ y: -10, x: 0 }} >
      <NavLink className="tabLinkItems" to='/cams/Charleston'>
          <span>
              Charleston
              </span>
              
            </NavLink>
            <NavLink className="tabLinkItems" to='/cams/Cross%20Lanes'>
          <span>
              Cross Lanes
              </span>
              
            </NavLink>
           
            </motion.div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Nothing here yet!
      </TabPanel>
      <TabPanel value={value} index={3}>
      Nothing here yet!
      </TabPanel>
      <TabPanel value={value} index={4}>
      Nothing here yet!
      </TabPanel>
      <TabPanel value={value} index={5}>
      Nothing here yet!
      </TabPanel>
      <TabPanel value={value} index={6}>
      Nothing here yet!
      </TabPanel>
    </Box>
    </motion.div>
  );
}