export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Preencha o formulário',
      description: 'Cadastre sua doação com informações básicas',
    },
    {
      number: 2,
      title: 'Aguarde nosso contato',
      description: 'Entraremos em contato via WhatsApp para agendar',
    },
    {
      number: 3,
      title: 'Coletamos na sua casa',
      description: 'Nossa equipe busca a doação no endereço informado',
    },
    {
      number: 4,
      title: 'Distribuímos com amor',
      description: 'Levamos para famílias da comunidade',
    },
  ];

  return (
    <section className="py-12 px-4" style={{ background: 'linear-gradient(to bottom, white, #e8f5e9)' }}>
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Como funciona?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg" style={{ backgroundColor: '#008751' }}>
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
