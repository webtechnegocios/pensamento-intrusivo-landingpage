import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
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
            Termos de Uso
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
            <p className="text-foreground/80 leading-relaxed">
              Bem-vindo ao site <strong>Pensamento Intrusivo: O Método</strong>, pertencente
              ao Dr. Jô Furlan. Ao acessar e utilizar este site, você concorda em cumprir e
              estar vinculado aos seguintes Termos de Uso. Se você não concorda com estes
              termos, por favor, não utilize o site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Objetivo do Site</h2>
            <p className="text-foreground/80 leading-relaxed">
              Este site oferece um método educacional com o objetivo de fornecer ferramentas
              práticas para lidar com pensamentos intrusivos. O conteúdo apresentado é de
              caráter informativo e educacional.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4 font-semibold text-accent">
              Os resultados e técnicas apresentados não substituem avaliação, diagnóstico ou
              tratamento profissional de saúde mental. Sempre consulte um psicólogo ou
              psiquiatra qualificado para questões relacionadas à sua saúde mental.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Acesso e Utilização</h2>
            <p className="text-foreground/80 leading-relaxed">
              O acesso ao diagnóstico inicial é gratuito. O acesso ao método completo requer
              a aquisição do produto através do link de compra disponibilizado no site.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Ao utilizar este site, você concorda em:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
              <li>Fornecer informações verdadeiras e precisas quando solicitado</li>
              <li>Não utilizar o site para fins ilícitos ou prejudiciais</li>
              <li>Não tentar violar a segurança do site ou acessar áreas restritas</li>
              <li>Respeitar os direitos de propriedade intelectual do conteúdo</li>
              <li>Não reproduzir, distribuir ou modificar o conteúdo sem autorização</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Propriedade Intelectual</h2>
            <p className="text-foreground/80 leading-relaxed">
              Todo o conteúdo deste site, incluindo mas não se limitando a textos, vídeos,
              exercícios, técnicas, imagens, design, logotipos e materiais didáticos, é de
              propriedade intelectual do Dr. Jô Furlan e protegido por leis de direitos
              autorais.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              É expressamente proibido:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
              <li>Copiar, reproduzir ou distribuir o conteúdo sem autorização escrita</li>
              <li>Usar o conteúdo para fins comerciais sem permissão</li>
              <li>Modificar ou criar obras derivadas do conteúdo</li>
              <li>Remover avisos de direitos autorais ou marcas registradas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Compra e Acesso ao Método</h2>
            <p className="text-foreground/80 leading-relaxed">
              Ao adquirir o acesso ao método completo, você receberá:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
              <li>Acesso vitalício ao conteúdo na área de membros</li>
              <li>Todos os módulos e materiais bônus incluídos</li>
              <li>Atualizações futuras do conteúdo sem custo adicional</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              O acesso é pessoal e intransferível. O compartilhamento de login ou conteúdo
              constitui violação destes termos e pode resultar no cancelamento do acesso sem
              reembolso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Garantia e Reembolso</h2>
            <p className="text-foreground/80 leading-relaxed">
              Oferecemos garantia incondicional de 7 dias. Se você não estiver satisfeito
              com o método por qualquer motivo, basta enviar um e-mail solicitando o
              reembolso dentro do prazo de 7 dias após a compra.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              O reembolso será processado em até 10 dias úteis após a solicitação. Após o
              reembolso, o acesso ao conteúdo será removido.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-foreground/80 leading-relaxed">
              O método fornecido é uma ferramenta de desenvolvimento pessoal e autoconhecimento,
              não possuindo caráter de diagnóstico médico, psicológico ou terapêutico.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              O Dr. Jô Furlan e o site Pensamento Intrusivo: O Método não se responsabilizam por:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
              <li>Resultados individuais, que podem variar de pessoa para pessoa</li>
              <li>Decisões tomadas com base no conteúdo apresentado</li>
              <li>Danos diretos ou indiretos resultantes do uso ou impossibilidade de uso do site</li>
              <li>Interrupções temporárias no acesso ao site ou à área de membros</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4 font-semibold text-accent">
              Recomendamos fortemente que você consulte um profissional de saúde mental
              qualificado (psicólogo ou psiquiatra) para questões relacionadas à saúde mental,
              especialmente em casos de pensamentos intrusivos severos, depressão, ansiedade
              grave ou pensamentos de autolesão.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Links Externos</h2>
            <p className="text-foreground/80 leading-relaxed">
              Este site pode conter links para sites ou plataformas de terceiros (como
              processadores de pagamento, plataformas de vídeo, etc.). Não temos controle
              sobre o conteúdo desses sites e não nos responsabilizamos por suas práticas
              ou políticas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Política de Privacidade</h2>
            <p className="text-foreground/80 leading-relaxed">
              O uso deste site também é regido por nossa{" "}
              <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
              , que descreve como coletamos, usamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Alterações nos Termos</h2>
            <p className="text-foreground/80 leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento.
              As alterações entrarão em vigor imediatamente após sua publicação no site.
              A data da última atualização estará sempre indicada no topo desta página.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              O uso continuado do site após alterações constitui sua aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Lei Aplicável</h2>
            <p className="text-foreground/80 leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
              Qualquer disputa relacionada a estes termos será resolvida nos tribunais
              brasileiros competentes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contato</h2>
            <p className="text-foreground/80 leading-relaxed">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
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
            <h2 className="text-2xl font-semibold mb-4">12. Aceitação dos Termos</h2>
            <p className="text-foreground/80 leading-relaxed">
              Ao utilizar este site e/ou adquirir o acesso ao método, você declara que leu,
              compreendeu e concorda com todos os termos e condições aqui estabelecidos.
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

export default TermsOfService;
