export interface Fields {
  fields: any;
  type: string
  label: string
  name: string
  placeholder: string
  validations: Validations
}

export interface Validations {
  isRequired: boolean
  pattern: string
}