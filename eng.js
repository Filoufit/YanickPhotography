let imgNum;

let screenWidth;

let imgDisplayed = 0;

let imgPaginationArr = document.getElementsByClassName("imgNum");

let btnPressedNum = 1;


for (let i = 1; i < 21; i++) {
  if (i % 2===0) {
    document.getElementById(`side-img${i}`).style.marginLeft = "46px";
  }
  else if (i % 2!==0) {
    document.getElementById(`side-img${i}`).style.marginLeft = "20px";
  }
}




function displayImg(imgNum) {
  Number(imgNum);
  let screenWidth = window.innerWidth;
  
  for (let i = 0; i < 9; i++) {
    imgPaginationArr[i].style.display = "none";
  }

  for (let i = 1; i < 10; i++) {
    if (i !== imgNum) {
      document.getElementById(`preview-img${i}`).style.display = "none";
      document.getElementById(`preview-img${imgNum}`).style.display = "flex";
    } else {
      imgDisplayed = imgNum;

      if (screenWidth > 1153) {
        document.getElementById(`preview-img${i}`).style.maxHeight = "500px";
        document.getElementById("about-section").style.marginTop = "150px";
      } else {
        document.getElementById(`preview-img${i}`).style.maxHeight = "45vw";
        document.getElementById("about-section").style.marginTop = "18vw";
      }
    }
  }
}


function completePreview() {
  let screenWidth3 = window.innerWidth;

  imgDisplayed = 0;

  for (let i = 0; i < 9; i++) {
    imgPaginationArr[i].style.display = "inline-block";
  }

  for (let i = 1; i < 10; i++) {
    document.getElementById(`preview-img${i}`).style.display = "flex";

    if (screenWidth3 > 1153) {
      document.getElementById(`preview-img${i}`).style.maxHeight = "150px";
      document.getElementById("about-section").style.marginTop = "75px";
    } else {
      document.getElementById(`preview-img${i}`).style.maxHeight = "14vw";
      document.getElementById("about-section").style.marginTop = "5vw";
    }
  }
}


function resizeImg() {
  let screenWidth2 = window.innerWidth;
  if ((screenWidth2 > 1153) && (imgDisplayed !== 0)) {
    document.getElementById(`preview-img${imgDisplayed}`).style.maxHeight = "500px";
    document.getElementById("about-section").style.marginTop = "150px";
  } else if ((screenWidth2 < 1153) && (imgDisplayed !== 0)) {
    document.getElementById(`preview-img${imgDisplayed}`).style.maxHeight = "45vw";
    document.getElementById("about-section").style.marginTop = "18vw";
  } else if ((screenWidth2 > 1153) && (imgDisplayed == 0)) {
    document.getElementById("about-section").style.marginTop = "75px";
    for (let i = 1; i < 10; i++) {
      document.getElementById(`preview-img${i}`).style.maxHeight = "150px";
    }
  } else if ((screenWidth2 < 1153) && (imgDisplayed == 0)) {
    document.getElementById("about-section").style.marginTop = "5vw";
    for (let i = 1; i < 10; i++) {
      document.getElementById(`preview-img${i}`).style.maxHeight = "14vw";
    }
  }
}


function qualitiesRoll() {

  const qualitiesArr = ["Keen", "Creative", "Professional", "Reliable", "Eye for details", "Verstatile", "Competent", "Meticulous"]

  document.getElementById("qualities-btn").innerText = qualitiesArr[btnPressedNum];

  btnPressedNum++;

  if (btnPressedNum === qualitiesArr.length) {
    btnPressedNum = 0;
  }

}