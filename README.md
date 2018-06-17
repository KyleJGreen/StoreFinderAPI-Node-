# StoreFinderAPI-Node

This API can be called from https://storefinder-api.herokuapp.com/

Currently, only the "things" routes are functional, as these are called by the AngularInventorySystem interface.
One may make a :
<p>
POST request to api/things/new to add a new item
<p>
GET request to api/things/all to retrieve all items
GET request to /api/things/id/:id to retrieve a signle item
PUT request to /api/things/update/:id to update an item
DELETE request to /api/things/delete/:id to delete an item

One may also run AngularInventorySystem locally to call this API through a web interface.
