	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#2382ba";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Hide";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#763648";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=24;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2546;;bookConfig.securityType="1";bookConfig.CreatedTime ="221114013247";bookConfig.bookTitle="BSE - AREA 2 - PARAMETER H";bookConfig.bookmarkCR="5331ff95b61ca3dd768f1b0f1a8b7dd8d6645f61";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.430333","y":"0.105882","width":"0.139167","height":"0.027313"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.449345","y":"0.954826","width":"0.140712","height":"0.010924"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:cvsuhrd@cvsu.edu.ph"}}],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.354811","y":"0.852540","width":"0.358315","height":"0.067024"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://drive.google.com/file/d/1mQYU22Dv6igNyF0bhdhdwsOsut-CIjUc/view?usp=sharing"}}],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.288456","y":"0.487932","width":"0.464483","height":"0.104557"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://drive.google.com/file/d/1qh5yq-Efo8MQqvd2VOGxj4WiKSxy_FOp/view?usp=sharing"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.463734","y":"0.169929","width":"0.169337","height":"0.016022"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.128609","width":"0.704411","height":"0.030642"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.159251","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.175642","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.192032","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.208422","width":"0.704411","height":"0.030631"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.239052","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.255443","width":"0.741534","height":"0.030642"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.286085","width":"0.704411","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.302475","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.318865","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.335255","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.351645","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.368036","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.384414","width":"0.704411","height":"0.030642"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.415056","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.431446","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.447837","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.464227","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.480617","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.497007","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.513397","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.529787","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.546166","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.562556","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.578946","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.595336","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.611726","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.628116","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.644506","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.660897","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.677275","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.693665","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.710055","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.726445","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.742835","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.759225","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.775616","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.792006","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.808396","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.824774","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.841164","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.857554","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.873945","width":"0.643939","height":"0.016389"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.890334","width":"0.643939","height":"0.016389"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.085543","width":"0.704411","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.101933","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.118324","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.134714","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.151104","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.167482","width":"0.681062","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.183872","width":"0.704411","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.200262","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.216653","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.233043","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.249433","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.265823","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.282213","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.298591","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.314981","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.331372","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.347762","width":"0.704411","height":"0.030642"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.378404","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.394794","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.411184","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.427575","width":"0.681062","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.443965","width":"0.704411","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.460343","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.476733","width":"0.704411","height":"0.030642"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.507376","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.523766","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.540156","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.556546","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.572936","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.589326","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.605705","width":"0.013153","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.243701","y":"0.605705","width":"0.638346","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.622095","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.638485","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.654875","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.671265","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.687655","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.704045","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.720435","width":"0.211399","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.736826","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.753204","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.769594","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.785984","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.802374","width":"0.681062","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.818764","width":"0.704411","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.835155","width":"0.704411","height":"0.030642"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.865797","width":"0.643939","height":"0.016385"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.882182","width":"0.643939","height":"0.016389"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.085543","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.101933","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.118324","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.134714","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.151104","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.167482","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.183872","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.200262","width":"0.741534","height":"0.030642"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.230905","width":"0.704411","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.247295","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.263685","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.280075","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.296465","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.312844","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.329234","width":"0.681062","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.345624","width":"0.704411","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.362014","width":"0.681062","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.378404","width":"0.704411","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.394794","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.411184","width":"0.621514","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.427575","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.443965","width":"0.643939","height":"0.016378"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.460343","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.238107","y":"0.476733","width":"0.643939","height":"0.016390"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177636","y":"0.493123","width":"0.704411","height":"0.030642"}}]]}; bookConfig.isFlipPdf=true; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}