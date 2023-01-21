# React Temeller

#### Dosya Yapısı

- node_modules
  Uygulamanın gerektirdiği tüm bağımlılıkları içerir. Ayrıca package.json'da listelenen ana bağımlılıklarda bulunur

- public
  index.html (sayfa şablonu) dahil olmak üzere statik varlıkları içerir
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - bütün app
- src
  En basit haliyle, uygulamamızın beynidir. Bütün çalışmalarımızı burada yapacağız. src/index.js JavaScript giriş noktasıdır.
- .gitignore
  Kaynak denetiminin (Git) hangi dosyaları yoksayması gerektiğini belirtir

- package.json
  Her Node.js projesinin bir package.json dosyası vardır ve bu, projemiz hakkında, örneğin bağımlılıklar ve script dosyaları listesi gibi bilgiler içerir.

- package-lock.json
  Tüm bağımlılık ağacının anlık görüntüsü

- README
  Proje hakkında daha fazla bilgi paylaşabileceğiniz işaretleme dosyası, örneğin talimatlar ve özet

#### Şablonları Kaldırın

- src klasörünü kaldır
- src klasörü ekle
- src içine index.js oluştur

#### İlk Bileşen

```js
function Greeting() {
  return <h2>İlk Bileşenim</h2>
}

// arrow function

const Greeting = () => {
  return <h2>İlk Bileşenim</h2>
}
```

- Büyük harfle başlar
- JSX (html) döndürmelidir
- Her zaman <Greeting/> etiketini kapatmalıyız

##### Tipik Bileşen

```js
// import

const Greeting = () => {
  return <h2>My First Component</h2>
}
export default Greeting
```

##### Root Bileşen (sadece bir tane)

index.js

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return <h2>My First Component</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
```

#### Extensions

- Auto Rename Tag

- Prettier
  - format on save
  - format on paste
  - Default Formatter (Prettier - Code formatter)

settings.json

```json
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.singleQuote": true,
    "prettier.semi": false,
```

- Emmet

settings.json

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
```

- ES7 Snippets
  - rafce (arrow func & export)
  - rfce (regular func & export )
  - dosya ismi ile aynı
  - react auto import
    - uncheck
    - React Snippets › Settings: Import React On Top

#### Ayrıntılı Olarak İlk Bileşen

- büyük harf
- bir şey returnetmeli
- JSX syntax(return html)
  - hayatımızı kolaylaştırmak için

#### JSX Kuralları

- tek öğe döndürür (bir ana öğe)

  - semantik section/article
  - Fragment - fazladan node eklemeden öğeleri gruplayalım

```js
return <React.Fragment>...return'un geri kalanı</React.Fragment>

// kısayol

return <>...return'un geri kalanı</>
```

- camelCase adlandırma kuralı

```js
return (
  <div tabIndex={1}>
    <button onClick={func}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

- class yerine className

```js
return <div className='birŞeyler'>hello</div>
```

- her elementi kapat

```js
return <img />
// ya da
return <input />
```

- format
  - return veya () ile aynı satırda açılış etiketi

```js
function Greeting() {
  return (
    <>
      <div className='birŞeyler'>
        <h3>hello </h3>
        <ul>
          <li>
            <a href='#'>hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type='text' name='' id='' />
    </>
  )
}
```

#### İç İçe Bileşenler

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>Murat Akdağ</h2>
const Message = () => {
  return <p>Bu benim mesajım</p>
}
```

#### React Developer Tools

- sağ üst köşe
- daha fazla araç/uzantı
- chrome web mağazasını aç

#### Kitap Listesi

- setup

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <h2>image placeholder</h2>
const Title = () => {
  return <h2>Book Title</h2>
}
const Author = () => <h4>Author</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
```

- arama motoruna - 'amazon best selling books'
  [Amazon Best Sellers](https://www.amazon.com/Best-Sellers/zgbs)
- bir kitap seçin
- resmi, başlığı ve yazarı kopyalayın

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
    alt='Interesting Facts For Curious Minds'
  />
)
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>
}
const Author = () => <h4>Jordan Moore </h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
```

#### CSS

