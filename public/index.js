const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const propertyContainer = document.querySelector(".properties");
const reviews = [
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
function showReviewTotal(value, reviewer, isLoyalty) {
    if (!reviewTotalDisplay)
        return;
    const iconDisplay = isLoyalty ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        "review total " +
            value.toString() +
            "| last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
const you = {
    firstName: "Bobby",
    lastName: "Brown",
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
function populateUser(isReturning, userName) {
    if (!returningUserDisplay || !userNameDisplay)
        return;
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.firstName);
const properties = [
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
        contact: "marywinkle@gmail.com",
        isAvailable: true,
    },
    {
        image: "../src/images/poland-property.jpg",
        title: "Polish Cottage",
        price: 34,
        location: {
            firstLine: "no 23",
            city: "Gdansk",
            code: 343903,
            country: "Poland",
        },
        contact: "garydavis@hotmail.com",
        isAvailable: false,
    },
    {
        image: "../src/images/london-property.jpg",
        title: "London Flat",
        price: 23,
        location: {
            firstLine: "flat 15",
            city: "London",
            code: 35433,
            country: "United Kingdom",
        },
        contact: "andyluger@aol.com",
        isAvailable: true,
    },
];
for (const property of properties) {
    if (!propertyContainer)
        break;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = property.title;
    const image = document.createElement("img");
    image.setAttribute("src", property.image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
}
export {};
