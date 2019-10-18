const staticAssets=[
    './',
    './16x16.png',
    './256x256.png',
    './32x32.png',
    './48x48.png',
    './512x512.png',
    './CHANGELOG.html',
    './CODE_OF_CONDUCT.md',
    './GitHub-Mark-64px.png'
    './LICENSE.md'
    './README.md'
    './Twitter_Social_Icon_Circle_Color.png'
    './_config.yml'
    './accessibility.html'
    './accessibility.js'
    './africa.html'
    './africa.js'
    './americas.html'
    './americas.js'
    './centralAsia.html'
    './centralAsia.js'
    './cjkExtACDEF.html'
    './cjkExtACDEF.js'
    './cjkExtB.html'
    './cjkExtB.js'
    './cjkOth.html'
    './cjkOth.js'
    './combineMod.html'
    './combineMod.js'
    './common.min.css'
    './custom.css'
    './desktop.ico'
    './eastAsia.html'
    './eastAsia.js'
    './emojiPic.html'
    './emojiPic.js'
    './europe.html'
    './europe.js'
    './favicon.ico'
    './findUI.png'
    './font.svg'
    './fontSwitch.min.js'
    './fontUI.png'
    './game.html'
    './game.js'
    './hangul.html'
    './hangul.js'
    './index.html'
    './indoOcean.html'
    './indoOcean.js'
    './logo-line-thin.svg'
    './logo-line.svg'
    './logo.svg'
    './manifest.js'
    './manifest.json'
    './math.html'
    './math.js'
    './menu.html'
    './menu.js'
    './menu.png'
    './midEast.html'
    './midEast.js'
    './music.html'
    './music.js'
    './non.html'
    './non.js'
    './offline.html'
    './page.css'
    './pua.html'
    './pua.js'
    './puaA.html'
    './puaA.js'
    './puaB.html'
    './puaB.js'
    './punctuation.html'
    './punctuation.js'
    './search.svg'
    './skin.js'
    './southAsia.html'
    './southAsia.js'
    './southeastAsia.html'
    './southeastAsia.js'
    './surrogates.html'
    './surrogates.js'
    './tags.html'
    './tags.js'
    './tech.html'
    './tech.js'
    './tile.png'
    './variation.html'
    './variation.js'
    './yijing.html'
    './yijing.js'
];
self.addEventListener('install', async event=>{
    const cache = await caches.open('static-cache');
    cache.addAll(staticAssets);
});
self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if(url.origin === location.url){
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(newtorkFirst(req));
    }
});
async function cacheFirst(req){
    const cachedResponse = caches.match(req);
    return cachedResponse || fetch(req);
};
async function networkFirst(req){
    const cache = await caches.open('dynamic-cache');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
};
