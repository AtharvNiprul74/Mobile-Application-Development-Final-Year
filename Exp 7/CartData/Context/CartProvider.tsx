import { createContext, ReactNode, useState } from "react"

export type Product = {
    id: number;
    name: string;
    price: number
}

type CartContextType = {
    cartItems: Product[]
    addItem: (prod: Product) => void
    removeItem: (id: number) => void
}

type CartProviderProps = {
    children: ReactNode
}

export const cartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<Product[]>([])

    const addItem = (prod: Product) => {
        setCartItems((prev) => [...prev, prod])
    }

    const removeItem = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    return (
        <>
            <cartContext.Provider value={{ cartItems, addItem, removeItem }}>
                {children}
            </cartContext.Provider>
        </>
    )

}