import React from 'react';
import PropTypes from 'prop-types';
import './TeslaStats.css';

const propTypes = {
  carstats: PropTypes.array
}

const TeslaStats = (props) => {
  const listItems = props.carstats.map((stat) => (
    <li key={stat.model}>
      <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
      <p>{stat.miles}</p>
    </li>
  ));
  return (
    <div className="tesla-stats">
    <ul>
      {listItems}  
    </ul>
  </div>
  )
};

TeslaStats.propTypes = propTypes;

export default TeslaStats