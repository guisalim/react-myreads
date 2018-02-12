import React from 'react';

const Books = (props) => {
    const { onShelfChange, book } = props
    const { imageLinks, title, authors, shelf, averageRating, ratingsCount } = props.book
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select
                            defaultValue={shelf ? shelf : 'none'}
                            onChange={(e) => onShelfChange(book, e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead"> Want to Read</option>
                            <option value="read"> Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                {
                    authors && authors.map((author, index) => <div key={index} className="book-authors">* {author}</div>)
                }
                {
                    ratingsCount && <div className="book-rating">Rating: {averageRating} ({ratingsCount})</div>
                }
            </div>
        </li>
    )
}

export default Books