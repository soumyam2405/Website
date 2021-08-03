(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[10],{

/***/ "./node_modules/highlight.js/lib/languages/arduino.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/arduino.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: C++
Category: common, system
Website: https://isocpp.org
*/

/** @type LanguageFn */
function cPlusPlus(hljs) {
  // added for historic reasons because `hljs.C_LINE_COMMENT_MODE` does
  // not include such support nor can we be sure all the grammars depending
  // on it would desire this behavior
  const C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$', {
    contains: [
      {
        begin: /\\\n/
      }
    ]
  });
  const DECLTYPE_AUTO_RE = 'decltype\\(auto\\)';
  const NAMESPACE_RE = '[a-zA-Z_]\\w*::';
  const TEMPLATE_ARGUMENT_RE = '<[^<>]+>';
  const FUNCTION_TYPE_RE = '(' +
    DECLTYPE_AUTO_RE + '|' +
    optional(NAMESPACE_RE) +
    '[a-zA-Z_]\\w*' + optional(TEMPLATE_ARGUMENT_RE) +
  ')';
  const CPP_PRIMITIVE_TYPES = {
    className: 'keyword',
    begin: '\\b[a-z\\d_]*_t\\b'
  };

  // https://en.cppreference.com/w/cpp/language/escape
  // \\ \x \xFF \u2837 \u00323747 \374
  const CHARACTER_ESCAPES = '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)';
  const STRINGS = {
    className: 'string',
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: '\\n',
        contains: [ hljs.BACKSLASH_ESCAPE ]
      },
      {
        begin: '(u8?|U|L)?\'(' + CHARACTER_ESCAPES + "|.)",
        end: '\'',
        illegal: '.'
      },
      hljs.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  };

  const NUMBERS = {
    className: 'number',
    variants: [
      {
        begin: '\\b(0b[01\']+)'
      },
      {
        begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)'
      },
      {
        begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)'
      }
    ],
    relevance: 0
  };

  const PREPROCESSOR = {
    className: 'meta',
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: {
      'meta-keyword':
        'if else elif endif define undef warning error line ' +
        'pragma _Pragma ifdef ifndef include'
    },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      hljs.inherit(STRINGS, {
        className: 'meta-string'
      }),
      {
        className: 'meta-string',
        begin: /<.*?>/,
        end: /$/,
        illegal: '\\n'
      },
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };

  const TITLE_MODE = {
    className: 'title',
    begin: optional(NAMESPACE_RE) + hljs.IDENT_RE,
    relevance: 0
  };

  const FUNCTION_TITLE = optional(NAMESPACE_RE) + hljs.IDENT_RE + '\\s*\\(';

  const CPP_KEYWORDS = {
    keyword: 'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof ' +
      'dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace ' +
      'unsigned long volatile static protected bool template mutable if public friend ' +
      'do goto auto void enum else break extern using asm case typeid wchar_t ' +
      'short reinterpret_cast|10 default double register explicit signed typename try this ' +
      'switch continue inline delete alignas alignof constexpr consteval constinit decltype ' +
      'concept co_await co_return co_yield requires ' +
      'noexcept static_assert thread_local restrict final override ' +
      'atomic_bool atomic_char atomic_schar ' +
      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +
      'atomic_ullong new throw return ' +
      'and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',
    built_in: 'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' +
      'auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set ' +
      'unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos ' +
      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +
      'fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +
      'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' +
      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +
      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +
      'vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary',
    literal: 'true false nullptr NULL'
  };

  const EXPRESSION_CONTAINS = [
    PREPROCESSOR,
    CPP_PRIMITIVE_TYPES,
    C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    NUMBERS,
    STRINGS
  ];

  const EXPRESSION_CONTEXT = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: 'new throw return else',
        end: /;/
      }
    ],
    keywords: CPP_KEYWORDS,
    contains: EXPRESSION_CONTAINS.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([ 'self' ]),
        relevance: 0
      }
    ]),
    relevance: 0
  };

  const FUNCTION_DECLARATION = {
    className: 'function',
    begin: '(' + FUNCTION_TYPE_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
    returnBegin: true,
    end: /[{;=]/,
    excludeEnd: true,
    keywords: CPP_KEYWORDS,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      { // to prevent it from being confused as the function title
        begin: DECLTYPE_AUTO_RE,
        keywords: CPP_KEYWORDS,
        relevance: 0
      },
      {
        begin: FUNCTION_TITLE,
        returnBegin: true,
        contains: [ TITLE_MODE ],
        relevance: 0
      },
      {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        relevance: 0,
        contains: [
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          STRINGS,
          NUMBERS,
          CPP_PRIMITIVE_TYPES,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: CPP_KEYWORDS,
            relevance: 0,
            contains: [
              'self',
              C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              CPP_PRIMITIVE_TYPES
            ]
          }
        ]
      },
      CPP_PRIMITIVE_TYPES,
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      PREPROCESSOR
    ]
  };

  return {
    name: 'C++',
    aliases: [
      'cc',
      'c++',
      'h++',
      'hpp',
      'hh',
      'hxx',
      'cxx'
    ],
    keywords: CPP_KEYWORDS,
    illegal: '</',
    contains: [].concat(
      EXPRESSION_CONTEXT,
      FUNCTION_DECLARATION,
      EXPRESSION_CONTAINS,
      [
        PREPROCESSOR,
        { // containers: ie, `vector <int> rooms (9);`
          begin: '\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
          end: '>',
          keywords: CPP_KEYWORDS,
          contains: [
            'self',
            CPP_PRIMITIVE_TYPES
          ]
        },
        {
          begin: hljs.IDENT_RE + '::',
          keywords: CPP_KEYWORDS
        },
        {
          className: 'class',
          beginKeywords: 'enum class struct union',
          end: /[{;:<>=]/,
          contains: [
            {
              beginKeywords: "final class struct"
            },
            hljs.TITLE_MODE
          ]
        }
      ]),
    exports: {
      preprocessor: PREPROCESSOR,
      strings: STRINGS,
      keywords: CPP_KEYWORDS
    }
  };
}

