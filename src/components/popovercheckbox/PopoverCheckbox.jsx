import React, { useState } from 'react'
import { Popover, RadioGroup, FormControlLabel, Radio, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { useLocation } from 'react-router'

export const PopoverCheckbox = ({ className, checkBox, title }) => {


    const location= useLocation();
    console.log(location)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [value, setValue] = React.useState(checkBox[0].title);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={className}>
            <span className="sort">{title}</span>
            <Link onClick={(e) => handleClick(e)}>
                {value}
            </Link>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={(e) => handleClose(e)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <RadioGroup
                    name={checkBox.name}
                    value={value}
                    onChange={handleChange}
                >
                    {checkBox.map(item => {
                        return (
                            <FormControlLabel
                                key={item.id}
                                value={item.title}
                                control={<Radio />}
                                label={item.title}
                                // {
                                    // <RouterLink to={`${pathname}&order=${item.id}`}>
                                    //     {item.title}
                                    // </RouterLink>}
                            />)
                    })}
                </RadioGroup>
            </Popover>
        </div >
    )
}
