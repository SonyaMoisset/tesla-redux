import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCar.css';

const propTypes =  {
  wheelsize: PropTypes.number
}

const TeslaCar = (props) => (
  <div className="tesla-car">
    <div className="tesla-wheels">
      <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelsize}`}></div>
      <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelsize}`}></div>
    </div>
  </div>
);

TeslaCar.propTypes = propTypes;

export default TeslaCar;