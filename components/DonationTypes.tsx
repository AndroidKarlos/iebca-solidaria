export default function DonationTypes() {
  const types = [
    {
      icon: '🍎',
      title: 'Alimentos',
      description: 'Não perecíveis, cestas básicas',
    },
    {
      icon: '👕',
      title: 'Roupas',
      description: 'Novas ou em bom estado',
    },
    {
      icon: '🧴',
      title: 'Higiene',
      description: 'Produtos de limpeza e cuidado pessoal',
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          O que você pode doar?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {types.map((type, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center"
              style={{ background: 'linear-gradient(to bottom right, #e8f5e9, #c8e6c9)' }}
            >
              <span className="text-5xl block mb-4">{type.icon}</span>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{type.title}</h4>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
