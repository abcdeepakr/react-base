import React, { useEffect, useState } from 'react'
import { Grid } from '../../../suite_trial/codebase/suite'
import '../../../suite_trial/codebase/suite.css'

import dataset from './dataset.json'
function DHTMLX() {

    useEffect(() => {
        const grid = new Grid("grid_container", {
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
                { width: 150, id: "migrants", header: [{ text: "Migrants (net)", align: "center" }], align: "center" },
                { width: 150, id: "fert", header: [{ text: "Fert. Rate", align: "center" }], align: "center" },
                { width: 150, id: "age", header: [{ text: "Med. Age", align: "center" }], align: "center" },
                { width: 150, id: "urban", header: [{ text: "Urban Pop", align: "center" }], align: "center" },
                { width: 150, id: "isCountry", header: [{ text: "Is Country", align: "center" }], align: "center", type: "boolean", editable:true},
                { width: 150, id: "status", header: [{ text: "Status", align: "center" }], align: "center", editorType: "select", editable:true,
                options: [
                    { id: "done", value: "Done" }, 
                    { id: "in progress", value: "In Progress" }, 
                    { id: "not started", value: "Not Started" },
                ],}

            ],
            width: "auto",
            height: "auto",
            // adjust: "header", // resizes
            resizable: true,
            // can apply on individual row, by making it false here  
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
            editable: false,
            dragItem: "both", // we can also drag and drop between grids

            // below two properties ensure multi selection and draggability of rows
            selection: "row",
            multiselection: true,

        });


        // https://snippet.dhtmlx.com/owcnoj0i
        const events = [
            "afterEditStart",
            "afterEditEnd"
        ];

        // handler cleanup
        function eventHandler(event, args) {
            switch(event){
                case "afterEditEnd" :{
                    console.log("updated value: ",args[0])
                }
                case "afterEditStart" :{
                    const cellId = args[1].id
                    const cellValue = args[0][cellId]
                    console.log("after editing",cellValue)
                }
                case "default":{
                    console.log("event handler not found")
                }
            }
        }

        events.forEach(function (event) {
            grid.events.on(event, function () {
                eventHandler(event, arguments);
            });
        });


        // Filtering
        grid.data.filter({
            by: "country",
            match: "India"
        });

        // Searching
        var searchResult=grid.data.findAll({by:"country",match:"India"});
        console.log(searchResult)

        // Sorting
        // https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_sort_method/

        // const state = grid.data.serialize();  // save the state into a strigified json
    }, [])


    return (
        // <div style={{height:"800px", width:"100%"}} id="grid_container"></div>
        <>

        <div id="grid_container"></div>
        </>

    )
}

export default DHTMLX