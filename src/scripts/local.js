const SETTINGSHTML = `<div><h5 class="trn">General</h5><div class="param"><div class="showall wrapper"><span class="trn">Show all settings</span><div><label class="switch"><input id="i_showall" type="checkbox"> <span class="slider round span"></span></label></div></div><hr><div class="choose_language wrapper"><span class="trn selector_span">Language</span> <select id="i_lang" class="lang"><option value="en">English</option><option value="fr">Français</option><option value="sk">Slovenský</option><option value="sv">Svenska</option><option value="pl">Polski</option><option value="pt_BR">Português (Brasil)</option><option value="nl">Nederlandse</option><option value="ru">Русский</option><option value="zh_CN">简体中文</option><option value="de">Deutsch</option><option value="it">Italiano</option><option value="es">Español</option><option value="no">Norsk</option></select></div></div></div><div><h5 class="trn">Quick Links</h5><div class="param"><div class="link_input_wrap"><div><div><input id="i_title" type="text" name="title" autocomplete="off" placeholder="Name"> <input id="i_url" type="text" name="url" autocomplete="off" placeholder="URL"></div><button id="submitlink" class="trn">Add</button></div></div><div class="pro"><hr><div class="linknewtab wrapper"><span class="trn">Open in new tab by default</span><div><label class="switch"><input id="i_linknewtab" type="checkbox"> <span class="slider round span"></span></label></div></div><hr><div class="wrapper"><span class="trn">Links per row</span> <input id="i_row" type="range" class="range" name="i_row" min="2" max="12" step="1" value="8"></div></div></div></div><div><h5 class="trn">Visuals</h5><div class="param"><div class="wrapper"><span class="trn selector_span">Background type</span> <select id="i_type" class="theme"><option value="dynamic" class="trn">Dynamic</option><option value="custom" class="trn">Custom</option></select></div><hr><div id="dynamic"><div class="wrapper"><span class="trn">Frequency</span> <select id="i_freq"><option value="tabs" class="trn">Every tab</option><option value="hour" class="trn">Every hour</option><option value="day" class="trn">Every day</option><option value="pause" class="trn">Pause</option></select></div><div class="pro"><hr><div class="wrapper"><span class="trn" title="Add custom unsplash collection">Unsplash collection</span> <input type="text" name="collection" id="i_collection" autocomplete="off" placeholder="4933370" maxlength="32"></div></div></div><div id="custom"><div id="bg_tn_wrap"><label id="fileContainer"><p class="trn">Upload background here</p><input id="i_bgfile" type="file" name="background_file"></label></div></div><hr><div class="wrapper"><span class="trn">Blur intensity</span> <input id="i_blur" type="range" class="range" name="background_blur" min="0" max="50" value="0" step="1"></div><hr><div class="wrapper"><span class="trn">Brightness</span> <input id="i_bright" type="range" class="range" name="background_bright" min="0" max="1" value=".7" step=".01"></div><hr><div class="darkmode wrapper"><span class="trn selector_span">Dark mode</span> <select id="i_dark" class="theme"><option value="auto" class="trn">Only at night</option><option value="system" class="trn">With the system</option><option value="enable" class="trn">Enabled</option><option value="disable" class="trn">Disabled</option></select></div><div class="pro"><hr><div class="wrapper"><span class="trn">Greeting</span> <input type="text" name="greeting" id="i_greeting" autocomplete="off" placeholder="Name" maxlength="32"></div><hr><span class="trn">Hide elements</span><div id="hideelem"><div><button data="time-container" class="trn">Clock</button> <button data="date" class="trn">Date</button></div><div><button data="greetings" class="trn">Greetings</button> <button data="weather_desc" class="trn">Weather</button> <button data="w_icon" class="trn">Icon</button></div><div><button data="linkblocks" class="trn">Quick Links</button></div><div><button data="showSettings" class="trn">Settings icon</button></div></div></div></div></div><div><h5 class="trn">Time & Date</h5><div class="param"><div class="pro"><div class="analog wrapper"><span class="trn">Analog clock</span><div><label class="switch"><input id="i_analog" type="checkbox"> <span class="slider round span"></span></label></div></div><hr><div class="seconds wrapper"><span class="trn">Display Seconds</span><div><label class="switch"><input id="i_seconds" type="checkbox"> <span class="slider round span"></span></label></div></div><hr><div class="wrapper"><span class="trn">US Date Format</span><div><label class="switch"><input id="i_usdate" type="checkbox"> <span class="slider round span"></span></label></div></div><hr></div><div id="w_ampm" class="12hour wrapper"><span class="trn">12-Hour Time</span><div><label class="switch"><input id="i_ampm" type="checkbox"> <span class="slider round span"></span></label></div></div><hr><div class="wrapper"><span class="trn selector_span">Time zone</span> <select id="i_timezone" class=""><option value="auto" class="trn">Automatic</option><option value="-10">UTC/HST -10 (Honolulu)</option><option value="-9">UTC/AKST -9 (Ancorage)</option><option value="-8">UTC/PST -8 (Vancouver, Los Angeles)</option><option value="-7">UTC/MST -7 (Phoenix)</option><option value="-6">UTC/CST -6 (Mexico, Houston)</option><option value="-5">UTC/EST -5 (Montreal, New York, Panama)</option><option value="-4">UTC/AST -4 (Halifax, Caracas)</option><option value="-3">UTC/CLST -3 (Sao Paulo, Santiago)</option><option value="0">UTC/GMT (London, Lisboa, Reykjavik)</option><option value="+1">UTC/CET +1 (Paris, Madrid, Amsterdam, Stockholm)</option><option value="+2">UTC/EET +2 (Helsinki, Bucharest, Athens, Cairo)</option><option value="+3">UTC/MSK +3 (Moscow, Istanbul)</option><option value="+4">UTC/AST +4 (Tehran, Doha)</option><option value="+5">UTC/PKT +5 (Karachi)</option><option value="+6">UTC/IST +6 (Mumbai)</option><option value="+7">UTC/ICT +7 (Bangkok, Jakarta)</option><option value="+8">UTC/CST +8 (Shanghai, Perth)</option><option value="+9">UTC/KST +9 (Seoul, Tokyo)</option><option value="+10">UTC/AEST +10 (Brisbane)</option><option value="+11">UTC/AEDT +11 (Canberra)</option><option value="+12">UTC/NZDT +12 (Wellington)</option></select></div></div></div><div><h5 class="trn">Weather</h5><div class="param"><div class="w_auto wrapper"><span class="trn">Geolocation</span><div><label class="switch"><input id="i_geol" type="checkbox"> <span class="slider round span"></span></label></div></div><div id="sett_city"><hr><div class="wrapper"><div><input id="i_city" type="text" name="city" placeholder="City"> <select id="i_ccode" class="countrycode"><option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia, Plurinational State of</option><option value="BQ">Bonaire, Sint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei Darussalam</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo</option><option value="CD">Congo, the Democratic Republic of the</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="CI">Côte d'Ivoire</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands (Malvinas)</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran, Islamic Republic of</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KP">Korea, Democratic People's Republic of</option><option value="KR">Korea, Republic of</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Lao People's Democratic Republic</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia, the Former Yugoslav Republic of</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia, Federated States of</option><option value="MD">Moldova, Republic of</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestine, State of</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Réunion</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena, Ascension and Tristan da Cunha</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten (Dutch part)</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syrian Arab Republic</option><option value="TW">Taiwan, Province of China</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania, United Republic of</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela, Bolivarian Republic of</option><option value="VN">Viet Nam</option><option value="VG">Virgin Islands, British</option><option value="VI">Virgin Islands, U.S.</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select></div><p id="wrongCity" class="trn wrongCity">There was a problem</p><button id="b_city" class="submitw_city centeredButton trn">Change city</button></div><p class="help_sentence trn">Use this option if you don't want to enable geolocation.</p></div><hr><div class="units wrapper"><span class="trn">Imperial units</span><div><label class="switch"><input id="i_units" type="checkbox"> <span class="slider round span"></span></label></div></div></div></div><div><h5 class="trn">Search bar</h5><div class="param"><div class="activate_searchbar wrapper"><span class="trn">Enable</span><div><label class="switch"><input id="i_sb" type="checkbox"> <span class="slider round span"></span></label></div></div><div class="pro"><hr><div class="wrapper"><span class="trn">Open in new tab</span><div><label class="switch"><input id="i_sbnewtab" type="checkbox"> <span class="slider round span"></span></label></div></div></div><div id="choose_searchengine"><hr><div class="wrapper"><span class="trn">Search engine</span> <select id="i_sbengine" class="choose_search"><option value="google">Google</option><option value="ddg">DuckDuckGo</option><option value="bing">Bing</option><option value="startpage">Startpage</option><option value="qwant">Qwant</option><option value="lilo">Lilo</option><option value="ecosia">Ecosia</option><option value="yahoo">Yahoo</option></select></div></div></div></div><div class="pro"><h5 class="trn">Custom Font</h5><div class="param"><div class="wrapper"><span class="trn" title="You can type any google fonts">Font family</span> <input id="i_customfont" type="text" name="customfont" autocomplete="off" placeholder="Any Google fonts"></div><hr><div class="wrapper"><span class="trn">Weight</span> <input id="i_weight" type="range" class="range" name="fontweight" min="100" max="900" step="100" value="400"></div><hr><div class="wrapper"><span class="trn">Size</span> <input id="i_size" type="range" class="range" name="fontsize" min="9" max="26" value="12"></div></div></div><div class="pro"><h5 class="trn">Custom Style</h5><textarea id="cssEditor" placeholder="Type in your custom CSS"></textarea></div><div class="pro"><div><h5 class="trn">Settings</h5><div class="param"><div id="imp_wrapper" class="wrapper"><input id="i_import" type="text" name="Import" autocomplete="off" placeholder="Paste settings code"> <button id="submitImport" class="trn">Import</button></div><hr><div id="exp_wrapper" class="wrapper"><input readonly="readonly" id="i_export" type="text" name="export" autocomplete="off" placeholder="Click to show export code"> <button id="submitExport" class="trn">Export</button></div><hr><div id="reset_wrapper" class="wrapper"><button id="submitReset" class="trn">Reset settings</button></div></div></div></div><div class="signature"><div class="firstblock"><p class="version">Bonjourr <a href="https://bonjourr.fr/history">1.9.3</a></p><div class="socialIcons"><a href="https://bonjourr.fr" title="Bonjourr's website"><svg height="16px" id="Layer_1" style="enable-background: new 0 0 16 16" version="1.1" viewBox="0 0 16 16" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z"/></svg> </a><a href="https://www.instagram.com/getBonjourr/" title="Check out our Instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style="fill: #007aff" d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"/><path style="fill: #007aff" d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/><circle style="fill: #007aff" cx="390.476" cy="121.524" r="30.23"/></svg> </a><a href="https://twitter.com/getBonjourr" title="Check out our Twitter"><svg viewBox="0 0 300.00006 244.18703"><g transform="translate(-539.17946,-568.85777)" id="layer1"><path id="path3611" style="fill-opacity: 1; fill-rule: nonzero; stroke: none" d="m 633.89823,812.04479 c 112.46038,0 173.95627,-93.16765 173.95627,-173.95625 0,-2.64628 -0.0539,-5.28062 -0.1726,-7.90305 11.93799,-8.63016 22.31446,-19.39999 30.49762,-31.65984 -10.95459,4.86937 -22.74358,8.14741 -35.11071,9.62551 12.62341,-7.56929 22.31446,-19.54304 26.88583,-33.81739 -11.81284,7.00307 -24.89517,12.09297 -38.82383,14.84055 -11.15723,-11.88436 -27.04079,-19.31655 -44.62892,-19.31655 -33.76374,0 -61.14426,27.38052 -61.14426,61.13233 0,4.79784 0.5364,9.46458 1.58538,13.94057 -50.81546,-2.55686 -95.87353,-26.88582 -126.02546,-63.87991 -5.25082,9.03545 -8.27852,19.53111 -8.27852,30.73006 0,21.21186 10.79366,39.93837 27.20766,50.89296 -10.03077,-0.30992 -19.45363,-3.06348 -27.69044,-7.64676 -0.009,0.25652 -0.009,0.50661 -0.009,0.78077 0,29.60957 21.07478,54.3319 49.0513,59.93435 -5.13757,1.40062 -10.54335,2.15158 -16.12196,2.15158 -3.93364,0 -7.76596,-0.38716 -11.49099,-1.1026 7.78383,24.2932 30.35457,41.97073 57.11525,42.46543 -20.92578,16.40207 -47.28712,26.17062 -75.93712,26.17062 -4.92898,0 -9.79834,-0.28036 -14.58427,-0.84634 27.05868,17.34379 59.18936,27.46396 93.72193,27.46396"/></g></svg> </a><a href="https://github.com/victrme/Bonjourr" title="Bonjourr's GitHub repository"><svg viewBox="0 0 1024 1024" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/></svg></a></div></div><p class="trn">Made in France with ❤️</p><p id="rand"><span class="trn">by</span></p><div id="rdv_website"><p><span class="trn">Consider</span> <a href="https://bonjourr.fr/#donate" class="trn">donating</a> <span class="trn">if you love Bonjourr</span> 😊</p></div></div>`

