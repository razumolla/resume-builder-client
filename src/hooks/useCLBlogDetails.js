import { useEffect, useState } from "react";

const useCLBlogDetails = cLBlogId => {
    const [cLBlog, setCLBlog]= useState({});

    useEffect(() => {
        const url = `http://localhost:5000/coverLetterBlog/${cLBlogId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCLBlog(data))
    }, [cLBlogId])
    return [cLBlog]
}
export default useCLBlogDetails;