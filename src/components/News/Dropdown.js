import React from 'react';
import 'bootstrap3/dist/css/bootstrap.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';

function getSortList(sortBy) {
    let titles = ["Most shared", "Most liked", "Newest first", "Oldest first"];
    let drpDwnList = [];
    titles.map((title, index) => (
        drpDwnList.push({ title: title, active: sortBy === title ? true : false, id: index })
    ));

    return drpDwnList;
}

const Dropdown = ({sortBy, sortByAc}) => (    
    <DropdownButton
        bsStyle="default"
        bsSize="small"
        title="Sort by"
        id="dd"
    >
    { getSortList(sortBy).map(drpDwnItem => (
        <MenuItem 
            key={drpDwnItem.id}
            eventKey= {drpDwnItem.id}
            onSelect={() => sortByAc(drpDwnItem.title)}
            active={drpDwnItem.active}>
            {drpDwnItem.title}
        </MenuItem>
    )) }
    </DropdownButton>
);

export default Dropdown;
