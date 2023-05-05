//Q1 – Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.//

function giveRatings(rating) {
  let ratings = "";

  for (i = 0; i < Math.floor(rating); ++i) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}

console.log(giveRatings(4.5));

//Q2 - Given an assortment of numbers, sort them out from lowest to highest\\

function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortLowToHigh([1, 5, 0, 10, 4]));

//Q3 - Given an array of objects, return the prices sorted by high to low.\\

function sortHighToLow(numbers) {
  return numbers.sort((a, b) => b.price - a.price);
}

console.log(sortHighToLow(
    [{
        id: 1, price:50
    },
    {
        id: 2, price:0
    },
    {
        id: 3, price:100
    }]
));

//Q4 Promises folder

//Q5 Find all the post from a single user

async function postsByUser(uid) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
  const result = await promise.json();
  const posts = result.filter(element => element.userId = uid)

  console.log(posts)
}

postsByUser(4);

//Q6 First 6 incomplete todos

async function firstSixIncomplete() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await promise.json();
  const todos = result.filter(element => !element.completed).slice(0, 6) 
  console.log(todos);
}

firstSixIncomplete();