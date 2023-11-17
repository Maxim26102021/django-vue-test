declare module '*.vue' {
  import { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "*.jpg" {}
declare module "*.ts" {}
declare module "*.svg" {}
declare module "*.gif" {}
declare module "*.json" {
  const value: unknown;
  export default value;
}
declare module "*.sass" {}
declare module "*.css" {}
declare module "*.scss" {}
declare module "*.png" {}