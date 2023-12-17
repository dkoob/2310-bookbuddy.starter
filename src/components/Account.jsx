
import { useNavigate } from "react-router-dom"
import axios from "axios"


const Account = ({user, setUser, setToken }) => {
    const navigate = useNavigate()
    
    const handleReturn = async (reservationId) => {
        const loggedInToken = window.localStorage.getItem('token')
        try {
            const response = await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationId}`,
            
                {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${loggedInToken}`
                },
                }
            );   
            navigate('/books')
            location.reload()
            } catch (error) {
            console.error('something went wrong');
            }
        }

    const logout = () => {
        window.localStorage.removeItem('token');
        setToken(null)
        setUser({})
        navigate('/')
    }
    if(!user.books){
        return null
    }
    
    return(
        <div>
            <h1>Account</h1>
            <button onClick={() => {logout()}}>Logout</button>
            <hr/>
            <h2>Email: {user.email}</h2>
            <h4>This could be a good place to show checked out books...</h4>
            {console.log(user.books)}
            <ul>
            {user.books.map((book) => {
                return (
                    <span key={book.id} className="checkedOutList">
                        <li>{book.title}</li>
                        <button onClick={() => handleReturn(book.id)}>Return this book</button>
                    </span>
                )
            })}
            </ul>
        </div>
    )
}

export default Account