- index.css --> src

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #f1f5f8;
  color: #222;
}
```

- import file + class

```js
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
```

- complete css

```css
.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: flex;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .booklist {
    flex-wrap: wrap;
    flex: 1 1 150px;
  }
}
.book {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}
.book img {
  width: 100%;
  object-fit: cover;
}
.book h2 {
  margin-top: 1rem;
  font-size: 1rem;
}
```

#### Local Images (Public Folder)

- harici resimler (farklı sunucuda barındırılan) - sadece bir url'ye ihtiyacınız var
- yerel görüntüler (ortak klasör) - daha az performans
- yerel görüntüler (src klasörü) - varlıklar için daha iyi çözüm,

- görüntüyü kaydet (Görüntüyü Farklı Kaydet....)
- images klasörü oluşturun
- resmi kopyala/yapıştır
- yeniden adlandır (isteğe bağlı)
- './images/imageName.extension' kaynağındaki url'yi değiştirin
- './' çünkü varlıklar artık aynı sunucuda

```js
const Image = () => (
  <img src='./images/book-1.jpg' alt='Interesting Facts For Curious Minds' />
)
```

#### JSX - CSS (inline styles)

- JSX'te {}, JS'e geri dönmek anlamına gelir
- değer, anahtar/değer çiftine sahip bir nesnedir ---büyük harfle ve '' " ile

```js
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Jordan Moore
  </h4>
)
```

- css kuralları(inline vs external css)

```css
.book h4 {
  /* çalışmaz */
  color: red;
  /* çalışır */
  letter-spacing: 2px;
}
```

- harici kütüphaneler satır içi css kullanır,
  yani bazı değişiklikler yapmak istiyorsanız,
  kütüphane belgelerine ve elements sekmesine başvurun

- alternatif seçenek

```js
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>
}
```

- ÇOĞUNLUKLA ÇOKLU YAKLAŞIM MEVCUTTUR !!!
- SONUÇ AYNI OLDUĞU SÜRECE TERCİH EDEBİLİRSİNİZ!!!!

#### JSX - Javascript

- tek kitap bileşenine yeniden düzenleme (kişisel tercih)
- satır içi css'yi kaldır

```js
const Book = () => {
  return (
    <article className='book'>
      <img
        src='./images/book-1.jpg'
        alt='Interesting Facts For Curious Minds'
      />
      <h2>Interesting Facts For Curious Minds</h2>
      <h4>Jordan Moore </h4>
    </article>
  )
}
```

```css
.book h4 {
  color: #617d98;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  letter-spacing: 2px;
}
```

- JSX'te {}, JS 'e geri dönmek anlamına gelir
- içindeki değer bir ifade/expression olmalıdır (dönüş değeri),
  bir açıklama/statement olamaz

```js
const author = 'Jordan Moore'
const Book = () => {
  const title = 'Interesting Facts For Curious Mindssssss'
  return (
    <article className='book'>
      <img
        src='./images/book-1.jpg'
        alt='Interesting Facts For Curious Minds'
      />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  )
}
```

- satır yorumunu değiştir / Satır Yorumunu Değiştir

#### Props - Başlangıç Setup

- refactor/temzile

```js
const author = 'Jordan Moore'
const title = 'Interesting Facts For Curious Minds'
const img = './images/book-1.jpg'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}
```

```js
// parametreler
const someFunc = (param1, param2) => {
  console.log(param1, param2)
}
// argümanalar
someFunc('iş', 'developer')
```

```js
const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {console.log(props)}
    </article>
  )
}
```

- props nesnesi, props çağırma kuralı, istediğimiz ismi verebilirsiniz

- anahtar/değer çiftleri olarak geçirin
- prop varsa değer döndürür, aksi takdirde değer döndürmez

```js
function BookList() {
  return (
    <section className='booklist'>
      <Book iş='developer' />
      <Book title='rastele başlık' number={22} />
    </section>
  )
}
const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}
```

```js
function BookList() {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book title={title} img={img} />
    </section>
  )
}
const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  )
}
```

#### Props- Dinamik Kurulum

- bir nesne ayarla
- refactor özelliklere göre değişir
- kopyala/yapıştır ve yeniden adlandır
- ikinci kitap için değerleri al
- prop kurulumu

```js
const ilkKitap = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg',
}
const ikinciKitap = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL450_SR450,320_.jpg',
}

function BookList() {
  return (
    <section className='booklist'>
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
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  )
}
```

#### Proplara Erişim - Çoklu Yaklaşımlar

- doğru yanlış yoktur - yine tercih!!!

- Destructuring (object)

- Vanilla JS'de destructure
- zamandan/yazmaktan tasarruf sağlar
- özellikleri çıkarın
- artık nesneye başvurmaya gerek yok

```js
const birNesne = {
  name: 'murat',
  job: 'developer',
  location: 'istanbul',
}

