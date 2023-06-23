import React, { useEffect, useState } from 'react'
import { Grid } from '../../../suite_trial/codebase/suite'
import '../../../suite_trial/codebase/suite.css'
import {config} from './dhtmlx.config'
function DHTMLX() {

    useEffect(() => {
        const grid = new Grid("grid_container", config);
        //* all events can be found here https://snippet.dhtmlx.com/owcnoj0i
        const events = [
            "afterEditStart",
            "afterEditEnd"
        ];

        // handler cleanup
        function eventHandler(event, args) {
            switch (event) {
                case "afterEditEnd": {
                    console.log("updated value: ", args[0])
                }
                case "afterEditStart": {
                    const cellId = args[1].id
                    const cellValue = args[0][cellId]
                    console.log("after editing", cellValue)
                }
                case "default": {
                    console.log("event handler not found")
                }
            }
        }

        events.forEach(function (event) {
            grid.events.on(event, function () {
                eventHandler(event, arguments);
            });
        });


        //* Filtering
        grid.data.filter({
            by: "isCountry",
            match: true
        });

        //* Searching
        var searchResult = grid.data.findAll({ by: "isCountry", match: true });
        console.log(searchResult)

        //* Sorting
        // https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_sort_method/

        // const state = grid.data.serialize();  //* save the state into a strigified json
    }, [])


    return (
        <>
            <div id="grid_container"></div>
        </>

    )
}

export default DHTMLX