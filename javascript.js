// mini base de donnée
var infoPath = {
    nameBalise: 'Venise',
    namePath: 'img/venise'
    // ListImg=[
    //     '1.jpg',
    //     '2.jpg',
    //     '3.jpg',
    //     '4.jpg',
    //     '5.jpg',
    //     '6.jpg',
    //     '7.jpg'
    // ]  
};

var liste=[1,2,4,3,6,7];


function infoTarget() {
    var Target = event.target;
    // debugger;
    console.log("Propriétés de l'objet");
    console.log(Target);
    console.log(Target.textContent);
    for (value in infoPath){
       console.log(value +' = '+infoPath[value]);
    }
}