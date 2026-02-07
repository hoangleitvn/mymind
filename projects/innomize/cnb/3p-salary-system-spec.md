# Đặc tả hệ thống lương 3P - Innomize

> **Phiên bản**: 1.6 Draft
> **Ngày tạo**: 2026-02-04
> **Trạng thái**: Đang thu thập yêu cầu

---

## 1. Tổng quan

### 1.1 Mục tiêu dự án

Xây dựng hệ thống lương 3P (Pay for Position, Pay for Person, Pay for Performance) nhằm:

1. **Điều chỉnh lương cơ bản** lên mức chấp nhận được, giảm rủi ro pháp lý về BHXH
2. **Chuẩn hoá cơ cấu lương** với tỷ lệ rõ ràng, dễ hiểu cho nhân viên
3. **Tạo động lực** thông qua cơ chế thưởng biến thiên theo hiệu suất
4. **Giảm rủi ro** từ các khoản hỗ trợ, trợ cấp không rõ ràng

### 1.2 Phạm vi áp dụng

| Ưu tiên | Bộ phận | Số NV | Ghi chú |
|---------|---------|-------|---------|
| 1 | IT Production | 21 | Ưu tiên cao nhất |
| 2 | Sales | 1 | Cần cơ chế commission riêng |
| 3 | Operation (HR, Kế toán) | 3 | Áp dụng sau |

### 1.3 Khung lương tham chiếu

Sử dụng khung lương DEV làm chuẩn, các vị trí khác có tỷ lệ tương ứng.

Chi tiết: `projects/innomize/cnb/career-path-salary-range.md`

---

## 2. Hiện trạng

### 2.1 Thông tin tổ chức

| Chỉ số | Giá trị |
|--------|---------|
| Tổng số nhân viên | 25 |
| Loại hình | 100% Full-time |
| Cơ cấu | IT Production: 21, Sales: 1, HR: 2, Kế toán: 1 |

### 2.2 Cơ cấu lương hiện tại

**Công thức hiện tại:**
```
Gross Salary = Base Salary + Other Salary + KRD + Billable
```

**Vấn đề:**
- **Base Salary (BHXH)**: Rất thấp, chỉ 5.3-7.5M VND cho tất cả levels
- **Other Salary**: Chiếm phần lớn gross, không có cơ cấu rõ ràng
- **KRD**: 1-4M/tháng, áp dụng case-by-case cho dự án ODC
- **Billable**: 1-2.5M/tháng, tính theo timesheet

### 2.3 Dữ liệu lương hiện tại

#### IT Production - Leadership

| Họ tên | Vị trí | Gross | Base | Other | KRD | Billable | % Base/Gross |
|--------|--------|-------|------|-------|-----|----------|--------------|
| Lê Quang Hoàng | Giám đốc | 57.5M | 7.5M | 50M | 0 | 0 | 13% |
| Ngô Văn Hậu | Trưởng phòng | 60M | 6.23M | 53.77M | 0 | 0 | 10% |
| Nguyễn Thị Hường | Senior PM | 65M | 5.65M | 59.35M | 4M | 0 | 9% |

#### IT Production - Tech Lead

| Họ tên | Vị trí | Gross | Base | Other | KRD | Billable | % Base/Gross |
|--------|--------|-------|------|-------|-----|----------|--------------|
| Trần Thanh Sang | Tech Lead 1 | 40.1M | 5.72M | 34.37M | 4M | 0 | 14% |
| Đinh Phước Hiệp | Tech Lead 1 | 53.3M | 6.01M | 47.29M | 4M | 0 | 11% |
| Hoàng Ngọc Tuấn Anh | Test Lead 1 | 46.8M | 5.86M | 40.97M | 3M | 0 | 13% |

#### IT Production - Senior Engineer

| Họ tên | Vị trí | Gross | Base | Other | KRD | Billable | % Base/Gross |
|--------|--------|-------|------|-------|-----|----------|--------------|
| Nguyễn Văn Dô | Sr. SE 1 | 35.5M | 5.86M | 29.64M | 3M | 1.5M | 17% |
| Phạm Hùng | Sr. SE 1 | 44M | 5.86M | 38.18M | 0 | 1M | 13% |

#### IT Production - Engineer

| Họ tên | Vị trí | Gross | Base | Other | KRD | Billable | % Base/Gross |
|--------|--------|-------|------|-------|-----|----------|--------------|
| Nguyễn Thanh Tố | SE 3 | 25M | 5.86M | 19.15M | 3M | 2.5M | 23% |
| Đoàn Tiến Phát | SE 3 | 28M | 5.86M | 22.15M | 3M | 2.5M | 21% |
| Trần Vũ Ngọc Hoàng | SE 3 | 32.5M | 5.58M | 26.95M | 0 | 1M | 17% |
| Nguyễn Văn Việt | SE 3 | 33M | 5.58M | 27.44M | 0 | 2.5M | 17% |
| Hồ Minh Tuấn | SE 2 | 26M | 5.31M | 20.69M | 0 | 0 | 20% |
| Trần Ngọc Sinh | SE 2 | 13M | 5.58M | 7.38M | 2M | 1M | 43% |
| Vũ Bá Hưng | SE 1 | 11M | 5.31M | 5.69M | 1M | 1M | 48% |
| Nguyễn Thanh Tân | SE 1 | 11M | 5.31M | 5.69M | 0 | 0 | 48% |
| Nguyễn Anh Đức | SE 1 | 11M | 5.31M | 5.69M | 0 | 0 | 48% |
| Đoàn Ngọc Yến Vy | TE 1 | 10M | 5.31M | 4.69M | 0 | 0 | 53% |

#### Back Office

| Họ tên | Vị trí | Gross | Base | Other | KRD | Billable | % Base/Gross |
|--------|--------|-------|------|-------|-----|----------|--------------|
| Nguyễn Thu Trang | HR Lead | 27.15M | 5.45M | 21.7M | 1M | 0 | 20% |
| Lê Quyền Trân | HR Officer | 13.79M | 5.86M | 7.94M | 2M | 0 | 42% |
| Dương Thành Vinh | Sales/SDR | 11M | 5.31M | 5.69M | 0 | 0 | 48% |

