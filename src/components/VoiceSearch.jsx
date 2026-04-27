import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

export default function VoiceSearch({ 
  inputId = 'search-input', 
  formId = 'search-form',
  onResult,
  onError,
  className = '',
  alwaysVisible = false
}) {
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState('Diga el nombre de un especialista o síntoma...');
  const [waves, setWaves] = useState([0, 0.1, 0.2, 0.3, 0.4, 0.2, 0.1]);
  const recognitionRef = useRef(null);
  const onResultRef = useRef(onResult);

  const onErrorRef = useRef(onError);
  const inputIdRef = useRef(inputId);
  const formIdRef = useRef(formId);

  // Keep refs in sync with props
  useEffect(() => {
    onResultRef.current = onResult;
    onErrorRef.current = onError;
    inputIdRef.current = inputId;
    formIdRef.current = formId;
  }, [onResult, onError, inputId, formId]);

  // Initialize speech recognition

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'es-ES';
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setStatus('Escuchando...');
      };

      recognitionRef.current.onresult = (event) => {

        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        if (event.results[0].isFinal) {
          setStatus(`Buscando: "${transcript}"`);
          
          const input = document.getElementById(inputIdRef.current);
          if (input) {
            input.value = transcript;
            input.dispatchEvent(new Event('input', { bubbles: true }));
          }
          
          setTimeout(() => {
            setIsListening(false);
            const form = document.getElementById(formIdRef.current);
            if (form) {
              form.submit();
            }
          }, 1000);
          
          if (onResultRef.current) onResultRef.current(transcript);
        } else {
          setStatus(`Escuchando: ${transcript}`);
        }
      };

      recognitionRef.current.onerror = (event) => {

        setStatus(`Error: ${event.error}`);
        setIsListening(false);
        if (onErrorRef.current) onErrorRef.current(event.error);
        setTimeout(() => setStatus('Diga el nombre de un especialista o síntoma...'), 2000);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
        recognitionRef.current = null;
      }
    };
  }, []);


  const startListening = useCallback(() => {

    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error('Voice recognition error:', e);
        setStatus('Error al iniciar reconocimiento');
      }
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    setIsListening(false);
  }, []);

  // Global API exposure
  useEffect(() => {
    window.voiceSearch = {
      start: startListening,
      stop: stopListening,
      isListening: () => isListening
    };

    return () => {
      delete window.voiceSearch;
    };
  }, [startListening, stopListening, isListening]);

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isListening) {
        stopListening();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [stopListening, isListening]);

  // Animate waves - Ahora más lento para permitir que la transición brille
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        // Generamos valores entre 0.3 y 1 para que las barras no desaparezcan del todo
        setWaves(prev => prev.map(() => Math.random() * 0.7 + 0.3));
      }, 400); 
      return () => clearInterval(interval);
    }
  }, [isListening]);

  return (

    <>
      {/* Voice Button */}
      <button 
        type="button"
        // Eliminamos 'hidden' si alwaysVisible es true y añadimos z-10
        className={`voice-btn ${alwaysVisible ? 'flex' : 'hidden'} items-center justify-center z-10 p-2.5 text-slate-400 hover:text-pink-500 transition-all rounded-full ${className}`}
        onClick={startListening}
        aria-label="Buscar por voz"
      >

        <i className="fa-solid fa-microphone text-ml"></i>
      </button>

      {/* Voice Modal - Siempre en DOM para animaciones CSS */}
        <div 
          className={`fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 transition-all duration-500 ${
            isListening ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >

        <div className={`bg-white rounded-[2.5rem] p-10 max-w-sm w-full shadow-2xl transform border border-white transition-all duration-500 mx-auto ${isListening ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="text-center">
            <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-pink-200 rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-0 bg-pink-100 rounded-full animate-pulse opacity-40"></div>
              <i className="fa-solid fa-microphone text-3xl text-pink-500 relative z-10"></i>
            </div>

            <h3 className="text-xl font-black text-slate-800 mb-2 uppercase tracking-tight">Te escuchamos</h3>
            <p className="text-slate-500 text-sm mb-8 font-medium">
              {status}
            </p>
            
            <div className="flex items-end justify-center gap-1.5 mb-10 h-12">
              {waves.map((value, index) => (
                <div 
                  key={index}
                  className="w-1.5 bg-pink-500 rounded-full transition-all duration-500 ease-in-out" 
                  style={{
                    // Altura base 12px + valor dinámico hasta 40px
                    height: `${12 + value * 28}px`,
                    // Opacidad variable para dar profundidad
                    opacity: 0.5 + value * 0.5 
                  }}
                />
              ))}
            </div>

            <button 
              className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest active:scale-95"
              onClick={stopListening}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>


    </>
  );
}
