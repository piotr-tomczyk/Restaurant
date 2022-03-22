export default function mainaPage(){
    console.log("i exist: mainPage");
    let content = document.createElement('div');
    content.id = "mainPage";
    content.className = "content";
    let title = document.createElement('div');
    title.id = "title";
    title.textContent = "RESTAURACJA MUADIB";

    let desc = document.createElement('div');
    desc.textContent = "blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah";
    desc.id = "description";

    content.appendChild(title);
    content.appendChild(desc);
    return content;
}