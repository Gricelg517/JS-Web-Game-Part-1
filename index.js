function newImage (url, left, bottom){
    let object =document.createElement ('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom +'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom)

    object.addEventListener('dbclick', () => {
        object.remove()
})
}

let horizon = window.innerHeight / 1.75
let heightOfSky = Window.innerHeight-horizon
let heighOfGrass = horizon

title ('assets/sky.png', 0, hotizon, window, innerWidth/100, heightOfSky/100)
title('assets/grass.png', 0, 0, window.innerWidth/100, heighOfGrass/100)

newImage('assets/green-character.gif, 100, 100')
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)




