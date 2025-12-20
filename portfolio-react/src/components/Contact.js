import React, { useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';

const Contact = () => {
  // Updated email link to direct Gmail URL
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    // Use FormSubmit's AJAX endpoint
    fetch("https://formsubmit.co/ajax/srisaketh111@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setIsSubmitting(false);
      setShowModal(true);
      e.target.reset();
    })
    .catch(error => {
      console.error("Error:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again.");
    });
  };


  return (
    <section id="contact" className="fade-in-section" style={{ 
      maxWidth: '1000px', 
      margin: '0 auto 100px auto', 
      position: 'relative'
    }}>
      
      {/* Success Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(2, 12, 27, 0.85)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            background: 'var(--light-navy)',
            padding: '40px',
            borderRadius: '10px',
            border: '1px solid var(--green)',
            textAlign: 'center',
            maxWidth: '400px',
            width: '90%',
            position: 'relative',
            boxShadow: '0 10px 30px -10px rgba(2,12,27,0.7)'
          }}>
            <FaCheckCircle size={50} color="var(--green)" style={{ marginBottom: '20px' }} />
            <h3 style={{ color: 'var(--lightest-slate)', fontSize: '24px', marginBottom: '10px' }}>Message Sent!</h3>
            <p style={{ color: 'var(--slate)', marginBottom: '30px' }}>
              Thanks for reaching out! I'll connect with you soon.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              style={{
                background: 'transparent',
                border: '1px solid var(--green)',
                color: 'var(--green)',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px'
              }}
            >
              Close
            </button>
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'transparent',
                border: 'none',
                color: 'var(--slate)',
                cursor: 'pointer'
              }}
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Unified Frame Container */}
      <div className="contact-frame" style={{ 
          border: '1px solid var(--lightest-navy)',
          borderRadius: '10px',
          overflow: 'hidden',
          background: 'var(--light-navy)',
          boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
          display: 'flex',
          flexDirection: 'column'
      }}>
        
        {/* Title Area inside Frame */}
        <div style={{ padding: '30px 40px 10px 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 40px)', color: 'var(--lightest-slate)', margin: '0' }}>Get In Touch</h2>
        </div>

        {/* Content Area (Grid) */}
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '0' 
        }}>
          
          {/* Left Side: Contact Info */}
          <div className="contact-info" style={{ 
              padding: '40px', 
              background: 'var(--navy)', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '30px',
              borderRight: '1px solid var(--lightest-navy)',
              borderTop: '1px solid var(--lightest-navy)' 
          }}>
              <h3 style={{ color: 'var(--lightest-slate)', fontSize: '20px', marginBottom: '10px' }}>Contact Information</h3>
              <p style={{ color: 'var(--slate)', fontSize: '16px' }}>
                Feel free to fill out the form or reach out via email or phone.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: 'auto' }}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=srisaketh111@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <FaEnvelope size={20} />
                  <span>srisaketh111@gmail.com</span>
                </a>

                <a href="tel:+919398304407" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <FaPhoneAlt size={20} />
                  <span>+91 93983 04407</span>
                </a>

                <a href="https://www.google.com/maps/place/Hyderabad,+Telangana" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <FaMapMarkerAlt size={20} />
                  <span>Hyderabad, Telangana</span>
                </a>
              </div>
          </div>

          {/* Right Side: Form */}
          <form 
            onSubmit={handleSubmit}
            style={{ padding: '40px', background: 'var(--light-navy)', borderTop: '1px solid var(--lightest-navy)' }}
          >
            {/* FormSubmit Configuration Fields not needed for AJAX except maybe subject if mapped manually, but fetching the ajax URL handles it. We can add hidden inputs to formData automatically. */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Submission from Portfolio!" />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
               <div>
                  <label htmlFor="name" style={{ color: 'var(--lightest-slate)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Your Name</label>
                  <input type="text" name="name" id="name" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid var(--lightest-navy)', background: 'var(--navy)', color: 'var(--lightest-slate)', fontSize: '14px' }} />
               </div>
               <div>
                  <label htmlFor="email" style={{ color: 'var(--lightest-slate)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Your Email</label>
                  <input type="email" name="email" id="email" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid var(--lightest-navy)', background: 'var(--navy)', color: 'var(--lightest-slate)', fontSize: '14px' }} />
               </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
               <label htmlFor="subject" style={{ color: 'var(--lightest-slate)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Subject</label>
               <input type="text" name="subject" id="subject" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid var(--lightest-navy)', background: 'var(--navy)', color: 'var(--lightest-slate)', fontSize: '14px' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <label htmlFor="message" style={{ color: 'var(--lightest-slate)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Message</label>
              <textarea name="message" id="message" rows="4" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid var(--lightest-navy)', background: 'var(--navy)', color: 'var(--lightest-slate)', fontSize: '14px', resize: 'vertical' }}></textarea>
            </div>
            
            <button type="submit" disabled={isSubmitting} className="send-message-btn">
              {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
