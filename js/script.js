/* =============================================== typing animation ================================================== */
var typed = new Typed(".typing", {
    strings:["", "Software Developer", "IT Technician", "System Administrator"],
    typedSpeed:10,
    BackSpeed:10,
    loop:true
})

/* =============================================== Aside ================================================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i = 0; i < totalNavList; i++)
    {
        //console.log(navList[i]);
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let i = 0; i < totalSection; i++)
            {
            allSection[i].classList.remove("back-section");
            }
            for(let j = 0; j < totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    //console.log("back-section" + navList[j].querySelector("a"));
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSelection(this);
        })
    }
    function showSelection(element)
    {
        for(let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        //console.log(target);
        document.querySelector("#" + target).classList.add("active");
    }
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>{
            asideSelectionTogglerBtn();
        })
        function asideSelectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i = 0; i < totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }
