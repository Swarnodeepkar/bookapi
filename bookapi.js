const express= require("express")
const router= express.Router();
module.exports= router;

let Books= require("../schema/bookschema");


//Post Book data
router.post("/",async(req,res)=>{
    let bookinfo= new Books({
        Title: req.body.Title,
        Author: req.body.Author,
        Summary: req.body.Summary
    })
    let Bookdata = await bookinfo.save(); //insert new books
    res.status(201).json(Bookdata);
});

//Get Book data

router.get("/",async(req,res)=>{
    let booklist= await Books.find();
    if (booklist==null){
        res.status(201).json("NO BOOKS RECORDS FOUND")
    }else{
        res.status(201).json(booklist);
    }

});

// Fetch Book using Id

router.get("/:id",async(req,res)=>{
    let id = req.params.id;
    let bookinfo= await Books.findById(id);
    if (bookinfo==null){
        res.status(201).json("NO BOOKS ID Matched")
    }else{
        res.status(201).json(bookinfo);
    }

})

// Delete Book Data

router.delete("/:id",async(req,res)=>{
    let id = req.params.id;
    let bookinfo = await Books.findById(id);
    if(bookinfo==null){
        res.status(201).json({"message":"NO Book records Found"});

    }else{
        await bookinfo.deleteOne();
        res.status(201).json({message:"Deleted successfully"});
    }

});


// Update Book Data

router.put("/",async(req,res)=>{
    let id = req.body.id;
    let bookinfo= await Books.findById(id);

    if(bookinfo!=null){

        bookinfo.Title= req.body.Title;
        bookinfo.Author= req.body.Author;
        bookinfo.Summary= req.body.Summary;

        let finalist= await bookinfo.save();
        res.status(201).json(finalist);
    

    }else{
        res.status(201).json({"message":"NO Book records Found"});
      
    }
})

