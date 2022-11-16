const arr = [];

function renderTable(){
  if(arr.length==0){
    document.getElementById("productTable").style.display = "none";
  }
  else{
  let text="<tr><th>Product Id</th><th>Product Name</th><th>Product Price</th><th>Quantity</th><th>Action</th></tr>";
  for(i=0;i<arr.length;i++)
  {
    text += "<tr><td>" + arr[i].id + "</td><td>" + arr[i].name + "</td><td>" + arr[i].price + "</td><td><button class='btnQuantityUpdate' onclick='updateQuantity(this,"+i+")'>-</button>"+arr[i].quantity+"<button class='btnQuantityUpdate' onclick='updateQuantity(this,"+i+")'>+</button></td><td><button class='btnDelete' onclick='deleteProduct("+i+")'>Delete</button></td></tr>";
  }
  document.getElementById("productTable").innerHTML = text;
}
}
function addProduct() {
  let formRef=document.getElementById("addProductDiv");
  const Fdata = new FormData(formRef);
  let formData={};
  for([key,val] of Fdata){Object.assign(formData,{[key]:val})}
  arr.push(formData)
  formRef.reset();
  renderTable();
}

function deleteProduct(index){
  arr.splice(index,1)
  renderTable();
}

function updateQuantity(event,index){
  if(event.innerText=="+"){
    arr[index].quantity++;
  }
  else if(event.innerText=="-"){
    arr[index].quantity--;
  }
  renderTable();
}
