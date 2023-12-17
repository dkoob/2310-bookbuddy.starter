const Homepage = ({user}) => {
    return(
        <div>
            
            <h2>Welcome {user.email ? user.firstname + " " + user.lastname : "guest" + Math.floor(Math.random()*100000)} to our online library!</h2>

        </div>
    )
}

export default Homepage