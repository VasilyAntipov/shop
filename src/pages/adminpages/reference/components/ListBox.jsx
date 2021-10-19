import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField'
import SaveIcon from '@mui/icons-material/Save'

export const ListBox = (props) => {
    const { list, editHandler, deleteHandler } = props

    return (
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
            {list.map((item) => {
                return (
                    <ListItem key={item.id}>
                        <TextField
                            value={item.name}
                            onChange={() => { }}
                        />
                        <IconButton onClick={() => { }}>
                            <SaveIcon />
                        </IconButton>
                        <IconButton onClick={() => { }}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                )
            })}
        </List>
    )
}