# 🎯 Sistema de Tracking - Guia Rápido

## ✅ O Que Foi Configurado

Sistema completo de rastreamento para **Facebook Pixel**, **Google Analytics (GA4)** e **Google Ads**.

## 📝 Para Ativar o Tracking

### 1. Edite o arquivo `.env`:

```bash
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Ads  
VITE_GOOGLE_ADS_ID=AW-XXXXXXXXXX
VITE_GOOGLE_ADS_CONVERSION_LABEL=seu-label-aqui

# Facebook Pixel
VITE_FACEBOOK_PIXEL_ID=123456789012345

# Ativar (true/false)
VITE_ENABLE_TRACKING=true
```

### 2. Reinicie o servidor:

```bash
npm run dev
```

## 🎉 Pronto!

O sistema vai rastrear automaticamente:
- ✅ Visualizações de página
- ✅ Cliques nos botões CTA
- ✅ Início de checkout
- ✅ Adição ao carrinho

## 📚 Documentação Completa

Veja `TRACKING.md` para instruções detalhadas de configuração, testes e troubleshooting.

## 🔍 Como Testar

1. Abra o console do navegador (F12)
2. Você verá logs como:
   ```
   Google Analytics initialized: G-XXXXXXXXXX
   Facebook Pixel initialized: 123456789012345
   InitiateCheckout tracked
   ```

## 🛠️ Arquivos Criados

```
.env                          # Suas variáveis (não commitado)
.env.example                  # Template de exemplo
src/lib/tracking.ts           # Funções de tracking
src/hooks/useTracking.ts      # Hook React
src/components/TrackingScripts.tsx  # Inicializador
TRACKING.md                   # Documentação completa
```

**Nota:** Quando você adicionar seus IDs reais, o tracking será ativado automaticamente!
