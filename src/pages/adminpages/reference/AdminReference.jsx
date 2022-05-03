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
import { createBrand, createCountry, updateBrand, updateCountry, deleteBrand, deleteCountry } from '../../../http/referenceApi';
import { useDispatch } from 'react-redux'
import { createReferenceAction, updateReferenceAction, deleteReferenceAction } from '../../../redux/actions';

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const AdminReference = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState(0);
    const brands = useSelector(brandsSelector)
    const countries = useSelector(countriesSelector)
    const referenceIsLoaded = useSelector(referenceIsLoadedSelector)
    const references = [
        {
            id: 0,
            list: brands,
            listName: 'brands',
            name: 'Производители',
            update: updateBrand,
            create: createBrand,
            delete: deleteBrand,
        },
        {
            id: 1,
            list: countries,
            listName: 'countries',
            name: 'Страны',
            update: updateCountry,
            create: createCountry,
            delete: deleteCountry,
        }
    ]

    const fetchDeleteData = (id, ref) => {
        ref.delete(id)
            .then(id => {
                dispatch(deleteReferenceAction({ refName: ref.listName, id }))
            })
    }

    const fetchSaveData = (sendData, ref) => {
        const { id, name } = sendData
        if (id !== 0) {
            ref.update({ id, name })
                .then(data => {
                    dispatch(updateReferenceAction({
                        refName: ref.listName,
                        data
                    }))
                })
        } else {
            ref.create({ name })
                .then(data => {
                    dispatch(createReferenceAction({
                        refName: ref.listName,
                        data
                    }))
                })
        }
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
                            >
                                <Button />
                                <ListBox
                                    list={item.list}
                                    fetchDeleteData={(id) => fetchDeleteData(id, item)}
                                    fetchSaveData={(data) => fetchSaveData(data, item)}
                                />
                            </TabPanel>
                        )
                    })
                }
            </Box>
        </div>
    );
}
