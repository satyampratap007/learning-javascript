const mynums = [1,2,3,4,5,6]

// const new_val = mynums.filter( (num) =>{
//     return num > 4;
// })

// OR

// const new_val = mynums.filter( (num) => (num > 4))
// console.log(new_val);

// const  new_nums = [];
// mynums.forEach( (num) => {
//     if(num > 4){
//         new_nums.push(num);
//     }
// })

// console.log(new_nums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   print boooks having genre = "History"

// const user_books = books.filter( (bk) => (bk.genre === "History"))

//   print boooks that had printed after 1995

const user_books = books.filter( (bk) => (bk.publish >= "1995"))

console.log(user_books);



