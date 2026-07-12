import type { Lang } from './site';

export interface BrandSocial {
  url: string;
  kind: 'web' | 'instagram';
}

export interface BrandItem {
  /** Brand name (used for alt text / accessibility; not rendered by the original theme). */
  name: string;
  image: string;
  logo: string;
  logoLink?: string;
  desc: { en: string; ar: string };
  socials: BrandSocial[];
}

export interface BrandCategory {
  /** English URL slug (matches original /brands/<slug>/). */
  slug: string;
  /** Arabic URL slug (matches original /ar/brands/<slug>/). */
  slugAr: string;
  banner: string;
  title: { en: string; ar: string };
  kicker: { en: string; ar: string };
  /** Home-page department card copy. */
  homeDesc: { en: string; ar: string };
  homeImage?: string;
  items: BrandItem[];
}

const b = (s: BrandItem) => s;

// ---- Brand items (copy is verbatim from the live site, EN and AR) ----

const chase = b({
  name: 'Chase',
  image: '/images/image-1603896519-1.png',
  logo: '/images/icon-1603894955.png',
  desc: {
    en: 'Chase responds to demands from customers worldwide and provides cost-effective solutions to sourcing engineering equipment and spare parts that are manufactured in the U.K and Europe.',
    ar: 'تستجيب "تشايس" لطلبات العملاء في جميع أنحاء العالم وتوفر حلولًا فعالة من حيث التكلفة للحصول على المعدات الهندسية وقطع الغيار التي يتم تصنيعها في المملكة المتحدة وأوروبا.',
  },
  socials: [],
});

const phePolymers = b({
  name: 'PHE Polymers',
  image: '/images/image-1603896582.png',
  logo: '/images/icon-1603895005.png',
  desc: {
    en: 'Based in the U.S., PHE Polymers’ mission is to supply a quality sealing solution to the Plate Heat Exchanger Market and offers sealing systems to the market cheaper, quicker and of equal or greater performance standards.',
    ar: 'تتمثل مهمة "بوليمرز" في توفير حل مانع للتسرب عالي الجودة لسوق المبادلات الحرارية للصفائح وتقدم أيضاً أنظمة إحكام إلى السوق أرخص وأسرع وذات معايير أداء مساوية أو أكبر ومقرها في الولايات المتحدة.',
  },
  socials: [],
});

const ast = b({
  name: 'AST',
  image: '/images/image-1603896839.png',
  logo: '/images/icon-1603896798.png',
  desc: {
    en: 'Based in Italy, AST produces a wide range of safety valves suitable for any type of installation to ensure overpressure protection. The valve range is subjected to strict quality controls and international certifications.',
    ar: 'تنتج "أ س ت" مجموعة واسعة من صمامات الأمان المناسبة لأي نوع من التركيبات لضمان الحماية من الضغط الزائد. نطاق الصمامات يخضع لضوابط جودة صارمة وشهادات دولية ومقرها في إيطاليا.',
  },
  socials: [],
});

const chase2 = b({
  name: 'Chase',
  image: '/images/image-1603896954.png',
  logo: '/images/icon-1603895139.png',
  desc: chase.desc,
  socials: [],
});

const synoPumps = b({
  name: 'Syno Pumps',
  image: '/images/image-1603897112.png',
  logo: '/images/icon-1603895189.png',
  desc: {
    en: 'Based in India, Syno Pumps is a leading manufacturer, supplier and exporter of progressive cavity pumps for a wide array of applications like: waste water, pulp & paper, food, sugar and distillery, pharmaceuticals, oil, power, fertilizer & chemical industries along with many more.',
    ar: 'تعد "سينو بامبس" شركة رائدة وموردًا ومصدرًا للمضخات الحلزونية اللامركزية لمجموعة واسعة من التطبيقات مثل: مياه الصرف الصحي ولب الورق والورق والأغذية والسكر والتقطير والمستحضرات الصيدلانية والزيوت والطاقة والأسمدة والصناعات الكيماوية إلى جانب العديد من الصناعات الأخرى ومقرها في الهند.',
  },
  socials: [],
});

