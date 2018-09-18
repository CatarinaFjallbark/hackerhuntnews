import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap3/dist/css/bootstrap.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';

function getSortList(sortBy) {
  const titles = ['Most shared', 'Most liked', 'Newest first', 'Oldest first'];
  const drpDwnList = [];
  titles.map((title, index) => (
    drpDwnList.push({ title, active: sortBy === title, id: index })
  ));

  return drpDwnList;
}

const Dropdown = ({ sortBy, sortByAc }) => (
  <DropdownButton
    bsStyle="default"
    bsSize="small"
    title="Sort by"
    id="dd"
  >
    { getSortList(sortBy).map(drpDwnItem => (
      <MenuItem
        key={drpDwnItem.id}
        eventKey={drpDwnItem.id}
        onSelect={() => sortByAc(drpDwnItem.title)}
        active={drpDwnItem.active}
      >
        {drpDwnItem.title}
      </MenuItem>
    )) }
  </DropdownButton>
);

Dropdown.propTypes = {
  sortBy: PropTypes.string.isRequired,
  sortByAc: PropTypes.func.isRequired,
};


export default Dropdown;
