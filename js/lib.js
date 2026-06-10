/*Viết mã javacript*/
// Khai báo 1 đối tượng lưu thông tin sản phẩm
const products=[
    {
name:"Ấu trùng tinh nghịch",
price:36,
description:"Đây là một bộ phim hoạt hình được trẻ em yêu thích...",
image:"../assets/images/autrungtn.webp",
link:"chi-tiet.html"
},

{
name:"Ấu trùng tinh nghịch",
price:67,
description:"Đây là một bộ phim hoạt hình được trẻ em yêu thích...",
image:"../assets/images/autrung.jpg",
link:"chi-tiet.html"
},

{
name:"Ấu trùng",
price:26,
description:"Đây là một bộ phim hoạt hình được trẻ em yêu thích...",
image:"../assets/images/attn.webp",
link:"chi-tiet.html"
},

{
name:"Ấu trùng",
price:18,
description:"Đây là một bộ phim hoạt hình được trẻ em yêu thích...",
image:"../assets/images/autrungtinhnghich.jpg",
link:"chi-tiet.html"
}
];

function createItem(obj)
{
 // Xác định khung chứa product-list
            const listProducts = document.getElementById("product-list"); // tác động đến thẻ <div> có id = "product-list"

            // Tạo 1 container có class = "item"
            const item = document.createElement("div"); 
            item.setAttribute("class", "item");
            item.style.backgroundColor= "rgba(92, 90, 209, 0.2)"; // <div class = "item"></div>

            // Tạo 2 khung chứa Hình ảnh và Thông tin

            // Tạo 1 container chứa hình ảnh có class ="image" ==> chỉ có 1 con là <img>
            const containerImage = document.createElement("div"); 
            containerImage.setAttribute("class", "image"); // <div class = "image"></div>

            // Tạo ảnh
            const img = document.createElement("img");
            img.setAttribute("src", obj.image);
            img.setAttribute("alt", obj.name);
            img.setAttribute("style", "width:150%; max-width:100px");
            img.setAttribute("class","card-img-top rounded-circle");

            // Đưa hình ảnh vào khung
            containerImage.appendChild(img);

            // Tạo 1 container chứa thông tin sản phẩm có class = "info" ==> có 3 <p> và 1 <a>
            const containerInfo = document.createElement("div"); // <div></div>
            containerInfo.setAttribute("class", "info"); // <div class = "info"></div>
            
            // Tạo <p> tên sản phẩm
            const nameProduct = document.createElement("p");
            nameProduct.innerHTML = obj.name;

            // Tạo <p> chứa giá sản phẩm
            const price = document.createElement("p");
            price.innerHTML = obj.price + "/1 bức";

            // Tạo <p> chứa mô tả sản phẩm
            const description = document.createElement("p");
            description.innerHTML = obj.description;

            // Tạo <a> chứa liên kết
            const linkProduct = document.createElement("a");
            linkProduct.innerHTML = "Xem chi tiết";
            linkProduct.setAttribute("href", obj.link); // Sửa sau
            linkProduct.setAttribute("class", "btn btn-info");

            // Gắn 4 con vào khung Info
            containerInfo.appendChild(nameProduct);
            containerInfo.appendChild(price);
            containerInfo.appendChild(description);
            containerInfo.appendChild(linkProduct);

            // Thêm khung chứa image và info vào item
            item.appendChild(containerImage); 
            item.appendChild(containerInfo); 

            // Thêm item vào list product
            listProducts.appendChild(item);
}            
function loadAllProducts(objArray)
{
    let i;
    for(i = 0; i<objArray.length; i++)
    {
        createItem(objArray[i]);
    }    
}    