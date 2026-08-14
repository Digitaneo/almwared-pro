document.addEventListener('DOMContentLoaded', function(){
  const hb = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const header = document.getElementById('header');
  const counters = document.querySelectorAll('.stat-number');
  const modal = document.getElementById('product-modal');
  const modalImage = document.getElementById('product-modal-image');
  const modalTitle = document.getElementById('product-modal-title');
  const modalDescription = document.getElementById('product-modal-description');
  const modalWa = document.getElementById('product-modal-wa');
  const modalNavPrev = document.querySelector('.product-modal__nav.prev');
  const modalNavNext = document.querySelector('.product-modal__nav.next');
  const modalClosers = document.querySelectorAll('[data-close-modal]');
  const infoModal = document.getElementById('info-modal');
  const infoModalTitle = document.getElementById('info-modal-title');
  const infoModalContent = document.getElementById('info-modal-content');
  const infoModalClosers = document.querySelectorAll('[data-close-info-modal]');
  const infoPages = {
    about: {
      title: 'من نحن',
      content: `<p>بدأ <strong>المورد المحترف</strong> بفكرة بسيطة: أن يحصل فريق المشروع على المنتج الخرساني المناسب بوضوح وسهولة، دون تعقيد في التواصل أو تفاصيل التوريد.</p><p>نخدم المقاولين والمطورين وفرق الإنشاءات من خلال حلول خرسانية مسبقة الصنع تُختار وفق احتياج المشروع، مع متابعة مباشرة للاستفسارات والكميات وموقع التسليم.</p><h3>رؤيتنا</h3><p>أن نكون شريك توريد موثوقًا للمشاريع التي تبحث عن حلول عملية، وتواصل سريع، وتجربة واضحة من أول طلب عرض السعر حتى الاستلام.</p>`
    },
    privacy: {
      title: 'سياسة الخصوصية',
      content: `<p>نحترم خصوصية زوار موقع المورد المحترف. تُستخدم بيانات التواصل التي تشاركونها معنا، مثل الاسم ورقم الهاتف وتفاصيل المشروع، فقط للرد على الاستفسارات وإعداد عروض الأسعار وتنظيم خدماتنا.</p><p>لا نبيع بياناتكم أو نشاركها لأغراض تسويقية غير مرتبطة بخدمتكم. قد نحتفظ ببيانات المراسلات بالقدر اللازم لمتابعة الطلبات وتحسين تجربة التواصل.</p><p>عند وجود استفسار حول بياناتك، تواصل معنا مباشرة عبر رقم الهاتف أو واتساب الظاهرين في الموقع.</p>`
    },
    terms: {
      title: 'شروط الاستخدام',
      content: `<p>المعلومات المعروضة في هذا الموقع للتعريف بمنتجات وخدمات المورد المحترف، ولا تمثل عرضًا ملزمًا للأسعار أو الكميات أو مدد التوريد.</p><p>تُحدّد المواصفات النهائية والسعر والمدة وشروط التسليم لكل طلب بعد مراجعة تفاصيل المشروع وإصدار عرض سعر أو اتفاق مكتوب.</p><p>يُرجى التأكد من ملاءمة المنتج للاستخدام المطلوب من خلال مراجعة المخططات والمواصفات الفنية مع الفريق المختص قبل اعتماد الطلب.</p>`
    },
    returns: {
      title: 'سياسة الاستبدال والاسترجاع',
      content: `<p>نظرًا لطبيعة المنتجات الخرسانية مسبقة الصنع وارتباطها بمواصفات وكميات ومواقع تسليم محددة، تتم معالجة طلبات الاستبدال أو الاسترجاع لكل حالة على حدة.</p><h3>قبل التوريد</h3><p>يمكن مراجعة تفاصيل الطلب أو تعديلها بالتنسيق مع فريق المبيعات قبل بدء التصنيع أو التجهيز، وفق حالة الطلب.</p><h3>بعد الاستلام</h3><p>نرجو فحص الكميات وحالة المنتجات عند الاستلام وإبلاغنا بأي ملاحظة في أقرب وقت. يراجع الفريق الطلب وبيانات التوريد لتقديم الحل المناسب وفق الاتفاق والمواصفات المعتمدة.</p>`
    }
  };
  const productDetails = {
    'product-slabs': {
      title: 'بلاطات خرسانية',
      description: 'نوفر بلاطات خرسانية مسبقة الصنع مصممة لتلبية احتياجات المشاريع الإنشائية التي تتطلب سرعة في التنفيذ، دقة في المقاسات، وجودة تصنيع موثوقة. تساعد البلاطات مسبقة الصنع على تقليل الأعمال المنفذة في الموقع وتسريع مراحل المشروع، مع توفير حل عملي للمقاولين والمطورين الذين يبحثون عن كفاءة أعلى في التنفيذ. مناسبة لمختلف أنواع المشاريع يمكن استخدام البلاطات الخرسانية مسبقة الصنع في مجموعة واسعة من المشاريع، بما في ذلك: المباني والمشاريع الإنشائية. المشاريع التجارية والصناعية. المستودعات والمنشآت المختلفة. المشاريع التي تتطلب سرعة في تركيب العناصر الخرسانية. الأعمال التي تحتاج إلى مقاسات ومواصفات محددة وفق متطلبات المشروع. لماذا تختار البلاطات الخرسانية مسبقة الصنع؟ سرعة التنفيذ: تصل البلاطات جاهزة للتركيب، مما يساعد على تقليل وقت تنفيذ الأعمال مقارنة بالحلول التي تتطلب وقتًا أطول داخل الموقع. دقة التصنيع: يتم تصنيع العناصر وفق المقاسات والمواصفات المطلوبة للمشروع، بما يساعد على تسهيل أعمال التركيب وتحسين كفاءة التنفيذ. تقليل الأعمال في الموقع: الاعتماد على العناصر مسبقة الصنع يقلل من حجم بعض الأعمال الخرسانية التي يتم تنفيذها داخل الموقع، ويساعد على تنظيم مراحل المشروع بشكل أفضل. حل عملي للمشاريع الكبيرة: مناسبة للمقاولين والمشاريع التي تحتاج إلى توريد كميات من العناصر الخرسانية مع الحفاظ على مستوى متناسق من الجودة والتصنيع. مرونة في التوريد: يمكن مناقشة احتياجات المشروع والكميات والمقاسات المطلوبة مع فريق المبيعات لتحديد الحل المناسب قبل التوريد. اطلب عرض سعر لمشروعك إذا كنت تبحث عن بلاطات خرسانية مسبقة الصنع لمشروعك، أرسل تفاصيل المشروع والكميات والمقاسات المطلوبة إلى فريق المبيعات، وسيتم مساعدتك في تحديد المنتج المناسب واحتياجات التوريد.',
      images: ['assets/images/precast-slabs/precast-slabs-1.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/precast-slabs/precast-slabs-2.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/precast-slabs/precast-slabs.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن بلاطات خرسانية&type=phone_number&app_absent=0'
    },
    'product-manholes': {
      title: 'مناهل خرسانية',
      description: 'نوفر مناهل خرسانية مسبقة الصنع مناسبة لمجموعة واسعة من أعمال البنية التحتية، بما في ذلك مشاريع المياه، شبكات الصرف الصحي، الكهرباء والاتصالات. تمثل المناهل مسبقة الصنع خيارًا عمليًا للمقاولين الذين يبحثون عن سرعة في التنفيذ، انتظام في التصنيع، وحلول جاهزة تساعد على تقليل وقت الأعمال داخل الموقع. مصممة لتلبية احتياجات مشاريع البنية التحتية تتوفر المناهل بمقاسات وتكوينات مختلفة وفق احتياجات المشروع، ويمكن لفريق المبيعات مساعدتك في تحديد الحل المناسب بناءً على الاستخدام، المقاسات، الكميات وموقع المشروع. أهم المزايا سرعة التنفيذ: عناصر خرسانية مسبقة الصنع تساعد على تسريع أعمال التركيب في الموقع. مقاسات متعددة: خيارات مناسبة لمتطلبات المشاريع المختلفة. تطبيقات متعددة: مناسبة لشبكات المياه والصرف الصحي والكهرباء والاتصالات. تصنيع منظم: إنتاج العناصر مسبقًا يساعد على توحيد مستوى التصنيع وتسهيل عملية التوريد. حل عملي للمشاريع: مناسبة للمقاولين ومشاريع البنية التحتية التي تتطلب توريد كميات من العناصر الخرسانية. لماذا المناهل مسبقة الصنع؟ بدلًا من استهلاك وقت إضافي في تنفيذ العناصر الخرسانية داخل الموقع، توفر المناهل مسبقة الصنع حلًا جاهزًا يساعد فريق المشروع على تنظيم أعمال التنفيذ وتسريع مراحل التركيب، مع إمكانية اختيار المقاسات المناسبة وفق متطلبات المشروع. اطلب عرض سعر لمشروعك هل تحتاج إلى مناهل خرسانية لمشروع مياه أو صرف صحي أو كهرباء أو اتصالات؟ أرسل لنا تفاصيل المشروع والكميات والمقاسات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.',
      images: ['assets/images/concrete-manholes/concrete-manholes-1.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/concrete-manholes/concrete-manholes-2.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/concrete-manholes/concrete-manholes.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن مناهل خرسانية&type=phone_number&app_absent=0'
    },
    'product-inspection': {
      title: 'غرف تفتيش',
      description: 'نوفر غرف تفتيش خرسانية مسبقة الصنع مناسبة لمشاريع البنية التحتية وشبكات الاتصالات والخدمات، كحل عملي للمقاولين الذين يبحثون عن سرعة في التنفيذ، دقة في التصنيع، وتوريد منظم يساعد على تقليل وقت الأعمال داخل الموقع. مصممة لتلبية احتياجات المشاريع تتوفر غرف التفتيش بمقاسات وحلول متعددة وفق متطلبات المشروع، ويمكن لفريق المبيعات مساعدتك في تحديد الخيار المناسب بناءً على الاستخدام، المقاسات، الكميات وموقع المشروع. أهم المزايا سرعة التنفيذ: غرف خرسانية مسبقة الصنع تساعد على تسريع أعمال التركيب والتنفيذ في الموقع. مقاسات متعددة: خيارات مناسبة لمتطلبات المشاريع المختلفة. تطبيقات متنوعة: مناسبة لمشاريع البنية التحتية وشبكات الاتصالات والخدمات المختلفة. تصنيع مسبق: تجهيز العناصر مسبقًا يساعد على تنظيم أعمال الموقع وتسهيل مراحل التوريد والتركيب. حل عملي للمقاولين: مناسبة للمشاريع التي تتطلب توريد كميات من غرف التفتيش الخرسانية بصورة منظمة. لماذا غرف التفتيش مسبقة الصنع؟ توفر غرف التفتيش الخرسانية مسبقة الصنع حلاً جاهزًا يساعد المقاول على تقليل الأعمال المنفذة داخل الموقع وتسريع مراحل المشروع، مع إمكانية اختيار المقاسات والحلول المناسبة وفق متطلبات كل مشروع. اطلب عرض سعر لمشروعك هل تحتاج إلى غرف تفتيش خرسانية لمشروع بنية تحتية أو اتصالات؟ أرسل لنا تفاصيل المشروع والكميات والمقاسات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.',
      images: ['assets/images/inspection-chambers/inspection-chambers-1.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/inspection-chambers/inspection-chambers-2.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/inspection-chambers/inspection-chambers.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن غرف تفتيش خرسانية&type=phone_number&app_absent=0'
    },
    'product-boxculvert': {
      title: 'عبارات تصريف أمطار',
      description: 'نوفر عبارات تصريف أمطار خرسانية مسبقة الصنع (Box Culvert) مخصصة لمشاريع تصريف مياه الأمطار وأعمال البنية التحتية والطرق، وتوفر حلاً عمليًا للمقاولين الذين يحتاجون إلى تنفيذ سريع وتوريد منظم للعناصر الخرسانية. تساعد العبارات مسبقة الصنع على تسريع مراحل التنفيذ وتقليل الأعمال الخرسانية داخل الموقع، مع إمكانية توفير مقاسات وحلول مناسبة وفق متطلبات المشروع. مصممة لتلبية احتياجات مشاريع تصريف المياه تتوفر عبارات تصريف الأمطار بمقاسات وتكوينات مختلفة وفق طبيعة المشروع ومتطلبات التنفيذ، ويمكن لفريق المبيعات مساعدتك في تحديد الحل المناسب بناءً على المقاسات، الكميات، موقع المشروع ومتطلبات التوريد. أهم المزايا سرعة التنفيذ: عناصر خرسانية مسبقة الصنع تساعد على تسريع أعمال التركيب وإنجاز مراحل المشروع بكفاءة. مقاسات متعددة: خيارات مناسبة لمشاريع تصريف مياه الأمطار والأعمال المختلفة. تطبيقات واسعة: مناسبة لمشاريع الطرق والبنية التحتية وممرات تصريف المياه. تقليل أعمال الموقع: الاعتماد على العناصر مسبقة الصنع يساعد على تقليل وقت تنفيذ الأعمال الخرسانية داخل الموقع. توريد منظم: حل عملي للمشاريع التي تحتاج إلى كميات من العبارات الخرسانية مع تنسيق التوريد حسب احتياجات المشروع. لماذا عبارات Box Culvert مسبقة الصنع؟ توفر العبارات الخرسانية مسبقة الصنع حلاً جاهزًا يساعد المقاولين على تسريع تنفيذ أعمال تصريف مياه الأمطار وتنظيم مراحل التركيب في الموقع، مع إمكانية اختيار المقاسات المناسبة وفق متطلبات المشروع. اطلب عرض سعر لمشروعك هل تحتاج إلى عبارات تصريف أمطار أو Box Culvert لمشروع طرق أو بنية تحتية؟ أرسل لنا تفاصيل المشروع والمقاسات والكميات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.',
      images: ['assets/images/box-culvert/box-culvert-1.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/box-culvert/box-culvert-2.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/box-culvert/box-culvert.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن عبارات تصريف الأمطار&type=phone_number&app_absent=0'
    },
    'product-lighting': {
      title: 'قواعد أعمدة إنارة',
      description: 'نوفر قواعد أعمدة إنارة خرسانية مسبقة الصنع مصممة لمشاريع الطرق والمواقف والمناطق العامة والمشاريع التي تتطلب تجهيز قواعد جاهزة لتركيب أعمدة الإنارة. تمثل القواعد الخرسانية مسبقة الصنع حلاً عمليًا للمقاولين الذين يبحثون عن سرعة في التنفيذ، انتظام في التصنيع، وتقليل الأعمال الخرسانية داخل الموقع. مصممة لتلبية احتياجات مشاريع الإنارة تتوفر قواعد أعمدة الإنارة بمقاسات وحلول مختلفة وفق متطلبات المشروع ونوع العمود، ويمكن لفريق المبيعات مساعدتك في تحديد الخيار المناسب بناءً على المقاسات، الكميات، مواصفات المشروع وموقع التوريد. أهم المزايا سرعة التركيب: قواعد خرسانية مسبقة الصنع تساعد على تسريع مراحل تجهيز مواقع أعمدة الإنارة. سهولة التنفيذ: توريد قواعد جاهزة يساعد على تنظيم أعمال التركيب وتقليل وقت التنفيذ داخل الموقع. تطبيقات متعددة: مناسبة لمشاريع الطرق والمواقف والمناطق العامة والمشاريع العمرانية. مقاسات وحلول متنوعة: إمكانية اختيار القواعد المناسبة وفق متطلبات المشروع ونوع الاستخدام. حل عملي للمشاريع الكبيرة: مناسبة للمقاولين الذين يحتاجون إلى توريد كميات من قواعد الإنارة بصورة منظمة. لماذا قواعد الإنارة الخرسانية مسبقة الصنع؟ توفر القواعد الخرسانية الجاهزة حلاً يساعد المقاولين على تسريع تجهيز مواقع أعمدة الإنارة وتقليل الأعمال المنفذة داخل الموقع، مع إمكانية التنسيق مسبقًا حول المقاسات والكميات ومتطلبات التوريد. اطلب عرض سعر لمشروعك هل تحتاج إلى قواعد أعمدة إنارة خرسانية لمشروع طرق أو مواقف أو مشروع عمراني؟ أرسل لنا تفاصيل المشروع والكميات والمقاسات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.'
      ,
      images: ['assets/images/lighting-bases/lighting-bases-1.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/lighting-bases/lighting-bases.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن قواعد أعمدة الإنارة&type=phone_number&app_absent=0'
    },
    'product-foundations': {
      title: 'قواعد أساسات',
      description: 'نوفر قواعد أساسات خرسانية مسبقة الصنع مصممة للمشاريع الإنشائية التي تتطلب حلولًا جاهزة تساعد على تسريع أعمال الأساسات وتقليل وقت التنفيذ داخل الموقع. تمثل القواعد الخرسانية مسبقة الصنع خيارًا عمليًا للمقاولين الذين يبحثون عن سرعة في الإنجاز، انتظام في التصنيع، وتوريد منظم وفق احتياجات المشروع. مصممة لتلبية متطلبات المشاريع الإنشائية تتوفر قواعد الأساسات بمقاسات وحلول مختلفة وفق متطلبات المشروع وطبيعة الاستخدام، ويمكن لفريق المبيعات مساعدتك في تحديد الخيار المناسب بناءً على المقاسات، الكميات، المواصفات وموقع المشروع. أهم المزايا سرعة التنفيذ: قواعد خرسانية مسبقة الصنع تساعد على تقليل الوقت اللازم لتنفيذ أعمال الأساسات في الموقع. تقليل الأعمال الميدانية: الاعتماد على العناصر الجاهزة يساعد على تنظيم مراحل التنفيذ وتقليل بعض الأعمال الخرسانية داخل الموقع. دقة التصنيع: تصنيع القواعد مسبقًا يساعد على توحيد جودة المنتج وتجهيز العناصر وفق متطلبات المشروع. خيارات متعددة: إمكانية توفير مقاسات وحلول مختلفة بما يتناسب مع احتياجات المشاريع الإنشائية. توريد منظم: مناسبة للمشاريع التي تحتاج إلى كميات من قواعد الأساسات مع تنسيق مسبق لأعمال التوريد. لماذا قواعد الأساسات مسبقة الصنع؟ توفر القواعد الخرسانية الجاهزة حلاً عمليًا يساعد المقاولين على تسريع مراحل تنفيذ الأساسات وتنظيم أعمال الموقع، مع إمكانية تحديد المقاسات والكميات المطلوبة مسبقًا لتسهيل عملية التوريد والتركيب. اطلب عرض سعر لمشروعك هل تحتاج إلى قواعد أساسات خرسانية لمشروع إنشائي؟ أرسل لنا تفاصيل المشروع والمقاسات والكميات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.'
      ,
      images: ['assets/images/foundation-bases/foundation-bases-1.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/foundation-bases/foundation-bases-2.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/foundation-bases/foundation-bases.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن قواعد الأساسات&type=phone_number&app_absent=0'
    },
    'product-walls': {
      title: 'أسوار البريكاست',
      description: 'نوفر أسوار بريكاست خرسانية مسبقة الصنع مناسبة لتحديد حدود المواقع والمجمعات السكنية والمشاريع التجارية والصناعية والمشاريع التي تتطلب حلولًا جاهزة وسريعة التنفيذ. تمثل أسوار البريكاست خيارًا عمليًا للمقاولين والمطورين الذين يبحثون عن سرعة في التركيب، مظهر منظم، وجودة تصنيع متناسقة، مع تقليل الوقت والأعمال المطلوبة داخل الموقع. مصممة لتلبية احتياجات المشاريع تتوفر أسوار البريكاست بتصاميم ومقاسات وحلول مختلفة وفق متطلبات المشروع وطبيعة الاستخدام، ويمكن لفريق المبيعات مساعدتك في تحديد الخيار المناسب بناءً على الأبعاد، الكميات، التصميم وموقع التوريد. أهم المزايا سرعة التركيب: عناصر خرسانية مسبقة الصنع تساعد على تسريع تنفيذ الأسوار مقارنة بالحلول التي تتطلب أعمالًا ميدانية أطول. مظهر منظم: تصميم موحد للعناصر يساعد على الحصول على نتيجة متناسقة للموقع. تطبيقات متعددة: مناسبة للمجمعات السكنية والمواقع التجارية والصناعية والمشاريع الإنشائية المختلفة. حلول ومقاسات متنوعة: إمكانية اختيار الحل المناسب وفق احتياجات المشروع ومتطلبات الموقع. تقليل أعمال الموقع: الاعتماد على عناصر البريكاست الجاهزة يساعد على تنظيم مراحل التنفيذ وتقليل بعض الأعمال المنفذة ميدانيًا. لماذا أسوار البريكاست؟ توفر أسوار البريكاست الخرسانية حلًا جاهزًا وعمليًا للمشاريع التي تحتاج إلى تنفيذ سريع ومنظم للحدود والأسوار، مع إمكانية التنسيق مسبقًا حول المقاسات والكميات والتصميم ومتطلبات التوريد. اطلب عرض سعر لمشروعك هل تحتاج إلى أسوار بريكاست لمجمع سكني أو مشروع تجاري أو موقع إنشائي؟ أرسل لنا تفاصيل المشروع والأبعاد والكميات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.'
      ,
      images: ['assets/images/precast-walls/precast-walls-1.webp', 'assets/images/precast-walls/precast-walls-2.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/precast-walls/precast-walls.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن أسوار البريكاست&type=phone_number&app_absent=0'
    },
    'product-electrical-chambers': {
      title: 'غرف كهرباء / محولات',
      description: 'نوفر غرف كهرباء ومحولات خرسانية مسبقة الصنع مصممة لخدمة المشاريع الكهربائية وأعمال البنية التحتية التي تتطلب حلولًا خرسانية جاهزة ومنظمة للتجهيز والتركيب. تمثل الغرف الخرسانية مسبقة الصنع خيارًا عمليًا للمقاولين الذين يبحثون عن سرعة في التنفيذ، جودة تصنيع متناسقة، وتقليل الأعمال الميدانية المرتبطة بإنشاء الغرف داخل الموقع. مصممة لتلبية احتياجات المشاريع الكهربائية تتوفر غرف الكهرباء والمحولات بمقاسات وتكوينات مختلفة وفق متطلبات المشروع وطبيعة الاستخدام، ويمكن لفريق المبيعات مساعدتك في تحديد الحل المناسب بناءً على الأبعاد، الكميات، متطلبات المشروع وموقع التوريد. أهم المزايا سرعة التنفيذ: غرف خرسانية مسبقة الصنع تساعد على تسريع مراحل تجهيز المواقع وتنظيم أعمال التركيب. تصنيع مسبق: تجهيز العناصر خارج الموقع يساعد على تقليل مدة الأعمال الخرسانية الميدانية. تطبيقات للبنية التحتية: مناسبة لمشاريع الكهرباء وشبكات الخدمات والمشاريع الإنشائية المختلفة. مقاسات وحلول متنوعة: إمكانية اختيار الحل المناسب وفق متطلبات المشروع وطبيعة الاستخدام. توريد منظم: مناسبة للمشاريع التي تحتاج إلى توريد غرف كهرباء ومحولات بكميات محددة ووفق جدول تنفيذ واضح. لماذا غرف الكهرباء والمحولات مسبقة الصنع؟ توفر الغرف الخرسانية الجاهزة حلاً عمليًا يساعد المقاولين على تنظيم مراحل تنفيذ مشاريع الكهرباء والبنية التحتية وتسريع تجهيز المواقع، مع إمكانية التنسيق مسبقًا حول المقاسات والكميات ومتطلبات التوريد. اطلب عرض سعر لمشروعك هل تحتاج إلى غرف كهرباء أو محولات خرسانية لمشروع بنية تحتية أو مشروع كهربائي؟ أرسل لنا تفاصيل المشروع والمقاسات والكميات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.'
      ,
      images: ['assets/images/electrical-chambers/electrical-chambers.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/electrical-chambers/electrical-chambers-1.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن الغرف الكهربائية والمحولات&type=phone_number&app_absent=0'
    },
    'product-electrical-bases': {
      title: 'قواعد كهربائية',
      description: 'نوفر قواعد كهربائية خرسانية مسبقة الصنع مناسبة لمشاريع الكهرباء والاتصالات وأعمال البنية التحتية التي تتطلب قواعد جاهزة وسهلة التجهيز والتركيب. تمثل القواعد الخرسانية مسبقة الصنع خيارًا عمليًا للمقاولين الذين يبحثون عن سرعة في التنفيذ، انتظام في التصنيع، وتقليل الأعمال الخرسانية داخل الموقع. مصممة لتلبية احتياجات المشاريع الكهربائية تتوفر القواعد الكهربائية بمقاسات وحلول مختلفة وفق متطلبات المشروع وطبيعة الاستخدام، ويمكن لفريق المبيعات مساعدتك في تحديد الخيار المناسب بناءً على المقاسات، الكميات، المواصفات وموقع المشروع. أهم المزايا سرعة التركيب: قواعد خرسانية جاهزة تساعد على تسريع مراحل تنفيذ الأعمال الكهربائية وأعمال البنية التحتية. تقليل الأعمال الميدانية: توريد القواعد مسبقة الصنع يساعد على تقليل الوقت والأعمال اللازمة لتنفيذ القواعد داخل الموقع. تطبيقات متعددة: مناسبة لمشاريع الكهرباء والاتصالات وشبكات الخدمات المختلفة. مقاسات وحلول متنوعة: إمكانية توفير القواعد المناسبة وفق متطلبات المشروع وطبيعة الاستخدام. توريد منظم: مناسبة للمشاريع التي تحتاج إلى كميات من القواعد الكهربائية مع تنسيق مسبق للتوريد وفق جدول التنفيذ. لماذا القواعد الكهربائية مسبقة الصنع؟ توفر القواعد الخرسانية الجاهزة حلاً عمليًا يساعد المقاولين على تسريع تجهيز مواقع المشاريع الكهربائية والاتصالات وتنظيم مراحل التركيب، مع إمكانية تحديد المقاسات والكميات المطلوبة مسبقًا لتسهيل عملية التوريد والتنفيذ. اطلب عرض سعر لمشروعك هل تحتاج إلى قواعد كهربائية خرسانية لمشروع كهرباء أو اتصالات أو بنية تحتية؟ أرسل لنا تفاصيل المشروع والمقاسات والكميات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.'
      ,
      images: ['assets/images/electrical-bases/electrical-bases.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/electrical-bases/electrical-bases-1.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن القواعد الكهربائية&type=phone_number&app_absent=0'
    },
    'product-barriers': {
      title: 'مصدات خرسانية',
      description: 'نوفر مصدات خرسانية مسبقة الصنع مناسبة لتنظيم وحماية مواقف السيارات والطرق والمرافق والمناطق التي تحتاج إلى حلول خرسانية عملية تساعد على الحد من حركة المركبات وحماية بعض المساحات والتجهيزات. تمثل المصدات الخرسانية الجاهزة خيارًا عمليًا للمقاولين وأصحاب المشاريع الذين يبحثون عن سرعة في التوريد والتركيب، ومتانة مناسبة للاستخدام في المواقع المختلفة. مصممة لتلبية احتياجات المشاريع تتوفر المصدات الخرسانية بحلول ومقاسات مناسبة وفق طبيعة الاستخدام ومتطلبات الموقع، ويمكن لفريق المبيعات مساعدتك في تحديد الخيار المناسب بناءً على الكميات، الاستخدام وموقع المشروع. أهم المزايا سرعة التركيب: عناصر خرسانية مسبقة الصنع تساعد على تسريع تجهيز المواقف والمناطق المستهدفة. متانة للاستخدام الخارجي: حل عملي للمواقع التي تتطلب عناصر خرسانية قوية للاستخدام في المواقف والطرق والمرافق. حماية وتنظيم المساحات: تساعد على تحديد حدود المواقف وحماية بعض المناطق والتجهيزات من حركة المركبات. تطبيقات متعددة: مناسبة لمواقف السيارات والطرق والمرافق والمواقع التجارية والصناعية والمشاريع المختلفة. سهولة التوريد: إمكانية توفير كميات مناسبة للمشاريع مع التنسيق المسبق بشأن التوريد ومتطلبات الموقع. لماذا المصدات الخرسانية مسبقة الصنع؟ توفر المصدات الخرسانية الجاهزة حلاً عمليًا وسريعًا لتنظيم وحماية مواقف السيارات والمناطق المختلفة، دون الحاجة إلى تنفيذ العناصر الخرسانية داخل الموقع، مما يساعد على تبسيط أعمال التجهيز وتسريع تنفيذ المشروع. اطلب عرض سعر لمشروعك هل تحتاج إلى مصدات خرسانية لمواقف السيارات أو الطرق أو أحد مرافق المشروع؟ أرسل لنا تفاصيل الموقع والكميات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.'
      ,
      images: ['assets/images/concrete-barriers/concrete-barriers.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/concrete-barriers/concrete-barriers-1.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن المصدات الخرسانية&type=phone_number&app_absent=0'
    },
    'product-others': {
      title: 'منتجات خرسانية أخرى',
      description: 'نوفر مجموعة متنوعة من المنتجات الخرسانية الجاهزة لتلبية الاحتياجات المختلفة للمشاريع، وتشمل Splash Block وKerb Stone وغيرها من المنتجات الخرسانية التفصيلية التي يمكن توفيرها وفق طبيعة المشروع ومتطلبات التنفيذ. تمثل هذه المنتجات خيارًا عمليًا للمقاولين الذين يحتاجون إلى عناصر خرسانية جاهزة تساعد على تسريع الأعمال وتنظيم مراحل التنفيذ وتقليل الوقت المستغرق في تصنيع العناصر داخل الموقع. حلول خرسانية متعددة الاستخدامات تشمل المنتجات الخرسانية الأخرى عناصر مناسبة لأعمال تصريف المياه، تنظيم الطرق والممرات، تنسيق المواقع، والأعمال الإنشائية والمساندة، مع إمكانية مناقشة المتطلبات الخاصة بالمشروع لتحديد المنتج والحل المناسب. أهم المزايا تنوع المنتجات: توفير مجموعة من العناصر الخرسانية التي تلبي احتياجات مختلفة للمشاريع. سرعة التنفيذ: منتجات مسبقة الصنع تساعد على تقليل وقت تنفيذ بعض الأعمال داخل الموقع. تطبيقات متعددة: مناسبة للطرق والممرات وتصريف المياه وتنسيق المواقع وغيرها من الاستخدامات. حلول حسب المشروع: إمكانية دراسة احتياج المشروع وتحديد المنتج والمقاسات المناسبة وفق المتطلبات. توريد منظم: إمكانية تنسيق الكميات والمقاسات ومتطلبات التوريد مع فريق المبيعات. لماذا تختار منتجاتنا الخرسانية الأخرى؟ عندما يحتاج المشروع إلى عناصر خرسانية متنوعة أو منتجات تفصيلية خارج المنتجات الأساسية، نوفر حلولًا عملية تساعد المقاول على الحصول على المنتجات المطلوبة ضمن عملية توريد منظمة، مع إمكانية مناقشة تفاصيل الاستخدام والمقاسات والكميات قبل التوريد. اطلب عرض سعر لمشروعك هل تبحث عن Splash Block أو Kerb Stone أو منتج خرساني آخر لمشروعك؟ أرسل لنا تفاصيل المنتج والاستخدام والمقاسات والكميات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.'
      ,
      images: ['assets/images/other-products/other-products.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/other-products/other-products.webp-1?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن منتجات خرسانية اخرى&type=phone_number&app_absent=0'
    },
    'product-rooms': {
      title: 'غرف خرسانية',
      description: 'نوفر غرفًا خرسانية مسبقة الصنع جاهزة لمختلف احتياجات المباني والمرافق ومشاريع البنية التحتية، وتوفر حلًا عمليًا للمقاولين الذين يبحثون عن عناصر خرسانية جاهزة تساعد على تسريع التنفيذ وتقليل الأعمال الميدانية. تمثل الغرف الخرسانية الجاهزة خيارًا مناسبًا للمشاريع التي تحتاج إلى حلول منظمة وسهلة التوريد والتركيب، مع إمكانية اختيار المقاسات والتكوينات المناسبة وفق طبيعة الاستخدام ومتطلبات المشروع. مصممة لتلبية احتياجات المشاريع تتوفر الغرف الخرسانية بمقاسات وحلول متعددة لمختلف الاستخدامات، ويمكن لفريق المبيعات مساعدتك في تحديد الخيار المناسب بناءً على الاستخدام، الأبعاد، الكميات، متطلبات المشروع وموقع التوريد. أهم المزايا سرعة التنفيذ: غرف خرسانية مسبقة الصنع تساعد على تسريع مراحل التجهيز والتركيب في الموقع. سهولة التوريد والتركيب: تجهيز العناصر مسبقًا يساعد على تنظيم عملية التوريد وتسهيل مراحل التنفيذ. مقاسات وحلول متعددة: خيارات متنوعة لتلبية احتياجات المباني والمرافق والمشاريع المختلفة. تقليل الأعمال الميدانية: الاعتماد على العناصر مسبقة الصنع يساعد على تقليل الوقت والأعمال اللازمة لإنشاء الغرف داخل الموقع. تطبيقات متنوعة: مناسبة لمختلف احتياجات المباني والمرافق وأعمال البنية التحتية وفق متطلبات المشروع. لماذا الغرف الخرسانية مسبقة الصنع؟ توفر الغرف الخرسانية الجاهزة حلًا عمليًا للمشاريع التي تحتاج إلى غرف جاهزة وسريعة التنفيذ، مع إمكانية التنسيق مسبقًا حول المقاسات والكميات ومتطلبات التوريد، مما يساعد المقاول على تنظيم مراحل المشروع وتقليل وقت التنفيذ داخل الموقع. اطلب عرض سعر لمشروعك هل تحتاج إلى غرف خرسانية جاهزة لمشروع مبانٍ أو مرافق أو بنية تحتية؟ أرسل لنا تفاصيل المشروع والاستخدام والمقاسات والكميات المطلوبة، وسيساعدك فريق المبيعات في تحديد الحل المناسب والتنسيق بشأن التوريد.'
      ,
      images: ['assets/images/concrete-rooms/concrete-rooms.webp?auto=format&fit=crop&w=1200&q=80', 'assets/images/concrete-rooms/concrete-rooms-1.webp?auto=format&fit=crop&w=1200&q=80'],
      wa: 'https://api.whatsapp.com/send/?phone=966558433065&text=أريد الإستفسار عن الغرف الخرسانية&type=phone_number&app_absent=0'
    }
  };
  let modalImages = [];
  let modalIndex = 0;
  let countersAnimated = false;

  if(hb && nav){
    hb.addEventListener('click', ()=>{
      const isOpen = nav.classList.toggle('open');
      hb.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = btn.nextElementSibling;
      const isOpen = btn.classList.contains('active');

      accordionItems.forEach(item=>{
        item.classList.remove('active');
        item.setAttribute('aria-expanded', 'false');
        const p = item.nextElementSibling;
        if(p){ p.classList.remove('open'); }
      });

      if(!isOpen){
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        if(panel){ panel.classList.add('open'); }
      }
    });
  });

  const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
  const dots = Array.from(document.querySelectorAll('.slider-dot'));
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  let currentSlide = 0;

  const showSlide = (index)=>{
    heroSlides.forEach((slide, i)=>{
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i)=>{
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  };

  const nextSlide = ()=> showSlide((currentSlide + 1) % heroSlides.length);
  const prevSlide = ()=> showSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);

  prevBtn && prevBtn.addEventListener('click', prevSlide);
  nextBtn && nextBtn.addEventListener('click', nextSlide);
  dots.forEach((dot, i)=> dot.addEventListener('click', ()=> showSlide(i)));
  setInterval(nextSlide, 5000);

  window.addEventListener('scroll', ()=>{
    const y = window.scrollY;
    if(header){
      header.classList.toggle('scrolled', y > 60);
    }
  });

  const animateCounters = ()=>{
    if(countersAnimated){ return; }
    countersAnimated = true;

    counters.forEach(counter => {
      const target = Number(counter.dataset.target || 0);
      const suffix = counter.dataset.suffix || '';
      const duration = 1400;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        counter.textContent = `${value}${suffix}`;
        if(progress < 1){ requestAnimationFrame(step); }
        else { counter.textContent = `${target}${suffix}`; }
      };

      requestAnimationFrame(step);
    });
  };

  const openProductModal = (productId)=>{
    const product = productDetails[productId];
    if(!product || !modal){ return; }
    modalImages = product.images;
    modalIndex = 0;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;
    modalWa.href = product.wa;
    modalImage.src = modalImages[0];
    modalImage.alt = product.title;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeProductModal = ()=>{
    if(!modal){ return; }
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  const updateModalImage = ()=>{
    if(!modalImages.length){ return; }
    modalImage.src = modalImages[modalIndex];
    modalImage.alt = modalTitle.textContent;
  };

  document.querySelectorAll('.product-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', (event)=>{
      if(event.target.closest('a')){
        return;
      }
      openProductModal(card.id);
    });
    card.addEventListener('keydown', (event)=>{
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        openProductModal(card.id);
      }
    });
  });

  modalNavPrev && modalNavPrev.addEventListener('click', ()=>{
    modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
    updateModalImage();
  });

  modalNavNext && modalNavNext.addEventListener('click', ()=>{
    modalIndex = (modalIndex + 1) % modalImages.length;
    updateModalImage();
  });

  modalClosers.forEach(btn => btn.addEventListener('click', closeProductModal));
  modal && modal.addEventListener('click', (event)=>{
    if(event.target === modal){ closeProductModal(); }
  });
  const openInfoModal = (pageKey)=>{
    const page = infoPages[pageKey];
    if(!page || !infoModal){ return; }
    infoModalTitle.textContent = page.title;
    infoModalContent.innerHTML = page.content;
    infoModal.classList.add('open');
    infoModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    infoModal.querySelector('.info-modal__close').focus();
  };

  const closeInfoModal = ()=>{
    if(!infoModal){ return; }
    infoModal.classList.remove('open');
    infoModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  document.querySelectorAll('[data-info-page]').forEach((link)=>{
    link.addEventListener('click', (event)=>{
      event.preventDefault();
      openInfoModal(link.dataset.infoPage);
    });
  });
  infoModalClosers.forEach((button)=> button.addEventListener('click', closeInfoModal));
  document.addEventListener('keydown', (event)=>{
    if(event.key === 'Escape' && modal && modal.classList.contains('open')){
      closeProductModal();
    }
    if(event.key === 'Escape' && infoModal && infoModal.classList.contains('open')){
      closeInfoModal();
    }
  });

  document.querySelectorAll('[data-project-gallery]').forEach((gallery)=>{
    const track = gallery.querySelector('.project-gallery__track');
    const slides = Array.from(gallery.querySelectorAll('.project-slide'));
    const previous = gallery.querySelector('.project-gallery__nav--prev');
    const next = gallery.querySelector('.project-gallery__nav--next');
    const dotsContainer = gallery.querySelector('.project-gallery__dots');
    let activeIndex = 0;

    if(!track || slides.length < 2){
      previous && (previous.hidden = true);
      next && (next.hidden = true);
      return;
    }

    const dots = slides.map((slide, index)=>{
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'project-gallery__dot';
      dot.setAttribute('aria-label', `عرض الصورة ${index + 1}`);
      dot.addEventListener('click', ()=> show(index));
      dotsContainer.appendChild(dot);
      return dot;
    });

    const show = (index)=>{
      activeIndex = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${activeIndex * 100}%)`;
      dots.forEach((dot, dotIndex)=> dot.classList.toggle('is-active', dotIndex === activeIndex));
    };

    previous.addEventListener('click', ()=> show(activeIndex - 1));
    next.addEventListener('click', ()=> show(activeIndex + 1));
    show(0);
  });

  const reveal = ()=>{
    document.querySelectorAll('.product-card, .card, .hero-content, .project-card, .trust-card, .contact-card').forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80){
        el.classList.add('inview');
      }
    });

    const aboutPanel = document.querySelector('.about-panel');
    if(aboutPanel){
      const rect = aboutPanel.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80){
        aboutPanel.classList.add('inview');
        setTimeout(() => {
          animateCounters();
        }, 1000);
      }
    }
  };

  reveal();
  window.addEventListener('scroll', reveal);
  const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const navSections = navLinks.map((link)=> document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if(navSections.length){
    const updateActiveNav = ()=>{
      const triggerPoint = Math.max(120, window.innerHeight * .35);
      let activeSection = navSections[0];
      navSections.forEach((section)=>{
        if(section.getBoundingClientRect().top <= triggerPoint){
          activeSection = section;
        }
      });
      navLinks.forEach((link)=> link.classList.toggle('active', link.getAttribute('href') === `#${activeSection.id}`));
    };
    navLinks.forEach((link)=> link.addEventListener('click', ()=>{
      navLinks.forEach((item)=> item.classList.toggle('active', item === link));
    }));
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav, {passive:true});
  }
  const footerYear = document.getElementById('footer-year');
  if(footerYear){ footerYear.textContent = new Date().getFullYear(); }
});
