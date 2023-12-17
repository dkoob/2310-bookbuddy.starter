import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BookCheckout from './BookCheckout';

function SingleBook({books, user, token}) {
    let { bookId } = useParams();

    const checkBook = books.map((book) => {
        if (book.id === bookId*1) {
            return (
                <div key={book.id} className='singleBookPage'>
                    <h1 className='singleBookTitle'>Title : {book.title}</h1>
                    <h3>Author : {book.author}</h3>
                    <h4>Description : {book.description}</h4>
                    <img className='singleBookImg' src={book.coverimage}
                    />
                    <hr />
                    <BookCheckout user = {user} book = {book} token = {token}/>
                </div>
            )
        }
    })

    return (
        <div>
            {checkBook}
        </div>
    );
}

export default SingleBook