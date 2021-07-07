const getIsAuthenticated = state => Boolean(state.auth.token);

const getUserName = (state) => state.auth.user.name;
const authSelectors = { getIsAuthenticated, getUserName };


export default  authSelectors;