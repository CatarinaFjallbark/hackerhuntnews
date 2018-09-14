import React from 'react';
import 'bootstrap3/dist/css/bootstrap.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const Dropdown = () => (
    <DropdownButton
        bsStyle="default"
        bsSize="smal"
        title="POPULAR"
        id="dd"
    >
        <MenuItem eventKey="1">Featured</MenuItem>
        <MenuItem eventKey="2">Newest first</MenuItem>
        <MenuItem eventKey="3">Oldest first</MenuItem>
    </DropdownButton>
);

export default Dropdown;
