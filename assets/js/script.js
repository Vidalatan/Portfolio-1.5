// List of repositories to add to the page
var repositories = {
    // index: [name, link, image]
    primary: ["Nerds Meet Nerds","https://nerds-meet-nerds.herokuapp.com/", "https://raw.githubusercontent.com/Nerds-Meet-Nerds/Nerds-Meet-Nerds/develop/public/assets/images/screenshots/landing-page.jpg",false],
    1: ["Poke Shop","https://vidalatan.github.io/poke-shop/index.html", "https://raw.githubusercontent.com/Vidalatan/poke-shop/main/assets/images/poke-home-screenshot.png",false],
    2: ["Tech Biz Blog Site","https://tech-biz-blog.herokuapp.com/", "https://raw.githubusercontent.com/Vidalatan/tech-biz-blog/main/assets/images/FinishedProductImage.png",false],
    3: ["Weather Dashboard","https://vidalatan.github.io/weather_dashboard/", "https://raw.githubusercontent.com/Vidalatan/weather_dashboard/main/Assets/images/fullpage.png",false],
};
var primary_repo_size = 350;
var secondary_repo_size = 250;


// Depreciated - Function to grab the name of the repo from url and return it with better formatting
// function formatRepoName(url) {
//     let repo_name = url.substring(url.indexOf("tan/")+4);  // Grabs the repo name off of the end,
//     repo_name = repo_name.split(/[-,_]/g);                 // Split on "-" or "_" chars
    
//     // Take each word in the array and capitalize the first letter
//     for (let index in repo_name) {
//         repo_name[index] = repo_name[index].charAt(0).toUpperCase()+repo_name[index].substring(1);
//     }
//     repo_name = repo_name.join(" ");  // Join all the newly capitalized words together with whitespace
    
//     return repo_name
// }

$("#primary-project").append($("<div>").addClass("container d-flex justify-content-center")
    .append($("<a>").addClass(function() {
        if (repositories.primary[3]) {
            return "project-link-alt primary-project"
        } else {
            return "project-link primary-project"
        }
    })
        .attr("href", repositories.primary[1]).attr("target", "_blank")
        .attr("style", "background-image: url("+repositories.primary[2]+"); background-position: center; background-size: auto "+primary_repo_size+"px; background-repeat: no-repeat; width: "+primary_repo_size+"px; height: "+primary_repo_size+"px;")
            .append($("<p>").addClass("nameplate text-center").attr("style", "margin-top: "+primary_repo_size/2+"px;").text(repositories.primary[0]))));

for (let index = 1; index < Object.keys(repositories).length; index++) {
    $("#secondary-projects").append($("<div>").addClass("col d-flex justify-content-center m-3")
        .append($("<a>").addClass(function() {
            if (repositories[index][3]) {
                return "project-link pl-alt secondary-project"
            } else {
                return "project-link secondary-project"
            }
        })
            .attr("href", repositories[index][1]).attr("target", "_blank")
            .attr("style", "background-image: url("+repositories[index][2]+"); background-position: center; background-size: auto "+secondary_repo_size+"px; background-repeat: no-repeat; width: "+secondary_repo_size+"px; height: "+secondary_repo_size+"px;")
            .append($("<p>").addClass("nameplate text-center").attr("style", "margin-top: "+secondary_repo_size/2+"px;")  // Custom function that 
            .text(repositories[index][0]))))
}

$(".primary-project").parent().hover(eventIn => {
    console.log(eventIn.currentTarget);
    anime({
        targets: eventIn.currentTarget.childNodes[0],
        width: primary_repo_size/1.25,
        height: primary_repo_size/1.25,
        marginBottom: primary_repo_size/5
    })
    anime({
        targets: eventIn.currentTarget.childNodes[0].childNodes[0],
        translateY: primary_repo_size/3
    })
}, eventOut => {
    anime({
        targets: eventOut.currentTarget.childNodes[0],
        width: primary_repo_size,
        height: primary_repo_size,
        marginBottom: 0
    })
    anime({
        targets: eventOut.currentTarget.childNodes[0].childNodes[0],
        translateY: 0
    })
})

$(".secondary-project").parent().hover(eventIn => {
    console.log(eventIn.currentTarget);
    anime({
        targets: eventIn.currentTarget.childNodes[0],
        width: secondary_repo_size/1.25,
        height: secondary_repo_size/1.25,
        marginBottom: secondary_repo_size/5,
        marginRight: secondary_repo_size/10,
        marginLeft: secondary_repo_size/10
    })
    anime({
        targets: eventIn.currentTarget.childNodes[0].childNodes[0],
        translateY: secondary_repo_size/3
    })
}, eventOut => {
    anime({
        targets: eventOut.currentTarget.childNodes[0],
        width: secondary_repo_size,
        height: secondary_repo_size,
        marginBottom: 0,
        marginRight: 0,
        marginLeft:  0
    })
    anime({
        targets: eventOut.currentTarget.childNodes[0].childNodes[0],
        translateY: 0
    })
})