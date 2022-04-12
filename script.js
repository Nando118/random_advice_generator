const adviceNum = document.querySelector(".advice-num");
const adviceDesc = document.querySelector(".advice-description-result");
const btn = document.querySelector(".btn");

btn.addEventListener('click', () =>{
  getAdvice();
});

window.onload = () => { getAdvice(); };

function getAdvice() {
  fetch('https://api.adviceslip.com/advice').then(response =>{
    return response.json();
  }).then(adviceData => {
    const AdviceObj = adviceData.slip;
    adviceNum.innerHTML = `#${AdviceObj.id}`;
    adviceDesc.innerHTML = `"${AdviceObj.advice}"`;
  }).catch(error => {
    console.log(error);
  });
  
}