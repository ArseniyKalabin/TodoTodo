export const getAuthStatus = (state) => (
    state.auth.isAuthenticated
)

export const getUserData = (state) => (
    state.auth.user
)

export const getUserRole = (state) => (
    state.auth.user.role
)

