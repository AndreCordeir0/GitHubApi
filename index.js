let input =document.querySelector('#input-text');
let button =document.querySelector('#submit');
let former =document.querySelector('#form');
let nickMaior =document.querySelector('#nickMaior');
let nickMenor =document.querySelector('#nickMenor');
let bio =document.querySelector('#bio');
let data =document.querySelector('#data-de-entrada');
let repositorio =document.querySelector('#repositorio');
let followers =document.querySelector('#followers');
let following =document.querySelector('#following');
let localization =document.querySelector('#localization');
let link =document.querySelector('#link');
let twitter =document.querySelector('#twitter');
let twitter2 =document.querySelector('.twitter');
let img =document.querySelector('#img');


former.addEventListener('submit',(event)=>{
event.preventDefault();

inputValor = input.value.trim();

 pegarDados(inputValor)
})
let statusDaApi;
async function pegarDados(nome){
    try{
        let dados = await fetch(`https://api.github.com/users/${nome}`)
        .then(res=>{
            // console.log(res.status);
            statusDaApi = res.status
           return res.json()
        })
        transfereDados(dados)
        console.log(dados.statusCode);
       
        
    }catch(err){
        console.error(err)
        alert("Usuario invalido")
    }
   
}
function transfereDados(github){

   
        if(statusDaApi ===200){

        
    
nickMaior.innerHTML= github.login
nickMenor.innerHTML= github.name
bio.innerHTML= github.bio

repositorio.innerHTML= github.public_repos
localization.innerHTML= github.location
followers.innerHTML= github.followers
following.innerHTML= github.following
link.innerHTML= github.html_url
twitter2.innerHTML= github.twitter_username
data.innerHTML = `Joined ${github.created_at.slice(0,10)}`
console.log("oi"+data.innerHTML);
img.src= `${github.html_url}.png`
console.log(twitter.innerHTML);

if(bio.innerHTML === ""){
    bio.innerHTML= "This profile has no bio"
}
if(twitter2.innerHTML == ""){
    twitter2.innerHTML = "not Avaliable"
    
    
}
        }else{
            alert('Usuario invalido')
        }
    }
