const arr = [];
let indexEdit=-1;
function renderTable(){
  if(arr.length==0){
    document.getElementById("productTable").style.display = "none";
  }
  else{
  let text="<tr><th>Product Id</th><th>Product Name</th><th>Product Price</th><th>Actions</th></tr>";
  for(i=0;i<arr.length;i++)
  {
    text += "<tr><td>" + arr[i].id + "</td><td>" + arr[i].name + "</td><td>" + arr[i].price + "</td><td><button class='btnEditDelete' onclick='editProduct("+i+")'>Edit</button><button class='btnEditDelete' onclick='deleteProduct("+i+")'>Delete</button></td></tr>";
  }
  document.getElementById("productTable").innerHTML = text;
}
}
function addUpdateProduct(event) {
  if(event.innerText=="ADD PRODUCT"){
     arr.push({
      id: document.getElementById("idInput").value,
      name: document.getElementById("nameInput").value,
      price: document.getElementById("priceInput").value,
    });
  }
  else if(event.innerText=="UPDATE PRODUCT"){
  arr[indexEdit].id = document.getElementById("idInput").value 
  arr[indexEdit].name = document.getElementById("nameInput").value 
  arr[indexEdit].price = document.getElementById("priceInput").value 
  event.innerText="ADD PRODUCT"
  } 
  document.getElementById("idInput").value = '';
  document.getElementById("nameInput").value = '';
  document.getElementById("priceInput").value = '';
  renderTable();
}

function deleteProduct(index){
  arr.splice(index,1)
  renderTable();
}

function editProduct(index){
  document.getElementById("idInput").value = arr[index].id;
  document.getElementById("nameInput").value = arr[index].name;
  document.getElementById("priceInput").value = arr[index].price;
  indexEdit=index;
  document.getElementById("btnAddProduct").innerText="UPDATE PRODUCT"
}