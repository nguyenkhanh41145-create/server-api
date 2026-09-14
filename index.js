const express = require('express');
const cors = require('cors'); // 1. Thêm dòng này để nạp thư viện cors
const app = express();  

// 2. Thêm dòng này để cho phép ứng dụng ReactJS từ Vercel truy cập lấy dữ liệu
app.use(cors()); 

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