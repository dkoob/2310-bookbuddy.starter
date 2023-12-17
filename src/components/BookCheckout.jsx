import axios from "axios"
import { useNavigate } from "react-router-dom"

const BookCheckout = ({ book, user, token }) => {
    const navigate = useNavigate()

    const handleCheckout = async () => {
        try {
            const response = await axios.patch(
                `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${book.id}`,
                {
                    available: false,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
                )
                if (response.status >= 200 && response.status < 300) {
                    const result = response.data
                    console.log(result)
                    navigate('/account')
                } else {
            throw new Error('Something went wrong')
        }
    } catch (error) {
        console.error(error)
    }
    location.reload()
    }

    return (
        <div>
            <h3>This book is: {book.available ? 'Available' : 'Not Available'}</h3>
            {user.email ? <button disabled={book.available ? false : true} onClick={handleCheckout}>Checkout This Book</button> : null}
            {console.log(user.books)}
        </div>
    )
}

export default BookCheckout