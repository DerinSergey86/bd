//select b.title  "Название книги", b.author  "Автор" from  public.books b order by b.title  asc;

// INSERT INTO public.books (title,author,description) VALUES ('Название книги','Автор книги','Описание книги');

// UPDATE public.books SET description='Бред',author='Nick Nose',title='Незнайка на луне возмездие' WHERE id=2;

// DELETE FROM public.books	WHERE id=2;

import { Sequelize } from "sequelize"

class DBConnection {
    // FIXME: REMOVE HARDCODE !!!
    sequelize = new Sequelize(
        'db',
        'pguser',
        'pgpass123456',
        {
          host: '192.168.3.28',
          dialect: "postgres",
          port: '5432',
          schema: 'public',
        }
    );

    constructor() {

        // FIXME: ADD GEACEFULL SHUTDOWN (DISCONNECT FROM DB)!

      this.sequelize.authenticate().then(()=>{
          console.log('Соединение с базой данных успешно установлено.');
      }).catch((err) => {
          console.log('Sequelize connection error.', err);
      });
    }
};

class DataSourceSQLPostgres {

  constructor(db) {
    this.db = db;
  }

  getAll() {
    return  this.db.sequelize.query(`select id, title, author, description from  public.books;`);
  }

  create(payload) {
      return new Promise((resolve,reject) => {
        if (
      !(
        payload.hasOwnProperty("title") &&
        payload.hasOwnProperty("author") &&
        payload.hasOwnProperty("description")
      )
    ) {
      reject("DB:create - Wrong payload");
      return;
    }

    this.db.sequelize.query(`INSERT INTO public.books (title,author,description) VALUES ('${payload.title}','${payload.author}','${payload.description}');`)
    .then((response) => {
        resolve(response);
    }).catch((err) => {
        reject(err);
    });
      });
  };

  update(id, payload) {

      return new Promise((resolve,reject) => { 

          if (
      !(
        payload.hasOwnProperty("title") ||
        payload.hasOwnProperty("author") ||
        payload.hasOwnProperty("description")
      )
     ) {
      reject("DB: Update - Wrong payload");
       return;
    }

    let q =[];
    q.push(`UPDATE public.books SET `);

    let subq = [];
    
    if(payload.hasOwnProperty("title")) {
      subq.push(`title='${payload.title}'`);
    }

    if(payload.hasOwnProperty("author")) {
      subq.push(`author='${payload.author}'`);
    }

    if(payload.hasOwnProperty("description")) {
      subq.push(`description='${payload.description}'`);
    }

    q.push(subq.join(', ') + ' ');

    q.push(`WHERE id=${id}`)
    
    q = q.join('');

console.log('SQL QUERY: ${q}');



      this.db.sequelize.query(q)
    .then((response) => {
        resolve(response);
    }).catch((err) => {
        reject(err);
    });
      });
  };


  getOne(id) {
    return  this.db.sequelize.query(`select id, title, author, description from  public.books WHERE id=${id};`);
  }

  delete(id) {
        return this.db.sequelize.query(`DELETE FROM public.books WHERE id=${id};`);
    }
}

const db = new DBConnection();

const ds = new DataSourceSQLPostgres(db);
export default ds;