import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SingleBook({books}) {
    let { bookId } = useParams();

    const checkBook = books.map((book) => {
        if (book.id === bookId*1) {
            return (
                <div key={book.id} className='singleBookPage'>
                    <h1 className='singleBookTitle'>Title : {book.title}</h1>
                    <h3>Author : {book.author}</h3>
                    <h4>Description : {book.description}</h4>
                    <img src={book.coverimage}/>
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