const cpi = b({
  name: 'CPI Fluid Engineering',
  image: '/images/image-1603897027.png',
  logo: '/images/icon-1606112612.png',
  desc: {
    en: 'Based in the U.S., CPI Fluid Engineering, a division of The Lubrizol Corporation, enhances modern life through fluid engineering. The products impact everyday life by helping to provide natural energy, home comforts, food that is safe and healthy, and much more.',
    ar: 'تعمل "سي بي أي فلويد انجنيرنق" أحد أقسام شركة "لوبريزل" على تحسين الحياة العصرية من خلال هندسة السوائل توفير الطاقة الطبيعية ووسائل الراحة المنزلية والطعام الآمن والصحي وغير ذلك ومقرها في الولايات المتحدة.',
  },
  socials: [],
});

const nuova = b({
  name: 'Nuova General Instrument',
  image: '/images/image-1603896888.png',
  logo: '/images/icon-1603896888.png',
  desc: {
    en: 'Based in Italy, Nuova General Instrument produces safety valves in brass and stainless steel, both free and piped discharge, adaptable to any kind of fluid, that are used for releasing the pressure from gas, steam and liquid containers, and installed in chemical, pharmaceutical, food, cryogenic, and other processing plants.',
    ar: 'تُنتج "نووفا جنرال انسترومنت" صمامات أمان من النحاس الأصفر والفولاذ المقاوم للصدأ وكل من التفريغ الحر والأنابيب القابلة للتكيف مع أي نوع من السوائل والتي تُستخدم لتحرير الضغط من حاويات الغاز والبخار والسائل ويتم تثبيتها في المواد الكيميائية والصيدلانية والغذائية وغيرها ومقرها في إيطاليا.',
  },
  socials: [],
});

const kifAlMosafer = b({
  name: 'Kif Al Mosafer',
  image: '/images/image-1606285573.jpg',
  logo: '/images/icon-1603860357.png',
  logoLink: 'https://srkw.co/',
  desc: {
    en: 'The first instant Arab coffee that won the ISO prize. Kif Al Mosafer Arabic coffee combines the authenticity of the past and the speedy lifestyle of the present, to introduce an instant coffee made from the highest quality coffee beans. Kif Al Mosafer is the glory of genuine Arab hospitality, only made instantly.',
    ar: 'The first instant Arab coffee that won the ISO prize. Kif Al Mosafer Arabic coffee combines the authenticity of the past and the speedy lifestyle of the present, to introduce an instant coffee made from the highest quality coffee beans. Kif Al Mosafer is the glory of genuine Arab hospitality, only made instantly.',
  },
  socials: [
    { url: 'https://srkw.co/', kind: 'web' },
    { url: 'https://www.instagram.com/kifalmosaferkw/', kind: 'instagram' },
  ],
});

const najdiya = b({
  name: 'Najdiya',
  image: '/images/image-1606285687.jpg',
  logo: '/images/icon-1603892669.png',
  logoLink: 'https://order.sanramonkw.com/',
  desc: {
    en: 'The original and classic taste of Arabic coffee only made instant! Rooted in a rich culture, our Arabic coffee mixes are created from the finest quality coffee beans and ingredients so you can experience the true traditional taste of Arabic coffee whenever and wherever you want. Have a sip, close your eyes, and enjoy the journey into tradition.',
    ar: 'القهوة العربية جزء مهم من الثقافة العربية ولتجربة المذاق التقليدي والحقيقي للقهوة العربية التي لم تتغير منذ قرون نستخدم أجود أنواع حبوب البن والمكونات في خلطتنا للقهوة. خلطة قهوة نجدية سريعة التحضير لتستمتع برحلة إلى التقاليد في أي وقت وفي أي مكان.',
  },
  socials: [
    { url: 'https://order.sanramonkw.com/', kind: 'web' },
    { url: 'https://www.instagram.com/najdiyakw/', kind: 'instagram' },
  ],
});

