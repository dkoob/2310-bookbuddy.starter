const Homepage = ({user}) => {
    return(
        <div>
            
            <h2>Welcome {user.email ? user.email : "guest" + Math.floor(Math.random()*100000)} to our library!</h2>

        </div>
    )
}

export default Homepage