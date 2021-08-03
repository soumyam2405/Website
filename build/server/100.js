exports.ids = [100];
exports.modules = {

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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbHNsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTAwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBMU0wgKExpbmRlbiBTY3JpcHRpbmcgTGFuZ3VhZ2UpXG5EZXNjcmlwdGlvbjogVGhlIExpbmRlbiBTY3JpcHRpbmcgTGFuZ3VhZ2UgaXMgdXNlZCBpbiBTZWNvbmQgTGlmZSBieSBMaW5kZW4gTGFicy5cbkF1dGhvcjogQnVpbGRlcidzIEJyZXdlcnkgPGJ1aWxkZXJzYnJld2VyeUBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwOi8vd2lraS5zZWNvbmRsaWZlLmNvbS93aWtpL0xTTF9Qb3J0YWxcbkNhdGVnb3J5OiBzY3JpcHRpbmdcbiovXG5cbmZ1bmN0aW9uIGxzbChobGpzKSB7XG5cbiAgICB2YXIgTFNMX1NUUklOR19FU0NBUEVfQ0hBUlMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgYmVnaW46IC9cXFxcW3RuXCJcXFxcXS9cbiAgICB9O1xuXG4gICAgdmFyIExTTF9TVFJJTkdTID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiJyxcbiAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgTFNMX1NUUklOR19FU0NBUEVfQ0hBUlNcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICB2YXIgTFNMX05VTUJFUlMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIHJlbGV2YW5jZTowLFxuICAgICAgICBiZWdpbjogaGxqcy5DX05VTUJFUl9SRVxuICAgIH07XG5cbiAgICB2YXIgTFNMX0NPTlNUQU5UUyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYihQSXxUV09fUEl8UElfQllfVFdPfERFR19UT19SQUR8UkFEX1RPX0RFR3xTUVJUMilcXFxcYidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYihYUF9FUlJPUl8oRVhQRVJJRU5DRVNfRElTQUJMRUR8RVhQRVJJRU5DRV8oRElTQUJMRUR8U1VTUEVOREVEKXxJTlZBTElEXyhFWFBFUklFTkNFfFBBUkFNRVRFUlMpfEtFWV9OT1RfRk9VTkR8TUFUVVJJVFlfRVhDRUVERUR8Tk9ORXxOT1RfKEZPVU5EfFBFUk1JVFRFRChfTEFORCk/KXxOT19FWFBFUklFTkNFfFFVT1RBX0VYQ0VFREVEfFJFVFJZX1VQREFURXxTVE9SQUdFX0VYQ0VQVElPTnxTVE9SRV9ESVNBQkxFRHxUSFJPVFRMRUR8VU5LTk9XTl9FUlJPUil8SlNPTl9BUFBFTkR8U1RBVFVTXyhQSFlTSUNTfFJPVEFURV9bWFlaXXxQSEFOVE9NfFNBTkRCT1h8QkxPQ0tfR1JBQihfT0JKRUNUKT98KERJRXxSRVRVUk4pX0FUX0VER0V8Q0FTVF9TSEFET1dTfE9LfE1BTEZPUk1FRF9QQVJBTVN8VFlQRV9NSVNNQVRDSHxCT1VORFNfRVJST1J8Tk9UXyhGT1VORHxTVVBQT1JURUQpfElOVEVSTkFMX0VSUk9SfFdISVRFTElTVF9GQUlMRUQpfEFHRU5UKF8oQllfKExFR0FDWV98VVNFUilOQU1FfEZMWUlOR3xBVFRBQ0hNRU5UU3xTQ1JJUFRFRHxNT1VTRUxPT0t8U0lUVElOR3xPTl9PQkpFQ1R8QVdBWXxXQUxLSU5HfElOX0FJUnxUWVBJTkd8Q1JPVUNISU5HfEJVU1l8QUxXQVlTX1JVTnxBVVRPUElMT1R8TElTVF8oUEFSQ0VMKF9PV05FUik/fFJFR0lPTikpKT98Q0FNRVJBXyhQSVRDSHxESVNUQU5DRXxCRUhJTkRORVNTXyhBTkdMRXxMQUcpfChGT0NVU3xQT1NJVElPTikoXyhUSFJFU0hPTER8TE9DS0VEfExBRykpP3xGT0NVU19PRkZTRVR8QUNUSVZFKXxBTklNX09OfExPT1B8UkVWRVJTRXxQSU5HX1BPTkd8U01PT1RIfFJPVEFURXxTQ0FMRXxBTExfU0lERVN8TElOS18oUk9PVHxTRVR8QUxMXyhPVEhFUlN8Q0hJTERSRU4pfFRISVMpfEFDVElWRXxQQVNTKElWRXxfKEFMV0FZU3xJRl9OT1RfSEFORExFRHxORVZFUikpfFNDUklQVEVEfENPTlRST0xfKEZXRHxCQUNLfChST1RfKT8oTEVGVHxSSUdIVCl8VVB8RE9XTnwoTUxfKT9MQlVUVE9OKXxQRVJNSVNTSU9OXyhSRVRVUk5fT0JKRUNUU3xERUJJVHxPVkVSUklERV9BTklNQVRJT05TfFNJTEVOVF9FU1RBVEVfTUFOQUdFTUVOVHxUQUtFX0NPTlRST0xTfFRSSUdHRVJfQU5JTUFUSU9OfEFUVEFDSHxDSEFOR0VfTElOS1N8KENPTlRST0x8VFJBQ0spX0NBTUVSQXxURUxFUE9SVCl8SU5WRU5UT1JZXyhURVhUVVJFfFNPVU5EfE9CSkVDVHxTQ1JJUFR8TEFORE1BUkt8Q0xPVEhJTkd8Tk9URUNBUkR8Qk9EWVBBUlR8QU5JTUFUSU9OfEdFU1RVUkV8QUxMfE5PTkUpfENIQU5HRURfKElOVkVOVE9SWXxDT0xPUnxTSEFQRXxTQ0FMRXxURVhUVVJFfExJTkt8QUxMT1dFRF9EUk9QfE9XTkVSfFJFR0lPTihfU1RBUlQpP3xURUxFUE9SVHxNRURJQSl8T0JKRUNUXyhDTElDS19BQ1RJT058SE9WRVJfSEVJR0hUfExBU1RfT1dORVJfSUR8KFBIWVNJQ1N8U0VSVkVSfFNUUkVBTUlORylfQ09TVHxVTktOT1dOX0RFVEFJTHxDSEFSQUNURVJfVElNRXxQSEFOVE9NfFBIWVNJQ1N8VEVNUF8oQVRUQUNIRUR8T05fUkVaKXxOQU1FfERFU0N8UE9TfFBSSU1fKENPVU5UfEVRVUlWQUxFTkNFKXxSRVRVUk5fKFBBUkNFTChfT1dORVIpP3xSRUdJT04pfFJFWlpFUl9LRVl8Uk9PP1R8VkVMT0NJVFl8T01FR0F8T1dORVJ8R1JPVVAoX1RBRyk/fENSRUFUT1J8QVRUQUNIRURfKFBPSU5UfFNMT1RTX0FWQUlMQUJMRSl8UkVOREVSX1dFSUdIVHwoQk9EWV9TSEFQRXxQQVRIRklORElORylfVFlQRXwoUlVOTklOR3xUT1RBTClfU0NSSVBUX0NPVU5UfFRPVEFMX0lOVkVOVE9SWV9DT1VOVHxTQ1JJUFRfKE1FTU9SWXxUSU1FKSl8VFlQRV8oSU5URUdFUnxGTE9BVHxTVFJJTkd8S0VZfFZFQ1RPUnxST1RBVElPTnxJTlZBTElEKXwoREVCVUd8UFVCTElDKV9DSEFOTkVMfEFUVEFDSF8oQVZBVEFSX0NFTlRFUnxDSEVTVHxIRUFEfEJBQ0t8UEVMVklTfE1PVVRIfENISU58TkVDS3xOT1NFfEJFTExZfFtMUl0oU0hPVUxERVJ8SEFORHxGT09UfEVBUnxFWUV8W1VMXShBUk18TEVHKXxISVApfChMRUZUfFJJR0hUKV9QRUN8SFVEXyhDRU5URVJfWzEyXXxUT1BfKFJJR0hUfENFTlRFUnxMRUZUKXxCT1RUT00oXyhSSUdIVHxMRUZUKSk/KXxbTFJdSEFORF9SSU5HMXxUQUlMXyhCQVNFfFRJUCl8W0xSXVdJTkd8RkFDRV8oSkFXfFtMUl1FQVJ8W0xSXUVZRXxUT1VOR0UpfEdST0lOfEhJTkRfW0xSXUZPT1QpfExBTkRfKExFVkVMfFJBSVNFfExPV0VSfFNNT09USHxOT0lTRXxSRVZFUlQpfERBVEFfKE9OTElORXxOQU1FfEJPUk58U0lNXyhQT1N8U1RBVFVTfFJBVElORyl8UEFZSU5GTyl8UEFZTUVOVF9JTkZPXyhPTl9GSUxFfFVTRUQpfFJFTU9URV9EQVRBXyhDSEFOTkVMfFJFUVVFU1R8UkVQTFkpfFBTWVNfKFBBUlRfKEJGXyhaRVJPfE9ORShfTUlOVVNfKERFU1RfQ09MT1J8U09VUkNFXyhBTFBIQXxDT0xPUikpKT98REVTVF9DT0xPUnxTT1VSQ0VfKEFMUEhBfENPTE9SKSl8QkxFTkRfRlVOQ18oREVTVHxTT1VSQ0UpfEZMQUdTfChTVEFSVHxFTkQpXyhDT0xPUnxBTFBIQXxTQ0FMRXxHTE9XKXxNQVhfQUdFfChSSUJCT058V0lORHxJTlRFUlBfKENPTE9SfFNDQUxFKXxCT1VOQ0V8Rk9MTE9XXyhTUkN8VkVMT0NJVFkpfFRBUkdFVF8oUE9TfExJTkVBUil8RU1JU1NJVkUpX01BU0spfFNSQ18oTUFYX0FHRXxQQVRURVJOfEFOR0xFXyhCRUdJTnxFTkQpfEJVUlNUXyhSQVRFfFBBUlRfQ09VTlR8UkFESVVTfFNQRUVEXyhNSU58TUFYKSl8QUNDRUx8VEVYVFVSRXxUQVJHRVRfS0VZfE9NRUdBfFBBVFRFUk5fKERST1B8RVhQTE9ERXxBTkdMRShfQ09ORShfRU1QVFkpPyk/KSkpfFZFSElDTEVfKFJFRkVSRU5DRV9GUkFNRXxUWVBFXyhOT05FfFNMRUR8Q0FSfEJPQVR8QUlSUExBTkV8QkFMTE9PTil8KExJTkVBUnxBTkdVTEFSKV8oRlJJQ1RJT05fVElNRVNDQUxFfE1PVE9SX0RJUkVDVElPTil8TElORUFSX01PVE9SX09GRlNFVHxIT1ZFUl8oSEVJR0hUfEVGRklDSUVOQ1l8VElNRVNDQUxFKXxCVU9ZQU5DWXwoTElORUFSfEFOR1VMQVIpXyhERUZMRUNUSU9OXyhFRkZJQ0lFTkNZfFRJTUVTQ0FMRSl8TU9UT1JfKERFQ0FZXyk/VElNRVNDQUxFKXxWRVJUSUNBTF9BVFRSQUNUSU9OXyhFRkZJQ0lFTkNZfFRJTUVTQ0FMRSl8QkFOS0lOR18oRUZGSUNJRU5DWXxNSVh8VElNRVNDQUxFKXxGTEFHXyhOT19ERUZMRUNUSU9OX1VQfExJTUlUXyhST0xMX09OTFl8TU9UT1JfVVApfEhPVkVSXygoV0FURVJ8VEVSUkFJTnxVUClfT05MWXxHTE9CQUxfSEVJR0hUKXxNT1VTRUxPT0tfKFNURUVSfEJBTkspfENBTUVSQV9ERUNPVVBMRUQpKXxQUklNXyhBTExPV19VTlNJVHxBTFBIQV9NT0RFKF8oQkxFTkR8RU1JU1NJVkV8TUFTS3xOT05FKSk/fE5PUk1BTHxTUEVDVUxBUnxUWVBFKF8oQk9YfENZTElOREVSfFBSSVNNfFNQSEVSRXxUT1JVU3xUVUJFfFJJTkd8U0NVTFBUKSk/fEhPTEVfKERFRkFVTFR8Q0lSQ0xFfFNRVUFSRXxUUklBTkdMRSl8TUFURVJJQUwoXyhTVE9ORXxNRVRBTHxHTEFTU3xXT09EfEZMRVNIfFBMQVNUSUN8UlVCQkVSKSk/fFNISU5ZXyhOT05FfExPV3xNRURJVU18SElHSCl8QlVNUF8oTk9ORXxCUklHSFR8REFSS3xXT09EfEJBUkt8QlJJQ0tTfENIRUNLRVJ8Q09OQ1JFVEV8VElMRXxTVE9ORXxESVNLU3xHUkFWRUx8QkxPQlN8U0lESU5HfExBUkdFVElMRXxTVFVDQ098U1VDVElPTnxXRUFWRSl8VEVYR0VOXyhERUZBVUxUfFBMQU5BUil8U0NSSVBURURfU0lUX09OTFl8U0NVTFBUXyhUWVBFXyhTUEhFUkV8VE9SVVN8UExBTkV8Q1lMSU5ERVJ8TUFTSyl8RkxBR18oTUlSUk9SfElOVkVSVCkpfFBIWVNJQ1MoXyhTSEFQRV8oQ09OVkVYfE5PTkV8UFJJTXxUWVBFKSkpP3woUE9TfFJPVClfTE9DQUx8U0xJQ0V8VEVYVHxGTEVYSUJMRXxQT0lOVF9MSUdIVHxURU1QX09OX1JFWnxQSEFOVE9NfFBPU0lUSU9OfFNJVF9UQVJHRVR8U0laRXxST1RBVElPTnxURVhUVVJFfE5BTUV8T01FR0F8REVTQ3xMSU5LX1RBUkdFVHxDT0xPUnxCVU1QX1NISU5ZfEZVTExCUklHSFR8VEVYR0VOfEdMT1d8TUVESUFfKEFMVF9JTUFHRV9FTkFCTEV8Q09OVFJPTFN8KENVUlJFTlR8SE9NRSlfVVJMfEFVVE9fKExPT1B8UExBWXxTQ0FMRXxaT09NKXxGSVJTVF9DTElDS19JTlRFUkFDVHwoV0lEVEh8SEVJR0hUKV9QSVhFTFN8V0hJVEVMSVNUKF9FTkFCTEUpP3xQRVJNU18oSU5URVJBQ1R8Q09OVFJPTCl8UEFSQU1fTUFYfENPTlRST0xTXyhTVEFOREFSRHxNSU5JKXxQRVJNXyhOT05FfE9XTkVSfEdST1VQfEFOWU9ORSl8TUFYXyhVUkxfTEVOR1RIfFdISVRFTElTVF8oU0laRXxDT1VOVCl8KFdJRFRIfEhFSUdIVClfUElYRUxTKSkpfE1BU0tfKEJBU0V8T1dORVJ8R1JPVVB8RVZFUllPTkV8TkVYVCl8UEVSTV8oVFJBTlNGRVJ8TU9ESUZZfENPUFl8TU9WRXxBTEwpfFBBUkNFTF8oTUVESUFfQ09NTUFORF8oU1RPUHxQQVVTRXxQTEFZfExPT1B8VEVYVFVSRXxVUkx8VElNRXxBR0VOVHxVTkxPQUR8QVVUT19BTElHTnxUWVBFfFNJWkV8REVTQ3xMT09QX1NFVCl8RkxBR18oQUxMT1dfKEZMWXwoR1JPVVBfKT9TQ1JJUFRTfExBTkRNQVJLfFRFUlJBRk9STXxEQU1BR0V8Q1JFQVRFXyhHUk9VUF8pP09CSkVDVFMpfFVTRV8oQUNDRVNTXyhHUk9VUHxMSVNUKXxCQU5fTElTVHxMQU5EX1BBU1NfTElTVCl8TE9DQUxfU09VTkRfT05MWXxSRVNUUklDVF9QVVNIT0JKRUNUfEFMTE9XXyhHUk9VUHxBTEwpX09CSkVDVF9FTlRSWSl8Q09VTlRfKFRPVEFMfE9XTkVSfEdST1VQfE9USEVSfFNFTEVDVEVEfFRFTVApfERFVEFJTFNfKE5BTUV8REVTQ3xPV05FUnxHUk9VUHxBUkVBfElEfFNFRV9BVkFUQVJTKSl8TElTVF9TVEFUXyhNQVh8TUlOfE1FQU58TUVESUFOfFNURF9ERVZ8U1VNKF9TUVVBUkVTKT98TlVNX0NPVU5UfEdFT01FVFJJQ19NRUFOfFJBTkdFKXxQQVlfKEhJREV8REVGQVVMVCl8UkVHSU9OX0ZMQUdfKEFMTE9XX0RBTUFHRXxGSVhFRF9TVU58QkxPQ0tfVEVSUkFGT1JNfFNBTkRCT1h8RElTQUJMRV8oQ09MTElTSU9OU3xQSFlTSUNTKXxCTE9DS19GTFl8QUxMT1dfRElSRUNUX1RFTEVQT1JUfFJFU1RSSUNUX1BVU0hPQkpFQ1QpfEhUVFBfKE1FVEhPRHxNSU1FVFlQRXxCT0RZXyhNQVhMRU5HVEh8VFJVTkNBVEVEKXxDVVNUT01fSEVBREVSfFBSQUdNQV9OT19DQUNIRXxWRVJCT1NFX1RIUk9UVExFfFZFUklGWV9DRVJUKXxTSVRfKElOVkFMSURfKEFHRU5UfExJTktfT0JKRUNUKXxOTyhUX0VYUEVSSUVOQ0V8XyhBQ0NFU1N8RVhQRVJJRU5DRV9QRVJNSVNTSU9OfFNJVF9UQVJHRVQpKSl8U1RSSU5HXyhUUklNKF8oSEVBRHxUQUlMKSk/KXxDTElDS19BQ1RJT05fKE5PTkV8VE9VQ0h8U0lUfEJVWXxQQVl8T1BFTihfTUVESUEpP3xQTEFZfFpPT00pfFRPVUNIX0lOVkFMSURfRkFDRXxQUk9GSUxFXyhOT05FfFNDUklQVF9NRU1PUlkpfFJDXyhEQVRBX0ZMQUdTfERFVEVDVF9QSEFOVE9NfEdFVF8oTElOS19OVU18Tk9STUFMfFJPT1RfS0VZKXxNQVhfSElUU3xSRUpFQ1RfKFRZUEVTfEFHRU5UU3woTk9OKT9QSFlTSUNBTHxMQU5EKSl8UkNFUlJfKENBU1RfVElNRV9FWENFRURFRHxTSU1fUEVSRl9MT1d8VU5LTk9XTil8RVNUQVRFX0FDQ0VTU18oQUxMT1dFRF8oQUdFTlR8R1JPVVApXyhBRER8UkVNT1ZFKXxCQU5ORURfQUdFTlRfKEFERHxSRU1PVkUpKXxERU5TSVRZfEZSSUNUSU9OfFJFU1RJVFVUSU9OfEdSQVZJVFlfTVVMVElQTElFUnxLRk1fKENPTU1BTkR8Q01EXyhQTEFZfFNUT1B8UEFVU0UpfE1PREV8Rk9SV0FSRHxMT09QfFBJTkdfUE9OR3xSRVZFUlNFfERBVEF8Uk9UQVRJT058VFJBTlNMQVRJT04pfEVSUl8oR0VORVJJQ3xQQVJDRUxfUEVSTUlTU0lPTlN8TUFMRk9STUVEX1BBUkFNU3xSVU5USU1FX1BFUk1JU1NJT05TfFRIUk9UVExFRCl8Q0hBUkFDVEVSXyhDTURfKChTTU9PVEhfKT9TVE9QfEpVTVApfERFU0lSRURfKFRVUk5fKT9TUEVFRHxSQURJVVN8U1RBWV9XSVRISU5fUEFSQ0VMfExFTkdUSHxPUklFTlRBVElPTnxBQ0NPVU5UX0ZPUl9TS0lQUEVEX0ZSQU1FU3xBVk9JREFOQ0VfTU9ERXxUWVBFKF8oW0FCQ0RdfE5PTkUpKT98TUFYXyhERUNFTHxUVVJOX1JBRElVU3woQUNDRUx8U1BFRUQpKSl8UFVSU1VJVF8oT0ZGU0VUfEZVWlpfRkFDVE9SfEdPQUxfVE9MRVJBTkNFfElOVEVSQ0VQVCl8UkVRVUlSRV9MSU5FX09GX1NJR0hUfEZPUkNFX0RJUkVDVF9QQVRIfFZFUlRJQ0FMfEhPUklaT05UQUx8QVZPSURfKENIQVJBQ1RFUlN8RFlOQU1JQ19PQlNUQUNMRVN8Tk9ORSl8UFVfKEVWQURFXyhISURERU58U1BPVFRFRCl8RkFJTFVSRV8oRFlOQU1JQ19QQVRIRklORElOR19ESVNBQkxFRHxJTlZBTElEXyhHT0FMfFNUQVJUKXxOT18oTkFWTUVTSHxWQUxJRF9ERVNUSU5BVElPTil8T1RIRVJ8VEFSR0VUX0dPTkV8KFBBUkNFTF8pP1VOUkVBQ0hBQkxFKXwoR09BTHxTTE9XRE9XTl9ESVNUQU5DRSlfUkVBQ0hFRCl8VFJBVkVSU0FMX1RZUEUoXyhGQVNUfE5PTkV8U0xPVykpP3xDT05URU5UX1RZUEVfKEFUT018Rk9STXxIVE1MfEpTT058TExTRHxSU1N8VEVYVHxYSFRNTHxYTUwpfEdDTlBfKFJBRElVU3xTVEFUSUMpfChQQVRST0x8V0FOREVSKV9QQVVTRV9BVF9XQVlQT0lOVFN8T1BUXyhBVkFUQVJ8Q0hBUkFDVEVSfEVYQ0xVU0lPTl9WT0xVTUV8TEVHQUNZX0xJTktTRVR8TUFURVJJQUxfVk9MVU1FfE9USEVSfFNUQVRJQ19PQlNUQUNMRXxXQUxLQUJMRSl8U0lNX1NUQVRfUENUX0NIQVJTX1NURVBQRUQpXFxcXGInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoRkFMU0V8VFJVRSlcXFxcYidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYihaRVJPX1JPVEFUSU9OKVxcXFxiJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKEVPRnxKU09OXyhBUlJBWXxERUxFVEV8RkFMU0V8SU5WQUxJRHxOVUxMfE5VTUJFUnxPQkpFQ1R8U1RSSU5HfFRSVUUpfE5VTExfS0VZfFRFWFRVUkVfKEJMQU5LfERFRkFVTFR8TUVESUF8UExZV09PRHxUUkFOU1BBUkVOVCl8VVJMX1JFUVVFU1RfKEdSQU5URUR8REVOSUVEKSlcXFxcYidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYihaRVJPX1ZFQ1RPUnxUT1VDSF9JTlZBTElEXyhURVhDT09SRHxWRUNUT1IpKVxcXFxiJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHZhciBMU0xfRlVOQ1RJT05TID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIobGwoQWdlbnRJbkV4cGVyaWVuY2V8KENyZWF0ZXxEYXRhU2l6ZXxEZWxldGV8S2V5Q291bnR8S2V5c3xSZWFkfFVwZGF0ZSlLZXlWYWx1ZXxHZXRFeHBlcmllbmNlKERldGFpbHN8RXJyb3JNZXNzYWdlKXxSZXR1cm5PYmplY3RzQnkoSUR8T3duZXIpfEpzb24oMkxpc3R8W0dTXWV0VmFsdWV8VmFsdWVUeXBlKXxTaW58Q29zfFRhbnxBdGFuMnxTcXJ0fFBvd3xBYnN8RmFic3xGcmFuZHxGbG9vcnxDZWlsfFJvdW5kfFZlYyhNYWd8Tm9ybXxEaXN0KXxSb3QoQmV0d2VlbnwyKEV1bGVyfEZ3ZHxMZWZ0fFVwKSl8KEV1bGVyfEF4ZXMpMlJvdHxXaGlzcGVyfChSZWdpb258T3duZXIpP1NheXxTaG91dHxMaXN0ZW4oQ29udHJvbHxSZW1vdmUpP3xTZW5zb3IoUmVwZWF0fFJlbW92ZSk/fERldGVjdGVkKE5hbWV8S2V5fE93bmVyfFR5cGV8UG9zfFZlbHxHcmFifFJvdHxHcm91cHxMaW5rTnVtYmVyKXxEaWV8R3JvdW5kfFdpbmR8KFtHU11ldCkoQW5pbWF0aW9uT3ZlcnJpZGV8TWVtb3J5TGltaXR8UHJpbU1lZGlhUGFyYW1zfFBhcmNlbE11c2ljVVJMfE9iamVjdChEZXNjfE5hbWUpfFBoeXNpY3NNYXRlcmlhbHxTdGF0dXN8U2NhbGV8Q29sb3J8QWxwaGF8VGV4dHVyZXxQb3N8Um90fEZvcmNlfFRvcnF1ZSl8UmVzZXRBbmltYXRpb25PdmVycmlkZXwoU2NhbGV8T2Zmc2V0fFJvdGF0ZSlUZXh0dXJlfChSb3QpP1RhcmdldChSZW1vdmUpP3woU3RvcCk/TW92ZVRvVGFyZ2V0fEFwcGx5KFJvdGF0aW9uYWwpP0ltcHVsc2V8U2V0KEtleWZyYW1lZE1vdGlvbnxDb250ZW50VHlwZXxSZWdpb25Qb3N8KEFuZ3VsYXIpP1ZlbG9jaXR5fEJ1b3lhbmN5fEhvdmVySGVpZ2h0fEZvcmNlQW5kVG9ycXVlfFRpbWVyRXZlbnR8U2NyaXB0U3RhdGV8RGFtYWdlfFRleHR1cmVBbmltfFNvdW5kKFF1ZXVlaW5nfFJhZGl1cyl8VmVoaWNsZShUeXBlfChGbG9hdHxWZWN0b3J8Um90YXRpb24pUGFyYW0pfChUb3VjaHxTaXQpP1RleHR8Q2FtZXJhKEV5ZXxBdClPZmZzZXR8UHJpbWl0aXZlUGFyYW1zfENsaWNrQWN0aW9ufExpbmsoQWxwaGF8Q29sb3J8UHJpbWl0aXZlUGFyYW1zKEZhc3QpP3xUZXh0dXJlKEFuaW0pP3xDYW1lcmF8TWVkaWEpfFJlbW90ZVNjcmlwdEFjY2Vzc1BpbnxQYXlQcmljZXxMb2NhbFJvdCl8U2NhbGVCeUZhY3RvcnxHZXQoKE1heHxNaW4pU2NhbGVGYWN0b3J8Q2xvc2VzdE5hdlBvaW50fFN0YXRpY1BhdGh8U2ltU3RhdHN8RW52fFByaW1pdGl2ZVBhcmFtc3xMaW5rKFByaW1pdGl2ZVBhcmFtc3xOdW1iZXIoT2ZTaWRlcyk/fEtleXxOYW1lfE1lZGlhKXxIVFRQSGVhZGVyfEZyZWVVUkxzfE9iamVjdChEZXRhaWxzfFBlcm1NYXNrfFByaW1Db3VudCl8UGFyY2VsKE1heFByaW1zfERldGFpbHN8UHJpbShDb3VudHxPd25lcnMpKXxBdHRhY2hlZChMaXN0KT98KFNQTWF4fEZyZWV8VXNlZClNZW1vcnl8UmVnaW9uKE5hbWV8VGltZURpbGF0aW9ufEZQU3xDb3JuZXJ8QWdlbnRDb3VudCl8Um9vdChQb3NpdGlvbnxSb3RhdGlvbil8VW5peFRpbWV8KFBhcmNlbHxSZWdpb24pRmxhZ3N8KFdhbGx8R01UKWNsb2NrfFNpbXVsYXRvckhvc3RuYW1lfEJvdW5kaW5nQm94fEdlb21ldHJpY0NlbnRlcnxDcmVhdG9yfE51bWJlck9mKFByaW1zfE5vdGVjYXJkTGluZXN8U2lkZXMpfEFuaW1hdGlvbihMaXN0KT98KENhbWVyYXxMb2NhbCkoUG9zfFJvdCl8VmVsfEFjY2VsfE9tZWdhfFRpbWUoc3RhbXB8T2ZEYXkpfChPYmplY3R8Q2VudGVyT2YpP01hc3N8TWFzc01LU3xFbmVyZ3l8T3duZXJ8KE93bmVyKT9LZXl8U3VuRGlyZWN0aW9ufFRleHR1cmUoT2Zmc2V0fFNjYWxlfFJvdCl8SW52ZW50b3J5KE51bWJlcnxOYW1lfEtleXxUeXBlfENyZWF0b3J8UGVybU1hc2spfFBlcm1pc3Npb25zKEtleSk/fFN0YXJ0UGFyYW1ldGVyfExpc3QoTGVuZ3RofEVudHJ5VHlwZSl8RGF0ZXxBZ2VudChTaXplfEluZm98TGFuZ3VhZ2V8TGlzdCl8TGFuZE93bmVyQXR8Tm90ZWNhcmRMaW5lfFNjcmlwdChOYW1lfFN0YXRlKSl8KEdldHxSZXNldHxHZXRBbmRSZXNldClUaW1lfFBsYXlTb3VuZChTbGF2ZSk/fExvb3BTb3VuZChNYXN0ZXJ8U2xhdmUpP3woVHJpZ2dlcnxTdG9wfFByZWxvYWQpU291bmR8KChHZXR8RGVsZXRlKVN1YnxJbnNlcnQpU3RyaW5nfFRvKFVwcGVyfExvd2VyKXxHaXZlKEludmVudG9yeUxpc3R8TW9uZXkpfFJlek9iamVjdHwoU3RvcCk/TG9va0F0fFNsZWVwfENvbGxpc2lvbkZpbHRlcnwoVGFrZXxSZWxlYXNlKUNvbnRyb2xzfERldGFjaEZyb21BdmF0YXJ8QXR0YWNoVG9BdmF0YXIoVGVtcCk/fEluc3RhbnRNZXNzYWdlfChHZXROZXh0KT9FbWFpbHxTdG9wSG92ZXJ8TWluRXZlbnREZWxheXxSb3RMb29rQXR8U3RyaW5nKExlbmd0aHxUcmltKXwoU3RhcnR8U3RvcClBbmltYXRpb258VGFyZ2V0T21lZ2F8UmVxdWVzdChFeHBlcmllbmNlKT9QZXJtaXNzaW9uc3woQ3JlYXRlfEJyZWFrKUxpbmt8QnJlYWtBbGxMaW5rc3woR2l2ZXxSZW1vdmUpSW52ZW50b3J5fFdhdGVyfFBhc3NUb3VjaGVzfFJlcXVlc3QoQWdlbnR8SW52ZW50b3J5KURhdGF8VGVsZXBvcnRBZ2VudChIb21lfEdsb2JhbENvb3Jkcyk/fE1vZGlmeUxhbmR8Q29sbGlzaW9uU291bmR8UmVzZXRTY3JpcHR8TWVzc2FnZUxpbmtlZHxQdXNoT2JqZWN0fFBhc3NDb2xsaXNpb25zfEF4aXNBbmdsZTJSb3R8Um90MihBeGlzfEFuZ2xlKXxBKGNvc3xzaW4pfEFuZ2xlQmV0d2VlbnxBbGxvd0ludmVudG9yeURyb3B8U3ViU3RyaW5nSW5kZXh8TGlzdDIoQ1NWfEludGVnZXJ8SnNvbnxGbG9hdHxTdHJpbmd8S2V5fFZlY3RvcnxSb3R8TGlzdChTdHJpZGVkKT8pfERlbGV0ZVN1Ykxpc3R8TGlzdChTdGF0aXN0aWNzfFNvcnR8UmFuZG9taXplfChJbnNlcnR8RmluZHxSZXBsYWNlKUxpc3QpfEVkZ2VPZldvcmxkfEFkanVzdFNvdW5kVm9sdW1lfEtleTJOYW1lfFRyaWdnZXJTb3VuZExpbWl0ZWR8RWplY3RGcm9tTGFuZHwoQ1NWfFBhcnNlU3RyaW5nKTJMaXN0fE92ZXJNeUxhbmR8U2FtZUdyb3VwfFVuU2l0fEdyb3VuZChTbG9wZXxOb3JtYWx8Q29udG91cil8R3JvdW5kUmVwZWx8KFNldHxSZW1vdmUpVmVoaWNsZUZsYWdzfFNpdE9uTGlua3woQXZhdGFyT24pPyhMaW5rKT9TaXRUYXJnZXR8U2NyaXB0KERhbmdlcnxQcm9maWxlcil8RGlhbG9nfFZvbHVtZURldGVjdHxSZXNldE90aGVyU2NyaXB0fFJlbW90ZUxvYWRTY3JpcHRQaW58KE9wZW58Q2xvc2UpUmVtb3RlRGF0YUNoYW5uZWx8U2VuZFJlbW90ZURhdGF8UmVtb3RlRGF0YVJlcGx5fChJbnRlZ2VyfFN0cmluZylUb0Jhc2U2NHxYb3JCYXNlNjR8TG9nKDEwKT98QmFzZTY0VG8oU3RyaW5nfEludGVnZXIpfFBhcnNlU3RyaW5nS2VlcE51bGxzfFJlekF0Um9vdHxSZXF1ZXN0U2ltdWxhdG9yRGF0YXxGb3JjZU1vdXNlbG9va3woTG9hZHxSZWxlYXNlfChFfFVuZSlzY2FwZSlVUkx8UGFyY2VsTWVkaWEoQ29tbWFuZExpc3R8UXVlcnkpfE1vZFBvd3xNYXBEZXN0aW5hdGlvbnwoUmVtb3ZlRnJvbXxBZGRUb3xSZXNldClMYW5kKFBhc3N8QmFuKUxpc3R8KFNldHxDbGVhcilDYW1lcmFQYXJhbXN8SFRUUChSZXF1ZXN0fFJlc3BvbnNlKXxUZXh0Qm94fERldGVjdGVkVG91Y2goVVZ8RmFjZXxQb3N8KE58QmluKW9ybWFsfFNUKXwoTUQ1fFNIQTF8RHVtcExpc3QyKVN0cmluZ3xSZXF1ZXN0KFNlY3VyZSk/VVJMfENsZWFyKFByaW18TGluaylNZWRpYXwoTGluayk/UGFydGljbGVTeXN0ZW18KEdldHxSZXF1ZXN0KShVc2VybmFtZXxEaXNwbGF5TmFtZSl8UmVnaW9uU2F5VG98Q2FzdFJheXxHZW5lcmF0ZUtleXxUcmFuc2ZlckxpbmRlbkRvbGxhcnN8TWFuYWdlRXN0YXRlQWNjZXNzfChDcmVhdGV8RGVsZXRlKUNoYXJhY3RlcnxFeGVjQ2hhcmFjdGVyQ21kfEV2YWRlfEZsZWVGcm9tfE5hdmlnYXRlVG98UGF0cm9sUG9pbnRzfFB1cnN1ZXxVcGRhdGVDaGFyYWN0ZXJ8V2FuZGVyV2l0aGluKSlcXFxcYidcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0xTTCAoTGluZGVuIFNjcmlwdGluZyBMYW5ndWFnZSknLFxuICAgICAgICBpbGxlZ2FsOiAnOicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBMU0xfU1RSSU5HUyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAgICBobGpzLkNPTU1FTlQoJy8vJywgJyQnKSxcbiAgICAgICAgICAgICAgICAgICAgaGxqcy5DT01NRU5UKCcvXFxcXConLCAnXFxcXCovJylcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIExTTF9OVU1CRVJTLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoc3RhdGV8ZGVmYXVsdClcXFxcYidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYihzdGF0ZV8oZW50cnl8ZXhpdCl8dG91Y2goXyhzdGFydHxlbmQpKT98KGxhbmRfKT9jb2xsaXNpb24oXyhzdGFydHxlbmQpKT98dGltZXJ8bGlzdGVufChub18pP3NlbnNvcnxjb250cm9sfChub3RfKT9hdF8ocm90Xyk/dGFyZ2V0fG1vbmV5fGVtYWlsfGV4cGVyaWVuY2VfcGVybWlzc2lvbnMoX2RlbmllZCk/fHJ1bl90aW1lX3Blcm1pc3Npb25zfGNoYW5nZWR8YXR0YWNofGRhdGFzZXJ2ZXJ8bW92aW5nXyhzdGFydHxlbmQpfGxpbmtfbWVzc2FnZXwob258b2JqZWN0KV9yZXp8cmVtb3RlX2RhdGF8aHR0cF9yZShzcG9uc2V8cXVlc3QpfHBhdGhfdXBkYXRlfHRyYW5zYWN0aW9uX3Jlc3VsdClcXFxcYidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMU0xfRlVOQ1RJT05TLFxuICAgICAgICAgICAgTFNMX0NPTlNUQU5UUyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKGludGVnZXJ8ZmxvYXR8c3RyaW5nfGtleXx2ZWN0b3J8cXVhdGVybmlvbnxyb3RhdGlvbnxsaXN0KVxcXFxiJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsc2w7XG4iXSwic291cmNlUm9vdCI6IiJ9