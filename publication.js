// Sample publication data with type (conference or journal)
const publications = [
    {
                author1:"Krishna, G.V.",
                author2:"Jothiprakash, V., Sivakumar, B.",
                title: "Prediction of evapotranspiration using a nonlinear local approximation approach",
                date: "May 2022",
                confname:"EGU",
                type: "conference",
            },
            {
                author1:"Krishna, G.V.",
                author2:"Jothiprakash, V., Sivakumar, B.",
                title: "Prediction of Evapotranspiration Using Complex Networks",
                date: "August 2022",
                confname:"AOGS",
                type: "conference",
            },
            {
                author1:"Krishna, G.V.",
                author2:"Jothiprakash, V., Sivakumar, B.",
                title: "Behavioural study of Evapotranspiration time series: Visibility Graph Analysis",
                date: "December 2022",
                confname:"AGU",
                type: "conference",
            },
            {
                author1:"Krishna, G.V.",
                author2:"Jothiprakash, V., Sivakumar, B.",
                title: "Monthly evapotranspiration trends across India using the Hurst exponent",
                date: "December 2022",
                confname:"HYDRO",
                type: "conference",
            },
            {
                author1:"Ramkumar, D.",
                author2:"Krishna, G.V.",
                title: "Comprehending Architecture and Varieties of Temple Tanks in India",
                date: "February 2023",
                confname:"IKS",
                type: "conference",
            },
            {
                author1:"Krishna, G.V.",
                author2:"Jothiprakash, V., Sivakumar, B.",
                title: "Actual Evapotranspiration in India: Trend, Persistence, and Homogeneity",
                date: "In review",
                confname:"",
                type: "journal",
            },
            {
                author1:"Krishna, G.V.",
                author2:"Jothiprakash, V., Sivakumar, B.",
                title: "Analysis of Evapotranspiration using Complex Networks and Chaos Theory",
                date: "August 2023",
                confname:"AOGS",
                type: "conference",
            },
            {
                author1:"Krishna, G.V.",
                author2:"Jothiprakash, V., Sivakumar, B.",
                title: "Dynamic Behaviour of Daily Evapotranspiration Time Series: Use of Visibility Graphs",
                date: "In review",
                confname:"",
                type: "journal",
            },
    // More publication data entries...
];

// Function to display publications based on type (conference or journal)
function filterByType(type) {
    const publicationList = document.getElementById("publication-list");
    publicationList.innerHTML = ""; // Clear the current list

    // Filter publications based on the selected type
    const filteredPublications = type === "all" ? publications : publications.filter(pub => pub.type === type);

    // Create and append list items for filtered publications
    filteredPublications.forEach(pub => {
        const listItem = document.createElement("li");
        
        // Check if the author name is "Krishna GV" and make it bold
        const author1 = pub.author1 === "Krishna, G.V." ? `<strong>${pub.author1}</strong>` : pub.author1;
        const author2 = pub.author2 === "Krishna, G.V." ? `<strong>${pub.author2}</strong>` : pub.author2;


        listItem.innerHTML = `${author1} ${author2}, ${pub.title}, ${pub.confname}, <i>${pub.date}</i>`;
        publicationList.appendChild(listItem);
    });
}

// Initial display (show all publications)
filterByType("all");




