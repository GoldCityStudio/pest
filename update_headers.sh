#!/bin/bash

# Script to update all HTML files with the correct header structure from index.html

# The correct header structure (from index.html)
HEADER_TEMPLATE='    <!-- Header -->
    <header class="header" role="banner">
        <div class="container">
            <div class="header-top">
                <div class="logo">
                    <a href="index.html" aria-label="Babi Pest Control Homepage">
                        <h1>Babi Pest Control</h1>
                        <span class="logo-subtitle">百比除蟲 - 專業綠色滅蟲專家</span>
                    </a>
                </div>
                <div class="header-actions">
                    <div class="contact-info">
                        <div class="phone-number">
                            <i class="fas fa-phone" aria-hidden="true"></i>
                            <a href="https://wa.me/85270173695" aria-label="Call us at +852-7017-3695">+852-7017-3695</a>
                        </div>
                        <div class="emergency-service">
                            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                            <span>24/7 緊急滅蟲服務</span>
                        </div>
                    </div>
                    <div class="header-badges">
                        <div class="language-switcher">
                            <label for="language-select" class="sr-only">選擇語言</label>
                            <select id="language-select" aria-label="選擇語言">
                                <option value="zh">中文</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                        <div class="gov-card-notice">
                            <i class="fas fa-credit-card" aria-hidden="true"></i>
                            <span>歡迎使用政府採購卡</span>
                        </div>
                        <div class="certification-badge">
                            <i class="fas fa-certificate" aria-hidden="true"></i>
                            <span>專業認證</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="main-nav" role="navigation" aria-label="主要導航">
        <div class="container">
            <div class="nav-wrapper">
                <button class="mobile-menu-toggle" aria-label="切換選單" aria-expanded="false">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
                
                <ul class="nav-menu" role="menubar">
                    <li role="none"><a href="index.html" role="menuitem">主頁</a></li>
                    <li class="dropdown" role="none">
                        <a href="about.html" role="menuitem" aria-haspopup="true" aria-expanded="false">
                            關於我們 <i class="fas fa-chevron-down" aria-hidden="true"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li role="none"><a href="about.html#company-profile" role="menuitem"><i class="fas fa-building"></i>公司簡介</a></li>
                            <li role="none"><a href="about.html#professional-services" role="menuitem"><i class="fas fa-shield-alt"></i>專業滅蟲服務</a></li>
                            <li role="none"><a href="about.html#certifications" role="menuitem"><i class="fas fa-certificate"></i>認證資格</a></li>
                        </ul>
                    </li>
                    <li class="dropdown" role="none">
                        <a href="disinfection-products.html" role="menuitem" aria-haspopup="true" aria-expanded="false">
                            消毒產品 <i class="fas fa-chevron-down" aria-hidden="true"></i>
                            <span class="menu-badge">熱門</span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li role="none"><a href="disinfection-products.html#personal-disinfection" role="menuitem"><i class="fas fa-user-shield"></i>個人消毒用品</a></li>
                            <li role="none"><a href="disinfection-products.html#formaldehyde-removal" role="menuitem"><i class="fas fa-wind"></i>去甲醛噴霧</a></li>
                            <li role="none"><a href="disinfection-products.html#antibacterial-products" role="menuitem"><i class="fas fa-bacteria"></i>抗菌產品</a></li>
                            <li role="none"><a href="disinfection-products.html#disinfection-film" role="menuitem"><i class="fas fa-layer-group"></i>消毒膠膜</a></li>
                            <li role="none"><a href="disinfection-products.html#disinfection-machines" role="menuitem"><i class="fas fa-cogs"></i>消毒機</a></li>
                            <li role="none"><a href="disinfection-products.html#deodorants" role="menuitem"><i class="fas fa-spray-can"></i>除臭劑</a></li>
                            <li role="none"><a href="disinfection-products.html#nebulizers" role="menuitem"><i class="fas fa-cloud"></i>霧化機</a></li>
                            <li role="none"><a href="disinfection-products.html#cooling-fans" role="menuitem"><i class="fas fa-fan"></i>冷風機</a></li>
                        </ul>
                    </li>
                    <li class="dropdown" role="none">
                        <a href="pest-control-products.html" role="menuitem" aria-haspopup="true" aria-expanded="false">
                            除蟲產品 <i class="fas fa-chevron-down" aria-hidden="true"></i>
                            <span class="menu-badge">新品</span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li role="none"><a href="pest-control-products.html#mouse-traps" role="menuitem"><i class="fas fa-mouse"></i>老鼠盒</a></li>
                            <li role="none"><a href="pest-control-products.html#mouse-repellers" role="menuitem"><i class="fas fa-volume-up"></i>驅鼠器</a></li>
                            <li role="none"><a href="pest-control-products.html#mouse-glue" role="menuitem"><i class="fas fa-tint"></i>老鼠膠</a></li>
                            <li role="none"><a href="pest-control-products.html#mouse-cages" role="menuitem"><i class="fas fa-cube"></i>老鼠籠</a></li>
                            <li role="none"><a href="pest-control-products.html#pest-nebulizers" role="menuitem"><i class="fas fa-smog"></i>霧化機</a></li>
                            <li role="none"><a href="pest-control-products.html#mosquito-lamps" role="menuitem"><i class="fas fa-lightbulb"></i>滅蚊燈</a></li>
                            <li role="none"><a href="pest-control-products.html#mosquito-traps" role="menuitem"><i class="fas fa-sticky-note"></i>捕蚊貼</a></li>
                            <li role="none"><a href="pest-control-products.html#mosquito-stickers" role="menuitem"><i class="fas fa-tag"></i>蚊貼</a></li>
                            <li role="none"><a href="pest-control-products.html#mosquito-coils" role="menuitem"><i class="fas fa-fire"></i>蚊香</a></li>
                            <li role="none"><a href="pest-control-products.html#cockroach-medicine" role="menuitem"><i class="fas fa-pills"></i>曱甴藥</a></li>
                            <li role="none"><a href="pest-control-products.html#ant-sprays" role="menuitem"><i class="fas fa-bug"></i>滅蟻噴霧</a></li>
                        </ul>
                    </li>
                    <li class="dropdown" role="none">
                        <a href="pest-control-services.html" role="menuitem" aria-haspopup="true" aria-expanded="false">
                            滅蟲服務 <i class="fas fa-chevron-down" aria-hidden="true"></i>
                            <span class="menu-badge">專業</span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li role="none"><a href="pest-control-services.html#mosquito-control" role="menuitem"><i class="fas fa-mosquito"></i>滅蚊服務</a></li>
                            <li role="none"><a href="pest-control-services.html#mosquito-trap-service" role="menuitem"><i class="fas fa-trap"></i>蚊子陷阱服務</a></li>
                            <li role="none"><a href="pest-control-services.html#ant-control" role="menuitem"><i class="fas fa-bug"></i>滅蟻服務</a></li>
                            <li role="none"><a href="pest-control-services.html#cockroach-control" role="menuitem"><i class="fas fa-cockroach"></i>滅蟑螂服務</a></li>
                            <li role="none"><a href="pest-control-services.html#rat-control" role="menuitem"><i class="fas fa-rat"></i>除鼠服務</a></li>
                            <li role="none"><a href="pest-control-services.html#termite-control" role="menuitem"><i class="fas fa-termite"></i>滅白蟻服務</a></li>
                            <li role="none"><a href="pest-control-services.html#bedbug-control" role="menuitem"><i class="fas fa-bed-bug"></i>滅床蝨服務</a></li>
                            <li role="none"><a href="pest-control-services.html#formaldehyde-removal-service" role="menuitem"><i class="fas fa-wind"></i>除甲醛服務</a></li>
                        </ul>
                    </li>
                    <li role="none"><a href="emergency-pest-control.html" role="menuitem">緊急滅蟲</a></li>
                    <li class="dropdown" role="none">
                        <a href="cleaning-products.html" role="menuitem" aria-haspopup="true" aria-expanded="false">
                            清潔用品 <i class="fas fa-chevron-down" aria-hidden="true"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li role="none"><a href="cleaning-products.html#home-cleaning" role="menuitem"><i class="fas fa-home"></i>家居清潔用品</a></li>
                            <li role="none"><a href="cleaning-products.html#toilet-cleaning" role="menuitem"><i class="fas fa-toilet"></i>廁所清潔用品</a></li>
                        </ul>
                    </li>
                    <li role="none"><a href="honey-products.html" role="menuitem">蜜糖產品</a></li>
                    <li role="none"><a href="nano-disinfection.html" role="menuitem">納米天然消毒</a></li>
                    <li role="none"><a href="renovation-cleaning.html" role="menuitem">裝修後清潔</a></li>
                    <li role="none"><a href="online-shop.html" role="menuitem">網上商店</a></li>
                    <li role="none"><a href="blog/index.html" role="menuitem" style="background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3); font-weight: 600; color: #fff !important; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); border-radius: 6px; margin: 0 3px; padding: 15px 20px;">Blog</a></li>
                    <li role="none"><a href="contact.html" role="menuitem">聯絡我們</a></li>
                </ul>
            </div>
        </div>
    </nav>'

# Function to update a single file
update_file() {
    local file="$1"
    echo "Updating $file..."
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file
    awk -v header="$HEADER_TEMPLATE" '
    BEGIN { 
        in_header = 0 
        header_replaced = 0
    }
    
    # Start of header section
    /<!-- Header -->/ {
        in_header = 1
        if (!header_replaced) {
            print header
            header_replaced = 1
        }
        next
    }
    
    # End of navigation section
    /<\/nav>/ {
        if (in_header) {
            in_header = 0
            next
        }
    }
    
    # Skip lines while in header section
    in_header {
        next
    }
    
    # Print all other lines
    {
        print
    }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
}

# Find all HTML files except index.html and blog files
find . -name "*.html" -not -path "./index.html" -not -path "./blog/*" | while read file; do
    update_file "$file"
done

echo "Header update completed!" 