id = (name) => document.getElementById(name)
cl = (name) => document.getElementsByClassName(name)
clas = (that, val) => that.setAttribute('class', val)
has = (that, val) => (id(that) && id(that).getAttribute('class', val) ? true : false)

let disposableData = {},
	isPro = false,
	langue = 'en',
	stillActive = false,
	rangeActive = false,
	lazyClockInterval = 0,
	fontList = [],
	fullImage = [],
	fullThumbnails = []
const randomseed = Math.floor(Math.random() * 30) + 1,
	domshowsettings = id('showSettings'),
	domlinkblocks = id('linkblocks'),
	dominterface = id('interface'),
	dict = askfordict(),
	domimg = id('background'),
	domthumbnail = cl('thumbnail'),
	domclock = id('clock'),
	mobilecheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false

const offlineStorage = {
	get: (useless, callback) => {
		const data = localStorage.bonjourr ? JSON.parse(localStorage.bonjourr) : {}
		callback(data)
	},
	set: (prop) => {
		offlineStorage.get(null, (data) => {
			if (typeof prop === 'object') {
				const [key, val] = Object.entries(prop)[0]

				if (key === 'import') {
					data = val
				} else data[key] = val

				localStorage.bonjourr = JSON.stringify(data)
			}
		})
	},
	log: () => offlineStorage.get(null, (data) => console.log(data)),
	del: () => localStorage.clear(),
}

//cache rapidement temp max pour eviter que ça saccade
if (new Date().getHours() >= 12) id('temp_max_wrap').style.display = 'none'

//cache un peu mieux les données dans le storage
function localEnc(input = 'no', enc = true) {
	let a = input.split(''),
		n = ''
	for (let i in a) n += String.fromCharCode(a[i].charCodeAt() + (enc ? randomseed : -randomseed))
	return n
}

function slowRange(tosave) {
	//timeout avant de save pour éviter la surcharge d'instructions de storage
	clearTimeout(rangeActive)
	rangeActive = setTimeout(function () {
		offlineStorage.set(tosave)
	}, 150)
}

function slow(that) {
	that.setAttribute('disabled', '')
	stillActive = setTimeout(() => {
		that.removeAttribute('disabled')
		clearTimeout(stillActive)
		stillActive = false
	}, 700)
}

function traduction(ofSettings, initStorage) {
	let trns = (ofSettings ? id('settings') : document).querySelectorAll('.trn')
	langue = ofSettings ? JSON.parse(localEnc(disposableData, false)).lang || 'en' : initStorage || 'en'

	if (langue !== 'en') trns.forEach((t) => (dict[t.innerText] ? (t.innerText = dict[t.innerText][langue]) : ''))
}

function tradThis(str) {
	if (langue === 'en') return str
	else return dict[str][langue]
}

function newClock(eventObj, init) {
	function displayControl() {
		const numeric = id('clock'),
			analog = id('analogClock'),
			analSec = id('analogSeconds')

		//cache celle qui n'est pas choisi
		clas(clock.analog ? numeric : analog, 'hidden')
		clas(clock.analog ? analog : numeric, '')

		//cache l'aiguille des secondes
		if (!clock.seconds && clock.analog) clas(analSec, 'hidden')
		else clas(analSec, '')
	}

	function main(change) {
		//retourne une liste [heure, minutes, secondes]
		function time() {
			const date = new Date()
			return [date.getHours(), date.getMinutes(), date.getSeconds()]
		}

		//besoin pour numerique et analogue
		function timezone(timezone, hour) {
			if (timezone === 'auto' || timezone === NaN) return hour
			else {
				let d = new Date()
				let offset = d.getTimezoneOffset()
				let utc = hour + offset / 60
				let setTime = (utc + parseInt(timezone)) % 24

				if (setTime < 0) setTime = 24 + setTime

				return setTime
			}
		}

		function numerical(timearray) {
			//seul numerique a besoin du ampm
			function toAmpm(val) {
				if (val > 12) val -= 12
				else if (val === 0) val = 12
				else val

				return val
			}

			function fixunits(val) {
				val = val < 10 ? '0' + val : val
				return val.toString()
			}

			let h = clock.ampm ? toAmpm(timearray[0]) : timearray[0],
				m = fixunits(timearray[1]),
				s = fixunits(timearray[2])

			if (clock.seconds) {
				domclock.innerText = `${h}:${m}:${s}`
			} else if (change || domclock.innerText.length === 0 || s === '00') {
				domclock.innerText = `${h}:${m}`
			}
		}

		function analog(timearray) {
			function rotation(that, val) {
				const spancss = that.style

				if (lazyClockInterval === 0 || val === 0) {
					spancss.transition = 'none'
				} else {
					if (spancss.transition === 'none 0s ease 0s') spancss.transition = 'transform .1s'
				}

				spancss.transform = `rotate(${parseInt(val)}deg)`
			}

			let s = timearray[2] * 6,
				m = timearray[1] * 6, // + (s / 60),
				h = timearray[0] * 30 //% 12 / 12 * 360 + (m / 12);

			//bouge les aiguilles minute et heure quand seconde ou minute arrive à 0
			if (true || timearray[2] === 0) rotation(id('minutes'), m)
			if (true || timearray[1] === 0) rotation(id('hours'), h)

			//tourne pas les secondes si pas de seconds
			if (clock.seconds) rotation(id('analogSeconds'), s)
		}

		//timezone control
		//analog control
		const array = time()

		array[0] = timezone(clock.timezone, array[0])
		clock.analog ? analog(array) : numerical(array)
	}

	function startClock(change) {
		//stops multiple intervals
		clearInterval(lazyClockInterval)

		displayControl()
		main(change)
		lazyClockInterval = setInterval(main, 1000)
	}

	//controle très stricte de clock comme vous pouvez le voir
	//(je sais que je peux faire mieux)
	let clock

	if (eventObj) {
		offlineStorage.get('clock', (data) => {
			clock = {
				analog: data.clock ? data.clock.analog : false,
				seconds: data.clock ? data.clock.seconds : false,
				ampm: data.clock ? data.clock.ampm : false,
				timezone: data.clock ? data.clock.timezone : 'auto',
			}

			//event change of clock parameters
			clock[eventObj.param] = eventObj.value
			offlineStorage.set({ clock: clock })

			startClock(true)
		})
	} else {
		clock = {
			analog: init ? init.analog : false,
			seconds: init ? init.seconds : false,
			ampm: init ? init.ampm : false,
			timezone: init ? init.timezone : 'auto',
		}

		startClock(true)
	}
}

function date(event, usdate) {
	const date = new Date()
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	if (usdate) {
		id('jour').innerText = tradThis(days[date.getDay()]) + ','
		id('chiffre').innerText = tradThis(months[date.getMonth()])
		id('mois').innerText = date.getDate()
	} else {
		id('jour').innerText = tradThis(days[date.getDay()])
		id('chiffre').innerText = date.getDate()
		id('mois').innerText = tradThis(months[date.getMonth()])
	}

	if (event) offlineStorage.set({ usdate: usdate })
}

function greetings() {
	const h = new Date().getHours()
	let message

	if (h > 6 && h < 12) message = 'Good Morning'
	else if (h >= 12 && h < 18) message = 'Good Afternoon'
	else if (h >= 18 && h <= 23) message = 'Good Evening'
	else message = 'Good Night'

	id('greetings').innerText = tradThis(message)
}

