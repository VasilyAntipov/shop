import './menulist.scss'
import React from 'react'
import List from '@material-ui/core/List';
import { mdiWashingMachine } from '@mdi/js';
import Menubutton from '../menubutton/Menubutton'
import { Paper } from '@material-ui/core';

export default function Menulist({mouseOut,mouseOver}) {

    return (
        <div className="menu-wrap">
            <Paper>
                <List dense={true} disablePadding={true}>
                    <Menubutton
                        path={mdiWashingMachine}
                        size={1.5}
                        color="rgb(252, 133, 7)"
                        primary="Бытовая техника"
                        secondary="для дома уход за собой"
                        mouseOver={mouseOver}
                        mouseOut={mouseOut}
                        />
                    <Menubutton
                        path={mdiWashingMachine}
                        size={1.5}
                        color="rgb(252, 133, 7)"
                        primary="Смартфоны и гаджеты"
                        secondary="планшеты фототехника" />
                    <Menubutton
                        path={mdiWashingMachine}
                        size={1.5}
                        color="rgb(252, 133, 7)"
                        primary="ТВ и мультимедия"
                        secondary="аудио видеоигры" />
                    <Menubutton
                        path={mdiWashingMachine}
                        size={1.5}
                        color="rgb(252, 133, 7)"
                        primary="Компьютеры"
                        secondary="комплектующие ноутбуки" />
                    <Menubutton
                        path={mdiWashingMachine}
                        size={1.5}
                        color="rgb(252, 133, 7)"
                        primary="Офис и сеть"
                        secondary="кресла проекторы" />
                </List>
            </Paper>
        </div>

    )
}
