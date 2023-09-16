var pdf = require('pdf-creator-node');
var fs = require('fs');


var html = fs.readFileSync("template.html", "utf-8");


var options = {
    format : "A3",
    orientation: "portrait", 
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Godfrey Dhlandhlara</div>'
    }, 
    foooter:{
        height: "28mm",
        contents: {
            first: 'Cover Page', 
            2: 'Second Page',
            default: '<span style="color: #444;">{{page}}</span><span>{{pages}}</span>',
            last: 'Last Page'
        },
    }
}

var users = [
    {
        name: "Bob",
        age:"23"
    },
    {
        name: "Bill",
        age:"24"
    },
    {
        name: "Kim",
        age:"22"
    }

];

var document = {
    html:html,
    data:{
        users:users,
    },
    path: "./output.pdf",
    type: "",
}

pdf.create(document, options)
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.error(error)
})