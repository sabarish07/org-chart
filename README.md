# Org Chart Project:

Assumptions:
The inital org data is saved as a json under src/store/data.json.
Any add, edit and remove is temporarily done locally saved in the global state. On relod of page again the default data will be loaded.

Main Modules:

Components:
1. Org - Creates the basic root org.
2. Org Level - Each level of Org (which iteratively calls the next level)
3. Org Node - The single node of employee
4. Popup - To add new employee or node

Store:
1. Context - Global Context
2. GlobalState - The global sate and actions. Currently the API logic to add, edit and remove org nodes is written within here.
3. data.json - Default Data. The content is basically a tree. With the root node and children for each nodes. 

Design Consideration for Data Structure:

There were two options considered while creating the data structure for org. 
1. Create a tree like structure, where each employee is a node and then within each node there is a array of reportees under children.
`[
    {
        "id": 0,
        "title": "CEO",
        "startDate": "10/10/2011",
        "name": "Mr CEO",
        "children": [
            {
                "id": 1,
                "title": "President",
                "startDate": "10/10/2011",
                "name": "Mr President"
            },]
    }]`
2. Create a flat array where each array element represents an employee has a parent id.  
`[{
   "id": 0,
   "title": "CEO",
   "startDate": "10/10/2011",
   "name": "Mr CEO",
   "parentId: "null 
},{
    "id": 1,
    "title": "President",
    "startDate": "10/10/2011",
    "name": "Mr President",
    "parentId": 0
}]`

I went with the option 1, since the primary action is to display the org and its easier to traverse through each node and get the reportee details in a single loop. 
It might be more efficient with option 2, if edits or changes in org is more frequent. 

# Running the project

### `npn install`
### `npm start`



