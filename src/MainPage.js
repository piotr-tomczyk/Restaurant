import createComponent from "./component";

export default function mainaPage(){
    console.log("i exist: mainPage");
    let content = document.createElement('div');
    content.id = "mainPage";
    content.className = "content";
    let title = document.createElement('h2');
    title.id = "title";
    title.textContent = "RESTAURACJA MUADIB";

    content.appendChild(title);
    content.appendChild(createComponent(" ",false,"Restaurant of MUA DIB is the best."));
    content.appendChild(createComponent("THE BEST DISHES",false,"We offer a dishes in true Arrakin style 😈."));
    return content;
}