/* ==========================================
   نظام الفيديو البديل للنسر الدامي
   Fallback Video System for Bloody Eagle
   ========================================== */

// إنشاء فيديو خلفي متحرك باستخدام Canvas
const VideoFallbackSystem = {
    createFallbackVideo() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // إعداد الأبعاد
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // إضافة الخلفية المتحركة
        this.animateBackground(ctx, canvas);
        
        return canvas;
    },
    
    animateBackground(ctx, canvas) {
        // رسم خلفية متدرجة متحركة
        const time = Date.now() * 0.001;
        
        // خلفية متدرجة
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, `hsl(200, 40%, ${10 + Math.sin(time) * 5}%)`);
        gradient.addColorStop(0.5, `hsl(220, 50%, ${15 + Math.cos(time * 1.3) * 3}%)`);
        gradient.addColorStop(1, `hsl(240, 30%, ${8 + Math.sin(time * 0.7) * 2}%)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // إضافة نجوم متحركة
        this.drawStars(ctx, canvas, time);
        
        // إضافة شعاع ذهبي متحرك
        this.drawGoldenBeam(ctx, canvas, time);
        
        // تطبيق الفيديو
        this.applyToVideoBackground(canvas);
    },
    
    drawStars(ctx, canvas, time) {
        ctx.fillStyle = 'rgba(212, 175, 55, 0.6)';
        
        for (let i = 0; i < 50; i++) {
            const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvas.width;
            const y = (Math.cos(time * 0.3 + i) * 0.5 + 0.5) * canvas.height;
            const size = 1 + Math.sin(time + i) * 0.5;
            
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    
    drawGoldenBeam(ctx, canvas, time) {
        // رسم شعاع ذهبي متحرك
        const gradient = ctx.createLinearGradient(
            0, canvas.height * 0.7, canvas.width, canvas.height * 0.7
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${0.3 + Math.sin(time) * 0.2})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, canvas.height * 0.7, canvas.width, 200);
    },
    
    applyToVideoBackground(canvas) {
        const videoContainer = document.querySelector('.hero-video');
        if (videoContainer) {
            // إزالة الفيديو الحالي
            const video = videoContainer.querySelector('video');
            if (video) {
                video.remove();
            }
            
            // إضافة الكانفاس
            canvas.className = 'fallback-video';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            videoContainer.appendChild(canvas);
            
            // بدء الأنيميشن
            this.startAnimation();
        }
    },
    
    startAnimation() {
        const canvas = document.querySelector('.fallback-video');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let time = 0;
        
        const animate = () => {
            time = Date.now() * 0.001;
            
            // إعادة الرسم
            this.animateBackground(ctx, canvas, time);
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
};

// تشغيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // التحقق من وجود الفيديو
    const video = document.querySelector('.hero-video video');
    if (video) {
        video.addEventListener('error', () => {
            // في حالة فشل تحميل الفيديو
            console.log('Video failed to load, using fallback animation');
            VideoFallbackSystem.createFallbackVideo();
        });
        
        // إضافة timeout للانتظار
        setTimeout(() => {
            if (video.readyState < 2) {
                console.log('Video load timeout, using fallback animation');
                VideoFallbackSystem.createFallbackVideo();
            }
        }, 3000);
    } else {
        // لا يوجد فيديو، استخدام النظام البديل
        VideoFallbackSystem.createFallbackVideo();
    }
});