
import { useEffect, useState } from "react"


const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);



    useEffect(() => {
        const email = user?.email;
        console.log(email, 'your email find')
        if (email) {
            fetch(`https://resume-builder-6p08.onrender.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'

                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);

                    setAdminLoading(false);
                })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;