function quickLinks(event, that, initStorage) {
	// Pour ne faire qu'un seul storage call
	// [{ index: number, url: string }]
	const linksFaviconsToUpdate = []

	//enleve les selections d'edit
	const removeLinkSelection = () =>
		domlinkblocks.querySelectorAll('.l_icon_wrap').forEach(function (e) {
			clas(e, 'l_icon_wrap')
		})

	//initialise les blocs en fonction du storage
	//utilise simplement une boucle de appendblock
	function initblocks(storage) {
		let array = storage.links || false
		if (array) array.map((a, i) => appendblock(a, i, array))
	}

	function addIcon(elem, arr, index, links) {
		//prend le domaine de n'importe quelle url
		const a = document.createElement('a')
		a.href = arr.url
		const hostname = a.hostname

		// fetch l'icône et l'ajoute
		const img = new Image()
		const url = 'https://api.faviconkit.com/' + hostname + '/144'

		img.onload = () => {
			// Change to loaded favicon
			elem.querySelector('img').src = url

			// Save changes memory var
			linksFaviconsToUpdate.push({ index, url })
			const howManyToSave = links.filter((link) => link.icon === 'src/images/icons/favicon.png')

			// Last to save ? Update storage
			if (linksFaviconsToUpdate.length === howManyToSave.length) {
				linksFaviconsToUpdate.forEach((link) => (links[link.index].icon = link.url))
				offlineStorage.set({ links: links })
			}
		}
		img.src = url
		img.remove()
	}

	function appendblock(arr, index, links) {
		let { icon, title, url } = arr

		// no icon ? + 1.9.2 dead favicons fix
		if (icon.length === 0 || icon === 'src/images/icons/favicon.png') {
			icon = 'src/assets/images/loading.gif'
		}

		//le DOM du block
		let b = `<div class='block' draggable="false" source='${url}'>
			<div class='l_icon_wrap' draggable="false">
				<img class='l_icon' src='${icon}' draggable="false">
			</div>
			<span>${title}</span>
		</div>`

		//ajoute un wrap
		let block_parent = document.createElement('div')
		block_parent.setAttribute('class', 'block_parent')
		block_parent.setAttribute('draggable', 'true')
		block_parent.innerHTML = b

		//l'ajoute au dom
		domlinkblocks.appendChild(block_parent)

		//met les events au dernier elem rajouté
		addEvents(domlinkblocks.lastElementChild)

		//si online et l'icon charge, en rechercher une
		const imageLoading = icon === 'src/assets/images/loading.gif'
		if (window.navigator.onLine && imageLoading) addIcon(domlinkblocks.lastElementChild, arr, index, links)
	}

	function addEvents(elem) {
		function handleDrag(is, that) {
			offlineStorage.get('links', (data) => {
				const i = findindex(that)

				if (is === 'start') dragged = [elem, data.links[i], i]
				else if (is === 'enter') hovered = [elem, data.links[i], i]
				else if (is === 'end') {
					//changes html blocks
					current = hovered[0].innerHTML
					hovered[0].innerHTML = dragged[0].innerHTML
					dragged[0].innerHTML = current

					//changes link storage
					let allLinks = data.links

					allLinks[dragged[2]] = hovered[1]
					allLinks[hovered[2]] = dragged[1]

					offlineStorage.set({ links: allLinks })
				}
			})
		}

		elem.ondragstart = function (e) {
			//e.preventDefault();
			e.dataTransfer.setData('text/plain', e.target.id)
			e.currentTarget.style.cursor = 'pointer'
			handleDrag('start', this)
		}

		elem.ondragenter = function (e) {
			e.preventDefault()
			handleDrag('enter', this)
		}

		elem.ondragend = function (e) {
			e.preventDefault()
			handleDrag('end', this)
		}

		elem.oncontextmenu = function (e) {
			e.preventDefault()
			if (mobilecheck) editlink(this)
		}

		elem.onmouseup = function (e) {
			removeLinkSelection()
			e.which === 3 ? editlink(this) : !has('settings', 'shown') ? openlink(this, e) : ''
		}
	}

	function editEvents() {
		id('e_delete').onclick = function () {
			removeLinkSelection()
			removeblock(parseInt(id('edit_link').getAttribute('index')))
			clas(id('edit_linkContainer'), '')
		}

		id('e_submit').onclick = function () {
			removeLinkSelection()
			editlink(null, parseInt(id('edit_link').getAttribute('index')))
			clas(id('edit_linkContainer'), '')
		}

		id('e_close').onmouseup = function () {
			removeLinkSelection()
			clas(id('edit_linkContainer'), '')
		}

		id('re_title').onmouseup = function () {
			id('e_title').value = ''
		}

		id('re_url').onmouseup = function () {
			id('e_url').value = ''
		}

		id('re_iconurl').onmouseup = function () {
			id('e_iconurl').value = ''
		}
	}

	function editlink(that, i) {
		const e_title = id('e_title')
		const e_url = id('e_url')
		const e_iconurl = id('e_iconurl')

		const updateLinkHTML = ({ title, url, icon }) => {
			let block = domlinkblocks.children[i + 1]

			block.children[0].setAttribute('source', url)
			block.children[0].lastChild.innerText = title
			block.querySelector('img').src = icon
		}

		//edit est visible
		if (i || i === 0) {
			offlineStorage.get('links', (data) => {
				let allLinks = [...data.links]
				let element = {
					title: e_title.value,
					url: e_url.value,
					icon: e_iconurl.value,
				}

				allLinks[i] = element
				updateLinkHTML(element)
				offlineStorage.set({ links: allLinks })
			})

			//affiche edit avec le bon index
		} else {
			const index = findindex(that)
			const liconwrap = that.querySelector('.l_icon_wrap')

			clas(liconwrap, 'l_icon_wrap selected')

			if (has('settings', 'shown')) clas(id('edit_linkContainer'), 'shown pushed')
			else clas(id('edit_linkContainer'), 'shown')

			id('edit_link').setAttribute('index', index)

			offlineStorage.get('links', (data) => {
				const { title, url, icon } = data.links[index]

				e_title.setAttribute('placeholder', tradThis('Title'))
				e_iconurl.setAttribute('placeholder', tradThis('Icon'))

				e_title.value = title
				e_url.value = url
				e_iconurl.value = icon
			})
		}
	}

	function findindex(that) {
		//passe la liste des blocks, s'arrete si that correspond
		//renvoie le nombre de loop pour l'atteindre

		const list = domlinkblocks.children

		for (let i = 0; i < list.length; i++) if (that === list[i]) return i - 1
	}

	function removeblock(index) {
		let count = index

		offlineStorage.get(['links', 'searchbar'], (data) => {
			function ejectIntruder(arr) {
				if (arr.length === 1) return []

				if (count === 0) arr.shift()
				else if (count === arr.length) arr.pop()
				else arr.splice(count, 1)

				return arr
			}

			var linkRemd = ejectIntruder(data.links)

			//si on supprime un block quand la limite est atteinte
			//réactive les inputs
			if (linkRemd.length === 16 - 1) id('i_url').removeAttribute('disabled')

			//enleve le html du block
			var block_parent = domlinkblocks.children[count + 1]
			block_parent.setAttribute('class', 'block_parent removed')

			setTimeout(function () {
				domlinkblocks.removeChild(block_parent)

				//enleve linkblocks si il n'y a plus de links
				if (linkRemd.length === 0) domlinkblocks.style.visibility = 'hidden'
			}, 200)

			offlineStorage.set({ links: linkRemd })
		})
	}

	function linkSubmission() {
		function filterUrl(str) {
			let reg = new RegExp('^(http|https)://', 'i')

			//config ne marche pas
			if (str.startsWith('about:') || str.startsWith('chrome://')) return false

			if (str.startsWith('file://')) return str

			//premier regex pour savoir si c'est http
			if (!str.match(reg)) str = 'http://' + str

			//deuxieme pour savoir si il est valide (avec http)
			if (str.match(reg)) return str.match(reg).input
			else return false
		}

		function saveLink(lll) {
			slow(id('i_url'))

			//remet a zero les inputs
			id('i_title').value = ''
			id('i_url').value = ''

			let full = false

			offlineStorage.get(['links', 'searchbar'], (data) => {
				let arr = []

				//array est tout les links + le nouveau
				if (data.links && data.links.length > 0) {
					if (data.links.length < 16 - 1) {
						arr = data.links
						arr.push(lll)
					} else {
						full = true
					}

					//array est seulement le link
				} else {
					arr.push(lll)
					domlinkblocks.style.visibility = 'visible'
				}

				//si les blocks sont moins que 16
				if (!full) {
					offlineStorage.set({ links: arr })
					appendblock(lll, arr.length - 1, arr)
				} else {
					//desactive tout les input url
					id('i_url').setAttribute('disabled', 'disabled')
				}
			})
		}

		titleControl = (t) => (t.length > 42 ? t.slice(0, 42) + '...' : t)

		//append avec le titre, l'url ET l'index du bloc

		let links = {
			title: titleControl(id('i_title').value),
			url: filterUrl(id('i_url').value),
			icon: '',
		}

		//si l'url filtré est juste
		if (links.url && id('i_url').value.length > 2) {
			//et l'input n'a pas été activé ya -1s
			if (!stillActive) saveLink(links)
		}
	}

	function openlink(that, e) {
		const source = that.children[0].getAttribute('source')
		const a_hiddenlink = id('hiddenlink')

		offlineStorage.get('linknewtab', (data) => {
			if (data.linknewtab) {
				chrome.tabs.create({
					url: source,
				})
			} else {
				if (e.which === 2) {
					chrome.tabs.create({
						url: source,
					})
				} else {
					a_hiddenlink.setAttribute('href', source)
					a_hiddenlink.setAttribute('target', '_self')
					a_hiddenlink.click()
				}
			}
		})
	}

	//TOUT LES EVENTS, else init

	if (event === 'input' && that.which === 13) linkSubmission()
	else if (event === 'button') linkSubmission()
	else if (event === 'linknewtab') {
		offlineStorage.set({ linknewtab: that.checked ? true : false })
		id('hiddenlink').setAttribute('target', '_blank')
	} else {
		initblocks(initStorage)
		editEvents()
		id('edit_linkContainer').oncontextmenu = (e) => e.preventDefault()
	}
}

