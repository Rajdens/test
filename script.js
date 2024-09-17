let color = document.querySelector(".check");
let verify = document.querySelector(".verify");

verify.addEventListener("click", ()=> {
    color.innerHTML = "ZWERYFIKOWANY";
    color.style.color = "#00ff00";
})