#!/bin/bash
# ==============================================================================
# سكريبت رفع مشروع النسر الدامي على GitHub
# ==============================================================================

echo "🏰 النسر الدامي - رفع على GitHub"
echo "================================="

# التحقق من وجود git
if ! command -v git &> /dev/null; then
    echo "❌ Git غير مثبت. يرجى تثبيت Git أولاً."
    exit 1
fi

# التحقق من Repository
if [ ! -d ".git" ]; then
    echo "📁 إنشاء Repository جديد..."
    git init
    git config user.name "MiniMax Agent"
    git config user.email "minimax@example.com"
fi

echo "📋 إضافة جميع الملفات..."
git add .

echo "💾 committing changes..."
git commit -m "Complete 'النسر الدامي' (Bloody Eagle) MMO Strategy Game

🏰 Islamic-Andalusian inspired strategy game
📁 34 complete documentation files
🎯 Ready for immediate development start

Files included:
- Unity Client Scripts (C#)
- Python Server Architecture  
- AI/Minimax Algorithm
- Complete Game Design Documentation
- Art & Audio Direction
- Development Plans & Financial Models"

echo ""
echo "📝 الأوامر التالية للرفع على GitHub:"
echo "=================================="
echo ""
echo "1. إنشاء Repository على GitHub.com:"
echo "   - اذهب إلى: https://github.com"
echo "   - انقر 'New Repository'"
echo "   - اسم Repository: النسر-الدامي-Bloody-Eagle"
echo "   - الوصف: Islamic-Andalusian MMO Strategy Game"
echo ""
echo "2. رفع الملفات (استبدل YOUR_USERNAME و REPO_NAME):"
echo ""
echo "git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
echo "git push -u origin master"
echo ""
echo "3. إعداد GitHub Repository:"
echo "   - إنشاء Issues للمهام"
echo "   - إنشاء Projects للمتابعة" 
echo "   - إضافة Labels حسب GitHub_Labels_Creation_Guide.md"
echo ""
echo "🎮 المشروع جاهز للانطلاق!"
echo "🏰 النسر الدامي في طريقه للنجوم!"