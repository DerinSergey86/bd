import { stdin, stdout, stderr, exit, argv } from 'node:process';

// stdin.pipe(stdout); // перенаправление ввода в вывод

let data = '';

stdin.on('readable', () => {
    const chunk = stdin.read();
    if(chunk !== null) {
        data += chunk;
    }
//   console.log('r');
});

stdin.on('end', () => {
  console.log('Data:', data);

    // throw new Error('!!!'); // нода вернёт код 1 (сама)

    stdout.write('Programm finished\n')
    // exit(0); // установка кода ответ в 0

    stderr.write('Programm error\n')
    // exit(-1); установка кода ответ в -1
    
});