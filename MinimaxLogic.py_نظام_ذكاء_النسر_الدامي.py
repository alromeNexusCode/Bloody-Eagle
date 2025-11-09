# MinimaxLogic.py
# تطبيق مبسط لخوارزمية Minimax لـ "خوارزمية الحرب" (AI)
# الهدف: اختيار التشكيلة الهجومية المثلى (MAX) ضد دفاع العدو (MIN).

class MinimaxLogic:
    
    # المعاملات الثابتة للتفوق القتالي (مأخوذة من UnitBalance.cs)
    SUPERIORITY_BONUS = 0.30  # +30% ضرر
    BASE_DAMAGE = 100         # قيمة الضرر الأساسي لكل وحدة

    def __init__(self):
        # قاموس التفوق (Attacker is Key, Defender is Value)
        self.ADVANTAGE_MAP = {
            "Infantry": "Archer",
            "Archer": "Cavalry",
            "Cavalry": "Infantry"
        }

    def _get_unit_damage(self, attacker_type, defender_type):
        """يحسب الضرر بناءً على التفوق القتالي."""
        if self.ADVANTAGE_MAP.get(attacker_type) == defender_type:
            # حالة التفوق المباشر (Minimax Maximize)
            return self.BASE_DAMAGE * (1 + self.SUPERIORITY_BONUS)
        else:
            # حالة الحياد أو الخسارة (هنا نبسطها لـ BASE_DAMAGE)
            return self.BASE_DAMAGE

    def _evaluate_formation(self, attack_formation, defense_formation):
        """تقييم قيمة الضرر الإجمالي لهجوم معين ضد الدفاع."""
        total_damage = 0
        
        # Minimax MIN: نفترض أن العدو لديه أفضل توزيع دفاعي للحد من ضررك
        # (هنا نبسط الدفاع ليكون تشكيلة ثابتة وموازية للهجوم)

        for i, attacker_unit in enumerate(attack_formation):
            # نفترض أن كل وحدة مهاجمة تواجه وحدة دفاعية مقابلة
            try:
                defender_unit = defense_formation[i]
            except IndexError:
                # إذا كانت تشكيلة العدو أصغر، تفترض هجوم على وحدة ضعيفة
                defender_unit = "Infantry" # مثال افتراضي
                
            total_damage += self._get_unit_damage(attacker_unit, defender_unit)
            
        return total_damage

    def find_best_attack(self, possible_attacks, enemy_defense_formation):
        """تطبيق منطق Minimax لاختيار الهجوم الأفضل."""
        
        best_value = -float('inf')  # قيمة MAX تبدأ بأدنى حد
        best_formation = None
        
        for attack_formation in possible_attacks:
            
            # حساب القيمة (الضرر الناتج)
            current_value = self._evaluate_formation(attack_formation, enemy_defense_formation)
            
            # Minimax MAX: اختيار الهجوم الذي يحقق أعلى قيمة (أقصى ضرر)
            if current_value > best_value:
                best_value = current_value
                best_formation = attack_formation
                
        return best_formation, best_value

# ---------------------------------------------
# مثال على الاستخدام في خوارزمية الحرب (AI)
# ---------------------------------------------
# ai_solver = MinimaxLogic()

# attack_options = [
#     ["Infantry", "Infantry", "Archer"], 
#     ["Cavalry", "Cavalry", "Archer"],
#     ["Archer", "Archer", "Archer"]
# ]

# known_defense = ["Infantry", "Cavalry", "Infantry"]

# best_move, score = ai_solver.find_best_attack(attack_options, known_defense)
# print(f"AI Suggestion: {best_move} with score {score}")