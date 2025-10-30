# 🚀 Guia de Deploy - Pensamento Intrusivo

## ✅ Tracking Configurado para Deploy

O sistema de tracking está configurado para funcionar automaticamente no deploy usando **arquivo commitável**.

### 📁 Arquivo de Configuração

**`src/config/tracking.config.ts`** - Este arquivo VAI para o commit!

```typescript
export const trackingConfig = {
  gaId: 'G-87N1JCCNXK',              // ✅ Google Analytics
  fbPixelId: '791504113471809',       // ✅ Facebook Pixel
  googleAdsId: '',                    // ⏳ Adicione quando tiver
  googleAdsConversionLabel: '',       // ⏳ Adicione quando tiver
  enabled: true,                      // ✅ Tracking ativo
};
```

### ⚡ Por Que Isso É Seguro?

Esses IDs são **públicos por natureza**:
- Aparecem no código JavaScript do site de qualquer forma
- Qualquer pessoa pode ver no DevTools do navegador
- Google Analytics e Facebook Pixel são projetados para serem públicos
- **NÃO são chaves secretas** (diferente de API keys do backend)

### 🔒 O Que NÃO Deve Ser Commitado

- ❌ Chaves de API de backend
- ❌ Secrets de webhooks
- ❌ Tokens de autenticação
- ❌ Senhas de banco de dados

### ✅ O Que PODE Ser Commitado (IDs Públicos)

- ✅ Google Analytics Measurement ID
- ✅ Facebook Pixel ID
- ✅ Google Ads Conversion ID
- ✅ Stripe Public Key
- ✅ MapBox Public Token

## 🚀 Como Fazer Deploy

### 1. Build Local (Teste)
```bash
npm run build
npm run preview
```

### 2. Commit e Push
```bash
git add .
git commit -m "feat: configure tracking for production"
git push
```

### 3. Deploy Automático

Seu sistema de CI/CD vai fazer o build e deploy automaticamente.

#### Cloudflare Pages
- Push para o branch → Deploy automático
- Tracking funcionará automaticamente

#### Vercel
- Push para o branch → Deploy automático
- Tracking funcionará automaticamente

#### Netlify
- Push para o branch → Deploy automático
- Tracking funcionará automaticamente

## 🔧 Atualizando IDs no Futuro

### Para Atualizar Google Ads:

Edite `src/config/tracking.config.ts`:

```typescript
export const trackingConfig = {
  gaId: 'G-87N1JCCNXK',
  fbPixelId: '791504113471809',
  googleAdsId: 'AW-123456789',           // ← Adicione aqui
  googleAdsConversionLabel: 'abc123',    // ← Adicione aqui
  enabled: true,
};
```

Commit e push:
```bash
git add src/config/tracking.config.ts
git commit -m "feat: add Google Ads tracking"
git push
```

## 🧪 Testando em Produção

### 1. Após Deploy, Visite o Site

### 2. Abra o Console (F12)
Você deve ver:
```
Google Analytics initialized: G-87N1JCCNXK
Facebook Pixel initialized: 791504113471809
```

### 3. Teste com Ferramentas Oficiais

**Facebook Pixel Helper:**
- [Chrome Extension](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
- Deve mostrar pixel ativo e eventos disparando

**Google Analytics:**
- Acesse seu GA4 Dashboard
- Vá em: Relatórios → Tempo Real
- Visite o site e veja as visitas aparecendo

**Google Tag Assistant:**
- [Tag Assistant](https://tagassistant.google.com/)
- Conecte ao seu site
- Veja todos os tags GA4 funcionando

## 🎯 Status Atual

```
✅ Google Analytics: G-87N1JCCNXK (ATIVO)
✅ Facebook Pixel: 791504113471809 (ATIVO)
⏳ Google Ads: Pendente (adicione quando tiver)
✅ Tracking: HABILITADO
✅ Build: OK
✅ Pronto para Deploy: SIM
```

## 📊 Eventos Rastreados

### Automáticos:
- ✅ PageView (ao carregar)
- ✅ ViewContent (landing page)

### Nos Botões CTA:
- ✅ InitiateCheckout
- ✅ AddToCart (R$ 97)

### Prontos para Uso:
- ✅ Purchase (thank you page)
- ✅ Lead (formulários)

## 🔄 Alternativa: Variáveis de Ambiente na Plataforma

Se preferir não commitar os IDs, você pode configurar na plataforma de deploy:

### Cloudflare Pages
```
Dashboard → Settings → Environment Variables

VITE_GA_MEASUREMENT_ID = G-87N1JCCNXK
VITE_FACEBOOK_PIXEL_ID = 791504113471809
VITE_ENABLE_TRACKING = true
```

### Vercel
```
Project Settings → Environment Variables

VITE_GA_MEASUREMENT_ID = G-87N1JCCNXK
VITE_FACEBOOK_PIXEL_ID = 791504113471809
VITE_ENABLE_TRACKING = true
```

**Nota:** O código atual usa `tracking.config.ts` como prioridade, mas faz fallback para `.env` se o arquivo estiver vazio.

## ✅ Tudo Pronto!

Faça o commit e push. O tracking funcionará automaticamente no deploy! 🎉
