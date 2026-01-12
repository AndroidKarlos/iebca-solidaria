export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h4 className="text-xl font-bold mb-2">Igreja Batista Evangélica de Casa Amarela</h4>
        <p className="mb-4">📍 Bairro de Casa Amarela - Recife, PE</p>
        <div className="text-sm text-gray-300 max-w-2xl mx-auto">
          <p className="mb-2">Projeto desenvolvido como Atividade Extensionista</p>
          <p className="font-semibold mb-1">Objetivos de Desenvolvimento Sustentável (ODS)</p>
          <p className="text-xs">
            ODS 1: Erradicação da pobreza | ODS 10: Redução das desigualdades | ODS 12: Consumo
            responsável
          </p>
        </div>
        <div className="mt-6 text-xs text-gray-400">
          <p>Desenvolvido com Next.js, TypeScript e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
