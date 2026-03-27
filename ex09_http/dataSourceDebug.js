import DataSource from "./dataSource.js";

try {

    const ds = new DataSource('db/database.json')

    // ds.create({
    // "author": "Лев Толстой",
    // "title": "Война и мир",
    // "description": "Эпический роман о жизни русского общества в эпоху наполеоновских войн."
    // });


    // -- вывод всего хранилища --
// ds.debug();


// -- удаление объекта по id из базы --
//ds.delete(5);


// -- получение массива всех объектов из базы --
const all =ds.getAll();

console.log('All:', all);


// -- получение одного объекта по id из базы --
const one = ds.getOne(1);
console.log('ONE:', one);


// -- апдейт одного объекта по id в базе --
const oneBefore = ds.getOne(1);
console.log('ONE BEFORE:', oneBefore);

ds.update(1, {title: 'Онегин'});

const oneAfter = ds.getOne(1);
console.log('ONE AFTER:', oneAfter);



} catch (e) {
    console.error('Error detected', e);
    
}