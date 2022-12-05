const axios = require('axios').default


axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(responce => console.log(responce))


// Get all book name which is greater than 155
// Get All Book id and name for which authors has kohli
// Get total cost of all books
// Get total pages of all books


let datas = [
    {
      bookName: "abc",
      id: 1,
      pages: 190,
      price: 150,
      authors: ["kohli", "rohit"],
    },
    {
      bookName: "cba",
      id: 2,
      pages: 180,
      price: 160,
      authors: ["dhoni"],
    },
    {
      bookName: "bbb",
      id: 3,
      pages: 120,
      price: 110,
      authors: ["surya"],
    },
    {
      bookName: "ccc",
      id: 4,
      pages: 210,
      price: 190,
      authors: ["kohli"],
    },
    {
      bookName: "bbb",
      id: 5,
      pages: 210,
      price: 190,
      authors: ["shami"],
    },
  ];
  
  
  // Get all book name which is greater than 155
  var book = datas.filter((value) => {
    if (value.price > 155) {
      return true;
    }
    return false;
  });
  
  
  var allBookName = book.map((value) => value.bookName);
  
  console.log(allBookName);
  // Get All Book id and name for which authors has kohli
  
  var kohliBooks = datas.filter((val) => {
    var result =  val.authors.find((item) => item == "kohli");
    if (result) {
      return true;
    }
    return false;
  
  });
  console.log(kohliBooks ,"kohliBooks ");
  
  
  var kohliBookNames  = kohliBooks.map((item)=> item.bookName)
  
  console.log(kohliBookNames);
  
  // Get total cost of all books
  
  var totalBooks = datas.map((cost )=> {
  
      return cost.price
      
  })
  var ans =totalBooks.reduce((a,b)=>{
      return a+b
  })
  console.log(ans);
  
  // Get total pages of all books
  var totalPages = datas.map((val)=>{
      return val.pages
  })
   var getPages =totalPages.reduce((a,b)=> a+b)
  
  console.log(getPages)