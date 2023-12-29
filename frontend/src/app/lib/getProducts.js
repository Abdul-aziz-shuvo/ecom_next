export async function getProducts() {
   
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'api/products')
    const products = await res.json();
    console.log(products);
    return products
   
   
  }