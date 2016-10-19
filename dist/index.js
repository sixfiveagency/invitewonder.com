(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\" class=\"sb-init\">\n    ";
env.getTemplate("head.html", false, "index.html", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\n\n    \n\n    <body>\n\n    <!-- FIXED NAVIGATION BAR -->\n    <nav class=\"sb-slide white\">\n\n        <div class=\"nav-wrapper\"><img src=\"images/nav-menu-toggle.png\" class=\"sb-toggle-left\">\n            <img src=\"images/main-logo2.png\" class=\"mainlogo\">\n            <ul>\n                <li><a href=\"#top\" class=\"active\">Home</a></li>\n                <li><a href=\"#gallery\">Gallery</a></li>\n                <li><a href=\"#buy\">Purchase</a></li>\n                <li><a href=\"#faq\">FAQ</a></li>\n                <li><a href=\"#contact\">Contact</a></li>\n            </ul>\n        </div>\n    </nav>\n\n    <!-- SITE CONTAINER -->\n    <a class=\"anchor\" name=\"top\"></a>\n    <div id=\"sb-site\">\n\n\n        <!-- HEADER -->\n        <header>\n            <section class=\"main-color\">\n\n                <h2>December 2, 2016 at 10:00 AM to December 4, 2016 at 5:30 PM</h2>\n                <h3>Mill Avenue, Tempe AZ</h3>\n                <a href=\"checkout.html\" class=\"purchase-button\">Buy Tickets</a>\n            </section>\n        </header>\n\n\n        <!-- SUMMARY -->\n        <a class=\"anchor\" name=\"summary\"></a>\n        <section class=\"summary standard\">\n            <div>\n            </div>\n        </section>\n\n\n\n\n\n        <!-- FOOTER -->\n        <footer class=\"nav-color\">\n            <ul>\n                <p>Copyright 2016 SixFive Agency, LLC</p>\n            </ul>\n        </footer>\n\n\n    </div>\n\n\n\n    <!-- MOBILE SLIDE MENU -->\n    <div class=\"sb-slidebar sb-left sb-momentum-scrolling accent-color\">\n        <ul>\n            <li><a href=\"#top\" class=\"sb-close active\">Home</a></li>\n            <li><a href=\"#gallery\" class=\"sb-close\">Gallery</a></li>\n            <li><a href=\"#buy\" class=\"sb-close\">Purchase</a></li>\n            <li><a href=\"#faq\" class=\"sb-close\">FAQ</a></li>\n            <li><a href=\"#contact\" class=\"sb-close\">Contact</a></li>\n        </ul>\n    </div>\n\n\n\n    <!-- JS -->\n    <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js\"></script>\n    <script src=\"js/nunjucks.js\"></script>\n    <script src=\"js/slidebars.min.js\"></script>\n        \n        <script>\n            nunjucks.configure('/', { autoescape: true });\n            nunjucks.render('index.html', { foo: 'bar' });\n        </script>\n\n    <script>\n        (function($) {\n            $(document).ready(function() {\n                $.slidebars({\n                    siteClose: true,\n                    disableOver: 800,\n                    hideControlClasses: true,\n                    scrollLock: false\n                });\n            });\n        })(jQuery);\n\n        $('nav li a').click(function(e) {\n            $('a').removeClass('active');\n            $(this).addClass('active');\n        });\n    </script>\n\n\n\n</body>\n\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
