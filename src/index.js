import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const ilkKitap = {
  author: 'Prince Harry',
  title: 'Spare Hardcover',
  img: 'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL600_SR600,400_.jpg',
}

const ikinciKitap = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL450_SR450,320_.jpg',
}

// const author = 'Prince Harry'
// const title = 'Spare Hardcover'
// const img =
//   'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL600_SR600,400_.jpg'

const BookList = () => {
  return (
    <section>
      <Book
        author={ilkKitap.author}
        title={ilkKitap.title}
        img={ilkKitap.img}
      />
      <Book
        author={ikinciKitap.author}
        title={ikinciKitap.title}
        img={ikinciKitap.img}
      />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title} </h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
