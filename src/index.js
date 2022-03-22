import mainaPage from './MainPage';
import aboutPages from './About';
import menuPages from './Menu';
import './style.css';

var mainPage = true;
var aboutPage = false;
var menuPage = false;
let body = document.querySelector('.main');

function deleteCurrentContent(){
    while (body.lastChild.id != "head") {
        body.removeChild(body.lastChild);
      }
    return;
}

function tabHandler(e){
    console.log(e.target.id);
    if(e.target.id == "MainPage" || e.target.id == "left"){
        if (!mainPage){
            mainPage = true;
            aboutPage = false;
            menuPage = false;
            deleteCurrentContent();
            body.appendChild(mainaPage());
        }
        return;
    }
    if(e.target.id == "AboutPage"){
        if (!aboutPage){
            mainPage = false;
            aboutPage = true;
            menuPage = false;
            deleteCurrentContent();
            body.appendChild(aboutPages());
        }
        return;
    }
    if(e.target.id == "Menu"){
        if (!menuPage){
            mainPage = false;
            aboutPage = false;
            menuPage = true;
            deleteCurrentContent();
            body.appendChild(menuPages());
        }
        return;
    }
}

function comp(){
    let header = document.createElement('div');
    header.id = "head";
    let title = document.createElement('div');
    title.id = "left";
    title.textContent = "RESTAURACJA MUADIB";
    title.addEventListener("click", tabHandler);
    let listOfMenu = document.createElement('div');
    listOfMenu.id = "menu";



    let MainPage = document.createElement('div');
    MainPage.textContent = "MainPage";
    MainPage.id = "MainPage";
    MainPage.addEventListener("click", tabHandler);

    let AboutPage = document.createElement('div');
    AboutPage.textContent = "About";
    AboutPage.addEventListener("click", tabHandler);
    AboutPage.id = "AboutPage";

    let MenuPage = document.createElement('div');
    MenuPage.textContent = "Menu";
    MenuPage.addEventListener("click", tabHandler);
    MenuPage.id = "Menu";

    header.appendChild(title);
    listOfMenu.appendChild(MainPage);
    listOfMenu.appendChild(MenuPage);
    listOfMenu.appendChild(AboutPage);
    header.appendChild(listOfMenu);
    return header;
}

body.appendChild(comp());
body.appendChild(mainaPage());