const getAdvice = () => {
    console.log("getting advice");

    const advice = fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {

            const adviceNumber = document.querySelector("#advice-number");
            adviceNumber.innerText = data.slip.id;

            const quote = document.querySelector("#quote");
            quote.innerText = `"${data.slip.advice}"`;

        });

}

const button = document.querySelector("#dice-button");
button.addEventListener("click", getAdvice);

getAdvice();