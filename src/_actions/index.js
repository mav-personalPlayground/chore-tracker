export const logon = ( username, password ) => {
    return {
        type: 'ACTION_LOGIN',
        username,
        password
    }
}