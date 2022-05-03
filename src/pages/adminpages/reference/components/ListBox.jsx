import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton';
import { Field } from './Field'
import { Button } from '@mui/material'

export const ListBox = (props) => {
    const { list, fetchSaveData, fetchDeleteData } = props
    const [listData, setListData] = useState(list)


    useEffect(() => {
        setListData(list)
    }, [list])

    const handlerClick = () => {
        if (!listData.find(item => item.id === 0))
            setListData([{ id: 0, name: '' }, ...listData])
    }

    return (
        <div>
            <Button
                onClick={handlerClick}
                color="secondary"
            >
                Добавить запись
            </Button>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                {listData.map((item, i) => {
                    return (
                        <ListItem key={item.id}>
                            <div>{item.id}</div>
                            <Field
                                value={item}
                                handlerSave={fetchSaveData}
                            />

                            <IconButton onClick={() => fetchDeleteData(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}