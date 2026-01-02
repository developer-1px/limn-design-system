/**
 * Outline extractor types for code structure visualization
 *
 * Used by OutlinePanel to display code structure with control flow,
 * declarations, and expressions
 */

export type OutlineNodeKind =
  // Comments
  | 'comment'
  // Control flow
  | 'if'
  | 'for'
  | 'while'
  | 'do-while'
  | 'switch'
  | 'case'
  // Error handling
  | 'try'
  | 'catch'
  | 'finally'
  // Declarations
  | 'import'
  | 'type'
  | 'interface'
  | 'enum'
  | 'const'
  | 'let'
  | 'var'
  | 'function'
  | 'arrow-function'
  | 'class'
  | 'method'
  | 'property'
  // Expressions
  | 'call'
  | 'return'
  | 'block'
  // JSX
  | 'jsx-element'
  | 'jsx-fragment'

export interface OutlineNode {
  kind: OutlineNodeKind
  name: string
  line: number
  endLine?: number
  text?: string
  children?: OutlineNode[]
}
