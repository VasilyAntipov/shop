import './menulist.scss'
import React from 'react'
import List from '@material-ui/core/List';
import { mdiWashingMachine } from '@mdi/js';
import Menubutton from '../menubutton/Menubutton'
import { Paper } from '@material-ui/core';

export default function Menulist({ mouseLeave, mouseEnter }) {

    return (
        <Paper className="menu-wrap">
            <List dense={true} >
                <Menubutton
                    path={mdiWashingMachine}
                    size={1.5}
                    color="rgb(252, 133, 7)"
                    primary="Бытовая техника"
                    secondary="для дома уход за собой"
                    mouseEnter={mouseEnter}
                    mouseLeave={mouseLeave}
                />
                <Menubutton
                    path={mdiWashingMachine}
                    size={1.5}
                    color="rgb(252, 133, 7)"
                    primary="Смартфоны и гаджеты"
                    secondary="планшеты фототехника"
                    mouseEnter={mouseEnter}
                    mouseLeave={mouseLeave} />
                <Menubutton
                    path={mdiWashingMachine}
                    size={1.5}
                    color="rgb(252, 133, 7)"
                    primary="ТВ и мультимедия"
                    secondary="аудио видеоигры"
                    mouseEnter={mouseEnter}
                    mouseLeave={mouseLeave}
                />
                <Menubutton
                    path={mdiWashingMachine}
                    size={1.5}
                    color="rgb(252, 133, 7)"
                    primary="Компьютеры"
                    secondary="комплектующие ноутбуки"
                    mouseEnter={mouseEnter}
                    mouseLeave={mouseLeave}
                />
                <Menubutton
                    path={mdiWashingMachine}
                    size={1.5}
                    color="rgb(252, 133, 7)"
                    primary="Офис и сеть"
                    secondary="кресла проекторы"
                    mouseEnter={mouseEnter}
                    mouseLeave={mouseLeave}
                />
            </List>
        </Paper>
    )
}
