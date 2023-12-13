import { useState } from 'react'

const SearchBar = ({books}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredTerms = books.filter((book) => {
        const lowercaseTitle= book.title.toLowerCase()
        const lowercaseSearchTerm = searchTerm.toLowerCase()
        return lowercaseTitle.indexOf(lowercaseSearchTerm) !== -1
    })

    return(
        <div>
            <label>
                <span className='searchBar'>
                <input
                    className='searchInput' 
                    type="text"
                    value={searchTerm}
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                />
                <h5>Search our catalog</h5>
                </span>
            </label>
            {
                searchTerm.length > 0 ?
                    <div>
                        <h3>There are {filteredTerms.length} of {books.length} books that meet these search requirements</h3>
                        <ul>
                            {
                                filteredTerms.map((book) => {
                                    return <li key={book.id}>{book.title}</li>
                                })
                            }
                        </ul>
                    </div>
                : null
            }
        </div>
    )
}

export default SearchBar