import { CTAButton } from "@/components/CTAButton";
import { PainPoint } from "@/components/PainPoint";
import { ModuleCard } from "@/components/ModuleCard";
import { BonusCard } from "@/components/BonusCard";
import { FAQItem } from "@/components/FAQItem";
import { Accordion } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-product-mockup.jpg";
import guaranteeSeal from "@/assets/guarantee-seal.png";

const Index = () => {
  const handleCTAClick = () => {
    // Replace with actual checkout URL
    window.location.href = "https://pay.cakto.com.br/hhp2gv4_517124";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Seção 1: Gancho de Diagnóstico */}
      <section className="gradient-subtle py-16 px-4 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
            Seu Diagnóstico Está Pronto.
          </h1>
          <div className="bg-accent/10 border-2 border-accent rounded-xl p-6 mb-6 shadow-soft">
            <p className="text-lg md:text-xl leading-relaxed">
              Com base nas suas respostas, seu nível de impacto de Pensamentos Intrusivos é considerado{" "}
              <strong className="text-accent text-2xl">ALTO</strong>.
            </p>
          </div>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Mas isso não é sua culpa. É um padrão mental que pode ser desaprendido. 
            Veja como usar o método de 3 passos simples para silenciar o ruído mental e recuperar sua paz.
          </p>
        </div>
      </section>

      {/* Seção 2: Apresentação da Solução */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Apresentando...
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary font-extrabold">
            PENSAMENTO INTRUSIVO: O MÉTODO
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/80">
            O único sistema passo a passo que te ensina a <strong>desativar o poder</strong> dos 
            pensamentos negativos através de técnicas práticas, para que você possa viver com mais 
            clareza, calma e confiança.
          </p>
          
          <div className="mb-12 animate-slide-up">
            <img 
              src={heroImage} 
              alt="Pensamento Intrusivo: O Método - Plataforma de Curso" 
              className="w-full rounded-2xl shadow-elevated"
            />
          </div>

          <CTAButton 
            onClick={handleCTAClick}
            subtitle="Acesso vitalício | Compra 100% segura"
          >
            QUERO MEU ACESSO IMEDIATO E RECUPERAR MINHA PAZ MENTAL
          </CTAButton>
        </div>
      </section>

      {/* Seção 3: Agitação do Problema */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Se você se sente assim, você está no lugar certo:
          </h2>
          <div className="space-y-4">
            <PainPoint
              icon="🧠"
              title="Mentalmente Exausto(a)"
              description="Como se sua mente nunca tirasse férias, repassando o mesmo problema de novo e de novo."
            />
            <PainPoint
              icon="🛌"
              title="Insônia e Noites Mal Dormidas"
              description="Deitar na cama é o gatilho para a sua mente disparar com preocupações e medos."
            />
            <PainPoint
              icon="😟"
              title="Ansiedade Constante"
              description="Um sentimento de que algo ruim está prestes a acontecer, mesmo sem um motivo real."
            />
            <PainPoint
              icon="📉"
              title="Procrastinação e Falta de Foco"
              description="É impossível se concentrar no presente quando sua mente está presa no passado ou no futuro."
            />
            <PainPoint
              icon="😔"
              title="Culpa e Vergonha"
              description="Por ter pensamentos que você considera 'ruins' ou 'estranhos', te fazendo se sentir isolado(a)."
            />
          </div>
        </div>
      </section>

      {/* Seção 4: Conteúdo do Método */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Aqui está o seu mapa para uma mente mais silenciosa:
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            <ModuleCard
              number={1}
              title="O DIAGNÓSTICO"
              subtitle="O Ponto de Partida"
              features={[
                "Entenda a verdadeira causa dos seus pensamentos (não é sua culpa!).",
                "Identifique seus 3 principais gatilhos mentais.",
                "A Técnica do 'Nome do Vilão': como separar você dos seus pensamentos."
              ]}
            />
            <ModuleCard
              number={2}
              title="O KIT DE PRIMEIROS SOCORROS MENTAL"
              subtitle="As Ferramentas Práticas"
              features={[
                "A Técnica 'Âncora' de 30 segundos para parar uma espiral de ansiedade.",
                "O Método 'Nuvens no Céu': a principal técnica de defusão para observar os pensamentos sem se apegar.",
                "Como lidar com pensamentos de culpa, vergonha e medo."
              ]}
            />
            <ModuleCard
              number={3}
              title="REPROGRAMANDO O PILOTO AUTOMÁTICO"
              subtitle="A Mudança a Longo Prazo"
              features={[
                "Como criar 'Rotinas de Higiene Mental' para blindar sua mente.",
                "O Exercício do 'Juiz Interno' para silenciar sua autocrítica.",
                "Plano de Ação de 30 dias para transformar as técnicas em hábitos."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Seção 5: Bônus */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Comprando HOJE, Você Também Leva 3 Bônus Exclusivos:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <BonusCard
              number={1}
              title="Guia Prático 'Sono Reparador'"
              value="R$97,00"
              description="Técnicas para acalmar a mente e dormir a noite toda."
            />
            <BonusCard
              number={2}
              title="Masterclass 'Blindagem Emocional'"
              value="R$147,00"
              description="Como lidar com a opinião dos outros e construir autoconfiança."
            />
            <BonusCard
              number={3}
              title="Acesso à Comunidade VIP"
              value="R$197,00"
              description="Um espaço seguro para tirar dúvidas e compartilhar experiências."
            />
          </div>
        </div>
      </section>

      {/* Seção 6: Oferta */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-elevated border-2 border-primary/20 animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl text-center mb-8">
                Seu Acesso Completo Inclui:
              </h2>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-lg">O Método "Pensamento Intrusivo"</span>
                  <span className="font-bold text-lg">R$297</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-lg">Bônus 1: Guia "Sono Reparador"</span>
                  <span className="font-bold text-lg">R$97</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-lg">Bônus 2: Masterclass "Blindagem Emocional"</span>
                  <span className="font-bold text-lg">R$147</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-lg">Bônus 3: Comunidade VIP</span>
                  <span className="font-bold text-lg">R$197</span>
                </div>
                <div className="flex justify-between items-center py-4 border-t-2 border-primary/20">
                  <span className="text-xl font-bold">VALOR TOTAL:</span>
                  <span className="text-2xl font-bold line-through text-muted-foreground">R$738,00</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-lg mb-2">Seu Investimento Hoje é de Apenas:</p>
                <p className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  12x de R$ 11,28
                </p>
                <p className="text-2xl text-muted-foreground">ou R$ 97,00 à vista</p>
              </div>

              <CTAButton 
                onClick={handleCTAClick}
                subtitle="Menos de R$0,33 por dia para ter sua paz de volta"
              >
                SIM, QUERO ACESSO IMEDIATO POR APENAS R$97
              </CTAButton>

              <div className="flex items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
                <CreditCard className="h-5 w-5" />
                <span>Pagamento 100% Seguro</span>
                <span>•</span>
                <span>Visa</span>
                <span>•</span>
                <span>Mastercard</span>
                <span>•</span>
                <span>Pix</span>
                <span>•</span>
                <span>Boleto</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 7: Garantia */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8">
            Sua Paz Mental é Garantida ou Seu Dinheiro de Volta!
          </h2>
          
          <div className="flex justify-center mb-8 animate-slide-up">
            <img 
              src={guaranteeSeal} 
              alt="Garantia Incondicional de 7 Dias" 
              className="w-48 h-48"
            />
          </div>

          <Card className="shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-12 w-12 text-secondary flex-shrink-0" />
                <p className="text-lg leading-relaxed text-left">
                  Acesse "O Método" e aplique as técnicas iniciais. Se, por qualquer motivo, 
                  você não sentir uma melhora na sua clareza mental, basta me enviar um único 
                  e-mail em até 7 dias e eu devolvo 100% do seu investimento. O risco é todo meu.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção 8: FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <FAQItem
              value="item-1"
              question="Isso substitui a terapia?"
              answer="Não. O Método é um treinamento de desenvolvimento pessoal focado em técnicas práticas e não substitui o acompanhamento psicológico profissional. Ele é um excelente complemento."
            />
            <FAQItem
              value="item-2"
              question="Em quanto tempo vejo resultados?"
              answer="Você sentirá alívio e clareza aplicando as técnicas do Módulo 2 no primeiro dia. A mudança duradoura vem com a prática consistente do plano de 30 dias."
            />
            <FAQItem
              value="item-3"
              question="Como vou receber o acesso?"
              answer="Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login e senha para acessar nossa área de membros exclusiva."
            />
            <FAQItem
              value="item-4"
              question="Por quanto tempo terei acesso?"
              answer="O acesso é vitalício. Você paga uma vez e pode acessar o curso e todas as futuras atualizações para sempre."
            />
          </Accordion>
        </div>
      </section>

      {/* Seção 9: CTA Final */}
      <section className="py-16 px-4 gradient-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Pronto(a) para silenciar sua mente?
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            Acesso Imediato por apenas 12x de R$ 11,28 (ou R$97 à vista)
          </p>
          
          <CTAButton onClick={handleCTAClick}>
            QUERO RECUPERAR MINHA PAZ MENTAL AGORA
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Pensamento Intrusivo: O Método. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
