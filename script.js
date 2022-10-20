const images = document.getElementsByClassName("image")

let globalIndex = 0

let last = { x: 0, y: 0 }

const activate = (img, x, y) => {
    img.style.left = `${x}px`
    img.style.top = `${y}px`

    img.dataset.status = "active"

    last = { x, y }
}

const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y)
}

window.onmousemove = e => {
    if (distanceFromLast(e.clientX, e.clientY) > 100) {
        const lead = images[globalIndex % images.length]
        let tail = images[(globalIndex - 5) % images.length]
    
        activate(lead, e.clientX, e.clientY)

        if (tail) tail.dataset.status = "inactive"
    
        globalIndex++
    }
}