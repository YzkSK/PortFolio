import { motion } from 'framer-motion'

interface Props {
  onClick: () => void
}

export default function ModalBackdrop({ onClick }: Props) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    />
  )
}
