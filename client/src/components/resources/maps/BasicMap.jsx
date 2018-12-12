import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const BasicMap = ({ children, ...props }) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.GOOGLE_MAPS_KEY
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </Wrapper>
);

BasicMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

BasicMap.defaultProps = {
  children: null,
};

export default BasicMap;
