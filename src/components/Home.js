import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import NewPost from './NewPost';
import Axios from 'axios';
import { Container, Spinner} from 'react-bootstrap';

export default function Home() {

    const [ blogList, addBlog ] = useState(null);
    const [loading, showLoad] = useState(true);

    useEffect(() => {    
        Axios.get('https://jsonplaceholder.cypress.io/posts')
        .then(res => {
            addBlog(res.data);
            showLoad(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [blogList])


    return (
        <div>
        {loading ?
        <Container className="d-flex align-items-center mt-5">
            <Spinner animation="border mx-auto" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> 
        </Container>
        :
        <div className="mt-3 width-class mx-auto">           
            
            <NewPost />           

            { blogList && <BlogList blogList={blogList} />}
 
        </div>
        }
        </div>
    )
}
