
document.addEventListener("DOMContentLoaded", function () {
    // Khi click vào button "Gửi lời chúc", hiển thị form
    document.getElementById("showWishForm").addEventListener("click", function () {
        var wishFormContainer = document.getElementById("wishFormContainer");
        wishFormContainer.classList.toggle("show"); // Hiện/Ẩn form
    });

    // Xử lý khi người dùng gửi lời chúc
    document.getElementById("wishForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn load lại trang

        // Lấy dữ liệu từ input
        var name = document.getElementById("name").value.trim();
        var message = document.getElementById("message").value.trim();

        // Kiểm tra input có bị trống không
        if (name === "" || message === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Tạo phần tử mới cho lời chúc
        var wishList = document.getElementById("wishList");
        var newWish = document.createElement("div");
        newWish.classList.add("wish-item");
        newWish.innerHTML = `<strong>${name}:</strong> ${message}`;

        // Thêm lời chúc vào danh sách
        wishList.appendChild(newWish);

        // Reset form sau khi gửi
        document.getElementById("wishForm").reset();

        // Ẩn form sau khi gửi
        document.getElementById("wishFormContainer").classList.remove("show");
    });
});




function createHeart() {
    let heart = document.createElement("span");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    // Random vị trí xuất hiện
    let x = Math.random() * window.innerWidth;
    let y = window.innerHeight; // Bắt đầu từ dưới

    // Set vị trí trái tim
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px"; // Kích thước random

    document.getElementById("heart-container").appendChild(heart);

    // Xóa sau khi animation kết thúc
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Tạo nhiều trái tim mỗi 500ms
setInterval(createHeart, 500);


// Cập nhật đồng hồ đếm ngược
function updateCountdown() {
    const weddingDate = new Date("2025-05-21T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    document.getElementById("days").innerText = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((timeLeft % (1000 * 60)) / 1000);
}

// Tạo lịch tháng 9/2024
function generateCalendar() {
    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";

    const daysInMonth = 30; // Tháng 9 có 30 ngày
    const firstDay = new Date(2025, 5, 21).getDay(); // Lấy ngày bắt đầu (8 = tháng 9)

    let date = 1;
    for (let i = 0; i < 5; i++) { // Tối đa 5 hàng
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");

            if (i === 0 && j < firstDay) {
                cell.innerText = "";
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.innerText = date;
                
                // Nếu ngày là ngày cưới (22/9) thì đánh dấu
                if (date === 21) {
                    cell.classList.add("highlight");
                }
                
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

/*document.addEventListener("DOMContentLoaded", function () {
    const wishForm = document.getElementById("wish-form");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const wishListContainer = document.getElementById("wish-list-container");
    const wishList = document.getElementById("wish-list");
    const removeWishesBtn = document.getElementById("remove-wishes-btn");

    // Kiểm tra & hiển thị lời chúc từ localStorage
    let savedWishes = JSON.parse(localStorage.getItem("wishes")) || [];
    renderWishes();

    // Xử lý sự kiện gửi lời chúc
    wishForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name && message) {
            const newWish = { name, message };

            // Thêm vào danh sách & lưu localStorage
            savedWishes.push(newWish);
            localStorage.setItem("wishes", JSON.stringify(savedWishes));

            // Hiển thị danh sách lời chúc
            renderWishes();

            // Xóa nội dung nhập vào form
            nameInput.value = "";
            messageInput.value = "";
        }
    });

    // Xử lý sự kiện xóa toàn bộ lời chúc
    removeWishesBtn.addEventListener("click", function () {
        if (confirm("Bạn có chắc chắn muốn xóa tất cả lời chúc?")) {
            localStorage.removeItem("wishes"); // Xóa dữ liệu trong localStorage
            savedWishes = []; // Cập nhật danh sách trống
            renderWishes();
        }
    });

    // Hàm hiển thị danh sách lời chúc
    function renderWishes() {
        wishList.innerHTML = "";

        if (savedWishes.length > 0) {
            wishListContainer.style.display = "block"; // Hiện phần danh sách
            removeWishesBtn.style.display = "block"; // Hiện nút "Xóa lời chúc"
        } else {
            wishListContainer.style.display = "none"; // Ẩn phần danh sách
            removeWishesBtn.style.display = "none"; // Ẩn nút "Xóa lời chúc"
            return;
        }

        savedWishes.forEach((wish, index) => {
            const wishItem = document.createElement("div");
            wishItem.classList.add("wish-item");
            wishItem.innerHTML = `<strong>${wish.name}:</strong> ${wish.message}`;
            wishList.appendChild(wishItem);
        });
    }
});*/
document.addEventListener("DOMContentLoaded", function () {
    const showWishFormButton = document.getElementById("show-wish-form"); // Nút mở form
    const wishFormSection = document.getElementById("wish-form-section"); // Section form
    const wishForm = document.getElementById("wish-form"); // Form
    const nameInput = document.getElementById("name"); // Input tên
    const messageInput = document.getElementById("message"); // Input lời chúc
    const wishSection = document.getElementById("wish-section"); // Khu vực danh sách lời chúc
    const wishList = document.getElementById("wish-list"); // Danh sách lời chúc

    // Khi click "Gửi lời chúc →" thì hiển thị form và scroll xuống
    showWishFormButton.addEventListener("click", function () {
        wishFormSection.style.display = "block";
        wishFormSection.scrollIntoView({ behavior: "smooth" });
    });

    // Khi gửi form lời chúc
    wishForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn reload trang

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name && message) {
            // Tạo phần tử hiển thị lời chúc
            const wishItem = document.createElement("div");
            wishItem.classList.add("wish-item");
            wishItem.innerHTML = `
                <strong>${name}:</strong> ${message} 
                <span class="remove-wish">🗑️</span>
            `;

            // Thêm lời chúc vào danh sách
            wishList.appendChild(wishItem);

            // Hiển thị danh sách lời chúc nếu chưa có
            wishSection.style.display = "block";

            // Xử lý sự kiện xóa lời chúc khi click vào icon 🗑️
            wishItem.querySelector(".remove-wish").addEventListener("click", function () {
                wishItem.remove();

                // Nếu không còn lời chúc nào, ẩn khu vực lời chúc
                if (wishList.children.length === 0) {
                    wishSection.style.display = "none";
                }
            });

            // Reset form sau khi gửi lời chúc
            nameInput.value = "";
            messageInput.value = "";
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const wishButton = document.querySelector(".btn-primary"); // Button "Gửi lời chúc"
    const wishFormSection = document.getElementById("wish-form"); // Section chứa form

    if (wishButton && wishFormSection) {
        wishButton.addEventListener("click", function () {
            // Hiển thị form nếu đang ẩn
            if (wishFormSection.style.display === "none" || wishFormSection.style.display === "") {
                wishFormSection.style.display = "block";
            }

            // Cuộn xuống form
            wishFormSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});

