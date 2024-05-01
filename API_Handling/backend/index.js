import express from 'express';


const app=express();



app.get('/api/products',(req, res)=>{
    const products=[
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image:'https://cdn.pixabay.com/photo/2016/04/01/12/08/table-1300555_1280.png'
    
    
        },
        {
            id: 2,
            name: ' wooden',
            price: 250,
            image:'https://media.istockphoto.com/id/900257448/photo/wooden-round-table.jpg?s=612x612&w=0&k=20&c=xW86GqjC8IMqoWtAlCejOSuGlR7_YrM8jlBdufCro7Q='
          },
        {
            id: 3,
            name: 'hi',
            price: 700,
            image:'https://thumbs.dreamstime.com/b/brown-wood-dining-table-dark-living-room-32662902.jpg'
         },
         {
            id: 4,
            name: 'bye',
            price: 200,
            image:'https://hipercentrodomovel.pt/3521-large_default/dining-table-ext-ref-684a07-407.jpg'
        },
        {
            id: 5,
            name: 'diptamoy',
            price: 200,
            image:'https://hipercentrodomovel.pt/3521-large_default/dining-table-ext-ref-684a07-407.jpg'
        }
     ]

   

     //http://localhost:3000/api/products?search=metal  here ?-->query parameter

      if(req.query.search){
       const filterProducts= products.filter(product=> product.name.includes(req.query.search));  //filtering the products, if the search query is present in the product name then it will return the product otherwise not
       res.end(filterProducts) //sending the filtered products to the frontend
       return;
      }




    //  res.send(products);  //sending the products to the frontend
    setTimeout(()=>{
        res.send(products);
     },3000);


})



const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})