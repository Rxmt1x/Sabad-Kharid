const defaultProducts =[
{
  id:1,
  name:"تیشرت مشکی",
  price:650000,
  image:"../Images/T shirt/black T.jpg",
  color:"black",
  size:["M","L","XL"],
  stock:{ M:3, L:6, XL:7 },
  category:"tshirt"
},
{
  id:2,
  name:"تیشرت سفید",
  price:650000,
  image:"../Images/T shirt/white T.jpg",
  color:"white",
  size:["M","L","XL"],
  stock:{ M:5, L:4, XL:3 },
  category:"tshirt"
},
{
  id:3,
  name:"تیشرت آبی",
  price:700000,
  image:"../Images/T shirt/blue T.avif",
  color:"blue",
  size:["M","XL"],
  stock:{ M:10, XL:8 },
  category:"tshirt"
},
{
  id:4,
  name:"تیشرت مشکی",
  price:750000,
  image:"../Images/T shirt/black T5.avif",
  color:"black",
  size:["L","XL"],
  stock:{ L:12, XL:11 },
  category:"tshirt"
},
{
  id:5,
  name:"شلوار جین",
  price:1000000,
  image:"../Images/pants/blue jeans.webp",
  color:"blue",
  size:["S","M","L","XL"],
  stock:{ S:2, M:5, L:7, XL:1 },
  category:"pants"
},
{
  id:6,
  name:"شلوار طوسی",
  price:1000000,
  image:"../Images/pants/gray pants.jpg",
  color:"gray",
  size:["L"],
  stock:{ L:6 },
  category:"pants"
},
{
  id:7,
  name:"شلوار مشکی",
  price:1100000,
  image:"../Images/pants/black pants.webp",
  color:"black",
  size:["M","L"],
  stock:{ M:4, L:3 },
  category:"pants"
},
{
  id:8,
  name:"هودی مشکی",
  price:900000,
  image:"../Images/hoodie/black hoodie.webp",
  color:"black",
  size:["M","L","XL"],
  stock:{ M:4, L:7, XL:6 },
  category:"hoodie"
},
{
  id:9,
  name:"هودی سفید",
  price:850000,
  image:"../Images/hoodie/white hoodie.webp",
  color:"white",
  size:["M","XL"],
  stock:{ M:3, XL:3 },
  category:"hoodie"
},
{
  id:10,
  name:"هودی طوسی",
  price:900000,
  image:"../Images/hoodie/gray hoodie.webp",
  color:"gray",
  size:["L","XL"],
  stock:{ L:7, XL:6 },
  category:"hoodie"
},
{
  id:11,
  name:"هودی سبز",
  price:800000,
  image:"../Images/hoodie/green hoodie.jpg",
  color:"green",
  size:["M","L","XL"],
  stock:{ M:4, L:5, XL:4 },
  category:"hoodie"
},
{
  id:12,
  name:"بوت چرم مشکی",
  price:14500000,
  image:"../Images/shoes/black leather boots.webp",
  color:"black",
  size:["L","XL"],
  stock:{ L:2, XL:1 },
  category:"shoes"
},
{
  id:13,
  name:"کتونی مشکی",
  price:7500000,
  image:"../Images/shoes/black Js.avif",
  color:"black",
  size:["S","M","L"],
  stock:{ S:3, M:3, L:2 },
  category:"shoes"
},
{
  id:14,
  name:"کتونی سفید",
  price:7000000,
  image:"../Images/shoes/white Js.webp",
  color:"white",
  size:["S","M","L","XL"],
  stock:{ S:2, M:3, L:2, XL:1 },
  category:"shoes"
},
{
  id:15,
  name:"تیشرت مشکی",
  price:800000,
  image:"../Images/T shirt/black T2.webp",
  color:"black",
  size:["M","L","XL"],
  stock:{ M:3, L:6, XL:2 },
  category:"tshirt"
},
{
  id:16,
  name:"تیشرت مشکی",
  price:800000,
  image:"../Images/T shirt/black T3.jpeg",
  color:"black",
  size:["M","L","XL"],
  stock:{ M:7, L:5, XL:3 },
  category:"tshirt"
},
{
  id:17,
  name:"تیشرت مشکی",
  price:800000,
  image:"../Images/T shirt/black T4.jpg",
  color:"black",
  size:["M","L","XL"],
  stock:{ M:10, L:12, XL:9 },
  category:"tshirt"
},
{
  id:18,
  name:"تیشرت سفید",
  price:700000,
  image:"../Images/T shirt/white T2.jpg",
  color:"white",
  size:["M","L","XL"],
  stock:{ M:4, L:6, XL:3 },
  category:"tshirt"
},
{
  id:19,
  name:"تیشرت سفید",
  price:700000,
  image:"../Images/T shirt/white T3.jpg",
  color:"white",
  size:["L","XL"],
  stock:{ L:5, XL:5 },
  category:"tshirt"
},
{
  id:20,
  name:"تیشرت سفید",
  price:700000,
  image:"../Images/T shirt/white T4.jpg",
  color:"white",
  size:["M","L","XL"],
  stock:{ M:2, L:3, XL:2 },
  category:"tshirt"
},
{
  id:21,
  name:"تیشرت طوسی",
  price:750000,
  image:"../Images/T shirt/gray T.jpg",
  color:"gray",
  size:["M","L","XL"],
  stock:{ M:7, L:6, XL:4 },
  category:"tshirt"
},
{
  id:22,
  name:"تیشرت طوسی",
  price:750000,
  image:"../Images/T shirt/gray T2.jpg",
  color:"gray",
  size:["M","L","XL"],
  stock:{ M:2, L:4, XL:5 },
  category:"tshirt"
},
{
  id:23,
  name:"تیشرت طوسی",
  price:750000,
  image:"../Images/T shirt/gray T3.jpg",
  color:"gray",
  size:["M","L","XL"],
  stock:{ M:2, L:6, XL:6 },
  category:"tshirt"
},
{
  id:24,
  name:"تیشرت آبی",
  price:650000,
  image:"../Images/T shirt/blue T2.png",
  color:"blue",
  size:["M","L"],
  stock:{ M:3, L:2 },
  category:"tshirt"
},
{
  id:25,
  name:"تیشرت آبی",
  price:650000,
  image:"../Images/T shirt/blue T3.jpg",
  color:"blue",
  size:["M","L","XL"],
  stock:{ M:5, L:5, XL:5 },
  category:"tshirt"
},
{
  id:26,
  name:"شلوار مشکی",
  price:1100000,
  image:"../Images/pants/black pants2.webp",
  color:"black",
  size:["S","M","L"],
  stock:{ S:1, M:5, L:2 },
  category:"pants"
},
{
  id:27,
  name:"شلوار مشکی",
  price:1100000,
  image:"../Images/pants/black pants3.jpeg",
  color:"black",
  size:["S","M","L"],
  stock:{ S:3, M:3, L:2 },
  category:"pants"
},
{
  id:28,
  name:"شلوار طوسی",
  price:1000000,
  image:"../Images/pants/gray pants2.jpg",
  color:"gray",
  size:["L","XL"],
  stock:{ L:3, XL:6 },
  category:"pants"
},
{
  id:29,
  name:"شلوار طوسی",
  price:1000000,
  image:"../Images/pants/gray pants3.webp",
  color:"gray",
  size:["M","L"],
  stock:{ M:5, L:3 },
  category:"pants"
},
{
  id:30,
  name:"شلوار جین",
  price:1000000,
  image:"../Images/pants/blue jeans2.jpg",
  color:"blue",
  size:["S","M","XL"],
  stock:{ S:2, M:5, XL:1 },
  category:"pants"
},
{
  id:31,
  name:"شلوار جین",
  price:1000000,
  image:"../Images/pants/blue jeans 3.webp",
  color:"blue",
  size:["S","M","L"],
  stock:{ S:4, M:2, L:2 },
  category:"pants"
},

{
  id:32,
  name:"هودی مشکی",
  price:900000,
  image:"../Images/hoodie/black hoodie2.jpeg",
  color:"black",
  size:["S","M","L","XL"],
  stock:{ S:2, M:2, L:2, XL:2 },
  category:"hoodie"
},
{
  id:33,
  name:"هودی مشکی",
  price:900000,
  image:"../Images/hoodie/black hoodie3.jpg",
  color:"black",
  size:["S","M","L","XL"],
  stock:{ S:3, M:4, L:4, XL:2 },
  category:"hoodie"
},
{
  id:34,
  name:"هودی مشکی",
  price:900000,
  image:"../Images/hoodie/black hoodie4.jpeg",
  color:"black",
  size:["S","M","XL"],
  stock:{ S:4, M:4, XL:6 },
  category:"hoodie"
},
{
  id:35,
  name:"هودی سفید",
  price:850000,
  image:"../Images/hoodie/white hoodie2.webp",
  color:"white",
  size:["L","XL"],
  stock:{ L:5, XL:4 },
  category:"hoodie"
},
{
  id:36,
  name:"هودی سفید",
  price:850000,
  image:"../Images/hoodie/white hoodie3.jpg",
  color:"white",
  size:["M","L","XL"],
  stock:{ M:2, L:2, XL:2 },
  category:"hoodie"
},
{
  id:37,
  name:"هودی سفید",
  price:850000,
  image:"../Images/hoodie/white hoodie4.jpg",
  color:"white",
  size:["S","L","XL"],
  stock:{ S:2, L:2, XL:5 },
  category:"hoodie"
},
{
  id:38,
  name:"هودی طوسی",
  price:700000,
  image:"../Images/hoodie/gray hoodie2.jpeg",
  color:"gray",
  size:["S","M","L","XL"],
  stock:{ S:4, M:3, L:2, XL:4 },
  category:"hoodie"
},
{
  id:39,
  name:"هودی طوسی",
  price:700000,
  image:"../Images/hoodie/gray hoodie3.jpg",
  color:"gray",
  size:["S","M","L","XL"],
  stock:{ S:1, M:2, L:4, XL:5 },
  category:"hoodie"
},
{
  id:40,
  name:"هودی سبز",
  price:700000,
  image:"../Images/hoodie/green hoodie2.jpg",
  color:"green",
  size:["S","M","L","XL"],
  stock:{ S:3, M:4, L:2, XL:2 },
  category:"hoodie"
},
{
  id:41,
  name:"هودی سبز",
  price:700000,
  image:"../Images/hoodie/green hoodie3.jpg",
  color:"green",
  size:["S","M","L"],
  stock:{ S:3, M:2, L:2 },
  category:"hoodie"
},
{
  id:42,
  name:"هودی سبز",
  price:700000,
  image:"../Images/hoodie/green hoodie4.jpeg",
  color:"green",
  size:["S","M","L","XL"],
  stock:{ S:2, M:2, L:3, XL:1 },
  category:"hoodie"
},
{
  id:43,
  name:"بوت چرم سفید",
  price:12000000,
  image:"../Images/shoes/white leather boot.jpg",
  color:"white",
  size:["M","L"],
  stock:{ M:1, L:2 },
  category:"shoes"
},
{
  id:44,
  name:"کتونی سفید",
  price:7000000,
  image:"../Images/shoes/white Js2.jpg",
  color:"white",
  size:["M","L","XL"],
  stock:{ M:1, L:3, XL:1 },
  category:"shoes"
},
{
  id:45,
  name:"کتونی سفید",
  price:7000000,
  image:"../Images/shoes/white Js3.png",
  color:"white",
  size:["S","M","L"],
  stock:{ S:2, M:1, L:1 },
  category:"shoes"
},
{
  id:46,
  name:"کتونی مشکی",
  price:7500000,
  image:"../Images/shoes/black Js2.jpg",
  color:"black",
  size:["S","M","L","XL"],
  stock:{ S:1, M:1, L:2, XL:4 },
  category:"shoes"
},
{
  id:47,
  name:"کتونی مشکی",
  price:7500000,
  image:"../Images/shoes/black Js3.jpg",
  color:"black",
  size:["S","L","XL"],
  stock:{ S:1, L:1, XL:1 },
  category:"shoes"
},
{
  id:48,
  name:"کتونی مشکی",
  price:7500000,
  image:"../Images/shoes/black Js4.jpg",
  color:"black",
  size:["M","L","XL"],
  stock:{ M:2, L:2, XL:1 },
  category:"shoes"
},
{
  id:49,
  name:"کتونی سفید",
  price:7000000,
  image:"../Images/shoes/white Js4.avif",
  color:"white",
  size:["M","L","XL"],
  stock:{ M:2, L:2, XL:2 },
  category:"shoes"
},
];
// === LIVE DATA (this one changes) ===
let products = (() => {
  const saved = localStorage.getItem('shopStock');
  return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(defaultProducts));
})();

// Save function — call this whenever stock changes
function saveStock() {
  localStorage.setItem('shopStock', JSON.stringify(products));
}