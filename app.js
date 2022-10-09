function toggleEvenValues() {
    let spanElements = document.querySelectorAll('span');
    spanElements.forEach(item => {
        if (item.textContent % 2 === 0) {
            item.style.backgroundColor = item.style.backgroundColor === 'green' && 'pink' ? 'transparent' : 'green';
        }
    })
    }

    function toggleEvenColors() {
        let spanElements = document.querySelectorAll('span:nth-child(2n)');
        spanElements.forEach(item => {
            item.style.backgroundColor = item.style.backgroundColor === 'pink' && 'green' ? 'transparent' : 'pink';
        })
    }