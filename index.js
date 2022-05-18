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
let dark = document.querySelector('.dark');
dark.addEventListener('click',()=>{
    document.body.classList.toggle('light')
})
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

let mes = github.created_at.slice(5,7)
let mensagem;
switch(mes) {
    case "01":
        mensagem ="Jan"
        break;
    case "02":
        mensagem ="Feb"
        break;
    case "03":
        mensagem ="Mar"
        break;
    case "04":
        mensagem ="Apr"
        break;
    case "05":
        mensagem ="May"
        break;
    case "06":
        mensagem ="June"
        break;
    case "07":
        mensagem ="Jul"
        break;
    case "08":
        mensagem ="Aug"
        break;
    case "09":
        mensagem ="Sept"
        break;
    case "10":
        mensagem ="Oct"
        break;
    case "11":
        mensagem = "Nov";
        break;
    case "12":
        mensagem = "Dec";
        break;
}
console.log(mes);
data.innerHTML = `Joined ${github.created_at.slice(8,10)} ${mensagem} ${github.created_at.slice(0,4)}`

if(inputValor.length <= 3){
    img.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU'
    }else{
        img.src= `${github.html_url}.png`
    }



if(bio.innerHTML === ""){
    bio.innerHTML= "This profile has no bio"
}
if(localization.innerHTML === ""){

    localization.innerHTML= "This profile has no localization"
}
if(twitter2.innerHTML == ""){
    twitter2.innerHTML = "not Avaliable"
    
    
}
        }else{
            alert('Usuario invalido')
        }
    }
