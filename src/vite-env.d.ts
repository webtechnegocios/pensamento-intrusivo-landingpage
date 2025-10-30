/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string
  readonly VITE_GOOGLE_ADS_ID: string
  readonly VITE_GOOGLE_ADS_CONVERSION_LABEL: string
  readonly VITE_FACEBOOK_PIXEL_ID: string
  readonly VITE_ENABLE_TRACKING: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
