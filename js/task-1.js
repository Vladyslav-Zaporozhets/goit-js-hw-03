function slugify(title) {
  const lowercasedTitle = title.toLowerCase();

  const words = lowercasedTitle.split(' ');

  const slug = words.join('-');

  return slug;
}

// Код для перевірки коректності роботи функції
console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