function weather(event, that, initStorage) {
	const dom_temp_max = id('temp_max'),
		dom_temp_max_wrap = id('temp_max_wrap'),
		dom_first_desc = id('weather_desc').children[0]

	function cacheControl(storage) {
		let now = Math.floor(new Date().getTime() / 1000)
		let param = storage.weather ? storage.weather : ''

		if (storage.weather && storage.weather.lastCall) {
			//si weather est vieux d'une demi heure (1800s)
			//ou si on change de lang
			//faire une requete et update le lastcall
			if (sessionStorage.lang || now > storage.weather.lastCall + 1800) {
				dataHandling(param.lastState)
				request(param, 'current')

				//si la langue a été changé, suppr
				if (sessionStorage.lang) sessionStorage.removeItem('lang')
			} else dataHandling(param.lastState)

			//high ici
			if (storage.weather && storage.weather.fcDay === new Date().getDay()) {
				dom_temp_max.innerText = storage.weather.fcHigh + '°'
				dom_temp_max_wrap.style.opacity = 1
			} else request(storage.weather, 'forecast')
		} else {
			//initialise a Paris + Metric
			//c'est le premier call, requete + lastCall = now
			initWeather()
		}
	}

	function initWeather() {
		let param = {
			city: 'Paris',
			ccode: 'FR',
			location: false,
			unit: 'metric',
		}

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				param.location = []

				//update le parametre de location
				param.location.push(pos.coords.latitude, pos.coords.longitude)
				offlineStorage.set({ weather: param })

				request(param, 'current')
				request(param, 'forecast')
			},
			(refused) => {
				param.location = false

				offlineStorage.set({ weather: param })

				request(param, 'current')
				request(param, 'forecast')
			}
		)
	}

	function request(arg, wCat) {
		function urlControl(arg, forecast) {
			let url = 'https://api.openweathermap.org/data/2.5/'

			if (forecast) url += 'forecast?appid=' + atob(WEATHER_API_KEY[0])
			else url += 'weather?appid=' + atob(WEATHER_API_KEY[1])

			//auto, utilise l'array location [lat, lon]
			if (arg.location) {
				url += `&lat=${arg.location[0]}&lon=${arg.location[1]}`
			} else {
				url += `&q=${encodeURI(arg.city)},${arg.ccode}`
			}

			url += `&units=${arg.unit}&lang=${langue}`

			return url
		}

		function weatherResponse(parameters, response) {
			//sauvegarder la derniere meteo
			let now = Math.floor(new Date().getTime() / 1000)
			let param = parameters
			param.lastState = response
			param.lastCall = now
			offlineStorage.set({ weather: param })

			//la réponse est utilisé dans la fonction plus haute
			dataHandling(response)
		}

		function forecastResponse(parameters, response) {
			function findHighTemps(d) {
				let i = 0
				let newDay = new Date(d.list[0].dt_txt).getDay()
				let currentDay = newDay
				let arr = []

				//compare la date toute les 3h (list[i])
				//si meme journée, rajouter temp max a la liste

				while (currentDay == newDay && i < 10) {
					newDay = new Date(d.list[i].dt_txt).getDay()
					arr.push(d.list[i].main.temp_max)

					i += 1
				}

				let high = Math.floor(Math.max(...arr))

				//renvoie high
				return [high, currentDay]
			}

			let fc = findHighTemps(response)

			//sauvegarder la derniere meteo
			let param = parameters
			param.fcHigh = fc[0]
			param.fcDay = fc[1]
			offlineStorage.set({ weather: param })

			dom_temp_max.innerText = param.fcHigh + '°'
			dom_temp_max_wrap.style.opacity = 1
		}

		let url = wCat === 'current' ? urlControl(arg, false) : urlControl(arg, true)

		let request_w = new XMLHttpRequest()
		request_w.open('GET', url, true)

		request_w.onload = function () {
			let resp = JSON.parse(this.response)

			if (request_w.status >= 200 && request_w.status < 400) {
				if (wCat === 'current') {
					weatherResponse(arg, resp)
				} else if (wCat === 'forecast') {
					forecastResponse(arg, resp)
				}
			} else {
				submissionError(resp.message)
			}
		}

		request_w.send()
	}

	function dataHandling(data) {
		let hour = new Date().getHours()

		function getIcon() {
			//si le soleil est levé, renvoi jour
			//le renvoie correspond au nom du répertoire des icones jour / nuit
			function dayOrNight(sunset, sunrise) {
				let ss = new Date(sunset * 1000)
				let sr = new Date(sunrise * 1000)

				return hour > sr.getHours() && hour < ss.getHours() ? 'day' : 'night'
			}

			//prend l'id de la météo et renvoie une description
			//correspond au nom de l'icone (+ .png)
			function imgId(c) {
				let temp,
					codes = {
						thunderstorm: 200,
						lightdrizzle: 300,
						showerdrizzle: 302,
						lightrain: 500,
						showerrain: 502,
						snow: 602,
						mist: 701,
						clearsky: 800,
						fewclouds: 801,
						brokenclouds: 803,
					}

				for (let key in codes) {
					if (c >= codes[key]) temp = key
				}

				return temp || 'clearsky'
			}

			let d_n = dayOrNight(data.sys.sunset, data.sys.sunrise)
			let weather_id = imgId(data.weather[0].id)
			let icon_src = `src/assets/images/weather/${d_n}/${weather_id}.png`
			id('widget').setAttribute('src', icon_src)
			id('widget').setAttribute('class', 'shown')
		}

		function getDescription() {
			//pour la description et temperature
			//Rajoute une majuscule à la description
			let meteoStr = data.weather[0].description
			meteoStr = meteoStr[0].toUpperCase() + meteoStr.slice(1)
			id('desc').innerText = meteoStr + '.'

			//si c'est l'après midi (apres 12h), on enleve la partie temp max
			let dtemp, wtemp

			if (hour < 12) {
				//temp de desc et temp de widget sont pareil
				dtemp = wtemp = Math.floor(data.main.temp) + '°'
			} else {
				//temp de desc devient temp de widget + un point
				//on vide la catégorie temp max
				wtemp = Math.floor(data.main.temp) + '°'
				dtemp = wtemp + '.'
			}

			id('temp').innerText = dtemp
			id('widget_temp').innerText = wtemp
			dom_first_desc.style.opacity = 1
		}

		getDescription()
		getIcon()
	}

	function submissionError(error) {
		const city = id('i_city')

		city.value = ''
		city.setAttribute('placeholder', tradThis('City not found'))
	}

	function updateCity() {
		slow(that)

		offlineStorage.get('weather', (data) => {
			const param = data.weather

			param.ccode = i_ccode.value
			param.city = i_city.value

			if (param.city.length < 2) return false

			request(param, 'current')
			request(param, 'forecast')

			i_city.setAttribute('placeholder', param.city)
			i_city.value = ''
			i_city.blur()

			offlineStorage.set({
				weather: param,
			})
		})
	}

	function updateUnit(that) {
		slow(that)

		offlineStorage.get(['weather'], (data) => {
			const param = data.weather

			if (that.checked) {
				param.unit = 'imperial'
			} else {
				param.unit = 'metric'
			}

			request(param, 'current')
			request(param, 'forecast')

			offlineStorage.set({ weather: param })
		})
	}

	function updateLocation(that) {
		slow(that)

		offlineStorage.get('weather', (data) => {
			const param = data.weather
			param.location = []

			if (that.checked) {
				that.setAttribute('disabled', '')

				navigator.geolocation.getCurrentPosition(
					(pos) => {
						//update le parametre de location
						param.location.push(pos.coords.latitude, pos.coords.longitude)

						offlineStorage.set({
							weather: param,
						})

						//request la meteo
						request(param, 'current')
						request(param, 'forecast')

						//update le setting
						clas(sett_city, 'city hidden')
						that.removeAttribute('disabled')
					},
					(refused) => {
						//désactive geolocation if refused
						that.checked = false
						that.removeAttribute('disabled')

						if (!param.city) initWeather()
					}
				)
			} else {
				clas(sett_city, 'city')

				i_city.setAttribute('placeholder', param.city)
				i_ccode.value = param.ccode

				param.location = false

				offlineStorage.set({
					weather: param,
				})

				request(param, 'current')
				request(param, 'forecast')
			}
		})
	}

	const WEATHER_API_KEY = [
		'YTU0ZjkxOThkODY4YTJhNjk4ZDQ1MGRlN2NiODBiNDU=',
		'Y2U1M2Y3MDdhZWMyZDk1NjEwZjIwYjk4Y2VjYzA1NzE=',
		'N2M1NDFjYWVmNWZjNzQ2N2ZjNzI2N2UyZjc1NjQ5YTk=',
	]
	const i_city = id('i_city')
	const i_ccode = id('i_ccode')
	const sett_city = id('sett_city')

	//TOUT LES EVENTS, default c'est init
	switch (event) {
		case 'city':
			updateCity()
			break

		case 'units':
			updateUnit(that)
			break

		case 'geol':
			updateLocation(that)
			break

		default:
			cacheControl(initStorage)
	}
}

function imgCredits(src, type) {
	const location = id('location'),
		artist = id('artist'),
		credit = id('credit'),
		onUnsplash = id('onUnsplash')

	if (type === 'dynamic') {
		clas(onUnsplash, 'shown')
		location.innerText = src.location.text
		location.setAttribute('href', src.location.url)
		artist.innerText = src.artist.text
		artist.setAttribute('href', src.artist.url)
	}

	if (type === 'custom') clas(credit, 'hidden')
	else clas(credit, 'shown')
}

function imgBackground(val) {
	if (val) {
		let img = new Image()

		img.onload = () => {
			id('background').style.backgroundImage = `url(${val})`
			id('background_overlay').style.animation = 'fade .1s ease-in forwards'
		}

		img.src = val
		img.remove()
	} else return id('background').style.backgroundImage
}

