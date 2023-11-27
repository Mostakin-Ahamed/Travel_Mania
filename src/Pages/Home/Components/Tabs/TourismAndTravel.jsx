import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TourismAndTravel = () => {
    const [tabIndex, setTabIndex]= useState(0)
    return (
        <div className=' mx-auto lg:w-10/12  justify-center'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Package</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
            <hr className='border-dashed border-gray-400' />
        </div>
    );
};

export default TourismAndTravel;