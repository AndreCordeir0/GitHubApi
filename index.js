import { convertDateToText } from './utils/converte-data.js';

let input =document.querySelector('#input-text');
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
let twitter =document.querySelector('.twitter');
let img =document.querySelector('#img');
let dark = document.querySelector('.dark');

const _GITAPI = 'https://api.github.com/users';
const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;

let usernameInput; 
let statusDaApi;

dark.addEventListener('click',()=>{
    document.body.classList.toggle('light')
})

former.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(!input.value){
        alert('É necessário informar um usuário')
        return;
    }
    usernameInput = input.value.trim();
    buscarDadosGitHub(usernameInput)
})

/**
 * @param username username do campo input
**/
async function buscarDadosGitHub(username){
    try{
        let gitResponse = await fetch(`${_GITAPI}/${username}`)
        .then(res=>{
            statusDaApi = res.status;
            return res.json();
        })
        transformarDados(gitResponse)       
    }catch(err){
        console.error(err);
        alert("Usuario invalido");
    }
}
/**
 * @param github Resposta da API do github ao buscar username
**/
function transformarDados(github){

    if(statusDaApi === STATUS_OK){
        nickMaior.innerHTML= github.login;
        nickMenor.innerHTML= github.name;
        bio.innerHTML= github.bio;

        repositorio.innerHTML= github.public_repos;
        localization.innerHTML= github.location;
        followers.innerHTML= github.followers;
        following.innerHTML= github.following;
        link.innerHTML= github.html_url;
        twitter.innerHTML= github.twitter_username;

        let mes = github.created_at.slice(5,7);
        let dataConvertida = convertDateToText(mes);
        data.innerHTML = `Joined ${github.created_at.slice(8,10)} ${dataConvertida} ${github.created_at.slice(0,4)}`;
        if(usernameInput.length > 3){
            img.src= `${github.html_url}.png`;
        }
        if(!bio.innerHTML){
            bio.innerHTML= "This profile has no bio";
        }
        if(!localization.innerHTML){
            localization.innerHTML= "This profile has no localization";
        }
        if(!twitter.innerHTML){
            twitter.innerHTML = "not Avaliable";
        }
    }else if(statusDaApi == STATUS_NOT_FOUND){
        alert('Esse usuario não existe!');
    }
    else{
        alert('Usuario inválido');
    }
}
