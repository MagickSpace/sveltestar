export interface Options {
  /**
   * Add a string prefix to the console log.
   *
   * @defaultValue ''
   */
  prefix?: string
  /**
   * Add a string suffix to the console log.
   *
   * @defaultValue ''
   */
  suffix?: string
  /**
   * Whether to disable the launch editor feature.
   *
   * @defaultValue false
   */
  disableLaunchEditor?: boolean
  /**
   * Whether to disable the highlight output feature.
   *
   * @defaultValue false
   */
  disableHighlight?: boolean
  /**
   * The specific service port of launch editor server.
   *
   * @defaultValue 3070
   */
  port?: number
  /**
   * Whether to show extended path name when the file's (or folder's) name contains an element in the array.
   *
   * @remarks
   *
   * Consider a project includes these files:
   *
   * /views/Feature1/index.vue
   *
   * /views/Feature2/index.vue
   *
   * Set extendedPathFileNames as ['index'] can show the extended path name in the console output.
   *
   * @defaultValue `[]`
   *
   */
  extendedPathFileNames?: string[]
}
