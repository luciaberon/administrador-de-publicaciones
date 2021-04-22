import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoEnterOutline } from 'react-icons/io5';
import Axios from 'axios';


export default function BlogList({ blogList }) {

    const deletePost = id => {
        Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
        })
    }

    return (
        
        <table className="table">    
            {
                blogList.map(item => {                    
                    const { title, id } = item;

                    return (
                        <tr key={id} >
                            <td>{title}</td>
                            <td>
                                <LinkContainer to={`edit/${id}`}>
                                    <GrEdit />
                                </LinkContainer>
                            </td>
                            <td> 
                                <RiDeleteBinLine onClick={() => deletePost(id)} /> 
                            </td>
                            <td>
                                <LinkContainer to={`/posts/${id}`}>
                                    <IoEnterOutline />
                                </LinkContainer>
                            </td>
                        </tr>
                    )
              
                })
            } 
        </table>     
     
    )
}

