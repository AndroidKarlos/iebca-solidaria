'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { donationSchema, type DonationFormData } from '@/types/donation';

export default function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
  });

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const limited = numbers.slice(0, 11);

    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 6) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    } else if (limited.length <= 10) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 6)}-${limited.slice(6)}`;
    } else {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('telefone', formatted);
  };

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar doação');
      }

      setSubmitStatus('success');
      reset();

      // Scroll suave para a mensagem de sucesso
      setTimeout(() => {
        document.getElementById('successMessage')?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    } catch (error) {
      console.error('Erro ao enviar doação:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 bg-white" id="formulario">
      <div className="container mx-auto max-w-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Cadastre sua doação
        </h3>
        <p className="text-center text-gray-600 mb-8">
          Preencha o formulário abaixo e entraremos em contato para agendar a coleta
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
              Nome Completo *
            </label>
            <input
              {...register('nome')}
              type="text"
              id="nome"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008751] focus:border-transparent transition-all"
              placeholder="Seu nome completo"
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
              Telefone/WhatsApp *
            </label>
            <input
              {...register('telefone')}
              type="tel"
              id="telefone"
              onChange={handlePhoneChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008751] focus:border-transparent transition-all"
              placeholder="(81) 99999-9999"
            />
            <small className="text-gray-500 text-xs">Formato: (81) 99999-9999</small>
            {errors.telefone && (
              <p className="mt-1 text-sm text-red-600">{errors.telefone.message}</p>
            )}
          </div>

          {/* Tipo de Doação */}
          <div>
            <label htmlFor="tipodoacao" className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de Doação *
            </label>
            <select
              {...register('tipodoacao')}
              id="tipodoacao"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008751] focus:border-transparent transition-all bg-white"
            >
              <option value="">Selecione o tipo</option>
              <option value="Alimentos">Alimentos</option>
              <option value="Roupas">Roupas</option>
              <option value="Higiene Pessoal">Higiene Pessoal</option>
              <option value="Misto">Misto (vários tipos)</option>
            </select>
            {errors.tipodoacao && (
              <p className="mt-1 text-sm text-red-600">{errors.tipodoacao.message}</p>
            )}
          </div>

          {/* Quantidade */}
          <div>
            <label htmlFor="quantidade" className="block text-sm font-semibold text-gray-700 mb-2">
              Quantidade estimada *
            </label>
            <input
              {...register('quantidade')}
              type="text"
              id="quantidade"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008751] focus:border-transparent transition-all"
              placeholder="Ex: 5kg, 10 peças, 3 caixas"
            />
            {errors.quantidade && (
              <p className="mt-1 text-sm text-red-600">{errors.quantidade.message}</p>
            )}
          </div>

          {/* Endereço */}
          <div>
            <label htmlFor="endereco" className="block text-sm font-semibold text-gray-700 mb-2">
              Endereço para Coleta *
            </label>
            <textarea
              {...register('endereco')}
              id="endereco"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008751] focus:border-transparent transition-all resize-none"
              placeholder="Rua, número, complemento, bairro, CEP"
            />
            {errors.endereco && (
              <p className="mt-1 text-sm text-red-600">{errors.endereco.message}</p>
            )}
          </div>

          {/* Observações */}
          <div>
            <label htmlFor="observacoes" className="block text-sm font-semibold text-gray-700 mb-2">
              Observações (opcional)
            </label>
            <textarea
              {...register('observacoes')}
              id="observacoes"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008751] focus:border-transparent transition-all resize-none"
              placeholder="Informações adicionais sobre a doação ou melhor horário para coleta"
            />
          </div>

          {/* Botão Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-bold py-4 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#008751' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#006b40'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#008751'}
          >
            {isSubmitting ? 'Enviando...' : 'Cadastrar Doação'}
          </button>

          {/* Mensagem de Sucesso */}
          {submitStatus === 'success' && (
            <div
              id="successMessage"
              className="flex items-center gap-3 px-6 py-4 rounded-lg"
              style={{ backgroundColor: '#e8f5e9', borderColor: '#008751', borderWidth: '1px', color: '#004d2c' }}
            >
              <span className="text-2xl">✅</span>
              <p className="font-semibold">
                Doação cadastrada com sucesso! Entraremos em contato em breve.
              </p>
            </div>
          )}

          {/* Mensagem de Erro */}
          {submitStatus === 'error' && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-500 text-red-800 px-6 py-4 rounded-lg">
              <span className="text-2xl">❌</span>
              <p className="font-semibold">Erro ao cadastrar doação. Tente novamente.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
