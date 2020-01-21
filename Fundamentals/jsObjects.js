function printObject(a)
{
    for(let i=0; i<a.length; i++)
    {
        console.log( `Name: ${a[i].name}, Cohort: ${a[i].cohort}`);
    }
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

//printObject(students);

var users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

for(let user in users)
{
    console.log(user.toUpperCase());
    for(let i=0; i<users[user].length; i++)
    {
        let length=users[user][i].first_name+users[user][i].last_name;
        console.log(`${i+1} - ${users[user][i].last_name}, ${users[user][i].first_name} - ${length.length}`)
    }
}