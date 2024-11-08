importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"b069d0dba18e461a022bd7e44cdb28f0","url":"feedback.html"},{"revision":"39aa083ef34ee5a960294123720a2ef2","url":"index.html"},{"revision":"ab370bbd59b161a7c1aea38afebb31f9","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"6d4f1ce0736e5476cdd956706383b60e","url":"posttest.html"},{"revision":"918ab3d265d4a0cedc649c194277a1b4","url":"posttest.json"},{"revision":"cb6ed7f7e4dffff1a35da7fc0ecbd141","url":"pretest.html"},{"revision":"a057ed0a47debc9a7310e44a9fdc3562","url":"pretest.json"},{"revision":"e90f4d60483c28a0b0ea83dfbc1d426d","url":"procedure.html"},{"revision":"73386d21f9ebfaa4393fb9970bae7fca","url":"references.html"},{"revision":"bcb93407c42c4901d9901815e58a0eb6","url":"simulation.html"},{"revision":"a63b248fa49bc3477eff0d4b633c6edf","url":"simulation/css/analysis.css"},{"revision":"185d44deec4b3257cf412feb79cf81aa","url":"simulation/css/header.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"0bf4060c08e4211b76bba5cc963d1867","url":"simulation/css/mainPage.css"},{"revision":"b737bfbfcf3108f9c72802584156fcfc","url":"simulation/css/sharf.css"},{"revision":"37dc811d356535998c6ef49e67036110","url":"simulation/css/style.css"},{"revision":"460c7142b4430a8d4d1f2406c9c7d52b","url":"simulation/images/Accuracy.png"},{"revision":"7507ef7138ed540b78ae8a310c73ce1a","url":"simulation/images/COEPlogo.png"},{"revision":"0db46ae7b5712185212631e75e30db30","url":"simulation/images/flowSwitch.png"},{"revision":"0b75e8c5fbf9157ceda719ae7065bed5","url":"simulation/images/hook.png"},{"revision":"255d92fd893ddb130101c7172a1cbad9","url":"simulation/images/knob.png"},{"revision":"90d952718f3422de1b49606b027e1694","url":"simulation/images/knob1.png"},{"revision":"e55fac1ad70587cf886e62feb070098a","url":"simulation/images/Linearity.png"},{"revision":"772d6d0a4725e26de8d5868ba115006f","url":"simulation/images/minus.png"},{"revision":"e9d4d3f0cc1b789bb23e2fe0a670ac19","url":"simulation/images/minusresize.png"},{"revision":"8da3eeee49cd1b8c3ee4d7a1c366cd24","url":"simulation/images/motor1.png"},{"revision":"6f3eb402ca0d18c58e0d3c974c66c074","url":"simulation/images/plus.png"},{"revision":"55b3cf490daceb22c370e75aeca93c85","url":"simulation/images/plusresize.png"},{"revision":"6fc5e4fb6e76081c0a7ceb387a33b50e","url":"simulation/images/resizeknob.png"},{"revision":"e541011b4c0467f3dad8aa1fb266763e","url":"simulation/images/shaft_torque.png"},{"revision":"a81b8906348fd0e55dd06198ff0d53be","url":"simulation/images/shaft_torque1.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlablogo.jpg"},{"revision":"09f0da7a5785afe16565d3be3f985fc1","url":"simulation/images/weight.png"},{"revision":"0dee0ad25711e6a633a2290dde018440","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"4f252523d4af0b478c810c2547a63e19","url":"simulation/lib/jquery.js"},{"revision":"220afd743d9e9643852e31a135a9f3ae","url":"simulation/lib/jquery.min.js"},{"revision":"074952d02fd65490bb6e8eb97ed36bcf","url":"simulation/lib/raphael.js"},{"revision":"28c964ed8001f7e9930dc7c0a6daf2e1","url":"simulation/lib/raphael.min.js"},{"revision":"41357c8810d9c54f3e7cdbb7b59f72ab","url":"simulation/src/animate.js"},{"revision":"2f34b630ffe30ba2ff2b91e3f3c322a1","url":"simulation/src/bootstrap.min.js"},{"revision":"95568fc1b567b666ce5b107e0fb510b0","url":"simulation/src/Calibration.js"},{"revision":"42175c9106a6297a9afd85ba51ec1478","url":"simulation/src/faultFinding.js"},{"revision":"b033c4a4a4169019fe718a5ef32fa41e","url":"simulation/src/faultFinding1.js"},{"revision":"2c3f74e64cc1b95d23012c29c01925c8","url":"simulation/src/mainPage.js"},{"revision":"ee8e0ed12f7350bd9b85a5d32bcc2e7b","url":"simulation/src/mimic.js"},{"revision":"2bc4067123911ddae4e8f29a4b39ef3f","url":"simulation/src/questionJson.js"},{"revision":"60daf840f70ac9153f7f175b323b0044","url":"simulation/src/questions.js"},{"revision":"3c85f6ccf814211252a3c99fb22ee858","url":"simulation/src/resultAnaylsis.js"},{"revision":"a3391a3497423ea60c16e38cb4b61559","url":"simulation/src/shaftResult.js"},{"revision":"7f9676c2f6b1b1cd6ffc1fee5b6be5a7","url":"simulation/src/testing.js"},{"revision":"9b39094e1d4cd5d0923daee2ffc5f626","url":"theory.html"},{"revision":"2dcb7a362da72c2faeb82d2fe1c33012","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );