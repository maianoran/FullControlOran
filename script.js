// Registrador de Service Worker y Ayudantes de PWA para Control de Caja

document.addEventListener('DOMContentLoaded', () => {
  // Registro de Service Worker para PWA y uso Offline
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('Service Worker registrado correctamente con alcance:', reg.scope);
        })
        .catch(err => {
          console.warn('Registro de Service Worker omitido o no compatible en este entorno:', err);
        });
    });
  }

  // Detección del estado de conexión a Internet (Online / Offline)
  const updateOnlineStatus = () => {
    if (!navigator.onLine) {
      console.warn('Conexión perdida. Operando en modo fuera de línea.');
    } else {
      console.log('Conexión reestablecida.');
    }
  };

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
