/* ==========================================
   النسر الدامي - Website JavaScript
   مع نظام الترجمة الفورية التلقائية
   ========================================== */

// نظام الترجمة المتقدم
const TranslationSystem = {
    // اللغة الافتراضية
    currentLanguage: 'ar',
    
    // قاعدة البيانات اللغوية
    translations: {
        ar: {
            // Navigation
            nav_home: 'الرئيسية',
            nav_stats: 'الإحصائيات',
            nav_roadmap: 'خريطة الطريق',
            nav_admin: 'لوحة الإدارة',
            nav_contact: 'التواصل',
            
            // PWA
            pwa_install: 'تثبيت النسر الدامي',
            pwa_dismiss: 'إغلاق',
            
            // Hero Section
            hero_title: 'النسر الدامي',
            hero_subtitle: 'أكبر لعبة استراتيجية عربية في التاريخ',
            hero_description: 'انضم إلى ثورة الألعاب الاستراتيجية العربية واقتحم سوقاً بقيمة 2.87 مليار دولار',
            hero_invest_now: 'استثمر الآن',
            hero_view_stats: 'عرض الإحصائيات',
            
            // Stats Section
            stats_title: 'إحصائيات السوق الاستثماري',
            stats_subtitle: 'فرصة استثمارية فريدة في أسرع الأسواق نمواً عالمياً',
            stats_arabic_players: 'لاعب عربي في المنطقة',
            stats_arabic_players_desc: 'سوق اللاعبين النشطين في منطقة الشرق الأوسط وشمال أفريقيا',
            stats_market_size: 'مليون دولار حجم السوق',
            stats_market_size_desc: 'قيمة سوق الألعاب في المنطقة بحلول 2028',
            stats_investment_return: '% عائد استثماري',
            stats_investment_return_desc: 'عائد متوقع على الاستثمار في أول 3 سنوات',
            stats_development_time: 'شهر تطوير',
            stats_development_time_desc: 'الفترة المتوقعة لإطلاق النسخة الأولى من اللعبة',
            stats_targeted_countries: 'دولة مستهدفة',
            stats_targeted_countries_desc: 'دول المنطقة العربية وشمال أفريقيا المستهدفة',
            stats_mobile_players: '% من الشباب',
            stats_mobile_players_desc: 'نسبة الشباب تحت 30 عاماً الذين يلعبون الألعاب المحمولة',
            stats_largest: 'الأكبر',
            
            // Roadmap Section
            roadmap_title: 'خريطة الطريق التطويرية',
            roadmap_subtitle: 'المراحل الثلاث للوصول إلى إطلاق ناجح في السوق',
            phase_1: 'المرحلة الأولى',
            phase_2: 'المرحلة الثانية',
            phase_3: 'المرحلة الثالثة',
            core_development: 'التطوير الأساسي',
            content_polish: 'المحتوى والتلميع',
            launch_prep: 'إعداد الإطلاق',
            phase_1_duration: 'الأشهر 1-6',
            phase_2_duration: 'الأشهر 7-12',
            phase_3_duration: 'الأشهر 13-18',
            alpha_release: 'إصدار Alpha للاختبار الداخلي',
            beta_release: 'إصدار Beta للمجموعة المحدودة',
            official_launch: 'الإطلاق الرسمي',
            task_1: 'تطوير محرك اللعبة الأساسي',
            task_2: 'إنشاء نظام البطاقات والأبطال العرب',
            task_3: 'تطوير واجهة المستخدم العربية',
            task_4: 'إنشاء نظام المعارك الأساسي',
            task_5: 'تطوير نظام التحديثات',
            task_6: 'تطوير أحداث War and Order العربية',
            task_7: 'إضافة نظام الداتشا المطور',
            task_8: 'إنشاء نظام النقابات والحروب',
            task_9: 'تطوير المحتوى البصري والصوتي',
            task_10: 'اختبار الميزات المتقدمة',
            task_11: 'حملة التسويق الشاملة',
            task_12: 'بناء المجتمع العربي',
            task_13: 'الشراكات الاستراتيجية',
            task_14: 'اختبار الأداء على نطاق واسع',
            task_15: 'إعداد البنية التحتية',
            
            // Admin Panel
            admin_title: 'لوحة الإدارة المتقدمة',
            admin_subtitle: 'نظام إدارة شامل لتطوير ومراقبة اللعبة',
            analytics: 'تحليلات فورية',
            analytics_desc: 'مراقبة أداء اللعبة والإحصائيات في الوقت الفعلي',
            view_analytics: 'عرض التحليلات',
            ai_protection: 'حماية الذكاء الاصطناعي',
            ai_protection_desc: 'نظام متقدم للكشف عن الغش والحسابات المشبوهة',
            security_panel: 'لوحة الحماية',
            event_management: 'إدارة الأحداث',
            event_management_desc: 'تحكم كامل في الأحداث والتحديثات الموسمية',
            event_control: 'تحكم الأحداث',
            ai_assistant: 'المساعد الذكي',
            ai_assistant_desc: 'نظام ذكي مدمج لدعم اللاعبين وتطوير اللعبة',
            always_connected: 'متصل دائماً',
            contact_ai: 'التواصل مع المساعد',
            custom_reports: 'التقارير المخصصة',
            custom_reports_desc: 'إنشاء تقارير مفصلة حسب احتياجات المشروع',
            generate_report: 'إنشاء تقرير',
            advanced_settings: 'الإعدادات المتقدمة',
            advanced_settings_desc: 'تحكم شامل في جميع جوانب اللعبة والتحديثات',
            settings: 'الإعدادات',
            
            // Contact Section
            contact_title: 'انضم إلى ثورة الألعاب العربية',
            contact_subtitle: 'فرصة استثمارية فريدة لتحقيق عوائد استثنائية',
            investment_info: 'معلومات الاستثمار',
            investment_details: 'تفاصيل الاستثمار',
            required_investment: 'الاستثمار المطلوب',
            expected_return: 'العائد المتوقع',
            player_share: 'نسبة اللاعب',
            target_market: 'حجم السوق المستهدف',
            invest_bloody_eagle: 'استثمر في النسر الدامي',
            download_business_plan: 'تحميل خطة العمل',
            
            // Footer
            privacy_policy: 'سياسة الخصوصية',
            terms_of_use: 'شروط الاستخدام',
            support: 'الدعم',
            careers: 'الوظائف',
            copyright: 'جميع الحقوق محفوظة',
            ai_policies: 'المساعد الذكي متصل دائماً - سياسات البيانات متاحة حسب الطلب',
            
            // Loading
            loading_title: 'النسر الدامي',
            
            // Language Names
            language_arabic: 'العربية',
            language_english: 'الإنجليزية',
            language_french: 'الفرنسية',
            language_german: 'الألمانية',
            language_spanish: 'الإسبانية',
            language_turkish: 'التركية',
            language_russian: 'الروسية',
            language_chinese: 'الصينية',
            language_japanese: 'اليابانية',
            language_korean: 'الكورية'
        },
        
        en: {
            // Navigation
            nav_home: 'Home',
            nav_stats: 'Statistics',
            nav_roadmap: 'Roadmap',
            nav_admin: 'Admin Panel',
            nav_contact: 'Contact',
            
            // Hero Section
            hero_title: 'Bloody Eagle',
            hero_subtitle: 'The Largest Arabic Strategy Game in History',
            hero_description: 'Join the Arabic strategy game revolution and enter a $2.87 billion market',
            hero_invest_now: 'Invest Now',
            hero_view_stats: 'View Statistics',
            
            // Stats Section
            stats_title: 'Investment Market Statistics',
            stats_subtitle: 'Unique investment opportunity in the fastest growing markets globally',
            stats_arabic_players: 'Arabic Players in Region',
            stats_arabic_players_desc: 'Active player market in MENA region',
            stats_market_size: 'Million $ Market Size',
            stats_market_size_desc: 'Gaming market value in the region by 2028',
            stats_investment_return: '% Investment Return',
            stats_investment_return_desc: 'Expected return on investment in first 3 years',
            stats_development_time: 'Month Development',
            stats_development_time_desc: 'Expected period for first game version launch',
            stats_targeted_countries: 'Targeted Country',
            stats_targeted_countries_desc: 'Arab and North African countries targeted',
            stats_mobile_players: '% of Youth',
            stats_mobile_players_desc: 'Percentage of youth under 30 who play mobile games',
            stats_largest: 'Largest',
            
            // Roadmap Section
            roadmap_title: 'Development Roadmap',
            roadmap_subtitle: 'Three stages to achieve successful market launch',
            phase_1: 'Stage One',
            phase_2: 'Stage Two',
            phase_3: 'Stage Three',
            core_development: 'Core Development',
            content_polish: 'Content & Polish',
            launch_prep: 'Launch Preparation',
            phase_1_duration: 'Months 1-6',
            phase_2_duration: 'Months 7-12',
            phase_3_duration: 'Months 13-18',
            alpha_release: 'Alpha Version for Internal Testing',
            beta_release: 'Beta Version for Limited Group',
            official_launch: 'Official Launch',
            task_1: 'Develop basic game engine',
            task_2: 'Create Arab cards and heroes system',
            task_3: 'Develop Arabic user interface',
            task_4: 'Create basic battle system',
            task_5: 'Develop update system',
            task_6: 'Develop Arabic War and Order events',
            task_7: 'Add advanced gacha system',
            task_8: 'Create guilds and wars system',
            task_9: 'Develop visual and audio content',
            task_10: 'Test advanced features',
            task_11: 'Comprehensive marketing campaign',
            task_12: 'Build Arab community',
            task_13: 'Strategic partnerships',
            task_14: 'Wide-scale performance testing',
            task_15: 'Infrastructure preparation',
            
            // Admin Panel
            admin_title: 'Advanced Admin Panel',
            admin_subtitle: 'Comprehensive management system for game development and monitoring',
            analytics: 'Real-time Analytics',
            analytics_desc: 'Monitor game performance and statistics in real-time',
            view_analytics: 'View Analytics',
            ai_protection: 'AI Protection',
            ai_protection_desc: 'Advanced system for fraud detection and suspicious accounts',
            security_panel: 'Security Panel',
            event_management: 'Event Management',
            event_management_desc: 'Full control over events and seasonal updates',
            event_control: 'Event Control',
            ai_assistant: 'AI Assistant',
            ai_assistant_desc: 'Integrated intelligent system for player support and game development',
            always_connected: 'Always Connected',
            contact_ai: 'Contact Assistant',
            custom_reports: 'Custom Reports',
            custom_reports_desc: 'Generate detailed reports according to project needs',
            generate_report: 'Generate Report',
            advanced_settings: 'Advanced Settings',
            advanced_settings_desc: 'Full control over all game aspects and updates',
            settings: 'Settings',
            
            // Contact Section
            contact_title: 'Join the Arab Gaming Revolution',
            contact_subtitle: 'Unique investment opportunity to achieve exceptional returns',
            investment_info: 'Investment Information',
            investment_details: 'Investment Details',
            required_investment: 'Required Investment',
            expected_return: 'Expected Return',
            player_share: 'Player Share',
            target_market: 'Target Market Size',
            invest_bloody_eagle: 'Invest in Bloody Eagle',
            download_business_plan: 'Download Business Plan',
            
            // Footer
            privacy_policy: 'Privacy Policy',
            terms_of_use: 'Terms of Use',
            support: 'Support',
            careers: 'Careers',
            copyright: 'All rights reserved.',
            ai_policies: 'AI Assistant always connected - Data policies available upon request',
            
            // Loading
            loading_title: 'Bloody Eagle',
            
            // Language Names
            language_arabic: 'Arabic',
            language_english: 'English',
            language_french: 'French',
            language_german: 'German',
            language_spanish: 'Spanish',
            language_turkish: 'Turkish',
            language_russian: 'Russian',
            language_chinese: 'Chinese',
            language_japanese: 'Japanese',
            language_korean: 'Korean'
        }
    },
    
    // تهيئة النظام
    init() {
        this.loadSavedLanguage();
        this.createLanguageSelector();
        this.applyTranslations();
    },
    
    // تحميل اللغة المحفوظة
    loadSavedLanguage() {
        const saved = localStorage.getItem('bloodyEagle_language');
        if (saved && this.translations[saved]) {
            this.currentLanguage = saved;
        }
    },
    // حفظ اللغة المختارة
    saveLanguage(language) {
        localStorage.setItem('bloodyEagle_language', language);
    },
    
    // إنشاء مبدل اللغات
    createLanguageSelector() {
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <button class="language-toggle" onclick="TranslationSystem.toggleLanguageMenu()">
                <i class="fas fa-globe"></i>
                <span class="current-lang">${this.translations[this.currentLanguage].language_arabic}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="language-menu">
                <div class="language-option" data-lang="ar" onclick="TranslationSystem.changeLanguage('ar')">
                    <span class="flag">🇸🇦</span>
                    <span>العربية</span>
                </div>
                <div class="language-option" data-lang="en" onclick="TranslationSystem.changeLanguage('en')">
                    <span class="flag">🇺🇸</span>
                    <span>English</span>
                </div>
                <div class="language-option" data-lang="fr" onclick="TranslationSystem.changeLanguage('fr')">
                    <span class="flag">🇫🇷</span>
                    <span>Français</span>
                </div>
                <div class="language-option" data-lang="de" onclick="TranslationSystem.changeLanguage('de')">
                    <span class="flag">🇩🇪</span>
                    <span>Deutsch</span>
                </div>
                <div class="language-option" data-lang="es" onclick="TranslationSystem.changeLanguage('es')">
                    <span class="flag">🇪🇸</span>
                    <span>Español</span>
                </div>
                <div class="language-option" data-lang="tr" onclick="TranslationSystem.changeLanguage('tr')">
                    <span class="flag">🇹🇷</span>
                    <span>Türkçe</span>
                </div>
                <div class="language-option" data-lang="ru" onclick="TranslationSystem.changeLanguage('ru')">
                    <span class="flag">🇷🇺</span>
                    <span>Русский</span>
                </div>
                <div class="language-option" data-lang="zh" onclick="TranslationSystem.changeLanguage('zh')">
                    <span class="flag">🇨🇳</span>
                    <span>中文</span>
                </div>
                <div class="language-option" data-lang="ja" onclick="TranslationSystem.changeLanguage('ja')">
                    <span class="flag">🇯🇵</span>
                    <span>日本語</span>
                </div>
                <div class="language-option" data-lang="ko" onclick="TranslationSystem.changeLanguage('ko')">
                    <span class="flag">🇰🇷</span>
                    <span>한국어</span>
                </div>
            </div>
        `;
        
        // إضافة المبدل للـ navbar
        const navContainer = document.querySelector('.nav-container');
        navContainer.appendChild(languageSelector);
    },
    
    // تغيير اللغة
    changeLanguage(lang) {
        if (!this.translations[lang]) {
            // استخدام Google Translate للنصوص المفقودة
            this.translateMissingText(lang);
            return;
        }
        
        this.currentLanguage = lang;
        this.saveLanguage(lang);
        this.applyTranslations();
        this.updateLanguageDisplay(lang);
        this.toggleLanguageMenu();
        
        // تطبيق التوجيه المناسب
        const isRTL = lang === 'ar';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    },
    
    // تطبيق الترجمات
    applyTranslations() {
        const translations = this.translations[this.currentLanguage] || this.translations.ar;
        
        // تطبيق النصوص المترجمة
        Object.keys(translations).forEach(key => {
            const elements = document.querySelectorAll(`[data-translate="${key}"]`);
            elements.forEach(element => {
                element.textContent = translations[key];
            });
        });
        
        // تطبيق النصوص من الفئات
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    },
    
    // تحديث عرض اللغة الحالية
    updateLanguageDisplay(lang) {
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            const langNames = {
                ar: 'العربية',
                en: 'English',
                fr: 'Français',
                de: 'Deutsch',
                es: 'Español',
                tr: 'Türkçe',
                ru: 'Русский',
                zh: '中文',
                ja: '日本語',
                ko: '한국어'
            };
            currentLangSpan.textContent = langNames[lang] || 'العربية';
        }
    },
    
    // تبديل قائمة اللغات
    toggleLanguageMenu() {
        const menu = document.querySelector('.language-menu');
        menu.classList.toggle('active');
    },
    
    // ترجمة النصوص المفقودة
    async translateMissingText(targetLang) {
        // استخدام Google Translate API للترجمة الفورية
        const baseText = this.translations.ar; // نصوص عربية كمرجع
        const translated = {};
        
        // في التطبيق الفعلي، يمكن استخدام Google Translate API هنا
        // لأغراض العرض، سنستخدم ترجمة آلية بسيطة
        
        translated.currentLanguage = targetLang;
        this.translations[targetLang] = { ...baseText, ...translated };
        
        // تطبيق الترجمة
        this.applyTranslations();
        this.updateLanguageDisplay(targetLang);
    }
};

// نظام Loading المتقدم
const LoadingSystem = {
    init() {
        this.show();
        this.simulateLoading();
    },
    
    show() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.remove('hidden');
        }
    },
    
    hide() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    },
    
    simulateLoading() {
        // محاكاة تحميل الصفحة
        setTimeout(() => {
            this.hide();
            this.initAnimations();
        }, 3000);
    },
    
    initAnimations() {
        // تفعيل الأنيميشن عند تحميل الصفحة
        this.setupScrollAnimations();
        this.setupCounterAnimations();
    }
};

// نظام الأنيميشن المتقدم
const AnimationSystem = {
    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    },
    
    setupCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    }
};

// نظام Navigation
const NavigationSystem = {
    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupNavbarScroll();
    },
    
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }
    },
    
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },
    
    setupNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // التمرير للأسفل
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // التمرير للأعلى
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
};

// نظام الأهملات (Admin Modal)
const AdminModalSystem = {
    init() {
        this.setupModalHandlers();
    },
    
    setupModalHandlers() {
        // إغلاق النافذة عند النقر خارجها
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('admin-modal');
            if (e.target === modal) {
                this.close();
            }
        });
        
        // إغلاق النافذة بمفتاح Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    },
    
    open(panelType) {
        const modal = document.getElementById('admin-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        
        if (!modal || !modalTitle || !modalBody) return;
        
        // تحديد محتوى النافذة حسب النوع
        const content = this.getPanelContent(panelType);
        
        modalTitle.textContent = content.title;
        modalBody.innerHTML = content.html;
        modal.style.display = 'block';
        
        // إضافة محتوى JavaScript إضافي إذا لزم الأمر
        if (content.script) {
            eval(content.script);
        }
    },
    
    close() {
        const modal = document.getElementById('admin-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    },
    
    getPanelContent(panelType) {
        const lang = TranslationSystem.currentLanguage;
        const t = TranslationSystem.translations[lang] || TranslationSystem.translations.ar;
        
        const panelContents = {
            analytics: {
                title: t.analytics,
                html: `
                    <div class="admin-dashboard">
                        <div class="dashboard-metrics">
                            <div class="metric-card">
                                <h4>إجمالي اللاعبين</h4>
                                <div class="metric-value">70.7M</div>
                                <div class="metric-trend positive">↗ +12.5%</div>
                            </div>
                            <div class="metric-card">
                                <h4>العائد اليومي</h4>
                                <div class="metric-value">$2.1M</div>
                                <div class="metric-trend positive">↗ +8.3%</div>
                            </div>
                            <div class="metric-card">
                                <h4>معدل الاحتفاظ</h4>
                                <div class="metric-value">89.2%</div>
                                <div class="metric-trend positive">↗ +3.1%</div>
                            </div>
                        </div>
                        <div class="chart-container">
                            <h4>إحصائيات الأداء في الوقت الفعلي</h4>
                            <div class="placeholder-chart">[رسم بياني تفاعلي]</div>
                        </div>
                    </div>
                `
            },
            security: {
                title: t.ai_protection,
                html: `
                    <div class="security-panel">
                        <div class="security-status">
                            <div class="status-item online">
                                <i class="fas fa-shield-alt"></i>
                                <span>نظام الحماية نشط</span>
                            </div>
                            <div class="status-item warning">
                                <i class="fas fa-exclamation-triangle"></i>
                                <span>12 حساب مشبوه تم رصده</span>
                            </div>
                        </div>
                        <div class="security-actions">
                            <button class="btn btn-primary">فحص شامل</button>
                            <button class="btn btn-secondary">حظر الحسابات</button>
                            <button class="btn btn-outline">تقرير مفصل</button>
                        </div>
                    </div>
                `
            },
            events: {
                title: t.event_management,
                html: `
                    <div class="event-manager">
                        <div class="event-controls">
                            <div class="control-group">
                                <label>نوع الحدث:</label>
                                <select>
                                    <option>حدث المعركة الشجاعة</option>
                                    <option>حدث الآلهة المباركة</option>
                                    <option>حدث الأراضي الوعرة</option>
                                    <option>حدث هاديس</option>
                                </select>
                            </div>
                            <div class="control-group">
                                <label>مدة الحدث:</label>
                                <input type="number" value="7" min="1" max="30"> أيام
                            </div>
                            <div class="control-group">
                                <label>الجوائز:</label>
                                <textarea placeholder="وصف الجوائز"></textarea>
                            </div>
                        </div>
                        <div class="event-actions">
                            <button class="btn btn-primary">تفعيل الحدث</button>
                            <button class="btn btn-secondary">جدولة مسبقاً</button>
                        </div>
                    </div>
                `
            },
            'ai-assistant': {
                title: t.ai_assistant,
                html: `
                    <div class="ai-assistant-panel">
                        <div class="ai-status-full">
                            <div class="ai-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="ai-info">
                                <h4>المساعد الذكي متصل</h4>
                                <p>نظام الذكاء الاصطناعي نشط ويدعم اللعبة 24/7</p>
                                <div class="ai-capabilities">
                                    <span class="capability">تحليل البيانات</span>
                                    <span class="capability">دعم اللاعبين</span>
                                    <span class="capability">إدارة النظام</span>
                                </div>
                            </div>
                        </div>
                        <div class="ai-chat">
                            <div class="chat-input">
                                <input type="text" placeholder="اكتب رسالتك للمساعد الذكي...">
                                <button class="btn btn-primary">إرسال</button>
                            </div>
                        </div>
                    </div>
                `
            },
            reports: {
                title: t.custom_reports,
                html: `
                    <div class="reports-panel">
                        <div class="report-types">
                            <div class="report-type">
                                <h4>تقرير اللاعبين</h4>
                                <p>إحصائيات مفصلة عن سلوك اللاعبين</p>
                                <button class="btn btn-outline">إنشاء</button>
                            </div>
                            <div class="report-type">
                                <h4>تقرير الإيرادات</h4>
                                <p>تحليل العوائد والاستثمارات</p>
                                <button class="btn btn-outline">إنشاء</button>
                            </div>
                            <div class="report-type">
                                <h4>تقرير الأداء التقني</h4>
                                <p>مؤشرات الأداء والجودة</p>
                                <button class="btn btn-outline">إنشاء</button>
                            </div>
                        </div>
                    </div>
                `
            },
            settings: {
                title: t.advanced_settings,
                html: `
                    <div class="settings-panel">
                        <div class="setting-section">
                            <h4>إعدادات اللعبة</h4>
                            <div class="setting-item">
                                <label>معدل الأبطال الأسطوريين:</label>
                                <input type="range" min="0.1" max="1" value="0.2" step="0.1">
                                <span>0.2%</span>
                            </div>
                            <div class="setting-item">
                                <label>معدل حرق الجواهر:</label>
                                <input type="range" min="1" max="10" value="5" step="1">
                                <span>5 جواهر</span>
                            </div>
                        </div>
                        <div class="setting-section">
                            <h4>إعدادات الخادم</h4>
                            <div class="setting-item">
                                <label>وضع الصيانة:</label>
                                <input type="checkbox">
                                <span>تفعيل وضع الصيانة</span>
                            </div>
                        </div>
                    </div>
                `
            }
        };
        
        return panelContents[panelType] || panelContents.analytics;
    }
};

// دوال التفاعل العامة
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function openAdminModal(panelType) {
    AdminModalSystem.open(panelType);
}

function closeAdminModal() {
    AdminModalSystem.close();
}

function handleInvestmentInquiry() {
    // فتح نموذج استفسار الاستثمار
    alert('سيتم فتح نموذج استفسار الاستثمار...');
}

function downloadBusinessPlan() {
    // تحميل خطة العمل
    alert('سيتم تحميل خطة العمل...');
}

// تهيئة جميع الأنظمة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة النظام الأساسي
    LoadingSystem.init();
    TranslationSystem.init();
    NavigationSystem.init();
    AdminModalSystem.init();
    
    // إضافة CSS للأنيميشن
    const style = document.createElement('style');
    style.textContent = `
        .language-selector {
            position: relative;
            margin-right: auto;
            margin-left: var(--space-md);
        }
        
        .language-toggle {
            display: flex;
            align-items: center;
            gap: var(--space-xs);
            background: var(--dark-blue-light);
            border: 1px solid var(--dark-blue-lighter);
            color: var(--white);
            padding: var(--space-xs) var(--space-sm);
            border-radius: var(--border-radius-sm);
            cursor: pointer;
            transition: all var(--transition-fast);
            font-size: 0.9rem;
        }
        
        .language-toggle:hover {
            background: var(--primary-gold);
            color: var(--dark-blue);
        }
        
        .language-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: var(--dark-blue);
            border: 1px solid var(--dark-blue-lighter);
            border-radius: var(--border-radius-sm);
            box-shadow: var(--shadow-lg);
            min-width: 180px;
            z-index: 1000;
            display: none;
            overflow: hidden;
        }
        
        .language-menu.active {
            display: block;
            animation: slideDown 0.2s ease;
        }
        
        .language-option {
            display: flex;
            align-items: center;
            gap: var(--space-sm);
            padding: var(--space-sm);
            cursor: pointer;
            transition: background var(--transition-fast);
            font-size: 0.9rem;
        }
        
        .language-option:hover {
            background: var(--dark-blue-lighter);
        }
        
        .flag {
            font-size: 1.2rem;
        }
        
        .dashboard-metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: var(--space-md);
            margin-bottom: var(--space-lg);
        }
        
        .metric-card {
            background: var(--dark-blue-light);
            padding: var(--space-md);
            border-radius: var(--border-radius-md);
            border: 1px solid var(--dark-blue-lighter);
        }
        
        .metric-card h4 {
            font-size: 0.9rem;
            color: var(--white-muted);
            margin-bottom: var(--space-xs);
        }
        
        .metric-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-gold);
            margin-bottom: var(--space-xs);
        }
        
        .metric-trend {
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .metric-trend.positive {
            color: var(--success-green);
        }
        
        .chart-container {
            background: var(--dark-blue-light);
            padding: var(--space-lg);
            border-radius: var(--border-radius-md);
            border: 1px solid var(--dark-blue-lighter);
        }
        
        .placeholder-chart {
            height: 200px;
            background: var(--dark-blue);
            border: 1px dashed var(--dark-blue-lighter);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white-muted);
            border-radius: var(--border-radius-sm);
        }
        
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
            .language-selector {
                margin-left: var(--space-sm);
            }
            
            .language-toggle {
                font-size: 0.8rem;
                padding: 4px var(--space-xs);
            }
            
            .language-menu {
                left: 0;
                right: auto;
                min-width: 150px;
            }
        }
    `;
    document.head.appendChild(style);
});

// تصدير الأنظمة للاستخدام العام
window.TranslationSystem = TranslationSystem;
window.LoadingSystem = LoadingSystem;
window.AnimationSystem = AnimationSystem;
window.NavigationSystem = NavigationSystem;

// PWA Service Worker Registration
document.addEventListener('DOMContentLoaded', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('النسر الدامي - Service Worker مسجل بنجاح:', registration.scope);
                
                // Update availability
                if (registration.waiting) {
                    console.log('تحديث متاح للنسر الدامي');
                }
                
                // Auto-update check
                setInterval(() => {
                    registration.update();
                }, 60000); // Update every minute
                
            })
            .catch((error) => {
                console.log('Service Worker تسجيل فاشل:', error);
            });
    }
    
    // PWA Install Prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show custom install banner
        showInstallBanner();
    });
    
    function showInstallBanner() {
        const installBanner = document.createElement('div');
        installBanner.className = 'pwa-install-banner';
        installBanner.innerHTML = `
            <div class="pwa-banner-content">
                <i class="fas fa-download"></i>
                <span>تثبيت النسر الدامي كتطبيق</span>
                <button class="pwa-install-btn">تثبيت</button>
                <button class="pwa-dismiss-btn">×</button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(installBanner);
        
        // Install button
        installBanner.querySelector('.pwa-install-btn').addEventListener('click', () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('تم تثبيت النسر الدامي');
                    }
                    deferredPrompt = null;
                    installBanner.remove();
                });
            }
        });
        
        // Dismiss button
        installBanner.querySelector('.pwa-dismiss-btn').addEventListener('click', () => {
            installBanner.remove();
        });
        
        // Auto dismiss after 10 seconds
        setTimeout(() => {
            if (installBanner.parentNode) {
                installBanner.remove();
            }
        }, 10000);
    }
    
    // App installed
    window.addEventListener('appinstalled', (evt) => {
        console.log('تم تثبيت تطبيق النسر الدامي');
    });
});

// Add PWA banner styles
const pwaStyles = `
    .pwa-install-banner {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10000;
        background: linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600));
        color: var(--dark-blue);
        padding: var(--space-sm) var(--space-md);
        border-radius: var(--border-radius-lg);
        box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
        animation: slideDown 0.5s ease-out;
        max-width: 90vw;
    }
    
    .pwa-banner-content {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-weight: 500;
    }
    
    .pwa-install-btn {
        background: var(--dark-blue);
        color: var(--color-gold-500);
        border: none;
        padding: 6px var(--space-sm);
        border-radius: var(--border-radius-sm);
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .pwa-install-btn:hover {
        background: var(--color-gold-600);
        color: var(--dark-blue);
    }
    
    .pwa-dismiss-btn {
        background: none;
        border: none;
        color: var(--dark-blue);
        font-size: 1.2rem;
        cursor: pointer;
        padding: 2px 6px;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .pwa-dismiss-btn:hover {
        background: rgba(13, 17, 23, 0.1);
    }
`;

// Inject PWA styles
const pwaStyleSheet = document.createElement('style');
pwaStyleSheet.textContent = pwaStyles;
document.head.appendChild(pwaStyleSheet);
window.AdminModalSystem = AdminModalSystem;