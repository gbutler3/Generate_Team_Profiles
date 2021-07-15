function createHTML(allEmployees){
    let allCards = '';
    allEmployees.forEach(employee =>{
        allCards += renderCard(employee);
    });

    return `<html>
        <body>
            ${allCards}
        </body>
    </html>`;
}

function renderCard(employee){
    switch(employee.gitRole()) {
        case "Engineer":
            return `<div>
            <h2> ${employee.getName()}</h2>
            <h2> ${employee.gitRole()}</h2>
            <h4> ID: ${employee.getID()}</h4>
            <h4> Email: ${employee.getEmail()}</h4>
            </div>`;
            break; 
        
        case "Intern":
            return `<div>
            <h2> ${employee.getName()}</h2>
            <h2> ${employee.gitRole()}</h2>
            <h4> ID: ${employee.getID()}</h4>
            <h4> Email: ${employee.getEmail()}</h4>
            <h4> Email: ${employee.getSchool()}</h4>
            </div>`;
            break; 

        case "Manager":
            return `<div>
            <h2> ${employee.getName()}</h2>
            <h2> ${employee.gitRole()}</h2>
            <h4> ID: ${employee.getID()}</h4>
            <h4> Email: ${employee.getEmail()}</h4>
            <h4> Office Number: ${employee.getOfficeNumber()}</h4>
            </div>`;
            break;
    }
};
