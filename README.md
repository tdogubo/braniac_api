# braniac_api
This is the face recognition API built from the CLARIFAI API.

## Endpoints
* '/register', a POST request for new user registeration.
* '/signin' ,a POST request for existing users access.
* '/image' ,a PUT request .
* '/imageUrl' ,a POST request which takes in the URL of the image to be identified and passes it on to the CLARIFAI API.which is the face identification endpoing. When this is called a box is placed on the face identified by the Api
* '/profile/:id'
