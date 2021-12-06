const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age:Number,
    health:String
}
const mydata = mongoose.model('cats', schema);

// const kitty = new mydata({ name: 'testZildjian' });
// kitty.save().then(() => console.log('testmeow'));
// const kitty1=new mydata({name:"zhang3",age:1,health:"good"})
// kitty1.save().then(()=>console.log("new schema writed"))
mydata.find({name:'zhang'},(err,data)=>{console.log(data[0]._doc.name)})