export const booksHandler = ((req, res) => {

  const {method, url} = req;

  console.log('url =', url);
          const urlSplitted = url.split('?');
          const urlString = urlSplitted[0];
          const queryString = urlSplitted[1]; //FIXME

          const urlArr = urlString.split('/');
          //console.log('urlArr', urlArr, urlArr.length);

          let id = null;

          if(urlArr.length === 4) {
            id = +urlArr[urlArr.length-1]; //FIXME:
          }


  switch (method) {
      case 'POST':
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(`{
            "id": 1,
            "name": "Преступление и наказание",
            "author": "Ф.М. Достоевский",
            "description": "Социально-психологический роман Фёдора Достоевского (1866), повествующий о бедном студенте Родионе Раскольникове, который убивает старуху-процентщицу, чтобы проверить теорию о «право имеющих» людях."
}`);
        return;
      case 'GET':
          if(id) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(`{
            "id": 1,
            "name": "Преступление и наказание",
            "author": "Ф.М. Достоевский",
            "description": "Социально-психологический роман Фёдора Достоевского (1866), повествующий о бедном студенте Родионе Раскольникове, который убивает старуху-процентщицу, чтобы проверить теорию о «право имеющих» людях."
        }`);
          } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(`[{
            "id": 1,
            "name": "Преступление и наказание",
            "author": "Ф.М. Достоевский",
            "description": "Социально-психологический роман Фёдора Достоевского (1866), повествующий о бедном студенте Родионе Раскольникове, который убивает старуху-процентщицу, чтобы проверить теорию о «право имеющих» людях."
        }]`);
          }
            return;
      case 'PATCH':
      case 'PUT':
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(`{
            "id": 1,
            "name": "Преступление и наказание!",
            "author": "Ф.М. Достоевский",
            "description": "Социально-психологический роман Фёдора Достоевского (1866), повествующий о бедном студенте Родионе Раскольникове, который убивает старуху-процентщицу, чтобы проверить теорию о «право имеющих» людях."
}`);
        return;
      case 'DELETE':
        res.writeHead(204,);
        res.end(null);
        return;
}

  res.writeHead(500, {'Content-Type': 'application/json'});
  res.end(
    JSON.stringify(
      {
        status: "error", 
        message: "method not implemented"
      })
    );
});