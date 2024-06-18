(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.58da27ccb1beecca694c.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/4327.latest.en.8f8e5a3a20d707c6a5a0.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/892.latest.en.b9f6037cb251f3857873.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.en.9f43ba93f8b7ea7298cd.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.a65d49c29a92b1e448eb.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.en.e8b98a9ed829efc0c730.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/3190.latest.en.c28884763f60b8c0cb32.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.en.8ff27283522475e94436.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.en.5117e670600bcaf49bb5.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/513.latest.en.b97980353f5c95b9ebe0.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.latest.en.9e9a6135613d6f865137.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/3395.latest.en.d84a74c865ce9e76ee0c.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.en.fce14a31cdc11f5d6234.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.latest.en.008e8767356e61b09eba.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.dea0d006e1613b04dbd1.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/4327.latest.en.ce4de2d657af897de276.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.f878cbc70c40091e73ed.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.638b07883971b82241e1.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0715/6999/8115/files/logo_x320.png?v=1675344013"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res[0], next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        })();
    }

    function onLoaded() {
        preconnectAssets();
        prefetchAssets();
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();