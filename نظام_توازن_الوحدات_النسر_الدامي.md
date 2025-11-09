# نظام توازن الوحدات - "النسر الدامي"

## 🎮 نظرة عامة
هذا النظام يحتوي على ثوابت معاملات التوازن القتالي للمرحلة 1، ويُستخدم بواسطة خادم اللعبة (Server) لحساب نتائج المعارك.

## ⚔️ أنواع الوحدات (UnitType)
```csharp
public enum UnitType
{
    Infantry, // المشاة
    Archer,   // الرماة  
    Cavalry,  // الفرسان
    Siege     // آلات الحصار (مؤجلة للمرحلة 2)
}
```

## 📊 معاملات التفوق القتالي
- **SuperiorityDamageBonus**: +30% هجوم للوحدة المتفوقة
- **InferiorityDefensePenalty**: -25% دفاع للوحدة المنهزمة

## 🔄 خريطة التفوق القتالي (CombatAdvantageMap)
```csharp
private static readonly Dictionary<UnitType, UnitType> CombatAdvantageMap = 
    new Dictionary<UnitType, UnitType>()
{
    { UnitType.Infantry, UnitType.Archer }, // المشاة يتفوقون على الرماة
    { UnitType.Archer, UnitType.Cavalry },  // الرماة يتفوقون على الفرسان
    { UnitType.Cavalry, UnitType.Infantry } // الفرسان يتفوقون على المشاة
    // آلات الحصار تُضاف لاحقاً (Siege)
};
```

## 🧮 الدوال الأساسية

### 1. HasAdvantage()
```csharp
public static bool HasAdvantage(UnitType attacker, UnitType defender)
```
- تتحقق مما إذا كانت الوحدة المهاجمة لها تفوق على الوحدة المدافعة
- ترجع `true` إذا كان هناك تفوق، `false` إذا لم يكن

### 2. GetDamageMultiplier()
```csharp
public static float GetDamageMultiplier(UnitType attacker, UnitType defender)
```
- تحسب مُعامل الضرر بناءً على التفوق أو عدمه
- **عند التفوق**: يرجع 1.30f (+30% هجوم)
- **بدون تفوق**: يرجع 1.00f (لا مكافأة)

## 🎯 نظام "حجر ورقة مقص" في النسر الدامي

### الدورة الثابتة:
1. **المشاة** (Infantry) ← تتفوق على → **الرماة** (Archer)
2. **الرماة** (Archer) ← تتفوق على → **الفرسان** (Cavalry) 
3. **الفرسان** (Cavalry) ← تتفوق على → **المشاة** (Infantry)

### مثال على التطبيق:
- **مشاة يهاجم رماة**: +30% ضرر (1.30x)
- **رماة يهاجم فرسان**: +30% ضرر (1.30x)
- **فرسان يهاجم مشاة**: +30% ضرر (1.30x)
- **رماة يهاجم مشاة**: بدون تفوق (1.00x)

## 🔧 ملاحظات تقنية
- يتم تطبيق عقوبة الدفاع (-25%) على إحصائية DEFENSE لوحدات العدو المنهزمة في نظام القتال الرئيسي
- آلات الحصار (Siege) مُبرمجة للإضافة في المرحلة 2
- النظام مُحسّن للاستخدام على خادم اللعبة (Server-side)

## 📁 الملفات المرتبطة
- `UnitBalance.cs_نظام_توازن_الوحدات.cs` - الكود العملي
- `الكود_تجريبي_النسر_الدامي_Minimax.py` - نظام الذكاء الاصطناعي
- `النظام_النظري_ذكاء_النسر_الدامي_Minimax.md` - الشرح النظري