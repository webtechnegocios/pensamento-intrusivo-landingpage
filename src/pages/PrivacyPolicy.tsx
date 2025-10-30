import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para a página inicial
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Política de Privacidade
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Última atualização: 20 de outubro de 2025
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introdução</h2>
            <p className="text-foreground/80 leading-relaxed">
              O site <strong>Pensamento Intrusivo: O Método</strong>, sob responsabilidade do
              Dr. Jô Furlan, compromete-se a respeitar a sua privacidade em relação a qualquer
              informação sua que possamos coletar no site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Coleta de Dados</h2>
            <p className="text-foreground/80 leading-relaxed">
              Solicitamos informações pessoais apenas quando realmente precisamos delas para
              lhe fornecer um serviço. Fazemos isso por meios justos e legais, com o seu
              conhecimento e consentimento.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Para o diagnóstico e acesso ao método, podemos coletar informações como nome e
              e-mail mediante consentimento informado. As respostas do quiz são processadas
              de forma anônima para gerar diagnósticos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso de Dados</h2>
            <p className="text-foreground/80 leading-relaxed">
              Os dados coletados são usados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
              <li>Calcular e apresentar o resultado do diagnóstico</li>
              <li>Fornecer acesso ao conteúdo do método</li>
              <li>Enviar comunicações relacionadas ao produto adquirido</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Informações</h2>
            <p className="text-foreground/80 leading-relaxed">
              Não compartilhamos informações de identificação pessoal publicamente ou com
              terceiros, exceto quando exigido por lei.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Os dados de pagamento são processados por plataformas seguras de terceiros
              (processadores de pagamento) e não temos acesso às informações completas do
              seu cartão de crédito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
            <p className="text-foreground/80 leading-relaxed">
              Utilizamos cookies para melhorar a experiência no site. Os cookies são pequenos
              arquivos de texto armazenados no seu navegador. Utilizamos dois tipos:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
              <li>
                <strong>Cookies essenciais:</strong> Necessários para o funcionamento básico
                do site
              </li>
              <li>
                <strong>Cookies de análise:</strong> Utilizamos Google Analytics para entender
                como os visitantes interagem com o site
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar
              sua experiência no site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Links para Sites de Terceiros</h2>
            <p className="text-foreground/80 leading-relaxed">
              Nosso site pode conter links para sites externos que não são operados por nós.
              Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites
              e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Segurança dos Dados</h2>
            <p className="text-foreground/80 leading-relaxed">
              Retemos as informações coletadas pelo tempo necessário para fornecer o serviço
              solicitado. Protegemos seus dados dentro de meios comercialmente aceitáveis de
              perda, roubo, acesso não autorizado, divulgação, cópia, uso ou modificação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Seus Direitos</h2>
            <p className="text-foreground/80 leading-relaxed">
              Você é livre para recusar a nossa solicitação de informações pessoais,
              entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
              <li>Solicitar acesso aos seus dados pessoais</li>
              <li>Solicitar correção de dados incompletos ou incorretos</li>
              <li>Solicitar exclusão dos seus dados pessoais</li>
              <li>Revogar o consentimento para uso dos seus dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Alterações nesta Política</h2>
            <p className="text-foreground/80 leading-relaxed">
              Esta política pode ser atualizada periodicamente. A data da última atualização
              estará sempre indicada no topo desta página. Recomendamos que você revise esta
              política regularmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
            <p className="text-foreground/80 leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento
              dos seus dados pessoais, entre em contato conosco:
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:falecom@drjo.com.br"
                className="text-primary hover:underline"
              >
                falecom@drjo.com.br
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Consentimento</h2>
            <p className="text-foreground/80 leading-relaxed">
              Ao utilizar nosso site, você concorda com nossa Política de Privacidade e
              concorda com seus termos.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Pensamento Intrusivo: O Método. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <Link to="/termos-de-uso" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
