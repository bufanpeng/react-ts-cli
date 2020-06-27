
declare module "moment"
declare module "*.svg"
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.gif"
declare module "*.bmp"
declare module "*.tiff"
declare module "*.mp4"
declare module '*.less' {
    const resource: { [key: string]: string };
    export = resource;
}