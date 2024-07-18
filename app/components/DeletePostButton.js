'use client'

import { useRouter } from "next/navigation"


export default function DeletePostButton({id}) {
    const router = useRouter();
    
    const handleDelete = async () => {
        try {
            await fetch(`/api/delete-post/${id}`, {
                method: 'DELETE',
            })
            router.refresh();
        } catch (error) {
            console.error(error);
        }
        router.refresh();
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}