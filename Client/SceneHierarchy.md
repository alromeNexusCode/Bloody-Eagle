# 🗺️ المخطط الهيكلي لمشاهد العميل (Client Scene Hierarchy)

هذا الملف يحدد تنظيم المشاهد (Scenes) في محرك Unity لضمان سهولة التنقل.

## 1. المشاهد الرئيسية (Core Scenes)

| اسم المشهد | الوصف | المكونات الرئيسية |
| :--- | :--- | :--- |
| **00_Boot** | مشهد التحميل الأولي / شاشة العنوان. | تحميل البيانات الأساسية، بدء اتصال ServerManager.cs، عرض لوجو اللعبة. |
| **01_Castle** | مشهد القلعة الرئيسية (الواجهة الأمامية). | يحتوي على جميع واجهات المباني (القائمة، المغرس، المكتبة). يجب أن يستدعي PlayerProfileData.cs. |
| **02_WorldMap** | مشهد الخريطة العالمية. | عرض الخريطة، وضع نقاط التكبير/التصغير، عرض قلاع اللاعبين الآخرين (باستخدام البيانات المسترجعة من الخادم). |
| **03_Combat** | مشهد معالجة القتال. | مشهد خفي (Invisible Scene) يقوم بتحميل واجهة المستخدم لتقرير القتال، ويستدعي ServerManager.cs لإرسال طلب Minimax. |

## 2. المكونات الثابتة (Persistent Objects)

هذه الكائنات يجب أن تستمر بين المشاهد (لا يتم تدميرها عند تغيير المشهد):

* **ServerManager:** (يحتوي على ServerManager.cs) - لإدارة جميع اتصالات API.
* **GameManager:** (يحتوي على PlayerProfileData.cs) - لحفظ بيانات اللاعب الحالية محليًا.
* **SoundManager:** (يحتوي على جميع ملفات الصوت والموسيقى).

## 3. ملاحظات إضافية

* يجب استخدام نظام التحميل الإضافي (Additive Loading) للمشاهد (01_Castle) لضمان سرعة التبديل بين الواجهات.

---

## 📂 هيكل الملفات في Unity

```
Assets/
├── Scenes/
│   ├── 00_Boot.unity
│   ├── 01_Castle.unity
│   ├── 02_WorldMap.unity
│   ├── 03_Combat.unity
│   └── UI/
│       ├── CastleUI.unity    # واجهة داخل القلعة
│       ├── BuildingUI.unity  # واجهة المباني
│       └── CombatUI.unity    # واجهة القتال
├── Scripts/
│   ├── SceneManager.cs       # إدارة التنقل بين المشاهد
│   ├── PersistentManager.cs  # إدارة المكونات الثابتة
│   └── Client/
│       ├── ServerManager.cs
│       ├── PlayerProfileData.cs
│       ├── PlayerResources.cs
│       └── UnitBalance.cs
└── Prefabs/
    ├── Managers/
    │   ├── ServerManager.prefab
    │   ├── GameManager.prefab
    │   └── SoundManager.prefab
    ├── Buildings/
    │   ├── Castle.prefab
    │   ├── Barracks.prefab
    │   └── Market.prefab
    └── UI/
        ├── CastleInterface.prefab
        └── CombatInterface.prefab
```

## 🔄 تدفق التنقل المقترح

1. **بدء اللعبة:** 00_Boot → تحميل البيانات → الانتقال إلى 01_Castle
2. **داخل القلعة:** 01_Castle (تحميل الإضافي لـ BuildingUI)
3. **العالم الخارجي:** 01_Castle → 02_WorldMap
4. **بدء القتال:** 02_WorldMap → 03_Combat → العودة إلى 02_WorldMap

---

*تاريخ الإنشاء: 2025-11-09*  
*المؤلف: MiniMax Agent*