### 2.4 Phân tích vấn đề

| Vấn đề | Mô tả | Rủi ro |
|--------|-------|--------|
| Base Salary quá thấp | Chỉ 5.3-7.5M cho tất cả levels | Rủi ro pháp lý BHXH, khó giải thích cho NV |
| % Base/Gross không đồng nhất | Dao động 9-53% | Không công bằng, khó quản lý |
| "Other Salary" không rõ ràng | Một khoản lớn không cấu trúc | Khó kiểm soát, khó điều chỉnh |
| Không có P3 biến thiên | Lương hiệu suất cố định | Không tạo động lực |
| KRD/Billable case-by-case | Không có quy tắc rõ ràng | Khó công bằng, khó dự báo chi phí |

---

## 3. Yêu cầu hệ thống 3P

### 3.1 Mô hình 3P tổng quan

```
┌─────────────────────────────────────────────────────────────────┐
│                        GROSS SALARY                             │
├─────────────────┬─────────────────────┬─────────────────────────┤
│       P1        │         P2          │           P3            │
│  Pay for        │    Pay for          │     Pay for             │
│  Position       │    Person           │     Performance         │
├─────────────────┼─────────────────────┼─────────────────────────┤
│ • Căn cứ BHXH   │ • Lương năng lực    │ • Thưởng hiệu suất      │
│ • Theo Level    │ • Phụ cấp trách     │ • Billable (nếu có)     │
│ • Cố định       │   nhiệm             │ • Biến thiên 80-120%    │
│ • Review 6-12   │ • Phụ cấp chuyên    │ • Exception-based eval  │
│   tháng/lần     │   môn               │ • Tính theo tháng       │
│                 │ • Cố định/tháng     │ • Scalable 50-100 NV    │
└─────────────────┴─────────────────────┴─────────────────────────┘
```

### 3.2 P1 - Pay for Position

**Định nghĩa**: Lương cơ bản theo chức danh/level, là căn cứ đóng BHXH.

**Nguyên tắc**:
- Cố định theo level, không phụ thuộc hiệu suất
- Level cao hơn → P1 cao hơn (tuyệt đối)
- Level cao hơn → % P1/Gross thấp hơn (tương đối)
- Review và điều chỉnh 6 tháng/lần hoặc khi thăng level

**Yêu cầu**:
- Mức P1 phải nằm trong khung lương theo level
- Tăng P1 trung bình 30-50% so với Base Salary hiện tại
- Có bậc thâm niên trong mỗi level (+3-5%/năm, cap tại mức trần)

### 3.3 P2 - Pay for Person

**Định nghĩa**: Lương theo năng lực cá nhân và vai trò đảm nhiệm.

