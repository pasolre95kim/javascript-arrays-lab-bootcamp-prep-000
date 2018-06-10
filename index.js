const app = "I don't do much."

var kittens= ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
 kittens.push("Ralph")
 return name
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return name
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
    return(name)

}
