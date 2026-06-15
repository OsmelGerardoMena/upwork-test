// src/components/ErrorMessage.jsx
// Displayed when the API call fails

/**
 * @param {{ message: string, onRetry: Function }} props
 */
const ErrorMessage = ({ message, onRetry }) => (
  <div
    role="alert"
    className="glass-card max-w-lg mx-auto mt-16 p-8 rounded-2xl text-center space-y-4
               border border-red-500/20"
  >
    <div className="text-5xl">⚠️</div>
    <h2 className="text-xl font-bold text-red-400">Error al cargar propiedades</h2>
    <p className="text-slate-400 text-sm">{message}</p>
    <button
      onClick={onRetry}
      className="btn-primary mt-2"
      id="retry-btn"
    >
      Reintentar
    </button>
  </div>
);

export default ErrorMessage;
