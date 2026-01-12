export default function Hero() {
  return (
    <section className="py-12 px-4" style={{ background: 'linear-gradient(to bottom, #e8f5e9, white)' }}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Faça sua doação de forma simples e rápida
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          A Igreja Batista Evangélica de Casa Amarela está arrecadando alimentos, roupas e itens
          de higiene para famílias em situação de vulnerabilidade da nossa comunidade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl mb-2 block">🎯</span>
            <p className="font-semibold text-gray-800">Rápido e Fácil</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl mb-2 block">🤝</span>
            <p className="font-semibold text-gray-800">Impacto Real</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl mb-2 block">💚</span>
            <p className="font-semibold text-gray-800">Transparente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
