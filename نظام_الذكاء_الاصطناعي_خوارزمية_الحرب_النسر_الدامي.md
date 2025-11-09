# نظام الذكاء الاصطناعي - "خوارزمية الحرب" (Minimax Logic)

## 🤖 نظرة عامة
هذا النظام يحتوي على تطبيق مبسط لخوارزمية Minimax في "خوارزمية الحرب" (AI) للعبة "النسر الدامي". الهدف هو اختيار التشكيلة الهجومية المثلى (MAX) ضد دفاع العدو (MIN).

## 🧮 هيكل الكلاس
```python
class MinimaxLogic:
    SUPERIORITY_BONUS = 0.30  # +30% ضرر
    BASE_DAMAGE = 100         # قيمة الضرر الأساسي لكل وحدة
```

## 📊 المعاملات الثابتة
- **SUPERIORITY_BONUS**: 0.30 (مطابق لـ UnitBalance.cs)
- **BASE_DAMAGE**: 100 (قيمة أساسية للوحدة)
- **ADVANTAGE_MAP**: خريطة التفوق القتالي

## 🔄 خريطة التفوق القتالي
```python
self.ADVANTAGE_MAP = {
    "Infantry": "Archer",   # المشاة يتفوقون على الرماة
    "Archer": "Cavalry",    # الرماة يتفوقون على الفرسان
    "Cavalry": "Infantry"   # الفرسان يتفوقون على المشاة
}
```

## 💻 الدوال الأساسية

### 1. `_get_unit_damage(attacker_type, defender_type)`
- **الغرض**: حساب الضرر بناءً على التفوق القتالي
- **المدخلات**: نوع المهاجم ونوع المدافع
- **المخرجات**: قيمة الضرر (130 للتفوق، 100 للحالة العادية)

```python
def _get_unit_damage(self, attacker_type, defender_type):
    if self.ADVANTAGE_MAP.get(attacker_type) == defender_type:
        return self.BASE_DAMAGE * (1 + self.SUPERIORITY_BONUS)  # 130
    else:
        return self.BASE_DAMAGE  # 100
```

### 2. `_evaluate_formation(attack_formation, defense_formation)`
- **الغرض**: تقييم قيمة الضرر الإجمالي لهجوم معين
- **الآلية**: 
  - Minimax MIN: يفترض العدو أفضل توزيع دفاعي
  - يوازي بين كل وحدة مهاجمة ومدافعة
  - يعامل الحالات الاستثنائية (فرق في العدد)

```python
def _evaluate_formation(self, attack_formation, defense_formation):
    total_damage = 0
    for i, attacker_unit in enumerate(attack_formation):
        try:
            defender_unit = defense_formation[i]
        except IndexError:
            defender_unit = "Infantry"  # افتراضي
        total_damage += self._get_unit_damage(attacker_unit, defender_unit)
    return total_damage
```

### 3. `find_best_attack(possible_attacks, enemy_defense_formation)`
- **الغرض**: تطبيق منطق Minimax لاختيار الهجوم الأفضل
- **آلية العمل**:
  - Minimax MAX: اختيار الهجوم بأعلى قيمة
  - يبدأ بـ `-float('inf')` (أدنى حد)
  - يقارن بين جميع الخيارات المتاحة

```python
def find_best_attack(self, possible_attacks, enemy_defense_formation):
    best_value = -float('inf')
    best_formation = None
    
    for attack_formation in possible_attacks:
        current_value = self._evaluate_formation(attack_formation, enemy_defense_formation)
        if current_value > best_value:
            best_value = current_value
            best_formation = attack_formation
            
    return best_formation, best_value
```

## 🎯 مثال على الاستخدام
```python
# إنشاء كائن الذكاء الاصطناعي
ai_solver = MinimaxLogic()

# الخيارات الهجومية المتاحة
attack_options = [
    ["Infantry", "Infantry", "Archer"], 
    ["Cavalry", "Cavalry", "Archer"],
    ["Archer", "Archer", "Archer"]
]

# الدفاع المعروف للعدو
known_defense = ["Infantry", "Cavalry", "Infantry"]

# العثور على أفضل هجوم
best_move, score = ai_solver.find_best_attack(attack_options, known_defense)
print(f"AI Suggestion: {best_move} with score {score}")
```

## 🔗 التكامل مع النظام العام
- **متوافق مع**: UnitBalance.cs (C#)
- **مرتبط بالقائد**: أركان (أخصائي التطوير)
- **نظام التفوق**: مطابق تماماً بين Python و C#
- **التكامل**: يمكن تحويل الكود إلى C# في Unity

## 🚀 المزايا التقنية
1. **سهولة القراءة**: كود منظم ومُوثق جيداً
2. **قابلية التوسع**: يمكن إضافة طبقات تعقيد أكثر
3. **الاستقرار**: يعالج الحالات الاستثنائية (IndexError)
4. **التوافق**: يعمل مع النظام الأساسي للوحدات

## 📁 الملفات المرتبطة
- `MinimaxLogic.py_نظام_ذكاء_النسر_الدامي.py` - الكود العملي
- `UnitBalance.cs_نظام_توازن_الوحدات.cs` - معاملات التوازن
- `الكود_تجريبي_النسر_الدامي_Minimax.py` - الكود الأولي