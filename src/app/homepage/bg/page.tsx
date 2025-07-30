'use client'
import { motion } from 'framer-motion';
const bg_code = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-[1400px] z-5 bg-code"
                style={{
                    backgroundSize: '85% auto',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-full h-[1400px] z-5 bg-code"
                style={{
                    backgroundSize: '85% auto',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
        </>
    )
}

export default bg_code