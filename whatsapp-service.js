// WhatsApp Service Integration for Babi Pest Control
// Handles structured customer service and automated responses

class WhatsAppService {
    constructor() {
        this.phoneNumber = '+85270173695';
        this.businessHours = {
            start: 9,
            end: 18,
            timezone: 'Asia/Hong_Kong'
        };
        this.serviceCategories = this.initializeServiceCategories();
    }

    // Initialize service categories with structured questions
    initializeServiceCategories() {
        return {
            'rat-control': {
                name: '老鼠防治服務',
                emoji: '🐭',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🐭 老鼠問題嚴重程度：\n- 輕微（偶爾發現）\n- 中等（經常發現）\n- 嚴重（大量老鼠）',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'cockroach-control': {
                name: '蟑螂防治服務',
                emoji: '🪳',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🪳 蟑螂種類：\n- 德國蟑螂\n- 美洲蟑螂\n- 其他種類',
                    '🪳 蟑螂問題嚴重程度：\n- 輕微（偶爾發現）\n- 中等（經常發現）\n- 嚴重（大量蟑螂）',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'mosquito-control': {
                name: '蚊蟲防治服務',
                emoji: '🦟',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🦟 蚊蟲問題類型：\n- 室內蚊蟲\n- 戶外蚊蟲\n- 花園蚊蟲',
                    '🦟 蚊蟲問題嚴重程度：\n- 輕微（偶爾發現）\n- 中等（經常發現）\n- 嚴重（大量蚊蟲）',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'termite-control': {
                name: '白蟻防治服務',
                emoji: '🐜',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🐜 白蟻問題類型：\n- 地下白蟻\n- 乾木白蟻\n- 其他種類',
                    '🐜 白蟻問題嚴重程度：\n- 輕微（偶爾發現）\n- 中等（經常發現）\n- 嚴重（大量白蟻）',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'bedbug-control': {
                name: '床蝨防治服務',
                emoji: '🛏️',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🛏️ 床蝨問題範圍：\n- 單一房間\n- 多個房間\n- 整個單位',
                    '🛏️ 床蝨問題嚴重程度：\n- 輕微（偶爾發現）\n- 中等（經常發現）\n- 嚴重（大量床蝨）',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'ant-control': {
                name: '螞蟻防治服務',
                emoji: '🐜',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🐜 螞蟻種類：\n- 黑螞蟻\n- 紅螞蟻\n- 其他種類',
                    '🐜 螞蟻問題嚴重程度：\n- 輕微（偶爾發現）\n- 中等（經常發現）\n- 嚴重（大量螞蟻）',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'fly-control': {
                name: '蒼蠅防治服務',
                emoji: '🪰',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🪰 蒼蠅問題類型：\n- 室內蒼蠅\n- 戶外蒼蠅\n- 垃圾房蒼蠅',
                    '🪰 蒼蠅問題嚴重程度：\n- 輕微（偶爾發現）\n- 中等（經常發現）\n- 嚴重（大量蒼蠅）',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'home-pest-control': {
                name: '家居滅蟲服務',
                emoji: '🏠',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅類型：\n- 私人住宅\n- 公屋\n- 居屋\n- 其他',
                    '📏 面積大小：',
                    '🐛 主要害蟲問題：\n- 老鼠\n- 蟑螂\n- 蚊蟲\n- 白蟻\n- 床蝨\n- 螞蟻\n- 蒼蠅\n- 其他',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'commercial-pest-control': {
                name: '商業滅蟲服務',
                emoji: '🏢',
                questions: [
                    '📍 服務地址：',
                    '🏢 商業場所類型：\n- 餐廳\n- 辦公室\n- 商店\n- 工廠\n- 倉庫\n- 其他',
                    '📏 面積大小：',
                    '🐛 主要害蟲問題：\n- 老鼠\n- 蟑螂\n- 蚊蟲\n- 白蟻\n- 床蝨\n- 螞蟻\n- 蒼蠅\n- 其他',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'emergency-pest-control': {
                name: '緊急滅蟲服務',
                emoji: '🚨',
                questions: [
                    '🚨 緊急情況描述：',
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '🐛 緊急害蟲問題：\n- 老鼠\n- 蟑螂\n- 蚊蟲\n- 白蟻\n- 床蝨\n- 螞蟻\n- 蒼蠅\n- 其他',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 緊急情況詳細描述：'
                ]
            },
            'cleaning-services': {
                name: '清潔服務',
                emoji: '🧹',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🧹 清潔服務類型：\n- 家居清潔\n- 辦公室清潔\n- 裝修後清潔\n- 定期清潔\n- 一次性清潔',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'disinfection-services': {
                name: '消毒服務',
                emoji: '🧼',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🧼 消毒服務類型：\n- 家居消毒\n- 辦公室消毒\n- 納米天然消毒\n- 甲醛去除\n- 其他消毒服務',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'cost-inquiry': {
                name: '服務收費查詢',
                emoji: '💰',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🐛 主要害蟲問題：\n- 老鼠\n- 蟑螂\n- 蚊蟲\n- 白蟻\n- 床蝨\n- 螞蟻\n- 蒼蠅\n- 其他',
                    '💰 預算範圍：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'free-quote': {
                name: '免費報價',
                emoji: '📋',
                questions: [
                    '📍 服務地址：',
                    '🏠 住宅/商業場所：',
                    '📏 面積大小：',
                    '🐛 主要害蟲問題：\n- 老鼠\n- 蟑螂\n- 蚊蟲\n- 白蟻\n- 床蝨\n- 螞蟻\n- 蒼蠅\n- 其他',
                    '⏰ 希望服務時間：',
                    '📞 聯絡電話：',
                    '📝 其他特殊要求：'
                ]
            },
            'direct-contact': {
                name: '直接聯絡',
                emoji: '📞',
                questions: [
                    '📍 服務地址：',
                    '📞 聯絡電話：',
                    '📝 服務需求描述：',
                    '⏰ 希望聯絡時間：',
                    '📝 其他特殊要求：'
                ]
            }
        };
    }

    // Generate welcome message
    getWelcomeMessage() {
        return `您好！歡迎聯絡 Babi Pest Control 百比除蟲！

我們是香港專業綠色滅蟲服務專家，提供24/7緊急滅蟲服務。

請選擇您需要的服務類型，我們會立即為您安排專業服務：

${this.getServiceMenu()}

請回覆數字或點擊選項，我們會立即為您安排專業服務！`;
    }

    // Generate service menu
    getServiceMenu() {
        const services = Object.entries(this.serviceCategories);
        return services.map(([key, service], index) => {
            const number = this.getNumberEmoji(index + 1);
            return `${number} ${service.emoji} ${service.name}`;
        }).join('\n');
    }

    // Get number emoji
    getNumberEmoji(num) {
        const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
        if (num <= 10) return emojis[num - 1];
        return `${num}️⃣`;
    }

    // Get service questions
    getServiceQuestions(serviceKey) {
        const service = this.serviceCategories[serviceKey];
        if (!service) return null;

        return `${service.emoji} ${service.name} - 請回答以下問題：

${service.questions.join('\n\n')}

我們會根據您的需求安排專業${service.name}專家為您服務！`;
    }

    // Generate confirmation message
    getConfirmationMessage() {
        return `感謝您的回覆！

我們已收到您的服務需求，專業客服會盡快聯絡您安排服務。

服務承諾：
✅ 24/7緊急服務
✅ 免費現場評估
✅ 透明收費標準
✅ 環保安全處理
✅ 專業認證服務
✅ 政府認可服務

如有任何問題，請隨時聯絡我們！
電話：${this.phoneNumber}`;
    }

    // Get auto-reply based on time
    getAutoReply() {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay();

        // Weekend
        if (day === 0 || day === 6) {
            return `您好！感謝聯絡 Babi Pest Control！

我們已收到您的訊息，專業客服會在週一早上9:00回覆您。

如有緊急滅蟲服務，請直接致電：${this.phoneNumber}
24/7緊急服務熱線`;
        }

        // After hours
        if (hour < this.businessHours.start || hour >= this.businessHours.end) {
            return `您好！感謝聯絡 Babi Pest Control！

我們已收到您的訊息，專業客服會在明天早上9:00回覆您。

如有緊急滅蟲服務，請直接致電：${this.phoneNumber}
24/7緊急服務熱線`;
        }

        // Business hours
        return `您好！感謝聯絡 Babi Pest Control！

我們的專業客服會盡快回覆您。
服務時間：週一至週日 9:00-18:00

如有緊急情況，請直接致電：${this.phoneNumber}`;
    }

    // Get urgent response template
    getUrgentResponse() {
        return `🚨 緊急服務已收到！

我們會立即安排專業滅蟲專家為您服務。

預計服務時間：2-4小時內
聯絡電話：${this.phoneNumber}

請保持電話暢通，我們會盡快聯絡您！`;
    }

    // Get quote response template
    getQuoteResponse() {
        return `免費報價已收到！

我們會安排專業評估師在48小時內聯絡您進行免費現場評估。

評估內容：
✅ 害蟲問題分析
✅ 環境評估
✅ 防治方案建議
✅ 詳細報價

聯絡電話：${this.phoneNumber}`;
    }

    // Open WhatsApp with pre-filled message
    openWhatsApp(message = '') {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${this.phoneNumber.replace('+', '')}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }

    // Open WhatsApp with service selection
    openWhatsAppWithService(serviceKey) {
        const questions = this.getServiceQuestions(serviceKey);
        if (questions) {
            this.openWhatsApp(questions);
        }
    }

    // Open WhatsApp with welcome message
    openWhatsAppWelcome() {
        this.openWhatsApp(this.getWelcomeMessage());
    }

    // Open WhatsApp for emergency service
    openWhatsAppEmergency() {
        this.openWhatsApp(this.getUrgentResponse());
    }

    // Open WhatsApp for quote request
    openWhatsAppQuote() {
        this.openWhatsApp(this.getQuoteResponse());
    }
}

// Initialize WhatsApp service
const whatsappService = new WhatsAppService();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WhatsAppService;
} else {
    window.WhatsAppService = WhatsAppService;
    window.whatsappService = whatsappService;
} 