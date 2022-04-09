const app = document.querySelector('.container')

for (let i = 0; i < 30; i++) {
    const hexagonRow = document.createElement('div')
    hexagonRow.className = 'hexagon-row'
    app.appendChild(hexagonRow)
}

const hexagonRows = [...document.querySelectorAll('.hexagon-row')]
hexagonRows.forEach((hexagonRow, index) => {
    let hexagonNum = 0
    if (index %2 === 0) {
        hexagonNum = 12
    } else {
        hexagonNum = 11
    }
    for (let i = 0; i < hexagonNum; i++) {
        const hexagon = document.createElement('div')
        hexagon.className = 'hexagon'

        hexagon.onmouseenter = () => setColor(hexagon)
        hexagon.onmouseleave = () => removeColor(hexagon)

        hexagonRow.appendChild(hexagon)
    }
    hexagonRow.style.cssText = `transform: 
        translateX(${index % 2 ? '0' : '5vw'}) 
        translateY(-${25 * (index + 1)}%);`
})

function getRandomColor () {
    const colorNumber = Math.floor(Math.random() * Math.pow(16,6))
    const hexColor = `#${colorNumber.toString(16)}`
    return hexColor
}

function setColor (el) {
    const color = getRandomColor()
    el.style.background = color
    el.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`
}

const DEFAULT_COLOR = '#0d0d0d'
const DEFAULT_BOX_SHADOW = '0 0 2px #000'

function removeColor (el) {
    el.style.background = DEFAULT_COLOR
    el.style.boxShadow = DEFAULT_BOX_SHADOW
}
