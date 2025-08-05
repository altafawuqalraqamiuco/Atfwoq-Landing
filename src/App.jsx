import React, { useState } from 'react';
import { Globe, Menu, X, Code, Shield, Bot, Award, Zap, Users, ChevronRight, Phone, Mail, MapPin, Star, MessageCircle, Calculator } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import Chatbot from './components/Chatbot';
import CostCalculator from './components/CostCalculator';
import './App.css';

function App() {
  const [language, setLanguage] = useState('ar');
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  const isArabic = language === 'ar';
  const isRTL = isArabic;

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const translations = {
    ar: {
      nav: {
        home: 'الرئيسية',
        programming: 'البرمجة',
        cybersecurity: 'الأمن السيبراني',
        automation: 'الأتمتة',
        projects: 'المشاريع',
        about: 'من نحن',
        contact: 'اتصل بنا'
      },
      home: {
        title: 'شركة التفوق الرقمي',
        subtitle: 'نقدم حلولاً تقنية متطورة في البرمجة والأمن السيبراني والأتمتة للشركات والمؤسسات الحكومية والخاصة',
        contactBtn: 'تواصل معنا',
        servicesTitle: 'خدماتنا',
        whyChooseTitle: 'لماذا تختارنا؟',
        whyChooseItems: [
          { icon: Award, title: 'خبرة متميزة', desc: 'فريق من الخبراء المتخصصين' },
          { icon: Zap, title: 'حلول سريعة', desc: 'تنفيذ المشاريع في أقل وقت ممكن' },
          { icon: Users, title: 'دعم مستمر', desc: 'خدمة عملاء متاحة على مدار الساعة' }
        ]
      },
      services: {
        programming: {
          title: 'البرمجة وتطوير التطبيقات',
          desc: 'تطوير تطبيقات الموبايل والويب والأنظمة المتكاملة',
          icon: Code
        },
        cybersecurity: {
          title: 'الأمن السيبراني',
          desc: 'حماية الشبكات والأنظمة الحكومية والخاصة من التهديدات السيبرانية',
          icon: Shield
        },
        automation: {
          title: 'الأتمتة والذكاء الاصطناعي',
          desc: 'حلول الأتمتة وروبوتات الواتساب والمساعدات الذكية',
          icon: Bot
        }
      },
      projects: {
        title: 'مشاريعنا',
        subtitle: 'نفتخر بتقديم حلول تقنية متميزة لعملائنا',
        items: [
          {
            title: 'تطبيق خلوة',
            desc: 'تطبيق متخصص لتحفيظ القرآن الكريم مع ميزات تفاعلية متقدمة',
            category: 'تطبيق موبايل',
            tech: ['React Native', 'Firebase', 'Audio Processing']
          },
          {
            title: 'مارسين للأدوية',
            desc: 'منصة شاملة لإدارة الصيدليات والأدوية مع نظام مخزون متطور',
            category: 'نظام إدارة',
            tech: ['React', 'Node.js', 'PostgreSQL']
          },
          {
            title: 'مارسين أتمتة',
            desc: 'حلول أتمتة متقدمة وروبوتات واتساب للأعمال',
            category: 'أتمتة',
            tech: ['Python', 'WhatsApp API', 'AI/ML']
          },
          {
            title: 'سند للخدمات',
            desc: 'منصة لخدمات النظافة والسباكة والصيانة مع نظام حجز ذكي',
            category: 'منصة خدمات',
            tech: ['Flutter', 'Laravel', 'MySQL']
          },
          {
            title: 'تطبيق توصيل الطلبات',
            desc: 'تطبيق متكامل لتوصيل الطلبات مع تتبع مباشر ونظام دفع آمن',
            category: 'تطبيق توصيل',
            tech: ['React Native', 'Express.js', 'MongoDB']
          }
        ]
      },
      about: {
        title: 'من نحن',
        vision: 'رؤيتنا',
        visionText: 'أن نكون الشركة الرائدة في مجال الحلول التقنية المتطورة في ليبيا والمنطقة',
        mission: 'رسالتنا',
        missionText: 'تقديم حلول تقنية مبتكرة وموثوقة تساعد عملاءنا على تحقيق أهدافهم الرقمية',
        values: 'قيمنا',
        valuesItems: ['الجودة والتميز', 'الابتكار والإبداع', 'الثقة والشفافية', 'الدعم المستمر']
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'نحن هنا لمساعدتك في تحقيق أهدافك التقنية',
        phone: '0920226447',
        email: 'info@atfwq.com',
        address: 'طرابلس، ليبيا',
        formTitle: 'أرسل لنا رسالة',
        nameLabel: 'الاسم',
        emailLabel: 'البريد الإلكتروني',
        messageLabel: 'الرسالة',
        sendBtn: 'إرسال'
      }
    },
    en: {
      nav: {
        home: 'Home',
        programming: 'Programming',
        cybersecurity: 'Cybersecurity',
        automation: 'Automation',
        projects: 'Projects',
        about: 'About Us',
        contact: 'Contact'
      },
      home: {
        title: 'Digital Excellence Company',
        subtitle: 'We provide advanced technical solutions in programming, cybersecurity, and automation for government and private companies and institutions',
        contactBtn: 'Contact Us',
        servicesTitle: 'Our Services',
        whyChooseTitle: 'Why Choose Us?',
        whyChooseItems: [
          { icon: Award, title: 'Distinguished Experience', desc: 'Team of specialized experts' },
          { icon: Zap, title: 'Fast Solutions', desc: 'Project execution in minimum time' },
          { icon: Users, title: 'Continuous Support', desc: '24/7 customer service available' }
        ]
      },
      services: {
        programming: {
          title: 'Programming & App Development',
          desc: 'Development of mobile and web applications and integrated systems',
          icon: Code
        },
        cybersecurity: {
          title: 'Cybersecurity',
          desc: 'Protection of government and private networks and systems from cyber threats',
          icon: Shield
        },
        automation: {
          title: 'Automation & AI',
          desc: 'Automation solutions, WhatsApp bots, and smart assistants',
          icon: Bot
        }
      },
      projects: {
        title: 'Our Projects',
        subtitle: 'We are proud to provide distinguished technical solutions for our clients',
        items: [
          {
            title: 'Khalwa App',
            desc: 'Specialized app for Quran memorization with advanced interactive features',
            category: 'Mobile App',
            tech: ['React Native', 'Firebase', 'Audio Processing']
          },
          {
            title: 'Marseen Pharmacy',
            desc: 'Comprehensive platform for pharmacy and medicine management with advanced inventory system',
            category: 'Management System',
            tech: ['React', 'Node.js', 'PostgreSQL']
          },
          {
            title: 'Marseen Automation',
            desc: 'Advanced automation solutions and WhatsApp bots for business',
            category: 'Automation',
            tech: ['Python', 'WhatsApp API', 'AI/ML']
          },
          {
            title: 'Sanad Services',
            desc: 'Platform for cleaning, plumbing and maintenance services with smart booking system',
            category: 'Service Platform',
            tech: ['Flutter', 'Laravel', 'MySQL']
          },
          {
            title: 'Delivery App',
            desc: 'Integrated delivery application with live tracking and secure payment system',
            category: 'Delivery App',
            tech: ['React Native', 'Express.js', 'MongoDB']
          }
        ]
      },
      about: {
        title: 'About Us',
        vision: 'Our Vision',
        visionText: 'To be the leading company in advanced technical solutions in Libya and the region',
        mission: 'Our Mission',
        missionText: 'Providing innovative and reliable technical solutions that help our clients achieve their digital goals',
        values: 'Our Values',
        valuesItems: ['Quality and Excellence', 'Innovation and Creativity', 'Trust and Transparency', 'Continuous Support']
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help you achieve your technical goals',
        phone: '0920226447',
        email: 'info@atfwq.com',
        address: 'Tripoli, Libya',
        formTitle: 'Send us a message',
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        sendBtn: 'Send'
      }
    }
  };

  const t = translations[language];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className={`min-h-screen ${isRTL ? 'arabic-text' : 'english-text'}`}>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 px-4 overflow-hidden">
              <div className="max-w-6xl mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {t.home.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
                  {t.home.subtitle}
                </p>
                <Button 
                  onClick={() => setCurrentPage('contact')}
                  className="btn-primary text-lg px-8 py-3"
                >
                  {t.home.contactBtn}
                </Button>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                  {t.home.servicesTitle}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {Object.entries(t.services).map(([key, service]) => {
                    const IconComponent = service.icon;
                    return (
                      <Card key={key} className="service-card hover:shadow-xl transition-all duration-300 border-0 cursor-pointer" onClick={() => setCurrentPage(key)}>
                        <CardHeader className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-10 w-10 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 text-center leading-relaxed">
                            {service.desc}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                  {t.home.whyChooseTitle}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {t.home.whyChooseItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        );

      case 'programming':
        return (
          <div className={`min-h-screen py-20 px-4 ${isRTL ? 'arabic-text' : 'english-text'}`}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                  {isArabic ? 'البرمجة وتطوير التطبيقات' : 'Programming & App Development'}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {isArabic ? 'نطور تطبيقات الموبايل والويب والأنظمة المتكاملة بأحدث التقنيات' : 'We develop mobile apps, web applications, and integrated systems using the latest technologies'}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="service-card hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-center">
                      {isArabic ? 'تطبيقات الموبايل' : 'Mobile Applications'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {isArabic ? 'تطوير تطبيقات iOS و Android بتقنيات حديثة' : 'Developing iOS and Android apps with modern technologies'}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="service-card hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-center">
                      {isArabic ? 'مواقع الويب' : 'Web Applications'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {isArabic ? 'تطوير مواقع ويب متجاوبة وسريعة' : 'Developing responsive and fast web applications'}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="service-card hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-center">
                      {isArabic ? 'الأنظمة المتكاملة' : 'Integrated Systems'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {isArabic ? 'حلول برمجية شاملة للشركات والمؤسسات' : 'Comprehensive software solutions for companies and institutions'}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'cybersecurity':
        return (
          <div className={`min-h-screen py-20 px-4 ${isRTL ? 'arabic-text' : 'english-text'}`}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                  {isArabic ? 'الأمن السيبراني' : 'Cybersecurity'}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {isArabic ? 'حماية الشبكات والأنظمة الحكومية والخاصة من التهديدات السيبرانية' : 'Protecting government and private networks and systems from cyber threats'}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="service-card hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-center">
                      {isArabic ? 'حماية الشبكات' : 'Network Security'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {isArabic ? 'تأمين الشبكات الحكومية والخاصة ضد الاختراقات' : 'Securing government and private networks against breaches'}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="service-card hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-center">
                      {isArabic ? 'كاميرات المراقبة' : 'Surveillance Systems'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {isArabic ? 'تركيب وصيانة أنظمة المراقبة المتطورة' : 'Installation and maintenance of advanced surveillance systems'}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="service-card hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-center">
                      {isArabic ? 'الخدمات الأمنية' : 'Security Services'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {isArabic ? 'استشارات أمنية شاملة وحلول الحماية' : 'Comprehensive security consulting and protection solutions'}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'automation':
        return (
          <div className={`min-h-screen py-20 px-4 ${isRTL ? 'arabic-text' : 'english-text'}`}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                  {isArabic ? 'الأتمتة والذكاء الاصطناعي' : 'Automation & AI'}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {isArabic ? 'حلول الأتمتة وروبوتات الواتساب والمساعدات الذكية' : 'Automation solutions, WhatsApp bots, and smart assistants'}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="service-card hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-center">
                      {isArabic ? 'أتمتة الواتساب' : 'WhatsApp Automation'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {isArabic ? 'روبوتات ذكية للرد التلقائي وخدمة العملاء' : 'Smart bots for automatic replies and customer service'}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="service-card hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-center">
                      {isArabic ? 'الشات بوت' : 'Chatbots'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {isArabic ? 'مساعدات ذكية متعددة المنصات' : 'Smart assistants across multiple platforms'}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="service-card hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 text-center">
                      {isArabic ? 'أتمتة سير العمل' : 'Workflow Automation'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {isArabic ? 'تحسين العمليات التجارية بالذكاء الاصطناعي' : 'Improving business processes with AI'}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className={`min-h-screen py-20 px-4 ${isRTL ? 'arabic-text' : 'english-text'}`}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                  {t.projects.title}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t.projects.subtitle}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.projects.items.map((project, index) => (
                  <Card key={index} className="service-card hover:shadow-xl transition-all duration-300 border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {project.category}
                        </Badge>
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                        {project.desc}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className={`min-h-screen py-20 px-4 ${isRTL ? 'arabic-text' : 'english-text'}`}>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
                {t.about.title}
              </h1>
              
              <div className="space-y-12">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-600 flex items-center">
                      <Award className="mr-3 h-6 w-6" />
                      {t.about.vision}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">{t.about.visionText}</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-purple-600 flex items-center">
                      <Zap className="mr-3 h-6 w-6" />
                      {t.about.mission}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">{t.about.missionText}</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-green-600 flex items-center">
                      <Users className="mr-3 h-6 w-6" />
                      {t.about.values}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {t.about.valuesItems.map((value, index) => (
                        <li key={index} className="flex items-center text-lg text-gray-700">
                          <ChevronRight className="mr-2 h-5 w-5 text-green-500" />
                          {value}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className={`min-h-screen py-20 px-4 ${isRTL ? 'arabic-text' : 'english-text'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                  {t.contact.title}
                </h1>
                <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">الهاتف / Phone</h3>
                      <p className="text-gray-600">{t.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">البريد الإلكتروني / Email</h3>
                      <p className="text-gray-600">{t.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">العنوان / Address</h3>
                      <p className="text-gray-600">{t.contact.address}</p>
                    </div>
                  </div>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {t.contact.formTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.nameLabel}
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.emailLabel}
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.messageLabel}
                      </label>
                      <textarea 
                        rows="4" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    <Button className="w-full btn-primary">
                      {t.contact.sendBtn}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`min-h-screen py-20 px-4 ${isRTL ? 'arabic-text' : 'english-text'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">قيد التطوير</h1>
              <p className="text-xl text-gray-600">هذه الصفحة قيد التطوير حالياً</p>
              <Button 
                onClick={() => setCurrentPage('home')}
                className="mt-8 btn-primary"
              >
                العودة للرئيسية
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img 
                src="/src/assets/1000142239.png" 
                alt="ATFWQ Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-gray-800">ATFWQ</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setCurrentPage(key)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === key
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'ar' ? 'EN' : 'AR'}</span>
              </Button>

              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                {Object.entries(t.nav).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentPage(key);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-left ${
                      currentPage === key
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <img 
                  src="/src/assets/1000142239.png" 
                  alt="ATFWQ Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold">ATFWQ</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {isArabic ? 'شركة التفوق الرقمي - نقدم حلولاً تقنية متطورة' : 'Digital Excellence Company - Providing advanced technical solutions'}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {isArabic ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="space-y-2">
                {Object.entries(t.nav).map(([key, label]) => (
                  <li key={key}>
                    <button
                      onClick={() => setCurrentPage(key)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {isArabic ? 'معلومات التواصل' : 'Contact Info'}
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.contact.phone}
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {t.contact.email}
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {t.contact.address}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>© 2024 ATFWQ. {isArabic ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        <Button
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          title={isArabic ? 'شات بوت' : 'Chatbot'}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        
        <Button
          onClick={() => setShowCalculator(!showCalculator)}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
          title={isArabic ? 'حاسبة التكلفة' : 'Cost Calculator'}
        >
          <Calculator className="h-6 w-6" />
        </Button>
      </div>

      {/* Chatbot Component */}
      <Chatbot 
        isOpen={showChatbot} 
        onClose={() => setShowChatbot(false)} 
        language={language} 
      />

      {/* Cost Calculator Component */}
      <CostCalculator 
        isOpen={showCalculator} 
        onClose={() => setShowCalculator(false)} 
        language={language} 
      />
    </div>
  );
}

export default App;

