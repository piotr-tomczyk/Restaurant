export default function aboutPages(){
    console.log("i exist: aboutPage");
    let content = document.createElement('div');
    content.id = "aboutPage";
    content.className = "content";
    let title = document.createElement('div');
    title.id = "title";
    title.textContent = "RESTAURACJA MUADIB";

    let desc = document.createElement('div');
    desc.textContent = "alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah,alah";
    desc.id = "description";

    content.appendChild(title);
    content.appendChild(desc);
    return content;
}