var t = document.getElementsByTagName("tr");
   

t[1].innerHTML = "<td>" + 'Href' + "</td>"+"<td>" + window.location.href + "</td>";
t[2].innerHTML = "<td>" + 'Protocol' + "</td>"+"<td>" + window.location.protocol + "</td>";
t[3].innerHTML = "<th>" + 'Screen' + "</th>";
t[4].innerHTML = "<td>" + 'Width' + "</td>"+"<td>" + window.screen.width + "</td>";
t[5].innerHTML = "<td>" + 'Height' + "</td>"+"<td>" + window.screen.height + "</td>";
t[6].innerHTML = "<td>" + 'AvailWidth' + "</td>"+"<td>" + window.screen.availWidth + "</td>";
t[7].innerHTML = "<td>" + 'AvailHeight' + "</td>"+"<td>" + window.screen.availHeight + "</td>";
t[8].innerHTML = "<td>" + 'ColorDepth' + "</td>"+"<td>" + window.screen.colorDepth + "</td>";
t[9].innerHTML = "<td>" + 'Orientation' + "</td>"+"<td>" + window.screen.orientation + "</td>";
t[10].innerHTML = "<th>" + 'Navigator' + "</th>";
t[11].innerHTML = "<td>" + 'AppCodeName' + "</td>"+"<td>" + window.navigator.appCodeName + "</td>";
t[12].innerHTML = "<td>" + 'AppName' + "</td>"+"<td>" + window.navigator.appName + "</td>";
t[13].innerHTML = "<td>" + 'UserAgent' + "</td>"+"<td>" + window.navigator.userAgent + "</td>";
t[14].innerHTML = "<td>" + 'CookieEnabled' + "</td>"+"<td>" + window.navigator.cookieEnabled + "</td>";
t[15].innerHTML = "<td>" + 'JavaEnabled' + "</td>"+"<td>" + window.navigator.javaEnabled() + "</td>";
t[16].innerHTML = "<td>" + 'OnLine' + "</td>"+"<td>" + window.navigator.onLine + "</td>";
t[17].innerHTML = "<th>" + 'Window' + "</th>";
t[18].innerHTML = "<td>" + 'InnerHeight' + "</td>"+"<td>" + window.innerHeight+ "</td>";
t[19].innerHTML = "<td>" + 'innerWidth' + "</td>"+"<td>" + window.innerWidth+ "</td>";
t[20].innerHTML = "<td>" + 'ScreenX' + "</td>"+"<td>" + window.screenX+ "</td>";
t[21].innerHTML = "<td>" + 'ScreenY' + "</td>"+"<td>" + window.screenY+ "</td>";
t[22].innerHTML = "<td>" + 'ScrollX' + "</td>"+"<td>" + window.scrollX+ "</td>";
t[23].innerHTML = "<td>" + 'ScrollY' + "</td>"+"<td>" + window.scrollY+ "</td>";