function initBackground(storage) {
	function loadCustom({ custom, customIndex }) {
		const index = customIndex >= 0 ? customIndex : 0
		const chosen = custom[index]
		const cleanData = chosen.slice(chosen.indexOf(',') + 1, chosen.length)

		imgBackground(b64toBlobUrl(cleanData))
		changeImgIndex(customIndex)
	}

	let type = storage.background_type || 'dynamic'

	if (type === 'custom') {
		//reste local !!!!
		chrome.storage.local.get(null, (localChrome) => {
			//1.8.3 -> 1.9 data transfer
			if (localChrome.background_blob !== undefined) {
				const blob = localChrome.background_blob
				const old = [blob[0] + ',' + blob[1]]

				loadCustom({
					custom: old,
					customIndex: 0,
				})

				chrome.storage.local.set({ custom: old })
				chrome.storage.local.set({ customIndex: 0 })
				chrome.storage.local.set({ customThumbnails: old })

				chrome.storage.local.remove('background_blob')
			} else if (Object.entries(localChrome).length > 0) {
				//apply chosen custom background
				loadCustom(localChrome)
			} else {
				//if no custom background available: dynamic
				unsplash(storage)
				offlineStorage.set({ background_type: 'dynamic' })
			}
		})

		imgCredits(null, type)
	} else if (type === 'dynamic' || type === 'default') {
		unsplash(storage)
	} else {
		//on startup
		unsplash(null, null, true)
	}

	const blur = storage.background_blur !== undefined ? storage.background_blur : 15
	const bright = storage.background_bright !== undefined ? storage.background_bright : 0.7

	filter('init', [parseFloat(blur), parseFloat(bright)])
}

function setblob(donnee, reader) {
	const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
		const byteCharacters = atob(b64Data)
		const byteArrays = []

		for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			const slice = byteCharacters.slice(offset, offset + sliceSize)

			const byteNumbers = new Array(slice.length)
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i)
			}

			const byteArray = new Uint8Array(byteNumbers)
			byteArrays.push(byteArray)
		}

		const blob = new Blob(byteArrays, { type: contentType })
		return blob
	}

	//découpe les données du file en [contentType, base64data]
	let base = reader ? donnee.split(',') : donnee
	let contentType = base[0].replace('data:', '').replace(';base64', '')
	let b64Data = base[1]

	//creer le blob et trouve l'url
	let blob = b64toBlob(b64Data, contentType)
	let blobUrl = URL.createObjectURL(blob)

	return reader ? [base, blobUrl] : blobUrl
}

function b64toBlobUrl(a, b = '', c = 512) {
	const d = atob(a),
		e = []
	for (let f = 0; f < d.length; f += c) {
		const a = d.slice(f, f + c),
			b = Array(a.length)
		for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c)
		const g = new Uint8Array(b)
		e.push(g)
	}
	const f = new Blob(e, {
			type: b,
		}),
		g = URL.createObjectURL(f)
	return g
}

function changeImgIndex(i) {
	domimg.setAttribute('index', i)
}

function renderImage(file, is) {
	let reader = new FileReader()
	reader.onload = function (event) {
		let result = event.target.result

		if (is === 'change') {
			fullImage.push(result)
			chrome.storage.local.set({ custom: fullImage })

			compress(result, 'thumbnail')
			compress(result, 'new')
		}
	}

	reader.readAsDataURL(file)
}

function compress(e, state) {
	//prend l'image complete en arg

	const img = new Image()

	img.onload = () => {
		//const size = document.getElementById('range').value;
		const elem = document.createElement('canvas')
		const ctx = elem.getContext('2d')

		//canvas proportionné à l'image

		//rétréci suivant le taux de compression
		//si thumbnail, toujours 100px
		const height = state === 'thumbnail' ? 100 : img.height * 1 //parseFloat(size));
		const scaleFactor = height / img.height
		elem.width = img.width * scaleFactor
		elem.height = height

		//dessine l'image proportionné
		ctx.drawImage(img, 0, 0, img.width * scaleFactor, height)

		//renvoie le base64
		const data = ctx.canvas.toDataURL(img)
		const cleanData = data.slice(data.indexOf(',') + 1, data.length) //used for blob

		if (state === 'thumbnail') {
			//controle les thumbnails
			addThumbnails(cleanData, fullImage.length - 1)

			fullThumbnails.push(cleanData)
			chrome.storage.local.set({ customThumbnails: fullThumbnails })
		} else {
			//new image loaded from filereader sets image index
			if (state === 'new') {
				changeImgIndex(fullImage.length - 1)
				//save l'index
				chrome.storage.local.set({ customIndex: fullImage.length - 1 })
			}

			//affiche l'image
			imgBackground(b64toBlobUrl(cleanData))
		}
	}

	img.src = e
}

function addThumbnails(data, index) {
	//créer une tag html en plus + remove button

	const div = document.createElement('div')
	const i = document.createElement('img')
	const rem = document.createElement('button')
	const wrap = document.getElementById('bg_tn_wrap')
	const upload = document.getElementById('i_bgfile')

	div.setAttribute('index', index)
	div.setAttribute('class', 'thumbnail')
	rem.setAttribute('class', 'hidden')
	rem.innerText = '✕'
	i.src = b64toBlobUrl(data)

	div.appendChild(i)
	div.appendChild(rem)
	wrap.append(div) //, wrap.children[0]);

	//events
	const getParentIndex = (that) => parseInt(that.parentElement.getAttribute('index'))
	const getIndex = (that) => parseInt(that.getAttribute('index'))
	const removeControl = (show, i) => domthumbnail[i].children[1].setAttribute('class', show ? 'shown' : 'hidden')

	//displays / hides remove button
	div.onmouseenter = function () {
		removeControl(true, getIndex(this))
	}
	div.onmouseleave = function () {
		removeControl(false, getIndex(this))
	}

	//6
	i.onmouseup = function () {
		//affiche l'image voulu
		//lui injecte le bon index

		const index = getParentIndex(this)

		compress(fullImage[index])
		changeImgIndex(index)
		chrome.storage.local.set({ customIndex: index })
	}

	//7
	rem.onmouseup = function () {
		const index = getParentIndex(this)
		let currentIndex = id('background').getAttribute('index')

		//removes thumbnail
		domthumbnail[index].remove()

		//rewrite all thumbs indexes
		for (let i = 0; i < domthumbnail.length; i++) {
			domthumbnail[i].setAttribute('index', i)
		}

		//deletes thumbnail from storage
		//concat  [0, index] à [index + 1, fin]
		const deleteArrItem = (arr) => arr.slice(null, index).concat(arr.slice(index + 1))

		fullImage = deleteArrItem(fullImage)
		chrome.storage.local.set({ custom: fullImage })

		fullThumbnails = deleteArrItem(fullThumbnails)
		chrome.storage.local.set({ customThumbnails: fullThumbnails })

		//celui a suppr plus petit que l'actuel, baisse son index
		if (index <= currentIndex) chrome.storage.local.set({ customIndex: currentIndex - 1 })
	}
}

function unsplash(data, event, startup) {
	//on startup nothing is displayed
	const loadbackground = (url) => (startup ? noDisplayImgLoad(url) : imgBackground(url))

	function noDisplayImgLoad(val, callback) {
		let img = new Image()

		img.onload = callback
		img.src = val
		img.remove()
	}

	function freqControl(state, every, last) {
		const d = new Date()
		if (state === 'set') return every === 'tabs' ? 0 : d.getTime()

		if (state === 'get') {
			let calcLast = 0
			let today = d.getTime()

			if (every === 'hour') calcLast = last + 3600 * 1000
			else if (every === 'day') calcLast = last + 86400 * 1000
			else if (every === 'pause') calcLast = 10 ** 13 - 1 //le jour de la fin du monde lmao

			//retourne le today superieur au calculated last
			return today > calcLast
		}
	}

	function cacheControl(dynamic, weather) {
		//as t on besoin d'une nouvelle image ?
		let needNewImage = freqControl('get', dynamic.every, dynamic.time)
		if (needNewImage) {
			//sauvegarde le nouveau temps
			dynamic.time = freqControl('set', dynamic.every)

			//si next n'existe pas, init
			if (dynamic.next.url === '') {
				req('current', dynamic, weather, true)

				//sinon prendre l'image preloaded (next)
			} else {
				loadbackground(dynamic.next.url)
				credit(dynamic.next)
				req('current', dynamic, weather, false)
			}

			//pas besoin d'image, simplement current
		} else {
			loadbackground(dynamic.current.url)
			credit(dynamic.current)
		}
	}

	function req(which, dynamic, weather, init) {
		function chooseCollection() {
			// If collection isnt ''
			if (dynamic.collection) {
				if (dynamic.collection.length > 0) {
					const list = dynamic.collection.split(',')

					// Split text, take random element
					if (list.length > 1) return list[Math.floor(Math.random() * list.length)].trim()
					// Return single collection
					else return dynamic.collection
				}
			}

			// Transition day and night with noon & evening collections
			// if clock is + /- 60 min around sunrise/set
			if (weather) {
				const minutator = (date) => date.getHours() * 60 + date.getMinutes()

				const { sunset, sunrise } = weather.lastState.sys,
					minsunrise = minutator(new Date(sunrise * 1000)),
					minsunset = minutator(new Date(sunset * 1000)),
					sunnow = minutator(new Date())

				if (sunnow >= 0 && sunnow <= minsunrise - 60) return collections.night
				else if (sunnow <= minsunrise + 60) return collections.noon
				else if (sunnow <= minsunset - 60) return collections.day
				else if (sunnow <= minsunset + 60) return collections.evening
				else if (sunnow >= minsunset + 60) return collections.night
				else return collections.day
			} else return collections.day
		}

		obf = (n) =>
			n === 0
				? atob('aHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy9yYW5kb20/Y29sbGVjdGlvbnM9')
				: atob('MzY4NmMxMjIyMWQyOWNhOGY3OTQ3Yzk0NTQyMDI1ZDc2MGE4ZTBkNDkwMDdlYzcwZmEyYzRiOWY5ZDM3N2IxZA==')
		let xhr = new XMLHttpRequest()
		xhr.open('GET', obf(0) + chooseCollection(), true)
		xhr.setRequestHeader('Authorization', `Client-ID ${obf(1)}`)

		xhr.onload = function () {
			let resp = JSON.parse(this.response)

			if (xhr.status >= 200 && xhr.status < 400) {
				let screenWidth = window.devicePixelRatio * screen.width

				resp = {
					url: resp.urls.raw + `&w=${screenWidth}&fm=jpg&q=70`,
					link: resp.links.html,
					username: resp.user.username,
					name: resp.user.name,
					city: resp.location.city,
					country: resp.location.country,
				}

				if (init) {
					//si init, fait 2 req (current, next) et save sur la 2e
					if (which === 'current') {
						dynamic.current = resp
						loadbackground(dynamic.current.url)
						credit(dynamic.current)
						req('next', dynamic, weather, true)
					} else if (which === 'next') {
						dynamic.next = resp
						offlineStorage.set({ dynamic: dynamic })
					}

					//si next existe, current devient next et next devient la requete
					//preload la prochaine image (sans l'afficher)
				} else {
					noDisplayImgLoad(resp.url, () => {
						dynamic.current = dynamic.next
						dynamic.next = resp
						offlineStorage.set({ dynamic: dynamic })
					})
				}
			}
		}
		xhr.send()
	}

	function credit(d) {
		let loc = ''

		if (d.city !== null && d.country !== null) loc = `${d.city}, ${d.country} - `
		else if (d.country !== null) loc = `${d.country} - `
		else loc = 'Photo - '

		let infos = {
			location: {
				text: loc,
				url: `${d.link}?utm_source=Bonjourr&utm_medium=referral`,
			},
			artist: {
				text: d.name,
				url: `https://unsplash.com/@${d.username}?utm_source=Bonjourr&utm_medium=referral`,
			},
		}

		if (!startup) imgCredits(infos, 'dynamic')
	}

	function actionFromStorage() {
		offlineStorage.get(['dynamic', 'weather'], (storage) => {
			//
			// Dynamic events: freq & collection
			if (typeof event === 'object') {
				if (event.every !== undefined) {
					storage.dynamic.every = event.every
				} else if (event.collection !== undefined) {
					// Removes next image from old collection data
					storage.dynamic.next = initDynamic.next
					storage.dynamic.time = initDynamic.time
					storage.dynamic.collection = event.collection
				}

				offlineStorage.set({ dynamic: storage.dynamic })
				return true
			}

			// No events, just look in storage or init
			if (storage && storage.dynamic !== undefined) cacheControl(storage.dynamic, storage.weather)
			else cacheControl(initDynamic)
		})
	}

	const initDynamic = {
		current: {
			url: '',
			link: '',
			username: '',
			name: '',
			city: '',
			country: '',
		},
		next: {
			url: '',
			link: '',
			username: '',
			name: '',
			city: '',
			country: '',
		},
		collection: '',
		every: 'hour',
		time: 0,
	}

	// No passed data, search in storage or init
	if (data === null || data === undefined) actionFromStorage()
	else {
		// Data & dynamic exist
		if (data.dynamic !== undefined) cacheControl(data.dynamic, data.weather)
		else actionFromStorage()
	}
}

