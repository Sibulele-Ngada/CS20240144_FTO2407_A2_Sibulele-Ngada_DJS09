const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
export function showReviewTotal(value, reviewer, isLoyalty) {
    if (!reviewTotalDisplay)
        return;
    const iconDisplay = isLoyalty ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        value.toString() +
            " Review" +
            makeMultiple(value) +
            "| last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
export function populateUser(isReturning, userName) {
    if (!returningUserDisplay || !userNameDisplay)
        return;
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
export function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "/night";
        element.appendChild(priceDisplay);
    }
}
export function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return "s";
    }
    else
        return "";
}
