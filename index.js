
const table = document.createElement('table');
const table1 = document.createElement('table');

const tableCreate = (input) => {
    // console.log(input);
    let maxVal = Math.max(...input)
    table.innerHTML = '';
    table1.innerHTML = '';
    let tableBody = document.getElementById('tableData');
    let tableBody1 = document.getElementById('tableData1');

    let total = 0;
    for (let i = maxVal; i > 0; i--) {
        let tr = document.createElement('tr');
        let tr1 = document.createElement('tr');
        let d = 0
        input.forEach((e, k) => {
            let td = document.createElement('td')
            let td1 = document.createElement('td')
            if (k != 0 && e == 0 && k != input.length - 1) {
                if (d >= i) {
                    td.style.backgroundColor = "blue";
                    td1.style.backgroundColor = 'blue';
                    total += 1;
                } else {
                    td.innerHTML = "";
                    td1.innerHTML = "";
                }
            } else {
                if (e >= i) {
                    td.style.backgroundColor = "yellow";
                } else {
                    td.innerHTML = "";
                }
                d = e;
            }
            tr.append(td);
            tr1.append(td1);
        })

        table.append(tr)
        table1.append(tr1)

    };
    tableBody.append(table)

    let outputUnits = document.getElementById('outputUnits');
    outputUnits.innerText = `output:-${total} Units`;
    tableBody1.append(table1)
}


const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', () => {
    const input = document.getElementById('arrVal').value.split(',');
    for (let val of input) {
        if (isNaN(parseInt(val))) {
            alert('please enter valid input');
        }
    }
    tableCreate(input);
})

