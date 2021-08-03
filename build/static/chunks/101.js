(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[101],{

/***/ "./node_modules/highlight.js/lib/languages/lsl.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/lsl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: LSL (Linden Scripting Language)
Description: The Linden Scripting Language is used in Second Life by Linden Labs.
Author: Builder's Brewery <buildersbrewery@gmail.com>
Website: http://wiki.secondlife.com/wiki/LSL_Portal
Category: scripting
*/

function lsl(hljs) {

    var LSL_STRING_ESCAPE_CHARS = {
        className: 'subst',
        begin: /\\[tn"\\]/
    };

    var LSL_STRINGS = {
        className: 'string',
        begin: '"',
        end: '"',
        contains: [
            LSL_STRING_ESCAPE_CHARS
        ]
    };

    var LSL_NUMBERS = {
        className: 'number',
        relevance:0,
        begin: hljs.C_NUMBER_RE
    };

    var LSL_CONSTANTS = {
        className: 'literal',
        variants: [
            {
                begin: '\\b(PI|TWO_PI|PI_BY_TWO|DEG_TO_RAD|RAD_TO_DEG|SQRT2)\\b'
            },
            {
                begin: '\\b(XP_ERROR_(EXPERIENCES_DISABLED|EXPERIENCE_(DISABLED|SUSPENDED)|INVALID_(EXPERIENCE|PARAMETERS)|KEY_NOT_FOUND|MATURITY_EXCEEDED|NONE|NOT_(FOUND|PERMITTED(_LAND)?)|NO_EXPERIENCE|QUOTA_EXCEEDED|RETRY_UPDATE|STORAGE_EXCEPTION|STORE_DISABLED|THROTTLED|UNKNOWN_ERROR)|JSON_APPEND|STATUS_(PHYSICS|ROTATE_[XYZ]|PHANTOM|SANDBOX|BLOCK_GRAB(_OBJECT)?|(DIE|RETURN)_AT_EDGE|CAST_SHADOWS|OK|MALFORMED_PARAMS|TYPE_MISMATCH|BOUNDS_ERROR|NOT_(FOUND|SUPPORTED)|INTERNAL_ERROR|WHITELIST_FAILED)|AGENT(_(BY_(LEGACY_|USER)NAME|FLYING|ATTACHMENTS|SCRIPTED|MOUSELOOK|SITTING|ON_OBJECT|AWAY|WALKING|IN_AIR|TYPING|CROUCHING|BUSY|ALWAYS_RUN|AUTOPILOT|LIST_(PARCEL(_OWNER)?|REGION)))?|CAMERA_(PITCH|DISTANCE|BEHINDNESS_(ANGLE|LAG)|(FOCUS|POSITION)(_(THRESHOLD|LOCKED|LAG))?|FOCUS_OFFSET|ACTIVE)|ANIM_ON|LOOP|REVERSE|PING_PONG|SMOOTH|ROTATE|SCALE|ALL_SIDES|LINK_(ROOT|SET|ALL_(OTHERS|CHILDREN)|THIS)|ACTIVE|PASS(IVE|_(ALWAYS|IF_NOT_HANDLED|NEVER))|SCRIPTED|CONTROL_(FWD|BACK|(ROT_)?(LEFT|RIGHT)|UP|DOWN|(ML_)?LBUTTON)|PERMISSION_(RETURN_OBJECTS|DEBIT|OVERRIDE_ANIMATIONS|SILENT_ESTATE_MANAGEMENT|TAKE_CONTROLS|TRIGGER_ANIMATION|ATTACH|CHANGE_LINKS|(CONTROL|TRACK)_CAMERA|TELEPORT)|INVENTORY_(TEXTURE|SOUND|OBJECT|SCRIPT|LANDMARK|CLOTHING|NOTECARD|BODYPART|ANIMATION|GESTURE|ALL|NONE)|CHANGED_(INVENTORY|COLOR|SHAPE|SCALE|TEXTURE|LINK|ALLOWED_DROP|OWNER|REGION(_START)?|TELEPORT|MEDIA)|OBJECT_(CLICK_ACTION|HOVER_HEIGHT|LAST_OWNER_ID|(PHYSICS|SERVER|STREAMING)_COST|UNKNOWN_DETAIL|CHARACTER_TIME|PHANTOM|PHYSICS|TEMP_(ATTACHED|ON_REZ)|NAME|DESC|POS|PRIM_(COUNT|EQUIVALENCE)|RETURN_(PARCEL(_OWNER)?|REGION)|REZZER_KEY|ROO?T|VELOCITY|OMEGA|OWNER|GROUP(_TAG)?|CREATOR|ATTACHED_(POINT|SLOTS_AVAILABLE)|RENDER_WEIGHT|(BODY_SHAPE|PATHFINDING)_TYPE|(RUNNING|TOTAL)_SCRIPT_COUNT|TOTAL_INVENTORY_COUNT|SCRIPT_(MEMORY|TIME))|TYPE_(INTEGER|FLOAT|STRING|KEY|VECTOR|ROTATION|INVALID)|(DEBUG|PUBLIC)_CHANNEL|ATTACH_(AVATAR_CENTER|CHEST|HEAD|BACK|PELVIS|MOUTH|CHIN|NECK|NOSE|BELLY|[LR](SHOULDER|HAND|FOOT|EAR|EYE|[UL](ARM|LEG)|HIP)|(LEFT|RIGHT)_PEC|HUD_(CENTER_[12]|TOP_(RIGHT|CENTER|LEFT)|BOTTOM(_(RIGHT|LEFT))?)|[LR]HAND_RING1|TAIL_(BASE|TIP)|[LR]WING|FACE_(JAW|[LR]EAR|[LR]EYE|TOUNGE)|GROIN|HIND_[LR]FOOT)|LAND_(LEVEL|RAISE|LOWER|SMOOTH|NOISE|REVERT)|DATA_(ONLINE|NAME|BORN|SIM_(POS|STATUS|RATING)|PAYINFO)|PAYMENT_INFO_(ON_FILE|USED)|REMOTE_DATA_(CHANNEL|REQUEST|REPLY)|PSYS_(PART_(BF_(ZERO|ONE(_MINUS_(DEST_COLOR|SOURCE_(ALPHA|COLOR)))?|DEST_COLOR|SOURCE_(ALPHA|COLOR))|BLEND_FUNC_(DEST|SOURCE)|FLAGS|(START|END)_(COLOR|ALPHA|SCALE|GLOW)|MAX_AGE|(RIBBON|WIND|INTERP_(COLOR|SCALE)|BOUNCE|FOLLOW_(SRC|VELOCITY)|TARGET_(POS|LINEAR)|EMISSIVE)_MASK)|SRC_(MAX_AGE|PATTERN|ANGLE_(BEGIN|END)|BURST_(RATE|PART_COUNT|RADIUS|SPEED_(MIN|MAX))|ACCEL|TEXTURE|TARGET_KEY|OMEGA|PATTERN_(DROP|EXPLODE|ANGLE(_CONE(_EMPTY)?)?)))|VEHICLE_(REFERENCE_FRAME|TYPE_(NONE|SLED|CAR|BOAT|AIRPLANE|BALLOON)|(LINEAR|ANGULAR)_(FRICTION_TIMESCALE|MOTOR_DIRECTION)|LINEAR_MOTOR_OFFSET|HOVER_(HEIGHT|EFFICIENCY|TIMESCALE)|BUOYANCY|(LINEAR|ANGULAR)_(DEFLECTION_(EFFICIENCY|TIMESCALE)|MOTOR_(DECAY_)?TIMESCALE)|VERTICAL_ATTRACTION_(EFFICIENCY|TIMESCALE)|BANKING_(EFFICIENCY|MIX|TIMESCALE)|FLAG_(NO_DEFLECTION_UP|LIMIT_(ROLL_ONLY|MOTOR_UP)|HOVER_((WATER|TERRAIN|UP)_ONLY|GLOBAL_HEIGHT)|MOUSELOOK_(STEER|BANK)|CAMERA_DECOUPLED))|PRIM_(ALLOW_UNSIT|ALPHA_MODE(_(BLEND|EMISSIVE|MASK|NONE))?|NORMAL|SPECULAR|TYPE(_(BOX|CYLINDER|PRISM|SPHERE|TORUS|TUBE|RING|SCULPT))?|HOLE_(DEFAULT|CIRCLE|SQUARE|TRIANGLE)|MATERIAL(_(STONE|METAL|GLASS|WOOD|FLESH|PLASTIC|RUBBER))?|SHINY_(NONE|LOW|MEDIUM|HIGH)|BUMP_(NONE|BRIGHT|DARK|WOOD|BARK|BRICKS|CHECKER|CONCRETE|TILE|STONE|DISKS|GRAVEL|BLOBS|SIDING|LARGETILE|STUCCO|SUCTION|WEAVE)|TEXGEN_(DEFAULT|PLANAR)|SCRIPTED_SIT_ONLY|SCULPT_(TYPE_(SPHERE|TORUS|PLANE|CYLINDER|MASK)|FLAG_(MIRROR|INVERT))|PHYSICS(_(SHAPE_(CONVEX|NONE|PRIM|TYPE)))?|(POS|ROT)_LOCAL|SLICE|TEXT|FLEXIBLE|POINT_LIGHT|TEMP_ON_REZ|PHANTOM|POSITION|SIT_TARGET|SIZE|ROTATION|TEXTURE|NAME|OMEGA|DESC|LINK_TARGET|COLOR|BUMP_SHINY|FULLBRIGHT|TEXGEN|GLOW|MEDIA_(ALT_IMAGE_ENABLE|CONTROLS|(CURRENT|HOME)_URL|AUTO_(LOOP|PLAY|SCALE|ZOOM)|FIRST_CLICK_INTERACT|(WIDTH|HEIGHT)_PIXELS|WHITELIST(_ENABLE)?|PERMS_(INTERACT|CONTROL)|PARAM_MAX|CONTROLS_(STANDARD|MINI)|PERM_(NONE|OWNER|GROUP|ANYONE)|MAX_(URL_LENGTH|WHITELIST_(SIZE|COUNT)|(WIDTH|HEIGHT)_PIXELS)))|MASK_(BASE|OWNER|GROUP|EVERYONE|NEXT)|PERM_(TRANSFER|MODIFY|COPY|MOVE|ALL)|PARCEL_(MEDIA_COMMAND_(STOP|PAUSE|PLAY|LOOP|TEXTURE|URL|TIME|AGENT|UNLOAD|AUTO_ALIGN|TYPE|SIZE|DESC|LOOP_SET)|FLAG_(ALLOW_(FLY|(GROUP_)?SCRIPTS|LANDMARK|TERRAFORM|DAMAGE|CREATE_(GROUP_)?OBJECTS)|USE_(ACCESS_(GROUP|LIST)|BAN_LIST|LAND_PASS_LIST)|LOCAL_SOUND_ONLY|RESTRICT_PUSHOBJECT|ALLOW_(GROUP|ALL)_OBJECT_ENTRY)|COUNT_(TOTAL|OWNER|GROUP|OTHER|SELECTED|TEMP)|DETAILS_(NAME|DESC|OWNER|GROUP|AREA|ID|SEE_AVATARS))|LIST_STAT_(MAX|MIN|MEAN|MEDIAN|STD_DEV|SUM(_SQUARES)?|NUM_COUNT|GEOMETRIC_MEAN|RANGE)|PAY_(HIDE|DEFAULT)|REGION_FLAG_(ALLOW_DAMAGE|FIXED_SUN|BLOCK_TERRAFORM|SANDBOX|DISABLE_(COLLISIONS|PHYSICS)|BLOCK_FLY|ALLOW_DIRECT_TELEPORT|RESTRICT_PUSHOBJECT)|HTTP_(METHOD|MIMETYPE|BODY_(MAXLENGTH|TRUNCATED)|CUSTOM_HEADER|PRAGMA_NO_CACHE|VERBOSE_THROTTLE|VERIFY_CERT)|SIT_(INVALID_(AGENT|LINK_OBJECT)|NO(T_EXPERIENCE|_(ACCESS|EXPERIENCE_PERMISSION|SIT_TARGET)))|STRING_(TRIM(_(HEAD|TAIL))?)|CLICK_ACTION_(NONE|TOUCH|SIT|BUY|PAY|OPEN(_MEDIA)?|PLAY|ZOOM)|TOUCH_INVALID_FACE|PROFILE_(NONE|SCRIPT_MEMORY)|RC_(DATA_FLAGS|DETECT_PHANTOM|GET_(LINK_NUM|NORMAL|ROOT_KEY)|MAX_HITS|REJECT_(TYPES|AGENTS|(NON)?PHYSICAL|LAND))|RCERR_(CAST_TIME_EXCEEDED|SIM_PERF_LOW|UNKNOWN)|ESTATE_ACCESS_(ALLOWED_(AGENT|GROUP)_(ADD|REMOVE)|BANNED_AGENT_(ADD|REMOVE))|DENSITY|FRICTION|RESTITUTION|GRAVITY_MULTIPLIER|KFM_(COMMAND|CMD_(PLAY|STOP|PAUSE)|MODE|FORWARD|LOOP|PING_PONG|REVERSE|DATA|ROTATION|TRANSLATION)|ERR_(GENERIC|PARCEL_PERMISSIONS|MALFORMED_PARAMS|RUNTIME_PERMISSIONS|THROTTLED)|CHARACTER_(CMD_((SMOOTH_)?STOP|JUMP)|DESIRED_(TURN_)?SPEED|RADIUS|STAY_WITHIN_PARCEL|LENGTH|ORIENTATION|ACCOUNT_FOR_SKIPPED_FRAMES|AVOIDANCE_MODE|TYPE(_([ABCD]|NONE))?|MAX_(DECEL|TURN_RADIUS|(ACCEL|SPEED)))|PURSUIT_(OFFSET|FUZZ_FACTOR|GOAL_TOLERANCE|INTERCEPT)|REQUIRE_LINE_OF_SIGHT|FORCE_DIRECT_PATH|VERTICAL|HORIZONTAL|AVOID_(CHARACTERS|DYNAMIC_OBSTACLES|NONE)|PU_(EVADE_(HIDDEN|SPOTTED)|FAILURE_(DYNAMIC_PATHFINDING_DISABLED|INVALID_(GOAL|START)|NO_(NAVMESH|VALID_DESTINATION)|OTHER|TARGET_GONE|(PARCEL_)?UNREACHABLE)|(GOAL|SLOWDOWN_DISTANCE)_REACHED)|TRAVERSAL_TYPE(_(FAST|NONE|SLOW))?|CONTENT_TYPE_(ATOM|FORM|HTML|JSON|LLSD|RSS|TEXT|XHTML|XML)|GCNP_(RADIUS|STATIC)|(PATROL|WANDER)_PAUSE_AT_WAYPOINTS|OPT_(AVATAR|CHARACTER|EXCLUSION_VOLUME|LEGACY_LINKSET|MATERIAL_VOLUME|OTHER|STATIC_OBSTACLE|WALKABLE)|SIM_STAT_PCT_CHARS_STEPPED)\\b'
            },
            {
                begin: '\\b(FALSE|TRUE)\\b'
            },
            {
                begin: '\\b(ZERO_ROTATION)\\b'
            },
            {
                begin: '\\b(EOF|JSON_(ARRAY|DELETE|FALSE|INVALID|NULL|NUMBER|OBJECT|STRING|TRUE)|NULL_KEY|TEXTURE_(BLANK|DEFAULT|MEDIA|PLYWOOD|TRANSPARENT)|URL_REQUEST_(GRANTED|DENIED))\\b'
            },
            {
                begin: '\\b(ZERO_VECTOR|TOUCH_INVALID_(TEXCOORD|VECTOR))\\b'
            }
        ]
    };

    var LSL_FUNCTIONS = {
        className: 'built_in',
        begin: '\\b(ll(AgentInExperience|(Create|DataSize|Delete|KeyCount|Keys|Read|Update)KeyValue|GetExperience(Details|ErrorMessage)|ReturnObjectsBy(ID|Owner)|Json(2List|[GS]etValue|ValueType)|Sin|Cos|Tan|Atan2|Sqrt|Pow|Abs|Fabs|Frand|Floor|Ceil|Round|Vec(Mag|Norm|Dist)|Rot(Between|2(Euler|Fwd|Left|Up))|(Euler|Axes)2Rot|Whisper|(Region|Owner)?Say|Shout|Listen(Control|Remove)?|Sensor(Repeat|Remove)?|Detected(Name|Key|Owner|Type|Pos|Vel|Grab|Rot|Group|LinkNumber)|Die|Ground|Wind|([GS]et)(AnimationOverride|MemoryLimit|PrimMediaParams|ParcelMusicURL|Object(Desc|Name)|PhysicsMaterial|Status|Scale|Color|Alpha|Texture|Pos|Rot|Force|Torque)|ResetAnimationOverride|(Scale|Offset|Rotate)Texture|(Rot)?Target(Remove)?|(Stop)?MoveToTarget|Apply(Rotational)?Impulse|Set(KeyframedMotion|ContentType|RegionPos|(Angular)?Velocity|Buoyancy|HoverHeight|ForceAndTorque|TimerEvent|ScriptState|Damage|TextureAnim|Sound(Queueing|Radius)|Vehicle(Type|(Float|Vector|Rotation)Param)|(Touch|Sit)?Text|Camera(Eye|At)Offset|PrimitiveParams|ClickAction|Link(Alpha|Color|PrimitiveParams(Fast)?|Texture(Anim)?|Camera|Media)|RemoteScriptAccessPin|PayPrice|LocalRot)|ScaleByFactor|Get((Max|Min)ScaleFactor|ClosestNavPoint|StaticPath|SimStats|Env|PrimitiveParams|Link(PrimitiveParams|Number(OfSides)?|Key|Name|Media)|HTTPHeader|FreeURLs|Object(Details|PermMask|PrimCount)|Parcel(MaxPrims|Details|Prim(Count|Owners))|Attached(List)?|(SPMax|Free|Used)Memory|Region(Name|TimeDilation|FPS|Corner|AgentCount)|Root(Position|Rotation)|UnixTime|(Parcel|Region)Flags|(Wall|GMT)clock|SimulatorHostname|BoundingBox|GeometricCenter|Creator|NumberOf(Prims|NotecardLines|Sides)|Animation(List)?|(Camera|Local)(Pos|Rot)|Vel|Accel|Omega|Time(stamp|OfDay)|(Object|CenterOf)?Mass|MassMKS|Energy|Owner|(Owner)?Key|SunDirection|Texture(Offset|Scale|Rot)|Inventory(Number|Name|Key|Type|Creator|PermMask)|Permissions(Key)?|StartParameter|List(Length|EntryType)|Date|Agent(Size|Info|Language|List)|LandOwnerAt|NotecardLine|Script(Name|State))|(Get|Reset|GetAndReset)Time|PlaySound(Slave)?|LoopSound(Master|Slave)?|(Trigger|Stop|Preload)Sound|((Get|Delete)Sub|Insert)String|To(Upper|Lower)|Give(InventoryList|Money)|RezObject|(Stop)?LookAt|Sleep|CollisionFilter|(Take|Release)Controls|DetachFromAvatar|AttachToAvatar(Temp)?|InstantMessage|(GetNext)?Email|StopHover|MinEventDelay|RotLookAt|String(Length|Trim)|(Start|Stop)Animation|TargetOmega|Request(Experience)?Permissions|(Create|Break)Link|BreakAllLinks|(Give|Remove)Inventory|Water|PassTouches|Request(Agent|Inventory)Data|TeleportAgent(Home|GlobalCoords)?|ModifyLand|CollisionSound|ResetScript|MessageLinked|PushObject|PassCollisions|AxisAngle2Rot|Rot2(Axis|Angle)|A(cos|sin)|AngleBetween|AllowInventoryDrop|SubStringIndex|List2(CSV|Integer|Json|Float|String|Key|Vector|Rot|List(Strided)?)|DeleteSubList|List(Statistics|Sort|Randomize|(Insert|Find|Replace)List)|EdgeOfWorld|AdjustSoundVolume|Key2Name|TriggerSoundLimited|EjectFromLand|(CSV|ParseString)2List|OverMyLand|SameGroup|UnSit|Ground(Slope|Normal|Contour)|GroundRepel|(Set|Remove)VehicleFlags|SitOnLink|(AvatarOn)?(Link)?SitTarget|Script(Danger|Profiler)|Dialog|VolumeDetect|ResetOtherScript|RemoteLoadScriptPin|(Open|Close)RemoteDataChannel|SendRemoteData|RemoteDataReply|(Integer|String)ToBase64|XorBase64|Log(10)?|Base64To(String|Integer)|ParseStringKeepNulls|RezAtRoot|RequestSimulatorData|ForceMouselook|(Load|Release|(E|Une)scape)URL|ParcelMedia(CommandList|Query)|ModPow|MapDestination|(RemoveFrom|AddTo|Reset)Land(Pass|Ban)List|(Set|Clear)CameraParams|HTTP(Request|Response)|TextBox|DetectedTouch(UV|Face|Pos|(N|Bin)ormal|ST)|(MD5|SHA1|DumpList2)String|Request(Secure)?URL|Clear(Prim|Link)Media|(Link)?ParticleSystem|(Get|Request)(Username|DisplayName)|RegionSayTo|CastRay|GenerateKey|TransferLindenDollars|ManageEstateAccess|(Create|Delete)Character|ExecCharacterCmd|Evade|FleeFrom|NavigateTo|PatrolPoints|Pursue|UpdateCharacter|WanderWithin))\\b'
    };

    return {
        name: 'LSL (Linden Scripting Language)',
        illegal: ':',
        contains: [
            LSL_STRINGS,
            {
                className: 'comment',
                variants: [
                    hljs.COMMENT('//', '$'),
                    hljs.COMMENT('/\\*', '\\*/')
                ],
                relevance: 0
            },
            LSL_NUMBERS,
            {
                className: 'section',
                variants: [
                    {
                        begin: '\\b(state|default)\\b'
                    },
                    {
                        begin: '\\b(state_(entry|exit)|touch(_(start|end))?|(land_)?collision(_(start|end))?|timer|listen|(no_)?sensor|control|(not_)?at_(rot_)?target|money|email|experience_permissions(_denied)?|run_time_permissions|changed|attach|dataserver|moving_(start|end)|link_message|(on|object)_rez|remote_data|http_re(sponse|quest)|path_update|transaction_result)\\b'
                    }
                ]
            },
            LSL_FUNCTIONS,
            LSL_CONSTANTS,
            {
                className: 'type',
                begin: '\\b(integer|float|string|key|vector|quaternion|rotation|list)\\b'
            }
        ]
    };
}

module.exports = lsl;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xzbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IExTTCAoTGluZGVuIFNjcmlwdGluZyBMYW5ndWFnZSlcbkRlc2NyaXB0aW9uOiBUaGUgTGluZGVuIFNjcmlwdGluZyBMYW5ndWFnZSBpcyB1c2VkIGluIFNlY29uZCBMaWZlIGJ5IExpbmRlbiBMYWJzLlxuQXV0aG9yOiBCdWlsZGVyJ3MgQnJld2VyeSA8YnVpbGRlcnNicmV3ZXJ5QGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHA6Ly93aWtpLnNlY29uZGxpZmUuY29tL3dpa2kvTFNMX1BvcnRhbFxuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuKi9cblxuZnVuY3Rpb24gbHNsKGhsanMpIHtcblxuICAgIHZhciBMU0xfU1RSSU5HX0VTQ0FQRV9DSEFSUyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgICAgICBiZWdpbjogL1xcXFxbdG5cIlxcXFxdL1xuICAgIH07XG5cbiAgICB2YXIgTFNMX1NUUklOR1MgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBMU0xfU1RSSU5HX0VTQ0FQRV9DSEFSU1xuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciBMU0xfTlVNQkVSUyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgcmVsZXZhbmNlOjAsXG4gICAgICAgIGJlZ2luOiBobGpzLkNfTlVNQkVSX1JFXG4gICAgfTtcblxuICAgIHZhciBMU0xfQ09OU1RBTlRTID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKFBJfFRXT19QSXxQSV9CWV9UV098REVHX1RPX1JBRHxSQURfVE9fREVHfFNRUlQyKVxcXFxiJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKFhQX0VSUk9SXyhFWFBFUklFTkNFU19ESVNBQkxFRHxFWFBFUklFTkNFXyhESVNBQkxFRHxTVVNQRU5ERUQpfElOVkFMSURfKEVYUEVSSUVOQ0V8UEFSQU1FVEVSUyl8S0VZX05PVF9GT1VORHxNQVRVUklUWV9FWENFRURFRHxOT05FfE5PVF8oRk9VTkR8UEVSTUlUVEVEKF9MQU5EKT8pfE5PX0VYUEVSSUVOQ0V8UVVPVEFfRVhDRUVERUR8UkVUUllfVVBEQVRFfFNUT1JBR0VfRVhDRVBUSU9OfFNUT1JFX0RJU0FCTEVEfFRIUk9UVExFRHxVTktOT1dOX0VSUk9SKXxKU09OX0FQUEVORHxTVEFUVVNfKFBIWVNJQ1N8Uk9UQVRFX1tYWVpdfFBIQU5UT018U0FOREJPWHxCTE9DS19HUkFCKF9PQkpFQ1QpP3woRElFfFJFVFVSTilfQVRfRURHRXxDQVNUX1NIQURPV1N8T0t8TUFMRk9STUVEX1BBUkFNU3xUWVBFX01JU01BVENIfEJPVU5EU19FUlJPUnxOT1RfKEZPVU5EfFNVUFBPUlRFRCl8SU5URVJOQUxfRVJST1J8V0hJVEVMSVNUX0ZBSUxFRCl8QUdFTlQoXyhCWV8oTEVHQUNZX3xVU0VSKU5BTUV8RkxZSU5HfEFUVEFDSE1FTlRTfFNDUklQVEVEfE1PVVNFTE9PS3xTSVRUSU5HfE9OX09CSkVDVHxBV0FZfFdBTEtJTkd8SU5fQUlSfFRZUElOR3xDUk9VQ0hJTkd8QlVTWXxBTFdBWVNfUlVOfEFVVE9QSUxPVHxMSVNUXyhQQVJDRUwoX09XTkVSKT98UkVHSU9OKSkpP3xDQU1FUkFfKFBJVENIfERJU1RBTkNFfEJFSElORE5FU1NfKEFOR0xFfExBRyl8KEZPQ1VTfFBPU0lUSU9OKShfKFRIUkVTSE9MRHxMT0NLRUR8TEFHKSk/fEZPQ1VTX09GRlNFVHxBQ1RJVkUpfEFOSU1fT058TE9PUHxSRVZFUlNFfFBJTkdfUE9OR3xTTU9PVEh8Uk9UQVRFfFNDQUxFfEFMTF9TSURFU3xMSU5LXyhST09UfFNFVHxBTExfKE9USEVSU3xDSElMRFJFTil8VEhJUyl8QUNUSVZFfFBBU1MoSVZFfF8oQUxXQVlTfElGX05PVF9IQU5ETEVEfE5FVkVSKSl8U0NSSVBURUR8Q09OVFJPTF8oRldEfEJBQ0t8KFJPVF8pPyhMRUZUfFJJR0hUKXxVUHxET1dOfChNTF8pP0xCVVRUT04pfFBFUk1JU1NJT05fKFJFVFVSTl9PQkpFQ1RTfERFQklUfE9WRVJSSURFX0FOSU1BVElPTlN8U0lMRU5UX0VTVEFURV9NQU5BR0VNRU5UfFRBS0VfQ09OVFJPTFN8VFJJR0dFUl9BTklNQVRJT058QVRUQUNIfENIQU5HRV9MSU5LU3woQ09OVFJPTHxUUkFDSylfQ0FNRVJBfFRFTEVQT1JUKXxJTlZFTlRPUllfKFRFWFRVUkV8U09VTkR8T0JKRUNUfFNDUklQVHxMQU5ETUFSS3xDTE9USElOR3xOT1RFQ0FSRHxCT0RZUEFSVHxBTklNQVRJT058R0VTVFVSRXxBTEx8Tk9ORSl8Q0hBTkdFRF8oSU5WRU5UT1JZfENPTE9SfFNIQVBFfFNDQUxFfFRFWFRVUkV8TElOS3xBTExPV0VEX0RST1B8T1dORVJ8UkVHSU9OKF9TVEFSVCk/fFRFTEVQT1JUfE1FRElBKXxPQkpFQ1RfKENMSUNLX0FDVElPTnxIT1ZFUl9IRUlHSFR8TEFTVF9PV05FUl9JRHwoUEhZU0lDU3xTRVJWRVJ8U1RSRUFNSU5HKV9DT1NUfFVOS05PV05fREVUQUlMfENIQVJBQ1RFUl9USU1FfFBIQU5UT018UEhZU0lDU3xURU1QXyhBVFRBQ0hFRHxPTl9SRVopfE5BTUV8REVTQ3xQT1N8UFJJTV8oQ09VTlR8RVFVSVZBTEVOQ0UpfFJFVFVSTl8oUEFSQ0VMKF9PV05FUik/fFJFR0lPTil8UkVaWkVSX0tFWXxST08/VHxWRUxPQ0lUWXxPTUVHQXxPV05FUnxHUk9VUChfVEFHKT98Q1JFQVRPUnxBVFRBQ0hFRF8oUE9JTlR8U0xPVFNfQVZBSUxBQkxFKXxSRU5ERVJfV0VJR0hUfChCT0RZX1NIQVBFfFBBVEhGSU5ESU5HKV9UWVBFfChSVU5OSU5HfFRPVEFMKV9TQ1JJUFRfQ09VTlR8VE9UQUxfSU5WRU5UT1JZX0NPVU5UfFNDUklQVF8oTUVNT1JZfFRJTUUpKXxUWVBFXyhJTlRFR0VSfEZMT0FUfFNUUklOR3xLRVl8VkVDVE9SfFJPVEFUSU9OfElOVkFMSUQpfChERUJVR3xQVUJMSUMpX0NIQU5ORUx8QVRUQUNIXyhBVkFUQVJfQ0VOVEVSfENIRVNUfEhFQUR8QkFDS3xQRUxWSVN8TU9VVEh8Q0hJTnxORUNLfE5PU0V8QkVMTFl8W0xSXShTSE9VTERFUnxIQU5EfEZPT1R8RUFSfEVZRXxbVUxdKEFSTXxMRUcpfEhJUCl8KExFRlR8UklHSFQpX1BFQ3xIVURfKENFTlRFUl9bMTJdfFRPUF8oUklHSFR8Q0VOVEVSfExFRlQpfEJPVFRPTShfKFJJR0hUfExFRlQpKT8pfFtMUl1IQU5EX1JJTkcxfFRBSUxfKEJBU0V8VElQKXxbTFJdV0lOR3xGQUNFXyhKQVd8W0xSXUVBUnxbTFJdRVlFfFRPVU5HRSl8R1JPSU58SElORF9bTFJdRk9PVCl8TEFORF8oTEVWRUx8UkFJU0V8TE9XRVJ8U01PT1RIfE5PSVNFfFJFVkVSVCl8REFUQV8oT05MSU5FfE5BTUV8Qk9STnxTSU1fKFBPU3xTVEFUVVN8UkFUSU5HKXxQQVlJTkZPKXxQQVlNRU5UX0lORk9fKE9OX0ZJTEV8VVNFRCl8UkVNT1RFX0RBVEFfKENIQU5ORUx8UkVRVUVTVHxSRVBMWSl8UFNZU18oUEFSVF8oQkZfKFpFUk98T05FKF9NSU5VU18oREVTVF9DT0xPUnxTT1VSQ0VfKEFMUEhBfENPTE9SKSkpP3xERVNUX0NPTE9SfFNPVVJDRV8oQUxQSEF8Q09MT1IpKXxCTEVORF9GVU5DXyhERVNUfFNPVVJDRSl8RkxBR1N8KFNUQVJUfEVORClfKENPTE9SfEFMUEhBfFNDQUxFfEdMT1cpfE1BWF9BR0V8KFJJQkJPTnxXSU5EfElOVEVSUF8oQ09MT1J8U0NBTEUpfEJPVU5DRXxGT0xMT1dfKFNSQ3xWRUxPQ0lUWSl8VEFSR0VUXyhQT1N8TElORUFSKXxFTUlTU0lWRSlfTUFTSyl8U1JDXyhNQVhfQUdFfFBBVFRFUk58QU5HTEVfKEJFR0lOfEVORCl8QlVSU1RfKFJBVEV8UEFSVF9DT1VOVHxSQURJVVN8U1BFRURfKE1JTnxNQVgpKXxBQ0NFTHxURVhUVVJFfFRBUkdFVF9LRVl8T01FR0F8UEFUVEVSTl8oRFJPUHxFWFBMT0RFfEFOR0xFKF9DT05FKF9FTVBUWSk/KT8pKSl8VkVISUNMRV8oUkVGRVJFTkNFX0ZSQU1FfFRZUEVfKE5PTkV8U0xFRHxDQVJ8Qk9BVHxBSVJQTEFORXxCQUxMT09OKXwoTElORUFSfEFOR1VMQVIpXyhGUklDVElPTl9USU1FU0NBTEV8TU9UT1JfRElSRUNUSU9OKXxMSU5FQVJfTU9UT1JfT0ZGU0VUfEhPVkVSXyhIRUlHSFR8RUZGSUNJRU5DWXxUSU1FU0NBTEUpfEJVT1lBTkNZfChMSU5FQVJ8QU5HVUxBUilfKERFRkxFQ1RJT05fKEVGRklDSUVOQ1l8VElNRVNDQUxFKXxNT1RPUl8oREVDQVlfKT9USU1FU0NBTEUpfFZFUlRJQ0FMX0FUVFJBQ1RJT05fKEVGRklDSUVOQ1l8VElNRVNDQUxFKXxCQU5LSU5HXyhFRkZJQ0lFTkNZfE1JWHxUSU1FU0NBTEUpfEZMQUdfKE5PX0RFRkxFQ1RJT05fVVB8TElNSVRfKFJPTExfT05MWXxNT1RPUl9VUCl8SE9WRVJfKChXQVRFUnxURVJSQUlOfFVQKV9PTkxZfEdMT0JBTF9IRUlHSFQpfE1PVVNFTE9PS18oU1RFRVJ8QkFOSyl8Q0FNRVJBX0RFQ09VUExFRCkpfFBSSU1fKEFMTE9XX1VOU0lUfEFMUEhBX01PREUoXyhCTEVORHxFTUlTU0lWRXxNQVNLfE5PTkUpKT98Tk9STUFMfFNQRUNVTEFSfFRZUEUoXyhCT1h8Q1lMSU5ERVJ8UFJJU018U1BIRVJFfFRPUlVTfFRVQkV8UklOR3xTQ1VMUFQpKT98SE9MRV8oREVGQVVMVHxDSVJDTEV8U1FVQVJFfFRSSUFOR0xFKXxNQVRFUklBTChfKFNUT05FfE1FVEFMfEdMQVNTfFdPT0R8RkxFU0h8UExBU1RJQ3xSVUJCRVIpKT98U0hJTllfKE5PTkV8TE9XfE1FRElVTXxISUdIKXxCVU1QXyhOT05FfEJSSUdIVHxEQVJLfFdPT0R8QkFSS3xCUklDS1N8Q0hFQ0tFUnxDT05DUkVURXxUSUxFfFNUT05FfERJU0tTfEdSQVZFTHxCTE9CU3xTSURJTkd8TEFSR0VUSUxFfFNUVUNDT3xTVUNUSU9OfFdFQVZFKXxURVhHRU5fKERFRkFVTFR8UExBTkFSKXxTQ1JJUFRFRF9TSVRfT05MWXxTQ1VMUFRfKFRZUEVfKFNQSEVSRXxUT1JVU3xQTEFORXxDWUxJTkRFUnxNQVNLKXxGTEFHXyhNSVJST1J8SU5WRVJUKSl8UEhZU0lDUyhfKFNIQVBFXyhDT05WRVh8Tk9ORXxQUklNfFRZUEUpKSk/fChQT1N8Uk9UKV9MT0NBTHxTTElDRXxURVhUfEZMRVhJQkxFfFBPSU5UX0xJR0hUfFRFTVBfT05fUkVafFBIQU5UT018UE9TSVRJT058U0lUX1RBUkdFVHxTSVpFfFJPVEFUSU9OfFRFWFRVUkV8TkFNRXxPTUVHQXxERVNDfExJTktfVEFSR0VUfENPTE9SfEJVTVBfU0hJTll8RlVMTEJSSUdIVHxURVhHRU58R0xPV3xNRURJQV8oQUxUX0lNQUdFX0VOQUJMRXxDT05UUk9MU3woQ1VSUkVOVHxIT01FKV9VUkx8QVVUT18oTE9PUHxQTEFZfFNDQUxFfFpPT00pfEZJUlNUX0NMSUNLX0lOVEVSQUNUfChXSURUSHxIRUlHSFQpX1BJWEVMU3xXSElURUxJU1QoX0VOQUJMRSk/fFBFUk1TXyhJTlRFUkFDVHxDT05UUk9MKXxQQVJBTV9NQVh8Q09OVFJPTFNfKFNUQU5EQVJEfE1JTkkpfFBFUk1fKE5PTkV8T1dORVJ8R1JPVVB8QU5ZT05FKXxNQVhfKFVSTF9MRU5HVEh8V0hJVEVMSVNUXyhTSVpFfENPVU5UKXwoV0lEVEh8SEVJR0hUKV9QSVhFTFMpKSl8TUFTS18oQkFTRXxPV05FUnxHUk9VUHxFVkVSWU9ORXxORVhUKXxQRVJNXyhUUkFOU0ZFUnxNT0RJRll8Q09QWXxNT1ZFfEFMTCl8UEFSQ0VMXyhNRURJQV9DT01NQU5EXyhTVE9QfFBBVVNFfFBMQVl8TE9PUHxURVhUVVJFfFVSTHxUSU1FfEFHRU5UfFVOTE9BRHxBVVRPX0FMSUdOfFRZUEV8U0laRXxERVNDfExPT1BfU0VUKXxGTEFHXyhBTExPV18oRkxZfChHUk9VUF8pP1NDUklQVFN8TEFORE1BUkt8VEVSUkFGT1JNfERBTUFHRXxDUkVBVEVfKEdST1VQXyk/T0JKRUNUUyl8VVNFXyhBQ0NFU1NfKEdST1VQfExJU1QpfEJBTl9MSVNUfExBTkRfUEFTU19MSVNUKXxMT0NBTF9TT1VORF9PTkxZfFJFU1RSSUNUX1BVU0hPQkpFQ1R8QUxMT1dfKEdST1VQfEFMTClfT0JKRUNUX0VOVFJZKXxDT1VOVF8oVE9UQUx8T1dORVJ8R1JPVVB8T1RIRVJ8U0VMRUNURUR8VEVNUCl8REVUQUlMU18oTkFNRXxERVNDfE9XTkVSfEdST1VQfEFSRUF8SUR8U0VFX0FWQVRBUlMpKXxMSVNUX1NUQVRfKE1BWHxNSU58TUVBTnxNRURJQU58U1REX0RFVnxTVU0oX1NRVUFSRVMpP3xOVU1fQ09VTlR8R0VPTUVUUklDX01FQU58UkFOR0UpfFBBWV8oSElERXxERUZBVUxUKXxSRUdJT05fRkxBR18oQUxMT1dfREFNQUdFfEZJWEVEX1NVTnxCTE9DS19URVJSQUZPUk18U0FOREJPWHxESVNBQkxFXyhDT0xMSVNJT05TfFBIWVNJQ1MpfEJMT0NLX0ZMWXxBTExPV19ESVJFQ1RfVEVMRVBPUlR8UkVTVFJJQ1RfUFVTSE9CSkVDVCl8SFRUUF8oTUVUSE9EfE1JTUVUWVBFfEJPRFlfKE1BWExFTkdUSHxUUlVOQ0FURUQpfENVU1RPTV9IRUFERVJ8UFJBR01BX05PX0NBQ0hFfFZFUkJPU0VfVEhST1RUTEV8VkVSSUZZX0NFUlQpfFNJVF8oSU5WQUxJRF8oQUdFTlR8TElOS19PQkpFQ1QpfE5PKFRfRVhQRVJJRU5DRXxfKEFDQ0VTU3xFWFBFUklFTkNFX1BFUk1JU1NJT058U0lUX1RBUkdFVCkpKXxTVFJJTkdfKFRSSU0oXyhIRUFEfFRBSUwpKT8pfENMSUNLX0FDVElPTl8oTk9ORXxUT1VDSHxTSVR8QlVZfFBBWXxPUEVOKF9NRURJQSk/fFBMQVl8Wk9PTSl8VE9VQ0hfSU5WQUxJRF9GQUNFfFBST0ZJTEVfKE5PTkV8U0NSSVBUX01FTU9SWSl8UkNfKERBVEFfRkxBR1N8REVURUNUX1BIQU5UT018R0VUXyhMSU5LX05VTXxOT1JNQUx8Uk9PVF9LRVkpfE1BWF9ISVRTfFJFSkVDVF8oVFlQRVN8QUdFTlRTfChOT04pP1BIWVNJQ0FMfExBTkQpKXxSQ0VSUl8oQ0FTVF9USU1FX0VYQ0VFREVEfFNJTV9QRVJGX0xPV3xVTktOT1dOKXxFU1RBVEVfQUNDRVNTXyhBTExPV0VEXyhBR0VOVHxHUk9VUClfKEFERHxSRU1PVkUpfEJBTk5FRF9BR0VOVF8oQUREfFJFTU9WRSkpfERFTlNJVFl8RlJJQ1RJT058UkVTVElUVVRJT058R1JBVklUWV9NVUxUSVBMSUVSfEtGTV8oQ09NTUFORHxDTURfKFBMQVl8U1RPUHxQQVVTRSl8TU9ERXxGT1JXQVJEfExPT1B8UElOR19QT05HfFJFVkVSU0V8REFUQXxST1RBVElPTnxUUkFOU0xBVElPTil8RVJSXyhHRU5FUklDfFBBUkNFTF9QRVJNSVNTSU9OU3xNQUxGT1JNRURfUEFSQU1TfFJVTlRJTUVfUEVSTUlTU0lPTlN8VEhST1RUTEVEKXxDSEFSQUNURVJfKENNRF8oKFNNT09USF8pP1NUT1B8SlVNUCl8REVTSVJFRF8oVFVSTl8pP1NQRUVEfFJBRElVU3xTVEFZX1dJVEhJTl9QQVJDRUx8TEVOR1RIfE9SSUVOVEFUSU9OfEFDQ09VTlRfRk9SX1NLSVBQRURfRlJBTUVTfEFWT0lEQU5DRV9NT0RFfFRZUEUoXyhbQUJDRF18Tk9ORSkpP3xNQVhfKERFQ0VMfFRVUk5fUkFESVVTfChBQ0NFTHxTUEVFRCkpKXxQVVJTVUlUXyhPRkZTRVR8RlVaWl9GQUNUT1J8R09BTF9UT0xFUkFOQ0V8SU5URVJDRVBUKXxSRVFVSVJFX0xJTkVfT0ZfU0lHSFR8Rk9SQ0VfRElSRUNUX1BBVEh8VkVSVElDQUx8SE9SSVpPTlRBTHxBVk9JRF8oQ0hBUkFDVEVSU3xEWU5BTUlDX09CU1RBQ0xFU3xOT05FKXxQVV8oRVZBREVfKEhJRERFTnxTUE9UVEVEKXxGQUlMVVJFXyhEWU5BTUlDX1BBVEhGSU5ESU5HX0RJU0FCTEVEfElOVkFMSURfKEdPQUx8U1RBUlQpfE5PXyhOQVZNRVNIfFZBTElEX0RFU1RJTkFUSU9OKXxPVEhFUnxUQVJHRVRfR09ORXwoUEFSQ0VMXyk/VU5SRUFDSEFCTEUpfChHT0FMfFNMT1dET1dOX0RJU1RBTkNFKV9SRUFDSEVEKXxUUkFWRVJTQUxfVFlQRShfKEZBU1R8Tk9ORXxTTE9XKSk/fENPTlRFTlRfVFlQRV8oQVRPTXxGT1JNfEhUTUx8SlNPTnxMTFNEfFJTU3xURVhUfFhIVE1MfFhNTCl8R0NOUF8oUkFESVVTfFNUQVRJQyl8KFBBVFJPTHxXQU5ERVIpX1BBVVNFX0FUX1dBWVBPSU5UU3xPUFRfKEFWQVRBUnxDSEFSQUNURVJ8RVhDTFVTSU9OX1ZPTFVNRXxMRUdBQ1lfTElOS1NFVHxNQVRFUklBTF9WT0xVTUV8T1RIRVJ8U1RBVElDX09CU1RBQ0xFfFdBTEtBQkxFKXxTSU1fU1RBVF9QQ1RfQ0hBUlNfU1RFUFBFRClcXFxcYidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYihGQUxTRXxUUlVFKVxcXFxiJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKFpFUk9fUk9UQVRJT04pXFxcXGInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoRU9GfEpTT05fKEFSUkFZfERFTEVURXxGQUxTRXxJTlZBTElEfE5VTEx8TlVNQkVSfE9CSkVDVHxTVFJJTkd8VFJVRSl8TlVMTF9LRVl8VEVYVFVSRV8oQkxBTkt8REVGQVVMVHxNRURJQXxQTFlXT09EfFRSQU5TUEFSRU5UKXxVUkxfUkVRVUVTVF8oR1JBTlRFRHxERU5JRUQpKVxcXFxiJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKFpFUk9fVkVDVE9SfFRPVUNIX0lOVkFMSURfKFRFWENPT1JEfFZFQ1RPUikpXFxcXGInXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIExTTF9GVU5DVElPTlMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihsbChBZ2VudEluRXhwZXJpZW5jZXwoQ3JlYXRlfERhdGFTaXplfERlbGV0ZXxLZXlDb3VudHxLZXlzfFJlYWR8VXBkYXRlKUtleVZhbHVlfEdldEV4cGVyaWVuY2UoRGV0YWlsc3xFcnJvck1lc3NhZ2UpfFJldHVybk9iamVjdHNCeShJRHxPd25lcil8SnNvbigyTGlzdHxbR1NdZXRWYWx1ZXxWYWx1ZVR5cGUpfFNpbnxDb3N8VGFufEF0YW4yfFNxcnR8UG93fEFic3xGYWJzfEZyYW5kfEZsb29yfENlaWx8Um91bmR8VmVjKE1hZ3xOb3JtfERpc3QpfFJvdChCZXR3ZWVufDIoRXVsZXJ8RndkfExlZnR8VXApKXwoRXVsZXJ8QXhlcykyUm90fFdoaXNwZXJ8KFJlZ2lvbnxPd25lcik/U2F5fFNob3V0fExpc3RlbihDb250cm9sfFJlbW92ZSk/fFNlbnNvcihSZXBlYXR8UmVtb3ZlKT98RGV0ZWN0ZWQoTmFtZXxLZXl8T3duZXJ8VHlwZXxQb3N8VmVsfEdyYWJ8Um90fEdyb3VwfExpbmtOdW1iZXIpfERpZXxHcm91bmR8V2luZHwoW0dTXWV0KShBbmltYXRpb25PdmVycmlkZXxNZW1vcnlMaW1pdHxQcmltTWVkaWFQYXJhbXN8UGFyY2VsTXVzaWNVUkx8T2JqZWN0KERlc2N8TmFtZSl8UGh5c2ljc01hdGVyaWFsfFN0YXR1c3xTY2FsZXxDb2xvcnxBbHBoYXxUZXh0dXJlfFBvc3xSb3R8Rm9yY2V8VG9ycXVlKXxSZXNldEFuaW1hdGlvbk92ZXJyaWRlfChTY2FsZXxPZmZzZXR8Um90YXRlKVRleHR1cmV8KFJvdCk/VGFyZ2V0KFJlbW92ZSk/fChTdG9wKT9Nb3ZlVG9UYXJnZXR8QXBwbHkoUm90YXRpb25hbCk/SW1wdWxzZXxTZXQoS2V5ZnJhbWVkTW90aW9ufENvbnRlbnRUeXBlfFJlZ2lvblBvc3woQW5ndWxhcik/VmVsb2NpdHl8QnVveWFuY3l8SG92ZXJIZWlnaHR8Rm9yY2VBbmRUb3JxdWV8VGltZXJFdmVudHxTY3JpcHRTdGF0ZXxEYW1hZ2V8VGV4dHVyZUFuaW18U291bmQoUXVldWVpbmd8UmFkaXVzKXxWZWhpY2xlKFR5cGV8KEZsb2F0fFZlY3RvcnxSb3RhdGlvbilQYXJhbSl8KFRvdWNofFNpdCk/VGV4dHxDYW1lcmEoRXllfEF0KU9mZnNldHxQcmltaXRpdmVQYXJhbXN8Q2xpY2tBY3Rpb258TGluayhBbHBoYXxDb2xvcnxQcmltaXRpdmVQYXJhbXMoRmFzdCk/fFRleHR1cmUoQW5pbSk/fENhbWVyYXxNZWRpYSl8UmVtb3RlU2NyaXB0QWNjZXNzUGlufFBheVByaWNlfExvY2FsUm90KXxTY2FsZUJ5RmFjdG9yfEdldCgoTWF4fE1pbilTY2FsZUZhY3RvcnxDbG9zZXN0TmF2UG9pbnR8U3RhdGljUGF0aHxTaW1TdGF0c3xFbnZ8UHJpbWl0aXZlUGFyYW1zfExpbmsoUHJpbWl0aXZlUGFyYW1zfE51bWJlcihPZlNpZGVzKT98S2V5fE5hbWV8TWVkaWEpfEhUVFBIZWFkZXJ8RnJlZVVSTHN8T2JqZWN0KERldGFpbHN8UGVybU1hc2t8UHJpbUNvdW50KXxQYXJjZWwoTWF4UHJpbXN8RGV0YWlsc3xQcmltKENvdW50fE93bmVycykpfEF0dGFjaGVkKExpc3QpP3woU1BNYXh8RnJlZXxVc2VkKU1lbW9yeXxSZWdpb24oTmFtZXxUaW1lRGlsYXRpb258RlBTfENvcm5lcnxBZ2VudENvdW50KXxSb290KFBvc2l0aW9ufFJvdGF0aW9uKXxVbml4VGltZXwoUGFyY2VsfFJlZ2lvbilGbGFnc3woV2FsbHxHTVQpY2xvY2t8U2ltdWxhdG9ySG9zdG5hbWV8Qm91bmRpbmdCb3h8R2VvbWV0cmljQ2VudGVyfENyZWF0b3J8TnVtYmVyT2YoUHJpbXN8Tm90ZWNhcmRMaW5lc3xTaWRlcyl8QW5pbWF0aW9uKExpc3QpP3woQ2FtZXJhfExvY2FsKShQb3N8Um90KXxWZWx8QWNjZWx8T21lZ2F8VGltZShzdGFtcHxPZkRheSl8KE9iamVjdHxDZW50ZXJPZik/TWFzc3xNYXNzTUtTfEVuZXJneXxPd25lcnwoT3duZXIpP0tleXxTdW5EaXJlY3Rpb258VGV4dHVyZShPZmZzZXR8U2NhbGV8Um90KXxJbnZlbnRvcnkoTnVtYmVyfE5hbWV8S2V5fFR5cGV8Q3JlYXRvcnxQZXJtTWFzayl8UGVybWlzc2lvbnMoS2V5KT98U3RhcnRQYXJhbWV0ZXJ8TGlzdChMZW5ndGh8RW50cnlUeXBlKXxEYXRlfEFnZW50KFNpemV8SW5mb3xMYW5ndWFnZXxMaXN0KXxMYW5kT3duZXJBdHxOb3RlY2FyZExpbmV8U2NyaXB0KE5hbWV8U3RhdGUpKXwoR2V0fFJlc2V0fEdldEFuZFJlc2V0KVRpbWV8UGxheVNvdW5kKFNsYXZlKT98TG9vcFNvdW5kKE1hc3RlcnxTbGF2ZSk/fChUcmlnZ2VyfFN0b3B8UHJlbG9hZClTb3VuZHwoKEdldHxEZWxldGUpU3VifEluc2VydClTdHJpbmd8VG8oVXBwZXJ8TG93ZXIpfEdpdmUoSW52ZW50b3J5TGlzdHxNb25leSl8UmV6T2JqZWN0fChTdG9wKT9Mb29rQXR8U2xlZXB8Q29sbGlzaW9uRmlsdGVyfChUYWtlfFJlbGVhc2UpQ29udHJvbHN8RGV0YWNoRnJvbUF2YXRhcnxBdHRhY2hUb0F2YXRhcihUZW1wKT98SW5zdGFudE1lc3NhZ2V8KEdldE5leHQpP0VtYWlsfFN0b3BIb3ZlcnxNaW5FdmVudERlbGF5fFJvdExvb2tBdHxTdHJpbmcoTGVuZ3RofFRyaW0pfChTdGFydHxTdG9wKUFuaW1hdGlvbnxUYXJnZXRPbWVnYXxSZXF1ZXN0KEV4cGVyaWVuY2UpP1Blcm1pc3Npb25zfChDcmVhdGV8QnJlYWspTGlua3xCcmVha0FsbExpbmtzfChHaXZlfFJlbW92ZSlJbnZlbnRvcnl8V2F0ZXJ8UGFzc1RvdWNoZXN8UmVxdWVzdChBZ2VudHxJbnZlbnRvcnkpRGF0YXxUZWxlcG9ydEFnZW50KEhvbWV8R2xvYmFsQ29vcmRzKT98TW9kaWZ5TGFuZHxDb2xsaXNpb25Tb3VuZHxSZXNldFNjcmlwdHxNZXNzYWdlTGlua2VkfFB1c2hPYmplY3R8UGFzc0NvbGxpc2lvbnN8QXhpc0FuZ2xlMlJvdHxSb3QyKEF4aXN8QW5nbGUpfEEoY29zfHNpbil8QW5nbGVCZXR3ZWVufEFsbG93SW52ZW50b3J5RHJvcHxTdWJTdHJpbmdJbmRleHxMaXN0MihDU1Z8SW50ZWdlcnxKc29ufEZsb2F0fFN0cmluZ3xLZXl8VmVjdG9yfFJvdHxMaXN0KFN0cmlkZWQpPyl8RGVsZXRlU3ViTGlzdHxMaXN0KFN0YXRpc3RpY3N8U29ydHxSYW5kb21pemV8KEluc2VydHxGaW5kfFJlcGxhY2UpTGlzdCl8RWRnZU9mV29ybGR8QWRqdXN0U291bmRWb2x1bWV8S2V5Mk5hbWV8VHJpZ2dlclNvdW5kTGltaXRlZHxFamVjdEZyb21MYW5kfChDU1Z8UGFyc2VTdHJpbmcpMkxpc3R8T3Zlck15TGFuZHxTYW1lR3JvdXB8VW5TaXR8R3JvdW5kKFNsb3BlfE5vcm1hbHxDb250b3VyKXxHcm91bmRSZXBlbHwoU2V0fFJlbW92ZSlWZWhpY2xlRmxhZ3N8U2l0T25MaW5rfChBdmF0YXJPbik/KExpbmspP1NpdFRhcmdldHxTY3JpcHQoRGFuZ2VyfFByb2ZpbGVyKXxEaWFsb2d8Vm9sdW1lRGV0ZWN0fFJlc2V0T3RoZXJTY3JpcHR8UmVtb3RlTG9hZFNjcmlwdFBpbnwoT3BlbnxDbG9zZSlSZW1vdGVEYXRhQ2hhbm5lbHxTZW5kUmVtb3RlRGF0YXxSZW1vdGVEYXRhUmVwbHl8KEludGVnZXJ8U3RyaW5nKVRvQmFzZTY0fFhvckJhc2U2NHxMb2coMTApP3xCYXNlNjRUbyhTdHJpbmd8SW50ZWdlcil8UGFyc2VTdHJpbmdLZWVwTnVsbHN8UmV6QXRSb290fFJlcXVlc3RTaW11bGF0b3JEYXRhfEZvcmNlTW91c2Vsb29rfChMb2FkfFJlbGVhc2V8KEV8VW5lKXNjYXBlKVVSTHxQYXJjZWxNZWRpYShDb21tYW5kTGlzdHxRdWVyeSl8TW9kUG93fE1hcERlc3RpbmF0aW9ufChSZW1vdmVGcm9tfEFkZFRvfFJlc2V0KUxhbmQoUGFzc3xCYW4pTGlzdHwoU2V0fENsZWFyKUNhbWVyYVBhcmFtc3xIVFRQKFJlcXVlc3R8UmVzcG9uc2UpfFRleHRCb3h8RGV0ZWN0ZWRUb3VjaChVVnxGYWNlfFBvc3woTnxCaW4pb3JtYWx8U1QpfChNRDV8U0hBMXxEdW1wTGlzdDIpU3RyaW5nfFJlcXVlc3QoU2VjdXJlKT9VUkx8Q2xlYXIoUHJpbXxMaW5rKU1lZGlhfChMaW5rKT9QYXJ0aWNsZVN5c3RlbXwoR2V0fFJlcXVlc3QpKFVzZXJuYW1lfERpc3BsYXlOYW1lKXxSZWdpb25TYXlUb3xDYXN0UmF5fEdlbmVyYXRlS2V5fFRyYW5zZmVyTGluZGVuRG9sbGFyc3xNYW5hZ2VFc3RhdGVBY2Nlc3N8KENyZWF0ZXxEZWxldGUpQ2hhcmFjdGVyfEV4ZWNDaGFyYWN0ZXJDbWR8RXZhZGV8RmxlZUZyb218TmF2aWdhdGVUb3xQYXRyb2xQb2ludHN8UHVyc3VlfFVwZGF0ZUNoYXJhY3RlcnxXYW5kZXJXaXRoaW4pKVxcXFxiJ1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnTFNMIChMaW5kZW4gU2NyaXB0aW5nIExhbmd1YWdlKScsXG4gICAgICAgIGlsbGVnYWw6ICc6JyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIExTTF9TVFJJTkdTLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIGhsanMuQ09NTUVOVCgnLy8nLCAnJCcpLFxuICAgICAgICAgICAgICAgICAgICBobGpzLkNPTU1FTlQoJy9cXFxcKicsICdcXFxcKi8nKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTFNMX05VTUJFUlMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYihzdGF0ZXxkZWZhdWx0KVxcXFxiJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKHN0YXRlXyhlbnRyeXxleGl0KXx0b3VjaChfKHN0YXJ0fGVuZCkpP3wobGFuZF8pP2NvbGxpc2lvbihfKHN0YXJ0fGVuZCkpP3x0aW1lcnxsaXN0ZW58KG5vXyk/c2Vuc29yfGNvbnRyb2x8KG5vdF8pP2F0Xyhyb3RfKT90YXJnZXR8bW9uZXl8ZW1haWx8ZXhwZXJpZW5jZV9wZXJtaXNzaW9ucyhfZGVuaWVkKT98cnVuX3RpbWVfcGVybWlzc2lvbnN8Y2hhbmdlZHxhdHRhY2h8ZGF0YXNlcnZlcnxtb3ZpbmdfKHN0YXJ0fGVuZCl8bGlua19tZXNzYWdlfChvbnxvYmplY3QpX3JlenxyZW1vdGVfZGF0YXxodHRwX3JlKHNwb25zZXxxdWVzdCl8cGF0aF91cGRhdGV8dHJhbnNhY3Rpb25fcmVzdWx0KVxcXFxiJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIExTTF9GVU5DVElPTlMsXG4gICAgICAgICAgICBMU0xfQ09OU1RBTlRTLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoaW50ZWdlcnxmbG9hdHxzdHJpbmd8a2V5fHZlY3RvcnxxdWF0ZXJuaW9ufHJvdGF0aW9ufGxpc3QpXFxcXGInXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxzbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=