const karakTea = b({
  name: 'Karak Tea',
  image: '/images/image-1606374537.jpg',
  logo: '/images/icon-1603893944.png',
  logoLink: 'https://karaktea.com/',
  desc: {
    en: 'A best-selling tea across the Gulf region. Ancient in its ingredients, unique in its flavor, and distinguished in its preparation, our karak tea premixes come in a variety of options to satisfy all tastes and desires. Whether it is sweetened or unsweetened, all flavors can be prepared in less than a minute! Sit back, relax, and enjoy your warm cup of karak tea. 100% Natural Instant Premix Karak Tea',
    ar: 'شاي كرك الأكثر مبيعًا في منطقة الخليج متميز في النكهة الخاصة والمكونات التقليدية وطريقة التحضير المتميز. خلطات شاي كرك متنوعة لإرضاء جميع الأذواق والرغبات وسريعة التحضير. سواء كانت محلاة أو غير محلاة يمكنك تحضير جميع النكهات في أقل من دقيقة! استمتع بكوب دافئ من شاي كرك في أي وقت!',
  },
  socials: [
    { url: 'https://karaktea.com/', kind: 'web' },
    { url: 'https://www.instagram.com/karakteakw/', kind: 'instagram' },
  ],
});

const capriCapsules = b({
  name: 'Capri',
  image: '/images/image-1606302815-1.jpg',
  logo: '/images/icon-1606378712.png',
  logoLink: 'https://www.talabat.com/kuwait/capri',
  desc: {
    en: 'Inspired by the Italian island known for coffee, Capri offers Nespresso capsules with a variety of beverage options. The Nespresso capsules are specifically designed for the Capri Nespresso Machine, owned by the Kuwaiti company “San Ramon” and distributed by many companies in the Gulf region. If you’re looking for a machine, capsules, and the original Italian taste? Capri is the answer.',
    ar: 'كابري مستوحاة من الجزيرة الإيطالية المعروفة بالقهوة وتقدم كبسولات مع مجموعة متنوعة من الخيارات. كبسولات كابري مصممة خصيصاً لماكينة إعداد قهوة كابري المملوكة لشركة "سان ريمون" الكويتية والتي توزعها العديد من الشركات في منطقة الخليج. كابري توفر لك ماكينة إعداد قهوة وكبسولات إيطالية متميزة',
  },
  socials: [
    { url: 'https://www.talabat.com/kuwait/capri', kind: 'web' },
    { url: 'https://www.instagram.com/caprikw/', kind: 'instagram' },
  ],
});

const capriCatering = b({
  name: 'Capri Catering',
  image: '/images/image-1606302815-1.jpg',
  logo: '/images/icon-1603894736.png',
  logoLink: 'https://www.talabat.com/kuwait/capri',
  desc: {
    en: 'Inspired by the Italian island known for coffee, Capri offers numerous catering and delivery options. Capri’s catering includes cold coffee fridges, ice cream machines, hot coffee stations and a decorative coffee bicycle booth at the comfort of your house. Capri also provides a variety of ready-to-order hot and cold coffee with dessert and ice cream options. If you’re looking for the original taste of Italian coffee indoors or outdoors, Capri is the answer.',
    ar: 'كابري مستوحاة من الجزيرة الإيطالية المعروفة بالقهوة وتقدم العديد من خيارات الكيترنق والتوصيل. لأفضل خدمة في راحة منزلك نوفر لك ثلاجات القهوة الباردة وأجهزة الآيس كريم ومحطات القهوة الساخنة ومحطة قهوة مميزة مزينة كالدراجة. نقدم أيضًا في كابري مجموعة متنوعة من القهوة الساخنة والباردة الجاهزة للطلب مع أنواع الحلويات والآيس كريم. مع كابري استمتع بالقهوة الإيطالية الأصيلة.',
  },
  socials: capriCapsules.socials,
});

const finjanAlArab = b({
  name: 'Finjan Al Arab',
  image: '/images/image-1606375201.jpg',
  logo: '/images/icon-1603894250.png',
  logoLink: 'https://order.sanramonkw.com/',
  desc: {
    en: 'Imported from Riyadh for people with fine taste, Finjan Al Arab is a premium Arabic instant coffee free of preservatives. To offer the genuine traditional experience, it comes in one flavor only: the classic Arabic coffee. Enjoy authenticity and happiness with a cup of instant coffee.',
    ar: 'مستوردة من الرياض لأصحاب الذوق الرفيع. فنجان العرب هي قهوة عربية فاخرة خالية من المواد الحافظة وتأتي في نكهة واحدة فقط: القهوة العربية التقليدية. استمتع بالأصالة والسعادة مع فنجان قهوة سريعة التحضير.',
  },
  socials: [
    { url: 'https://order.sanramonkw.com/', kind: 'web' },
    { url: 'https://www.instagram.com/finjanalarabkw/', kind: 'instagram' },
  ],
});

