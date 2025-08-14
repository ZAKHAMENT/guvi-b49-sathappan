var maketiina_c_read_url = window.location.href;

maketiina_MakeLog(window.location.href).then(function(value) {
    window.addEventListener('maketiina_locationchange', function() {
        if (window.location.href != maketiina_c_read_url) {
            maketiina_c_read_url = window.location.href;
            maketiina_MakeLog(window.location.href).then(function(value) {})
        }
    });
})
async function maketiina_MakeLog(c_url) {
    var clickId = getCookieread('superuser')
    if (!clickId || clickId === '') clickId = read_code()
    var expires = (new Date(Date.now() + 30 * 86400 * 1000)).toUTCString()
    document.cookie = 'superuser=' + clickId + '; expires=' + expires + 86400 + ';path=/;'
    var maketiina_data = {
        url: c_url,
        referrer: document.referrer,
        unique_id: clickId
    }
    try {

        let maketiina_response = await fetch(
            'https://maketiina.com/data/', {
                method: 'POST',
                body: new URLSearchParams(maketiina_data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
            })
        if (maketiina_response && maketiina_response.ok) {
            var maketiina_resp_result = await maketiina_response.json();
            if (maketiina_resp_result.status == "success") {
                var log_id = maketiina_resp_result['id'];
            } else {
                var script = document.createElement('script');
                script.src = 'https://maketiina.com/data/failed.js?id=' + maketiina_resp_result.id;
                script.id = 'superuser';
                document.head.appendChild(script);
            }
        }
    } catch (error) {

    }
    return ''
}

function getCookieread(cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}

function read_code() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

(() => {
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
        let ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('maketiina_locationchange'));
        return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
        let ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('maketiina_locationchange'));
        return ret;
    };

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('maketiina_locationchange'));
    });
})();


var maketiina_count = 0;

var maketiina_intervalId = setInterval(() => {
    if (maketiina_count <= 10) {
        fetch(`${window.location.protocol}//${window.location.hostname}/cart.js`)
            .then(response => response.json())
            .then(data => {
                if (data.original_total_price && data.original_total_price > 0) {
                    maketiina_MakeLog(`${window.location.href}/cart/`);
                    clearInterval(maketiina_intervalId);
                }
            })
            .catch(error => {

            });

        maketiina_count++;
    }

    if (maketiina_count >= 10) {
        clearInterval(maketiina_intervalId);
    }
}, 3000);