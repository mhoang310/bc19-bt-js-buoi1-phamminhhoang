// Bài 1: Tính lương nhân viên
const luongNgay = 100000;
const soNgay = 20;
const luongNV = luongNgay * soNgay;

console.log("B1: Lương nhân viên:", luongNV) //2000000

// Bài 2: Tính giá trị trung bình
const a1 = 4.3;
const a2 = 12;
const a3 = 34.5;
const a4 = 43;
const a5 = 53;
const gttb = Math.floor((a1 + a2 + a3 + a4 + a5) / 5);

console.log("B2: Giá trị trung bình:", gttb) //29

// Bài 3: Quy đổi tiền
const giaUSD = 23500;
const soUSD = 5;
const stqd = giaUSD * soUSD;

console.log("B3: Số tiền quy đổi:", stqd, "VND") //117500 VND

// Bài 4: Tính diện tích, chu vi hình chữ nhật
const chieuDai = 4.5;
const chieuRong = 5.6;
const dienTich = chieuDai * chieuRong;
const chuVi = (chieuDai + chieuRong) * 2;

console.log("B4: Diện tích:", dienTich, "& Chu vi:", chuVi) // 25.2 & 20.2

// Bài 5: Tính tổng 2 ký số
const soNguyen = 34;
const hangChuc = Math.floor(soNguyen /10);
const hangDV = Math.floor(soNguyen %10);
const tongCong = hangChuc + hangDV;

console.log("B5: Tổng 2 ký số của 34:", tongCong) // 7


