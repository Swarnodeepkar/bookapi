Book Api instructions:


server:http://localhost:8000/book

const Bookapi= require("./api/bookapi");
app.use("/book",Bookapi);


Packages installed:
install nodejs on the system
npm install -g nodemon                              //for automatically starting the application without restarting
npm install express                                     //install express framework
npm install body-parser --save                   //for frontend to backend conversion 
npm install multer --save                           //upload data
npm install cors                                       //to indicate any origin other than its own from which a browser should permit resources.



For testing of Api crud operations i.e (POST,GET,UPDATE and DELETE)
Rest Client Extension  is installed and used in Vs Code  (Apitest.rest)
You can also test it on Postman.


In Server.js file- Mongodb database is connected with the  Book api and the server is running on port 8000     

in bookapi.js file - Whole Crud Opeartion of book api has been done     (foldername- api)

in bookschema.js file- Schema of book api is being created                    (foldername-schema)
