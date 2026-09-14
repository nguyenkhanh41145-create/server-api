const express = require('express');
const app = express();

// Sử dụng biến môi trường PORT của Render khi deploy, hoặc mặc định là 5000 ở local
const PORT = process.env.PORT || 5000;

// Cấu hình đường dẫn chính (Route) hiển thị chữ Hello World
app.get('/', (req, res) => {
    res.send('Hello World Restful API project using Node.js + Express');
});

// Kích hoạt Server lắng nghe các yêu cầu gửi đến
app.listen(PORT, () => {
    console.log(`Server đang chạy ổn định tại cổng: ${PORT}`);
});