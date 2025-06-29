import { motion } from "framer-motion";

export const DefaultMotion = ({ children, ...props}) => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0 }} 
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        viewport={{ once: true, amount: 0.9 }} 
        {...props}
    >
        {children}
    </motion.div>
    )
}