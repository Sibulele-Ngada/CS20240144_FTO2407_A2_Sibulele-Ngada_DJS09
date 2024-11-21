import { Review } from "./interfaces";

const reviewTotalDisplay = document.querySelector("#reviews");

const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

function showReviewTotal(value: number) {
  if (!reviewTotalDisplay) return;
  reviewTotalDisplay.innerHTML = "review total " + value.toString();
}

showReviewTotal(reviews.length);
