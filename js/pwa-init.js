// ===== PWA ИНИЦИАЛИЗАЦИЯ =====
(function() {
    // Проверяем, есть ли уже манифест
    if (!document.querySelector('link[rel="manifest"]')) {
        const manifest = document.createElement('link');
        manifest.rel = 'manifest';
        manifest.href = '../manifest.json';
        document.head.appendChild(manifest);
    }

    // Проверяем, есть ли иконки
    if (!document.querySelector('link[rel="icon"][type="image/x-icon"]')) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/x-icon';
        favicon.href = '../img/favicon.ico';
        document.head.appendChild(favicon);
    }

    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
        const appleIcon = document.createElement('link');
        appleIcon.rel = 'apple-touch-icon';
        appleIcon.href = '../img/icon-192x192.png';
        document.head.appendChild(appleIcon);
    }

    // Проверяем theme-color
    if (!document.querySelector('meta[name="theme-color"]')) {
        const theme = document.createElement('meta');
        theme.name = 'theme-color';
        theme.content = '#C9A96E';
        document.head.appendChild(theme);
    }

    // Отключаем поиск favicon в корне
    if (!document.querySelector('link[rel="icon"][href="data:,"]')) {
        const noFavicon = document.createElement('link');
        noFavicon.rel = 'icon';
        noFavicon.href = 'data:,';
        document.head.appendChild(noFavicon);
    }

    console.log('[PWA] Инициализация завершена');
})();