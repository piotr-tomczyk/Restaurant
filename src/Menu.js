import Steak from './steak.jpg';
import createComponent from './component';

export default function menuPages(){
    console.log("i exist: menuPage");
    let content = document.createElement('div');
    content.id = "menuPage";
    content.className = "content";
    let title = document.createElement('h2');
    title.id = "title";
    title.textContent = "RESTAURACJA MUADIB";

    content.appendChild(title);
    content.appendChild(createComponent("Steak", Steak,"From the Stworzyciel 😮."));
    content.appendChild(createComponent("Steak", Steak,"From the Stworzyciel 😮."));
    content.appendChild(createComponent("Steak", Steak,"From the Stworzyciel 😮."));
    content.appendChild(createComponent("Steak", Steak,"From the Stworzyciel 😮."));
    content.appendChild(createComponent("Steak", Steak,"From the Stworzyciel 😮."));
    content.appendChild(createComponent("Steak", Steak,"From the Stworzyciel 😮."));
    content.appendChild(createComponent("Steak", Steak,"From the Stworzyciel 😮."));
    content.appendChild(createComponent("Steak", Steak,"From the Stworzyciel 😮."));
    return content;
}