function filter(cat, val) {
	let result = ''

	switch (cat) {
		case 'init':
			result = `blur(${val[0]}px) brightness(${val[1]})`
			break

		case 'blur':
			result = `blur(${val}px) brightness(${id('i_bright').value})`
			break

		case 'bright':
			result = `blur(${id('i_blur').value}px) brightness(${val})`
			break
	}

	id('background').style.filter = result
}

function darkmode(choice, initStorage) {
	function apply(state) {
		function auto(wdata) {
			//compare current hour with weather sunset / sunrise

			const ls = wdata.lastState
			const sunrise = new Date(ls.sys.sunrise * 1000).getHours()
			const sunset = new Date(ls.sys.sunset * 1000).getHours()
			const hr = new Date().getHours()

			return hr < sunrise || hr > sunset ? 'dark' : ''
		}

		//uses chromesync data on startup, sessionsStorage on change
		const weather = initStorage ? initStorage.weather : JSON.parse(localEnc(disposableData, false)).weather
		let bodyClass

		//dark mode is defines by the body class

		switch (state) {
			case 'system':
				bodyClass = 'autodark'
				break

			case 'auto':
				bodyClass = auto(weather)
				break

			case 'enable':
				bodyClass = 'dark'
				break

			default:
				bodyClass = ''
		}

		document.body.setAttribute('class', bodyClass)
	}

	//apply class, save if event
	if (choice) {
		apply(choice, true)
		offlineStorage.set({ dark: choice })
	} else {
		apply(initStorage.dark)
	}
}

function searchbar(event, that, storage) {
	function display(value, init) {
		id('sb_container').setAttribute('class', value ? 'shown' : 'hidden')

		if (!init) {
			offlineStorage.set({ searchbar: value })
			id('choose_searchengine').setAttribute('class', value ? 'shown' : 'hidden')
		}
	}

	function localisation(q) {
		let response = '',
			lang = storage ? storage.lang || 'en' : 'en',
			engine = sessionStorage.engine

		// engineLocales est dans lang.js
		response = engineLocales[engine].base.replace('$locale$', engineLocales[engine][lang]).replace('$query$', q)

		return response
	}

	function engine(value, init) {
		const names = {
			startpage: 'Startpage',
			ddg: 'DuckDuckGo',
			qwant: 'Qwant',
			lilo: 'Lilo',
			ecosia: 'Ecosia',
			google: 'Google',
			yahoo: 'Yahoo',
			bing: 'Bing',
		}

		id('searchbar').setAttribute('placeholder', tradThis('Search on ' + names[value]))
		if (!init) offlineStorage.set({ searchbar_engine: value })
		sessionStorage.engine = value
	}

	function setNewtab(value, init) {
		if (!init) offlineStorage.set({ searchbar_newtab: value })
		sessionStorage.newtab = value
	}

	id('searchbar').onkeyup = function (e) {
		if (e.which === 13) {
			if (sessionStorage.newtab === 'true') window.open(localisation(this.value), '_blank')
			else window.location = localisation(this.value)
		}
	}

	if (event) {
		if (event === 'searchbar') display(that.checked)
		if (event === 'engine') engine(that.value)
		if (event === 'newtab') setNewtab(that.checked)
	}
	//init
	else {
		const searchbar = storage.searchbar || false,
			searchengine = storage.searchbar_engine || 'google',
			searchbarnewtab = storage.searchbar_newtab || false

		//display
		display(searchbar, true)
		engine(searchengine, true)
		setNewtab(searchbarnewtab, true)
	}
}

function showPopup(data) {
	id('go').setAttribute(
		'href',
		navigator.userAgent.includes('Chrome')
			? 'https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd/reviews'
			: 'https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/'
	)

	//s'affiche après 10 tabs
	if (data > 10) {
		const popup = id('popup')
		const closePopup = id('closePopup')
		const go = id('go')
		const close = function () {
			popup.classList.add('removed')
			offlineStorage.set({ reviewPopup: 'removed' })
		}

		//attendre avant d'afficher
		setTimeout(function () {
			popup.classList.add('shown')
		}, 2000)

		closePopup.onclick = close
		go.onclick = close
	} else if (typeof data === 'number') offlineStorage.set({ reviewPopup: data + 1 })
	else if (data !== 'removed') offlineStorage.set({ reviewPopup: 0 })
	else if (data === 'removed') document.body.removeChild(popup)
}

