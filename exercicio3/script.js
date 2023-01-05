const array = ["teclado", "mouse", "note", "monitor", "celular"]

for (i in array) {
    for (j of array) {
        console.log(`${Number(i)+1} - ${j}`)
    }
}
