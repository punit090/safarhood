'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, HeartHandshake, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      // Form submissions are delivered directly to punitkshatriya99@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/punitkshatriya99@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Name": formData.name,
          "Email": formData.email,
          "Phone": formData.phone,
          "Subject": formData.subject,
          "Message": formData.message,
          "_subject": `Safarhood Inquiry: ${formData.subject}`
        })
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setSubmitted(true);
      } else {
        setIsError(true);
        setErrorMessage(result.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setIsError(true);
      setErrorMessage("Network error. Please verify your internet connection and retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream text-charcoal relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">
          
          {/* Left Column: Contact info & Onboarding */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                Get In Touch
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-6 text-primary">
                Let's Outline Your Next Bond-Building Journey
              </h2>
              <p className="mt-4 font-body text-sm text-muted-green leading-relaxed">
                Have customized group requests, corporate bonding inquiries, or questions about specific trek logistics? Write to us, and our team will get back to you with structured details.
              </p>
            </div>

            {/* Quick Contact Details */}
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white border border-primary/5 shadow-xs rounded-xl text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-body text-[10px] text-muted-green uppercase tracking-wider font-semibold">Email Us</p>
                  <a href="mailto:expeditions@safarhood.com" className="font-body text-sm font-bold text-primary hover:text-accent transition-colors">
                    expeditions@safarhood.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white border border-primary/5 shadow-xs rounded-xl text-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-body text-[10px] text-muted-green uppercase tracking-wider font-semibold">Call / WhatsApp</p>
                  <a href="tel:+919512499032" className="font-body text-sm font-bold text-primary hover:text-accent transition-colors">
                    +91-95124-99032
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white border border-primary/5 shadow-xs rounded-xl text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-body text-[10px] text-muted-green uppercase tracking-wider font-semibold">Main Base camp Office</p>
                  <p className="font-body text-sm font-bold text-primary">
                    Natin Village, Bhatwari, Uttarkashi, Uttarakhand - 249193
                  </p>
                </div>
              </div>
            </div>

            {/* Onboarding steps */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/5">
              <h4 className="font-heading text-sm font-bold text-primary mb-3">Our Quick Onboarding Process</h4>
              <ul className="space-y-3 font-body text-xs text-muted-green">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1.</span>
                  <span>Submit the enquiry form with preferred details.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2.</span>
                  <span>Schedule a 10-minute discovery call to align fitness targets.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3.</span>
                  <span>Lock dates, receive the gear checklist, and start training.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-primary/5 shadow-xl h-full flex flex-col justify-center">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="mx-auto w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                    <HeartHandshake size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-primary">Enquiry Logged Successfully!</h3>
                    <p className="font-body text-sm text-muted-green max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to Safarhood. We have successfully sent your enquiry details. Our team will contact you shortly to clarify guidelines.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      setSubmitted(false);
                    }}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-body text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">Send an Enquiry</h3>
                    <p className="font-body text-xs text-muted-green">Acclimatization schedules, custom group rates, and general logistics.</p>
                  </div>

                  {/* Error Notification */}
                  {isError && (
                    <div className="flex gap-3 items-center bg-red-50 text-red-700 border border-red-200 p-4 rounded-xl text-xs font-body">
                      <AlertCircle size={18} className="flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-primary mb-1.5" htmlFor="form-name">Full Name</label>
                      <input 
                        type="text" 
                        id="form-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-cream border border-primary/10 focus:border-accent rounded-xl px-4 py-3 text-xs sm:text-sm text-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-primary mb-1.5" htmlFor="form-phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="form-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-cream border border-primary/10 focus:border-accent rounded-xl px-4 py-3 text-xs sm:text-sm text-primary outline-none transition-all"
                        placeholder="+91-95124-99032"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-primary mb-1.5" htmlFor="form-email">Email Address</label>
                      <input 
                        type="email" 
                        id="form-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-cream border border-primary/10 focus:border-accent rounded-xl px-4 py-3 text-xs sm:text-sm text-primary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-primary mb-1.5" htmlFor="form-subject">Subject</label>
                      <input 
                        type="text" 
                        id="form-subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-cream border border-primary/10 focus:border-accent rounded-xl px-4 py-3 text-xs sm:text-sm text-primary outline-none transition-all"
                        placeholder="e.g. Group booking request"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-primary mb-1.5" htmlFor="form-message">Your Message</label>
                    <textarea 
                      id="form-message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-cream border border-primary/10 focus:border-accent rounded-xl px-4 py-3 text-xs sm:text-sm text-primary outline-none transition-all resize-none"
                      placeholder="Tell us about your physical endurance, expectations, and any questions you might have about group dynamics..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-body text-xs sm:text-sm font-bold w-full py-4 rounded-xl transition-all duration-300 shadow-md shadow-accent/15 cursor-pointer disabled:bg-accent/50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
