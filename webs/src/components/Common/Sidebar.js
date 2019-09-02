import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import FaceIcon from '@material-ui/icons/Face';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DashboardIcon from '@material-ui/icons/Dashboard';

function ListItemLink(props) {
  return <ListItemLink button component="a" {...props} />;
}

class Sidebar extends Component {
  render() {
    return (
      <List>
        {/* 
        <ListItemLink to="/admin">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemLink>
        <ListItemLink button to="/post">
            <ListItemIcon>
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Post" />
        </ListItemLink>
        <ListItemLink to="/users">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItemLink>
         */}
      </List>
    )
  }
}

export default Sidebar;

