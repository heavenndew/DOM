const container = document.querySelector(".container");

container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "red";
});

container.addEventListener("mouseout", () => {
    container.style.backgroundColor = "green";
});

const button = document.querySelector("button");

button.addEventListener("click", () => {alert("click!")});

const buttonClickCallBack = () => {alert("Button Clicked")};

button.addEventListener("click", buttonClickCallBack);

button.removeEventListener('click',buttonClickCallBackClickCallback); 

button.addEventListener('click', buttonClickCallback);