function proFunctions(obj) {
	function customFont(data, event) {
		function setFont(f, is) {
			function saveFont(cssURL, supportedWeights) {
				const font = {
					supportedWeights: supportedWeights || ['400'],
					family: id('i_customfont').value,
					weight: id('i_weight').value,
					size: id('i_size').value,
					url: cssURL || f.url,
				}

				offlineStorage.set({ font: font })
			}

			function applyFont(URL) {
				//
				//
				function applyWeightAndSize() {
					if (f.weight) id('interface').style.fontWeight = f.weight
					if (f.size) dominterface.style.fontSize = f.size + 'px'
				}

				const url = f.url || URL
				if (url) {
					fetch(url)
						.then((response) => response.text())
						.then((text) => {
							text = text.replace(/(\r\n|\n|\r|  )/gm, '')
							id('fontstyle').innerText = text ? text : f.str

							if (f.family) {
								document.body.style.fontFamily = f.family
								id('clock').style.fontFamily = f.family
							}

							applyWeightAndSize()
						})
				} else {
					applyWeightAndSize()
				}
			}

			function removeFont() {
				id('fontstyle').innerText = ''
				document.body.style.fontFamily = ''
				id('clock').style.fontFamily = ''
			}

			//si on change la famille
			if (is === 'event' && (f.family !== null || f.weight !== null)) {
				const dom = id('i_customfont')
				const userFamily = dom.value
				const userWeight = f.weight === '400' ? 'regular' : f.weight || 'regular'

				if (userFamily === '') {
					saveFont()
					removeFont()
					return false
				}

				// Liste toute les fonts
				fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAky3JYc2rCOL1jIssGBgLr1PT4yW15jOk')
					.then((response) => response.json())
					.then((json) => {
						//
						// Cherche correspondante
						const font = json.items.filter((font) => font.family.toUpperCase() === userFamily.toUpperCase())

						if (font.length > 0) {
							//
							// Envoie l'URL a apply et save
							const url = `https://fonts.googleapis.com/css?family=${font[0].family}:${userWeight}`

							// To prevent weight sliders from sending useless requests
							const availableWeight = font[0].variants.filter((vari) => !vari.includes('italic'))

							if (availableWeight.indexOf(userWeight) > -1) {
								applyFont(url)
								saveFont(url, availableWeight)

								dom.blur()
								dom.setAttribute('placeholder', 'Any Google fonts')
							} else {
								saveFont(null, availableWeight)
							}
						} else {
							dom.value = ''
							dom.setAttribute('placeholder', 'No fonts matched')
						}
					})
			} else if (is === 'event') {
				//si on change autre chose que la famille
				saveFont()
				applyFont()

				//si ça n'est pas un event
			} else applyFont()
		}

		//init
		if (data) setFont(data)
		if (event) setFont(event, 'event')
	}

	function customCss(data, event) {
		const styleHead = id('styles')

		// Active l'indentation
		function syntaxControl(e, that) {
			if (e.key === '{') {
				that.value = that.value + `{\r  \r}`

				that.selectionStart = that.selectionStart - 2
				that.selectionEnd = that.selectionEnd - 2

				e.preventDefault()

				/*let selectionStartPos = this.selectionStart;
				let selectionEndPos   = this.selectionEnd;
				let oldContent        = this.value;

				this.value = oldContent.substring( 0, selectionStartPos ) + "\t" + oldContent.substring( selectionEndPos );

				this.selectionStart = this.selectionEnd = selectionStartPos + 1;*/
			}
		}

		if (data) {
			styleHead.innerText = data
		}

		if (event) {
			const e = event.e
			const that = event.that
			syntaxControl(e, that)

			setTimeout(() => {
				const val = id('cssEditor').value
				styleHead.innerText = val
				offlineStorage.set({ css: val })
			}, 200)
		}
	}

	function linksrow(data, event) {
		function setRows(val) {
			domlinkblocks.style.width = `${val * 7}em`
		}

		if (data !== undefined) setRows(data)

		if (event) {
			//id("e_row").innerText = event;
			setRows(event)
			slowRange({ linksrow: parseInt(event) })
		}
	}

	function greeting(data, event) {
		let text = id('greetings').innerText
		let pause

		function apply(val) {
			//greeting is classic text + , + custom greet
			id('greetings').innerText = `${text}, ${val}`

			//input empty removes ,
			if (val === '') id('greetings').innerText = text
		}

		function setEvent(val) {
			const virgule = text.indexOf(',')

			//remove last input from greetings
			text = text.slice(0, virgule === -1 ? text.length : virgule)
			apply(val)

			//reset save timeout
			//wait long enough to save to storage
			if (pause) clearTimeout(pause)

			pause = setTimeout(function () {
				offlineStorage.set({ greeting: val })
			}, 1200)
		}

		//init
		if (data !== undefined) apply(data)
		if (event !== undefined) setEvent(event)
	}

	function hideElem(data, e, settingsinit) {
		let object = {}

		if (e === undefined) {
			//quit on first startup
			if (!data) return false

			addAnimsToHideableElems()

			for (let d of data) {
				//le nouveau
				object = {
					dom: id(d),
					src: d,
					not: true,
				}

				principale(object)
			}
		} else {
			//object qu'on connait
			object = {
				parent: e.parentElement,
				dom: id(e.getAttribute('data')),
				src: e.getAttribute('data'),
				not: e.getAttribute('class') !== 'clicked', //le toggle
			}

			principale(object)
			eventStorage()
		}

		function addAnimsToHideableElems() {
			const elemList = [
				id('time-container'),
				id('date'),
				id('greetings'),
				id('weather'),
				id('weather_desc'),
				id('w_icon'),
			]

			setTimeout(() => elemList.forEach((elem) => (elem.style.transition = 'opacity 0.2s')), 100)
		}

		function principale(objet) {
			let toggleWrap = true
			let toggleWrapFunc = function (elem) {
				id(elem).style.display = objet.not ? 'none' : 'flex'
				if (e !== undefined) clas(objet.parent, objet.not ? 'allhidden' : '')
			}

			//toggle l'opacité du dom concerné

			if (e !== undefined) clas(e, objet.not ? 'clicked' : '')
			objet.dom.style.opacity = objet.not ? '0' : '1'

			//si event
			//si un bouton n'est pas cliqué dans une catégorie
			//ne pas toggle le wrap
			if (objet.not && !data) {
				let all = objet.parent.querySelectorAll('button')

				for (let r of all) if (r.getAttribute('class') !== 'clicked') toggleWrap = false
			}

			//si init
			//si tout n'est pas caché dans une catégorie
			//ne pas toggle le wrap
			else if (data) {
				//wtf is this

				if (objet.src === 'time-container' || objet.src === 'date')
					if (!data.includes('time-container') || !data.includes('date')) toggleWrap = false

				if (objet.src === 'greetings' || objet.src === 'weather_desc' || objet.src === 'w_icon')
					if (!data.includes('greetings') || !data.includes('weather_desc') || !data.includes('w_icon'))
						toggleWrap = false
			}

			//toogle les wrap en fonctions du bouton cliqué

			if (toggleWrap) {
				switch (objet.src) {
					case 'time-container':
					case 'date':
						toggleWrapFunc('time')
						break

					case 'greetings':
					case 'weather_desc':
					case 'w_icon':
						toggleWrapFunc('main')
						break
				}
			}
		}

		function eventStorage() {
			//c'est un event, on store
			if (e !== undefined && !settingsinit) {
				//parse through les dom a masquer, les sauvegarde
				//liste de {id du dom a masquer, button a init}

				let all = id('hideelem').querySelectorAll('button')
				let toStore = []

				for (let r of all) if (r.getAttribute('class') === 'clicked') toStore.push(r.getAttribute('data'))

				offlineStorage.set({ hide: toStore })
			}
		}
	}

	switch (obj.which) {
		case 'font':
			customFont(obj.data, obj.event)
			break

		case 'css':
			customCss(obj.data, obj.event)
			break

		case 'row':
			linksrow(obj.data, obj.event)
			break

		case 'greet':
			greeting(obj.data, obj.event)
			break

		case 'hide':
			hideElem(obj.data, obj.event, obj.sett)
			break
	}
}

function signature() {
	let v = "<a href='https://victr.me/'>Victor Azevedo</a>"
	let t = "<a href='https://tahoe.be'>Tahoe Beetschen</a>"
	let e = document.createElement('span')

	e.innerHTML = Math.random() > 0.5 ? ` ${v} & ${t}` : ` ${t} & ${v}`
	id('rand').appendChild(e)
}

function selectBackgroundType(cat) {
	id('dynamic').style.display = 'none'
	id('custom').style.display = 'none'
	id(cat).style.display = 'block'

	if (cat === 'dynamic' || cat === 'default') unsplash()
	else if (cat === 'custom') displayCustomThumbnails()

	offlineStorage.set({ background_type: cat })
}

function displayCustomThumbnails() {
	chrome.storage.local.get('customThumbnails', (data) => {
		if (data.customThumbnails.length > 0) {
			let cleanData
			let thumbs = data.customThumbnails

			for (var i = 0; i < thumbs.length; i++) {
				cleanData = thumbs[i].replace('data:image/jpeg;base64,', '') //used for blob
				addThumbnails(cleanData, i)
			}

			fullThumbnails = data.customThumbnails

			setTimeout(function () {
				chrome.storage.local.get('custom', (data) => {
					fullImage = data.custom
				})
			}, 200)
		}
	})
}

function showall(that) {
	const change = (ev) => {
		for (let d of cl('pro')) clas(d, ev ? 'pro shown' : 'pro')
	}

	const addtransitions = (dom, css) => {
		for (let d of cl(dom)) d.style.transition = css
	}

	//event
	if (that !== undefined) {
		change(that)
		offlineStorage.set({ showall: that })

		//init
	} else {
		const data = JSON.parse(localEnc(disposableData, false))
		change(data.showall)

		//add transitions
		addtransitions('pro', 'max-height .2s')
	}
}

function settingsEvents() {
	// file input animation
	const custom = id('i_bgfile')
	const customStyle = id('fileContainer')
	let fontObj = {}

	custom.addEventListener('dragenter', function () {
		customStyle.classList.add('dragover')
	})

	custom.addEventListener('dragleave', function () {
		customStyle.classList.remove('dragover')
	})

	custom.addEventListener('drop', function () {
		customStyle.classList.remove('dragover')
	})

	//general

	id('i_showall').onchange = function () {
		showall(this.checked)
	}

	id('i_lang').onchange = function () {
		offlineStorage.set({ lang: this.value })

		//session pour le weather
		sessionStorage.lang = this.value

		if (sessionStorage.lang) location.reload()
	}

	//quick links
	id('i_title').onkeypress = function (e) {
		if (e.which === 13) quickLinks('input', e)
	}

	id('i_url').onkeypress = function (e) {
		if (e.which === 13) quickLinks('input', e)
	}

	id('submitlink').onmouseup = function () {
		quickLinks('button', this)
	}

	id('i_linknewtab').onchange = function () {
		quickLinks('linknewtab', this)
	}

	//visuals
	id('i_type').onchange = function () {
		selectBackgroundType(this.value)
	}

	id('i_freq').onchange = function () {
		unsplash(null, { every: this.value })
	}

	id('i_collection').onchange = function () {
		unsplash(null, { collection: this.value })
		this.blur()
	}

	//custom bg

	id('i_bgfile').onchange = function (e) {
		renderImage(this.files[0], 'change')
	}

	id('i_blur').oninput = function () {
		filter('blur', this.value)
		slowRange({ background_blur: parseInt(this.value) })
	}

	id('i_bright').oninput = function () {
		filter('bright', this.value)
		slowRange({ background_bright: parseFloat(this.value) })
	}

	id('i_dark').onchange = function () {
		darkmode(this.value)
	}

	//Time and date

	id('i_analog').onchange = function () {
		newClock({ param: 'analog', value: this.checked })
	}

	id('i_seconds').onchange = function () {
		newClock({ param: 'seconds', value: this.checked })
	}

	id('i_ampm').onchange = function () {
		newClock({ param: 'ampm', value: this.checked })
	}

	id('i_timezone').onchange = function () {
		newClock({ param: 'timezone', value: this.value })
	}

	id('i_usdate').onchange = function () {
		date(true, this.checked)
	}

	//weather
	id('b_city').onmouseup = function () {
		if (!stillActive) weather('city', this)
	}

	id('i_city').onkeypress = function (e) {
		if (!stillActive && e.which === 13) weather('city', this)
	}

	id('i_units').onchange = function () {
		if (!stillActive) weather('units', this)
	}

	id('i_geol').onchange = function () {
		if (!stillActive) weather('geol', this)
	}

	//searchbar
	id('i_sb').onchange = function () {
		if (!stillActive) searchbar('searchbar', this)
		slow(this)
	}

	id('i_sbengine').onchange = function () {
		searchbar('engine', this)
	}

	id('i_sbnewtab').onchange = function () {
		searchbar('newtab', this)
	}

	//settings

	id('submitReset').onclick = function () {
		importExport('reset')
	}

	id('submitExport').onclick = function () {
		importExport('exp', true)
	}

	id('submitImport').onclick = function () {
		importExport('imp', true)
	}

	id('i_import').onkeypress = function (e) {
		if (e.which === 13) importExport('imp', true)
	}

	id('i_export').onfocus = function () {
		importExport('exp')
	}

	id('i_customfont').onchange = function () {
		fontObj = { family: this.value, weight: null, size: null }
		proFunctions({ which: 'font', event: fontObj })
	}

	id('i_weight').oninput = function () {
		fontObj = { family: null, weight: this.value, size: null }
		proFunctions({ which: 'font', event: fontObj })
	}

	id('i_size').oninput = function () {
		fontObj = { family: null, weight: null, size: this.value }
		proFunctions({ which: 'font', event: fontObj })
	}

	id('i_row').oninput = function () {
		proFunctions({ which: 'row', event: this.value })
	}

	id('i_greeting').onkeyup = function () {
		proFunctions({ which: 'greet', event: this.value })
	}

	id('cssEditor').onkeypress = function (e) {
		let data = { e: e, that: this }
		proFunctions({ which: 'css', event: data })
	}

	for (e of id('hideelem').querySelectorAll('button')) {
		e.onmouseup = function () {
			proFunctions({ which: 'hide', event: this })
		}
	}
}

