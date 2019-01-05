const { gtmTpl } = require('./gtm-tpl')
const { footerTpl } = require('./footer-tpl')
const { menuTpl } = require('./menu-tpl')

const pageTpl = ({
	head: { title, author, keywords, description, thumbnail },
	body: { topLink, topTitle, content }
}) => `<!DOCTYPE HTML>
<html lang="en">
	<head>
    <title>${title}</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="${author}">
    <meta name="keywords" content="${keywords}">
    <meta name="description" content="${description}">
    <meta name="thumbnail" content="${thumbnail}" />
    <link rel="canonical" href="http://ducin.it">
    <link rel="shortcut icon" href="images/td-logo-zolte-80.png">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/video.css" />
    <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
    <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body>

${gtmTpl()}

		<!-- Page Wrapper -->
			<div id="page-wrapper">

				<!-- Header -->
					<header id="header">
						<h1><a href="/">${topLink}</a></h1>
						<nav id="nav">
							<ul>
								<li class="special">
									<a href="#menu" class="menuToggle"><span>Menu</span></a>
									<div id="menu">
${menuTpl()}
									</div>
								</li>
							</ul>
						</nav>
					</header>

				<!-- Main -->
					<article id="main">
						<header>
							<h2>${topTitle}</h2>
						</header>
						<section class="wrapper style5">
							<div class="inner">
${content}
							</div>
						</section>
					</article>
${footerTpl()}
			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.translate.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>
			<script src="assets/js/page-talks.js"></script>
	</body>
</html>
`

module.exports = {
  pageTpl
}
