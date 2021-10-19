import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { brandsSelector, countriesSelector, referenceIsLoadedSelector } from '../../../redux/selectors/referenceSelector'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { TabPanel } from './components/TabPanel'
import { ListBox } from './components/ListBox'
import { createBrand } from '../../../http/referenceApi';

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
        { id: 0, ref: brands, name: 'Производители' },
        { id: 1, ref: countries, name: 'Страны' }
    ]

    const addRow = (item) => {
    }

    const editRow = () => {
    }

    const deleteRow = () => {

    }


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
                                addRow={() => addRow(item)}
                            >
                                <Button />
                                <ListBox
                                    list={item.ref}
                                    editRow={editRow}
                                    deleteRow={deleteRow}
                                />
                            </TabPanel>
                        )
                    })
                }
            </Box>
        </div>
    );
}
