import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Rendercards from '../Rendercards/Rendercards';


const  LabTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Currently reading" value="1" />
            <Tab label="Finished" value="2" />
         
          </TabList>
        </Box>
        <TabPanel value="1"><Rendercards state1='added to lib'></Rendercards></TabPanel>
        <TabPanel value="2"><Rendercards state1='Finished'></Rendercards></TabPanel>
     
      </TabContext>
    </Box>
  );
}

export default LabTabs;