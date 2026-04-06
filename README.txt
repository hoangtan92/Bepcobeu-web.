BEP COBEU - MAU WEB TINH CHAY NETLIFY
=====================================

1. Day la mau web tinh, khong can WordPress, khong can WooCommerce.
2. Muc dich: hien thi san pham va bam nut Zalo de dat hang.
3. Ban chi can upload ca thu muc nay len Netlify la chay.

CAC FILE QUAN TRONG
-------------------
- index.html        : Trang chu
- san-pham.html     : Trang danh sach san pham
- gioi-thieu.html   : Trang gioi thieu
- lien-he.html      : Trang lien he
- assets/js/data.js : Noi sua san pham, gia, anh, noi dung Zalo
- assets/css/style.css : Mau sac va giao dien

CACH SUA THONG TIN
------------------
1. Sua so Zalo chung:
   Mo file assets/js/data.js
   Tim dong:
   const zaloPhone = '0900000000';
   Doi thanh so cua ban.

2. Sua san pham:
   Trong file assets/js/data.js, moi san pham co:
   - name        : ten mon
   - price       : gia
   - category    : loai mon
   - image       : anh san pham
   - description : mo ta ngan
   - zaloMessage : cau nhan san khi bam nut Zalo

3. Sua thong tin lien he:
   Mo cac file html va thay:
   - 0900 000 000
   - dia chi
   - Facebook
   - ten thuong hieu neu can

4. Sua anh san pham:
   Hien tai dang dung link anh online.
   Ban co the doi thanh file anh trong thu muc assets/images/.
   Vi du:
   assets/images/nem-chua.jpg

CACH DANG LEN NETLIFY
---------------------
Cach 1:
- Tao site moi tren Netlify
- Keo tha ca thu muc nay vao

Cach 2:
- Day len GitHub
- Ket noi GitHub voi Netlify
- Deploy tu repo

GOI Y NANG CAP SAU NAY
----------------------
- Them trang chi tiet tung san pham
- Them tim kiem / loc danh muc
- Them gallery anh that
- Them form lien he
- Gan domain rieng

