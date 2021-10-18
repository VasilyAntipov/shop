import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'


export const ListBox = ({ list }) => {
    console.log(list)
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
                        <Checkbox>
                        </Checkbox>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItem>
                )
            })}
        </List>
    )
}