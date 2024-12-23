import { Review, User, Property } from "./interfaces.js";
import { Permissions, LoyaltyUser } from "./enums.js";
import { MainProperty } from "./classes.js";
import { Price } from "./types.js";
import {
  showReviewTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
} from "./utils.js";

const propertyContainer = document.querySelector(".properties");
const footer = document.querySelector(".footer");
const button = document.querySelector("button");
const reviewContainer = document.querySelector(".reviews");
const container = document.querySelector(".container");

const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

const you: User = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

populateUser(you.isReturning, you.firstName);

const properties: Property[] = [
  {
    image: "../src/images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+112343823978921, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "../src/images/poland-property.jpg",
    title: "Polish Cottage",
    price: 30,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1298239028490830, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "../src/images/london-property.jpg",
    title: "London Flat",
    price: 25,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: [+34829374892553, "andyluger@aol.com"],
    isAvailable: true,
  },
  {
    image: "../src/images/malaysian-hotel.jpeg",
    title: "Malia Hotel",
    price: 35,
    location: {
      firstLine: "Room 4",
      city: "Malia",
      code: 45334,
      country: "Malaysia",
    },
    contact: [+60349822083, "lee34@gmail.com"],
    isAvailable: false,
  },
];

for (const property of properties) {
  if (!propertyContainer) break;

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = property.title;
  const image = document.createElement("img");
  image.setAttribute("src", property.image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
  showDetails(you.permissions, card, property.price);
}

let currentLocation: [string, string, number] = ["London", "11.03", 17];
if (!footer) {
  console.error("No footer");
} else {
  footer.innerHTML =
    currentLocation[0] +
    " " +
    currentLocation[1] +
    " " +
    currentLocation[2] +
    "°";
}

let count = 0;
function addReviews(
  array: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
  }[]
): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    if (!reviewContainer || !container || !button) {
      console.error("Missing html elements");
    } else {
      for (let i = 0; i < topTwo.length; i++) {
        const card = document.createElement("div");
        card.classList.add("review-card");
        card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
        reviewContainer.appendChild(card);
      }
      container.removeChild(button);
    }
  }
}

if (!button) {
  console.error("button missing");
} else {
  button.addEventListener("click", () => addReviews(reviews));
}

let yourMainProperty = new MainProperty(
  "../src/images/italian-property.jpg",
  "Italian House",
  [
    {
      name: "Olive",
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: "12-04-2021",
    },
  ]
);

const mainImageContainer = document.querySelector(".main-image");
const image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
if (!mainImageContainer) {
  console.error("Missing html");
} else {
  mainImageContainer.appendChild(image);
}
