import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { useContent } from '../admin/ContentContext';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const { getSectionContent } = useContent();
  const contactInfo = getSectionContent('contact', 'info');
  const heroContent = getSectionContent('contact', 'hero');

  const email = contactInfo?.email || 'hello@socalbird.com';
  const phone = contactInfo?.phone || '+880 123 456 7890';
  const address = contactInfo?.address || 'Dhaka, Bangladesh';
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/20 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-4">
              📞 Get in Touch
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Let's Build Something <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? Fill out the form below or reach out via your preferred channel. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#111827] border-gray-800 p-6 text-center hover:border-blue-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
              <a href="mailto:info@socalbird.com" className="text-blue-400 hover:text-blue-300">
                info@socalbird.com
              </a>
            </Card>

            <Card className="bg-[#111827] border-gray-800 p-6 text-center hover:border-green-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
              <a href="tel:+15551234567" className="text-green-400 hover:text-green-300">
                +1 (555) 123-4567
              </a>
            </Card>

            <Card className="bg-[#111827] border-gray-800 p-6 text-center hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">Southern California, USA</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111827]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-400">
              Fill out the form and we'll get back to you within 24 hours
            </p>
          </div>

          {submitted ? (
            <Card className="bg-[#111827] border-green-500 p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle2 className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-xl text-gray-300 mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-600/10"
              >
                Send Another Message
              </Button>
            </Card>
          ) : (
            <Card className="bg-[#111827] border-gray-800 p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Full Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="bg-[#0A0A0A] border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <Label htmlFor="business" className="text-white mb-2 block">
                    Business / Company Name
                  </Label>
                  <Input
                    id="business"
                    type="text"
                    placeholder="ABC Company"
                    value={formData.business}
                    onChange={(e) => handleChange('business', e.target.value)}
                    className="bg-[#0A0A0A] border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email Address <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-[#0A0A0A] border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="bg-[#0A0A0A] border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                {/* Service & Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="service" className="text-white mb-2 block">
                      Service Needed <span className="text-red-400">*</span>
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)} required>
                      <SelectTrigger className="bg-[#0A0A0A] border-gray-700 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1F2937] border-gray-700">
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="app">App Development</SelectItem>
                        <SelectItem value="chatbot">AI Chatbot Solutions</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-white mb-2 block">
                      Budget Range (Optional)
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                      <SelectTrigger className="bg-[#0A0A0A] border-gray-700 text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1F2937] border-gray-700">
                        <SelectItem value="<5k">Less than $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Project Details <span className="text-red-400">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="bg-[#0A0A0A] border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message | বার্তা পাঠান
                  </Button>
                  <p className="text-gray-400 text-sm text-center mt-4">
                    We'll respond within 24 hours • আমরা 24 ঘন্টার মধ্যে সাড়া দেব
                  </p>
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Prefer to Chat Directly?
            </h2>
            <p className="text-xl text-gray-400">
              Reach out on your favorite messaging platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-green-600/20 to-green-600/10 border-green-500/50 p-8 text-center hover:border-green-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
              <p className="text-gray-300 mb-6">
                Chat with us instantly on WhatsApp for quick questions and consultations.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                Chat on WhatsApp
              </Button>
              <p className="text-gray-400 text-sm mt-3">হোয়াটসঅ্যাপে চ্যাট করুন</p>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600/20 to-blue-600/10 border-blue-500/50 p-8 text-center hover:border-blue-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Send className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Facebook Messenger</h3>
              <p className="text-gray-300 mb-6">
                Message us on Facebook Messenger for instant support and project inquiries.
              </p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('https://m.me/yourpage', '_blank')}
              >
                Chat on Messenger
              </Button>
              <p className="text-gray-400 text-sm mt-3">মেসেঞ্জারে চ্যাট করুন</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111827]">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-[#111827] border-gray-800 p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Office Hours</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Business Hours</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-white">Closed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Support Hours</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-400" size={20} />
                    <span>Email support: 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-400" size={20} />
                    <span>Chat support: Business hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-400" size={20} />
                    <span>Emergency support: Available for clients</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
