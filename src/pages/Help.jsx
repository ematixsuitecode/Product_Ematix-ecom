import React, { useState } from 'react';
import { 
  MessageCircle, Phone, Mail, ChevronRight, HelpCircle, 
  Smile, Frown, Meh, Send, Search, ChevronDown, ChevronUp
} from 'lucide-react';

const FAQ_DATA = [
  {
    category: "Orders & Delivery",
    questions: [
      { q: "Where is my order?", a: "You can track your order status in the 'Your Orders' section. We also send SMS updates." },
      { q: "Can I change my delivery address?", a: "You can change the address before the order is packed. Go to 'Your Orders' > Select Order > Change Address." },
      { q: "What is the estimated delivery time?", a: "Standard delivery is 2-4 days. Express delivery is available in select cities for next-day delivery." }
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      { q: "How do I return an item?", a: "Visit 'Your Orders', select the item, and click 'Return'. Schedule a pickup at your convenience." },
      { q: "When will I get my refund?", a: "Refunds are processed within 24 hours of pickup. It may take 3-5 business days to reflect in your bank account." }
    ]
  },
  {
    category: "Payments",
    questions: [
      { q: "What payment methods are accepted?", a: "We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery." },
      { q: "My payment failed but money was deducted.", a: "Don't worry! If the order wasn't placed, the amount will be auto-refunded within 5-7 business days." }
    ]
  }
];

