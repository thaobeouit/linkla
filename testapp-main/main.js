// Hàm được gọi khi nhấn nút YES
function yesClicked() {
    alert("Bạn đã chọn YES!");
    // Thêm hành động khác nếu cần
}

// Sự kiện click cho nút activate
document.getElementById('activate').addEventListener('click', function() {
    document.getElementById('panel').classList.add('show');
    document.getElementById('cover').classList.remove('opened');
    setTimeout(function() {
        document.getElementById('turn-off').classList.add('close');
    }, 9000);
});
