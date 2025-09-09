
// card 1

document.getElementById("complete-btn1").addEventListener('click', function () {
    alert("Board Update Succesfully")

    const assigndnumber = document.getElementById("task-assigned-number");
    const convertedAssignedNumber = parseInt(assigndnumber.innerText);
    assigndnumber.innerText = convertedAssignedNumber - 1;

    const mainnumber = document.getElementById("main-number");
    const convertedMainnumber = parseInt(mainnumber.innerText);
    mainnumber.innerText = convertedMainnumber + 1;



    const container = document.getElementById("history-box")
    const p = document.createElement('p')
    const title = document.getElementById("card1-title").innerText;
    const time = new Date().toLocaleTimeString();

    p.innerText = `
    You have Complete The Task ${title} at ${time}
    `
    container.appendChild(p)

    p.classList.add("bg-[#F4F7FF]")
    p.classList.add("px-2")
    p.classList.add("m-2")
    p.classList.add("pb-2")
    p.classList.add("rounded-lg")
    p.classList.add("mb-3")

    this.textContent = "Completed";
    this.classList.add("after-complete-btn-click")
    this.disabled = true;
    

})

// function myFunction() {
//   document.getElementById("complete-btn1").style.disabled = true;
// }


// card 2

document.getElementById("complete-btn2").addEventListener('click', function () {
    alert("Board Update Succesfully")

    const assigndnumber = document.getElementById("task-assigned-number");
    const convertedAssignedNumber = parseInt(assigndnumber.innerText);
    assigndnumber.innerText = convertedAssignedNumber - 1;

    const mainnumber = document.getElementById("main-number");
    const convertedMainnumber = parseInt(mainnumber.innerText);
    mainnumber.innerText = convertedMainnumber + 1;



    const container = document.getElementById("history-box")
    const p = document.createElement('p')
    const title = document.getElementById("card2-title").innerText;
    const time = new Date().toLocaleTimeString();

    p.innerText = `
    You have Complete The Task ${title} at ${time}
    `
    container.appendChild(p)

    p.classList.add("bg-[#F4F7FF]")
    p.classList.add("px-2")
    p.classList.add("m-2")
    p.classList.add("pb-2")
    p.classList.add("rounded-lg")
    p.classList.add("mb-3")

    this.textContent = "Completed";
    this.classList.add("after-complete-btn-click")
    this.disabled = true;
})

// card 3

document.getElementById("complete-btn3").addEventListener('click', function () {
    alert("Board Update Succesfully")

    const assigndnumber = document.getElementById("task-assigned-number");
    const convertedAssignedNumber = parseInt(assigndnumber.innerText);
    assigndnumber.innerText = convertedAssignedNumber - 1;

    const mainnumber = document.getElementById("main-number");
    const convertedMainnumber = parseInt(mainnumber.innerText);
    mainnumber.innerText = convertedMainnumber + 1;



    const container = document.getElementById("history-box")
    const p = document.createElement('p')
    const title = document.getElementById("card3-title").innerText;
    const time = new Date().toLocaleTimeString();

    p.innerText = `
    You have Complete The Task ${title} at ${time}
    `
    container.appendChild(p)

    p.classList.add("bg-[#F4F7FF]")
    p.classList.add("px-2")
    p.classList.add("m-2")
    p.classList.add("pb-2")
    p.classList.add("rounded-lg")
    p.classList.add("mb-3")

    this.textContent = "Completed";
    this.classList.add("after-complete-btn-click")
    this.disabled = true;
})

// card 4

document.getElementById("complete-btn4").addEventListener('click', function () {
    alert("Board Update Succesfully")

    const assigndnumber = document.getElementById("task-assigned-number");
    const convertedAssignedNumber = parseInt(assigndnumber.innerText);
    assigndnumber.innerText = convertedAssignedNumber - 1;

    const mainnumber = document.getElementById("main-number");
    const convertedMainnumber = parseInt(mainnumber.innerText);
    mainnumber.innerText = convertedMainnumber + 1;



    const container = document.getElementById("history-box")
    const p = document.createElement('p')
    const title = document.getElementById("card4-title").innerText;
    const time = new Date().toLocaleTimeString();

    p.innerText = `
    You have Complete The Task ${title} at ${time}
    `
    container.appendChild(p)

    p.classList.add("bg-[#F4F7FF]")
    p.classList.add("px-2")
    p.classList.add("m-2")
    p.classList.add("pb-2")
    p.classList.add("rounded-lg")
    p.classList.add("mb-3")

    this.textContent = "Completed";
    this.classList.add("after-complete-btn-click")
    this.disabled = true;
})

// card 5

document.getElementById("complete-btn5").addEventListener('click', function () {
    alert("Board Update Succesfully")

    const assigndnumber = document.getElementById("task-assigned-number");
    const convertedAssignedNumber = parseInt(assigndnumber.innerText);
    assigndnumber.innerText = convertedAssignedNumber - 1;

    const mainnumber = document.getElementById("main-number");
    const convertedMainnumber = parseInt(mainnumber.innerText);
    mainnumber.innerText = convertedMainnumber + 1;



    const container = document.getElementById("history-box")
    const p = document.createElement('p')
    const title = document.getElementById("card5-title").innerText;
    const time = new Date().toLocaleTimeString();

    p.innerText = `
    You have Complete The Task ${title} at ${time}
    `
    container.appendChild(p)

    p.classList.add("bg-[#F4F7FF]")
    p.classList.add("px-2")
    p.classList.add("m-2")
    p.classList.add("pb-2")
    p.classList.add("rounded-lg")
    p.classList.add("mb-3")

    this.textContent = "Completed";
    this.classList.add("after-complete-btn-click")
    this.disabled = true;
})

// card 6

document.getElementById("complete-btn6").addEventListener('click', function () {
    alert("Board Update Succesfully")
    alert("congrates!!! You have completed all the current task")

    const assigndnumber = document.getElementById("task-assigned-number");
    const convertedAssignedNumber = parseInt(assigndnumber.innerText);
    assigndnumber.innerText = convertedAssignedNumber - 1;

    const mainnumber = document.getElementById("main-number");
    const convertedMainnumber = parseInt(mainnumber.innerText);
    mainnumber.innerText = convertedMainnumber + 1;



    const container = document.getElementById("history-box")
    const p = document.createElement('p')
    const title = document.getElementById("card6-title").innerText;
    const time = new Date().toLocaleTimeString();

    p.innerText = `
    You have Complete The Task ${title} at ${time}
    `
    container.appendChild(p)

    p.classList.add("bg-[#F4F7FF]")
    p.classList.add("px-2")
    p.classList.add("m-2")
    p.classList.add("pb-2")
    p.classList.add("rounded-lg")
    p.classList.add("mb-3")

    this.textContent = "Completed";
    this.classList.add("after-complete-btn-click")
    this.disabled = true;
})


document.getElementById("histry-btn").addEventListener('click', function () {
    document.getElementById("history-box").innerHTML = "";

})

