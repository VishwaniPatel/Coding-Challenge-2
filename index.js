//Array of given data
const activities = [
    { item: "Skippy Peanut Butter 160z", date: "07 Nov, 8:35pm", type: "Discarded", cost: "$40.27", last: "18 Aug", list: "Grocery", auto: "No", buy: "N/A"},
    { item: "Skippy Peanut Butter 160z", date: "08 Nov, 8:35pm", type: "Want", cost: "$76.50", last: "17 Aug", list: "August", auto: "No", buy: "N/A"},
    { item: "Skippy Peanut Butter 160z", date: "09 Nov, 8:35pm", type: "Waiting", cost: "$47.85", last: "22 Aug", list: "Wholefood", auto: "No", buy: "N/A"},
    { item: "Skippy Peanut Butter 160z", date: "10 Nov, 8:35pm", type: "Discarded", cost: "$27.43", last: "26 Aug", list: "Grocery", auto: "No", buy: "N/A"},
    { item: "Skippy Peanut Butter 160z", date: "11 Nov, 8:35pm", type: "Cancelled", cost: "$35.02", last: "20 Aug", list: "August", auto: "No", buy: "N/A"},
    { item: "Skippy Peanut Butter 160z", date: "12 Nov, 8:35pm", type: "Want", cost: "$32.85", last: "11 Aug", list: "August", auto: "No", buy: "N/A"},
    { item: "Skippy Peanut Butter 160z", date: "13 Nov, 8:35pm", type: "Want", cost: "$58.99", last: "23 Aug", list: "Wholefood", auto: "No", buy: "N/A"},
    { item: "Skippy Peanut Butter 160z", date: "14 Nov, 8:35pm", type: "Want", cost: "$63.44", last: "22 Aug", list: "Grocery", auto: "No", buy: "N/A"}
]

const tdata = document.getElementById("table-data");

function addData(activity) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            activities.push(activity);
            console.log("Data added");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 3000)
    })
}

function getData(){
        for (var i = 0; i < activities.length; i++) {
            var r = `<tr>
        <td>${activities[i].item}</td>
        <td>${activities[i].date}</td>
        <td>${activities[i].type}</td>
        <td>${activities[i].cost}</td>
        <td>${activities[i].last}</td>
        <td>${activities[i].list}</td>
        <td>${activities[i].auto}</td>
        <td>${activities[i].buy}</td>
        </tr>`
            tdata.innerHTML += r;
        }
    }

addData().then(function () {
    getData();
}).catch(function () {
    console.log("Error");
});


// Search according to type
const searchbar = document.getElementById("searchBar");
function search(){
    //Display searchbar on click of filter button
    searchbar.classList.remove("d-none");
    var inp = document.getElementById("searchBar");
    var searchip = inp.value.toUpperCase();
    const tr = tdata.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[2];
        var txt = td.innerText;
        console.log(txt.toUpperCase().indexOf(searchip));
        if (txt.toUpperCase().indexOf(searchip) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}