const cats = new Array('Milo', 'Otis', 'Garfield')


beforeEach(function () {
      cats.length = 0;
      cats.push('Milo', 'Otis', 'Garfield');
    });

function destructivelyAppendCat(name){
    return (cats.push(name))
}
destructivelyAppendCat('Ralph')

function destructivelyPrependCat(name){
return (cats.unshift(name))
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat(name){
return (cats.pop(name))
}

destructivelyRemoveLastCat('Garfield')

function destructivelyRemoveFirstCat(name){
return (cats.shift('Millo'))
}

function appendCat(name){
    return ([...cats , name])
}
appendCat(...cats, "Broom")
appendCat(...cats)


function prependCat(name){
    return ([name, ...cats])
}
prependCat("Arnold", ...cats)

function removeLastCat(){
    return (cats.slice(0,-1))
}
removeLastCat()

function removeFirstCat(){
    return (cats.slice(1))
}