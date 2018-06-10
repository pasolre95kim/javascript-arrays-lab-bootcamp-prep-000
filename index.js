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
    return name

}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return name
}
function appendKitten(name) {
  kittens = [...kittens, name]
  return name
}
