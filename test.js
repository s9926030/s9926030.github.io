fetch("items.json")
.then(function(response){
    return response.json();
})

.then(function(items){
    let pl = document.querySelector("#myTable");
    let out="";
    for(let item of items){
        out +=`<tr>
        <td>${item.id}</td>
        <td><img src='${item.image}'></td>
        <td>${item.name}</td>
        <td>${item.class}</td>
        <td>${item.gender}</td>
    </tr>`;
    }
    pl.innerHTML = out;
})
/*buildTable(items)
function buildTable(data) {
    var table = document.getElementById('myTable')
    for (var i = 0; i < data.length; i++) {
        var row =
        `<tr>
            <td>${data[i].id}</td>
            <td><img src='${data[i].image}'></td>
            <td>${data[i].name}</td>
            <td>${data[i].class}</td>
            <td>${data[i].gender}</td>
        </tr>`
        table.innerHTML += row
    }
}*/