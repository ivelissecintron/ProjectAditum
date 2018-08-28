import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { FaUserTimes } from 'react-icons/fa'; 
import { FaUserPlus } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';

export default class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="create" className="menu-item" href="/create"><FaUserPlus /> Add Access</a>
        <a id="delete" className="menu-item" href="/delete"><FaUserTimes /> Delete Access</a>
        <a id="update" className="menu-item" href="/update"><FaUserEdit /> Update Access</a>
      </Menu>
    );
  }
}