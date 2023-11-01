
$(function(){
// //   jQuary CODE


        
  



let heightbtn = document.querySelector(`.height`)
let weightbtn = document.querySelector(`.weight`)
let resultbtn = document.querySelector (`.result`)
let output = document.querySelector (`.resultbox`)
let alertbtn = document.querySelector(`.box`)


function bmi() {
    let hbtn = parseInt(heightbtn.value)
    let wbtn = parseInt(weightbtn.value)
    
    hbtn = hbtn * 0.01

    let bmi = (wbtn / (hbtn * hbtn) )

    // console.log(bmi)

    $(`.modal`).slideDown(250);
    $(`.box`).delay(200).fadeIn(250);


    if (bmi < 18.5) {
        condition = (`Under-Weight`)
        alertbtn.classList.add("underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        condition = (`Normal-Weight`)
        alertbtn.classList.add("normal");
      } else if (bmi >= 25 && bmi <= 29.9) {
        condition = "Over-weight";
        alertbtn.classList.add("over");
      } else {
        condition = (`Obbesed`)
        alertbtn.classList.add("obese");
      }

    output.innerHTML=`Your BMI Is ${bmi.toFixed(2)} (${condition})`
}



resultbtn.addEventListener(`click`, bmi)

function crossbtn(){
    $(`.modal`).slideUp(350);
    $(`.box`).fadeOut(250);

}

$(`.modal`).click(crossbtn)
$(`.box`).click(crossbtn)

})