/*
Language: Arduino
Author: Stefania Mellai <s.mellai@arduino.cc>
Description: The Arduino® Language is a superset of C++. This rules are designed to highlight the Arduino® source code. For info about language see http://www.arduino.cc.
Website: https://www.arduino.cc
*/

/** @type LanguageFn */
function arduino(hljs) {
  const ARDUINO_KW = {
    keyword:
      'boolean byte word String',
    built_in:
      'setup loop ' +
      'KeyboardController MouseController SoftwareSerial ' +
      'EthernetServer EthernetClient LiquidCrystal ' +
      'RobotControl GSMVoiceCall EthernetUDP EsploraTFT ' +
      'HttpClient RobotMotor WiFiClient GSMScanner ' +
      'FileSystem Scheduler GSMServer YunClient YunServer ' +
      'IPAddress GSMClient GSMModem Keyboard Ethernet ' +
      'Console GSMBand Esplora Stepper Process ' +
      'WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage ' +
      'Client Server GSMPIN FileIO Bridge Serial ' +
      'EEPROM Stream Mouse Audio Servo File Task ' +
      'GPRS WiFi Wire TFT GSM SPI SD ' +
      'runShellCommandAsynchronously analogWriteResolution ' +
      'retrieveCallingNumber printFirmwareVersion ' +
      'analogReadResolution sendDigitalPortPair ' +
      'noListenOnLocalhost readJoystickButton setFirmwareVersion ' +
      'readJoystickSwitch scrollDisplayRight getVoiceCallStatus ' +
      'scrollDisplayLeft writeMicroseconds delayMicroseconds ' +
      'beginTransmission getSignalStrength runAsynchronously ' +
      'getAsynchronously listenOnLocalhost getCurrentCarrier ' +
      'readAccelerometer messageAvailable sendDigitalPorts ' +
      'lineFollowConfig countryNameWrite runShellCommand ' +
      'readStringUntil rewindDirectory readTemperature ' +
      'setClockDivider readLightSensor endTransmission ' +
      'analogReference detachInterrupt countryNameRead ' +
      'attachInterrupt encryptionType readBytesUntil ' +
      'robotNameWrite readMicrophone robotNameRead cityNameWrite ' +
      'userNameWrite readJoystickY readJoystickX mouseReleased ' +
      'openNextFile scanNetworks noInterrupts digitalWrite ' +
      'beginSpeaker mousePressed isActionDone mouseDragged ' +
      'displayLogos noAutoscroll addParameter remoteNumber ' +
      'getModifiers keyboardRead userNameRead waitContinue ' +
      'processInput parseCommand printVersion readNetworks ' +
      'writeMessage blinkVersion cityNameRead readMessage ' +
      'setDataMode parsePacket isListening setBitOrder ' +
      'beginPacket isDirectory motorsWrite drawCompass ' +
      'digitalRead clearScreen serialEvent rightToLeft ' +
      'setTextSize leftToRight requestFrom keyReleased ' +
      'compassRead analogWrite interrupts WiFiServer ' +
      'disconnect playMelody parseFloat autoscroll ' +
      'getPINUsed setPINUsed setTimeout sendAnalog ' +
      'readSlider analogRead beginWrite createChar ' +
      'motorsStop keyPressed tempoWrite readButton ' +
      'subnetMask debugPrint macAddress writeGreen ' +
      'randomSeed attachGPRS readString sendString ' +
      'remotePort releaseAll mouseMoved background ' +
      'getXChange getYChange answerCall getResult ' +
      'voiceCall endPacket constrain getSocket writeJSON ' +
      'getButton available connected findUntil readBytes ' +
      'exitValue readGreen writeBlue startLoop IPAddress ' +
      'isPressed sendSysex pauseMode gatewayIP setCursor ' +
      'getOemKey tuneWrite noDisplay loadImage switchPIN ' +
      'onRequest onReceive changePIN playFile noBuffer ' +
      'parseInt overflow checkPIN knobRead beginTFT ' +
      'bitClear updateIR bitWrite position writeRGB ' +
      'highByte writeRed setSpeed readBlue noStroke ' +
      'remoteIP transfer shutdown hangCall beginSMS ' +
      'endWrite attached maintain noCursor checkReg ' +
      'checkPUK shiftOut isValid shiftIn pulseIn ' +
      'connect println localIP pinMode getIMEI ' +
      'display noBlink process getBand running beginSD ' +
      'drawBMP lowByte setBand release bitRead prepare ' +
      'pointTo readRed setMode noFill remove listen ' +
      'stroke detach attach noTone exists buffer ' +
      'height bitSet circle config cursor random ' +
      'IRread setDNS endSMS getKey micros ' +
      'millis begin print write ready flush width ' +
      'isPIN blink clear press mkdir rmdir close ' +
      'point yield image BSSID click delay ' +
      'read text move peek beep rect line open ' +
      'seek fill size turn stop home find ' +
      'step tone sqrt RSSI SSID ' +
      'end bit tan cos sin pow map abs max ' +
      'min get run put',
    literal:
      'DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE ' +
      'REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP ' +
      'SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN ' +
      'INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL ' +
      'DEFAULT OUTPUT INPUT HIGH LOW'
  };

  const ARDUINO = cPlusPlus(hljs);

  const kws = /** @type {Record<string,any>} */ (ARDUINO.keywords);

  kws.keyword += ' ' + ARDUINO_KW.keyword;
  kws.literal += ' ' + ARDUINO_KW.literal;
  kws.built_in += ' ' + ARDUINO_KW.built_in;

  ARDUINO.name = 'Arduino';
  ARDUINO.aliases = ['ino'];
  ARDUINO.supersetOf = "cpp";

  return ARDUINO;
}

