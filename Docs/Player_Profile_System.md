# نظام سجل النسر - PlayerProfileData

## نظرة عامة
**PlayerProfileData** هو مخطط البيانات الأساسي لتخزين معلومات اللاعب في لعبة "النسر الدامي". يمثل هذا المخطط "سجل النسر" الذي يحتوي على جميع المعلومات الضرورية عن حالة اللاعب على الخريطة والخادم.

## الوحدات الأساسية للمخطط

### 1. معلومات اللاعب الأساسية
```csharp
public string PlayerID;           // معرف اللاعب الفريد
public string PlayerName;         // اسم اللاعب
public int PowerLevel;           // مستوى القوة الإجمالي
```

### 2. موقع القلعة
```csharp
public int CastleLevel;          // مستوى عرين النسر (C-Level)
public int CastleX;             // الإحداثي X على الخريطة
public int CastleY;             // الإحداثي Y على الخريطة
```

### 3. نظام الحماية
```csharp
public bool HasShield;           // وجود حجاب الصمود
public DateTime ShieldEndTime;   // وقت انتهاء درع الحماية
```

### 4. الموارد (المخزون)
```csharp
public long FoodAmount;         // مدخرات الصيد
public long WoodAmount;         // حطب الغابات
public long IronAmount;         // صفائح الصدأ
public long StoneAmount;        // حجر الأساس
public long GemAmount;          // جواهر العهد (المورد الأسطوري)
```

### 5. الجيش والوحدات
```csharp
public Dictionary<UnitType, int> TroopCounts; // عدد الوحدات لكل نوع
// UnitType: Infantry, Archer, Cavalry, Siege
```

### 6. معلومات التحالف
```csharp
public string AllianceTag;         // وسم التحالف (مثلاً: EAG)
public string AllianceRelationship; // العلاقة (Blue, Red, Yellow)
```

## القيم الافتراضية

عند إنشاء ملف لاعب جديد:
- **مستوى القوة**: 100
- **مستوى القلعة**: 1
- **درع الحماية**: مفعل
- **مدة الدرع**: 3 أيام

## التكامل مع أنظمة أخرى

### مع نظام توازن الوحدات
```csharp
using static UnitBalance; // استخدام UnitType من UnitBalance
```

### مع نظام الذكاء الاصطناعي
- خيارات الجيش تؤثر على قرارات خوارزمية Minimax
- قوة اللاعب تؤثر على التقييم العام في حروب التحالف

### مع نظام الموارد
- الموارد تسجل في هذا المخطط وتحدث من مزرعة الموارد
- جواهر العهد هي المورد النادر للأشياء السحرية

## استخدامات المحتملة

1. **حفظ واستعادة بيانات اللاعب**
2. **حساب القوة في المعارك**
3. **تحديد مستوى حماية اللاعب**
4. **معلومات عن موقع القلعة للتواصل والتكاثف**
5. **معلومات التحالف والحرب بين المعسكرات**
6. **عرض إحصائيات اللاعب في الواجهة**

## ملاحظات تقنية

### 1. Dictionary Initialization
```csharp
public Dictionary<UnitType, int> TroopCounts = new Dictionary<UnitType, int>();
// يحتاج تهيئة في Unity كلاس
```

### 2. Serialization
- المخطط يحتوي على `[Serializable]` للـ Unity Serialization
- يمكن حفظ البيانات في LocalStorage أو Database

### 3. Time Management
- `DateTime` يستخدم مع بحتاج منطق تزامن في الخادم
- يجب مراعاة تحديد المنطقة الزمنية

### 4. Resource Limits
- أنواع الموارد دقيقة ومتوازنة
- جواهر العهد مورد نادر للوحدات السحرية

## التطوير المستقبلي

- **إضافة نظام المهارات** (Skills)
- **إضافات عسكرية أخرى** (More Military Addons)  
- **نظام السيرة الذاتية** (Biography)
- **اللوحات** (Badges) والتركات
- **الترقيات النخبة** (Elite Upgrades)
- **الاستكشافات الاستعمارية** (Colonial Explorations)
- **مُحيد نتائج عشوائي** (Randomizer Cancellation) لمواءمة التكافؤ

---

*يعد هذا المخطط الأساس لجميع العمليات اللاحقة في لعبة "النسر الدامي"*