**Cấu trúc P2:**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              P2 TOTAL                                   │
├─────────────────────────────────────────────────────────────────────────┤
│  P2.1 - Lương năng lực     │ Cố định theo level, skill matrix          │
│  P2.2 - Phụ cấp cố định    │ Cố định theo chức danh (ăn, ĐP, ĐT, xe)  │
│  P2.3 - Phụ cấp trách nhiệm│ Cố định khi giữ vai trò Lead/PM/SA       │
│  P2.4 - Phụ cấp kiêm nhiệm │ Biến thiên khi kiêm nhiệm nhiều dự án    │
│  P2.5 - Bonus dự án        │ Thỏa thuận riêng (1.5 dự án, đặc biệt)   │
└─────────────────────────────────────────────────────────────────────────┘
```

**Chi tiết từng thành phần:**

| Mã | Thành phần | Tính chất | Áp dụng | Ghi chú |
|----|------------|-----------|---------|---------|
| P2.1 | Lương năng lực | Cố định | Tất cả | Theo skill matrix, level |
| P2.2 | Phụ cấp cố định | Cố định | Tất cả | Ăn uống, đồng phục, ĐT, xăng xe |
| P2.3 | Phụ cấp trách nhiệm | Cố định khi giữ vai trò | Lead/PM/SA | Quản lý team/dự án |
| P2.4 | Phụ cấp kiêm nhiệm | Biến thiên | Case-by-case | Lead 2 dự án, kiêm vai trò |
| P2.5 | Bonus dự án | Thỏa thuận | Case-by-case | 1.5 dự án, dự án đặc biệt |

**Nguyên tắc**:
- P2.1, P2.2, P2.3: Cố định hàng tháng, review hàng năm
- P2.4, P2.5: Biến thiên theo tình hình dự án, thỏa thuận riêng
- Tất cả P2 không tính vào căn cứ BHXH (P1)

### 3.5 Bảng phụ cấp P2 chi tiết

#### 3.5.1 P2.2 - Phụ cấp cố định (theo chức danh)

**Bảng viên chức quản lý:**

| Chức danh | Ăn uống | Đồng phục | Điện thoại | Xăng xe | **Tổng** |
|-----------|---------|-----------|------------|---------|----------|
| Giám đốc | 2,300,000 | 1,000,000 | 300,000 | - | **3,600,000** |
| Phó Giám đốc | 1,840,000 | 1,000,000 | 300,000 | - | **3,140,000** |
| Trưởng bộ phận / Trưởng phòng | 1,380,000 | 1,000,000 | 300,000 | 460,000 | **3,140,000** |
| Trưởng nhóm | 1,150,000 | 1,000,000 | 300,000 | 460,000 | **2,910,000** |

**Bảng viên chức chuyên môn:**

| Chức danh | Ăn uống | Đồng phục | Điện thoại | Xăng xe | **Tổng** |
|-----------|---------|-----------|------------|---------|----------|
| Nhân viên IT, Hành chính, Kế toán | 920,000 | 1,000,000 | 300,000 | 460,000 | **2,680,000** |
| Nhân viên Tạp vụ, Bảo vệ | - | - | - | - | **0** |

**Mapping với Career Level:**

| Level | Chức danh tương ứng | P2.2 Phụ cấp cố định |
|-------|---------------------|----------------------|
| 4-5 (Director/Sr.Manager) | Giám đốc / Phó Giám đốc | 3,140,000 - 3,600,000 |
| 5-6 (Manager) | Trưởng bộ phận / Trưởng phòng | 3,140,000 |
| 6 (Lead) | Trưởng nhóm | 2,910,000 |
| 7-10 (Senior/Engineer/Junior) | Nhân viên IT | 2,680,000 |
| Back Office | Hành chính, Kế toán | 2,680,000 |

#### 3.5.2 P2.3 - Phụ cấp trách nhiệm (Lead/PM/SA)

| Vai trò | Mức phụ cấp/tháng | Điều kiện |
|---------|-------------------|-----------|
| Solution Architect | 5,000,000 - 7,000,000 | Architect chính của dự án |
| Project Manager | 4,000,000 - 6,000,000 | Quản lý dự án |
| Tech Lead | 3,000,000 - 5,000,000 | Lead team ≥3 người |
| Test Lead / QA Lead | 2,000,000 - 4,000,000 | Lead QA team |
| Team Lead (non-tech) | 2,000,000 - 3,000,000 | Lead team back office |

**Ghi chú:**
- Mức cụ thể trong range tùy thuộc quy mô team/dự án
- Một người có thể nhận nhiều vai trò (VD: Tech Lead + PM)
- Hết vai trò = hết phụ cấp trách nhiệm

#### 3.5.3 P2.4 - Phụ cấp kiêm nhiệm

| Tình huống | Mức phụ cấp/tháng | Điều kiện |
|------------|-------------------|-----------|
| Lead/PM 2 dự án nhỏ | 1,500,000 - 2,500,000 | Mỗi dự án <5 người |
| Lead/PM 2 dự án vừa | 2,500,000 - 4,000,000 | Mỗi dự án 5-10 người |
| Lead/PM 2 dự án lớn | 4,000,000 - 6,000,000 | Mỗi dự án >10 người |
| Kiêm nhiệm vai trò khác | 1,000,000 - 3,000,000 | VD: Dev kiêm BA, QA kiêm Doc |

**Ghi chú:**
- Áp dụng khi workload vượt 100% capacity tiêu chuẩn
- Review hàng tháng theo tình hình dự án
- Có thể ngừng khi dự án kết thúc hoặc có người thay thế

#### 3.5.4 P2.5 - Bonus dự án (Thỏa thuận riêng)

| Tình huống | Cách tính | Ghi chú |
|------------|-----------|---------|
| Tham gia 1.5 dự án | +30-50% P2.3 | Capacity 150% |
| Dự án đặc biệt/khẩn cấp | Thỏa thuận | OT, deadline gấp |
| Dự án có lợi nhuận cao | % lợi nhuận | Khi close dự án |
| Support ngoài giờ | Thỏa thuận | On-call, weekend |

**Ghi chú:**
- Thỏa thuận trước khi bắt đầu, ghi nhận bằng văn bản/email
- Có thể là khoản cố định hoặc % theo kết quả
- Thanh toán theo tháng hoặc khi close dự án

### 3.4 P3 - Pay for Performance

**Định nghĩa**: Lương theo hiệu quả công việc, biến thiên theo KPI.

**Công thức**:
```
P3 = P3 Target × KPI Multiplier × Attendance Multiplier
```

**Thành phần KPI** (Baseline = 100):

| Thành phần | Nguồn | Range | Mô tả |
|------------|-------|-------|-------|
| Attendance Score | HR (tự động) | 80-100 | Ngày công, nghỉ không phép |
| Performance Score | Manager (exception) | 80-120 | Đánh giá hiệu suất |
| Compliance Score | HR (tự động) | 80-100 | Vi phạm nội quy |
| Billable Score | Timesheet (tự động) | 80-120 | Chỉ dự án ODC |

**Nguyên tắc**:
- Biến thiên trong khoảng **80-120%** target (kiểm soát rủi ro tài chính)
- Baseline = 100 = Đạt yêu cầu chuẩn
- **Exception-based**: Manager chỉ report những người ≠100
- Tính theo **tháng**, có thể tổng hợp theo quý
- Áp dụng **chung** cho tất cả vị trí (Dev, QA, PM, Lead, SA)
- Chi tiết framework xem **Section 5**

---

## 4. Phương án đề xuất

### 4.1 Tỷ lệ P1:P2:P3 theo Level

#### Option A: Conservative (An toàn)

Ưu tiên ổn định, P3 biến thiên ít.

| Level | P1 | P2 | P3 | Đặc điểm |
|-------|----|----|----|----|
| 4-5 (Director/Sr.Manager) | 20% | 60% | 20% | Ổn định cao, P3 gắn KPI công ty |
| 6 (Lead) | 25% | 55% | 20% | Cân bằng |
| 7 (Senior) | 30% | 55% | 15% | Ổn định để giữ chân |
| 8 (Engineer) | 35% | 55% | 10% | Ưu tiên ổn định |
| 9-10 (Junior/Intern) | 45% | 50% | 5% | Tập trung học hỏi |
| Back Office | 40% | 50% | 10% | Ổn định cao |

**Ưu điểm**: Ít rủi ro, dễ chuyển đổi, NV dễ chấp nhận
**Nhược điểm**: Ít động lực, P3 không đủ hấp dẫn

#### Option B: Balanced (Cân bằng) - Khuyến nghị

Cân bằng giữa ổn định và động lực.

| Level | P1 | P2 | P3 | Đặc điểm |
|-------|----|----|----|----|
| 4-5 (Director/Sr.Manager) | 18% | 52% | 30% | P3 cao, gắn kết quả kinh doanh |
| 6 (Lead) | 22% | 53% | 25% | Trách nhiệm cao, P3 đáng kể |
| 7 (Senior) | 28% | 52% | 20% | Cân bằng ổn định và động lực |
| 8 (Engineer) | 32% | 53% | 15% | Ổn định nhưng có động lực |
| 9-10 (Junior/Intern) | 42% | 50% | 8% | Ưu tiên ổn định |
| Back Office | 38% | 52% | 10% | Ổn định cao |

**Ưu điểm**: Cân bằng, P3 đủ hấp dẫn để tạo động lực
**Nhược điểm**: Cần KPI framework rõ ràng

#### Option C: Aggressive (Năng động)

Ưu tiên động lực, P3 biến thiên cao.

| Level | P1 | P2 | P3 | Đặc điểm |
|-------|----|----|----|----|
| 4-5 (Director/Sr.Manager) | 15% | 45% | 40% | P3 rất cao, high risk/high reward |
| 6 (Lead) | 20% | 50% | 30% | Động lực mạnh |
| 7 (Senior) | 25% | 50% | 25% | Cân bằng nghiêng về động lực |
| 8 (Engineer) | 30% | 50% | 20% | Có động lực rõ ràng |
| 9-10 (Junior/Intern) | 40% | 50% | 10% | Vẫn ổn định |
| Back Office | 35% | 50% | 15% | Có động lực |

**Ưu điểm**: Động lực mạnh, gắn kết hiệu suất với thu nhập
**Nhược điểm**: Rủi ro cao, cần KPI chính xác, NV có thể lo ngại

### 4.2 Mức P1 (BHXH) đề xuất

| Level | Hiện tại | Option A | Option B | Option C |
|-------|----------|----------|----------|----------|
| 4-5 (Director/Manager) | 5.6-7.5M | 12-15M | 10-13M | 9-11M |
| 6 (Lead) | 5.7-6M | 11-14M | 10-12M | 8-10M |
| 7 (Senior) | 5.8-5.9M | 10-12M | 9-11M | 8-10M |
| 8 (Engineer) | 5.3-5.6M | 8-10M | 7-9M | 6-8M |
| 9-10 (Junior) | 5.3M | 5-6M | 5-6M | 5-6M |
| Back Office | 5.3-5.9M | 8-12M | 7-11M | 6-10M |

### 4.3 Simulation với Option B (Khuyến nghị)

**Ghi chú**:
- P2 = P2.1 (Năng lực) + P2.2 (Cố định) + P2.3 (Trách nhiệm) + P2.4 (Kiêm nhiệm) + P2.5 (Bonus)
- **P3 Range = P3 Target × 80-120%** (multiplier mới, xem Section 5)

#### Simulation chi tiết: PM, Lead, Dev

| Thành phần | PM (Hường) | Lead (Sang) | Dev (Tố) |
|------------|------------|-------------|----------|
| **Gross** | **65,000,000** | **40,000,000** | **25,000,000** |
| | | | |
| **P1 - Position** | 11,700,000 | 8,800,000 | 8,000,000 |
| | | | |
| **P2 - Person** | **33,800,000** | **21,200,000** | **13,300,000** |
| → P2.1 Năng lực | 24,660,000 | 14,290,000 | 10,620,000 |
| → P2.2 Cố định | 3,140,000 | 2,910,000 | 2,680,000 |
| → P2.3 Trách nhiệm | 6,000,000 | 4,000,000 | - |
| → P2.4 Kiêm nhiệm | - | - | - |
| → P2.5 Bonus dự án | - | - | - |
| | | | |
| **P3 - Performance** | **19,500,000** | **10,000,000** | **3,700,000** |
| → P3 Range (80-120%) | 15.6-23.4M | 8-12M | 3-4.4M |
| | | | |
| *Tỷ lệ P1:P2:P3* | 18:52:30 | 22:53:25 | 32:53:15 |

#### Ví dụ khi có Kiêm nhiệm (P2.4)

| Thành phần | Lead (kiêm 2 dự án) | PM (1.5 dự án) |
|------------|---------------------|----------------|
| **Gross cơ bản** | 40,000,000 | 65,000,000 |
| **+ P2.4 Kiêm nhiệm** | +2,500,000 | +3,000,000 |
| **Gross mới** | **42,500,000** | **68,000,000** |
| | | |
| P2.1 Năng lực | 14,290,000 | 24,660,000 |
| P2.2 Cố định | 2,910,000 | 3,140,000 |
| P2.3 Trách nhiệm | 4,000,000 | 6,000,000 |
| **P2.4 Kiêm nhiệm** | **2,500,000** | **3,000,000** |
| **P2 Total mới** | **23,700,000** | **36,800,000** |

#### IT Production - Tổng hợp

| Họ tên | Vị trí | Gross | P1 | P2.1 Năng lực | P2.2 Cố định | P2.3 Trách nhiệm | P3 Target |
|--------|--------|-------|----|--------------:|-------------:|-----------------:|----------:|
| Lê Quang Hoàng | GĐ | 57.5M | 10.4M | 19.9M | 3.6M | 6.0M | 17.3M |
| Ngô Văn Hậu | Trưởng phòng | 60M | 10.8M | 22.1M | 3.14M | 6.0M | 18M |
| Nguyễn Thị Hường | Senior PM | 65M | 11.7M | 24.7M | 3.14M | 6.0M | 19.5M |
| Trần Thanh Sang | Tech Lead | 40M | 8.8M | 14.3M | 2.91M | 4.0M | 10M |
| Đinh Phước Hiệp | Tech Lead | 53.3M | 11.7M | 21.3M | 2.91M | 4.0M | 13.3M |
| Hoàng Ngọc Tuấn Anh | Test Lead | 46.8M | 10.3M | 17.9M | 2.91M | 4.0M | 11.7M |
| Nguyễn Văn Dô | Sr. SE 1 | 35.5M | 9.9M | 15.8M | 2.68M | - | 7.1M |
| Phạm Hùng | Sr. SE 1 | 44M | 12.3M | 20.2M | 2.68M | - | 8.8M |
| Nguyễn Thanh Tố | SE 3 | 25M | 8M | 10.6M | 2.68M | - | 3.7M |
| Đoàn Tiến Phát | SE 3 | 28M | 9M | 12.1M | 2.68M | - | 4.2M |
| Hồ Minh Tuấn | SE 2 | 26M | 8.3M | 11.1M | 2.68M | - | 3.9M |

#### Back Office

| Họ tên | Vị trí | Gross | P1 | P2.1 Năng lực | P2.2 Cố định | P2.3 Trách nhiệm | P3 Target |
|--------|--------|-------|----|--------------:|-------------:|-----------------:|----------:|
| Nguyễn Thu Trang | HR Lead | 27.2M | 10.3M | 9.2M | 2.91M | 2.0M | 2.7M |
| Lê Quyền Trân | HR Officer | 13.8M | 5.2M | 4.5M | 2.68M | - | 1.4M |
| Dương Thành Vinh | Sales/SDR | 11M | 4.2M | 3.0M | 2.68M | - | 1.1M* |

*Commission riêng cho Sales

#### Tổng hợp P2.2 + P2.3 theo chức danh

| Chức danh | Số NV | P2.2 Cố định | P2.3 Trách nhiệm | Tổng/người | Tổng/tháng |
|-----------|-------|--------------|------------------|------------|------------|
| Giám đốc | 1 | 3,600,000 | 6,000,000 | 9,600,000 | 9,600,000 |
| Trưởng phòng/Sr.PM | 2 | 3,140,000 | 6,000,000 | 9,140,000 | 18,280,000 |
| Tech Lead/Test Lead | 3 | 2,910,000 | 4,000,000 | 6,910,000 | 20,730,000 |
| Senior Engineer | 2 | 2,680,000 | - | 2,680,000 | 5,360,000 |
| Engineer | 5 | 2,680,000 | - | 2,680,000 | 13,400,000 |
| Junior/Intern | 5 | 2,680,000 | - | 2,680,000 | 13,400,000 |
| HR Lead | 1 | 2,910,000 | 2,000,000 | 4,910,000 | 4,910,000 |
| HR/Sales/Back Office | 2 | 2,680,000 | - | 2,680,000 | 5,360,000 |
| **Tổng** | **21** | | | | **91,040,000** |

### 4.4 So sánh tác động

| Chỉ số | Hiện tại | Option A | Option B | Option C |
|--------|----------|----------|----------|----------|
| P1 trung bình | 5.6M | 9.2M (+64%) | 8.4M (+50%) | 7.2M (+29%) |
| % P1/Gross trung bình | 22% | 32% | 28% | 24% |
| P3 Target (% gross) | 0% | 5-20% | 8-30% | 10-40% |
| **P3 Multiplier** | - | **80-120%** | **80-120%** | **80-120%** |
| Chi phí BHXH tăng | - | +64% | +50% | +29% |
| Tính linh động P3 | Thấp | Trung bình | Cao | Rất cao |

**Ghi chú**: P3 Multiplier 80-120% áp dụng cho tất cả Options. Có thể mở rộng lên 70-130% hoặc 60-150% sau khi hệ thống ổn định (xem Section 5.9).

---

## 5. KPI Framework cho P3 (Phiên bản đơn giản hoá)

### 5.1 Nguyên tắc thiết kế

**Mục tiêu:**
- **Đơn giản**: Giảm thiểu công việc đánh giá hàng tháng cho Manager
- **Khả thi**: Scalable cho 50-100 nhân viên trong tương lai
- **Công bằng**: Áp dụng chung cho tất cả vị trí (Dev, QA, PM, Lead, SA)
- **Kiểm soát**: Hạn chế rủi ro tài chính với multiplier 80-120%

**Triết lý đánh giá: Exception-based**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  MẶC ĐỊNH: Tất cả nhân viên = 100 điểm (Đạt yêu cầu)                   │
│                                                                          │
│  Manager CHỈ báo cáo NGOẠI LỆ:                                          │
│  • Xuất sắc (>100): Những người vượt kỳ vọng                           │
│  • Cần cải thiện (<100): Những người chưa đạt                          │
│                                                                          │
│  → Giảm 90% công việc đánh giá hàng tháng                              │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Công thức tính P3

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CÔNG THỨC P3                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  P3 = P3 Target × KPI Multiplier × Attendance Multiplier               │
│                                                                          │
│  Trong đó:                                                               │
│  • P3 Target: Mức thưởng mục tiêu theo level (cố định hàng tháng)      │
│  • KPI Multiplier: MAX(80%, MIN(120%, KPI Score / 100))                │
│  • Attendance Multiplier: Ngày công thực tế / Ngày công chuẩn          │
│                                                                          │
│  KPI Score = Weighted Average của các thành phần (Baseline = 100)      │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Giới hạn Multiplier:**
- **Minimum**: 80% (bảo vệ thu nhập cơ bản)
- **Maximum**: 120% (kiểm soát chi phí, có thể mở rộng sau)
- **Baseline**: 100% (đạt yêu cầu chuẩn)

### 5.3 Thành phần KPI - 2 Option

#### Option 1: Có Billable (Dự án ODC)

| Thành phần | Trọng số | Baseline | Range | Nguồn | Phase 1 |
|------------|----------|----------|-------|-------|---------|
| Attendance | 20% | 100 | 80-100 | HR (tự động) | ✅ Áp dụng |
| Performance | 40% | 100 | 80-120 | Manager (exception) | ⏸️ **= 100** |
| Compliance | 20% | 100 | 80-100 | HR (tự động) | ✅ Áp dụng |
| Billable | 20% | 100 | 80-120 | Timesheet (tự động) | ✅ Áp dụng |
| **Tổng** | **100%** | **100** | **80-120** | | |

**Phase 1 (Effective):** KPI Score = Attendance×20% + **100×40%** + Compliance×20% + Billable×20%

#### Option 2: Không có Billable (Dự án Fixed-price, Internal)

| Thành phần | Trọng số | Baseline | Range | Nguồn | Phase 1 |
|------------|----------|----------|-------|-------|---------|
| Attendance | 25% | 100 | 80-100 | HR (tự động) | ✅ Áp dụng |
| Performance | 50% | 100 | 80-120 | Manager (exception) | ⏸️ **= 100** |
| Compliance | 25% | 100 | 80-100 | HR (tự động) | ✅ Áp dụng |
| **Tổng** | **100%** | **100** | **80-120** | | |

**Phase 1 (Effective):** KPI Score = Attendance×25% + **100×50%** + Compliance×25%

**Áp dụng:**
- **Tất cả vị trí**: Dev, QA, PM, Lead, SA, BA đều dùng cùng framework
- **Chọn Option** theo loại dự án/công việc, không theo vị trí
- **Phase 1**: Performance = 100 cho tất cả → KPI chỉ biến thiên theo Attendance, Compliance, Billable

### 5.4 Chi tiết từng thành phần KPI

#### A. Attendance Score (80-100, Baseline: 100)

**Người theo dõi:** HR (tự động từ hệ thống)

| Tình trạng | Score | Điều kiện |
|------------|-------|-----------|
| Đủ ngày công | 100 | ≥22 ngày làm việc hoặc nghỉ có phép đầy đủ |
| Nghỉ 1 ngày không phép | 95 | 1 ngày absent không báo trước |
| Nghỉ 2 ngày không phép | 90 | 2 ngày absent |
| Nghỉ ≥3 ngày không phép | 80 | ≥3 ngày absent → minimum |

**Lưu ý:**
- Nghỉ có phép (approved leave) = KHÔNG trừ điểm Attendance
- Nghỉ có phép ảnh hưởng **Attendance Multiplier**, không phải Attendance Score
- Attendance Multiplier = Ngày làm thực tế / 22

#### B. Performance Score (80-120, Baseline: 100)

**Trạng thái:** ⏸️ **TẠM HOÃN** - Chưa áp dụng trong Phase 1

**Lý do:**
- Cần thời gian xây dựng quy trình đánh giá
- Cần training Manager về cách đánh giá công bằng
- Ưu tiên ổn định hệ thống trước khi thêm yếu tố chủ quan

**Phase 1 (Hiện tại):**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Performance Score = 100 cho TẤT CẢ nhân viên                          │
│  (Không có exception, không cần Manager đánh giá)                      │
└─────────────────────────────────────────────────────────────────────────┘
```

