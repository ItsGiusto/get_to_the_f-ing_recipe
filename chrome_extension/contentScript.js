var classTermArray = ["wprm-recipe-container", "tasty-recipes-display", "easyrecipe-custom"];

function setupRecipeActions() {
    for (var i = 0; i < classTermArray.length; i++) {
        moveToTop(classTermArray[i]);
    }
}

function moveToTop(className){
    var wprmRecipeContainerArray = document.getElementsByClassName(className);
    for (var i = 0; i < wprmRecipeContainerArray.length; i++) {
        var wprmRecipeContainer = wprmRecipeContainerArray[i];
        var parent = wprmRecipeContainer.parentElement;
        if(parent){
            var firstChild = parent.firstChild;
            parent.insertBefore(wprmRecipeContainer, firstChild);
        }
    }
}

document.addEventListener('DOMContentLoaded',  setupRecipeActions(), false);
