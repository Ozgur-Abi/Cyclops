const reducer = (state = 0, action) => {
   switch (action.type) {
      case 'LOGIN': return state + 1
      case 'LOGOUT': return state - 1
      default: return state
   }
}
export default reducer;