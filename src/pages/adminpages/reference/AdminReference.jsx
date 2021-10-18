import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { brandsSelector, countriesSelector, referenceIsLoadedSelector } from '../../../redux/selectors/referenceSelector'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { TabPanel } from './components/TabPanel'
import { ListBox } from './components/ListBox'


const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const AdminReference = () => {
    const [value, setValue] = useState(0);
    const brands = useSelector(brandsSelector)
    const countries = useSelector(countriesSelector)
    const referenceIsLoaded = useSelector(referenceIsLoadedSelector)
    const references = [
        { ref: brands, name: 'Производители' },
        { ref: countries, name: 'Страны' }
    ]



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (!referenceIsLoaded)
        return <CircularProgress />

    return (
        <div className="admin-page reference">
            <Box sx={{ width: '100%' }} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {references.map((item, i) => {
                            return (
                                <Tab
                                    label={item.name}
                                    key={i}
                                    {...a11yProps(i)}
                                />
                            )
                        })}
                    </Tabs>
                </Box>
                {
                    references.map((item, i) => {
                        return (
                            <TabPanel
                                value={value}
                                index={i}
                                key={i}
                            >
                                <ListBox
                                    list={item.ref}
                                />
                            </TabPanel>
                        )
                    })
                }
            </Box>
        </div>
    );
}
