import React from 'react'
import ReactDOM from 'react-dom/client'
const BookList = () => {
 return <section><Book/></section>
}
const Book = () => {
 return <article>
  <Image />
  <Title />
  <Author/>
 </article>
}
const Image = () => <img src="https://m.media-amazon.com/images/I/41CSAHVHk+L._SY344_BO1,204,203,200_.jpg" alt=' Prince Harry The Duke of Sussex '/> 
const Title = () => <h2>Spare Hardcover </h2>
const Author = () => {
 return <h2>Prince Harry </h2>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)