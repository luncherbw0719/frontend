import React from 'react';

import Auth from './Auth';

import './styles/WithAuth.scss';

export const withAuth = Component => props => {

    return props.token ? (
      <Component {...props} />
    ) : <Auth />
  }