**Phase 2 (Dự kiến Q3/2026):** Áp dụng Exception-based evaluation

```
┌─────────────────────────────────────────────────────────────────────────┐
│  BƯỚC 1: Mặc định tất cả nhân viên = 100                               │
│                                                                          │
│  BƯỚC 2: Manager CHỈ submit danh sách ngoại lệ:                        │
│                                                                          │
│  Vượt kỳ vọng (>100):                                                   │
│  ├─ 105: Hoàn thành tốt, có đóng góp thêm                              │
│  ├─ 110: Xuất sắc, giải quyết vấn đề phức tạp                          │
│  ├─ 115: Vượt trội, impact đáng kể cho team/dự án                      │
│  └─ 120: Exceptional, role model (max)                                  │
│                                                                          │
│  Chưa đạt (<100):                                                       │
│  ├─ 95: Cần cải thiện nhẹ, có 1-2 vấn đề nhỏ                          │
│  ├─ 90: Cần cải thiện, có vấn đề về delivery/quality                   │
│  ├─ 85: Dưới kỳ vọng, nhiều vấn đề cần giải quyết                     │
│  └─ 80: Không đạt yêu cầu cơ bản (min)                                 │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Tiêu chí tham khảo cho Manager (Phase 2):**

| Khía cạnh | Xuất sắc (+) | Cần cải thiện (-) |
|-----------|--------------|-------------------|
| Delivery | Đúng/trước deadline | Trễ deadline |
| Quality | Không bug, KH khen | Có complaint từ KH |
| Collaboration | Hỗ trợ team members | Khó phối hợp |
| Initiative | Chủ động đề xuất | Chờ chỉ đạo |

#### C. Compliance Score (80-100, Baseline: 100)

**Người theo dõi:** HR (tự động từ hệ thống cảnh báo)

| Tình trạng | Score | Điều kiện |
|------------|-------|-----------|
| Không vi phạm | 100 | Không nhận cảnh báo trong tháng |
| 1 cảnh báo nhẹ | 95 | Nhắc nhở lần 1 (timesheet, meeting...) |
| 2 cảnh báo | 90 | Cảnh báo lần 2 |
| Cảnh báo nghiêm trọng | 80 | Vi phạm nội quy nghiêm trọng |

**Các loại vi phạm:**
- Nộp timesheet trễ/không nộp
- Không tham gia meeting bắt buộc
- Vi phạm security policy
- Vi phạm nội quy công ty

#### D. Billable Score (80-120, Baseline: 100)

**Nguồn:** Timesheet (tự động tính)

**Công thức:**
```
Billable Score = (Actual Billable Hours / Expected Billable Hours) × 100
```

**Thang điểm:**

| Billable % | Score | Mô tả |
|------------|-------|-------|
| ≥110% | 120 | Vượt trội (max) |
| 100-109% | 110 | Tốt |
| 90-99% | 100 | Đạt (baseline) |
| 80-89% | 90 | Hơi thấp |
| <80% | 80 | Thấp (min) |

**Expected Billable Hours:**
- Thường = 80% ngày công (160 giờ/tháng × 80% = 128 giờ)
- Có thể điều chỉnh theo dự án

### 5.5 Ví dụ tính toán

#### Case 1: Senior Engineer - Dự án ODC (có Billable)

| Thành phần | Trọng số | Score | Weighted |
|------------|----------|-------|----------|
| Attendance | 20% | 100 | 20 |
| Performance | 40% | 100 | 40 |
| Compliance | 20% | 100 | 20 |
| Billable | 20% | 110 | 22 |
| **KPI Score** | | | **102** |

```
KPI Multiplier = MIN(120%, MAX(80%, 102/100)) = 102%
Attendance Multiplier = 22/22 = 1.0

