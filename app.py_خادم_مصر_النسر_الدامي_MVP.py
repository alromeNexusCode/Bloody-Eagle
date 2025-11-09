# app.py
# الخادم المصغر (Micro-Server) لـ MVP - يستخدم Flask و Minimax
# هذا الخادم يستقبل طلبات القتال ويحسب النتائج.

from flask import Flask, request, jsonify
import sys
import os

# ******* 1. استيراد منطق الذكاء الاصطناعي (Minimax) *******
# يجب أن يكون MinimaxLogic.py في مجلد AI/
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'AI'))
try:
    from MinimaxLogic import MinimaxLogic
except ImportError:
    # هذا الخطأ يظهر فقط إذا لم يتم وضع الملف في المجلد الصحيح على الخادم
    print("FATAL ERROR: MinimaxLogic module not found. Check AI/ folder.")
    exit()

app = Flask(__name__)
minimax_solver = MinimaxLogic()

# ******* 2. نقطة النهاية (Endpoint) للقتال *******
@app.route('/api/v1/combat/calculate', methods=['POST'])
def calculate_combat():
    """
    يستقبل تشكيلة الهجوم والدفاع ويستخدم Minimax لحساب الضرر.
    البيانات المتوقعة: {"attack": ["Infantry", ...], "defense": ["Archer", ...]}
    """
    if not request.json:
        return jsonify({"status": "error", "message": "No data provided"}), 400

    data = request.json
    attack_formation = data.get('attack')
    defense_formation = data.get('defense')
    
    # 2.1 التحقق من البيانات الأساسية
    if not attack_formation or not defense_formation:
        return jsonify({"status": "error", "message": "Missing attack or defense formation"}), 400

    try:
        # 2.2 تطبيق منطق Minimax
        # يتم استخدام MinimaxLogic.py لحساب الضرر الأمثل
        # (في MVP نركز فقط على قيمة الضرر الناتج)
        
        # نستخدم دالة التقييم الفردية لحساب الضرر الإجمالي البسيط للمرحلة MVP
        total_damage = minimax_solver._evaluate_formation(attack_formation, defense_formation)
        
        # 2.3 صياغة الرد على العميل
        return jsonify({
            "status": "success",
            "message": "Combat calculation complete.",
            "total_raw_damage": total_damage,
            "minimax_suggestion": minimax_solver.find_best_attack(
                [attack_formation], defense_formation
            )[0]
        }), 200

    except Exception as e:
        # تسجيل أي أخطاء تحدث أثناء الحساب
        print(f"Calculation Error: {e}")
        return jsonify({"status": "error", "message": "Internal calculation error."}), 500

# ******* 3. نقطة النهاية الأساسية للاختبار *******
@app.route('/', methods=['GET'])
def home():
    return "The Bloody Eagle Micro-Server is running (MVP Phase 1)"

# ******* 4. تشغيل الخادم *******
if __name__ == '__main__':
    # تشغيل الخادم على المنفذ الافتراضي
    # يجب ضبط هذا الإعداد عند النشر على خادم سحابي مجاني (Heroku/AWS)
    app.run(debug=True, host='0.0.0.0', port=5000)