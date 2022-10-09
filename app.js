function toggleEvenValues() {
    let spanElements = document.querySelectorAll('span');
    spanElements.forEach(item => {
        if (item.textContent % 2 === 0) {
            item.style.backgroundColor = item.style.backgroundColor !== 'green' ? 'green' : 'transparent';
        }
    })
    }

    function toggleEvenColors() {
        let spanElements = document.querySelectorAll('span:nth-child(2n)');
        spanElements.forEach(item => {
            item.style.backgroundColor = item.style.backgroundColor !== 'pink' ? 'pink' : 'transparent';
        })
    }