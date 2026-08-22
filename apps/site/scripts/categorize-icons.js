/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const metadataPath = path.join(__dirname, "..", "src", "moticon", "metadata.json");
const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));

// Ordered rules; first match wins. Keys are exact icon names.
const categories = {
  "Arrows & Navigation": [
    "ArrowLeft", "ArrowRight", "ArrowUp", "ChevronDown", "ChevronUp",
    "CornerDownRight", "Navigation", "Navigation2", "Signpost", "Milestone",
    "Route", "Waypoints", "Locate", "Crosshair", "Pin", "MapPin", "Map",
    "Compass", "Move", "Expand", "Shrink",
  ],
  "Interface & Actions": [
    "Check", "X", "Plus", "Minus", "Search", "Settings", "Menu", "Grid",
    "LayoutGrid", "Kanban", "Sliders", "ToggleLeft", "Filter", "Copy",
    "Save", "Download", "Upload", "RefreshCw", "Repeat", "Shuffle",
    "MousePointer", "Command", "Loader", "Crop", "ListChecks", "Puzzle",
    "QrCode", "Fingerprint",
  ],
  "Files & Documents": [
    "Folder", "File", "FileText", "FilePlus", "FileMinus", "Clipboard",
    "ClipboardCheck", "ClipboardCopy", "ClipboardList", "Book", "Ticket",
    "Paperclip", "Inbox", "Presentation",
  ],
  "Communication": [
    "Mail", "MailOpen", "MailCheck", "MailPlus", "MailX", "Send",
    "SendHorizontal", "MessageCircle", "MessageSquare", "Phone",
    "PhoneCall", "PhoneIncoming", "PhoneOutgoing", "PhoneOff", "Voicemail",
    "Mic", "MicOff", "Rss", "Antenna", "Satellite", "Bell", "BellOff",
    "BellPlus", "BellRing",
  ],
  "Media & Entertainment": [
    "Camera", "Video", "VideoOff", "Image", "Music", "Play", "Pause",
    "SkipForward", "Volume1", "Volume2", "VolumeX", "Headphones", "Radio",
    "Tv", "Webcam", "Gamepad2", "Dice5", "ScanFace", "ScanLine",
  ],
  "Devices & Tech": [
    "Cpu", "HardDrive", "Monitor", "Smartphone", "Tablet", "Keyboard",
    "Battery", "BatteryCharging", "BatteryFull", "BatteryLow", "Plug",
    "Wifi", "WifiOff", "Bluetooth", "Nfc", "Usb", "Cable", "Network",
    "Signal", "Code", "Terminal", "Database", "Server", "Flashlight",
    "Zap", "ZapOff",
  ],
  "Charts & Data": [
    "BarChart", "BarChart2", "LineChart", "PieChart", "TrendingUp",
    "TrendingDown", "Activity", "Gauge", "Hash",
  ],
  "Commerce & Finance": [
    "ShoppingCart", "ShoppingBag", "Store", "Package", "Package2", "Box",
    "Truck", "Receipt", "CreditCard", "Wallet", "Banknote", "Coins",
    "DollarSign", "Euro", "PoundSterling", "Bitcoin", "PiggyBank",
    "Percent", "Gift", "Tag",
  ],
  "Time & Calendar": [
    "Clock", "AlarmClock", "Calendar", "CalendarCheck", "CalendarClock",
    "CalendarPlus", "CalendarX", "Hourglass", "Timer",
  ],
  "Security & Access": [
    "Lock", "Unlock", "Key", "KeyRound", "Shield", "ShieldCheck",
    "ShieldAlert", "Siren", "DoorOpen", "DoorClosed", "BadgeCheck",
  ],
  "Weather & Nature": [
    "Sun", "Moon", "MoonStar", "SunMoon", "Cloud", "Cloudy", "CloudRain",
    "CloudDrizzle", "CloudLightning", "CloudSnow", "CloudFog", "Rainbow",
    "Snowflake", "Sunrise", "Sunset", "Thermometer", "ThermometerSun",
    "ThermometerSnowflake", "Wind", "Tornado", "Umbrella", "Droplet",
    "Waves", "Mountain", "MountainSnow", "Trees", "Leaf", "Flower",
    "Flower2", "Clover", "Sprout", "Palmtree", "Tent",
  ],
  "Animals": [
    "Fish", "FishSymbol", "Bug", "Bird", "Cat", "Dog", "PawPrint", "Shell",
  ],
  "Food & Drink": [
    "Apple", "Egg", "EggFried", "Pizza", "Wine", "Cake", "Wheat", "Carrot",
    "Croissant", "Sandwich", "Soup", "Salad", "IceCreamCone", "Popcorn",
    "Beef", "Utensils", "UtensilsCrossed", "ChefHat", "Cookie", "Milk",
    "Grape", "Cherry", "Citrus", "Coffee",
  ],
  "People & Body": [
    "User", "Users", "UserPlus", "UserMinus", "Baby", "Accessibility",
    "Venus", "Mars", "Glasses", "Footprints", "Handshake", "ThumbsUp",
    "ThumbsDown",
  ],
  "Health & Science": [
    "Stethoscope", "Syringe", "Pill", "Bandage", "Cross", "HeartPulse",
    "Heart", "Dna", "Brain", "Microscope", "TestTube", "FlaskConical",
    "Beaker", "Atom", "Orbit", "Telescope", "Binoculars",
  ],
  "Objects & Tools": [
    "Wrench", "Hammer", "Ruler", "Paintbrush", "Palette", "Feather",
    "Scissors", "Anchor", "Rocket", "Flame", "FlameKindling", "Lamp",
    "Lightbulb", "Fan", "Shirt", "Watch", "Backpack", "Briefcase",
    "Building", "Landmark", "GraduationCap", "Award", "Trophy", "Medal",
    "Sword", "Target", "Sparkles",
  ],
  "Status & Alerts": [
    "AlertCircle", "AlertTriangle", "CheckCircle", "XCircle", "HelpCircle",
    "Info", "Flag", "FlagOff", "StarOff", "EyeOff", "Eye", "Bookmark",
    "Star", "Smile", "Trash",
  ],
  "Miscellaneous": [
    "Layers", "Link", "Share", "LogIn", "LogOut", "Pencil", "Globe",
    "InfinityIcon", "Recycle", "Home",
  ],
};

const nameToCategory = new Map();
for (const [category, names] of Object.entries(categories)) {
  for (const name of names) {
    if (nameToCategory.has(name)) {
      throw new Error(`Duplicate category assignment for ${name}`);
    }
    nameToCategory.set(name, category);
  }
}

const missing = metadata.filter((item) => !nameToCategory.has(item.name));
if (missing.length) {
  console.error("Missing category for:", missing.map((m) => m.name));
  process.exit(1);
}

const updated = metadata.map((item) => ({
  ...item,
  category: nameToCategory.get(item.name),
}));

fs.writeFileSync(metadataPath, JSON.stringify(updated, null, 2) + "\n");
console.log(`Categorized ${updated.length} icons across ${Object.keys(categories).length} categories.`);
