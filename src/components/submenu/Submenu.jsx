import React from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeDisplaySubmenu } from '../../actions'

export default function Submenu() {
    const displaySubmenu = useSelector(state => state.menu.displaySubmenu)
    const activeId = useSelector(state => state.menu.activeId)
    const dispatch = useDispatch()
    
    return (
        <Paper className={'submenu ' + displaySubmenu}
            onMouseEnter={()=>dispatch(changeDisplaySubmenu('show'))}
            onMouseLeave={()=>dispatch(changeDisplaySubmenu('hide'))}
        >
            <div className="content-menu">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat enim. Adipisci sed harum neque veritatis laborum asperiores fugit quia quisquam maxime blanditiis quaerat cumque illo suscipit numquam, quidem quasi!
                    Labore temporibus, ad velit voluptatum minus fugiat alias error itaque magni veniam. Iusto maxime pariatur, laboriosam provident id maiores blanditiis totam ipsam! Est ipsa quam, voluptatibus veniam alias eius nisi?
                    Neque laborum consequuntur omnis non sapiente quidem accusantium id iure ex cupiditate unde dolorum nesciunt fugit consequatur rerum officiis ipsam ab quisquam nemo nulla, cum atque! Deserunt cumque nihil nam.
                    Nostrum placeat tempore, architecto doloremque necessitatibus officia! Enim, consequuntur repudiandae? Culpa obcaecati magnam natus, molestias facilis delectus voluptate dignissimos deleniti, cupiditate et exercitationem eum excepturi consectetur officia! Harum, commodi ex?
                    Ratione, dolor corporis blanditiis sequi unde, fugiat placeat perferendis quam labore quae natus necessitatibus. Deserunt illo unde distinctio praesentium assumenda possimus, totam vitae enim dolorum, harum excepturi, non quas sequi.</p>
                </div>
            </div>
        </Paper>
    )
}
