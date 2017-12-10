const user = (state = {username:'', password:''}, action) => {
    switch (action.type) {
        case 'ACTION_LOGIN':
            return {
                username: action.username, 
                password: action.password
            }
        default:
            return state;
    }
}

export default user;