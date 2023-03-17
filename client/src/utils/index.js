const isAuthenticated = () => {
    console.log(localStorage.getItem("auth"))
    return localStorage.getItem("auth") ;
}
export {isAuthenticated} ;