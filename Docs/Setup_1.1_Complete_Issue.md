# محتوى الـ Issue الأول: Setup 1.1: Project Environment

## العنوان (Title)
**Setup 1.1: Project Environment** 🛠️

## الوصف التفصيلي (Description)

### نظرة عامة
هذا الـ Issue يمثل الخطوة الأولى الأساسية في مشروع "النسر الدامي" - إعداد البيئة التطويرية الكاملة. هذا الـ Setup أساسي لكل المهام اللاحقة ويضمن أن جميع أعضاء الفريق يعملون على نفس البيئة المنطقية والمتسقة.

### السياق
مشروع "النسر الدامي" هو لعبة استراتيجية MMO طموحة تستخدم:
- **العميل (Client)**: Unity + C# للواجهة الأمامية
- **الخادم (Server)**: Python/Node.js للواجهة الخلفية
- **الذكاء الاصطناعي**: خوارزمية Minimax للقرارات
- **إدارة المشروع**: GitHub مع نظام Issues/Projects

### نطاق العمل
- [ ] إعداد هيكل المستودع الكامل (Repository Structure)
- [ ] إنشاء المشاريع الأساسية (Unity Client + Server Project)
- [ ] إعداد خطوط التكامل (CI/CD Pipelines)
- [ ] تطبيق نموذج التفرعات (GitFlow Branching)
- [ ] إعداد قوالب الـ Commits وقواعد الـ Code Review

### التفاصيل التقنية

#### هيكل المستودع المستهدف:
```
📁 النسر_الدامي/
├── 📁 Docs/              # وثائق التصميم التفصيلية
│   ├── GDD_النسر_الدامي.md
│   └── Technical_Architecture.md
├── 📁 Client/           # كود الواجهة الأمامية (Unity)
│   ├── Assets/
│   ├── Scripts/
│   └── Scenes/
├── 📁 Server/           # كود الواجهة الخلفية
│   ├── src/
│   ├── tests/
│   └── config/
└── 📁 AI/               # نظام الذكاء الاصطناعي
    ├── minimax/
    └── evaluation/
```

#### المتطلبات الأساسية:
1. **Unity Project Setup**
   - إنشاء مشروع Unity جديد
   - إضافة Unity packages المطلوبة
   - إعداد إعدادات البناء للهواتف

2. **Server Environment**
   - إنشاء مشروع Python/Node.js
   - إعداد قاعدة البيانات
   - تكوين بيئة التطوير

3. **Version Control**
   - إعداد .gitignore محترف
   - إنشاء branching strategy
   - إعداد protected branches

### التحديات المتوقعة
- **توافق الإصدارات**: ضمان توافق Unity version مع جميع المطورين
- **أداء الخادم**: تحديد الحد الأدنى المتطلبات للـ MVP
- **تكامل الأنظمة**: ضمان التواصل السلس بين Client/Server/AI

## التصنيفات (Labels)
- `Code: Server` - يتطلب عمل على الخادم
- `P1: High Priority` - أولوية عالية - أساسي لكل المهام الأخرى
- `Setup` - مهمة إعداد البيئة

## قائمة المتطلبات (Checklist)

### Phase 1: Repository Structure
- [ ] إنشاء المستودع الرسمي على GitHub
- [ ] إنشاء هيكل المجلدات (Docs/, Client/, Server/, AI/)
- [ ] إضافة ملف README.md شامل
- [ ] إضافة ملف .gitignore محترف
- [ ] إعداد الرخصة (License)

### Phase 2: Unity Client Setup
- [ ] إنشاء مشروع Unity جديد
- [ ] إضافة package dependencies (JSON.NET, UniRx, etc.)
- [ ] إعداد Project Settings للهواتف
- [ ] إنشاء Scene structure أساسي
- [ ] إضافة scripts structure

### Phase 3: Server Environment
- [ ] إنشاء مشروع Python Flask/Django أو Node.js Express
- [ ] إعداد requirements.txt أو package.json
- [ ] إعداد قاعدة بيانات (SQLite/PostgreSQL)
- [ ] إنشاء API endpoints أساسية
- [ ] إضافة نظام Authentication بسيط

### Phase 4: Development Workflow
- [ ] إعداد GitFlow branching model
- [ ] إنشاء protected branches (main, develop)
- [ ] إعداد Code Review requirements
- [ ] إنشاء Issue templates
- [ ] إعداد Pull Request templates

### Phase 5: CI/CD Pipeline
- [ ] إعداد GitHub Actions للـ Client
- [ ] إعداد GitHub Actions للـ Server
- [ ] إعداد automated testing
- [ ] إعداد build automation
- [ ] إعداد deployment pipeline

## المعايير (Acceptance Criteria)
- [ ] مستودع GitHub منظم مع هيكل واضح
- [ ] مشروع Unity قابل للتجميع والاختبار
- [ ] خادم قابل للتشغيل مع API endpoints أساسية
- [ ] نظام GitFlow يعمل بشكل صحيح
- [ ] جميع أعضاء الفريق يمكنهم الـ Clone والـ Work على المشروع

## الوقت المقدر (Estimated Time)
**3-4 أيام عمل**

## الفريق المطلوب (Assignees)
- **@Server-Team** - تطوير الخادم والـ Backend
- **@Client-Team** - تطوير Unity والواجهة الأمامية
- **@DevOps-Team** - خطوط التكامل وDevOps

## المراجع (References)
- [Unity Manual - Project Setup](https://docs.unity3d.com/Manual/ProjectSetup.html)
- [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Project Architecture Document](./Docs/Technical_Architecture.md)

## ملاحظات (Notes)
- هذا الـ Issue هو الأساس لجميع المهام الأخرى
- يجب إكمال هذا بنجاح قبل بدء أي Feature/Code/Asset Issues
- أي مشاكل في الـ Setup يجب حلها فوراً لضمان سير العمل

---
*تم إنشاء هذا الـ Issue في إطار مشروع "النسر الدامي" - لعبة استراتيجية MMO طموحة*