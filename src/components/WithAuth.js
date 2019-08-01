import React from 'react';

import Auth from './Auth';

import './styles/WithAuth.scss';

import { connect } from 'react-redux';

export const withAuth = Component => connect(state => ({...state}))(props => {

    return props.token ? (
      <Component {...props} />
    ) : <Auth {...props} />
  }
);