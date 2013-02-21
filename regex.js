var
// match ints and floats/decimals
number = '/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/',
// digits only 0 to 9
digits = '/^\d+$/',
// the 2 digit for MM YY or any two number
digits2 = '/(\d{2})/g',
// the 4 digit year number
digits4 = '/(\d{4})/g',
// 5 non-repeatable digits
digitsNoRepeat = '/(\d)(?!\1)(\d)(?!\1)(?!\2)(\d)(?!\1)(?!\2)(?!\3)(\d)(?!\1)(?!\2)(?!\3)(?!\4)\d/g',
//match number in range 0-255
num0to255 = '^([01][0-9][0-9]|2[0-4][0-9]|25[0-5])$',
//Match Any number from 1 to 50 inclusive
number1to50 = '/(^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$)/gm',
//Match Any number from 1 to 100 inclusive
number1to100 = '/(^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^100$)/gm',
// validates numbers similar to: 
// -0,
// -.0
// -0.
// -0.0
// 0
// .0
// 0.
// 0.0
allInOneNumber = '/-?(?:[0-9]+(?:\.[0-9]*)?|(?:[0-9]+)?\.[0-9]+)/g',
//match username
userName = '/^[a-z0-9_-]{3,16}$/',
// Password Pattern *requirements 1 Uppercase 1 Number and between 6 and 12 characters , Special Characters !, @, #, $, %
password = '/^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%]{6,12}$/',
// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
email = "/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i",
// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
url = "/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i",
// match a url slug (letters/numbers/hypens)
urlslug = '/^[a-z0-9-]+$/',
// Full date Regex, caring the leap years and so on. Accepted formats:
// MMDDYYYY
// MM-DD-YYYY
// MM/DD/YYYY
// MM.DD.YYYY
// MM\DD\YYYY
date = '/^(?:(?:(?:0[13578]|1[02])(\/|-|\.| ?)31)\1|(?:(?:0[1,3-9]|1[0-2])(\/|-|\.| ?)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)\d{2})$|^(?:02(\/|-|\.| ?)29\3(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0[1-9])|(?:1[0-2]))(\/|-|\.| ?)(?:0[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)\d{2})$/',
// Validates date in format DD/MM/YYYY. DD must be 1-31, MM 1-12 and YYYY a 4 digit num. 
dateDDMMYYYY = '/(([1-2][0-9])|([1-9])|(3[0-1]))/((1[0-2])|([1-9]))/[0-9]{4}/g',
// date iso validation
dateISO= '/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/',
//  Time in 12-hour format. Ex 12:00 AM, 01:59 PM
time12 = '/^(([1][0-2])|([0][1-9])):[0-5][0-9] (AM|PM)$/g',
// Time Format HH:MM From 00:00 to 23:59
time24 = '/^(([0-1]{1}[0-9]{1})|([2]{1}[0-3]{1})):(([0-5]{1}[0-9]{1}))$/',
// Captures IPv4 address from 1.0.0.0 - 255.255.255.255 and nothing else (sorry doesn't include 0.0.0.0, which I didn't need in my particular use-case).
iPv4 = '/\b([1-9]|[1-9][0-9]|1([0-9][0-9])|2([0-4][0-9]|5[0-5]))\.([0-9]|[1-9][0-9]|1([0-9][0-9])|2([0-4][0-9]|5[0-5]))\.([0-9]|[1-9][0-9]|1([0-9][0-9])|2([0-4][0-9]|5[0-5]))\.([0-9]|[1-9][0-9]|1([0-9][0-9])|2([0-4][0-9]|5[0-5]))\b/g',
// IBAN for All Countries
isbn = '/(NO)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{3}|(NO)[0-9A-Z]{15}|(BE)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}|(BE)[0-9A-Z]{16}|(DK|FO|FI|GL|NL)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{2}|(DK|FO|FI|GL|NL)[0-9A-Z]{18}|(MK|SI)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{3}|(MK|SI)[0-9A-Z]{19}|(BA|EE|KZ|LT|LU|AT)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}|(BA|EE|KZ|LT|LU|AT)[0-9A-Z]{20}|(HR|LI|LV|CH)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{1}|(HR|LI|LV|CH)[0-9A-Z]{21}|(BG|DE|IE|ME|RS|GB)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{2}|(BG|DE|IE|ME|RS|GB)[0-9A-Z]{22}|(GI|IL)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{3}|(GI|IL)[0-9A-Z]{23}|(AD|CZ|SA|RO|SK|ES|SE|TN)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}|(AD|CZ|SA|RO|SK|ES|SE|TN)[0-9A-Z]{24}|(PT)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{1}|(PT)[0-9A-Z]{25}|(IS|TR)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{2}|(IS|TR)[0-9A-Z]{26}|(FR|GR|IT|MC|SM)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{3}|(FR|GR|IT|MC|SM)[0-9A-Z]{27}|(AL|CY|HU|LB|PL)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}|(AL|CY|HU|LB|PL)[0-9A-Z]{28}|(MU)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{2}|(MU)[0-9A-Z]{30}|(MT)[0-9A-Z]{2}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{4}[ ][0-9A-Z]{3}|(MT)[0-9A-Z]{31}/gixm',
// Matching a Hex Value #83A84F
hex = '/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/',
// vowels only
vowel = '/^[aeiou]/',
// Image Extension Validation
imgExt = "/\b.(jpg|bmp|jpeg|gif|png|tif)\b/gix",
// office files
officeExt = "/\b.(doc|docx|ppt|pptx|pps|ppsx|xls|xlsx|dotx|txt)\b/gix",
// Html File
htmlExt = '/\b.(html|htm|mht|mhtml|xml)\b/gix',
//  Video Extension
videoExt = '/\b.(mp4|mkv|webm|ogv|3gp|wmv|mov|mpeg|flv|swf)\b/gix',
// Audio Extension
audioExt = '/\b.(wav|aac|ogg|mp3|avi|rm)\b/gix';