function initParams() {
	const data = JSON.parse(localEnc(disposableData, false))

	initInput = (dom, cat, base) => (id(dom).value = cat !== undefined ? cat : base)
	initCheckbox = (dom, cat) => (id(dom).checked = cat ? true : false)
	isThereData = (cat, sub) => (data[cat] ? data[cat][sub] : undefined)

	initInput('i_type', data.background_type, 'dynamic')
	initInput('i_blur', data.background_blur, 15)
	initInput('i_bright', data.background_bright, 0.7)
	initInput('i_dark', data.dark, 'disable')
	initInput('i_sbengine', data.searchbar_engine, 'google')
	initInput('i_timezone', isThereData('clock', 'timezone'), 'auto')
	initInput('i_freq', isThereData('dynamic', 'every'), 'hour')
	initInput('i_collection', isThereData('dynamic', 'collection'), '')
	initInput('i_ccode', isThereData('weather', 'ccode'), 'US')
	initInput('i_row', data.linksrow, 8)
	initInput('i_customfont', isThereData('font', 'family'), '')
	initInput('i_weight', isThereData('font', 'weight'), 400)
	initInput('i_size', isThereData('font', 'size'), 12)
	initInput('i_greeting', data.greeting, '')
	initInput('cssEditor', data.css, '')

	initCheckbox('i_showall', data.showall)
	initCheckbox('i_geol', isThereData('weather', 'location'))
	initCheckbox('i_units', isThereData('weather', 'unit') === 'imperial')
	initCheckbox('i_linknewtab', data.linknewtab)
	initCheckbox('i_sb', data.searchbar)
	initCheckbox('i_sbnewtab', !!data.searchbar_newtab)
	initCheckbox('i_usdate', data.usdate)
	initCheckbox('i_ampm', isThereData('clock', 'ampm'), false)
	initCheckbox('i_seconds', isThereData('clock', 'seconds'), false)
	initCheckbox('i_analog', isThereData('clock', 'analog'), false)

	//hide elems
	const all = id('hideelem').querySelectorAll('button')

	//pour tout elem, pour chaque data, trouver une equivalence, appliquer fct
	if (data.hide)
		for (let a of all)
			for (let b of data.hide) if (a.getAttribute('data') === b) proFunctions({ which: 'hide', event: a, sett: true })

	//input translation
	id('i_title').setAttribute('placeholder', tradThis('Name'))
	id('i_greeting').setAttribute('placeholder', tradThis('Name'))
	id('i_import').setAttribute('placeholder', tradThis('Import code'))
	id('i_export').setAttribute('placeholder', tradThis('Export code'))
	id('i_customfont').setAttribute('placeholder', tradThis('Any Google fonts'))
	id('cssEditor').setAttribute('placeholder', tradThis('Type in your custom CSS'))

	//bg
	if (data.background_type === 'dynamic' || Object.keys(data).length === 0 || data.background_type === undefined) {
		id('dynamic').style.display = 'block'
	} else if (data.background_type === 'custom') {
		id('custom').style.display = 'block'
		displayCustomThumbnails()
	} else if (data.background_type === 'default') {
		id('dynamic').style.display = 'block'
		id('i_type').value = 'dynamic'
		offlineStorage.set({ background_type: 'dynamic' })
	}

	//weather settings
	if (data.weather && Object.keys(data).length > 0) {
		let cityPlaceholder = data.weather.city ? data.weather.city : 'City'
		id('i_city').setAttribute('placeholder', cityPlaceholder)

		if (data.weather.location) id('sett_city').setAttribute('class', 'city hidden')
	} else {
		id('sett_city').setAttribute('class', 'city hidden')
		id('i_geol').checked = true
	}

	//searchbar display settings
	id('choose_searchengine').setAttribute('class', data.searchbar ? 'shown' : 'hidden')

	//langue
	id('i_lang').value = data.lang || 'en'

	//firefox export
	if (!navigator.userAgent.includes('Chrome')) {
		id('submitExport').style.display = 'none'
		id('i_export').style.width = '100%'
	}
}

function importExport(select, isEvent) {
	if (select === 'exp') {
		const input = id('i_export')
		const isOnChrome = navigator.userAgent.includes('Chrome')

		offlineStorage.get(null, (data) => {
			input.value = JSON.stringify(data)

			if (isEvent) {
				input.select()

				//doesn't work on firefox for security reason
				//don't want to add permissions just for this
				if (isOnChrome) {
					document.execCommand('copy')
					id('submitExport').innerText = tradThis('Copied')
				}
			}
		})
	} else if (select === 'imp') {
		if (isEvent) {
			let val = id('i_import').value

			if (val.length > 0) {
				try {
					offlineStorage.set({ import: JSON.parse(val) })
					setTimeout(() => location.reload(), 50)
				} catch (e) {
					alert(e)
				}
			}
		}
	} else if (select === 'reset') {
		let input = id('submitReset')

		if (!input.hasAttribute('sure')) {
			input.innerText = 'Are you sure ?'
			input.setAttribute('sure', '')
		} else {
			offlineStorage.del()
			setTimeout(function () {
				location.reload()
			}, 20)
		}
	}
}

function showSettings() {
	function display() {
		const edit = id('edit_linkContainer')
		const editClass = edit.getAttribute('class')

		if (has('settings', 'shown')) {
			clas(domshowsettings.children[0], '')
			clas(id('settings'), '')
			clas(dominterface, '')

			if (editClass === 'shown pushed') clas(edit, 'shown')
		} else {
			clas(domshowsettings.children[0], 'shown')
			clas(id('settings'), 'shown')
			clas(dominterface, 'pushed')

			if (editClass === 'shown') clas(edit, 'shown pushed')
		}
	}

	function functions() {
		initParams()
		traduction(true)
		setTimeout(function () {
			display()
			showall()
			settingsEvents()
			signature()
		}, 10)
	}

	function init() {
		const node = document.createElement('div')
		node.id = 'settings'
		node.innerHTML = SETTINGSHTML
		document.body.appendChild(node)

		functions()
	}

	if (!id('settings')) init()
	else display()
}

function showInterface(e) {
	//cherche le parent du click jusqu'a trouver linkblocks
	//seulement si click droit, quitter la fct
	let parent = e.target

	while (parent !== null) {
		parent = parent.parentElement
		if (parent && parent.id === 'linkblocks' && e.which === 3) return false
	}

	//close edit container on interface click
	if (has('edit_linkContainer', 'shown')) {
		clas(id('edit_linkContainer'), '')
		domlinkblocks.querySelectorAll('.l_icon_wrap').forEach(function (e) {
			clas(e, 'l_icon_wrap')
		})
	}

	if (has('settings', 'shown')) {
		let edit = id('edit_linkContainer')
		let editClass = edit.getAttribute('class')
		let ui = dominterface
		let uiClass = dominterface.getAttribute('class')

		clas(id('showSettings').children[0], '')
		clas(id('settings'), '')
		clas(dominterface, '')

		if (editClass === 'shown pushed') clas(edit, 'shown')
	}
}

domshowsettings.onmouseup = function () {
	showSettings()
}
dominterface.onmouseup = function (e) {
	showInterface(e)
}

document.onkeydown = function (e) {
	//focus la searchbar si elle existe et les settings sont fermé
	const searchbar = id('sb_container') ? has('sb_container', 'shown') : false
	const settings = id('settings') ? has('settings', 'shown') : false
	const edit = has('edit_linkContainer', 'shown')

	if (searchbar && !settings && !edit) id('searchbar').focus()

	//press escape to show settings
	if (e.code === 'Escape') showSettings()
}

window.onload = function () {
	//
	// moved localStorage to prevent conflit with other local apps
	if (localStorage.data && !localStorage.bonjourr) {
		localStorage.bonjourr = atob(localStorage.data)
		localStorage.removeItem('data')
	}

	try {
		offlineStorage.get(null, (data) => {
			//1.8.3 -> 1.9 data transfer
			if (localStorage.lang) {
				data.lang = localStorage.lang
				offlineStorage.set({ lang: localStorage.lang })
				localStorage.removeItem('lang')
			}

			//pour que les settings y accede plus facilement
			disposableData = localEnc(JSON.stringify(data))

			traduction(null, data.lang)
			greetings()
			date(null, data.usdate)
			newClock(null, data.clock)
			darkmode(null, data)
			initBackground(data)
			weather(null, null, data)
			quickLinks(null, null, data)
			searchbar(null, null, data)
			showPopup(data.reviewPopup)

			//init profunctions
			proFunctions({ which: 'hide', data: data.hide })
			proFunctions({ which: 'font', data: data.font })
			proFunctions({ which: 'css', data: data.css })
			proFunctions({ which: 'row', data: data.linksrow })
			proFunctions({ which: 'greet', data: data.greeting })

			const dominterface = id('interface')
			const domshowsettings = id('showSettings')

			// New way to show interface
			dominterface.style.opacity = '1'
			domshowsettings.style.opacity = '1'

			// Old compatibility
			clas(dominterface, '')
			clas(domshowsettings, '')

			//safe font for different alphabet
			if (data.lang === 'ru' || data.lang === 'sk') {
				const safeFont = () =>
					(id('styles').innerText = `
			body, #settings, #settings h5 {font-family: Helvetica, Calibri}`)

				if (!data.font) safeFont()
				else if (data.font.family === '') safeFont()
			}

			if (mobilecheck) {
				dominterface.style.minHeight = '90vh'
				dominterface.style.padding = '0 0 10vh 0'
			}
		})
	} catch (e) {
		// 1.9.3 data corruption fix
		// can be removed for next version
		localStorage.bonjourr = atob(localStorage.bonjourr)
		window.location.reload()
	}
}
