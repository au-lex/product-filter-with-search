const allFilterBtns = document.querySelectorAll(".filter-btn");
const allFilterItems = document.querySelectorAll(".filter-item");


window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}


textSearch = document.querySelectorAll(".discount");
searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", filtertext);

function filtertext(e) {
    const text = e.target.value.toLowerCase();
    textSearch.forEach(function (prod) {
        const word = prod.firstChild.textContent;
        if (word.toLowerCase().indexOf(text) != -1) {
            prod.parentElement.parentElement.style.display = "block";
            
        }else {
            prod.parentElement.parentElement.style.display = "none";   
        }
        
    })
    
}