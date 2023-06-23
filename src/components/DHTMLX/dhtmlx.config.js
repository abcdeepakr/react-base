import dataset from './dataset.json'

let config = {
    columns: [
        {
            width: 150,
            id: "country",
            header: [{
                text: "Country",
                align: "center"
            }],
            align: "center",
            sortable: true,
            htmlEnable: true,
            editable: true,
        },
        { width: 150, id: "population", header: [{ text: "Population", align: "center" }], align: "center" },
        { width: 150, id: "yearlyChange", header: [{ text: "Yearly Change", align: "center" }], align: "center" },
        { width: 150, id: "netChange", header: [{ text: "Net Change", align: "center" }], align: "center" },
        { width: 150, id: "density", header: [{ text: "Density (P/Km²)", align: "center" }], align: "center" },
        { width: 150, id: "area", header: [{ text: "Land Area (Km²)", align: "center" }], align: "center" },
        { width: 150, id: "migrants", header: [{ text: "Migrants (net)", align: "cendter" }], align: "center" },
        { width: 150, id: "fert", header: [{ text: "Fert. Rate", align: "center" }], align: "center" },
        { width: 150, id: "age", header: [{ text: "Med. Age", align: "center" }], align: "center" },
        { width: 150, id: "urban", header: [{ text: "Urban Pop", align: "center" }], align: "center" },

        // this column will have checkboxes if editable key is true
        { width: 150, id: "isCountry", header: [{ text: "Is Country", align: "center" }], align: "center", type: "boolean", editable: true },

        // this column will have dropdowns if editable column is true
        {
            width: 150, id: "status", header: [{ text: "Status", align: "center" }], align: "center", editorType: "select", editable: true,
            options: [
                { id: "done", value: "Done" },
                { id: "in progress", value: "In Progress" },
                { id: "not started", value: "Not Started" },
            ],
        }
    ],
    width: "auto",
    height: "auto",
    adjust: "header",
    resizable: true,
    sortable: true,
    data: dataset,
    // TODO unable to pass onchange event here
    eventHandlers: {
        onclick: {
            cell__html: function (event, data) {
                console.log(event)
                display(JSON.stringify(data.col, null, 2));
            },
        },
        onmouseover: {
            cell__html: function (event) {
                console.log(event)
                display("You are over " + event.target.tagName);
            },
        },
    },
    editable: true,
    dragItem: "both", //* we can also drag and drop between grids

    //* below two properties ensure multi selection and draggability of rows
    selection: "row",
    multiselection: true,

}




export{config}