import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { myAction } from '../../Redux/Users/Action';


const UInfo = () => {
    const posts = useSelector((state) => state.posts);
    const loading = useSelector((state) => state.loading);
    const isError = useSelector((state) => state.isError);

    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(myAction());
    }, [dispatch]);

    console.log(posts)
    console.log(isError)
    return (
        <>
            {
                loading ? (
                    <h1>Loading....</h1>
                ) : isError ? (
                    <h1>Errors: {isError}</h1>
                ) : posts ?  (
                    <div>
                        {
                            posts && posts.map((val,ind) => (
                                <div key={ind}><li>{val.title}</li></div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    );
};

export default UInfo;
