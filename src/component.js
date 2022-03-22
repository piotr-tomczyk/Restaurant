export default function createComponent(title = "title", image = false, text = "sample text"){
    let component = document.createElement('div');
    component.className = "component";
    let titleOfComponent = document.createElement('h2');
    titleOfComponent.className = "title";
    titleOfComponent.textContent = title;
    component.appendChild(titleOfComponent);
    if (image){
        let imageOfContent = new Image();
        imageOfContent.src = image;
        imageOfContent.className = "photo";
        component.appendChild(imageOfContent);
    }
    let textContent = document.createElement('div');
    textContent.className = "textContent";
    textContent.textContent = text;
    component.appendChild(textContent);
    return component;
}