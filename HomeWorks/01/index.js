import { stdout, argv, exit, stderr } from 'node:process';

// Справка 

function showHelp(){
    console.log("Input: node index.js a=... b=... c=... ");
    console.log("Example arguments: a=2 b=5 c=3");
}

// При отсутствии аргументов программа должна выводить справку в stdout с кодом 1

if(argv.length === 2) {
    showHelp();
    exit(1);
}

// Копипаста вывода справки по запросу const param1 = argv[3];

const help = argv[2];

if(['-h', '--help'].includes(help)) {
    showHelp();
    exit(0);
}

// создадим массив введённых аргументов отбросив технические строки

// let args = process.argv.slice(2);

// Создание переменных

let a 
let b 
let c 

for (const param of argv) { // перебор массива

    if(param.startsWith('a=')) { // если параметр начинается с а=
        const splittedA = param.split('='); // определяем массив с значением аргумента а во втором элементе
        a = +splittedA[1]; // приводим значение элемента к числу
        if(a && b && c) { // проверка ввода аргументов
            break;
        }
    }

    if(param.startsWith('b=')) {
        const splittedB = param.split('=');
        b = +splittedB[1];
        if(a && b && c) {
            break;
        }
    }

    if(param.startsWith('c=')) {
        const splittedC = param.split('=');
        c = +splittedC[1];
        if(a && b && c) {
            break;
        }
    }
}

// определение дискриминанта D

let D = b*b -4*a*c;

// выводы данных в зависимости от значения дискриминанта

if (D < 0) {
    stderr.write('Уравнение не имеет корней, по причине отрицательного дискриминанта.');
    exit(2);
} else if (D === 0) {
    let x = -b / (2 *a);
    console.log(`Уравнение имеет один корень х = ${x}, т.к. дискриминант равен 0.`);
    exit(0);
} else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log(`Уравнение имеет два корня х1 = ${x1}, x2 = ${x2} т.к. вычисленный дискриминант > 0.`);
    exit(0);
}