const API_URL = "http://51.38.232.174:3002/v1";

const upvote = document.querySelector(".text-regular-3");
const Title = document.querySelector("heading-3");
const Advice = document.querySelector(".advice");
const Tag = document.querySelector(".feedback-chip text-regular-3");
const NumberComments = document.querySelector("number");

let AdviceContent = fetch(
	API_URL + "/feedbacks",
	{
		method: "GET",
	}.then((data) => console.log(data.json()))
);
