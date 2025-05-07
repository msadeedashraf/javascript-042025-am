//alert("Hello")
//https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json

fetch("data/jobs.json")
    .then((response) => response.json())
    .then((data) => { 
        console.log(data) ; 

        const jobs = data;
        getjobs(jobs);

    })

    function getjobs(jobs){


        let myHTML = "";

        for(a = 0 ; a <jobs.length ; a++)
        {
            myHTML += `<div class="job-list">
                    <h3>${jobs[a].title}</h3>
                    <p>${jobs[a].company}</p>
                    <p>${jobs[a].location}</p>
                    <p>${jobs[a].jobdesc}</p>
                    <p class="learn-more"><a href="">Learn More</a></p>

                </div>`;
        }

        
        document.getElementById('demo').innerHTML = myHTML;
    }




/*
fetch("data/jobs.json")
    .then((response) => response.json())
    .then((data) => { 
        console.log(data) ; 
    })
*/

/*
<div class="job-list">
                    <h3>Software Engineer</h3>
                    <p>CBC</p>
                    <p>New York, NY</p>
                    <p>We are looking for a skilled and experienced Software Developer to
                        join our team. The ideal candidate should have strong programming
                        skills in Java and experience with web development technologies
                        such as HTML, CSS, and JavaScript. Familiarity with databases and
                        version control systems is a plus.</p>
                        <p class="learn-more"><a href="">Learn More</a></p>

                </div>
*/