const foodHacks = b({
  name: 'Food Hacks',
  image: '/images/black.png',
  logo: '/images/icon-1604299320.png',
  logoLink: 'https://order.sanramonkw.com/',
  desc: {
    en: 'Food hacks uses a unique blend of oils in its non-stick cooking spray to makes all types of cooking, baking, and even grilling easier. Our varieties include extra virgin olive oil spray, truffle flavored extra virgin oil spray, and saffron spray. Made from 100% natural ingredients, our cooking sprays help you cook a healthier and tastier meal with less grease!',
    ar: 'نستخدم في فود هاكز مزيجًا فريدًا من الزيوت لنوفر لك بخاخ طبخ غير لاصق مصنوع من مكونات طبيعية ١٠٠٪. تستطيع أن تختار من زيت زيتون بكر أو زيت زيتون بكر ممتاز بنكهة الكمأة أو بخاخ الزعفران لتجهيز وجبات صحية ولذيذة بدون دهون. مع فود هاكز نوعدك بتجربة طبخ وتنظيف أسهل.',
  },
  socials: [{ url: 'https://order.sanramonkw.com/', kind: 'web' }],
});

const kakawna = b({
  name: 'Kakawna',
  image: '/images/image-1606304394.jpg',
  logo: '/images/icon-1603894619.png',
  logoLink: 'https://www.talabat.com/kuwait/kakawna',
  desc: {
    en: 'Looking for the perfect gift for all occasions? Kakawna offers artisan and decorative chocolate pieces with fruit and flowers in jars, boxes, trays, and baskets! Not a fan of chocolate? Kakawna also offers custom giveaways, modern and traditional desserts, hot chocolate, and Arabic coffee! Sounds too good to be true? Try it yourself.',
    ar: 'هدية مثالية لجميع المناسبات؟ عندنا في كاكاونا قطع شوكولاتة حرفية مع الفاكهة والورد في علبة أو صينية أو سلة! ما تحب الشوكولاتة؟ نقدم في كاكاونا هدايا قابلة للتخصيص وحلويات متنوعة وهوت تشوكليت وقهوة عربية! مع كاكاونا اطلب اللي بخاطرك ولا تشيل هم الهدايا.',
  },
  socials: [
    { url: 'https://www.talabat.com/kuwait/kakawna', kind: 'web' },
    { url: 'https://www.instagram.com/kakawnaa/', kind: 'instagram' },
  ],
});

const jph = b({
  name: 'Jacket Potato & Hot Dogs',
  image: '/images/image-1606304014-1.jpg',
  logo: '/images/icon-1603894535.png',
  logoLink: 'https://www.talabat.com/kuwait/jacket-potato-and-hotdog',
  desc: {
    en: 'At Jacket Potato and Hot Dogs, our specialty is finger foods. We use the highest quality vegetables, ingredients, and buns so your tastebuds can indulge in ultimate levels of pleasure. Choose your potato or hot dog, and add all the toppings your heart desires. In JPH, we believe food customization is key to customer satisfaction.',
    ar: 'المأكولات الخفيفة تخصصنا في جاكيت بوتيتو أند هوت دوغ. ننتقي أعلى جودة من الخضروات والمكونات والخبز لتستمتع بتجربة تذوق في أعلى المستويات. اختر البطاطا أو الهوت دوغ وأضف أي نوع من الإضافات والصلصات التي تحبها. الجودة علينا والخيارات عليك.',
  },
  socials: [
    { url: 'https://www.talabat.com/kuwait/jacket-potato-and-hotdog', kind: 'web' },
    { url: 'https://www.instagram.com/jphkw/', kind: 'instagram' },
  ],
});

