/// <reference types="vite/client" />
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
declare module "vuex" {
    export * from "vuex/types/index.ts"
    export * from "vuex/types/helpers.ts"
    export * from "vuex/types/logger.ts"
    export * from "vuex/types/vue.ts"
}