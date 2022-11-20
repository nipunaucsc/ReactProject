export const UserGreeting = () =>{

    const isLoggedIn = false
    //return <div>Welcome {isLoggedIn ? 'Nipuna..!' : 'Gest..!'}</div>
    return <div>Welcome {isLoggedIn && 'Nipuna..!'  }</div>

}