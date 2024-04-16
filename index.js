let currentCount = 0;
let oldCount;

document.getElementById("decrease").onclick = function () {

  currentCount = currentCount - 1;
  document.getElementById("counter").textContent = currentCount;

};


document.getElementById("increase").onclick = function () {

    currentCount = currentCount + 1;
    document.getElementById("counter").textContent = currentCount;

  };
  
  document.getElementById("reset").onclick = function () {
    currentCount = 0;
    document.getElementById("counter").textContent = currentCount;

  };
  