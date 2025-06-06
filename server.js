const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());//where we get request it should be accepted
app.use(express.json());//for redirecting into object model from string model
const mysql = require('mysql2');

//database connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'nandu@123',
    database:'todo'
})

db.connect((err)=>
{
    if(err)
    {
        console.log("error connecting to the database");
        return
    }
    console.log("connected with database");
})

app.get('/',(req,res)=>{
    console.log('default route');
    db.query('select *from todoItems',(err,result)=>{
        if(err)
        {
            console.log("error occured",err);
            return
        }
        console.log("data:",res);
        res.send(result);
    })
    })

app.post('/add-item',(req,res)=>{
    console.log(req.body);
    
    db.query(`insert into todoItems(itemDescription) values('${req.body.text}')`,(err,results)=>{
        if(err)
        {
            console.log("error occured",err);
            return
        }
        console.log("created successfully");
    })
    res.send("added successfully")
})
app.put('/edit-item',(req,res)=>{
    console.log('Line 53:',req.body);
    db.query(`update todoItems set itemDescription="${req.body.itemDescription}" where ID=${req.body.ID};`,(err,results)=>{
        if(err)
        {
            console.log("error occured",err);
            return
        }
        console.log("created successfully");
    })
    res.send("success");
})
app.listen(3000,()=>{
    console.log('server started running on port 3000')
})