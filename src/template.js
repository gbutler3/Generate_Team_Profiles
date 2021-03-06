let allCards= '';

function createHTML(allEmployees){
    allEmployees.forEach(employee =>{
         allCards += renderCard(employee);
    });

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
    <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
    ${allCards} 
    </body>
    </html>`;
}

function renderCard(employee){
    switch(employee.getRole()) {
        case "Engineer":
            return `</div><div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${employee.getName()}<br /><br />${employee.getRole()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getID()} </li>
                <li class="list-group-item">Email Address: ${employee.getEmail()}</li>
                <li class="list-group-item">GitHub: ${employee.getGithub()}</li>
            </ul>
            </div>`
            break; 
        
        case "Intern":
            return `</div><div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${employee.getName()}<br /><br />${employee.getRole()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getID()} </li>
                <li class="list-group-item">Email Address: ${employee.getEmail()}</li>
                <li class="list-group-item">GitHub: ${employee.getSchool()}</li>
            </ul>
            </div>`
            break; 

        case "Manager":
            return `<div class="container">
            <div class="row"><div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${employee.getName()}<br /><br />${employee.getRole()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getID()} </li>
                <li class="list-group-item">Email Address: ${employee.getEmail()}</li>
                <li class="list-group-item">Office Phone: ${employee.getOfficeNumber()} </li>
            </ul>
            </div>
            `;
            break;
    }
};

module.exports = createHTML;