const Help = () => {
  const [activeTab, setActiveTab] = useState('faq'); // faq | contact | feedback
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [feedbackType, setFeedbackType] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-20">
      
      {/* Hero Header */}
      <div className="bg-indigo-900 text-white py-12 px-4 text-center relative overflow-hidden">
        <div className="relative z-10">
           <h1 className="text-3xl md:text-4xl font-black mb-2">How can we help you?</h1>
           <p className="text-indigo-200 text-sm md:text-base max-w-lg mx-auto mb-8">
             Search our help center or contact our support team for assistance.
           </p>
           
           <div className="max-w-xl mx-auto relative">
              <input 
                type="text" 
                placeholder="Search for help (e.g. 'Refund status')" 
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 shadow-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
           </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        
        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
           <button 
             onClick={() => setActiveTab('faq')}
             className={`p-6 rounded-xl border shadow-sm transition-all flex flex-col items-center gap-3 text-center group ${activeTab === 'faq' ? 'bg-white border-indigo-600 ring-1 ring-indigo-600' : 'bg-white border-gray-100 hover:border-indigo-300'}`}
           >
              <div className={`p-3 rounded-full ${activeTab === 'faq' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                 <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900">FAQs</h3>
                 <p className="text-xs text-gray-500 mt-1">Common questions & guides</p>
              </div>
           </button>

           <button 
             onClick={() => setActiveTab('contact')}
             className={`p-6 rounded-xl border shadow-sm transition-all flex flex-col items-center gap-3 text-center group ${activeTab === 'contact' ? 'bg-white border-indigo-600 ring-1 ring-indigo-600' : 'bg-white border-gray-100 hover:border-indigo-300'}`}
           >
              <div className={`p-3 rounded-full ${activeTab === 'contact' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                 <Phone className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900">Contact Us</h3>
                 <p className="text-xs text-gray-500 mt-1">Chat, call or email support</p>
              </div>
           </button>

           <button 
             onClick={() => setActiveTab('feedback')}
             className={`p-6 rounded-xl border shadow-sm transition-all flex flex-col items-center gap-3 text-center group ${activeTab === 'feedback' ? 'bg-white border-indigo-600 ring-1 ring-indigo-600' : 'bg-white border-gray-100 hover:border-indigo-300'}`}
           >
              <div className={`p-3 rounded-full ${activeTab === 'feedback' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                 <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900">Feedback</h3>
                 <p className="text-xs text-gray-500 mt-1">Help us improve services</p>
              </div>
           </button>
        </div>

        {/* --- CONTENT SECTIONS --- */}
        
        {/* 1. FAQ SECTION */}
        {activeTab === 'faq' && (
           <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
              {FAQ_DATA.map((section, secIdx) => (
                 <div key={secIdx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-50">{section.category}</h3>
                    <div className="space-y-3">
                       {section.questions.map((item, idx) => {
                          const uniqueIdx = `${secIdx}-${idx}`;
                          return (
                             <div key={idx} className="border border-gray-100 rounded-lg overflow-hidden">
                                <button 
                                  onClick={() => toggleFaq(uniqueIdx)}
                                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                                >
                                   <span className="font-medium text-gray-700 text-sm">{item.q}</span>
                                   {openFaqIndex === uniqueIdx ? <ChevronUp className="w-4 h-4 text-indigo-600" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                                </button>
                                <div className={`bg-gray-50 px-4 text-sm text-gray-600 transition-all duration-300 ${openFaqIndex === uniqueIdx ? 'max-h-40 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                                   {item.a}
                                </div>
                             </div>
                          )
                       })}
                    </div>
                 </div>
              ))}
           </div>
        )}

        {/* 2. CONTACT SECTION */}
        {activeTab === 'contact' && (
           <div className="max-w-4xl mx-auto animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Chat Card */}
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                       <MessageCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Live Chat</h3>
                    <p className="text-sm text-gray-500 mb-6">Connect with our support team instantly for quick resolutions.</p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2">
                       Start Chat Now
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-3">Wait time: ~2 mins</p>
                 </div>

                 {/* Call Card */}
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                       <Phone className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Call Us</h3>
                    <p className="text-sm text-gray-500 mb-6">Speak directly to our executives for detailed assistance.</p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2">
                       +91 1800-123-4567
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-3">Available 9 AM - 9 PM</p>
                 </div>

                 {/* Email Card (Full Width) */}
                 <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 group hover:shadow-md transition">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                       <Mail className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                       <h3 className="font-bold text-lg text-gray-900">Email Support</h3>
                       <p className="text-sm text-gray-500">For complex issues or documentation, drop us an email.</p>
                    </div>
                    <a href="mailto:support@novamarket.com" className="text-indigo-600 font-bold text-sm bg-indigo-50 px-6 py-3 rounded-xl hover:bg-indigo-100 transition">
                       support@novamarket.com
                    </a>
                 </div>
              </div>
           </div>
        )}

        {/* 3. FEEDBACK SECTION */}
        {activeTab === 'feedback' && (
           <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-gray-100 animate-fade-in-up">
              <h3 className="text-2xl font-black text-gray-900 text-center mb-2">We value your opinion</h3>
              <p className="text-gray-500 text-center text-sm mb-8">How was your experience with NovaMarket?</p>
              
              {/* Emoji Selection */}
              <div className="flex justify-center gap-6 mb-8">
                 {[
                    { icon: Frown, label: "Bad", color: "text-red-500", bg: "bg-red-50 ring-red-200" },
                    { icon: Meh, label: "Okay", color: "text-yellow-500", bg: "bg-yellow-50 ring-yellow-200" },
                    { icon: Smile, label: "Great", color: "text-green-500", bg: "bg-green-50 ring-green-200" }
                 ].map((feel, i) => (
                    <button 
                      key={i}
                      onClick={() => setFeedbackType(feel.label)}
                      className={`flex flex-col items-center gap-2 group transition-transform hover:scale-110 ${feedbackType === feel.label ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
                    >
                       <div className={`p-4 rounded-full transition-all ${feedbackType === feel.label ? `${feel.bg} ring-4` : 'bg-gray-50'}`}>
                          <feel.icon className={`w-8 h-8 ${feedbackType === feel.label ? feel.color : 'text-gray-400'}`} />
                       </div>
                       <span className={`text-xs font-bold ${feedbackType === feel.label ? 'text-gray-900' : 'text-gray-400'}`}>{feel.label}</span>
                    </button>
                 ))}
              </div>

              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all resize-none"
                rows="4"
                placeholder="Tell us what went wrong or what you liked..."
              ></textarea>

              <button className="w-full bg-indigo-900 hover:bg-black text-white font-bold py-4 rounded-xl mt-6 shadow-lg transition flex items-center justify-center gap-2">
                 Submit Feedback <Send className="w-4 h-4" />
              </button>
           </div>
        )}

      </div>
    </div>
  );
};

export default Help;