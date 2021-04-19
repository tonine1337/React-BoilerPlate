import React from 'react';
import PropTypes from 'prop-types';

import classes from './layout.scss';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
      <p className={classes['pull-right']}>Made with &lt;3.</p>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.string,
};

Layout.defaultProps = {
  children: `React BoilerPlate`
}