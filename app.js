function toggleEvenColor() {
    console.log("clicked")
    let spanElements = document.querySelectorAll('span');
    spanElements.forEach(item => {
        if (item.textContent % 2 === 0) {
            item.style.backgroundColor = item.style.backgroundColor !== 'green' ? 'green' : 'transparent';
        }
    })
    }