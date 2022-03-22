import createComponent from './component';

export default function aboutPages(){
    console.log("i exist: aboutPage");
    let content = document.createElement('div');
    content.id = "aboutPage";
    content.className = "content";
    let title = document.createElement('h2');
    title.id = "title";
    title.textContent = "RESTAURACJA MUADIB";
    
    content.appendChild(title);
    content.appendChild(createComponent("CONTACT",false,"Piotr Tomczyk: s175816@student.pg.edu.pl \n Adress: Arrakis, Cave"));
    return content;
}