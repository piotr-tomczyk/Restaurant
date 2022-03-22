export default function menuPages(){
    console.log("i exist: menuPage");
    let content = document.createElement('div');
    content.id = "menuPage";
    content.className = "content";
    let title = document.createElement('div');
    title.id = "title";
    title.textContent = "RESTAURACJA MUADIB";

    let desc = document.createElement('div');
    desc.textContent = "jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad,jihad";
    desc.id = "description";

    content.appendChild(title);
    content.appendChild(desc);
    return content;
}