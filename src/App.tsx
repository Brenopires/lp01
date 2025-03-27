import React, { useState } from 'react';
import { MessageCircle, Gift, Percent, Send, ChevronRight, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppJoin = () => {
    window.open('https://wa.me/+1234567890?text=Olá! Gostaria de participar do programa de fidelidade!', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(338,92%,15%)] to-[hsl(338,92%,20%)] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[hsl(338,92%,15%)] border-b border-[hsl(338,92%,25%)]">
        <nav className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <img src="https://i.imgur.com/MK7ubdZ.png" alt="Logo" className="h-8 w-auto" />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div className="hidden md:flex items-center gap-6">
              <a href="#beneficios" className="text-white hover:text-[hsl(338,92%,62%)] transition-colors text-sm">Benefícios</a>
              <a href="#como-funciona" className="text-white hover:text-[hsl(338,92%,62%)] transition-colors text-sm">Como Funciona</a>
              <button
                onClick={handleWhatsAppJoin}
                className="bg-[hsl(338,92%,42%)] hover:bg-[hsl(338,92%,47%)] text-white px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Participar Agora
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-[hsl(338,92%,18%)] border-b border-[hsl(338,92%,25%)]">
              <div className="flex flex-col p-4 gap-4">
                <a 
                  href="#beneficios" 
                  className="text-white hover:text-[hsl(338,92%,62%)] transition-colors text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefícios
                </a>
                <a 
                  href="#como-funciona" 
                  className="text-white hover:text-[hsl(338,92%,62%)] transition-colors text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Como Funciona
                </a>
                <button
                  onClick={() => {
                    handleWhatsAppJoin();
                    setIsMenuOpen(false);
                  }}
                  className="bg-[hsl(338,92%,42%)] hover:bg-[hsl(338,92%,47%)] text-white px-4 py-3 rounded-full flex items-center justify-center text-lg font-medium transition-colors w-full"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Participar Agora
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pb-8">
        {/* Hero */}
        <div className="px-4 pt-6 pb-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-[hsl(338,92%,22%)] p-3 rounded-full inline-block mb-6">
              <p className="text-sm md:text-base font-medium text-[hsl(338,92%,62%)]">
                <Percent className="h-4 w-4 inline mr-2 mb-0.5" />
                Descontos exclusivos para membros
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Participe da nossa comunidade e <span className="text-[hsl(338,92%,62%)]">economize em cada litro</span>
            </h1>
            <p className="text-lg text-white mb-8 px-4">
              Entre para nosso grupo no WhatsApp e receba ofertas exclusivas toda semana!
            </p>
            <button
              onClick={handleWhatsAppJoin}
              className="bg-[hsl(338,92%,42%)] hover:bg-[hsl(338,92%,47%)] text-white px-6 py-4 rounded-full flex items-center mx-auto text-lg font-medium transition-colors mb-8 shadow-lg"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Quero Participar
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
            <img
              src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80"
              alt="Posto de Gasolina"
              className="rounded-lg shadow-xl w-full object-cover h-48 md:h-64"
            />
          </div>
        </div>

        {/* Benefits */}
        <div id="beneficios" className="bg-[hsl(338,92%,18%)] py-12">
          <div className="px-4 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
              Vantagens Exclusivas para Membros
            </h2>
            <div className="grid gap-6 max-w-md mx-auto">
              <div className="bg-[hsl(338,92%,22%)] p-6 rounded-lg border border-[hsl(338,92%,25%)] hover:border-[hsl(338,92%,42%)] transition-colors">
                <div className="flex items-center gap-4">
                  <Percent className="h-10 w-10 text-[hsl(338,92%,62%)] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Descontos Toda Semana</h3>
                    <p className="text-[hsl(338,20%,80%)]">Receba cupons de desconto e promoções especiais direto no seu WhatsApp</p>
                  </div>
                </div>
              </div>
              <div className="bg-[hsl(338,92%,22%)] p-6 rounded-lg border border-[hsl(338,92%,25%)] hover:border-[hsl(338,92%,42%)] transition-colors">
                <div className="flex items-center gap-4">
                  <Gift className="h-10 w-10 text-[hsl(338,92%,62%)] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Programa de Pontos</h3>
                    <p className="text-[hsl(338,20%,80%)]">Ganhe pontos em cada abastecimento e troque por prêmios e descontos extras</p>
                  </div>
                </div>
              </div>
              <div className="bg-[hsl(338,92%,22%)] p-6 rounded-lg border border-[hsl(338,92%,25%)] hover:border-[hsl(338,92%,42%)] transition-colors">
                <div className="flex items-center gap-4">
                  <Send className="h-10 w-10 text-[hsl(338,92%,62%)] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Ofertas em Primeira Mão</h3>
                    <p className="text-[hsl(338,20%,80%)]">Seja o primeiro a saber quando os preços baixarem e aproveite as melhores ofertas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div id="como-funciona" className="py-12">
          <div className="px-4 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
              Como Participar
            </h2>
            <div className="grid gap-8 max-w-md mx-auto">
              <div className="flex items-center gap-4">
                <div className="bg-[hsl(338,92%,22%)] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[hsl(338,92%,42%)]">
                  <span className="text-[hsl(338,92%,62%)] font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Entre no Grupo do WhatsApp</h3>
                  <p className="text-[hsl(338,20%,80%)]">Clique no botão "Participar" e envie uma mensagem</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[hsl(338,92%,22%)] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[hsl(338,92%,42%)]">
                  <span className="text-[hsl(338,92%,62%)] font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Receba seu Código de Membro</h3>
                  <p className="text-[hsl(338,20%,80%)]">Você receberá um código único para usar em seus abastecimentos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[hsl(338,92%,22%)] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[hsl(338,92%,42%)]">
                  <span className="text-[hsl(338,92%,62%)] font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Comece a Economizar</h3>
                  <p className="text-[hsl(338,20%,80%)]">Use seu código ao abastecer para ganhar pontos e descontos especiais</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[hsl(338,92%,22%)] py-12 mt-12">
          <div className="px-4 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para Começar a Economizar?
            </h2>
            <p className="text-lg text-[hsl(338,20%,80%)] mb-8">
              Junte-se a milhares de clientes que já estão economizando em cada abastecimento
            </p>
            <button
              onClick={handleWhatsAppJoin}
              className="bg-[hsl(338,92%,42%)] hover:bg-[hsl(338,92%,47%)] text-white px-8 py-4 rounded-full flex items-center mx-auto text-lg font-medium transition-colors"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Participar do Programa
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[hsl(338,92%,18%)] py-6">
        <div className="px-4 max-w-7xl mx-auto text-center text-[hsl(338,20%,80%)] text-sm">
          <p>© 2025 Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;