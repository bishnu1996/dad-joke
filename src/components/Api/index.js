export async function getData(){
    const config = {
        headers :{
            accept:'application/json',
        }
    }
    const res =await fetch('https://icanhazdadjoke.com',config);
    const data =await res.json();
    return data.joke;
}