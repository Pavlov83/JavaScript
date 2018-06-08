const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Los Angeles';

//Without template strings(the es5 way)
html = '<ul><li>Name: ' + name + '</li><li>Age:' + age + '</li><li>Job: ' + job +
'</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
'<li>Name:' + name + '</li>' +
'<li>Name:' + age + '</li>' +
'<li>Name:' + job + '</li>' +
'<li>Name:' + city + '</li>' +

// With Template Literals (es6):

function hello(){
    return 'hello';
}

html = `
    <ul>
    <li>Name: ${name}</li>
    </li>Age: ${Age}</li>
    </li>Age: ${Age}</li>
    </li>Age: ${Age}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li> 
    <li>${age > 30 ? 'Over 30': 'Under 30'}</li> 
    <ul>
`;  


document.body.innerHTML = html;