import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { 
  Code, 
  Shield, 
  Bot, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Globe, 
  MessageCircle,
  Calculator,
  ChevronRight,
  Star,
  Users,
  Award,
  Zap
} from 'lucide-react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const isRTL = language === 'ar';

  const content = {
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
        subtitle: 'نفخر بتقديم حلول تقنية متميزة لعملائنا',
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
            desc: 'حلول الأتمتة المتقدمة وروبوتات الواتساب للأعمال',
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
      },
      footer: {
        company: 'ATFWQ - شركة التفوق الرقمي',
        rights: 'جميع الحقوق محفوظة',
        quickLinks: 'روابط سريعة'
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
            desc: 'Platform for cleaning, plumbing, and maintenance services with smart booking system',
            category: 'Service Platform',
            tech: ['Flutter', 'Laravel', 'MySQL']
          },
          {
            title: 'Delivery App',
            desc: 'Integrated delivery app with live tracking and secure payment system',
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
      },
      footer: {
        company: 'ATFWQ - Digital Excellence Company',
        rights: 'All Rights Reserved',
        quickLinks: 'Quick Links'
      }
    }
  };

  const t = content[language];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className={`min-h-screen ${isRTL ? 'arabic-text' : 'english-text'}`}>
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
                  {t.home.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed slide-in-right">
                  {t.home.subtitle}
                </p>
                <Button 
                  onClick={() => setCurrentPage('contact')}
                  size="lg"
                  className="btn-primary text-lg px-8 py-3"
                >
                  {t.home.contactBtn}
                  <ChevronRight className="ml-2 h-5 w-5" />
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
                      <Card key={key} className="service-card hover:shadow-xl transition-all duration-300 border-0 bg-white">
                        <CardHeader className="text-center pb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-800">
                            {service.title}
                          </CardTitle>
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
                    className={`px-3 py-2 rounded-md text-sm font-medium text-left transition-colors ${
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
      <footer className="footer-clean py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse mb-4">
                <img 
                  src="/src/assets/1000142239.png" 
                  alt="ATFWQ Logo" 
                  className="h-8 w-auto filter brightness-0 invert"
                />
                <span className="text-lg font-bold">ATFWQ</span>
              </div>
              <p className="text-sm opacity-90">
                {t.footer.company}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  {t.nav.home}
                </button>
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  {t.nav.projects}
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  {t.nav.contact}
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.nav.contact}</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p>{t.contact.phone}</p>
                <p>{t.contact.email}</p>
                <p>{t.contact.address}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-90">
              © 2024 ATFWQ. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="floating-button chat-button"
        title="شات بوت / Chatbot"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <button
        onClick={() => setShowCalculator(!showCalculator)}
        className="floating-button calculator-button"
        title="حاسبة التكلفة / Cost Calculator"
      >
        <Calculator className="h-6 w-6" />
      </button>

      {/* Chatbot Modal Placeholder */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">شات بوت ATFWQ</h3>
              <button
                onClick={() => setShowChatbot(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">مرحباً! كيف يمكنني مساعدتك؟</p>
            <div className="space-y-2">
              <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                ما هي خدماتكم؟
              </button>
              <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                كم تكلفة تطوير تطبيق؟
              </button>
              <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                كيف يمكنني التواصل معكم؟
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Calculator Modal Placeholder */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">حاسبة التكلفة</h3>
              <button
                onClick={() => setShowCalculator(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">نوع الخدمة</label>
                <select className="w-full p-2 border rounded-md">
                  <option>تطوير تطبيق موبايل</option>
                  <option>تطوير موقع ويب</option>
                  <option>نظام أمن سيبراني</option>
                  <option>حلول أتمتة</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">مستوى التعقيد</label>
                <select className="w-full p-2 border rounded-md">
                  <option>بسيط</option>
                  <option>متوسط</option>
                  <option>معقد</option>
                </select>
              </div>
              <Button className="w-full btn-primary">
                احسب التكلفة
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

