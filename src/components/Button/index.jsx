import React from 'react';
import './style.scss';

const CustomButton = (props) => {
  const {
    onClick,
    children,
    lg = false,
    md = false,
    primary = false,
    secondary = false,
    round = false,
  } = props;

  const classes = () => {
    let customClass = 'btn btn-animate';
    if (lg) {
      customClass = `${customClass} btn--lg`;
    }
    if (md) {
      customClass = `${customClass} btn--md`;
    }
    if (primary) {
      customClass = `${customClass} btn--primary`;
    }
    if (secondary) {
      customClass = `${customClass} btn--secondary`;
    }
    if (round) {
      customClass = `${customClass} btn--round`;
    }
    return customClass;
  };

  return (
    <span className={classes()} onClick={onClick}>
      <span>{children}</span>
    </span>
  );
};

export default CustomButton;
