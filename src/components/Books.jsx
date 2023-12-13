import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Books = ({ books }) => {

    return(
        <div>

            <h1>Our catalog</h1>
            <SearchBar books = {books}/>
            <br />
            <div className="bookNavBar">
                <span className="bookNavContentImage">Book Image</span>
                <span className="bookNavContentTitle">Book Title</span>
                <span className="bookNavContentAuthor">Book Author</span>
                <span className="bookNavContentAvailability">Availability</span>
            </div>
            {books.map((book) => {
                return (
                    <span  key={book.id} className="bookContainer">
                        <img src={book.coverimage} className="coverimage"/>
                        <Link className="booksTitle" to={`/books/${book.id}`}>{book.title}</Link>
                        <h3 className="booksAuthor">{book.author}</h3>
                        <h3 className="booksAvailability">{book.available ? 'Available' : 'Not Available'}</h3>
                    </span>

                )
            })}
        
        </div>
    )
}

export default Books