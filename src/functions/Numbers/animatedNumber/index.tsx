// components/AnimatedNumber.tsx
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
    value: number;
    duration?: number; // duração da animação em ms
    prefix?: string;
}

export function AnimatedNumber({ value, duration = 3000, prefix = "R$ " }: AnimatedNumberProps) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const increment = value / (duration / 16);
        let current = 0;

        const animate = () => {
            current += increment;
            if (current >= value) {
                setDisplayValue(value);
                return;
            }
            setDisplayValue(Math.floor(current));
            requestAnimationFrame(animate);
        };

        animate();
    }, [value, duration]);

    return <span>{prefix}{displayValue.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>;
}