module.exports = arduino;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FyZHVpbm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsRUFBRSxjQUFjLElBQUksT0FBTyxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QywwQkFBMEIsS0FBSztBQUMvQixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0Q0FBNEM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5QixtQkFBbUI7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb3B0aW9uYWwocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKCcsIHJlLCAnKT8nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBDKytcbkNhdGVnb3J5OiBjb21tb24sIHN5c3RlbVxuV2Vic2l0ZTogaHR0cHM6Ly9pc29jcHAub3JnXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY1BsdXNQbHVzKGhsanMpIHtcbiAgLy8gYWRkZWQgZm9yIGhpc3RvcmljIHJlYXNvbnMgYmVjYXVzZSBgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFYCBkb2VzXG4gIC8vIG5vdCBpbmNsdWRlIHN1Y2ggc3VwcG9ydCBub3IgY2FuIHdlIGJlIHN1cmUgYWxsIHRoZSBncmFtbWFycyBkZXBlbmRpbmdcbiAgLy8gb24gaXQgd291bGQgZGVzaXJlIHRoaXMgYmVoYXZpb3JcbiAgY29uc3QgQ19MSU5FX0NPTU1FTlRfTU9ERSA9IGhsanMuQ09NTUVOVCgnLy8nLCAnJCcsIHtcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcXFxcXG4vXG4gICAgICB9XG4gICAgXVxuICB9KTtcbiAgY29uc3QgREVDTFRZUEVfQVVUT19SRSA9ICdkZWNsdHlwZVxcXFwoYXV0b1xcXFwpJztcbiAgY29uc3QgTkFNRVNQQUNFX1JFID0gJ1thLXpBLVpfXVxcXFx3Kjo6JztcbiAgY29uc3QgVEVNUExBVEVfQVJHVU1FTlRfUkUgPSAnPFtePD5dKz4nO1xuICBjb25zdCBGVU5DVElPTl9UWVBFX1JFID0gJygnICtcbiAgICBERUNMVFlQRV9BVVRPX1JFICsgJ3wnICtcbiAgICBvcHRpb25hbChOQU1FU1BBQ0VfUkUpICtcbiAgICAnW2EtekEtWl9dXFxcXHcqJyArIG9wdGlvbmFsKFRFTVBMQVRFX0FSR1VNRU5UX1JFKSArXG4gICcpJztcbiAgY29uc3QgQ1BQX1BSSU1JVElWRV9UWVBFUyA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogJ1xcXFxiW2EtelxcXFxkX10qX3RcXFxcYidcbiAgfTtcblxuICAvLyBodHRwczovL2VuLmNwcHJlZmVyZW5jZS5jb20vdy9jcHAvbGFuZ3VhZ2UvZXNjYXBlXG4gIC8vIFxcXFwgXFx4IFxceEZGIFxcdTI4MzcgXFx1MDAzMjM3NDcgXFwzNzRcbiAgY29uc3QgQ0hBUkFDVEVSX0VTQ0FQRVMgPSAnXFxcXFxcXFwoeFswLTlBLUZhLWZdezJ9fHVbMC05QS1GYS1mXXs0LDh9fFswLTddezN9fFxcXFxTKSc7XG4gIGNvbnN0IFNUUklOR1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJyh1OD98VXxMKT9cIicsXG4gICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKHU4P3xVfEwpP1xcJygnICsgQ0hBUkFDVEVSX0VTQ0FQRVMgKyBcInwuKVwiLFxuICAgICAgICBlbmQ6ICdcXCcnLFxuICAgICAgICBpbGxlZ2FsOiAnLidcbiAgICAgIH0sXG4gICAgICBobGpzLkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICAgICAgYmVnaW46IC8oPzp1OD98VXxMKT9SXCIoW14oKVxcXFwgXXswLDE2fSlcXCgvLFxuICAgICAgICBlbmQ6IC9cXCkoW14oKVxcXFwgXXswLDE2fSlcIi9cbiAgICAgIH0pXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IE5VTUJFUlMgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxiKDBiWzAxXFwnXSspJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcoLT8pXFxcXGIoW1xcXFxkXFwnXSsoXFxcXC5bXFxcXGRcXCddKik/fFxcXFwuW1xcXFxkXFwnXSspKChsbHxMTHxsfEwpKHV8VSk/fCh1fFUpKGxsfExMfGx8TCk/fGZ8RnxifEIpJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05XFwnXSt8KFxcXFxiW1xcXFxkXFwnXSsoXFxcXC5bXFxcXGRcXCddKik/fFxcXFwuW1xcXFxkXFwnXSspKFtlRV1bLStdP1tcXFxcZFxcJ10rKT8pJ1xuICAgICAgfVxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgUFJFUFJPQ0VTU09SID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAvI1xccypbYS16XStcXGIvLFxuICAgIGVuZDogLyQvLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAnbWV0YS1rZXl3b3JkJzpcbiAgICAgICAgJ2lmIGVsc2UgZWxpZiBlbmRpZiBkZWZpbmUgdW5kZWYgd2FybmluZyBlcnJvciBsaW5lICcgK1xuICAgICAgICAncHJhZ21hIF9QcmFnbWEgaWZkZWYgaWZuZGVmIGluY2x1ZGUnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcXFxcXG4vLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoU1RSSU5HUywge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZydcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgIGJlZ2luOiAvPC4qPz4vLFxuICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJ1xuICAgICAgfSxcbiAgICAgIENfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IFRJVExFX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgIGJlZ2luOiBvcHRpb25hbChOQU1FU1BBQ0VfUkUpICsgaGxqcy5JREVOVF9SRSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBGVU5DVElPTl9USVRMRSA9IG9wdGlvbmFsKE5BTUVTUEFDRV9SRSkgKyBobGpzLklERU5UX1JFICsgJ1xcXFxzKlxcXFwoJztcblxuICBjb25zdCBDUFBfS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDogJ2ludCBmbG9hdCB3aGlsZSBwcml2YXRlIGNoYXIgY2hhcjhfdCBjaGFyMTZfdCBjaGFyMzJfdCBjYXRjaCBpbXBvcnQgbW9kdWxlIGV4cG9ydCB2aXJ0dWFsIG9wZXJhdG9yIHNpemVvZiAnICtcbiAgICAgICdkeW5hbWljX2Nhc3R8MTAgdHlwZWRlZiBjb25zdF9jYXN0fDEwIGNvbnN0IGZvciBzdGF0aWNfY2FzdHwxMCB1bmlvbiBuYW1lc3BhY2UgJyArXG4gICAgICAndW5zaWduZWQgbG9uZyB2b2xhdGlsZSBzdGF0aWMgcHJvdGVjdGVkIGJvb2wgdGVtcGxhdGUgbXV0YWJsZSBpZiBwdWJsaWMgZnJpZW5kICcgK1xuICAgICAgJ2RvIGdvdG8gYXV0byB2b2lkIGVudW0gZWxzZSBicmVhayBleHRlcm4gdXNpbmcgYXNtIGNhc2UgdHlwZWlkIHdjaGFyX3QgJyArXG4gICAgICAnc2hvcnQgcmVpbnRlcnByZXRfY2FzdHwxMCBkZWZhdWx0IGRvdWJsZSByZWdpc3RlciBleHBsaWNpdCBzaWduZWQgdHlwZW5hbWUgdHJ5IHRoaXMgJyArXG4gICAgICAnc3dpdGNoIGNvbnRpbnVlIGlubGluZSBkZWxldGUgYWxpZ25hcyBhbGlnbm9mIGNvbnN0ZXhwciBjb25zdGV2YWwgY29uc3Rpbml0IGRlY2x0eXBlICcgK1xuICAgICAgJ2NvbmNlcHQgY29fYXdhaXQgY29fcmV0dXJuIGNvX3lpZWxkIHJlcXVpcmVzICcgK1xuICAgICAgJ25vZXhjZXB0IHN0YXRpY19hc3NlcnQgdGhyZWFkX2xvY2FsIHJlc3RyaWN0IGZpbmFsIG92ZXJyaWRlICcgK1xuICAgICAgJ2F0b21pY19ib29sIGF0b21pY19jaGFyIGF0b21pY19zY2hhciAnICtcbiAgICAgICdhdG9taWNfdWNoYXIgYXRvbWljX3Nob3J0IGF0b21pY191c2hvcnQgYXRvbWljX2ludCBhdG9taWNfdWludCBhdG9taWNfbG9uZyBhdG9taWNfdWxvbmcgYXRvbWljX2xsb25nICcgK1xuICAgICAgJ2F0b21pY191bGxvbmcgbmV3IHRocm93IHJldHVybiAnICtcbiAgICAgICdhbmQgYW5kX2VxIGJpdGFuZCBiaXRvciBjb21wbCBub3Qgbm90X2VxIG9yIG9yX2VxIHhvciB4b3JfZXEnLFxuICAgIGJ1aWx0X2luOiAnc3RkIHN0cmluZyB3c3RyaW5nIGNpbiBjb3V0IGNlcnIgY2xvZyBzdGRpbiBzdGRvdXQgc3RkZXJyIHN0cmluZ3N0cmVhbSBpc3RyaW5nc3RyZWFtIG9zdHJpbmdzdHJlYW0gJyArXG4gICAgICAnYXV0b19wdHIgZGVxdWUgbGlzdCBxdWV1ZSBzdGFjayB2ZWN0b3IgbWFwIHNldCBwYWlyIGJpdHNldCBtdWx0aXNldCBtdWx0aW1hcCB1bm9yZGVyZWRfc2V0ICcgK1xuICAgICAgJ3Vub3JkZXJlZF9tYXAgdW5vcmRlcmVkX211bHRpc2V0IHVub3JkZXJlZF9tdWx0aW1hcCBwcmlvcml0eV9xdWV1ZSBtYWtlX3BhaXIgYXJyYXkgc2hhcmVkX3B0ciBhYm9ydCB0ZXJtaW5hdGUgYWJzIGFjb3MgJyArXG4gICAgICAnYXNpbiBhdGFuMiBhdGFuIGNhbGxvYyBjZWlsIGNvc2ggY29zIGV4aXQgZXhwIGZhYnMgZmxvb3IgZm1vZCBmcHJpbnRmIGZwdXRzIGZyZWUgZnJleHAgJyArXG4gICAgICAnZnNjYW5mIGZ1dHVyZSBpc2FsbnVtIGlzYWxwaGEgaXNjbnRybCBpc2RpZ2l0IGlzZ3JhcGggaXNsb3dlciBpc3ByaW50IGlzcHVuY3QgaXNzcGFjZSBpc3VwcGVyICcgK1xuICAgICAgJ2lzeGRpZ2l0IHRvbG93ZXIgdG91cHBlciBsYWJzIGxkZXhwIGxvZzEwIGxvZyBtYWxsb2MgcmVhbGxvYyBtZW1jaHIgbWVtY21wIG1lbWNweSBtZW1zZXQgbW9kZiBwb3cgJyArXG4gICAgICAncHJpbnRmIHB1dGNoYXIgcHV0cyBzY2FuZiBzaW5oIHNpbiBzbnByaW50ZiBzcHJpbnRmIHNxcnQgc3NjYW5mIHN0cmNhdCBzdHJjaHIgc3RyY21wICcgK1xuICAgICAgJ3N0cmNweSBzdHJjc3BuIHN0cmxlbiBzdHJuY2F0IHN0cm5jbXAgc3RybmNweSBzdHJwYnJrIHN0cnJjaHIgc3Ryc3BuIHN0cnN0ciB0YW5oIHRhbiAnICtcbiAgICAgICd2ZnByaW50ZiB2cHJpbnRmIHZzcHJpbnRmIGVuZGwgaW5pdGlhbGl6ZXJfbGlzdCB1bmlxdWVfcHRyIF9Cb29sIGNvbXBsZXggX0NvbXBsZXggaW1hZ2luYXJ5IF9JbWFnaW5hcnknLFxuICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGxwdHIgTlVMTCdcbiAgfTtcblxuICBjb25zdCBFWFBSRVNTSU9OX0NPTlRBSU5TID0gW1xuICAgIFBSRVBST0NFU1NPUixcbiAgICBDUFBfUFJJTUlUSVZFX1RZUEVTLFxuICAgIENfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICBOVU1CRVJTLFxuICAgIFNUUklOR1NcbiAgXTtcblxuICBjb25zdCBFWFBSRVNTSU9OX0NPTlRFWFQgPSB7XG4gICAgLy8gVGhpcyBtb2RlIGNvdmVycyBleHByZXNzaW9uIGNvbnRleHQgd2hlcmUgd2UgY2FuJ3QgZXhwZWN0IGEgZnVuY3Rpb25cbiAgICAvLyBkZWZpbml0aW9uIGFuZCBzaG91bGRuJ3QgaGlnaGxpZ2h0IGFueXRoaW5nIHRoYXQgbG9va3MgbGlrZSBvbmU6XG4gICAgLy8gYHJldHVybiBzb21lKClgLCBgZWxzZSBpZigpYCwgYCh4KnN1bSgxLCAyKSlgXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC89LyxcbiAgICAgICAgZW5kOiAvOy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25ldyB0aHJvdyByZXR1cm4gZWxzZScsXG4gICAgICAgIGVuZDogLzsvXG4gICAgICB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBFWFBSRVNTSU9OX0NPTlRBSU5TLmNvbmNhdChbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IEVYUFJFU1NJT05fQ09OVEFJTlMuY29uY2F0KFsgJ3NlbGYnIF0pLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdKSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBGVU5DVElPTl9ERUNMQVJBVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW46ICcoJyArIEZVTkNUSU9OX1RZUEVfUkUgKyAnW1xcXFwqJlxcXFxzXSspKycgKyBGVU5DVElPTl9USVRMRSxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBlbmQ6IC9bezs9XS8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC9bXlxcd1xcc1xcKiY6PD4uXS8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgLy8gdG8gcHJldmVudCBpdCBmcm9tIGJlaW5nIGNvbmZ1c2VkIGFzIHRoZSBmdW5jdGlvbiB0aXRsZVxuICAgICAgICBiZWdpbjogREVDTFRZUEVfQVVUT19SRSxcbiAgICAgICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogRlVOQ1RJT05fVElUTEUsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogWyBUSVRMRV9NT0RFIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIFNUUklOR1MsXG4gICAgICAgICAgTlVNQkVSUyxcbiAgICAgICAgICBDUFBfUFJJTUlUSVZFX1RZUEVTLFxuICAgICAgICAgIC8vIENvdW50IG1hdGNoaW5nIHBhcmVudGhlc2VzLlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgICAgICBDX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICBTVFJJTkdTLFxuICAgICAgICAgICAgICBOVU1CRVJTLFxuICAgICAgICAgICAgICBDUFBfUFJJTUlUSVZFX1RZUEVTXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgQ1BQX1BSSU1JVElWRV9UWVBFUyxcbiAgICAgIENfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgUFJFUFJPQ0VTU09SXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0MrKycsXG4gICAgYWxpYXNlczogW1xuICAgICAgJ2NjJyxcbiAgICAgICdjKysnLFxuICAgICAgJ2grKycsXG4gICAgICAnaHBwJyxcbiAgICAgICdoaCcsXG4gICAgICAnaHh4JyxcbiAgICAgICdjeHgnXG4gICAgXSxcbiAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgIGlsbGVnYWw6ICc8LycsXG4gICAgY29udGFpbnM6IFtdLmNvbmNhdChcbiAgICAgIEVYUFJFU1NJT05fQ09OVEVYVCxcbiAgICAgIEZVTkNUSU9OX0RFQ0xBUkFUSU9OLFxuICAgICAgRVhQUkVTU0lPTl9DT05UQUlOUyxcbiAgICAgIFtcbiAgICAgICAgUFJFUFJPQ0VTU09SLFxuICAgICAgICB7IC8vIGNvbnRhaW5lcnM6IGllLCBgdmVjdG9yIDxpbnQ+IHJvb21zICg5KTtgXG4gICAgICAgICAgYmVnaW46ICdcXFxcYihkZXF1ZXxsaXN0fHF1ZXVlfHByaW9yaXR5X3F1ZXVlfHBhaXJ8c3RhY2t8dmVjdG9yfG1hcHxzZXR8Yml0c2V0fG11bHRpc2V0fG11bHRpbWFwfHVub3JkZXJlZF9tYXB8dW5vcmRlcmVkX3NldHx1bm9yZGVyZWRfbXVsdGlzZXR8dW5vcmRlcmVkX211bHRpbWFwfGFycmF5KVxcXFxzKjwnLFxuICAgICAgICAgIGVuZDogJz4nLFxuICAgICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgIENQUF9QUklNSVRJVkVfVFlQRVNcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICc6OicsXG4gICAgICAgICAga2V5d29yZHM6IENQUF9LRVlXT1JEU1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdlbnVtIGNsYXNzIHN0cnVjdCB1bmlvbicsXG4gICAgICAgICAgZW5kOiAvW3s7Ojw+PV0vLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6IFwiZmluYWwgY2xhc3Mgc3RydWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBobGpzLlRJVExFX01PREVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0pLFxuICAgIGV4cG9ydHM6IHtcbiAgICAgIHByZXByb2Nlc3NvcjogUFJFUFJPQ0VTU09SLFxuICAgICAgc3RyaW5nczogU1RSSU5HUyxcbiAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFNcbiAgICB9XG4gIH07XG59XG5cbi8qXG5MYW5ndWFnZTogQXJkdWlub1xuQXV0aG9yOiBTdGVmYW5pYSBNZWxsYWkgPHMubWVsbGFpQGFyZHVpbm8uY2M+XG5EZXNjcmlwdGlvbjogVGhlIEFyZHVpbm/CriBMYW5ndWFnZSBpcyBhIHN1cGVyc2V0IG9mIEMrKy4gVGhpcyBydWxlcyBhcmUgZGVzaWduZWQgdG8gaGlnaGxpZ2h0IHRoZSBBcmR1aW5vwq4gc291cmNlIGNvZGUuIEZvciBpbmZvIGFib3V0IGxhbmd1YWdlIHNlZSBodHRwOi8vd3d3LmFyZHVpbm8uY2MuXG5XZWJzaXRlOiBodHRwczovL3d3dy5hcmR1aW5vLmNjXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXJkdWlubyhobGpzKSB7XG4gIGNvbnN0IEFSRFVJTk9fS1cgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdib29sZWFuIGJ5dGUgd29yZCBTdHJpbmcnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ3NldHVwIGxvb3AgJyArXG4gICAgICAnS2V5Ym9hcmRDb250cm9sbGVyIE1vdXNlQ29udHJvbGxlciBTb2Z0d2FyZVNlcmlhbCAnICtcbiAgICAgICdFdGhlcm5ldFNlcnZlciBFdGhlcm5ldENsaWVudCBMaXF1aWRDcnlzdGFsICcgK1xuICAgICAgJ1JvYm90Q29udHJvbCBHU01Wb2ljZUNhbGwgRXRoZXJuZXRVRFAgRXNwbG9yYVRGVCAnICtcbiAgICAgICdIdHRwQ2xpZW50IFJvYm90TW90b3IgV2lGaUNsaWVudCBHU01TY2FubmVyICcgK1xuICAgICAgJ0ZpbGVTeXN0ZW0gU2NoZWR1bGVyIEdTTVNlcnZlciBZdW5DbGllbnQgWXVuU2VydmVyICcgK1xuICAgICAgJ0lQQWRkcmVzcyBHU01DbGllbnQgR1NNTW9kZW0gS2V5Ym9hcmQgRXRoZXJuZXQgJyArXG4gICAgICAnQ29uc29sZSBHU01CYW5kIEVzcGxvcmEgU3RlcHBlciBQcm9jZXNzICcgK1xuICAgICAgJ1dpRmlVRFAgR1NNX1NNUyBNYWlsYm94IFVTQkhvc3QgRmlybWF0YSBQSW1hZ2UgJyArXG4gICAgICAnQ2xpZW50IFNlcnZlciBHU01QSU4gRmlsZUlPIEJyaWRnZSBTZXJpYWwgJyArXG4gICAgICAnRUVQUk9NIFN0cmVhbSBNb3VzZSBBdWRpbyBTZXJ2byBGaWxlIFRhc2sgJyArXG4gICAgICAnR1BSUyBXaUZpIFdpcmUgVEZUIEdTTSBTUEkgU0QgJyArXG4gICAgICAncnVuU2hlbGxDb21tYW5kQXN5bmNocm9ub3VzbHkgYW5hbG9nV3JpdGVSZXNvbHV0aW9uICcgK1xuICAgICAgJ3JldHJpZXZlQ2FsbGluZ051bWJlciBwcmludEZpcm13YXJlVmVyc2lvbiAnICtcbiAgICAgICdhbmFsb2dSZWFkUmVzb2x1dGlvbiBzZW5kRGlnaXRhbFBvcnRQYWlyICcgK1xuICAgICAgJ25vTGlzdGVuT25Mb2NhbGhvc3QgcmVhZEpveXN0aWNrQnV0dG9uIHNldEZpcm13YXJlVmVyc2lvbiAnICtcbiAgICAgICdyZWFkSm95c3RpY2tTd2l0Y2ggc2Nyb2xsRGlzcGxheVJpZ2h0IGdldFZvaWNlQ2FsbFN0YXR1cyAnICtcbiAgICAgICdzY3JvbGxEaXNwbGF5TGVmdCB3cml0ZU1pY3Jvc2Vjb25kcyBkZWxheU1pY3Jvc2Vjb25kcyAnICtcbiAgICAgICdiZWdpblRyYW5zbWlzc2lvbiBnZXRTaWduYWxTdHJlbmd0aCBydW5Bc3luY2hyb25vdXNseSAnICtcbiAgICAgICdnZXRBc3luY2hyb25vdXNseSBsaXN0ZW5PbkxvY2FsaG9zdCBnZXRDdXJyZW50Q2FycmllciAnICtcbiAgICAgICdyZWFkQWNjZWxlcm9tZXRlciBtZXNzYWdlQXZhaWxhYmxlIHNlbmREaWdpdGFsUG9ydHMgJyArXG4gICAgICAnbGluZUZvbGxvd0NvbmZpZyBjb3VudHJ5TmFtZVdyaXRlIHJ1blNoZWxsQ29tbWFuZCAnICtcbiAgICAgICdyZWFkU3RyaW5nVW50aWwgcmV3aW5kRGlyZWN0b3J5IHJlYWRUZW1wZXJhdHVyZSAnICtcbiAgICAgICdzZXRDbG9ja0RpdmlkZXIgcmVhZExpZ2h0U2Vuc29yIGVuZFRyYW5zbWlzc2lvbiAnICtcbiAgICAgICdhbmFsb2dSZWZlcmVuY2UgZGV0YWNoSW50ZXJydXB0IGNvdW50cnlOYW1lUmVhZCAnICtcbiAgICAgICdhdHRhY2hJbnRlcnJ1cHQgZW5jcnlwdGlvblR5cGUgcmVhZEJ5dGVzVW50aWwgJyArXG4gICAgICAncm9ib3ROYW1lV3JpdGUgcmVhZE1pY3JvcGhvbmUgcm9ib3ROYW1lUmVhZCBjaXR5TmFtZVdyaXRlICcgK1xuICAgICAgJ3VzZXJOYW1lV3JpdGUgcmVhZEpveXN0aWNrWSByZWFkSm95c3RpY2tYIG1vdXNlUmVsZWFzZWQgJyArXG4gICAgICAnb3Blbk5leHRGaWxlIHNjYW5OZXR3b3JrcyBub0ludGVycnVwdHMgZGlnaXRhbFdyaXRlICcgK1xuICAgICAgJ2JlZ2luU3BlYWtlciBtb3VzZVByZXNzZWQgaXNBY3Rpb25Eb25lIG1vdXNlRHJhZ2dlZCAnICtcbiAgICAgICdkaXNwbGF5TG9nb3Mgbm9BdXRvc2Nyb2xsIGFkZFBhcmFtZXRlciByZW1vdGVOdW1iZXIgJyArXG4gICAgICAnZ2V0TW9kaWZpZXJzIGtleWJvYXJkUmVhZCB1c2VyTmFtZVJlYWQgd2FpdENvbnRpbnVlICcgK1xuICAgICAgJ3Byb2Nlc3NJbnB1dCBwYXJzZUNvbW1hbmQgcHJpbnRWZXJzaW9uIHJlYWROZXR3b3JrcyAnICtcbiAgICAgICd3cml0ZU1lc3NhZ2UgYmxpbmtWZXJzaW9uIGNpdHlOYW1lUmVhZCByZWFkTWVzc2FnZSAnICtcbiAgICAgICdzZXREYXRhTW9kZSBwYXJzZVBhY2tldCBpc0xpc3RlbmluZyBzZXRCaXRPcmRlciAnICtcbiAgICAgICdiZWdpblBhY2tldCBpc0RpcmVjdG9yeSBtb3RvcnNXcml0ZSBkcmF3Q29tcGFzcyAnICtcbiAgICAgICdkaWdpdGFsUmVhZCBjbGVhclNjcmVlbiBzZXJpYWxFdmVudCByaWdodFRvTGVmdCAnICtcbiAgICAgICdzZXRUZXh0U2l6ZSBsZWZ0VG9SaWdodCByZXF1ZXN0RnJvbSBrZXlSZWxlYXNlZCAnICtcbiAgICAgICdjb21wYXNzUmVhZCBhbmFsb2dXcml0ZSBpbnRlcnJ1cHRzIFdpRmlTZXJ2ZXIgJyArXG4gICAgICAnZGlzY29ubmVjdCBwbGF5TWVsb2R5IHBhcnNlRmxvYXQgYXV0b3Njcm9sbCAnICtcbiAgICAgICdnZXRQSU5Vc2VkIHNldFBJTlVzZWQgc2V0VGltZW91dCBzZW5kQW5hbG9nICcgK1xuICAgICAgJ3JlYWRTbGlkZXIgYW5hbG9nUmVhZCBiZWdpbldyaXRlIGNyZWF0ZUNoYXIgJyArXG4gICAgICAnbW90b3JzU3RvcCBrZXlQcmVzc2VkIHRlbXBvV3JpdGUgcmVhZEJ1dHRvbiAnICtcbiAgICAgICdzdWJuZXRNYXNrIGRlYnVnUHJpbnQgbWFjQWRkcmVzcyB3cml0ZUdyZWVuICcgK1xuICAgICAgJ3JhbmRvbVNlZWQgYXR0YWNoR1BSUyByZWFkU3RyaW5nIHNlbmRTdHJpbmcgJyArXG4gICAgICAncmVtb3RlUG9ydCByZWxlYXNlQWxsIG1vdXNlTW92ZWQgYmFja2dyb3VuZCAnICtcbiAgICAgICdnZXRYQ2hhbmdlIGdldFlDaGFuZ2UgYW5zd2VyQ2FsbCBnZXRSZXN1bHQgJyArXG4gICAgICAndm9pY2VDYWxsIGVuZFBhY2tldCBjb25zdHJhaW4gZ2V0U29ja2V0IHdyaXRlSlNPTiAnICtcbiAgICAgICdnZXRCdXR0b24gYXZhaWxhYmxlIGNvbm5lY3RlZCBmaW5kVW50aWwgcmVhZEJ5dGVzICcgK1xuICAgICAgJ2V4aXRWYWx1ZSByZWFkR3JlZW4gd3JpdGVCbHVlIHN0YXJ0TG9vcCBJUEFkZHJlc3MgJyArXG4gICAgICAnaXNQcmVzc2VkIHNlbmRTeXNleCBwYXVzZU1vZGUgZ2F0ZXdheUlQIHNldEN1cnNvciAnICtcbiAgICAgICdnZXRPZW1LZXkgdHVuZVdyaXRlIG5vRGlzcGxheSBsb2FkSW1hZ2Ugc3dpdGNoUElOICcgK1xuICAgICAgJ29uUmVxdWVzdCBvblJlY2VpdmUgY2hhbmdlUElOIHBsYXlGaWxlIG5vQnVmZmVyICcgK1xuICAgICAgJ3BhcnNlSW50IG92ZXJmbG93IGNoZWNrUElOIGtub2JSZWFkIGJlZ2luVEZUICcgK1xuICAgICAgJ2JpdENsZWFyIHVwZGF0ZUlSIGJpdFdyaXRlIHBvc2l0aW9uIHdyaXRlUkdCICcgK1xuICAgICAgJ2hpZ2hCeXRlIHdyaXRlUmVkIHNldFNwZWVkIHJlYWRCbHVlIG5vU3Ryb2tlICcgK1xuICAgICAgJ3JlbW90ZUlQIHRyYW5zZmVyIHNodXRkb3duIGhhbmdDYWxsIGJlZ2luU01TICcgK1xuICAgICAgJ2VuZFdyaXRlIGF0dGFjaGVkIG1haW50YWluIG5vQ3Vyc29yIGNoZWNrUmVnICcgK1xuICAgICAgJ2NoZWNrUFVLIHNoaWZ0T3V0IGlzVmFsaWQgc2hpZnRJbiBwdWxzZUluICcgK1xuICAgICAgJ2Nvbm5lY3QgcHJpbnRsbiBsb2NhbElQIHBpbk1vZGUgZ2V0SU1FSSAnICtcbiAgICAgICdkaXNwbGF5IG5vQmxpbmsgcHJvY2VzcyBnZXRCYW5kIHJ1bm5pbmcgYmVnaW5TRCAnICtcbiAgICAgICdkcmF3Qk1QIGxvd0J5dGUgc2V0QmFuZCByZWxlYXNlIGJpdFJlYWQgcHJlcGFyZSAnICtcbiAgICAgICdwb2ludFRvIHJlYWRSZWQgc2V0TW9kZSBub0ZpbGwgcmVtb3ZlIGxpc3RlbiAnICtcbiAgICAgICdzdHJva2UgZGV0YWNoIGF0dGFjaCBub1RvbmUgZXhpc3RzIGJ1ZmZlciAnICtcbiAgICAgICdoZWlnaHQgYml0U2V0IGNpcmNsZSBjb25maWcgY3Vyc29yIHJhbmRvbSAnICtcbiAgICAgICdJUnJlYWQgc2V0RE5TIGVuZFNNUyBnZXRLZXkgbWljcm9zICcgK1xuICAgICAgJ21pbGxpcyBiZWdpbiBwcmludCB3cml0ZSByZWFkeSBmbHVzaCB3aWR0aCAnICtcbiAgICAgICdpc1BJTiBibGluayBjbGVhciBwcmVzcyBta2RpciBybWRpciBjbG9zZSAnICtcbiAgICAgICdwb2ludCB5aWVsZCBpbWFnZSBCU1NJRCBjbGljayBkZWxheSAnICtcbiAgICAgICdyZWFkIHRleHQgbW92ZSBwZWVrIGJlZXAgcmVjdCBsaW5lIG9wZW4gJyArXG4gICAgICAnc2VlayBmaWxsIHNpemUgdHVybiBzdG9wIGhvbWUgZmluZCAnICtcbiAgICAgICdzdGVwIHRvbmUgc3FydCBSU1NJIFNTSUQgJyArXG4gICAgICAnZW5kIGJpdCB0YW4gY29zIHNpbiBwb3cgbWFwIGFicyBtYXggJyArXG4gICAgICAnbWluIGdldCBydW4gcHV0JyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ0RJR0lUQUxfTUVTU0FHRSBGSVJNQVRBX1NUUklORyBBTkFMT0dfTUVTU0FHRSAnICtcbiAgICAgICdSRVBPUlRfRElHSVRBTCBSRVBPUlRfQU5BTE9HIElOUFVUX1BVTExVUCAnICtcbiAgICAgICdTRVRfUElOX01PREUgSU5URVJOQUwyVjU2IFNZU1RFTV9SRVNFVCBMRURfQlVJTFRJTiAnICtcbiAgICAgICdJTlRFUk5BTDFWMSBTWVNFWF9TVEFSVCBJTlRFUk5BTCBFWFRFUk5BTCAnICtcbiAgICAgICdERUZBVUxUIE9VVFBVVCBJTlBVVCBISUdIIExPVydcbiAgfTtcblxuICBjb25zdCBBUkRVSU5PID0gY1BsdXNQbHVzKGhsanMpO1xuXG4gIGNvbnN0IGt3cyA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZyxhbnk+fSAqLyAoQVJEVUlOTy5rZXl3b3Jkcyk7XG5cbiAga3dzLmtleXdvcmQgKz0gJyAnICsgQVJEVUlOT19LVy5rZXl3b3JkO1xuICBrd3MubGl0ZXJhbCArPSAnICcgKyBBUkRVSU5PX0tXLmxpdGVyYWw7XG4gIGt3cy5idWlsdF9pbiArPSAnICcgKyBBUkRVSU5PX0tXLmJ1aWx0X2luO1xuXG4gIEFSRFVJTk8ubmFtZSA9ICdBcmR1aW5vJztcbiAgQVJEVUlOTy5hbGlhc2VzID0gWydpbm8nXTtcbiAgQVJEVUlOTy5zdXBlcnNldE9mID0gXCJjcHBcIjtcblxuICByZXR1cm4gQVJEVUlOTztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcmR1aW5vO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==