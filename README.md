# braniac_api
This is the face recognition API built from the CLARIFAI API.

## Endpoints
* `'/register'`, a POST request for new user registeration.
* `'/signin'` ,a POST request for existing users access.
* `'/image'` ,a PUT request which updates the entries of the user.
* `'/imageUrl'` ,a POST request which takes in the URL of the image to be identified; passes it on to the CLARIFAI API which in turn, identificaties the face by placing a box on the face identified.
* `'/profile/:id'`, a POST request which gets a users information from the database. This has `NOT` been itegrated into the API yet.
