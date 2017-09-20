import { Component } from '@angular/core';
export class Article {
  title: string;
  description: string;
  author: string;
  image: string;
  id: number;
}
const ARTICLES: Article[] = [
  { title: 'World Hunger', description: 'World hunger refers to the second definition, aggregated to the world level. The related technical term (in this case operationalized in medicine) is either malnutrition, or, if malnutrition is taken to refer to both undernutrition and overnutrition (obesity, overweight) as it increasingly is, undernutrition. Both malnutrition and undernutrition refer to the effects on people of not having enough food. There are two basic types of malnutrition/undernutrition. The first and most important is protein-energy malnutrition (PEM). It is basically a lack of calories and protein. Food is converted into energy by humans, and the energy contained in food is measured by calories. Protein is necessary for key body functions including provision of essential amino acids and development and maintenance of muscles. Protein-energy malnutriton is the more lethal form of malnutrition/hunger and is the type of malnutrition that is referred to when world hunger is discussed. This leads to growth failure. Principal types of growth failure are:', author: 'Steli', image: 'https://www.w3schools.com/css/trolltunga.jpg', id: 1 },
  { title: 'Some Text', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", author: 'Steli', image: 'http://www.earlofsandwichusa.com/wp-content/uploads/2016/04/Breakfast-Placeholder.jpg', id: 2 },
  { title: 'Another Text', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", author: 'Kolio', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLu1xsB5p3fYIGSG06rWNOXau_UJRm5Kx7EqDKibwolZq9U_g', id: 3 },
  
]

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
              <h2>My Articles</h2>
              <ul class='heroes'>
              <li *ngFor='let article of articles' (click)='onSelect(article)'>
              <span class='badge'>{{article.id}}</span>{{article.title}}
              </li>
              </ul>
              <div *ngIf='selectedArticle' class='kolio'>
              <div><h2>{{selectedArticle.title}} details</h2>
              <p><label>Title: </label>{{selectedArticle.title}}</p>
              <p class='rumen' *ngIf='showStyle'>Description: {{selectedArticle.description}}</p>
              <p><label>Author: </label>{{selectedArticle.author}}</p>
              <button (click)='changeState()'>{{buttonText}} Image</button><p *ngIf='showImage'><label>Image: </label><img src={{selectedArticle.image}} /></p>
             

              
              </div>
              `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  .kolio {
  
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: white;
    z-index: 100;

    height: 400px;
    margin-top: -200px;

    width: 600px;
    margin-left: -300px;
  }
  img{
    width:540px; /* you can use % */
    height: auto;
}

`]
})
export class AppComponent {
  title = 'Articles';
  articles = ARTICLES
  selectedArticle: Article
  showImage = true
  buttonText = 'hide'
  showStyle = 'background-color: red'
  onSelect(article: Article): void {
    this.selectedArticle = article
  }
  changeState() {
    this.showImage = !this.showImage
    if (this.showImage) {
      this.buttonText = 'Hide'
    } else {
      this.buttonText = 'Show'
    }
  }
  changeStyle() {
    
    if (this.showStyle) {
      return 'blue'
    } else {
      return 'blue'
    }
  }
}
