import React, { useState } from 'react';
import { Calculator, X, ArrowRight, ArrowLeft } from 'lucide-react';

const CostCalculator = ({ isOpen, onClose, language }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    complexity: '',
    features: [],
    timeline: '',
    name: '',
    email: '',
    phone: ''
  });

  const isArabic = language === 'ar';

  const services = {
    ar: {
      mobile: { name: 'تطوير تطبيق موبايل', basePrice: 3000, icon: '📱' },
      web: { name: 'تطوير موقع ويب', basePrice: 2500, icon: '🌐' },
      cybersecurity: { name: 'نظام أمن سيبراني', basePrice: 5000, icon: '🛡️' },
      automation: { name: 'حلول أتمتة', basePrice: 2000, icon: '🤖' }
    },
    en: {
      mobile: { name: 'Mobile App Development', basePrice: 3000, icon: '📱' },
      web: { name: 'Web Development', basePrice: 2500, icon: '🌐' },
      cybersecurity: { name: 'Cybersecurity System', basePrice: 5000, icon: '🛡️' },
      automation: { name: 'Automation Solutions', basePrice: 2000, icon: '🤖' }
    }
  };

  const complexityMultipliers = {
    simple: 1,
    medium: 1.5,
    complex: 2.5
  };

  const complexityLabels = {
    ar: {
      simple: 'بسيط',
      medium: 'متوسط',
      complex: 'معقد'
    },
    en: {
      simple: 'Simple',
      medium: 'Medium',
      complex: 'Complex'
    }
  };

  const features = {
    ar: [
      { id: 'auth', name: 'نظام تسجيل الدخول', price: 500 },
      { id: 'payment', name: 'نظام الدفع', price: 800 },
      { id: 'notifications', name: 'الإشعارات', price: 300 },
      { id: 'analytics', name: 'التحليلات', price: 600 },
      { id: 'admin', name: 'لوحة الإدارة', price: 1000 }
    ],
    en: [
      { id: 'auth', name: 'Authentication System', price: 500 },
      { id: 'payment', name: 'Payment System', price: 800 },
      { id: 'notifications', name: 'Notifications', price: 300 },
      { id: 'analytics', name: 'Analytics', price: 600 },
      { id: 'admin', name: 'Admin Panel', price: 1000 }
    ]
  };

  const calculateTotal = () => {
    if (!formData.serviceType || !formData.complexity) return 0;
    
    const service = services[language][formData.serviceType];
    const basePrice = service.basePrice;
    const complexityMultiplier = complexityMultipliers[formData.complexity];
    const featuresPrice = formData.features.reduce((total, featureId) => {
      const feature = features[language].find(f => f.id === featureId);
      return total + (feature ? feature.price : 0);
    }, 0);
    
    return Math.round((basePrice * complexityMultiplier) + featuresPrice);
  };

  const calculateTimeline = () => {
    if (!formData.serviceType || !formData.complexity) return '';
    
    const baseWeeks = {
      mobile: 6,
      web: 4,
      cybersecurity: 8,
      automation: 5
    };
    
    const complexityWeeks = {
      simple: 1,
      medium: 1.5,
      complex: 2
    };
    
    const weeks = Math.round(baseWeeks[formData.serviceType] * complexityWeeks[formData.complexity]);
    return isArabic ? `${weeks} أسبوع` : `${weeks} weeks`;
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    const total = calculateTotal();
    const timeline = calculateTimeline();
    alert(isArabic 
      ? `تم إرسال طلبك! التكلفة المقدرة: $${total.toLocaleString()} والمدة: ${timeline}`
      : `Request sent! Estimated cost: $${total.toLocaleString()} and timeline: ${timeline}`
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            <h3 className="font-bold">
              {isArabic ? 'حاسبة التكلفة' : 'Cost Calculator'}
            </h3>
          </div>
          <button onClick={onClose} className="hover:bg-white hover:bg-opacity-20 p-1 rounded">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              {isArabic ? `الخطوة ${currentStep} من 4` : `Step ${currentStep} of 4`}
            </span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / 4) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div>
              <h4 className="text-lg font-bold mb-4">
                {isArabic ? 'اختر نوع الخدمة' : 'Choose Service Type'}
              </h4>
              <div className="space-y-3">
                {Object.entries(services[language]).map(([key, service]) => (
                  <button
                    key={key}
                    onClick={() => setFormData({...formData, serviceType: key})}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                      formData.serviceType === key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <div className="font-semibold">{service.name}</div>
                        <div className="text-sm text-gray-600">
                          {isArabic ? 'من' : 'From'} ${service.basePrice.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h4 className="text-lg font-bold mb-4">
                {isArabic ? 'مستوى التعقيد' : 'Complexity Level'}
              </h4>
              <div className="space-y-3">
                {Object.entries(complexityMultipliers).map(([key, multiplier]) => (
                  <button
                    key={key}
                    onClick={() => setFormData({...formData, complexity: key})}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                      formData.complexity === key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{complexityLabels[language][key]}</div>
                    <div className="text-sm text-gray-600">
                      {isArabic ? 'مضاعف' : 'Multiplier'}: {multiplier}x
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h4 className="text-lg font-bold mb-4">
                {isArabic ? 'الميزات الإضافية' : 'Additional Features'}
              </h4>
              <div className="space-y-3">
                {features[language].map((feature) => (
                  <label
                    key={feature.id}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            features: [...formData.features, feature.id]
                          });
                        } else {
                          setFormData({
                            ...formData,
                            features: formData.features.filter(f => f !== feature.id)
                          });
                        }
                      }}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{feature.name}</div>
                      <div className="text-sm text-gray-600">+${feature.price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h4 className="text-lg font-bold mb-4">
                {isArabic ? 'معلومات التواصل' : 'Contact Information'}
              </h4>
              
              {/* Cost Summary */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ${calculateTotal().toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic ? 'التكلفة المقدرة' : 'Estimated Cost'}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {isArabic ? 'المدة المقدرة:' : 'Estimated Timeline:'} {calculateTimeline()}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={isArabic ? 'الاسم' : 'Name'}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder={isArabic ? 'البريد الإلكتروني' : 'Email'}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder={isArabic ? 'رقم الهاتف' : 'Phone Number'}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentStep === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            {isArabic ? 'السابق' : 'Previous'}
          </button>
          
          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !formData.serviceType) ||
                (currentStep === 2 && !formData.complexity)
              }
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                (currentStep === 1 && !formData.serviceType) ||
                (currentStep === 2 && !formData.complexity)
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isArabic ? 'التالي' : 'Next'}
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email}
              className={`px-6 py-2 rounded-lg transition-colors ${
                !formData.name || !formData.email
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isArabic ? 'إرسال الطلب' : 'Send Request'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;