P3 = 7M × 102% × 1.0 = 7.14M
```

#### Case 2: Engineer - Nghỉ phép 3 ngày (có phép)

| Thành phần | Trọng số | Score | Weighted |
|------------|----------|-------|----------|
| Attendance | 25% | 100 | 25 |
| Performance | 50% | 100 | 50 |
| Compliance | 25% | 100 | 25 |
| **KPI Score** | | | **100** |

```
KPI Multiplier = 100%
Attendance Multiplier = 19/22 = 0.86  (nghỉ phép ảnh hưởng ở đây)

P3 = 4M × 100% × 0.86 = 3.44M
```

#### Case 3: Engineer - Performance xuất sắc

| Thành phần | Trọng số | Score | Weighted |
|------------|----------|-------|----------|
| Attendance | 25% | 100 | 25 |
| Performance | 50% | 115 | 57.5 |
| Compliance | 25% | 100 | 25 |
| **KPI Score** | | | **107.5** |

```
KPI Multiplier = MIN(120%, 107.5%) = 107.5%
Attendance Multiplier = 1.0

P3 = 4M × 107.5% × 1.0 = 4.3M
```

#### Case 4: Engineer - Có vấn đề về compliance

| Thành phần | Trọng số | Score | Weighted |
|------------|----------|-------|----------|
| Attendance | 25% | 100 | 25 |
| Performance | 50% | 95 | 47.5 |
| Compliance | 25% | 90 | 22.5 |
| **KPI Score** | | | **95** |

```
KPI Multiplier = 95%
Attendance Multiplier = 1.0

