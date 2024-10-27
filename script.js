// Cuộn đến phần đã chọn khi nhấn vào nút "About Me" hoặc các liên kết trong sidebar
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Thêm hiệu ứng kích hoạt cho liên kết sidebar khi được click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Loại bỏ class "active" khỏi tất cả các liên kết
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
        // Thêm class "active" vào liên kết được click
        this.classList.add('active');
    });
});