$("#btn").click(function(){
    $.get("https://api.github.com/users/drewadorno", displayName)

    function displayName(data)
    {
        console.log(data);
        $("body").append(`<h1>${data.name}</h1>`)
    }
}); 