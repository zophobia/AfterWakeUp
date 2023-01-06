const images = [
    "anita-austvika-j34IJcOtv9w-unsplash.jpg",
    "cat-7686662.jpg",
    "cat-7688749.jpg",
    "dog-in-the-water-4954173.jpg",
    "girl-7304385.jpg",
    "glitter-4916366.jpg",
    "ph-m-tr-n-hoan-th-nh-WNmzwoAFndI-unsplash.jpg",
    "simon-spring-qqvlV5WOnls-unsplash.jpg",
    "snow-7646952.jpg",
    "sunset-4478981.jpg",
    "valentin-salmon-d7t9sEKN03c-unsplash.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);