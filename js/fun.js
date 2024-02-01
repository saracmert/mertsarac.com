var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function (doc, win) {
        if (!doc.querySelector) {
            return alert('Your browser sucks. Sorry.');
        }

        var list = doc.querySelector('ul'),
            all = list.children,
            i = all.length,
            html = [];

        while (i--) {
            html[i] = all[i].innerHTML;
            all[i].innerHTML = '';
        }

        var animate = function (i) {
            var me = all[i],

                add = 'dollar',

                //  C = character delay
                //  D = line delay
                c = 0, d = 0;

            me.className = add;
            //list.style.marginTop = '-' + (((i + 1) * 25) / 2) + 'px';

            var inty = setInterval(function () {
                me.innerHTML = html[i].substr(0, c) + '<span class="typing">|</span>';

                c++;

                if (html[i].length < c) {
                    clearInterval(inty);
                    i++;


                    if (all[i]) {
                        setTimeout(function () {
                            me.innerHTML = html[i - 1];
                            animate(i);
                        }, 400);
                    }
                }
            }, 50);
        };

        animate(0);

        var t = [77, 69, 79, 87], d = [], r = function (m, a) {
            return Math.floor(Math.random() * 100) + (m - a) + a;
        };
        var s = function () {
            if (!window.atob) return false;

            var u = atob('aHR0cDovL3BsYWNla2l0dGVuLmNvbS8=') + r(2e2, 4e2) + '/' + r(1e2, 6e2);
            var i = doc.createElement(atob('aW1n'));
            i.src = u; i.setAttribute('style', 'position: absolute; left: ' + r(0, 100) + '%; top: ' + r(0, 100) + '%;');
            doc.body.appendChild(i);
        };
        window.onkeyup = function (e) {
            if (t.equals(d)) {
                return s();
            }

            if (d.length == +!0 && d[0] != t[0]) d = [];
            e.which && d.push(e.which);
        };
    })(document, window);

    Array.prototype.equals = function (arr) {
        if (this.length != arr.length) {
            return false;
        }

        for (var i = 0; i < arr.length; i++) {
            if (this[i].compareArrays) {
                if (!this[i].compareArrays(arr[i])) {
                    return false;
                }
            }
            if (this[i] != arr[i]) {
                return false;
            }
        }
        return true;
    }

}
