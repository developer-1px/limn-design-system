/**
 * Definition extractor types for code definitions visualization
 *
 * Used by DefinitionPanel to display file-level definitions
 * (exports, types, functions, classes)
 */

export type SymbolKind =
  | 'import'
  | 'type'
  | 'interface'
  | 'enum'
  | 'const'
  | 'let'
  | 'function'
  | 'class'
  | 'method'
  | 'property'

export interface SymbolModifier {
  export?: boolean
  async?: boolean
  static?: boolean
  readonly?: boolean
  private?: boolean
  public?: boolean
}

export interface DefinitionSymbol {
  kind: SymbolKind
  name: string
  line: number
  modifiers?: SymbolModifier
  type?: string
  children?: DefinitionSymbol[]
}
