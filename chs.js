/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Q & A": "问 & 答",
    "\t1000 Star Points needed for the first prestige, that SHOULD speed up everything a bit": "\t1000 第一个声望所需的星点，应该加快一切",
    "\tAdded first layer": "\t添加第一层",
    "\tAdded fourth layer out of five !": "\t添加了五层中的第四层！",
    "\tAdded second layer": "\t添加了第二层",
    "\tAdded some tooltips, and changed some": "\t添加了一些工具提示，并更改了一些",
    "\tAdded third layer": "\t增加了第三层",
    "\tAlso, I nerfed Star Power production after 1e10": "\t另外，我在 1e10 之后削弱了 Star Power 的制作",
    "\tDark background might make it look WAY better": "\t深色背景可能会让它看起来更好",
    "\tFeel free to tell me some feature you'd like to see happen on the discord !": "\t请随时告诉我您希望在 discord 上看到的一些功能！",
    "\tFor the next prestige layer, you'll get to unlock new features along the way": "\t对于下一个声望层，您将在此过程中解锁新功能",
    "\tHave fun with all those QoL upgrades !": "\t享受所有这些 QoL 升级的乐趣！",
    "\tHaving fun with changelogs": "\t享受更新日志的乐趣",
    "\tHere are the background musics Implemented, I just have to check if it works correctly now...": "\t这是实现的背景音乐，我只需要检查它现在是否正常工作......",
    "\tI dunno the bolts amount for next prestige, stuff should grow fast now": "\t我不知道下一个声望的螺栓数量，现在应该会快速增长",
    "\tI guess 100 Leaves to the next prestige is ok ?": "\t我猜100叶到下一个声望可以吗？",
    "\tI heard the game became laggy at some points, it should now be all fixed !": "\t我听说游戏在某些时候变得迟钝，现在应该已经全部修复了！",
    "\tI made it a slider !": "\t我把它做成了一个滑块！",
    "\tI'll work on another day to make the last upgrade of that section work, plus, maybe expect small bugfix updates": "\t我将在另一天工作以使该部分的最后一次升级正常工作，另外，也许期待小的错误修复更新",
    "\tI'm not yet crazy, I assure you !": "\t我还没有发疯，我向你保证！",
    "\tI'm preparing what's left of the updates by implementing already all the variables I'd be needing": "\t我正在通过实现我需要的所有变量来准备剩下的更新",
    "\tIt became quite unreadable, right ?": "\t它变得非常难以阅读，对吧？",
    "\tIt will cost 10 000 leaves, but persists on bolt prestige !": "\t这将花费 10 000 片叶子，但仍然保持螺栓声望！",
    "\tIt's almost a small update": "\t这几乎是一个小更新",
    "\tLowered Bolts upgrade's costs": "\t降低了螺栓升级的成本",
    "\tNext update gets a new button if you already went up to purchasing all bolts upgrades !": "\t如果您已经购买了所有螺栓升级，下一次更新将获得一个新按钮！",
    "\tNext update, unless bug fixing required, will add new upgrades in other tabs if you unlocked some in the bolts prestige !": "\t下一次更新，除非需要修复错误，如果您在螺栓声望中解锁了一些，将在其他选项卡中添加新的升级！",
    "\tNice, look at the green one !": "\t不错，看绿色的！",
    "\tNo saves yet": "\t还没有保存",
    "\tNow that's fixed !": "\t现在已经解决了！",
    "\tOk, bolts cost *might* be too high": "\tOk，螺栓成本*可能*太高",
    "\tReworked some stuff not yet unlockable": "\t重做一些尚未解锁的东西",
    "\tSaves coming on the next small update !": "\t保存在下一个小更新中！",
    "\tSaving is back guys !": "\tSaving 回来了！",
    "\tSo you know what ?": "\t所以你知道吗？",
    "\tStill working on stuff, I've been asked about a mute button tho": "\t仍在处理东西，有人问我关于静音按钮的问题",
    "\tThe next prestige will be at some value of bolts, maybe 1000 ? I dunno, but I can tell you that this prestige will be about QoL content !": "\t下一个声望将是一些螺栓的价值，也许是 1000？我不知道，但我可以告诉你，这种声望将与 QoL 内容有关！",
    "\tThere's a vote for background musics, you should go take a look and vote too !": "\t有背景音乐的投票，你也应该去看看并投票！",
    "\tTOOLTIPS COMING !": "\t工具提示来了！",
    "\tUnless more fixing duty, this is the last update before 0.4 !": "\t除非有更多的修复任务，否则这是 0.4 之前的最后一次更新！",
    "\tUpdated text color too, it should always be readable now": "\t也更新了文本颜色，它现在应该总是可读的",
    "\tWhat does that even mean ?": "\t这甚至意味着什么？",
    "\tWhereas I've added something new so you could have new fun in the constellation tab...": "\t而我已经添加了一些新的东西，所以你可以在星座标签中获得新的乐趣......",
    "\tWoohoo, bolts !": "\t哇哦，螺栓！",
    "➞ Artist: Ron Gelinas": "➞ 艺术家：Ron Gelinas",
    "➞ Link to Track: youtu.be/9PSXZb6VPb4": "➞ 曲目链接：youtu.be/9PSXZb6VPb4",
    "➞ Track Title: Falling Leaves (Original Mix)": "➞ 曲目标题：落叶（原创混音）",
    "1 + your dust amount multiplies your starpoint gain (before nerf) !": "1 + 你的灰尘量乘以你的星点增益（在 nerf 之前）！",
    "A - because it doesn't resets your Star Points AND add missing stars you would have bought": "A - 因为它不会重置您的 Star Points 并添加您会购买的缺失星星",
    "About": "关于",
    "Actually, it's the constellation one that works for it !": "实际上，它是为它工作的星座！",
    "Add another star to the sky for": "为天空添加另一颗星星",
    "and have 20% chance to": "并有 20% 的机会",
    "apart and gather what's": "分开并收集什么",
    "automation faster for": "自动化更快",
    "Autosaves every 10s": "每 10 秒自动保存一次",
    "BE ALSO WARNED THAT WHEN LAUNCHING THE GAME THE IMAGES ARE RESETTED SINCE IT WOULD TAKE WAY TOO LONG TO SAVE THEM (I guess)": "还要注意的是，在启动游戏时，图像会被重置，因为保存它们需要很长时间（我猜）",
    "BE WARNED THAT THIS GAME WON'T RUN OFFLINE OR IF THE TAB ISN'T FOCUSED ON": "请注意，此游戏不会离线运行，或者如果选项卡未集中在",
    "bolts": "螺栓",
    "Bolts": "螺栓",
    "Bolts also power": "螺栓也有力量",
    "Call for the god of thunder": "召唤雷神",
    "Cast lightning upon": "施放闪电",
    "Charge up some stars": "给一些星星充电",
    "Click me! i'm innoffensive": "点我！我无害",
    "Comets": "彗星",
    "Constellation": "星座",
    "dust": "灰尘",
    "dusts": "灰尘",
    "Enable Autosave": "启用自动保存",
    "Francis (what a terrifying name)": "弗朗西斯（多么可怕的名字）",
    "get green stars for": "获得绿色星星",
    "get red stars for": "获得红星",
    "get yellow stars for": "得到黄色星星",
    "Green stars cubes the star power amount given by links using them !": "绿色星星将使用它们的链接提供的星星功率量立方！",
    "Grow up some stars": "长大一些星星",
    "Hard Reset": "硬重置",
    "Here is a link to the discord server of the game :": "这是游戏不和谐服务器的链接：",
    "I fixed lots of typos and a bug where the bolt upgrades were locked upon comet prestige": "我修复了许多错别字和螺栓升级被锁定在彗星声望上的错误",
    "it by the log of": "它通过日志",
    "Lava Lamps": "熔岩灯",
    "leaf": "叶子",
    "leaf power, which multiplies your Star Power gain by": "叶力量，它将你的星力增益乘以",
    "leaves": "树叶",
    "Leaves": "树叶",
    "Leaves power also power": "离开权力也权力",
    "left behind": "被留下来",
    "Link stars together more for": "将星星更多地联系在一起",
    "Make a new pattern": "制作新图案",
    "Make constellation scanner": "制作星座扫描仪",
    "Make the length of stars": "制作星星的长度",
    "Multiplies Leaf Power's Power by 1.5": "将叶子力量的力量乘以 1.5",
    "multiply your leaves": "倍增你的叶子",
    "Music by : Sirius Beat - The Cosmos": "作曲：Sirius Beat - The Cosmos",
    "Musics :": "音乐：",
    "of bolts on prestige": "声望的螺栓",
    "of leaves on prestige": "声望的叶子",
    "on your pile of twigs": "在你的一堆树枝上",
    "Passively earn 10%": "被动赚10%",
    "Peace Of Mind - By Kevin MacLeod": "安心 - 凯文麦克劳德",
    "per seconds for": "每秒为",
    "plant matter ?": "植物物质？",
    "Plus, it stops both green and yellow stars upgrades from disappearing upon comet prestige !": "另外，它可以阻止绿色和黄色恒星升级在彗星声望时消失！",
    "power themselves for": "为自己供能",
    "Power up your stars' speed for": "提高你的星星的速度",
    "Prestige for ...": "声望...",
    "Q - Why should I bother ?": "问 - 我为什么要打扰？",
    "Red stars hypercubes (^4) the star power amount given by links using them !": "红星超立方体（^4）使用它们的链接给出的星功率量！",
    "Requires both preceding star color upgrades to unlock it": "需要之前的两个星星颜色升级才能解锁它",
    "Reset Star Position": "重置星位",
    "Reset the pattern": "重置图案",
    "Resets everything": "重置一切",
    "Save as PNG": "另存为PNG",
    "Some other bugs are being fixed, and you can progress further with this red star upgrade now !": "其他一些错误正在修复中，您现在可以通过这次红星升级进一步进步！",
    "Speed up leaf pattern progress for": "加快叶型进度",
    "Square root of bolts plus one multiply your base Star point gain": "螺栓的平方根加一乘以您的基本星点增益",
    "Star Points": "星点",
    "Star points also power": "星点也是力量",
    "Star speed affect": "星速影响",
    "The game is slow !/The game is laggy !": "游戏很慢！/游戏很慢！",
    "The game starts slow because it will make you hit the laggy part later, i'm currently working on improving that but doesn't happen to make significant improvements...\n": "游戏开始很慢，因为它会让你稍后遇到滞后的部分，我目前正在努力改进它，但碰巧没有做出重大改进......\n",
    "The server is pretty empty and the main purpose of it was not to be about that incremental game, but a RPG that i'm programming. Still, it has a Fourier bot you can mess with!": "服务器非常空旷，它的主要目的不是关于那个增量游戏，而是我正在编程的 RPG。不过，它有一个傅里叶机器人，你可以搞砸！",
    "the sum of speeds": "速度总和",
    "This upgrade is TOTALLY PERMANENT !": "此升级是完全永久的！",
    "This upgrade is TOTALLY PERMANENT too !": "这次升级也是完全永久的！",
    "Thunder On The Floor": "地板上的雷声",
    "to capture electrical bolts": "捕获电气螺栓",
    "up Bolts given": "给定的螺栓",
    "up Leaves given": "给叶子",
    "Volume : 100%": "音量：100%",
    "Wait, that's USELESS !!!": "等等，没用的！！！",
    "Yellow stars square the star power amount given by links using them !": "黄色星星平方使用它们的链接给出的星星功率量！",
    "Your amount of stars": "你的星星数量",
    "your gains by powering": "您通过供电获得的收益",
    "Your growing leaves have generated": "你生长的叶子已经生成",
    "your stars to tears them": "你的星星让他们泪流满面",
    "gather some more leaves and": "收集更多的叶子和",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^, (.+) comet dust\(s\)$/, '，$1 彗星尘埃'],
    [/^, (.+) bolt\(s\)$/, '，$1 螺栓'],
    [/^, (.+) leaf\(ves\)$/, '，$1 叶子'],
    [/^\(Req : (.+) bolts\)$/, '\(要求 : $1 螺栓\)'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) Star Points$/, '$1 星点'],
    [/^([\d\.]+) leaves$/, '$1 叶子'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e\+([\d\.,]+) Star Points$/, '$1e\+$2 星点'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Get ([\d\.,]+) leaves$/, '获得 $1 叶子'],
    [/^Cost (.+) dusts$/, '成本 $1 尘埃'],
    [/^Cost (.+) bolts$/, '成本 $1 螺栓'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);