<h2 align="center">Front End Development Internship Programme Assesment</h2>
<h3>Datatable for Sales Transaction</h3>

![demo](https://user-images.githubusercontent.com/37789673/63232561-0b6e7680-c27d-11e9-835b-04f03a586b36.gif)

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Run the project](#run-the-project)
* [About the task](#about-the-task)
  * [Requirements](#requirements)
* [Summary of Findings](#summary-of-findings)
  * [Approach Method](#approach-method)
  * [Findings](#findings)
  * [Implementation](#implementation)

## Run the Project
Set directory to frontEnd-quantifulTest-ponhvath-master:
<pre>
  <code> cd frontEnd-quantifulTest-ponhvath-master </code>
</pre>
Run this code:
<pre>
  <code> npm install </code>
  <code> npm start </code>
</pre>
Note:
 Source code of the task has been made under the ExampleTable component.
 <pre>
  <code> src/components/task/ExampleTable.jsx</code>
 </pre>


<!-- ABOUT THE TASK -->
## About The Task
A table (or a list) needs to be created to display a given set of sales transactions.

### Requirements
* The table should be dynamic
* The table can be filtered by certain fields
* Ideal features to include:
  * See only sales values that are not returned
  * View the sales by country
  * View the sales in different currencies
  * See the sales by stores



<!-- SUMMARY OF FINDINDS -->
## Summary of Findings
### Approach Method
I started the project by gathering information from the assesment document. After that, I identified the functional and non-functional
requirements which I have stated in the above section. Array methods such as map and reduce are preferred over other loop methods. In
addition, it would be ideal to use API to fetch data from a website. Apart from that, the document also stated Javascript packages and 
libraries are open to be used which I found very helpful. 

After the information gathering process, I started my research by looking at the given code such as the structure and the library that 
had been used in the code. After studying and analysing the code, I found out Material UI was used to construct the current website. I 
decided to start my learning from there by researching about Material UI and how to use API to fetch data from a website. The research
process produced 3 findings which are:
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  <!-- * Used to fetch data from a website and parse it into JSON -->
* [Material-UI Datatables](https://www.npmjs.com/package/mui-datatables)
  <!-- * Data table components with features such as sorting, filtering, searching... -->
* [React-Table](https://www.npmjs.com/package/react-table)
  <!--  * Lightweight, fast and extendable datagrid -->
 
### Findings
During the design and development process, I tested a few case studies and got the result as follows:
* Fetch API
  * It is used to fetch the data from a website and parse the data into JSON
  * JSON data is parsed into an array by using map method
* Material-UI Datatables
  * The array is used to parse the data in every column in Material-UI Table
  * Filtering, sorting and many other useful functions were already implemented with the MUI Table packages
  * The packages provide a format which is very clean, tidy and most of the functionalities are already provided
  * I decided not to use Material-UI Datatables because it does not allow for heavy customization of the code
* React-Table:
  * The data in the array is parsed into React-table
  * The format of the table is very basic
  * This method allows me to customize the code more such as choosing what data to display, what not to be displayed and manually create my own filter functions


### Implementation
As the findings came to an end, I decided to implement React-Table to store the data of the sales transactions in the final product.
In conclusion, even though Material-UI Datatables is quiet powerful in terms of functionalities over React-table but I prefer to have the freedom to customize the code and functions.

