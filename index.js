const { exec } = require('shelljs');
console.log('{ Executor de codigo Universal }');

const request = {
    content: `print("quanto é 7 + 7?")`,
    lenguage: 'python'
}

function command(request) {
    if (request.lenguage == 'js') {
        return exec(`node -p '${request.content}'`, {silent:true}).stdout;
    }
    if (request.lenguage == 'python') {
        return exec(`python -c '${request.content}'`, {silent:true}).stdout;
    }
}

const response = command(request);
console.log(response);