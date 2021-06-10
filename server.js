const yargs  = require("yargs");
const {  addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    getDetail
} = require("./controllers/task.controller");


// node server.js get
yargs.command({
    command: "get",
    builder: {
        id: {
            type: "string",
        },
       
    },
    handler: function ()  {
        const allList = getProduct();
        console.log(allList)
    }
})


// node server.js detail --id="0.2781090107487929"
yargs.command({
    command: "detail",
    
    handler: function (args)  {
        const detailItem = getDetail(args.id);
        console.log(detailItem);
    }
})

// node server.js add --name="du du" --price="3000" --amount="5" --description="trai du du ngot"
yargs.command({
    command: "add",
    builder: {
        id: {
            type: "string",
        },
        name: {
            type: "string"
        },
        price: {
            type: "string"
        },
        amount: {
            type: "string"
        },
        description: {
            type: "string"
        }
    },
    handler: function (args)  {
        const {id, name, price, amount, description} = args;


        addProduct(id, name, price, amount, description)
    }
})

//node server.js update --id="0.5940073754386037" --name="du du du du" --price="3000" --amount="5" --description="trai du du ngot"
yargs.command({
    command: "update",
  
    handler: function (args)  {
        const {id, name, price, amount, description} = args;
       updateProduct(id, name, price, amount, description);
    }
})



// node server.js delete --id="0.5940073754386037"
yargs.command({
    command: "delete",
  
    handler: function (args)  {
        const {id} = args;
        deleteProduct(id);
    }
})

yargs.parse()