(function () {
    window.VXOptimizer = window.VXOptimizer || {
        lazyImages: true,
        lazyBackgrounds: false,
        lazyIframes: false,
        skeletons: false,
        unlockOnScroll: false,
        rootMargin: '300px',
        startApos: 1000
    };

    const config = window.VXOptimizer;
    const lockedElements = [];
    const skeletonsMap = new Map();
    const vh = window.innerHeight;

    setTimeout(() => {
        function belowFold(el) {
            const rect = el.getBoundingClientRect();
            return rect.top >= vh;
        }

        function lockImg(img) {
            if (!img.src && !img.srcset) return;
            img.dataset.vxSrc = img.src || '';
            img.dataset.vxSrcset = img.srcset || '';
            img.removeAttribute('src');
            img.removeAttribute('srcset');
            img.loading = 'lazy';
            lockedElements.push(img);
        }

        function lockBg(el) {
            const bg = getComputedStyle(el).backgroundImage;
            if (!bg || bg === 'none') return;
            el.dataset.vxBg = bg;
            el.style.backgroundImage = 'none';
            lockedElements.push(el);
        }

        function lockIframe(ifr) {
            if (!ifr.src) return;
            ifr.dataset.vxSrc = ifr.src;
            ifr.removeAttribute('src');
            lockedElements.push(ifr);
        }

        function unlockAll() {
            lockedElements.forEach(el => {
                if (el.tagName === 'IMG') {
                    if (el.dataset.vxSrc) el.src = el.dataset.vxSrc;
                    if (el.dataset.vxSrcset) el.srcset = el.dataset.vxSrcset;
                }
                if (el.tagName === 'IFRAME') {
                    el.src = el.dataset.vxSrc;
                }
                if (el.style && el.dataset.vxBg) {
                    el.style.backgroundImage = el.dataset.vxBg;
                }
            });
            lockedElements.length = 0;
            window.removeEventListener('scroll', unlockAll, { passive: true });
        }

        if (config.skeletons) {
            const MIN_AREA = 3000;
            const skeletons = new Map();

            const style = document.createElement('style');
            style.textContent = `
                    .vx-skeleton {
                    position: absolute;
                    background: linear-gradient(
                        90deg,
                        #e5e7eb 25%,
                        #f3f4f6 37%,
                        #e5e7eb 63%
                    );
                    background-size: 400% 100%;
                    animation: vx-shimmer 1.4s ease infinite;
                    border-radius: 6px;
                    z-index: 9999;
                    pointer-events: none;
                    }

                    @keyframes vx-shimmer {
                    0% { background-position: 100% 0; }
                    100% { background-position: -100% 0; }
                    }
                `;
            document.head.appendChild(style);

            function isVisible(el) {
                const rect = el.getBoundingClientRect();
                if (rect.width * rect.height < MIN_AREA) return false;
                if (rect.bottom < 0 || rect.top > window.innerHeight) return false;
                const style = getComputedStyle(el);
                return style.display !== 'none' && style.visibility !== 'hidden';
            }

            function createSkeleton(el) {
                const rect = el.getBoundingClientRect();
                const sk = document.createElement('div');
                sk.className = 'vx-skeleton';
                sk.style.width = rect.width + 'px';
                sk.style.height = rect.height + 'px';
                sk.style.top = rect.top + window.scrollY + 'px';
                sk.style.left = rect.left + window.scrollX + 'px';
                document.body.appendChild(sk);
                skeletons.set(el, sk);
            }

            function removeSkeleton(el) {
                const sk = skeletons.get(el);
                if (sk) {
                    sk.remove();
                    skeletons.delete(el);
                }
            }

            document.querySelectorAll('img').forEach(img => {
                if (!isVisible(img)) return;

                createSkeleton(img);

                if (img.complete) {
                    removeSkeleton(img);
                } else {
                    img.addEventListener('load', () => removeSkeleton(img), { once: true });
                    img.addEventListener('error', () => removeSkeleton(img), { once: true });
                }
            });

            document.querySelectorAll('*').forEach(el => {
                if (!isVisible(el)) return;

                const bg = getComputedStyle(el).backgroundImage;
                if (!bg || bg === 'none') return;

                createSkeleton(el);

                const url = bg.match(/url\(["']?(.*?)["']?\)/)?.[1];
                if (!url) return;

                const img = new Image();
                img.src = url;
                img.onload = () => removeSkeleton(el);
                img.onerror = () => removeSkeleton(el);
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    if (el.tagName === 'IMG' && el.dataset.vxSrc) {
                        el.src = el.dataset.vxSrc;
                        el.style.minHeight = '';
                        el.removeAttribute('data-vx-src');
                    }
                    if (el.dataset.vxBg) {
                        el.style.backgroundImage = el.dataset.vxBg;
                        el.removeAttribute('data-vx-bg');
                    }
                    if (el.tagName === 'IFRAME' && el.dataset.vxSrc) {
                        el.src = el.dataset.vxSrc;
                    }
                    obs.unobserve(el);
                });
            }, { rootMargin: config.rootMargin });

            if (config.lazyImages) {
                document.querySelectorAll('img:not([data-no-lazy])').forEach(img => {
                    if (!img.src || img.dataset.vxLazy) return;
                    const rect = img.getBoundingClientRect();
                    if (rect.height > 0) img.style.minHeight = rect.height + 'px';
                    img.dataset.vxSrc = img.src;
                    img.dataset.vxLazy = 'true';
                    img.removeAttribute('src');
                    observer.observe(img);
                });
            }

            if (config.lazyBackgrounds) {
                document.querySelectorAll('[style*="background-image"]:not([data-no-lazy])').forEach(el => {
                    if (el.dataset.vxBgLazy) return;
                    const bg = el.style.backgroundImage;
                    if (!bg || bg === 'none') return;
                    el.dataset.vxBg = bg;
                    el.dataset.vxBgLazy = 'true';
                    el.style.backgroundImage = 'none';
                    observer.observe(el);
                });
            }

            if (config.lazyIframes) {
                document.querySelectorAll('iframe').forEach(ifr => {
                    ifr.dataset.vxSrc = ifr.src;
                    ifr.removeAttribute('src');
                    observer.observe(ifr);
                });
            }

            if (config.unlockOnScroll) {
                window.addEventListener('scroll', unlockAll, { passive: true });
            }
        });
    }, config.startApos);
})();