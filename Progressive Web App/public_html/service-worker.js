// Installerer serviceworker
self.addEventListener("install", function(e) {
    console.log("Service Worker Installed");
    // Åbner cachen og tilføjer filer under cachenavnet pwastartup
    e.waitUntil(
        caches.open('pwastartup').then(function(cache) {
            return cache.addAll([
                //Her kan du indsætte de filer du vil cache
                //'',
                'index.html',
                'udd.html'
            ]);
        })
    );
});

// Lyt på requests til browseren
self.addEventListener("fetch", function(event) {
    // Tjek event
    // console.log(event);
    event.respondWith(
        // Kigger i cache og leder efter et match
        caches.open('pwastartup').then(function(cache) {
            // Returnerer hvis der er et match i cachen - ellers kør request med fetch
            return cache.match(event.request).then(function(response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});