# Guia de Configuração de Tracking

Este projeto está pré-configurado para rastreamento com **Facebook Pixel**, **Google Analytics** e **Google Ads**.

## 📋 Pré-requisitos

Você precisará obter os seguintes IDs das respectivas plataformas:

- **Google Analytics**: Measurement ID (formato: `G-XXXXXXXXXX`)
- **Google Ads**: Conversion ID e Label
- **Facebook Pixel**: Pixel ID (formato numérico)

## 🚀 Configuração

### 1. Configure as Variáveis de Ambiente

Edite o arquivo `.env` na raiz do projeto e adicione seus IDs:

```bash
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Ads
VITE_GOOGLE_ADS_ID=AW-XXXXXXXXXX
VITE_GOOGLE_ADS_CONVERSION_LABEL=seu-label-de-conversao

# Facebook Pixel
VITE_FACEBOOK_PIXEL_ID=123456789012345

# Ativar tracking (true ou false)
VITE_ENABLE_TRACKING=true
```

### 2. Como Obter os IDs

#### Google Analytics (GA4)
1. Acesse [Google Analytics](https://analytics.google.com/)
2. Vá em **Admin** → **Data Streams**
3. Selecione seu stream e copie o **Measurement ID** (formato: `G-XXXXXXXXXX`)

#### Google Ads
1. Acesse [Google Ads](https://ads.google.com/)
2. Vá em **Ferramentas** → **Conversões**
3. Crie ou selecione uma conversão
4. Copie o **ID de conversão** e o **Label de conversão**

#### Facebook Pixel
1. Acesse [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Selecione seu Pixel
3. Copie o **ID do Pixel** (número de 15 dígitos)

### 3. Ativar o Tracking

No arquivo `.env`, certifique-se de que está configurado:

```bash
VITE_ENABLE_TRACKING=true
```

## 📊 Eventos Rastreados Automaticamente

### Page View
- Dispara automaticamente quando a página carrega
- Configurado no componente `Index.tsx`

### Checkout Iniciado (InitiateCheckout)
- Dispara quando usuário clica no botão CTA
- Rastreado em **todos os botões CTA** da landing page

### Add to Cart
- Dispara junto com InitiateCheckout
- Valor: R$ 97,00

## 🔧 Eventos Personalizados Disponíveis

Você pode usar o hook `useTracking()` em qualquer componente:

```typescript
import { useTracking } from '@/hooks/useTracking';

const MeuComponente = () => {
  const {
    trackPurchase,           // Compra concluída
    trackInitiateCheckout,   // Checkout iniciado
    trackAddToCart,          // Item adicionado ao carrinho
    trackLead,               // Lead capturado
    trackViewContent,        // Conteúdo visualizado
    trackEvent               // Evento genérico
  } = useTracking();

  const handleCompra = () => {
    trackPurchase(97, 'BRL');
  };

  return <button onClick={handleCompra}>Comprar</button>;
};
```

## 🎯 Conversões Configuradas

### Facebook Pixel
- ✅ PageView
- ✅ ViewContent
- ✅ InitiateCheckout
- ✅ AddToCart
- ✅ Purchase
- ✅ Lead

### Google Analytics
- ✅ page_view
- ✅ view_item
- ✅ begin_checkout
- ✅ add_to_cart
- ✅ purchase
- ✅ generate_lead

### Google Ads
- ✅ Conversão de compra (com valor)

## 🧪 Testando o Tracking

### 1. Console do Navegador
Com tracking ativado, você verá logs no console:
```
Google Analytics initialized: G-XXXXXXXXXX
Facebook Pixel initialized: 123456789012345
InitiateCheckout tracked
```

### 2. Facebook Pixel Helper
- Instale a extensão [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
- Visite sua landing page
- Clique no ícone da extensão para ver eventos disparados

### 3. Google Tag Assistant
- Instale [Google Tag Assistant](https://tagassistant.google.com/)
- Conecte e grave uma sessão
- Veja todos os eventos GA4 e Google Ads

### 4. Modo Debug
Para testar sem enviar dados reais, configure:
```bash
VITE_ENABLE_TRACKING=false
```

Os eventos ainda serão logados no console, mas não serão enviados às plataformas.

## 📁 Estrutura dos Arquivos

```
src/
├── lib/
│   └── tracking.ts           # Funções de tracking
├── hooks/
│   └── useTracking.ts        # Hook para usar tracking
├── components/
│   └── TrackingScripts.tsx   # Componente de inicialização
└── pages/
    └── Index.tsx             # Página com tracking integrado
```

## 🔒 Privacidade e LGPD

O sistema está configurado para compliance básico, mas você deve:

1. ✅ Adicionar um banner de cookies
2. ✅ Obter consentimento do usuário
3. ✅ Atualizar a Política de Privacidade
4. ✅ Permitir opt-out

## 🚨 Troubleshooting

### Tracking não funciona
- ✅ Verifique se `VITE_ENABLE_TRACKING=true`
- ✅ Confirme que os IDs estão corretos
- ✅ Reinicie o servidor dev após editar `.env`
- ✅ Verifique o console por erros

### Eventos duplicados
- ❌ Não chame `initTracking()` múltiplas vezes
- ❌ `TrackingScripts` deve estar apenas no `App.tsx`

### TypeScript erros
- ✅ Rode `npm run dev` novamente
- ✅ Verifique `src/vite-env.d.ts`

## 📞 Suporte

Para dúvidas sobre configuração:
- Facebook Pixel: [Documentação Oficial](https://developers.facebook.com/docs/facebook-pixel)
- Google Analytics: [GA4 Docs](https://developers.google.com/analytics/devguides/collection/ga4)
- Google Ads: [Conversion Tracking](https://support.google.com/google-ads/answer/1722022)
