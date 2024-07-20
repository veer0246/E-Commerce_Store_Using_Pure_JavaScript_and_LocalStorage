let root = document.getElementById('root')
let sp = document.getElementById('sp')
let cartBox = document.querySelector('.cartBox')
let cartBtn = document.querySelector('.cartBtn')
//----------------------
async function getData() {
    let raw = await fetch('https://fakestoreapi.com/products')
    let data = await raw.json()
    return data
}

getData()
    // console.log(getData())
    .then((data) => {
        console.log((data))
//---------------------------------------
        function displayData(){

        root.innerHTML = ""
        data.map((item) => {
            let x = ""
            for(let i = 1; i<=Math.round(item.rating.rate); i++){
                  x += '⭐'
                //   console.log(x);
            }

            let card = document.createElement('div')
            card.classList.add('cart')
            card.innerHTML = `<img src = "${item.image}" alt = "">
        <h2>${item.title}</h2>
        <h3>Category:- ${item.category}</h3>
        <h2>Price:- ${Math.ceil(item.price) * 10}₹</h2>
        <h4>Rating:-${item.rating.rate} (${x})</h4>
        <button onclick = "addToCart(${item.id})"> Add to Cart </button>`

            root.appendChild(card)
        })
    }    
//-----------        
      window.allData = () => {
        console.log('hello');
        root.innerHTML = ""
        data.map((item) => {
            let x = " "
            for(let i = 1; i<=Math.round(item.rating.rate); i++){
                  x += '⭐'
            }

            let card = document.createElement('div')
            card.classList.add('cart')
            card.innerHTML = `<img src = "${item.image}" alt = "">
        <h2>${item.title}</h2>
        <h3>Category:- ${item.category}</h3>
        <h2>Price:- ${Math.ceil(item.price) * 10}₹</h2>
        <h4>Rating:-${item.rating.rate}</h4>
        <button onclick = "addToCart(${item.id})"> Add to Cart </button>`

            root.appendChild(card)
        })
      }
//-----------      
      window.mens = () => {
      let result = data.filter((item)=>item.category == "men's clothing")
        root.innerHTML = ""
        result.map((item) => {
            let x = " "
            for(let i = 1; i<=Math.round(item.rating.rate); i++){
                  x += '⭐'
            }

            let card = document.createElement('div')
            card.classList.add('cart')
            card.innerHTML = `<img src = "${item.image}" alt = "">
        <h2>${item.title}</h2>
        <h3>Category:- ${item.category}</h3>
        <h2>Price:- ${Math.ceil(item.price) * 10}₹</h2>
        <h4>Rating:-${item.rating.rate}</h4>
        <button onclick = "addToCart(${item.id})"> Add to Cart </button>`

            root.appendChild(card)
        })
      }
//----------------------      
      window.electronics = () => {
      let result = data.filter((item)=>item.category == "electronics")
        root.innerHTML = ""
        result.map((item) => {
            let x = " "
            for(let i = 1; i<=Math.round(item.rating.rate); i++){
                  x += '⭐'
            }

            let card = document.createElement('div')
            card.classList.add('cart')
            card.innerHTML = `<img src = "${item.image}" alt = "">
        <h2>${item.title}</h2>
        <h3>Category:- ${item.category}</h3>
        <h2>Price:- ${Math.ceil(item.price) * 10}₹</h2>
        <h4>Rating:-${item.rating.rate}</h4>
        <button onclick = "addToCart(${item.id})"> Add to Cart </button>`

            root.appendChild(card)
        })
      }
//----------------------    
      window.jewelery = () => {
      let result = data.filter((item)=>item.category == "jewelery")
        root.innerHTML = ""
        result.map((item) => {
            let x = " "
            for(let i = 1; i<=Math.round(item.rating.rate); i++){
                  x += '⭐'
            }

            let card = document.createElement('div')
            card.classList.add('cart')
            card.innerHTML = `<img src = "${item.image}" alt = "">
        <h2>${item.title}</h2>
        <h3>Category:- ${item.category}</h3>
        <h2>Price:- ${Math.ceil(item.price) * 10}₹</h2>
        <h4>Rating:-${item.rating.rate}</h4>
        <button onclick = "addToCart(${item.id})"> Add to Cart </button>`

            root.appendChild(card)
        })
      }
//----------------------
        window.addToCart = (pId) => {
            let product = data.find((item) => pId === item.id)

            if (product) {
                let row = document.createElement('div')
                row.classList.add('row')
                row.innerHTML = `
            <div> 
            <h2> ${product.title}</h2>
            <h3>Price:- ${Math.ceil(product.price)*10 } ₹ </h3>
            </div>
            <button onclick ="removeToCart(${product.id}) ">Remove</button>`
                cartBox.prepend(row)

                let cartData = JSON.parse(localStorage.getItem('cart')) || []
                cartData.push(product)
                // console.log(cartData.length)
                localStorage.setItem('cart', JSON.stringify(cartData))
                sp.innerHTML = `${cartData.length}`

                let fp = cartData.reduce((x, y) => x + (Math.ceil(y.price) * 10), 0)
                let tp = document.getElementById('tp')
                tp.innerHTML = `${fp}`
            }
        }
        let sp = document.getElementById('sp')
        let cartData = JSON.parse(localStorage.getItem('cart')) || []
        sp.innerHTML = `${cartData.length}`
//----------------------
        function displayCart() {
            cartBox.innerHTML = " "
            cartData.map((item,index) => {
                let row = document.createElement('div')
                row.classList.add('row')

                row.innerHTML = ` <div>
              <h2> ${item.title} </h2>
              <h3>Price:- ${Math.ceil(item.price) * 10}₹ </h3>
              </div>
             <button onclick = "removeToCart(${index})">Remove</button> `
                cartBox.prepend(row)
            })
            let last = document.createElement('div')
            let fp = cartData.reduce((x, y) => x + (Math.ceil(y.price) * 10), 0)
            last.innerHTML = `
            <h1>Total Price:- </h1>
            <h2 id = 'tp'> </h2>`
            cartBox.appendChild(last)
            let tp = document.getElementById('tp')
            tp.innerHTML = `${fp}`
        }
//-------------------
        window.removeToCart = (cId) => {
            console.log(cId)
            let cartData = JSON.parse(localStorage.getItem('cart'))
            cartData.splice(cId, 1)
            localStorage.setItem('cart', JSON.stringify(cartData))
            sp.innerHTML = cartData.length
            cartBox.innerHTML = " "
            cartData.map((item, index) => {
                let row = document.createElement('div')
                row.classList.add('row')
                row.innerHTML = `
        <div>
              <h2> ${item.title} </h2>
              <h3>Price:- ${Math.ceil(item.price) * 10}₹ </h3>
              </div>
             <button onclick = "removeToCart(${index})">Remove</button> 
        `
                cartBox.prepend(row) 
            })
            let last = document.createElement('div')
            last.innerHTML = `
    <h1>Total Price:-  </h1>
    <h2 id = 'tp'> </h2>`
            cartBox.appendChild(last)
            let fp = cartData.reduce((x, y) => x + (Math.ceil(y.price) * 10), 0)
            let tp = document.getElementById('tp')
            tp.innerHTML = `${fp}`

        }
//-------------------
        let flag = true
        cartBtn.addEventListener('click', () => {
            if (flag == true) {
                cartBox.classList.add('show')
                flag = false
            } else {
                cartBox.classList.remove('show')
                flag = true
            }
        })
        displayCart()
        displayData()
    })
    .catch((error) => {
        console.log('Have an Error')
    })    
//--------------------



