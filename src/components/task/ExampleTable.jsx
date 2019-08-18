import React, {Component} from "react";
import ReactTable from "react-table";
import FoldableTableHOC from 'react-table/lib/hoc/foldableTable'
import "react-table/react-table.css"

class ExampleTable extends Component {
    constructor(props){
        super();
        this.state = {
            saleInfo: []
        }
    }

    componentDidMount() {
        fetch("http://www.mocky.io/v2/5d4caeb23100000a02a95477")
            .then(response => response.json())      //Convert response into JSON
            .then(saleInfo => { this.setState({saleInfo: saleInfo})})      //Fill the array with JSON file
    }

    render() {
        const FoldableTable = FoldableTableHOC(ReactTable);      //High-Order Component that takes ReactTable and make it Foldable
        const columns = [
            {
                Header: "ID",
                accessor: "id",
                show: false,        // hide the column from display
                style: {
                    textAlign: "center",
                }
            },
            {
                Header: "Index",
                accessor: "index",
                show: false,
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Country",
                accessor: "country",
                style: {
                    textAlign: "center"
                },
                foldable: true,
                Cell: ({ value }) => (value === "USA" ? "USA" : value === "AUS" ? "AUS" : value === "NZL" ? "NZL" : "Undefined"),
                filterMethod: (filter, row) => {        //Method to filter rows from the value selected from the options
                if (filter.value === "all") {
                    return true;
                }
                if (filter.value === "USA") {
                    return row[filter.id] === "USA";
                }
                if (filter.value === "AUS") {
                    return row[filter.id] === "AUS";
                }
                if (filter.value === "NZL") {
                    return row[filter.id] === "NZL";
                }
                
                },
                Filter: ({ filter, onChange }) =>       //Change the row value based on the option selected
                <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all" style={{textAlign: "center"}}>Show All</option>
                    <option value="USA" style={{textAlign: "center"}}>USA</option>
                    <option value="AUS" style={{textAlign: "center"}}>AUS</option>
                    <option value="NZL" style={{textAlign: "center"}}>NZL</option>
                </select>,
               
            },
            {
                Header: "Value",
                accessor: "value",
                style: {
                    textAlign: "center"
                },
                foldable: true,
                filterMethod: (filter, row) => {
                if (filter.value === "all") {
                    return true;
                }
                if (filter.value === "0.00-300.00" ) {
                    return row[filter.id] >= 0.00 && row[filter.id] <= 300.00;
                }
                if (filter.value === "301.00-600.00" ) {
                    return row[filter.id] > 300.00 && row[filter.id] <= 600.00;
                }
                if (filter.value === "601.00-900.00" ) {
                    return row[filter.id] > 600.00 && row[filter.id] <= 900.00;
                }
                if (filter.value === "901.00" ) {
                    return row[filter.id] > 900.00;
                }
               
                },
                Filter: ({ filter, onChange }) =>
                <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all" style={{textAlign: "center"}}>Show All</option>
                    <option value="0.00-300.00" style={{textAlign: "center"}}>$0.00-300.00</option>
                    <option value="301.00-600.00" style={{textAlign: "center"}}>$301.00-600.00</option>
                    <option value="601.00-900.00" style={{textAlign: "center"}}>$601.00-900.00</option>
                    <option value="901.00" style={{textAlign: "center"}}>$901.00+</option>
                </select>,
                Cell: props => <span className='number'>$ {props.value}</span>      //Add $ sign infront of the value
                

            },
            {
                Header: "Store",
                accessor: "store",
                style: {
                    textAlign: "center"
                },
                foldable: true,
                filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    if (filter.value === "Apple") {
                      return row[filter.id] === "Apple";
                    }
                    if (filter.value === "Costco") {
                        return row[filter.id] === "Costco";
                    }
                    if (filter.value === "GameStop") {
                        return row[filter.id] === "GameStop";
                    }
                    if (filter.value === "Newegg") {
                        return row[filter.id] === "Newegg";
                    }
                    if (filter.value === "Walmart") {
                        return row[filter.id] === "Walmart";
                    }
                    if (filter.value === "Harvey Norman") {
                        return row[filter.id] === "Harvey Norman";
                    }
                    if (filter.value === "JB Hifi") {
                        return row[filter.id] === "JB Hifi";
                    }
                    if (filter.value === "T2") {
                        return row[filter.id] === "T2";
                    }
                    if (filter.value === "The Good Guys") {
                        return row[filter.id] === "The Good Guys";
                    }
                    if (filter.value === "Blue Tower") {
                        return row[filter.id] === "Blue Tower";
                    }
                    if (filter.value === "Noel Leeming") {
                        return row[filter.id] === "Noel Leeming";
                    }
                    if (filter.value === "PB Tech") {
                        return row[filter.id] === "PB Tech";
                    }
                    if (filter.value === "The Warehouse") {
                        return row[filter.id] === "The Warehouse";
                    }
                    
                },
                Filter: ({ filter, onChange }) =>
                <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all" style={{textAlign: "center"}}>Show All</option>
                    <option value="Apple" style={{textAlign: "center"}}>Apple</option>
                    <option value="Costco" style={{textAlign: "center"}}>Costco</option>
                    <option value="GameStop" style={{textAlign: "center"}}>GameStop</option>
                    <option value="Newegg" style={{textAlign: "center"}}>Newegg</option>
                    <option value="Walmart" style={{textAlign: "center"}}>Walmart</option>
                    <option value="Harvey Norman" style={{textAlign: "center"}}>Harvey Norman</option>
                    <option value="JB Hifi" style={{textAlign: "center"}}>JB Hifi</option>
                    <option value="T2" style={{textAlign: "center"}}>T2</option>
                    <option value="The Good Guys" style={{textAlign: "center"}}>The Good Guys</option>
                    <option value="Blue Tower" style={{textAlign: "center"}}>Blue Tower</option>
                    <option value="Noel Leeming" style={{textAlign: "center"}}>Noel Leeming</option>
                    <option value="PB Tech" style={{textAlign: "center"}}>PB Tech</option>
                    <option value="The Warehouse" style={{textAlign: "center"}}>The Warehouse</option>
                </select>
            },
            {
                id: "returned",
                Header: "Returned",
                accessor: d => d.returned.toString(),
                style: {
                    textAlign: "center"
                },
                foldable: true,
                Cell: ({ value }) => (value === "true" ? "Yes" : "No"),     //Change the value to Yes if the value is true, No if the value is false
                filterMethod: (filter, row) => {
                if (filter.value === "all") {
                    return true;
                }
                if (filter.value === "true") {
                    return row[filter.id] === "true";
                }
                if (filter.value === "false") {
                    return row[filter.id] === "false";
                }
                
                },
                Filter: ({ filter, onChange }) =>
                <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                >
                    <option value="all" style={{textAlign: "center"}}>Show All</option>
                    <option value="true" style={{textAlign: "center"}}>Returned</option>
                    <option value="false" style={{textAlign: "center"}}>Not Returned</option>
                </select>
                
            }
        ]
            
        return (
            
            <FoldableTable
                columns = {columns}
                data = {this.state.saleInfo}
                filterable = {true}
                showPaginationTop = {true}
                showPaginationBottom = {true}
                className="-striped -highlight"
                noDataText = {"No data found"}
                style = {{
                    height: "1000px"
                }}
            />

           
            
        )
    }
}

export default ExampleTable;
