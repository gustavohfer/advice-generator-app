document.getElementById('botao').addEventListener('click', () => {
    generateAdvice();
});

async function getAdvice() {
    let url = 'https://api.adviceslip.com/advice';
    let adviceFetch = await fetch(url);
    let adviceObj = await adviceFetch.json();
    // console.log(adviceObj);
    return adviceObj;
}

async function generateAdvice() {
    let newAdviceObj = await getAdvice();
    let adviceId = await newAdviceObj.slip.id
    let advice = await newAdviceObj.slip.advice

    let adviceIdElem = document.getElementById('advice-id')
    let adviceElem = document.getElementById('advice')

    adviceIdElem.textContent = `ADVICE #${adviceId}`;
    adviceElem.textContent = advice
}

// on open

generateAdvice()