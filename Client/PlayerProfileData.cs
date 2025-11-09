// PlayerProfileData.cs
// نموذج بيانات (Data Model) لتخزين معلومات اللاعب الرئيسية ("سجل النسر")
// يستخدم لتحديد حالة اللاعب على الخريطة والخادم.

using System;
using UnityEngine;
using static UnitBalance; // استخدام تعريف UnitType من ملف UnitBalance

[Serializable]
public class PlayerProfileData
{
    // تعريفات اللاعب الأساسية
    public string PlayerID;
    public string PlayerName;
    public int PowerLevel; // قوة اللاعب الإجمالية

    // حالة القلعة والمباني
    public int CastleLevel; // مستوى عرين النسر (C-Level)
    public int CastleX; // إحداثي X على الخريطة
    public int CastleY; // إحداثي Y على الخريطة
    
    // حالة الحماية والدروع
    public bool HasShield; // هل يمتلك حجاب الصمود؟
    public DateTime ShieldEndTime; // متى ينتهي الدرع؟

    // المخزون والموارد (يجب أن يتم تحديثه دائماً)
    public long FoodAmount; // مدخرات الصيد
    public long WoodAmount; // حطب الغابات
    public long IronAmount; // صفائح الصدأ
    public long StoneAmount; // حجر الأساس
    public long GemAmount; // جواهر العهد (المورد الأسطوري)

    // حالة الجيش (كميات الوحدات)
    // نستخدم Dictionary لتخزين كمية كل نوع من الوحدات
    public Dictionary<UnitType, int> TroopCounts = new Dictionary<UnitType, int>();
    
    // معلومات التحالف (Alliance Info)
    public string AllianceTag; // وسم التحالف (مثلاً: EAG)
    public string AllianceRelationship; // العلاقة (Blue, Red, Yellow)

    /// <summary>
    /// دالة بانية (Constructor) لتعيين القيم الافتراضية عند بدء اللاعب.
    /// </summary>
    public PlayerProfileData(string id, string name)
    {
        PlayerID = id;
        PlayerName = name;
        PowerLevel = 100;
        CastleLevel = 1;
        HasShield = true; 
        ShieldEndTime = DateTime.Now.AddDays(3); // درع 3 أيام مبدئي
    }
}