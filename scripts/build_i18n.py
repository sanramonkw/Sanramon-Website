# -*- coding: utf-8 -*-
"""Add data-i18n attributes and merge sector translations."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

SECTOR_AR = {
    "sector.ourPortfolio": "محفظتنا",
    "sector.learnMore": "اعرف المزيد",
    "sector.orderOnTalabat": "اطلب عبر طلبات",
    "sector.orderNow": "اطلب الآن",
    "sector.explorePartners": "استكشف الشركاء ←",
    "sector.exploreProjects": "استكشف المشاريع",
    "sector.ingredients": "مكونات",
    "footer.sector.oilGas": "النفط والغاز",
    "footer.sector.products": "المنتجات",
    "footer.sector.food": "الأغذية والمشروبات",
    "footer.sector.cafe": "المقاهي والمطاعم",
    "footer.sector.beauty": "منتجات التجميل",
    "footer.sector.interior": "التصميم الداخلي",
    "oil.hero.cta": "استكشف الشركاء ←",
    "oil.hero.stat1": "علامات شريكة",
    "oil.hero.stat2": "دول",
    "oil.hero.stat3": "سنوات من النشاط",
    "oil.section.lbl": "محفظتنا",
    "oil.section.h2": "سبع علامات،<br><em>معيار واحد</em>",
    "oil.section.p": "من صمامات الأمان الدقيقة المصنوعة في إيطاليا إلى مضخات التجويف التقدمي الهندسية — يُختار كل شريك في محفظة النفط والغاز لسبب واحد: الجودة بلا مساومة.",
    "oil.brand1.name": "تشيس",
    "oil.brand1.origin": "المملكة المتحدة وأوروبا",
    "oil.brand1.desc": "تستجيب تشيس لمتطلبات العملاء حول العالم وتوفر حلولاً فعالة من حيث التكلفة لتوريد المعدات الهندسية وقطع الغيار المصنعة في المملكة المتحدة وأوروبا.",
    "oil.brand2.name": "PHE بوليمرز",
    "oil.brand2.origin": "الولايات المتحدة الأمريكية",
    "oil.brand2.desc": "تتمثل مهمة PHE بوليمرز في توريد حلول إحكام عالية الجودة لسوق المبادلات الحرارية اللوحية — أنظمة إحكام أسرع وأرخص وبمعايير أداء مماثلة أو أفضل.",
    "oil.brand3.name": "AST",
    "oil.brand3.origin": "إيطاليا",
    "oil.brand3.desc": "تنتج AST، ومقرها إيطاليا، مجموعة واسعة من صمامات الأمان المناسبة لجميع أنواع التركيبات لحماية من الضغط الزائد — وفق ضوابط جودة صارمة وشهادات دولية.",
    "oil.brand4.name": "حلول هندسية",
    "oil.brand4.origin": "المملكة المتحدة وأوروبا",
    "oil.brand4.desc": "حلول فعالة من حيث التكلفة لتوريد معدات هندسية دقيقة وقطع غيار مصنعة بأعلى المعايير في المملكة المتحدة وأوروبا — تُسلَّم إلى الكويت ودول مجلس التعاون.",
    "oil.brand5.name": "سينو بمبس",
    "oil.brand5.origin": "الهند",
    "oil.brand5.desc": "شركة رائدة في تصنيع وتوريد وتصدير مضخات التجويف التقدمي لتطبيقات واسعة: مياه الصرف، معالجة الأغذية، النفط، الأدوية، الطاقة، الأسمدة، والصناعات الكيميائية.",
    "oil.brand6.name": "CPI فلويد إنجنيرينغ",
    "oil.brand6.origin": "الولايات المتحدة — قسم لوبريزول",
    "oil.brand6.desc": "قسم من شركة لوبريزول، تعزز CPI فلويد إنجنيرينغ الحياة العصرية من خلال هندسة السوائل — في الطاقة والراحة المنزلية وسلامة الغذاء وغيرها.",
    "oil.brand7.name": "نوفا جنرال<br>إنسترومنت",
    "oil.brand7.origin": "إيطاليا",
    "oil.brand7.desc": "تنتج صمامات أمان من النحاس والفولاذ المقاوم للصدأ — تصريف حر أو موصول — لتخفيف الضغط من حاويات الغاز والبخار والسوائل في المصانع الكيميائية والدوائية وال criogenic.",
    "oil.ticker.1": "هندسة دقيقة",
    "oil.ticker.2": "معايير دولية",
    "oil.ticker.3": "توزيع في مجلس التعاون",
    "oil.ticker.4": "حلول فعالة التكلفة",
    "oil.ticker.5": "المملكة المتحدة · أمريكا · إيطاليا · الهند",
    "oil.ticker.6": "تميز النفط والغاز",
    "products.hero.stat1": "علامات استهلاكية",
    "products.hero.stat2": "توزيع",
    "products.hero.stat3": "حائزة على جوائز",
    "products.section.lbl": "محفظتنا",
    "products.section.h2": "ست علامات،<br><em>حرفة واحدة</em>",
    "products.section.p": "من قهوة عربية تراثية إلى كبسولات نسبريسو وبخاخات طهي طبيعية — كل علامة في محفظتنا مصنوعة لتلبية رغبات الحياة اليومية في الخليج وما بعده.",
    "products.brand1.name": "كيف المسافر",
    "products.brand1.origin": "الكويت — مجلس التعاون",
    "products.brand1.tag": "فائزة بجائزة ISO",
    "products.brand1.desc": "أول قهوة عربية فورية تفوز بجائزة ISO. يجمع كيف المسافر أصالة الماضي وإيقاع الحياة المعاصرة — قهوة فورية من أجود حبوب البن. مجد الضيافة العربية الأصيلة، فوراً.",
    "products.brand2.name": "نجدية",
    "products.brand2.origin": "الكويت — منطقة الخليج",
    "products.brand2.desc": "الطعم الأصلي والكلاسيكي للقهوة العربية، فورياً. متجذرة في ثقافة غنية، تُصنع خلطات نجدية من أجود حبوب البن والمكونات — لتذوق القهوة العربية التقليدية أينما كنت.",
    "products.brand3.name": "كرك تي",
    "products.brand3.origin": "الكويت — منطقة الخليج",
    "products.brand3.tag": "خلطة فورية 100٪ طبيعية",
    "products.brand3.desc": "شاي الأكثر مبيعاً في منطقة الخليج. عريق في مكوناته، فريد في نكهته، مميز في تحضيره — خلطات كرك تي بخيارات متنوعة لجميع الأذواق. جاهز في أقل من دقيقة.",
    "products.brand3.linkVisit": "زيارة karaktea.com",
    "products.brand4.name": "كابري",
    "products.brand4.origin": "الكويت — مستوحى من إيطاليا",
    "products.brand4.desc": "مستوحى من الجزيرة الإيطالية المعروفة بالقهوة، تقدم كابري كبسولات متوافقة مع نسبريسو. مصممة لآلة كابري نسبريسو — ذوق إيطالي أصيل لأجل الكويت.",
    "products.brand5.name": "فنجان العرب",
    "products.brand5.origin": "الرياض — الكويت",
    "products.brand5.desc": "مستورد من الرياض لأصحاب الذوق الرفيع. فنجان العرب قهوة عربية فورية فاخرة، خالية من المواد الحافظة، بنكهة القهوة العربية الأصيلة الوحيدة.",
    "products.brand6.name": "فود هاكس",
    "products.brand6.origin": "الكويت — مجلس التعاون",
    "products.brand6.tag": "مكونات 100٪ طبيعية",
    "products.brand6.desc": "يستخدم فود هاكس مزيجاً فريداً من الزيوت في بخاخ الطهي غير اللاصق لتسهيل الطهي والخبز والشواء — زيت زيتون بكر، زيت trufle، وبخاخ زعفران.",
    "products.ticker.1": "قهوة حائزة على جائزة ISO",
    "products.ticker.2": "طعم التقاليد",
    "products.ticker.3": "توزيع مجلس التعاون",
    "products.ticker.4": "مكونات 100٪ طبيعية",
    "products.ticker.5": "الكويت · الخليج · الرياض",
    "products.ticker.6": "مصنوعة للحياة اليومية",
    "beauty.section.lbl": "محفظتنا",
    "beauty.section.p": "قادتنا الابتكارات المستمرة إلى عالم الجمال. بجمع معرفتنا بالمنتجات والخدمات، نقدم منتجات تجميل فاخرة وخدمات عافية متميزة — نشجع عملاءنا على استكشاف الجمال والعافية عبر علاماتنا المختارة.",
    "beauty.brand1.name": "بيلا تيرا كوزمتكس",
    "beauty.brand1.origin": "الكويت — معادن طبيعية",
    "beauty.brand1.tag": "خالية من القسوة · لا تجارب على الحيوانات",
    "beauty.brand1.desc": "تستخدم بيلا تيرا أجود المعادن عالية الجودة لتحسين صحة البشرة وتغطية flawless. جميع المنتجات من مكونات طبيعية دون تجارب على الحيوانات — توهج طبيعي radiant لجميع أنواع البشرة.",
    "beauty.brand2.name": "مارشميلوز نيل سبا",
    "beauty.brand2.origin": "الكويت",
    "beauty.brand2.desc": "دلّلي أظافرك في مارشميلوز نيل سبا. فنيونا متخصصون في فن الأظافر، الجل الفقاعي، المانيكير والباديكير بأجود المنتجات — في أجواء فاخرة ومريحة.",
    "beauty.ticker.1": "مستحضرات تجميل فاخرة",
    "beauty.ticker.2": "معادن طبيعية",
    "beauty.ticker.3": "فن الأظافر وخدمات السبا",
    "beauty.ticker.4": "خالية من القسوة",
    "beauty.ticker.5": "الكويت · الجمال",
    "beauty.ticker.6": "العافية والأناقة",
    "cafe.section.lbl": "محفظتنا",
    "cafe.section.h2": "علامتان،<br><em>معيار واحد</em>",
    "cafe.section.p": "إلى جانب منتجاتنا، نخدم عملاءنا في مقاهينا ومطاعمنا. شوكولاتتنا تناسب كل المناسبات. قهوتنا تُحضَّر وتُوصَل إلى منزلك. هنا نتفوق في إرضاء العملاء وبناء شراكات دائمة.",
    "cafe.hero.stat3": "تموين",
    "cafe.brand1.name": "كابري",
    "cafe.brand1.origin": "الكويت — مستوحى من إيطاليا",
    "cafe.brand1.desc": "مستوحى من الجزيرة الإيطالية المعروفة بالقهوة، تقدم كابري كبسولات نسبريسو وخدمات تموين ومحطات قهوة وثلاجات ومزيداً. الذوق الإيطالي الأصلي يصل إلى باب منزلك.",
    "cafe.brand2.name": "JPH — جاكيت بوتيتو وهوت دوغ",
    "cafe.brand2.origin": "الكويت",
    "cafe.brand2.desc": "في جاكيت بوتيتو وهوت دوغ، تخصصنا الأطعمة الخفيفة — بطاطس مشوية محشوة، نقانق، وخيارات قابلة للتخصيص لجميع الأذواق.",
    "cafe.ticker.1": "تميز القهوة الإيطالية",
    "cafe.ticker.2": "أطعمة خفيفة حرفية",
    "cafe.ticker.3": "تموين منزلي متاح",
    "cafe.ticker.4": "شوكولاتة لكل مناسبة",
    "cafe.ticker.5": "الكويت · الخليج",
    "cafe.ticker.6": "تميز المقاهي والمطاعم",
    "food.hero.stat2": "توزيع",
    "food.section.lbl": "محفظتنا",
    "food.section.h2": "أربع علامات،<br><em>معيار واحد</em>",
    "food.section.p": "من الشوكولاتة الحرفية إلى القهوة الإيطالية والأطعمة الخفيفة — تميزنا في العثور على أعلى جودة يجعلنا رائدين في إنتاج وتوزيع الأغذية والمشروبات في مجلس التعاون.",
    "food.brand1.name": "كابري — نسبريسو",
    "food.brand1.origin": "الكويت — مستوحى من إيطاليا",
    "food.brand1.desc": "مستوحى من الجزيرة الإيطالية المعروفة بالقهوة، تقدم كابري كبسولات متوافقة مع نسبريسو بخيارات متنوعة من المشروبات.",
    "food.brand2.name": "كابري — تموين",
    "food.brand2.origin": "الكويت",
    "food.brand2.desc": "تقدم كابري خيارات تموين وتوصيل — قهوة وحلويات وأطباق لجميع المناسبات والفعاليات في الكويت.",
    "food.brand3.name": "كاكاونا",
    "food.brand3.origin": "الكويت",
    "food.brand3.desc": "تبحث عن الهدية المثالية؟ تقدم كاكاونا شوكولاتة حرفية وزهرية في علب وسلال — وهدايا مخصصة وحلويات عصرية وقهوة عربية.",
    "food.brand4.name": "JPH — جاكيت بوتيتو وهوت دوغ",
    "food.brand4.origin": "الكويت",
    "food.brand4.desc": "في جاكيت بوتيتو وهوت دوغ، تخصصنا الأطعمة الخفيفة. في JPH، تخصيص الطعام لجميع الأذواق — بطاطس محشوة ونقانق بلا حدود.",
    "food.ticker.1": "شوكولاتة حرفية",
    "food.ticker.2": "قهوة إيطالية",
    "food.ticker.3": "نكهات الخليج",
    "food.ticker.4": "من المطبخ إلى المائدة",
    "food.ticker.5": "الكويت · مجلس التعاون",
    "food.ticker.6": "تميز الأغذية والمشروبات",
    "interior.hero.stat1n": "سكني وتجاري",
    "interior.hero.stat2": "التخصص",
    "interior.hero.stat3n": "تأسست",
    "interior.hero.stat3l": "2004",
    "interior.section.lbl": "محفظتنا",
    "interior.section.h2": "علامة واحدة،<br><em>رؤية واحدة</em>",
    "interior.section.p": "متخصصون في التصميم الداخلي السكني والتجاري، نصنع أجواء من البساطة والأناقة والهدف. يقدم قسم التصميم الداخلي حلول تجهيز متكاملة في الكويت — نحوّل المساحات إلى تجارب تلهم وتدوم.",
    "interior.brand1.name": "فيت أوت",
    "interior.brand1.origin": "الكويت",
    "interior.brand1.desc": "قسم التصميم الداخلي في سان رامون متخصص في تقديم حلول تجهيز متكاملة للمساحات السكنية والتجارية في الكويت — من الفكرة إلى الإنجاز.",
    "interior.ticker.1": "تصميم داخلي سكني وتجاري",
    "interior.ticker.2": "حلول تجهيز متكاملة",
    "interior.ticker.3": "البساطة · الأناقة · الهدف",
    "interior.ticker.4": "تميز التصميم في الكويت",
    "interior.ticker.5": "تصميم يدوم",
    "interior.ticker.6": "مساحات تستحق العيش",
}

PATCHES = []  # (file, old, new, replace_all)


def add(file, old, new, replace_all=False):
    PATCHES.append((file, old, new, replace_all))


SECTOR_PAGES = [
    "Beauty.html", "Cafe - Restaurants.html", "Food - Beverages.html",
    "Interior Design.html", "Products.html", "Oil & Gas.html", "Careers.html",
]

for f in SECTOR_PAGES + ["index.html"]:
    if f == "index.html":
        add("index.html", '<li><a href="https://sanramonkw.com/brands/oil-gas/">Oil &amp; Gas</a></li>',
            '<li><a href="https://sanramonkw.com/brands/oil-gas/" data-i18n="footer.sector.oilGas">Oil &amp; Gas</a></li>')
        add("index.html", '<li><a href="https://sanramonkw.com/brands/products/">Products</a></li>',
            '<li><a href="https://sanramonkw.com/brands/products/" data-i18n="footer.sector.products">Products</a></li>')
        add("index.html", '<li><a href="https://sanramonkw.com/brands/food-beverages/">Food &amp; Beverages</a></li>',
            '<li><a href="https://sanramonkw.com/brands/food-beverages/" data-i18n="footer.sector.food">Food &amp; Beverages</a></li>')
        add("index.html", '<li><a href="https://sanramonkw.com/brands/cafe-restaurants/">Café &amp; Restaurants</a></li>',
            '<li><a href="https://sanramonkw.com/brands/cafe-restaurants/" data-i18n="footer.sector.cafe">Café &amp; Restaurants</a></li>')
        add("index.html", '<li><a href="https://sanramonkw.com/brands/beauty/">Beauty Products</a></li>',
            '<li><a href="https://sanramonkw.com/brands/beauty/" data-i18n="footer.sector.beauty">Beauty Products</a></li>')
        add("index.html", '<li><a href="https://sanramonkw.com/brands/interior-design/">Interior Design</a></li>',
            '<li><a href="https://sanramonkw.com/brands/interior-design/" data-i18n="footer.sector.interior">Interior Design</a></li>')
        add("index.html", '<li><a href="#brands">Brands</a></li>', '<li><a href="#brands" data-i18n="nav.brands">Brands</a></li>')
        continue
    add(f, '<li><a href="Oil &amp; Gas.html">Oil &amp; Gas</a></li>',
        '<li><a href="Oil &amp; Gas.html" data-i18n="footer.sector.oilGas">Oil &amp; Gas</a></li>')
    add(f, '<li><a href="Products.html">Products</a></li>',
        '<li><a href="Products.html" data-i18n="footer.sector.products">Products</a></li>')
    add(f, '<li><a href="Food - Beverages.html">Food &amp; Beverages</a></li>',
        '<li><a href="Food - Beverages.html" data-i18n="footer.sector.food">Food &amp; Beverages</a></li>')
    add(f, '<li><a href="Cafe - Restaurants.html">Café &amp; Restaurants</a></li>',
        '<li><a href="Cafe - Restaurants.html" data-i18n="footer.sector.cafe">Café &amp; Restaurants</a></li>')
    add(f, '<li><a href="Beauty.html">Beauty Products</a></li>',
        '<li><a href="Beauty.html" data-i18n="footer.sector.beauty">Beauty Products</a></li>')
    add(f, '<li><a href="Interior Design.html">Interior Design</a></li>',
        '<li><a href="Interior Design.html" data-i18n="footer.sector.interior">Interior Design</a></li>')

# Oil & Gas
add("Oil & Gas.html", '<a href="#brands" class="btn btn-gold">Explore Partners →</a>',
    '<a href="#brands" class="btn btn-gold" data-i18n="oil.hero.cta">Explore Partners →</a>')
add("Oil & Gas.html", '<span class="hero-stat-l">Partner Brands</span>', '<span class="hero-stat-l" data-i18n="oil.hero.stat1">Partner Brands</span>')
add("Oil & Gas.html", '<span class="hero-stat-l">Countries</span>', '<span class="hero-stat-l" data-i18n="oil.hero.stat2">Countries</span>')
add("Oil & Gas.html", '<span class="hero-stat-l">Years Active</span>', '<span class="hero-stat-l" data-i18n="oil.hero.stat3">Years Active</span>')
add("Oil & Gas.html", '<div class="lbl reveal">Our Portfolio</div>', '<div class="lbl reveal" data-i18n="oil.section.lbl">Our Portfolio</div>')
add("Oil & Gas.html", '<h2 class="reveal d1">Seven Brands,<br><em>One Standard</em></h2>',
    '<h2 class="reveal d1" data-i18n-html="oil.section.h2">Seven Brands,<br><em>One Standard</em></h2>')
add("Oil & Gas.html", '<p class="section-header-p">From precision safety valves',
    '<p class="section-header-p" data-i18n="oil.section.p">From precision safety valves')
for name, nk, orig, ok, ds, dk in [
    ("Chase", "oil.brand1.name", "United Kingdom &amp; Europe", "oil.brand1.origin", "Chase responds", "oil.brand1.desc"),
    ("PHE Polymers", "oil.brand2.name", "United States of America", "oil.brand2.origin", "PHE Polymers' mission", "oil.brand2.desc"),
    ("AST", "oil.brand3.name", "Italy", "oil.brand3.origin", "Based in Italy, AST", "oil.brand3.desc"),
    ("Engineering Solutions", "oil.brand4.name", "United Kingdom &amp; Europe", "oil.brand4.origin", "Cost-effective solutions to sourcing precision", "oil.brand4.desc"),
    ("Syno Pumps", "oil.brand5.name", "India", "oil.brand5.origin", "A leading manufacturer, supplier", "oil.brand5.desc"),
    ("CPI Fluid Engineering", "oil.brand6.name", "United States — Lubrizol Division", "oil.brand6.origin", "A division of The Lubrizol", "oil.brand6.desc"),
]:
    add("Oil & Gas.html", f'<h3 class="bc-name">{name}</h3>', f'<h3 class="bc-name" data-i18n="{nk}">{name}</h3>')
    add("Oil & Gas.html", f'<div class="bc-origin">{orig}</div>', f'<div class="bc-origin" data-i18n="{ok}">{orig}</div>')
    add("Oil & Gas.html", f'<p class="bc-desc">{ds}', f'<p class="bc-desc" data-i18n="{dk}">{ds}')
add("Oil & Gas.html", '<h3 class="bc-name">Nuova General<br>Instrument</h3>',
    '<h3 class="bc-name" data-i18n-html="oil.brand7.name">Nuova General<br>Instrument</h3>')
add("Oil & Gas.html", '<div class="bc-origin">Italy</div>', '<div class="bc-origin" data-i18n="oil.brand7.origin">Italy</div>')
add("Oil & Gas.html", '<p class="bc-desc">Produces safety valves in brass',
    '<p class="bc-desc" data-i18n="oil.brand7.desc">Produces safety valves in brass')
add("Oil & Gas.html", 'class="bc-link" target="_blank">Learn More</a>',
    'class="bc-link" target="_blank" data-i18n="sector.learnMore">Learn More</a>', True)
for i, t in enumerate(["Precision Engineering", "International Standards", "GCC Distribution",
                         "Cost-Effective Solutions", "UK · USA · Italy · India", "Oil &amp; Gas Excellence"], 1):
    add("Oil & Gas.html", f'<div class="sect-ticker-item">{t}</div>',
        f'<div class="sect-ticker-item" data-i18n="oil.ticker.{i}">{t}</div>', True)

# Products
add("Products.html", '<span class="hero-stat-l">Consumer Brands</span>', '<span class="hero-stat-l" data-i18n="products.hero.stat1">Consumer Brands</span>')
add("Products.html", '<span class="hero-stat-l">Distribution</span>', '<span class="hero-stat-l" data-i18n="products.hero.stat2">Distribution</span>')
add("Products.html", '<span class="hero-stat-l">Award Winning</span>', '<span class="hero-stat-l" data-i18n="products.hero.stat3">Award Winning</span>')
add("Products.html", '<div class="lbl reveal">Our Portfolio</div>', '<div class="lbl reveal" data-i18n="products.section.lbl">Our Portfolio</div>')
add("Products.html", '<h2 class="reveal d1">Six Brands,<br><em>One Craft</em></h2>',
    '<h2 class="reveal d1" data-i18n-html="products.section.h2">Six Brands,<br><em>One Craft</em></h2>')
add("Products.html", '<p class="section-header-p">From heritage Arabic coffee',
    '<p class="section-header-p" data-i18n="products.section.p">From heritage Arabic coffee')
add("Products.html", '<h3 class="bc-name">Kif Al Mosafer</h3>', '<h3 class="bc-name" data-i18n="products.brand1.name">Kif Al Mosafer</h3>')
add("Products.html", '<div class="bc-origin">Kuwait — GCC</div>', '<div class="bc-origin" data-i18n="products.brand1.origin">Kuwait — GCC</div>')
add("Products.html", '<div class="bc-tag">ISO Prize Winner</div>', '<div class="bc-tag" data-i18n="products.brand1.tag">ISO Prize Winner</div>')
add("Products.html", '<p class="bc-desc">The first instant Arab coffee', '<p class="bc-desc" data-i18n="products.brand1.desc">The first instant Arab coffee')
add("Products.html", '<h3 class="bc-name">Najdiya</h3>', '<h3 class="bc-name" data-i18n="products.brand2.name">Najdiya</h3>')
add("Products.html", '<div class="bc-origin">Kuwait — Gulf Region</div>', '<div class="bc-origin" data-i18n="products.brand2.origin">Kuwait — Gulf Region</div>', True)
add("Products.html", '<p class="bc-desc">The original and classic taste', '<p class="bc-desc" data-i18n="products.brand2.desc">The original and classic taste')
add("Products.html", '<h3 class="bc-name">Karak Tea</h3>', '<h3 class="bc-name" data-i18n="products.brand3.name">Karak Tea</h3>')
add("Products.html", '<div class="bc-tag">100% Natural Instant Premix</div>', '<div class="bc-tag" data-i18n="products.brand3.tag">100% Natural Instant Premix</div>')
add("Products.html", '<p class="bc-desc">A best-selling tea across', '<p class="bc-desc" data-i18n="products.brand3.desc">A best-selling tea across')
add("Products.html", 'href="https://karaktea.com/" class="bc-link" target="_blank">Visit karaktea.com</a>',
    'href="https://karaktea.com/" class="bc-link" target="_blank" data-i18n="products.brand3.linkVisit">Visit karaktea.com</a>')
add("Products.html", '<h3 class="bc-name">Capri</h3>', '<h3 class="bc-name" data-i18n="products.brand4.name">Capri</h3>')
add("Products.html", '<div class="bc-origin">Kuwait — Italian Inspired</div>', '<div class="bc-origin" data-i18n="products.brand4.origin">Kuwait — Italian Inspired</div>', True)
add("Products.html", '<p class="bc-desc">Inspired by the Italian island known for coffee, Capri offers Nespresso-compatible',
    '<p class="bc-desc" data-i18n="products.brand4.desc">Inspired by the Italian island known for coffee, Capri offers Nespresso-compatible')
add("Products.html", '<h3 class="bc-name">Finjan Al Arab</h3>', '<h3 class="bc-name" data-i18n="products.brand5.name">Finjan Al Arab</h3>')
add("Products.html", '<div class="bc-origin">Riyadh — Kuwait</div>', '<div class="bc-origin" data-i18n="products.brand5.origin">Riyadh — Kuwait</div>')
add("Products.html", '<p class="bc-desc">Imported from Riyadh for people', '<p class="bc-desc" data-i18n="products.brand5.desc">Imported from Riyadh for people')
add("Products.html", '<h3 class="bc-name">Food Hacks</h3>', '<h3 class="bc-name" data-i18n="products.brand6.name">Food Hacks</h3>')
add("Products.html", '<div class="bc-tag">100% Natural Ingredients</div>', '<div class="bc-tag" data-i18n="products.brand6.tag">100% Natural Ingredients</div>')
add("Products.html", '<p class="bc-desc">Food Hacks uses a unique blend', '<p class="bc-desc" data-i18n="products.brand6.desc">Food Hacks uses a unique blend')
add("Products.html", 'href="https://srkw.co/" class="bc-link" target="_blank">Order Now</a>',
    'href="https://srkw.co/" class="bc-link" target="_blank" data-i18n="sector.orderNow">Order Now</a>')
add("Products.html", 'href="https://order.sanramonkw.com/" class="bc-link" target="_blank">Order Now</a>',
    'href="https://order.sanramonkw.com/" class="bc-link" target="_blank" data-i18n="sector.orderNow">Order Now</a>', True)
add("Products.html", 'href="https://www.talabat.com/kuwait/capri" class="bc-link" target="_blank">Order on Talabat</a>',
    'href="https://www.talabat.com/kuwait/capri" class="bc-link" target="_blank" data-i18n="sector.orderOnTalabat">Order on Talabat</a>')
for i, t in enumerate(["ISO Award Winning Coffee", "The Taste of Tradition", "GCC Distribution",
                         "100% Natural Ingredients", "Kuwait · Gulf · Riyadh", "Crafted for Everyday Life"], 1):
    add("Products.html", f'<div class="sect-ticker-item">{t}</div>',
        f'<div class="sect-ticker-item" data-i18n="products.ticker.{i}">{t}</div>', True)

# Beauty
add("Beauty.html", '<span class="hero-stat-l">Ingredients</span>', '<span class="hero-stat-l" data-i18n="sector.ingredients">Ingredients</span>')
add("Beauty.html", '<div class="lbl reveal">Our Portfolio</div>', '<div class="lbl reveal" data-i18n="beauty.section.lbl">Our Portfolio</div>')
add("Beauty.html", '<p class="section-header-p">Our continued innovation has led us to venture',
    '<p class="section-header-p" data-i18n="beauty.section.p">Our continued innovation has led us to venture')
add("Beauty.html", '<h3 class="bc-name">Bella Terra Cosmetics</h3>', '<h3 class="bc-name" data-i18n="beauty.brand1.name">Bella Terra Cosmetics</h3>')
add("Beauty.html", '<div class="bc-origin">Kuwait — Natural Minerals</div>', '<div class="bc-origin" data-i18n="beauty.brand1.origin">Kuwait — Natural Minerals</div>')
add("Beauty.html", '<div class="bc-tag">Cruelty Free · No Animal Testing</div>', '<div class="bc-tag" data-i18n="beauty.brand1.tag">Cruelty Free · No Animal Testing</div>')
add("Beauty.html", '<p class="bc-desc">Bella Terra Cosmetics uses', '<p class="bc-desc" data-i18n="beauty.brand1.desc">Bella Terra Cosmetics uses')
add("Beauty.html", '<h3 class="bc-name">Marshmallows Nail Spa</h3>', '<h3 class="bc-name" data-i18n="beauty.brand2.name">Marshmallows Nail Spa</h3>')
add("Beauty.html", '<div class="bc-origin">Kuwait</div>', '<div class="bc-origin" data-i18n="beauty.brand2.origin">Kuwait</div>')
add("Beauty.html", '<p class="bc-desc">Pamper your nails', '<p class="bc-desc" data-i18n="beauty.brand2.desc">Pamper your nails')
for i, t in enumerate(["Luxury Cosmetics", "Natural Minerals", "Nail Art &amp; Spa Services",
                         "Cruelty Free", "Kuwait · Beauty", "Wellness &amp; Elegance"], 1):
    add("Beauty.html", f'<div class="sect-ticker-item">{t}</div>',
        f'<div class="sect-ticker-item" data-i18n="beauty.ticker.{i}">{t}</div>', True)

# Cafe
add("Cafe - Restaurants.html", '<span class="hero-stat-l">Catering</span>', '<span class="hero-stat-l" data-i18n="cafe.hero.stat3">Catering</span>')
add("Cafe - Restaurants.html", '<div class="lbl reveal">Our Portfolio</div>', '<div class="lbl reveal" data-i18n="cafe.section.lbl">Our Portfolio</div>')
add("Cafe - Restaurants.html", '<h2 class="reveal d1">2 Brands,<br><em>One Standard</em></h2>',
    '<h2 class="reveal d1" data-i18n-html="cafe.section.h2">2 Brands,<br><em>One Standard</em></h2>')
add("Cafe - Restaurants.html", '<p class="section-header-p">Alongside our products',
    '<p class="section-header-p" data-i18n="cafe.section.p">Alongside our products')
add("Cafe - Restaurants.html", '<h3 class="bc-name">Capri</h3>', '<h3 class="bc-name" data-i18n="cafe.brand1.name">Capri</h3>')
add("Cafe - Restaurants.html", '<div class="bc-origin">Kuwait — Italian Inspired</div>',
    '<div class="bc-origin" data-i18n="cafe.brand1.origin">Kuwait — Italian Inspired</div>')
add("Cafe - Restaurants.html", '<p class="bc-desc">Inspired by the Italian island known for coffee, Capri offers Nespresso capsules',
    '<p class="bc-desc" data-i18n="cafe.brand1.desc">Inspired by the Italian island known for coffee, Capri offers Nespresso capsules')
add("Cafe - Restaurants.html", '<h3 class="bc-name">JPH — Jacket Potato &amp; Hot Dogs</h3>',
    '<h3 class="bc-name" data-i18n="cafe.brand2.name">JPH — Jacket Potato &amp; Hot Dogs</h3>')
add("Cafe - Restaurants.html", '<div class="bc-origin">Kuwait</div>', '<div class="bc-origin" data-i18n="cafe.brand2.origin">Kuwait</div>')
add("Cafe - Restaurants.html", '<p class="bc-desc">At Jacket Potato and Hot Dogs, our specialty is finger foods',
    '<p class="bc-desc" data-i18n="cafe.brand2.desc">At Jacket Potato and Hot Dogs, our specialty is finger foods')
add("Cafe - Restaurants.html", 'class="bc-link" target="_blank">Order on Talabat</a>',
    'class="bc-link" target="_blank" data-i18n="sector.orderOnTalabat">Order on Talabat</a>', True)
for i, t in enumerate(["Italian Coffee Excellence", "Artisan Finger Food", "Home Catering Available",
                         "Chocolate for Every Occasion", "Kuwait · Gulf", "Café &amp; Restaurant Excellence"], 1):
    add("Cafe - Restaurants.html", f'<div class="sect-ticker-item">{t}</div>',
        f'<div class="sect-ticker-item" data-i18n="cafe.ticker.{i}">{t}</div>', True)

# Food
add("Food - Beverages.html", '<span class="hero-stat-l">Distribution</span>', '<span class="hero-stat-l" data-i18n="food.hero.stat2">Distribution</span>')
add("Food - Beverages.html", '<div class="lbl reveal">Our Portfolio</div>', '<div class="lbl reveal" data-i18n="food.section.lbl">Our Portfolio</div>')
add("Food - Beverages.html", '<h2 class="reveal d1">4 Brands,<br><em>One Standard</em></h2>',
    '<h2 class="reveal d1" data-i18n-html="food.section.h2">4 Brands,<br><em>One Standard</em></h2>')
add("Food - Beverages.html", '<p class="section-header-p">From artisan chocolate to Italian-inspired',
    '<p class="section-header-p" data-i18n="food.section.p">From artisan chocolate to Italian-inspired')
add("Food - Beverages.html", '<h3 class="bc-name">Capri — Nespresso</h3>', '<h3 class="bc-name" data-i18n="food.brand1.name">Capri — Nespresso</h3>')
add("Food - Beverages.html", '<p class="bc-desc">Inspired by the Italian island known for coffee, Capri offers Nespresso capsules with',
    '<p class="bc-desc" data-i18n="food.brand1.desc">Inspired by the Italian island known for coffee, Capri offers Nespresso capsules with')
add("Food - Beverages.html", '<h3 class="bc-name">Capri — Catering</h3>', '<h3 class="bc-name" data-i18n="food.brand2.name">Capri — Catering</h3>')
add("Food - Beverages.html", '<p class="bc-desc">Capri offers catering and delivery options',
    '<p class="bc-desc" data-i18n="food.brand2.desc">Capri offers catering and delivery options')
add("Food - Beverages.html", '<h3 class="bc-name">Kakawna</h3>', '<h3 class="bc-name" data-i18n="food.brand3.name">Kakawna</h3>')
add("Food - Beverages.html", '<p class="bc-desc">Looking for the perfect gift',
    '<p class="bc-desc" data-i18n="food.brand3.desc">Looking for the perfect gift')
add("Food - Beverages.html", '<h3 class="bc-name">JPH — Jacket Potato &amp; Hot Dogs</h3>',
    '<h3 class="bc-name" data-i18n="food.brand4.name">JPH — Jacket Potato &amp; Hot Dogs</h3>')
add("Food - Beverages.html", '<p class="bc-desc">At Jacket Potato and Hot Dogs, our specialty is finger foods. Using the highest quality',
    '<p class="bc-desc" data-i18n="food.brand4.desc">At Jacket Potato and Hot Dogs, our specialty is finger foods. Using the highest quality')
add("Food - Beverages.html", 'class="bc-link" target="_blank">Order on Talabat</a>',
    'class="bc-link" target="_blank" data-i18n="sector.orderOnTalabat">Order on Talabat</a>', True)
for i, t in enumerate(["Artisan Chocolate", "Italian Coffee", "Gulf Flavours",
                         "From Kitchen to Table", "Kuwait · GCC", "Food &amp; Beverage Excellence"], 1):
    add("Food - Beverages.html", f'<div class="sect-ticker-item">{t}</div>',
        f'<div class="sect-ticker-item" data-i18n="food.ticker.{i}">{t}</div>', True)

# Interior
add("Interior Design.html", '<span class="hero-stat-n">Res. &amp; Com.</span>',
    '<span class="hero-stat-n" data-i18n="interior.hero.stat1n">Res. &amp; Com.</span>')
add("Interior Design.html", '<span class="hero-stat-l">Specialization</span>',
    '<span class="hero-stat-l" data-i18n="interior.hero.stat2">Specialization</span>')
add("Interior Design.html", '<span class="hero-stat-n">Est.</span>',
    '<span class="hero-stat-n" data-i18n="interior.hero.stat3n">Est.</span>')
add("Interior Design.html", '<span class="hero-stat-l">2004</span>',
    '<span class="hero-stat-l" data-i18n="interior.hero.stat3l">2004</span>')
add("Interior Design.html", '<div class="lbl reveal">Our Portfolio</div>', '<div class="lbl reveal" data-i18n="interior.section.lbl">Our Portfolio</div>')
add("Interior Design.html", '<h2 class="reveal d1">One Brand,<br><em>One Vision</em></h2>',
    '<h2 class="reveal d1" data-i18n-html="interior.section.h2">One Brand,<br><em>One Vision</em></h2>')
add("Interior Design.html", '<p class="section-header-p">Specialized in residential',
    '<p class="section-header-p" data-i18n="interior.section.p">Specialized in residential')
add("Interior Design.html", '<h3 class="bc-name">Fit Out</h3>', '<h3 class="bc-name" data-i18n="interior.brand1.name">Fit Out</h3>')
add("Interior Design.html", '<div class="bc-origin">Kuwait</div>', '<div class="bc-origin" data-i18n="interior.brand1.origin">Kuwait</div>')
add("Interior Design.html", '<p class="bc-desc">San Ramon\'s interior design division',
    '<p class="bc-desc" data-i18n="interior.brand1.desc">San Ramon\'s interior design division')
add("Interior Design.html", 'class="bc-link" target="_blank">Explore Projects</a>',
    'class="bc-link" target="_blank" data-i18n="sector.exploreProjects">Explore Projects</a>')
for i, t in enumerate(["Residential &amp; Commercial Interiors", "Turnkey Fit-Out Solutions",
                         "Simplicity · Elegance · Purpose", "Kuwait Interior Excellence",
                         "Design That Endures", "Spaces Worth Living In"], 1):
    add("Interior Design.html", f'<div class="sect-ticker-item">{t}</div>',
        f'<div class="sect-ticker-item" data-i18n="interior.ticker.{i}">{t}</div>', True)


def apply_patches():
    by_file = {}
    for file, old, new, ra in PATCHES:
        by_file.setdefault(file, []).append((old, new, ra))
    for file, pairs in by_file.items():
        path = ROOT / file
        if not path.exists():
            print("MISSING", file)
            continue
        text = path.read_text(encoding="utf-8")
        n = 0
        for old, new, ra in pairs:
            if old not in text:
                key_m = re.search(r'data-i18n(?:-html)?="([^"]+)"', new)
                if key_m and f'data-i18n="{key_m.group(1)}"' in text:
                    continue
                if key_m and f'data-i18n-html="{key_m.group(1)}"' in text:
                    continue
                print("SKIP", file, old[:55])
                continue
            if ra:
                c = text.count(old)
                text = text.replace(old, new)
                n += c
            else:
                text = text.replace(old, new, 1)
                n += 1
        path.write_text(text, encoding="utf-8")
        print(f"patched {file} ({n} replacements)")


def merge_translations():
    path = ROOT / "js" / "translations-ar.js"
    text = path.read_text(encoding="utf-8")
    existing = {}
    for m in re.finditer(r'"([^"]+)":\s*"((?:[^"\\]|\\.)*)"', text):
        existing[m.group(1)] = m.group(1)
    for m in re.finditer(r'"([^"]+)":\s*"((?:[^"\\]|\\.)*)"', text, re.DOTALL):
        pass
    # Update or add keys
    for key, val in SECTOR_AR.items():
        esc = json.dumps(val, ensure_ascii=False)
        if key in existing:
            text = re.sub(
                rf'"{re.escape(key)}":\s*"(?:[^"\\]|\\.)*"',
                f'"{key}": {esc}',
                text,
            )
        else:
            text = text.rstrip().rstrip("};").rstrip() + f',\n  "{key}": {esc}'
            text += "\n};\n"
    path.write_text(text, encoding="utf-8")
    print(f"merged {len(SECTOR_AR)} sector translation keys")


if __name__ == "__main__":
    apply_patches()
    merge_translations()
    print("done")
