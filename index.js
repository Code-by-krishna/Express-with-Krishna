const express = require("express")

const jsonData = [
    {
    "status": {
    "verified": true,
    "sentCount": 1
    },
    "_id": "58e008780aac31001185ed05",
    "user": "58e007480aac31001185ecef",
    "text": "Owning a cat can reduce the risk of stroke and heart attack by a third.",
    "__v": 0,
    "source": "user",
    "updatedAt": "2020-08-23T20:20:01.611Z",
    "type": "cat",
    "createdAt": "2018-03-29T20:20:03.844Z",
    "deleted": false,
    "used": false
    },
    {
    "status": {
    "verified": true,
    "sentCount": 1
    },
    "_id": "58e009390aac31001185ed10",
    "user": "58e007480aac31001185ecef",
    "text": "Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.",
    "__v": 0,
    "source": "user",
    "updatedAt": "2020-08-23T20:20:01.611Z",
    "type": "cat",
    "createdAt": "2018-03-04T21:20:02.979Z",
    "deleted": false,
    "used": false
    },
    {
    "status": {
    "verified": true,
    "sentCount": 1
    },
    "_id": "588e746706ac2b00110e59ff",
    "user": "588e6e8806ac2b00110e59c3",
    "text": "Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.",
    "__v": 0,
    "source": "user",
    "updatedAt": "2020-08-26T20:20:02.359Z",
    "type": "cat",
    "createdAt": "2018-01-14T21:20:02.750Z",
    "deleted": false,
    "used": true
    },
    {
    "status": {
    "verified": true,
    "sentCount": 1
    },
    "_id": "58e008ad0aac31001185ed0c",
    "user": "58e007480aac31001185ecef",
    "text": "The frequency of a domestic cat's purr is the same at which muscles and bones repair themselves.",
    "__v": 0,
    "source": "user",
    "updatedAt": "2020-08-24T20:20:01.867Z",
    "type": "cat",
    "createdAt": "2018-03-15T20:20:03.281Z",
    "deleted": false,
    "used": true
    },
    {
    "status": {
    "verified": true,
    "sentCount": 1
    },
    "_id": "58e007cc0aac31001185ecf5",
    "user": "58e007480aac31001185ecef",
    "text": "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "__v": 0,
    "source": "user",
    "updatedAt": "2020-08-23T20:20:01.611Z",
    "type": "cat",
    "createdAt": "2018-03-01T21:20:02.713Z",
    "deleted": false,
    "used": false
    }
    ]


const app = express();


app.get("/data",(req,res) => {
    res.send("Hello");
})

app.get("/Krishna",(req,res) => {
    res.send("<h1>Coding with krishna</h1>");
});

app.get("/jsonData",(req,res) => {
    res.json({jsonData});
})



app.listen(3000,() => {
    console.log('Server listen on 3000');
})