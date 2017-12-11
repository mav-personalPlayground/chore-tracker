export const logon = ( username, password ) => {
    return {
        type: 'ACTION_LOGIN',
        username,
        password
    }
}

export const dispatchLogin = (dispatch) => { 
    return { 
        handleLogin: (username, password) => dispatch(logon(username, password)) 
    } 
} 