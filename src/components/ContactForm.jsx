import { useState, useEffect } from 'react';

// ContactForm - React component with real-time validation and WhatsApp/Email submission
export default function ContactForm({ 
  email = 'contacto@clinicapediatrica.com',
  whatsappNumber = '+51999999999'
}) {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'whatsapp'
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMethod, setSubmitMethod] = useState(null);

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return 'El nombre solo debe contener letras';
        return '';
      
      case 'email':
        if (!value.trim()) return 'El email es requerido';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Ingresa un email válido';
        return '';
      
      case 'phone':
        if (!value.trim()) return 'El teléfono es requerido';
        if (!/^[0-9\s\-\+\(\)]+$/.test(value)) return 'Ingresa un teléfono válido';
        if (value.replace(/\D/g, '').length < 8) return 'El teléfono debe tener al menos 8 dígitos';
        return '';
      
      case 'subject':
        if (!value.trim()) return 'El asunto es requerido';
        if (value.trim().length < 5) return 'El asunto debe tener al menos 5 caracteres';
        return '';
      
      case 'message':
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.trim().length < 20) return 'El mensaje debe tener al menos 20 caracteres';
        if (value.trim().length > 1000) return 'El mensaje no puede exceder 1000 caracteres';
        return '';
      
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'preferredContact') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation if field was touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const buildWhatsAppMessage = () => {
    return `*Nuevo mensaje de contacto - Clínica Pediátrica*%0A%0A` +
           `*Nombre:* ${formData.name}%0A` +
           `*Email:* ${formData.email}%0A` +
           `*Teléfono:* ${formData.phone}%0A` +
           `*Asunto:* ${formData.subject}%0A` +
           `*Método de contacto preferido:* ${formData.preferredContact.toUpperCase()}%0A%0A` +
           `*Mensaje:*%0A${formData.message}%0A%0A` +
           `---%0AEnviado desde el formulario de contacto web`;
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`Contacto Web: ${formData.subject}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Método de contacto preferido: ${formData.preferredContact.toUpperCase()}\n\n` +
      `Mensaje:\n${formData.message}\n\n` +
      `---\nEnviado desde el formulario de contacto web`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call delay for UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Determine submission method based on preferred contact
      if (formData.preferredContact === 'whatsapp') {
        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${buildWhatsAppMessage()}`;
        window.open(whatsappUrl, '_blank');
        setSubmitMethod('whatsapp');

      } else if (formData.preferredContact === 'email') {
        // Open email client
        window.location.href = buildMailtoLink();
        setSubmitMethod('email');
      } else {
        // For phone preference, show success and let them know we'll call
        setSubmitMethod('phone');
      }
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'whatsapp'
        });
        setTouched({});
        setSubmitStatus(null);
        setSubmitMethod(null);
      }, 5000);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-200";
    
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-red-300 bg-red-50 text-red-900 placeholder-red-400`;
    }
    
    if (touched[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-300 bg-green-50 text-green-900`;
    }
    
    return `${baseClass} border-gray-200 bg-white text-gray-900 placeholder-gray-400 hover:border-pink-300`;
  };

  const messageLength = formData.message.length;
  const messageProgress = Math.min((messageLength / 1000) * 100, 100);

  const getSuccessMessage = () => {
    switch (submitMethod) {
      case 'whatsapp':
        return 'Se abrió WhatsApp con tu mensaje. ¡Envíalo para completar el contacto!';
      case 'email':
        return 'Se abrió tu cliente de correo. ¡Envía el email para completar el contacto!';
      case 'phone':
        return '¡Mensaje recibido! Te llamaremos pronto al número proporcionado.';
      default:
        return '¡Mensaje enviado! Te contactaremos pronto.';
    }
  };

  return (

    <div className="bg-white p-1 md:p-2">

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-fade-in">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <i data-lucide="check" className="w-5 h-5 text-green-600"></i>
          </div>
          <div>
            <p className="font-semibold text-green-800">¡Mensaje preparado!</p>
            <p className="text-sm text-green-600">{getSuccessMessage()}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: María González"
            className={getInputClassName('name')}
            disabled={isSubmitting}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <i data-lucide="alert-circle" className="w-4 h-4"></i>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: maria@email.com"
            className={getInputClassName('email')}
            disabled={isSubmitting}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <i data-lucide="alert-circle" className="w-4 h-4"></i>
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: +51 999 888 777"
            className={getInputClassName('phone')}
            disabled={isSubmitting}
          />
          {touched.phone && errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <i data-lucide="alert-circle" className="w-4 h-4"></i>
              {errors.phone}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Asunto <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: Consulta sobre vacunación"
            className={getInputClassName('subject')}
            disabled={isSubmitting}
          />
          {touched.subject && errors.subject && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <i data-lucide="alert-circle" className="w-4 h-4"></i>
              {errors.subject}
            </p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            ¿Cómo prefieres que te contactemos?
          </label>
          <div className="flex gap-3">
            {[
              { value: 'whatsapp', label: 'WhatsApp', icon: 'message-circle' },
              { value: 'phone', label: 'Llamada', icon: 'phone' },
              { value: 'email', label: 'Email', icon: 'mail' }
            ].map(option => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, preferredContact: option.value }))}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                  formData.preferredContact === option.value
                    ? 'border-pink-500 bg-pink-50 text-pink-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-pink-300'
                }`}
                disabled={isSubmitting}
              >
                <i data-lucide={option.icon} className="w-4 h-4"></i>
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Describe tu consulta o mensaje detalladamente..."
            rows={5}
            className={`${getInputClassName('message')} resize-none`}
            disabled={isSubmitting}
            maxLength={1000}
          />
          <div className="flex items-center justify-between mt-2">
            {touched.message && errors.message ? (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <i data-lucide="alert-circle" className="w-4 h-4"></i>
                {errors.message}
              </p>
            ) : (
              <span className="text-sm text-gray-400">
                Mínimo 20 caracteres
              </span>
            )}
            <span className={`text-sm ${
              messageLength > 900 ? 'text-orange-500' : 'text-gray-400'
            }`}>
              {messageLength}/1000
            </span>
          </div>
          {/* Progress bar */}
          <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${
                messageLength < 20 ? 'bg-red-400' : 
                messageLength < 100 ? 'bg-yellow-400' : 'bg-green-400'
              }`}
              style={{ width: `${messageProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            isSubmitting 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-linear-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'

          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Preparando mensaje...
            </>
          ) : (
            <>
              <i data-lucide="send" className="w-5 h-5"></i>
              {formData.preferredContact === 'whatsapp' ? 'Enviar por WhatsApp' : 
               formData.preferredContact === 'email' ? 'Enviar por Email' : 'Solicitar llamada'}
            </>
          )}
        </button>
        
        {/* Helper text */}
        <p className="text-xs text-gray-400 text-center">
          {formData.preferredContact === 'whatsapp' && 'Se abrirá WhatsApp con tu mensaje pre-escrito'}
          {formData.preferredContact === 'email' && 'Se abrirá tu cliente de correo electrónico'}
          {formData.preferredContact === 'phone' && 'Te llamaremos al número proporcionado'}
        </p>
      </form>
    </div>
  );
}