const bellaTerra = b({
  name: 'Bella Terra Cosmetics',
  image: '/images/image-1603897259.png',
  logo: '/images/icon-1603895360.png',
  desc: {
    en: 'Bella Terra Cosmetics uses the purest high-quality minerals to improve your skin’s health and provide a flawless coverage. All of Bella Terra products are made from natural ingredients and are absent from animal products and animal testing. Our makeup is perfect for any skin type and tone. The result of our cosmetics is a natural, radiant glow that visually minimizes fine lines, pores and imperfections. With Bella terra you can take care of your skin and create a breathtaking appearance at the same time.',
    ar: 'تستخدم مستحضرات بيلا تيرا للتجميل أنقى وأجود أنواع المعادن لتحسين صحة بشرتك وتوفير تغطية خالية من العيوب لإطلالة طبيعية ومشرقة. بيلا تيرا ضد التجارب على الحيوانات وجميع منتجات بيلا تيرا مصنوعة من مكونات طبيعية وخالية من المنتجات الحيوانية. مكياجنا مثالي لجميع أنواع وألوان البشرة لأن التنوع شعار مستحضراتنا. مع بيلا تيرا يمكنك الاعتناء بصحة بشرتك والحصول على مظهر خلاب في نفس الوقت.',
  },
  socials: [],
});

const marshmallows = b({
  name: 'Marshmallows Nail Spa',
  image: '/images/image-1603897197.png',
  logo: '/images/icon-1603895317.png',
  desc: {
    en: 'Pamper your nails at Marshmallows Nail Spa. Our nail technicians specialize in nail art, bubble gel, builder, manicures, and pedicures using the highest quality products in the market. For your relaxation we have specifically created a luxurious and cozy atmosphere at the spa so you can take care of your hair, brows, lashes, makeup, and skin. Your satisfaction is our priority, and we want you to enjoy our services at the comfort of your home too. Marshmallows Nail Spa offers all its services at the spa and at your home for you, for your loved ones, and for your little ones.',
    ar: 'دللي أظافرك في مارشميلوز نيل سبا. فريقنا متخصص في فن الأظافر والجل والمانيكير والباديكير ونستخدم أجود أنواع المنتجات الفاخرة والراقية للعناية بأظافرك. لاسترخائك قمنا بخلق أجواء رائعة ومريحة في الصالون لتتمتعي بالاهتمام بشعرك وحواجبك ورموشك ومكياجك وبشرتك. ولأن رضاك أولويتنا نقدم جميع خدماتنا في المنازل لراحتك وراحة أحبائك وأطفالك. استمتعي بخدماتنا في الصالون أو في راحة منزلك وتأكدي من جودة الخدمة مع مارشميلوز نيل سبا.',
  },
  socials: [],
});

const fitOut = b({
  name: 'Fit Out',
  image: '/images/black.png',
  logo: '/images/id1.png',
  logoLink: 'https://www.instagram.com/fitoutkw/',
  desc: {
    en: 'When it comes to professional high-quality interior design services, we are unparalleled. Fit Out provides construction services to private, public, and governmental sectors in Kuwait. We are specialized in commercial and residential interior design. We have achieved several considerable construction and remodeling projects and our designs are mostly known for their elegance and simplicity. You just imagine it, and we will do it.',
    ar: 'نقدم في "فيت أوت" خدمات البناء للقطاعات الخاصة والعامة والحكومية في الكويت. نحن متخصصون في التصميم الداخلي التجاري والسكني وتصميمنا الداخلي احترافي وعالي الجودة. على مر السنين أنجزنا العديد من مشاريع البناء وإعادة البناء وشعارنا الأناقة والبساطة في التصاميم.',
  },
  socials: [{ url: 'https://www.instagram.com/fitoutkw/', kind: 'instagram' }],
});

// ---- Categories ----

