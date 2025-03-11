//   console.dir(window.location.search.split("?name=%20")[1]);
const url=new URL(window.location.href)
const name=url.searchParams.get('name')
console.log(name);

//Display Name on UI
  const greeterEl=document.querySelector("#greeter")
if(name){
    greeterEl.textContent=name

}
else{
    location.href="http://127.0.0.1:5500/index.html"
}