P3 = 4M × 95% × 1.0 = 3.8M
```

### 5.6 P3 Target theo Level

| Level | Gross Range | P3 Target | P3 Min (80%) | P3 Max (120%) |
|-------|-------------|-----------|--------------|---------------|
| Director/Sr.Manager | 57-65M | 17-19M | 13.6-15.2M | 20.4-22.8M |
| Manager/Sr.PM | 40-60M | 10-15M | 8-12M | 12-18M |
| Tech Lead | 40-53M | 10-13M | 8-10.4M | 12-15.6M |
| Senior Engineer | 35-44M | 7-9M | 5.6-7.2M | 8.4-10.8M |
| Engineer | 25-33M | 4-5M | 3.2-4M | 4.8-6M |
| Junior | 10-13M | 0.8-1M | 0.64-0.8M | 0.96-1.2M |
| Back Office Lead | 27M | 2.7M | 2.16M | 3.24M |
| Back Office Officer | 11-14M | 1.1-1.4M | 0.88-1.12M | 1.32-1.68M |

### 5.7 Quy trình đánh giá P3 hàng tháng

#### Phase 1 (Hiện tại) - Hoàn toàn tự động

```
┌─────────────────────────────────────────────────────────────────────────┐
│              QUY TRÌNH ĐÁNH GIÁ P3 - PHASE 1 (TỰ ĐỘNG)                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Ngày 1-2: Dữ liệu tự động                                              │
│  ├─ HR: Export Attendance data → Attendance Score                      │
│  ├─ HR: Export Warning list → Compliance Score                         │
│  └─ Finance/PMO: Export Timesheet → Billable Score (nếu có)           │
│                                                                          │
│  Ngày 3-4: HR tính toán                                                 │
│  ├─ Performance Score = 100 (mặc định cho tất cả)                      │
│  ├─ Tính KPI Score → KPI Multiplier                                    │
│  └─ Tính P3 = Target × Multiplier × Attendance Multiplier              │
│                                                                          │
│  Ngày 5: Review & Approve                                               │
│  └─ Manager review bảng P3 → Approve                                   │
│                                                                          │
│  Ngày 6-7: Finalize → Payroll                                          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Ưu điểm Phase 1:**
- **Không cần Manager đánh giá** → Tiết kiệm thời gian
- **100% dữ liệu tự động** → Khách quan, không tranh cãi
- **Dễ triển khai** → Chỉ cần HR và Finance

