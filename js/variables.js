/**
 * Javascript variables
 */
 
//RTL support
var rtl = false;                                //Set to true if your website is RTL. Otherwise, keep it false.

//ONE-PAGE NAVIGATION HIGHLIGHT
var onepage_nav = true;                         //If true, each menu item will highlight when scrolling to each respective section.

//MOBILE MENU TITLE
var mobile_menu_title = "Menu";                 //The title of the mobile menu.

//HERO FULLSCREEN VARIABLE
var hero_full_screen = true;                    //If true, the hero section will fit to screen size. If false, hero height will be the height of its content.

//HERO BACKGROUND SLIDESHOW IMAGES
var slidehow_images = [
    "https://cdn.biihappy.com/ziiweb/website/656619acea9a2eec3603e019/galleries/6741271f835f0624d506d584/large.jpg",
    "https://cdn.biihappy.com/ziiweb/website/656619acea9a2eec3603e019/galleries/67412719af810d53c701f855/large.jpg",
    "https://cdn.biihappy.com/ziiweb/website/656619acea9a2eec3603e019/galleries/674173f89fb95a20cf0d8a99/large.jpg",
    "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/467428105_2074736352969409_1777501485725547216_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGLEYXB25B2LaUggS9EHOuzwHXgOtBk0aPAdeA60GTRo_iF-IgyxpdSqJMlcYaEOPaEeUEsLoIIwHqVhiAOuvP8&_nc_ohc=XlcLlm2ZamoQ7kNvgHsxyaD&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=ACzi6fG0-kbIxKnwILNOQpV&oh=00_AYBYAQ_yj03W6Nr1NoOt6OChN82agEvmX_wudMVGpBwDSw&oe=6746F384"
];

//TIMELINE PARALLAX
var timeline_parallax = true;                   //If false, the timeline items will not move on mousemove.


//CONTACT FORM VARIABLES
var contact_form_success_msg = "Form successfully submitted! :)";
var contact_form_error_msg = "Error sending message :(";
var contact_form_recaptcha_error_msg = "Error verifying reCaptcha!";


//COUNTDOWN VARIABLES
var c_days = "DAYS";                            //Countdown "Days" label
var c_hours = "HOURS";                          //Countdown "Hours" label
var c_minutes = "MIN.";                         //Countdown "Minutes" label
var c_seconds = "SEC.";                         //Countdown "Seconds" label
var countdown_end_msg = "Bắc Phú!";       //Message to display when the countdown reaches the end


//GOOGLE MAP VARIABLES
var map_canvas_id = "map_canvas";               //The HTML "id" of the map canvas
var map_color = "#8eaeba";                      //Google map color
var map_initial_zoom = 15;                      //The initial zoom when Google map loads
var map_initial_latitude = 21.00081859629792;           //Google map initial Latitude. If "null", the latitude of the first marked will be used
var map_initial_longitude = 105.87097199752556;        //Google map initial Longitude. If "null", the longitude of the first marked will be used
var use_default_map_style = false;              //If true, default map style will be used
var map_id = "74e62f23c479fd43";

//List of map markers
// var map_markers = [
//     {
//         "title": "Reception",
//         "latitude": 21.00081859629792,
//         "longitude": 105.87097199752556,
//         "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
//         "infoWindow": "<b>Hà Nội Sahul A25 Hotel & Spa <br> 684 Minh Khai, HBT, Hà Nội</b>"
//     },
//     {
//         "title": "Accommodation 2",
//         "latitude": 33.780428,
//         "longitude": -118.084075,
//         "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
//         "infoWindow": "Accommodation 2 <br> Los Alamitos, CA 90720"
//     },
//     {
//         "title": "Accommodation 3",
//         "latitude": 33.777551,
//         "longitude": -118.050468,
//         "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
//         "infoWindow": "Accommodation 3 <br> Seal Beach, CA 90740"
//     },
//     {
//         "title": "Transportation",
//         "latitude": 33.782930,
//         "longitude": -118.060552,
//         "icon": "fas fa-plane", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
//         "infoWindow": "Seal Beach VORTAC SLI <br> Los Alamitos, CA 90720"
//     },
//     {
//         "title": "Ceremony",
//         "latitude": 33.776384,
//         "longitude": -118.058149,
//         "icon": "fas fa-bell", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
//         "infoWindow": "Birchwood Church <br> Seal Beach, CA 90740"
//     }
// ];