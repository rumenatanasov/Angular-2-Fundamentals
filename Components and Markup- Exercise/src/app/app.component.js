"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Article = (function () {
    function Article() {
    }
    return Article;
}());
exports.Article = Article;
var ARTICLES = [
    { title: 'World Hunger', description: 'World hunger refers to the second definition, aggregated to the world level. The related technical term (in this case operationalized in medicine) is either malnutrition, or, if malnutrition is taken to refer to both undernutrition and overnutrition (obesity, overweight) as it increasingly is, undernutrition. Both malnutrition and undernutrition refer to the effects on people of not having enough food. There are two basic types of malnutrition/undernutrition. The first and most important is protein-energy malnutrition (PEM). It is basically a lack of calories and protein. Food is converted into energy by humans, and the energy contained in food is measured by calories. Protein is necessary for key body functions including provision of essential amino acids and development and maintenance of muscles. Protein-energy malnutriton is the more lethal form of malnutrition/hunger and is the type of malnutrition that is referred to when world hunger is discussed. This leads to growth failure. Principal types of growth failure are:', author: 'Steli', image: 'https://www.w3schools.com/css/trolltunga.jpg', id: 1 },
    { title: 'Some Text', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", author: 'Steli', image: 'http://www.earlofsandwichusa.com/wp-content/uploads/2016/04/Breakfast-Placeholder.jpg', id: 2 },
    { title: 'Another Text', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", author: 'Kolio', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g', id: 3 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Articles';
        this.articles = ARTICLES;
        this.showImage = true;
        this.buttonText = 'hide';
        this.showStyle = 'background-color: red';
    }
    AppComponent.prototype.onSelect = function (article) {
        this.selectedArticle = article;
    };
    AppComponent.prototype.changeState = function () {
        this.showImage = !this.showImage;
        if (this.showImage) {
            this.buttonText = 'Hide';
        }
        else {
            this.buttonText = 'Show';
        }
    };
    AppComponent.prototype.changeStyle = function () {
        if (this.showStyle) {
            return 'blue';
        }
        else {
            return 'blue';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{title}}</h1>\n              <h2>My Articles</h2>\n              <ul class='heroes'>\n              <li *ngFor='let article of articles' (click)='onSelect(article)'>\n              <span class='badge'>{{article.id}}</span>{{article.title}}\n              </li>\n              </ul>\n              <div *ngIf='selectedArticle' class='kolio'>\n              <div><h2>{{selectedArticle.title}} details</h2>\n              <p><label>Title: </label>{{selectedArticle.title}}</p>\n              <p class='rumen' *ngIf='showStyle'>Description: {{selectedArticle.description}}</p>\n              <p><label>Author: </label>{{selectedArticle.author}}</p>\n              <button (click)='changeState()'>{{buttonText}} Image</button><p *ngIf='showImage'><label>Image: </label><img src={{selectedArticle.image}} /></p>\n             \n\n              \n              </div>\n              ",
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  .kolio {\n  \n    position: absolute;\n    left: 50%;\n    top: 50%;\n    background-color: white;\n    z-index: 100;\n\n    height: 400px;\n    margin-top: -200px;\n\n    width: 600px;\n    margin-left: -300px;\n  }\n  img{\n    width:540px; /* you can use % */\n    height: auto;\n}\n\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map