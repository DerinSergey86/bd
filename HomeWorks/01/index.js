import { stdin, stdout, argv, exit, stderr } from 'node:process';

// function showHelp(){
//     console.log("Example arguments: a=2 b=5 c=3");
// }

// if(argv.length === 3) {
//     showHelp();
//     exit(0);
// }

//  console.log('argv', argv);

// const param1 = argv[3];

// if(['-h', '--help'].includes(param1)) {
//     showHelp();
//     exit(0);
// }

let a 
let b 
let c 

// for (const param of argv) {

//     if(param.startsWith('a=')) {
//         const splittedA = param.split('=');
//         a = +splittedA[2];
//         if(a && b && c) {
//             break;
//         }
//     }

//     if(param.startsWith('b=')) {
//         const splittedB = param.split('=');
//         b = +splittedB[2];
//         if(a && b && c) {
//             break;
//         }
//     }

//     if(param.startsWith('c=')) {
//         const splittedC = param.split('=');
//         с = +splittedC[2];
//         if(a && b && c) {
//             break;
//         }
//     }
// }

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