console.log(birNesne.name)
const { name, job } = birNesne
console.log(job)
```

- tüm props.propName'e gerek yok
- bileşenin içindeki yapılandırma

```js
const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}
```

- fonksiyon parametrelerinde yapılandırma (bizim durumumuzda props)
- eğer console.log(props) yazarsanız - tanımlanmayacaktır

```js
const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}
```

#### Children Prop

- bileşen etiketleri arasında oluşturduğumuz her şey
- çoğunlukla Context API'da kullanılır
- özel prop, "children" olmalıdır
- JSX'te herhangi bir yere yerleştirilebilir

```js
function BookList() {
  return (
    <section className='booklist'>
      <Book author={ilkKitap.author} title={ilkKitap.title} img={ilkKitap.img}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={ikinciKitap.author}
        title={ikinciKitap.title}
        img={ikinciKitap.img}
      />
    </section>
  )
}

const Book = ({ img, title, author, children }) => {
  // geri kalan mantık burada
}
const Book = (props) => {
  const { img, title, author, children } = props
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  )
}
```

- opsiyonel

```css
@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}
.book p {
  margin: 1rem 0 0.5rem;
}
```

#### Basit Liste

- refactor

```js
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
]

function BookList() {
  return <section className='booklist'></section>
}

const Book = (props) => {
  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}
```

- nesneler React içerisinde render edilmez

```js
function BookList() {
  return <section className='booklist'>{books}</section>
}
```

- map - her dizi öğesi için bir işlev çağırarak yeni bir dizi oluşturur.

```js
const names = ['murat', 'namık', 'eda']
const newNames = names.map((name) => {
  console.log(name)
  return <h1>{name}</h1>
})

function BookList() {
  return <section className='booklist'>{newNames}</section>
}
```

#### Uygun Listeleme

- names ve newNames kaldırın

```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book)

        // return 'hello';
        return (
          <div>
            <h2>{book.title}</h2>
          </div>
        )
      })}
    </section>
  )
}
```

- render component
- özellikleri tek tek iletin

```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book)
        const { img, title, author } = book
        return <Book img={img} title={title} author={author} />
      })}
    </section>
  )
}
```

#### Key Prop

- id

```js
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book)
        const { img, title, author, id } = book
        return <Book book={book} key={id} />
      })}
    </section>
  )
}
```

- bazı kodlarda key olarak indeks göreceksiniz ancak liste değişiyorsa tavsiye edilmez

```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        console.log(book)
        const { img, title, author, id } = book
        return <Book book={book} key={index} />
      })}
    </section>
  )
}
```

#### Bütün Nesneyi İlet

- render component
- bütün nesneyi ilet
- Destructuring (object)

```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book)
        const { img, title, author } = book
        return <Book book={book} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props.book

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}
```

- alternatif

```js
const Book = ({ book: { img, title, author } }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}
```

#### Diğer Yöntem

- spread operator (...) - değerleri kopyalar

```js
const friends = ['murat', 'namık', 'eda']
const newFriends = [...friends, 'engin']
console.log(friends)
console.log(newFriends)
const birNesne = {
  name: 'murat',
  job: 'developer',
}

const yeniNesne = { ...birNesne, location: 'istanbul' }
console.log(birNesne)
console.log(yeniNesne)
```

```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}
const Book = ({ img, title, author }) => {
  // rest of the code
}
```

#### Events - Temeller

- Vanilla JS

```js
const btn = document.getElementById('btn')

btn.addEventListener('click', function (e) {
  // olay nesnesine erişim
  // olay ateşlendiğinde bir şeyler yap
})
```

- aynı yaklaşım
- element, event, function
- yine camelCase

```js
const EventExamples = () => {
  const handleButtonClick = () => {
    alert('handle button click')
  }
  return (
    <section>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}
```

- [React Events](https://reactjs.org/docs/events.html)
- onları ezberlemeye gerek yok (fikir aynı)
- sık kullanılanlar
  - onClick (click events)
  - onSubmit (submit form )
  - onChange (input change )

```js
function BookList() {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}
```

#### Event Object & Form Submission

```js
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e)
    // e.target - element
    console.log(`Input Name : ${e.target.name}`)
    console.log(`Input Value : ${e.target.value}`)
    // console.log('handle form input');
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      {/*  onSubmit Event Handler  ekle*/}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/*  type='submit' buton ekle*/}
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}
```

- alternatif yaklaşım

```js
<button type='submit' onClick={handleFormSubmission}>
  submit form