#### Phase 2 (Dự kiến Q3/2026) - Thêm Performance Exception

```
┌─────────────────────────────────────────────────────────────────────────┐
│              QUY TRÌNH ĐÁNH GIÁ P3 - PHASE 2 (EXCEPTION-BASED)         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Ngày 1-2: Dữ liệu tự động (giống Phase 1)                             │
│                                                                          │
│  Ngày 3: Manager submit EXCEPTION LIST                                  │
│  ├─ Mặc định: Tất cả = 100                                             │
│  ├─ Chỉ submit những ai ≠ 100                                          │
│  └─ Format: [Tên] | [Score] | [Lý do ngắn gọn]                        │
│                                                                          │
│  Ngày 4-5: HR tính toán                                                 │
│  ├─ Merge dữ liệu tự động + Exception list                             │
│  ├─ Tính KPI Score → KPI Multiplier                                    │
│  └─ Tính P3 = Target × Multiplier × Attendance Multiplier              │
│                                                                          │
│  Ngày 6: Review & Approve                                               │
│                                                                          │
│  Ngày 7: Finalize → Payroll                                            │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Ước tính công việc Manager (Phase 2):**
- Team 10 người: ~5-10 phút (chỉ submit 1-2 exception)
- Team 20 người: ~10-15 phút (chỉ submit 2-4 exception)
- Công ty 50 người: Tổng ~30-45 phút cho tất cả Manager

### 5.8 Form đánh giá P3 (Đơn giản hoá)

#### Form A: Manager Exception Report

```
┌─────────────────────────────────────────────────────────────────────────┐
│ PERFORMANCE EXCEPTION REPORT - THÁNG: ___/2026                         │
├─────────────────────────────────────────────────────────────────────────┤
│ Manager: _________________________  Team: _________________________     │
│ Ngày submit: _____________________                                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ Mặc định: Tất cả nhân viên trong team = 100 điểm                       │
│                                                                          │
│ DANH SÁCH NGOẠI LỆ (chỉ những người ≠ 100):                            │
│                                                                          │
│ # │ Họ tên             │ Score │ Lý do                                  │
│───┼────────────────────┼───────┼────────────────────────────────────────│
│ 1 │                    │       │                                        │
│ 2 │                    │       │                                        │
│ 3 │                    │       │                                        │
│                                                                          │
│ Chữ ký Manager: ____________________                                    │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Form B: HR P3 Summary

