// Sample publication data with type (conference or journal)
const publications = [
    {
                title: "Prediction of evapotranspiration using a nonlinear local approximation approach",
                date: "May 2022",
                type: "conference",
            },
            {
                title: "Prediction of Evapotranspiration Using Complex Networks",
                date: "August 2022",
                type: "conference",
            },
            {
                title: "Behavioural study of Evapotranspiration time series: Visibility Graph Analysis",
                date: "December 2022",
                type: "conference",
            },
            {
                title: "Monthly evapotranspiration trends across India using the Hurst exponent",
                date: "December 2022",
                type: "conference",
            },
            {
                title: "Comprehending Architecture and Varieties of Temple Tanks in India",
                date: "February 2023",
                type: "conference",
            },
            {
                title: "Actual Evapotranspiration in India: Trend, Persistence, and Homogeneity",
                date: "In review",
                type: "journal",
            },
            {
                title: "Analysis of Evapotranspiration using Complex Networks and Chaos Theory",
                date: "August 2023",
                type: "conference",
            },
            {
                title: "Dynamic Behaviour of Daily Evapotranspiration Time Series: Use of Visibility Graphs",
                date: "In review",
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
        listItem.innerHTML = `<strong>Krishna, G.V.,</strong> ${pub.title}, <i>${pub.date}</i>`;
        publicationList.appendChild(listItem);
    });
}

// Initial display (show all publications)
filterByType("all");
