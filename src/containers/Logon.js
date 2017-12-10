import React from 'react';
import { connect } from 'react-redux';

import { logon } from '../_actions';
import ComponentLogon from '../components/logon/Logon';

const makeMapStateToProps = () => {
    return function mapStateToProps (state) {
        return {state}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (username, password) => dispatch(logon(username, password))
    }
}

const Logon = connect(makeMapStateToProps.mapStateToProps, mapDispatchToProps)(ComponentLogon)

export default Logon;