export const CATEGORIES: BrandCategory[] = [
  {
    slug: 'oil-gas',
    slugAr: 'النفط-والغاز',
    banner: '/images/6.png',
    title: { en: 'Oil & Gas', ar: 'النفط والغاز' },
    kicker: { en: 'WORLD WIDE PRODUCTS', ar: 'المنتجات العالمية' },
    homeImage: '/images/category-3-1.png',
    homeDesc: {
      en: 'Our set of skills with an effort to create partners has gained the attention of many petrochemical and oil companies. Through partnerships with the respective companies, we import spare parts integral to the main operation of the oil and gas sector along with cost-effective solutions.',
      ar: 'لخبرتنا ومهارتنا في العمل مع الشركاء تلقينا الكثير من الاهتمام من شركات البتروكيماويات والنفط ومن خلال الشراكات مع هذه الشركات نقوم باستيراد قطع غيار لقطاع النفط والغاز إلى جانب حلول فعالة من حيث التكلفة.',
    },
    items: [chase, phePolymers, ast, chase2, synoPumps, cpi, nuova],
  },
  {
    slug: 'products',
    slugAr: 'منتجات',
    banner: '/images/4.png',
    title: { en: 'Products', ar: 'منتجات' },
    kicker: { en: 'WORLD WIDE PRODUCTS', ar: 'المنتجات العالمية' },
    homeImage: '/images/category-1-1.png',
    homeDesc: {
      en: 'We prepared our products very carefully to meet your everyday desires and requires and satisfy your needs.We have production and distribution operations for food and beverages that extend to the GCC region as a whole',
      ar: 'اعددنا منتجاتنا لكم بعناية تامة لتتوافق مع الاختيارات و المتطلبات اليومية لكل فرد و تلبي الاحتياجات اللازمة.لدينا عمليات إنتاج وتوزيع للأغذية والمشروبات تمتد إلى منطقة دول مجلس التعاون الخليجي ككل',
    },
    items: [kifAlMosafer, najdiya, karakTea, capriCapsules, finjanAlArab, foodHacks],
  },
  {
    slug: 'food-beverages',
    slugAr: 'الأطعمة-والمشروبات',
    banner: '/images/5.png',
    title: { en: 'Food & Beverages', ar: 'الأطعمة والمشروبات' },
    kicker: { en: 'WORLD WIDE PRODUCTS', ar: 'المنتجات العالمية' },
    homeImage: '/images/category-2-1.png',
    homeDesc: {
      en: 'Our ability to find the highest quality products distinguishes us in the food and beverage industry’s production and distribution. We prepare our products carefully to satisfy all desires. From chocolate, to tea or Arabic coffee, we cater your needs across the GCC region. With an unmatched focus on food and beverages, we have managed to become the main manufacturer of many brands such as Karak Tea, Shahad Honey, and Food Hacks. This is our expertise.',
      ar: 'قدرتنا على العثور على منتجات عالية الجودة تميزنا في إنتاج وتوزيع صناعة الأطعمة والمشروبات. نقوم بإعداد منتجاتنا بعناية لإرضاء جميع الرغبات. من الشوكولاتة إلى الشاي أو القهوة العربية نلبي جميع الاحتياجات في منطقة الخليج. مع تركيز لا مثيل له على الأطعمة والمشروبات أصبحنا الشركة المصنعة الرئيسية للعديد من العلامات التجارية منهم شاي كرك وعسل شهد والمزيد.',
    },
    items: [capriCapsules, capriCatering, kakawna, jph],
  },
  {
    slug: 'cafe-restaurants',
    slugAr: 'المطاعم-والمقاهي',
    banner: '/images/5.png',
    title: { en: 'Café & Restaurants', ar: 'المطاعم والمقاهي' },
    kicker: { en: 'WORLD WIDE PRODUCTS', ar: 'المنتجات العالمية' },
    homeImage: '/images/category-2-1.png',
    homeDesc: {
      en: 'Alongside products, we serve customers in our cafes and restaurants. Our chocolate suits all occasions and events. Our coffee can be made and delivered at your home through our catering options. This is where we excel at satisfying customers and attracting partners.',
      ar: 'إلى جانب المنتجات نخدم العملاء في مقاهينا ومطاعمنا ونقدم أعلى جودة من المأكولات والمشروبات. نوفر أيضًا خدمة كيترنق لتجهيز وتقديم القهوة في راحة المنازل لجميع المناسبات ونسعى لإرضاء العملاء في جميع مطاعمنا ومقاهينا.',
    },
    items: [capriCapsules, jph],
  },
  {
    slug: 'beauty',
    slugAr: 'منتجات-التجميل',
    banner: '/images/3.png',
    title: { en: 'Beauty Products', ar: 'منتجات التجميل' },
    kicker: { en: 'WORLD WIDE PRODUCTS', ar: 'المنتجات العالمية' },
    homeImage: '/images/category-4-1.png',
    homeDesc: {
      en: 'Our continued innovation has led us to venturing into the world of beauty. Combining our knowledge of both products and services, this is where we offer both; luxurious cosmetic products and premium services. We encourage our clients to explore the universe of beauty and wellness through our handpicked brands.',
      ar: 'قادنا ابتكارنا المستمر إلى المغامرة في عالم الجمال. نشجع عملائنا على استكشاف هذا العالم من خلال علاماتنا التجارية المختارة بعناية حيث دمجنا معرفتنا وخبرتنا لنقدم منتجات مستحضرات التجميل الفاخرة والخدمات المتميزة في الصالونات والمنازل.',
    },
    items: [bellaTerra, marshmallows],
  },
  {
    slug: 'interior-design',
    slugAr: 'تصميم-داخلي',
    banner: '/images/7.png',
    title: { en: 'Interior Design', ar: 'تصميم داخلي' },
    kicker: { en: 'WORLD WIDE PRODUCTS', ar: 'المنتجات العالمية' },
    homeImage: '/images/category-5-1.png',
    homeDesc: {
      en: 'Our persistence for expansion and diversity has resulted in our most recent department, interior design. Our modern outlook captivates the eyes of the beholder through both simplicity and elegance in design. Specialized in residential and commercial projects, we strive to create the atmosphere of your desires.',
      ar: 'أدى إصرارنا على التوسع والتنوع إلى إضافة أحدث قسم لدينا وهو التصميم الداخلي. إن نظرتنا الحديثة تجذب العملاء من خلال التصاميم البسيطة والأنيقة. مع خبرتنا في المشاريع السكنية والتجارية نسعى لخلق حقيقة من رغباتكم.',
    },
    items: [fitOut],
  },
];

