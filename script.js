async function loadPens() {
  const response = await fetch("penlist.json");
 
  const pens = await response.json();
 
  console.log(pens);

const textElement =
document.getElementById('result');

const changeBtn =
document.getElementById('gachaButton');

changeBtn.addEventListener('click', () => {
    const randomIndex = 
    Math.floor(Math.random() * pens.length);

    const selectedPen = 
    pens[randomIndex];

    textElement.innerHTML =
    `${selectedPen.name}<br>
    ${selectedPen.color}`;
}
);

}

loadPens();