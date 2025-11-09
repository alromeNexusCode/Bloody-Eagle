// UnitBalance.cs
// يحتوي على ثوابت (Constants) معاملات التوازن القتالي للمرحلة 1
// يستخدم هذا النظام بواسطة خادم اللعبة (Server) لحساب نتائج المعارك.

using System.Collections.Generic;
using UnityEngine; // يمكن استبدالها بـ System إذا كان الخادم غير Unity

public static class UnitBalance
{
    // تعاريف فئات الوحدات (لتسهيل قراءة الكود)
    public enum UnitType
    {
        Infantry, // المشاة
        Archer,   // الرماة
        Cavalry,  // الفرسان
        Siege     // آلات الحصار (مؤجلة للمرحلة 2)
    }

    // المعاملات الثابتة للتفوق القتالي المعتمدة في تصميم اللعبة
    public const float SuperiorityDamageBonus = 0.30f; // +30% هجوم
    public const float InferiorityDefensePenalty = 0.25f; // -25% دفاع

    // قاموس (Dictionary) يحدد تفوق كل وحدة على الأخرى
    // المفتاح (Key): الوحدة التي تهاجم
    // القيمة (Value): الوحدة التي تتفوق عليها
    private static readonly Dictionary<UnitType, UnitType> CombatAdvantageMap = 
        new Dictionary<UnitType, UnitType>()
    {
        { UnitType.Infantry, UnitType.Archer }, // المشاة يتفوقون على الرماة
        { UnitType.Archer, UnitType.Cavalry },  // الرماة يتفوقون على الفرسان
        { UnitType.Cavalry, UnitType.Infantry } // الفرسان يتفوقون على المشاة
        // آلات الحصار تُضاف لاحقاً (Siege)
    };

    /// <summary>
    /// يتحقق مما إذا كانت الوحدة المهاجمة لها تفوق على الوحدة المدافعة.
    /// </summary>
    public static bool HasAdvantage(UnitType attacker, UnitType defender)
    {
        if (CombatAdvantageMap.TryGetValue(attacker, out UnitType superiorTo))
        {
            return superiorTo == defender;
        }
        return false;
    }

    /// <summary>
    /// يحسب مُعامل الضرر بناءً على التفوق أو عدمه.
    /// </summary>
    /// <param name="attacker">نوع الوحدة المهاجمة.</param>
    /// <param name="defender">نوع الوحدة المدافعة.</param>
    /// <returns>مُعامل الضرر (مثلاً 1.30 أو 1.00).</returns>
    public static float GetDamageMultiplier(UnitType attacker, UnitType defender)
    {
        if (HasAdvantage(attacker, defender))
        {
            return 1f + SuperiorityDamageBonus; // 1.30f
        }
        // في نظام النسر الدامي، إذا لم يكن هناك تفوق مباشر، يكون المعامل 1.00f 
        // ما لم يتم تطبيق عقوبة الدفاع (InferiorityDefensePenalty) بشكل منفصل على DEFENSE.
        
        return 1f; // لا يوجد تفوق/لا عقوبة هجومية
    }

    // ملاحظة: يتم تطبيق عقوبة الدفاع (-25%) على إحصائية DEFENSE لوحدات العدو المنهزمة في نظام القتال الرئيسي.

}