```
┌─────────────────────────────────────────────────────────────────────────┐
│ BẢNG TỔNG HỢP P3 - THÁNG: ___/2026                                     │
├─────────────────────────────────────────────────────────────────────────┤
│ # │ Họ tên │ Attend │ Perf │ Compl │ Bill │ KPI │ Mult │ Days │ P3 Act │
│   │        │ (Auto) │(Mgr) │(Auto) │(Auto)│Score│  %   │ Mult │        │
├───┼────────┼────────┼──────┼───────┼──────┼─────┼──────┼──────┼────────┤
│ 1 │        │  100   │ 100  │  100  │  -   │ 100 │ 100% │ 1.0  │        │
│ 2 │        │  100   │ 110  │  100  │  -   │ 105 │ 105% │ 1.0  │        │
│...│        │        │      │       │      │     │      │      │        │
├───┴────────┴────────┴──────┴───────┴──────┴─────┴──────┴──────┴────────┤
│ Weighted: Option 1 (có Billable): 20/40/20/20                          │
│           Option 2 (không Billable): 25/50/25                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.9 Roadmap mở rộng Multiplier

| Phase | Timeline | Multiplier Range | Điều kiện |
|-------|----------|------------------|-----------|
| Phase 1 | Q1-Q2/2026 | 80-120% | Pilot, theo dõi hiệu quả |
| Phase 2 | Q3-Q4/2026 | 70-130% | Nếu hệ thống ổn định |
| Phase 3 | 2027+ | 60-150% | Nếu dữ liệu KPI chính xác |

**Điều kiện mở rộng:**
- Hệ thống đánh giá chạy ổn định ≥2 quý
- Có dữ liệu KPI đủ tin cậy để phân biệt performance
- Tài chính công ty ổn định

### 5.10 FAQ

**Q: Tại sao Performance Score tạm = 100 cho tất cả?**
A: Phase 1 ưu tiên ổn định hệ thống với dữ liệu 100% tự động. Performance evaluation cần thời gian xây dựng quy trình và training Manager. Sẽ áp dụng từ Phase 2 (Q3/2026).

**Q: Lead/PM/SA có cần framework KPI riêng không?**
A: Không. Tất cả dùng chung framework. Khi áp dụng Performance Score (Phase 2), Manager đánh giá dựa trên output của từng vị trí.

**Q: Billable Score tính như thế nào nếu không có dự án billable?**
A: Dùng Option 2 (không Billable). Trọng số Performance tăng từ 40% lên 50%.

**Q: Nghỉ phép có ảnh hưởng P3 không?**
A: Có, qua Attendance Multiplier (không phải Attendance Score). Nghỉ phép hợp lệ = ngày công thấp hơn = P3 thấp hơn tỷ lệ.

**Q: Manager có thể cho điểm >120 hoặc <80 không?**
A: Không. Score bị cap ở 80-120 để kiểm soát rủi ro. Nếu performance quá kém (<80), cần escalate lên HR/Management.

---

## 6. Lộ trình triển khai (Dự kiến)

### Phase 1: Chuẩn bị (2-4 tuần)

- [ ] Phê duyệt Option (A/B/C)
- [ ] Xây dựng KPI framework chi tiết
- [ ] Thiết kế form đánh giá
- [ ] Chuẩn bị hệ thống tính lương mới
- [ ] Tính toán budget chuyển đổi

### Phase 2: Pilot - IT Production (4-8 tuần)

- [ ] Communicate với IT Production
- [ ] Áp dụng cơ cấu mới
- [ ] Theo dõi và điều chỉnh
- [ ] Thu thập feedback

### Phase 3: Rollout - Sales & Back Office (4 tuần)

- [ ] Điều chỉnh cơ chế cho Sales (commission)
- [ ] Áp dụng cho Back Office
- [ ] Hoàn thiện quy trình

### Phase 4: Stabilize (Ongoing)

- [ ] Review hàng quý
- [ ] Điều chỉnh KPI nếu cần
- [ ] Cập nhật salary range theo thị trường

---

## 7. Các quyết định cần xác nhận

| # | Câu hỏi | Options | Quyết định |
|---|---------|---------|------------|
| 1 | Chọn Option nào? | A (Conservative) / B (Balanced) / C (Aggressive) | Pending |
| 2 | Budget tăng P1? | Chấp nhận +50% / Giới hạn +30% / Khác | Pending |
| 3 | KPI Framework? | Đơn giản (Attendance + Billable + Đánh giá Lead) / Chi tiết (OKR) | Pending |
| 4 | P3 Payment Cycle? | Hàng tháng / Hàng quý | Pending |
| 5 | Transition Plan? | Big bang / Phased (IT → Sales → BO) | Pending |
| 6 | Sales Commission? | Thiết kế riêng / Dùng chung P3 framework | Pending |
| 7 | Timeline bắt đầu? | Tháng 3/2026 / Tháng 4/2026 / Khác | Pending |

---

## 8. Phụ lục

### 8.1 Tài liệu tham chiếu

- `projects/innomize/cnb/career-path-salary-range.md` - Khung lương chi tiết
- `projects/innomize/cnb/career-levels.csv` - Career levels data
- `projects/innomize/cnb/salary-range-*.csv` - Salary range theo bộ phận

### 8.2 Changelog

| Ngày | Phiên bản | Thay đổi |
|------|-----------|----------|
| 2026-02-04 | 1.6 | **Cấu trúc P2 chi tiết**: P2.1 Năng lực + P2.2 Cố định + P2.3 Trách nhiệm + P2.4 Kiêm nhiệm + P2.5 Bonus dự án. Bổ sung bảng phụ cấp trách nhiệm và kiêm nhiệm |
| 2026-02-04 | 1.5 | **Tạm hoãn Performance Score**: Phase 1 = 100 cho tất cả, quy trình 100% tự động, Performance exception áp dụng từ Phase 2 (Q3/2026) |
| 2026-02-04 | 1.4 | **Đơn giản hoá P3 KPI Framework**: Baseline 100, Multiplier 80-120%, Exception-based evaluation, 2 options (có/không Billable), quy trình scalable 50-100 NV |
| 2026-02-04 | 1.3 | Chi tiết KPI Framework P3: công thức, matrix, form đánh giá (Section 5) |
| 2026-02-04 | 1.2 | Cập nhật simulation với chi tiết P2 Base + Phụ cấp cố định |
| 2026-02-04 | 1.1 | Bổ sung bảng phụ cấp cố định (Section 3.5) |
| 2026-02-04 | 1.0 | Khởi tạo spec, thu thập yêu cầu |

---

## 9. Ký duyệt

| Vai trò | Họ tên | Ngày | Chữ ký |
|---------|--------|------|--------|
| Người lập | | 2026-02-04 | |
| HR Review | | | |
| Finance Review | | | |
| BOD Approve | | | |
