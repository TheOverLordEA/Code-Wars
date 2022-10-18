//Create a function takes the names of people who like an item and return display text
function likes(userName) {
  const likeOne = "likes this";

  const likePlural = "like this";
  if (userName.length === 1) {
    return userName + " " + likeAdd;
  } else if (userName.length === 2) {
    return `${userName[0]} and ${userName[1]} ${likePlural} `;
  } else if (userName.length === 3) {
    return `${userName[0]}, ${userName[1]} and ${userName[2]} ${likePlural}`;
  } else if (userName.length >= 4) {
    return `${userName[0]}, ${userName[1]} and ${
      userName.length - 2
    } others ${likePlural}`;
  } else {
    return "no one likes this";
  }
}

console.log(likes([]));
