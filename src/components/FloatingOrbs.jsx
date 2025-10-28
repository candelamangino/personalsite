import { motion } from 'framer-motion';

export default function FloatingOrbs() {
  return (
    <div className="floating-orbs">
      <motion.div
        className="floating-orb"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0, 188, 212, 0.3), transparent)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="floating-orb"
        style={{
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(124, 77, 255, 0.25), transparent)',
          top: '60%',
          right: '15%',
        }}
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="floating-orb"
        style={{
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.2), transparent)',
          bottom: '20%',
          left: '20%',
        }}
        animate={{
          y: [0, -10, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
