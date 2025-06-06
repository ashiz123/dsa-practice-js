

class test{


    printFirstName(callback){
       console.log('firstname');
       callback(this);

    }


    printLastName(){
        console.log('lastname');
    }

}


let testing = new test();
testing.printFirstName(function(object){
    object.printLastName();
})
