# النسر الدامي - نظام الذكاء الاصطناعي (Minimax)
# نظام خوارزمية الحرب للقرارات القتالية

# القيم: تمثل نقاط القوة (نقاط الضرر المتوقعة)
# الهدف هو إيجاد التشكيلة التي تزيد من الضرر الناتج (MAX)
# وتأخذ بعين الاعتبار أفضل دفاع للعدو (MIN)

# دالة تقييم الضرر بناءً على التفوق القتالي (+30%)
def evaluate_damage(attacker_unit, defender_unit):
    # المشاة > الرماة > الفرسان > المشاة
    if attacker_unit == "Infantry" and defender_unit == "Archer":
        return 1.30  # +30% هجوم
    elif attacker_unit == "Archer" and defender_unit == "Cavalry":
        return 1.30
    elif attacker_unit == "Cavalry" and defender_unit == "Infantry":
        return 1.30
    else:
        return 0.85 # افتراض: -15% تأثير عند اللاتطابق أو الهزيمة

# دالة Minimax بسيطة لعمق قرار واحد (هجوم مقابل دفاع العدو)
def minimax_decision(possible_attacks, enemy_defense):
    
    best_value = -float('inf')  # قيمة أولية منخفضة جداً للمهاجم (MAX)
    best_attack = None

    for attack_formation in possible_attacks:
        current_value = 0
        
        # المرحلة MIN: يفترض العدو أفضل دفاع ضد تشكيلتك
        # هنا نبسطها بافتراض تشكيلة دفاعية ثابتة للعدو
        
        for unit in attack_formation:
            current_value += evaluate_damage(unit, enemy_defense[unit]) # تقييم الضرر لكل وحدة
        
        # المرحلة MAX: اختيار الهجوم الذي يحقق أكبر قيمة ضرر
        if current_value > best_value:
            best_value = current_value
            best_attack = attack_formation
            
    return best_attack, best_value

# -----------------
# الاستخدام في لعبة النسر الدامي
# -----------------
# التشكيلات الهجومية الممكنة للقائد أركان
possible_attacks = [
    ["Infantry", "Infantry", "Archer"], 
    ["Cavalry", "Cavalry", "Archer"],
    ["Infantry", "Cavalry", "Archer"]
]

# الدفاع المعروف للعدو (مثال: لديه الكثير من المشاة والقليل من الرماة)
enemy_defense = {
    "Infantry": "Cavalry", 
    "Archer": "Infantry",
    "Cavalry": "Archer" 
} # هذه تحتاج إلى تحليل أكثر تعقيداً في Minimax حقيقي

# تنفيذ القرار
# best_move, score = minimax_decision(possible_attacks, enemy_defense)
# print(f"أفضل تشكيلة هجومية مقترحة: {best_move} بنقاط قوة {score}")