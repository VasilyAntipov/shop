import React from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function Submenu({ mouseEnter, mouseLeave }) {
    const displaySubmenu = useSelector(state => state.menu.displaySubmenu)
    return (
        <Paper className={'submenu ' + displaySubmenu}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <div className="content-menu">
                <p>
                    <ul>
                    Приготовление пищи2187
                        <li>Приготовление пищи2187</li>
                        <li>Техника для кухни</li>
                        <li>Холодильное оборудование1991</li>
                        <li>Посудомоечные машины549</li>
                        <li>Приготовление напитков2595</li>
                        <li>Встраиваемая техника5593</li>
                    </ul>
                    
                    
                    
                    
                    
                    
                    Нарезка, смешивание, упаковка1134Приготовление десертов103Измерения201Прочие товары для кухни137
                    Техника для дома
                    Стирка и сушка961
                    Глаженье849
                    Уборка1771
                    Летний климат564
                    Зимний климат911Поддержание климата680Водонагреватели588Шитье, вышивание и уход за одеждой188Умный дом536Товары для ванных и туалетных комнат10Часы143

                </p>

            </div>
        </Paper>
    )
}
