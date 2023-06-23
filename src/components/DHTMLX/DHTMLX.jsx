import React, { useEffect, useState } from 'react'
import { Grid, Pagination, LazyDataProxy } from '../../../suite_trial/codebase/suite'
import '../../../suite_trial/codebase/suite.css'
import { config } from './dhtmlx.config' 
function DHTMLX() {

    useEffect(() => {

        //* Server side response scheme https://docs.dhtmlx.com/suite/helpers/lazydataproxy/
        //* https://docs.dhtmlx.com/dataview__dynamic_loading.html
        let lazyDataProxy = new LazyDataProxy("https://docs.dhtmlx.com/suite/backend/lazyload", {
            limit: 10,
            prepare: 5,
            delay: 150,
            from: 0
        });
        console.log("lazy data proxy",lazyDataProxy)
        // const grid = new Grid("grid_container");
        const grid = new Grid("grid_container", config);
        grid.data.load(lazyDataProxy);
        //* all events can be found here https://snippet.dhtmlx.com/owcnoj0i
        const events = [
            "afterEditStart",
            "afterEditEnd"
        ];

        //* event handlers
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
        // grid.data.filter({
        //     by: "isCountry",
        //     match: true
        // });

        //* Searching
        var searchResult = grid.data.findAll({ by: "isCountry", match: true });
        console.log("search",searchResult)

        //* Sorting
        // https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_sort_method/

        const state = grid.data.serialize();  //* save the state into a strigified json

        //* Pagination

        const pagination = new Pagination("pagination", {
            css: "dhx_widget--bordered dhx_widget--no-border_top",
            data: grid.data,
            pageSize:10,
        });
    }, [])


    return (
        <>
            <div id="grid_container"></div>
            <div id="pager_container" ></div>

        </>

    )
}

export default DHTMLX