</button>
```

#### Beyin Fırtınası

- Alternatif yaklaşım
- anonim işlevi ilet (bu durumda ok işlevi)
- bir satır - daha az kod

```js
const EventExamples = () => {
  return (
    <section>
      <button onClick={() => console.log('hello ')}>click me</button>
    </section>
  )
}
```

- ayrıca olay nesnesine erişebilir

```js
const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Tipik Form</h2>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={() => console.log('tıkladın')}>click me</button>
    </section>
  )
}
```

#### Beyin Fırtınası #2

- EventsExamples kaldır
- bileşenler varsayılan olarak bağımsızdır.

```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  const displayTitle = () => {
    console.log(title)
  }

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author} </h4>
    </article>
  )
}
```

- button'u kaldır

#### Prop Drilling

- react veri akışı - yalnızca proplarla aktarabilir
- alternatifler Context API'si, redux, diğer state kütüphaneleri

```js
function BookList() {
  const someValue = 'muzluSüt'
  const displayValue = () => {
    console.log(someValue)
  }
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, displayValue } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author} </h4>
    </article>
  )
}
```

#### Karışık Örnek

- ilk kurulum
- booklist içerisinde getBook işlevi oluşturun
- id'yi argüman olarak kabul eder ve book buluyor

- işlevi book Bileşenine iletin ve buton tıklamasıyla çağırın
- book Bileşeni id ve fonksiyonu parçalayın
- kullanıcı butona tıkladığında işlevi çağırın, id iletin
- amaç : aynı kitabı konsolda görmelisiniz

```js
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props
  // console.log(props);

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* this is not going to work */}
      <button onClick={getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  )
}
```

- iki düzeltme
- ilk seçenek - kapsayıcı setup

```js
const Book = (props) => {
  const { img, title, author, getBook, id } = props
  // console.log(props);
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>display title</button>
      <h4>{author}</h4>
    </article>
  )
}
```

- ikinci düzeltme
- ikinci seçenek - anonim ok işlevine sarın

```js
const Book = (props) => {
  const { img, title, author, getBook, id } = props
  // console.log(props);
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={() => getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  )
}
```

#### Import & Export Durumları

- getBook kodlarının hepsini silin

```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
    </article>
  )
}
```

- src books.js ve Book.js'de iki dosya kurun
- index.js'den book dizisini kesin
- books.js'ye ekle

  books.js

```js
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]
```

- iki çeşit dışa aktarma: adlandırılmış ve varsayılan

  - adlandırılmış dışa aktarma adlarıyla eşleşmelidir ZORUNLU
  - varsayılan dışa aktarmalarla, yeniden adlandırılabilir ancak dosya başına yalnızca bir tane

- adlandırılmış export

```js
export const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]
```

index.js

```js
import { books } from './books'
```

- default export

```js
const Book = (props) => {
  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
    </article>
  )
}

export default Book
```

index.js

```js
import Book from './Book'
```

#### Local Image (src folder)

- optimize edildiğinden daha iyi performans
- diziye bir kitap daha ekle
- üç görüntüyü de indirin (yeniden adlandırın)
- src'deki images klasörü kurulumu
- üç resmi de books.js'ye aktarın
- resim özelliğini içe aktarmaya eşit olarak ayarla
- ve evet, her görüntü için yeni içe import gerekir

```js
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'

export const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: img1,
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: img2,
    id: 2,
  },
  {
    author: 'Stephen King',
    title: 'Fairy Tale',
    img: img3,
    id: 3,
  },
]
```

#### Challenge

- sayıları ayarlayın
- css için endişelenmeyin
- ipucu - index(map'deki ikinci parametre)

index.js

```js
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, number } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      <span className='number'>{`# ${number + 1}`}</span>
    </article>
  )
}
```

index.css

```css
.book {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  /* set relative */
  position: relative;
}

.number {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  padding: 0.75rem;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: #c35600;
  color: #fff;
}
```

#### Başlık Ekle

- uygulamamıza bir başlık ekleyin (isteğe bağlı css)
- sayfa başlığını değiştir

index.js

```js
function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
    </>
  )
}
```

index.css

```css
h1 {
  text-align: center;
  margin-top: 4rem;
  text-transform: capitalize;
}
```

public/index.html

```html
<title>Best Sellers</title>
```

#### Build Production App

- stop dev server "ctrl + c"
- run "npm run build"
- build folder oluşturulacaktır

#### Netlify

- sign up
- yeni site ekle/manuel yayınla
- build klasörünü seçin
- siteyi yeniden adlandır - site ayarları/site adını değiştir

#### Create-React-App Şablonu (src)

- index.js

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

// styles ( global)
import './index.css

// App olarak yazmak yaygın ve ayrı bir dosyada kurulur
import App from './App'
// import report web vitals
import reportWebVitals from './reportWebVitals'

// StrictMode

// StrictMode, bir uygulamadaki potansiyel sorunları vurgulayan bir araçtır. Alt öğeleri için ek kontroller ve uyarılar etkinleştirir. Yalnızca Geliştirmede çalışır, üretim yapısını etkilemez. İKİ KEZ OLUR !!! Kaldırmak mümkün.

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```
