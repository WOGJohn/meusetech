/*! Select2 4.0.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/mk",[],function(){return{inputTooLong:function(n){var e=(n.input.length-n.maximum,"\u0412\u0435 \u043c\u043e\u043b\u0438\u043c\u0435 \u0432\u043d\u0435\u0441\u0435\u0442\u0435 "+n.maximum+" \u043f\u043e\u043c\u0430\u043b\u043a\u0443 \u043a\u0430\u0440\u0430\u043a\u0442\u0435\u0440");return 1!==n.maximum&&(e+="\u0438"),e},inputTooShort:function(n){var e=(n.minimum-n.input.length,"\u0412\u0435 \u043c\u043e\u043b\u0438\u043c\u0435 \u0432\u043d\u0435\u0441\u0435\u0442\u0435 \u0443\u0448\u0442\u0435 "+n.maximum+" \u043a\u0430\u0440\u0430\u043a\u0442\u0435\u0440");return 1!==n.maximum&&(e+="\u0438"),e},loadingMore:function(){return"\u0412\u0447\u0438\u0442\u0443\u0432\u0430\u045a\u0435 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442\u0438\u2026"},maximumSelected:function(n){var e="\u041c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u0438\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0441\u0430\u043c\u043e "+n.maximum+" \u0441\u0442\u0430\u0432\u043a";return e+=1===n.maximum?"\u0430":"\u0438"},noResults:function(){return"\u041d\u0435\u043c\u0430 \u043f\u0440\u043e\u043d\u0430\u0458\u0434\u0435\u043d\u043e \u0441\u043e\u0432\u043f\u0430\u0453\u0430\u045a\u0430"},searching:function(){return"\u041f\u0440\u0435\u0431\u0430\u0440\u0443\u0432\u0430\u045a\u0435\u2026"}}}),{define:n.define,require:n.require}}();