export interface PluginOptions {
    /**
     * @description Picture compilation and conversion
     * @default []
     */
    conversion?: ConversionItemType[];
    /**
     * @description Whether to turn on caching
     * @default true
     */
    cache?: boolean;
    /**
     * @description Cache folder directory read
     * @default node_modules/unplugin-imagemin/cache
     *
     */
    cacheDir?: string;
    /**
     * @description Compilation attribute
     * @default CompressTypeOptions
     */
    compress?: CompressTypeOptions;
    /**
     * @description mode
     * @default squoosh
     * @description squoosh or sharp
     */
    mode?: 'squoosh' | 'sharp';
    /**
     * @description Whether to compress before packing
     * @default false
     */
    beforeBundle?: boolean;
  }