declare var $:any;

interface Book{
  id: string,
  title: string,
  img: string
}

class BooksData{
  constructor(private books:Book[], private shelfimg:string){
    this.loadBooks();
  }

  private loadBooks():void{
    let i:number = 0;
    let iii:number = 0;
    let content:string = '';
    for (let book of this.books){
      if (i == 0) {
        content = '<div class="row" id="row0" style="margin:3% 2% 0% 2%"></div>';
        $('#BookShelf').append(content);
        let shef = '<div class="row shfGMargin"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <img src="'+ this.shelfimg +'" class="shfG img-responsive"/> </div></div>'
        $('#BookShelf').append(shef);
      }

      if (i % 4 == 0 && i > 0){
        iii = i / 4;
        content = '<div class="row shfMargin" id="row' + iii + '"></div>';
        $('#BookShelf').append(content);
        let shef = '<div class="row shfGMargin"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <img src="'+ this.shelfimg +'" class="shfG img-responsive"/> </div></div>'
        $('#BookShelf').append(shef);
      }

      content = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img src="' + book.img +'" id="'+ book.id +'" class="shf book img-responsive" data-toggle="tooltip" title="' + book.title + '"/></div>';
      let di = '#row' + iii;
      $(di).append(content)
      i++;
    }

    setTimeout(()=>{$('[data-toggle="tooltip"]').tooltip()},200);
  }
}
