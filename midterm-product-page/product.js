var products = []
$(document).ready(function() {
    console.log("Gamestop at your service")
    $.ajax({
        url: "data.json",
    }).done(function (data) {
        
        for(let d in data) {
            products.push(data[d])
        }
    });
});


function addProduct() {
    let newName = (document.getElementById("exampleFormControlInput1")).value
    console.log(newName)

    let newProduct = {
        item: $('#exampleFormControlInput1 option:selected').text(),
        priceperunit: $('#exampleFormControlInput2').val(),
        Quantity: $('#exampleFormControlInput3').val(),
        Discount: $('#exampleFormControlInput4').val()
    }

    products.push(newProduct)
    loadData()
}

function deleteProduct(index) {
    console.log("Delete " + index)
    delete products[index]

    $('#tableBody').html("")
    loadData()
}

function clearData() {
    if (!confirm("Press this button and you lose all the products listed below. Press it.")) {
        return;
      }
    $('#tableBody').html("")
    for (let p in products) {
        delete products[p]
    }
    console.log("Data cleared up")

    $("#Total_Discount").html(0)
    $("#Total").html(0)
    $("#Vat").html(0)
    $("#Net").html(0)
}
