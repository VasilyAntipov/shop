import './menulist.scss'
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@mdi/react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { mdiWashingMachine } from '@mdi/js';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function Menulist() {
    const classes = useStyles();
    return (
        <div className="menu-wrap">
            <List disablePadding={false} component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    {/* <ListItemIcon> */}
                    <Icon path={mdiWashingMachine}
                        size={1.2}
                        color="rgb(252, 133, 7)" />
                    {/* </ListItemIcon> */}
                    <ListItemText primary="Бытовая техника" secondary="для дома уход за собой" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Смартфоны и гаджеты" secondary="планшеты фототехника" />
                </ListItem>

            </List>

        </div>

    )
}
