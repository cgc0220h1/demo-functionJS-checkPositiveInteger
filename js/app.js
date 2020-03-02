function validate(value) {
    return (Number.isInteger(value) && value > 0);
}

function checkNum() {
    let num;
    for (; ;) {
        num = prompt("Mời nhập vào giá trị cần kiểm tra");
        if (num === "") {
            alert("Không có giá trị nhập vào. Vui lòng nhập giá trị.")
        } else {
            break;
        }
    }
    alert(validate(+num));
}