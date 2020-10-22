export const fetchData = async () => {
    try{ 
        const response = await fetch("https://petstore.swagger.io/v2/store/order/2");
        const data = await response.json();
        console.log(data);
        return data;
    }catch(e){
        console.log(e);
    }    
}