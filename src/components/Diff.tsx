import type { DiffText } from '../types'

const LINE = {
  del: { sign: '-', signClass: 'sign del', Tag: 'del' },
  ins: { sign: '+', signClass: 'sign add', Tag: 'ins' },
} as const

/** diff の1行（記号 + 本文）。外側の `.diff` 要素は呼び出し側で作る */
export function DiffLine({ kind, text }: { kind: 'del' | 'ins'; text: DiffText }) {
  const { sign, signClass, Tag } = LINE[kind]
  return (
    <>
      <span className={signClass} aria-hidden="true">{sign}</span>
      <Tag>
        {text.map((part, i) =>
          typeof part === 'string' ? part : <mark key={i}>{part.mark}</mark>,
        )}
      </Tag>
    </>
  )
}
