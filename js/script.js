
const dynamicTime = new Date();
const weekDay = dynamicTime.toLocaleDateString("en-US", {weekday: "short"});

document.getElementById("weekDay").innerText = weekDay + ',';

const dateTime = dynamicTime.toLocaleDateString("en-US", {month: "short", day: "2-digit", year: "numeric"});
document.getElementById("localTime").innerText = dateTime;


const time = dynamicTime.toLocaleTimeString("en-US", {hour12: true})


const addHistory = document.getElementById("history");



let taskCountElement = document.getElementById("task");
let taskCount = parseInt(taskCountElement.innerText);
let completeBtn = document.querySelectorAll(".comBtn");

const navTaskCount = document.getElementById("count");
let convertedNavTask = parseInt(navTaskCount.innerText);


let btnLength = completeBtn.length;
taskCountElement.innerText = btnLength;


for (const comBtn of completeBtn) {
    comBtn.addEventListener("click", function (event) {
        alert("Board updated Successfully");
        const target = event.target;
        target.classList.remove("bg-[#3752FD]");
        target.classList.add("bg-gray-200");
        target.setAttribute("disabled", true);

        btnLength--; // dicresse assign task
        taskCountElement.innerText = btnLength;


        convertedNavTask++; //Increse nav task 
        navTaskCount.innerText = convertedNavTask;

        if (btnLength === 0) {
            alert("Congrates!!! You have completed all the currnt task");
        }

        const titles = this.parentElement.parentElement.querySelector(".title").innerText;

        console.log(titles)
        const div = `<h1 class="bg-gray-200 rounded-xl p-3">You have Complete The Task ${titles} at ${time}</h1>`

        addHistory.innerHTML += div;

    })
}


document.getElementById("clear").addEventListener("click",function(){
    addHistory.innerText = "";

})


document.getElementById("anotherPage").addEventListener("click", function(){
    window.location.href = "blogs.html";
})



document.getElementById("themeBtn").addEventListener("click",function(){
    const random = "#"+Math.random().toString(16).slice(2,8);
    document.getElementById("body").style.backgroundColor = ""
    document.getElementById("body").style.backgroundColor = random
})




