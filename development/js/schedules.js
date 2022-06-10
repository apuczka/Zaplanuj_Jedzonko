const btn = document.querySelector(".button--new--plan");




let plan = {
    name: "",
    desc: "",
    numberOfWeek: null,
    monday: {
        breakfast: "",
        brunch: "",
        lunch: "",
        mainCourse: "",
        dinner: "",
    },
    tuesday: {
        breakfast: "",
        brunch: "",
        lunch: "",
        mainCourse: "",
        dinner: "",
    },
    wednesday: {
        breakfast: "",
        brunch: "",
        lunch: "",
        mainCourse: "",
        dinner: "",
    },
    thursday: {
        breakfast: "",
        brunch: "",
        lunch: "",
        mainCourse: "",
        dinner: "",
    },
    friday: {
        breakfast: "",
        brunch: "",
        lunch: "",
        mainCourse: "",
        dinner: "",
    },
    saturday: {
        breakfast: "",
        brunch: "",
        lunch: "",
        mainCourse: "",
        dinner: "",
    },
    sunday: {
        breakfast: "",
        brunch: "",
        lunch: "",
        mainCourse: "",
        dinner: "",
    }
}
btn.addEventListener("click", () => {
    if(document.getElementById("name_plane").value && document.getElementById("name_desc").value) {
        plan = {
            ...plan,
            name: document.getElementById("name_plane").value,
            desc: document.getElementById("name_desc").value,
            numberOfWeek: document.getElementById("number_of_week").value,
            monday: {
                breakfast: document.getElementById("monday_breakfast").value,
                brunch: document.getElementById("monday_brunch").value,
                lunch: document.getElementById("monday_lunch").value,
                mainCourse: document.getElementById("monday_mainCourse").value,
                dinner: document.getElementById("monday_dinner").value,
            },
            tuesday: {
                breakfast: document.getElementById("tuesday_breakfast").value,
                brunch: document.getElementById("tuesday_brunch").value,
                lunch: document.getElementById("tuesday_lunch").value,
                mainCourse: document.getElementById("tuesday_mainCourse").value,
                dinner: document.getElementById("tuesday_dinner").value,
            },
            wednesday: {
                breakfast: document.getElementById("wednesday_breakfast").value,
                brunch: document.getElementById("wednesday_brunch").value,
                lunch: document.getElementById("wednesday_lunch").value,
                mainCourse: document.getElementById("wednesday_mainCourse").value,
                dinner: document.getElementById("wednesday_dinner").value,
            },
            thursday: {
                breakfast: document.getElementById("thursday_breakfast").value,
                brunch: document.getElementById("thursday_brunch").value,
                lunch: document.getElementById("thursday_lunch").value,
                mainCourse: document.getElementById("thursday_mainCourse").value,
                dinner: document.getElementById("thursday_dinner").value,
            },
            friday: {
                breakfast: document.getElementById("friday_breakfast").value,
                brunch: document.getElementById("friday_brunch").value,
                lunch: document.getElementById("friday_lunch").value,
                mainCourse: document.getElementById("friday_mainCourse").value,
                dinner: document.getElementById("friday_dinner").value,
            },
            saturday: {
                breakfast: document.getElementById("saturday_breakfast").value,
                brunch: document.getElementById("saturday_brunch").value,
                lunch: document.getElementById("saturday_lunch").value,
                mainCourse: document.getElementById("saturday_mainCourse").value,
                dinner: document.getElementById("saturday_dinner").value,
            },
            sunday: {
                breakfast: document.getElementById("sunday_breakfast").value,
                brunch: document.getElementById("sunday_brunch").value,
                lunch: document.getElementById("sunday_lunch").value,
                mainCourse: document.getElementById("sunday_mainCourse").value,
                dinner: document.getElementById("sunday_dinner").value,
            }
        }

        let allOfPlans = JSON.parse(localStorage.getItem("planesData"));
        if (allOfPlans === null) allOfPlans = [];
        localStorage.setItem('planesData', JSON.stringify(plan));
        allOfPlans.push(plan);
        localStorage.setItem("planesData", JSON.stringify(allOfPlans));

        document.getElementById("name_plane").placeholder = "";
        document.getElementById("name_plane").style.border = "";
        document.getElementById("name_desc").placeholder = "";
        document.getElementById("name_desc").style.border = "";

        window.frameElement.style.display = "none";
        window.frameElement.nextElementSibling.style.display = "none";
        window.frameElement.nextElementSibling.nextElementSibling.style.display = "block";
    } else {
        document.getElementById("name_plane").placeholder = "Wpisz nazwę...";
        document.getElementById("name_plane").style.border = "1px solid red";
        document.getElementById("name_desc").placeholder = "Dodaj opis...";
        document.getElementById("name_desc").style.border = "1px solid red";
        return null;
    }
})
