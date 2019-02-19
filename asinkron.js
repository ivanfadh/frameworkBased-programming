var fs = require('fs');

fs.readFile('./colors.json', 'utf-8',function(err, data){
    if(err) throw err;
    console.log(JSON.parse(data));
});

console.log('Selanjutnya...');