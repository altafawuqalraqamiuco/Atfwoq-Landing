import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = ({ isOpen, onClose, language }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const isArabic = language === 'ar';

  const quickQuestions = isArabic ? [
    'ما هي خدماتكم؟',
    'كم تكلفة تطوير تطبيق؟',
    'كيف يمكنني التواصل معكم؟',
    'ما هي مدة تنفيذ المشروع؟',
    'هل تقدمون خدمات الأمن السيبراني؟'
  ] : [
    'What are your services?',
    'How much does app development cost?',
    'How can I contact you?',
    'What is the project timeline?',
    'Do you provide cybersecurity services?'
  ];

  const responses = {
    ar: {
      'ما هي خدماتكم؟': 'نقدم ثلاث خدمات رئيسية:\n• البرمجة وتطوير التطبيقات\n• الأمن السيبراني وحماية الشبكات\n• الأتمتة والذكاء الاصطناعي\n\nيمكنك استخدام حاسبة التكلفة للحصول على تقدير سريع!',
      'كم تكلفة تطوير تطبيق؟': 'تختلف التكلفة حسب نوع التطبيق:\n• تطبيق بسيط: $2,000 - $5,000\n• تطبيق متوسط: $5,000 - $15,000\n• تطبيق معقد: $15,000 - $50,000\n\nاستخدم حاسبة التكلفة للحصول على تقدير دقيق!',
      'كيف يمكنني التواصل معكم؟': 'يمكنك التواصل معنا عبر:\n📞 الهاتف: 0920226447\n📧 الإيميل: info@atfwq.com\n📍 العنوان: طرابلس، ليبيا\n\nأو املأ نموذج التواصل في صفحة "اتصل بنا"',
      'ما هي مدة تنفيذ المشروع؟': 'مدة التنفيذ تعتمد على نوع المشروع:\n• تطبيق بسيط: 2-4 أسابيع\n• تطبيق متوسط: 1-3 أشهر\n• تطبيق معقد: 3-6 أشهر\n• أنظمة الأمن السيبراني: 2-8 أسابيع',
      'هل تقدمون خدمات الأمن السيبراني؟': 'نعم! نحن متخصصون في:\n🛡️ حماية الشبكات الحكومية والخاصة\n🔒 أنظمة الأمان المتقدمة\n👥 الاستشارات الأمنية\n🔍 تقييم المخاطر السيبرانية\n\nنحمي أكثر من 50 مؤسسة في ليبيا!'
    },
    en: {
      'What are your services?': 'We offer three main services:\n• Programming & App Development\n• Cybersecurity & Network Protection\n• Automation & Artificial Intelligence\n\nYou can use our cost calculator for a quick estimate!',
      'How much does app development cost?': 'Cost varies by app type:\n• Simple app: $2,000 - $5,000\n• Medium app: $5,000 - $15,000\n• Complex app: $15,000 - $50,000\n\nUse our cost calculator for accurate estimates!',
      'How can I contact you?': 'You can contact us via:\n📞 Phone: 0920226447\n📧 Email: info@atfwq.com\n📍 Address: Tripoli, Libya\n\nOr fill out the contact form on our "Contact" page',
      'What is the project timeline?': 'Timeline depends on project type:\n• Simple app: 2-4 weeks\n• Medium app: 1-3 months\n• Complex app: 3-6 months\n• Cybersecurity systems: 2-8 weeks',
      'Do you provide cybersecurity services?': 'Yes! We specialize in:\n🛡️ Government & private network protection\n🔒 Advanced security systems\n👥 Security consulting\n🔍 Cyber risk assessment\n\nWe protect over 50 institutions in Libya!'
    }
  };

  const defaultResponse = isArabic 
    ? 'شكراً لسؤالك! للحصول على إجابة مفصلة، يرجى التواصل معنا على:\n📞 0920226447\n📧 info@atfwq.com'
    : 'Thank you for your question! For a detailed answer, please contact us at:\n📞 0920226447\n📧 info@atfwq.com';

  const handleQuickQuestion = (question) => {
    setMessages(prev => [...prev, { text: question, isUser: true }]);
    setIsTyping(true);
    
    setTimeout(() => {
      const response = responses[language][question] || defaultResponse;
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: defaultResponse, isUser: false }]);
      setIsTyping(false);
    }, 1000);
    
    setInputValue('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <h3 className="font-bold">
              {isArabic ? 'شات بوت ATFWQ' : 'ATFWQ Chatbot'}
            </h3>
          </div>
          <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-1 rounded">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mb-4">
              <p className="mb-3">
                {isArabic ? 'مرحباً! كيف يمكنني مساعدتك؟' : 'Hello! How can I help you?'}
              </p>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="block w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg whitespace-pre-line ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={isArabic ? 'اكتب رسالتك...' : 'Type your message...'}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

