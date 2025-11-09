# 🌐 دليل الاتصال بالخادم (المرحلة 1: MVP)

هذا الدليل يحدد كيفية اتصال العميل بالـ Micro-Server لـ MVP.

## 1. التكنولوجيا المستخدمة (لـ MVP)
* **الواجهة الأمامية (Client):** C# / Unity.
* **الخادم (Backend):** Python/Flask (بسبب توافقه العالي مع كود Minimax Logic).
* **قاعدة البيانات (DB):** MongoDB Atlas (مجانية للمستويات الأساسية).

## 2. إعداد الاتصال الأساسي
1. يجب على العميل استخدام مكتبة HTTP بسيطة (مثل UnityWebRequest) لإرسال طلبات POST/GET.
2. جميع الاتصالات يجب أن تستخدم نقطة النهاية (Endpoint) الأساسية: `[TBD-Server-IP]/api/v1/`
3. يجب أن يكون مفتاح الـ API محفوظًا في ملف منفصل (لا يتم تحميله على GitHub).

## 3. نقاط الاتصال المطلوبة (MVP)
* **Login/Create:** `POST /api/v1/user/login` (لإنشاء ملف `PlayerProfileData.cs`).
* **Update Status:** `POST /api/v1/user/update` (لتحديث الموارد ومستوى القلعة).
* **Combat Request:** `POST /api/v1/combat/calculate` (لإرسال تشكيلة الهجوم والحصول على نتيجة Minimax).