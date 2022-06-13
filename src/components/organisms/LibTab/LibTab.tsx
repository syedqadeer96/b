import * as React from 'react';

import Tab from '@mui/material/Tab';

import TabPanel from '@mui/lab/TabPanel';

import NavTabs from './NavTabs';
const LibTab=()=> {
  
  const tabValues=[
    {
      'value':'0',
      'label':'synopsis',
      'panelData':'Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.'
    },
    {
      'value':'1',
      'label':'Who is it for?',
      'panelData':''
    },
    {
      'value':'2',
      'label':'About the author',
      'panelData':''
    }
  ]

  return (
    <NavTabs child1={tabValues.map((tabValue)=>(
      <Tab value={tabValue.value} label={tabValue.label}/>
      )
      
      )} child2={tabValues.map((tabValue)=>(
        <TabPanel value={tabValue.value} >{tabValue.panelData}</TabPanel>
      ))}> 
     </NavTabs>
  );
}
export default LibTab