export function categoryPath(cat: BrandCategory, lang: Lang): string {
  // Arabic is the default locale at root; English lives under /en/.
  return lang === 'en' ? `/en/brands/${cat.slug}/` : `/brands/${encodeURI(cat.slugAr)}/`;
}

/** Brand logo strip shown on the home page (order preserved from the live site). */
export const HOME_BRAND_LOGOS: { logo: string; href?: string; name: string }[] = [
  { logo: '/images/icon-1603894955.png', name: 'Chase' },
  { logo: '/images/icon-1603895005.png', name: 'PHE Polymers' },
  { logo: '/images/icon-1603896798.png', name: 'AST' },
  { logo: '/images/icon-1603895139.png', name: 'Chase' },
  { logo: '/images/icon-1603895189.png', name: 'Syno Pumps' },
  { logo: '/images/icon-1606112612.png', name: 'CPI Fluid Engineering' },
  { logo: '/images/icon-1603896888.png', name: 'Nuova General Instrument' },
  { logo: '/images/icon-1603860357.png', href: 'https://srkw.co/', name: 'Kif Al Mosafer' },
  { logo: '/images/icon-1603892669.png', href: 'https://order.sanramonkw.com/', name: 'Najdiya' },
  { logo: '/images/icon-1603893944.png', href: 'https://karaktea.com/', name: 'Karak Tea' },
  { logo: '/images/icon-1606378712.png', href: 'https://www.talabat.com/kuwait/capri', name: 'Capri' },
  { logo: '/images/icon-1603894250.png', href: 'https://order.sanramonkw.com/', name: 'Finjan Al Arab' },
  { logo: '/images/icon-1604299320.png', href: 'https://order.sanramonkw.com/', name: 'Food Hacks' },
  { logo: '/images/icon-1603894736.png', href: 'https://www.talabat.com/kuwait/capri', name: 'Capri Catering' },
  { logo: '/images/icon-1603894619.png', href: 'https://www.talabat.com/kuwait/kakawna', name: 'Kakawna' },
  { logo: '/images/icon-1603894535.png', href: 'https://www.talabat.com/kuwait/jacket-potato-and-hotdog', name: 'Jacket Potato & Hot Dogs' },
  { logo: '/images/icon-1603895360.png', name: 'Bella Terra Cosmetics' },
  { logo: '/images/icon-1603895317.png', name: 'Marshmallows Nail Spa' },
  { logo: '/images/id1.png', name: 'Fit Out' },
];
