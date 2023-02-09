import React,{useState,useEffect} from 'react'
import { APP_NAME } from "config";
//style
import { SignoutButn } from '@/styles/emotion/layout';
//action
import { isAuth, signout } from '@/actions/auth';
//router
import Link from 'next/link';
import Router from 'next/router';

const Header = () => {
   const [auth, setAuth] = useState(false);
    useEffect(() => {
        isAuth() ? setAuth(true) : setAuth(false);
    }, [])
    
    const signoutBtn = () => {
        signout(() => Router.push({
            pathname: "/auth/signin",
            query: { from: Router.pathname }
        })
        )
    }
    return (
        <div className='bg-secondary p-2 d-flex'>
            <div>
                <Link href="/">
                    {APP_NAME}
                </Link>
            </div>
            <div className='d-flex justify-content-end align-items-center ms-auto'>
                {!auth ?
                    <>
                        <div>
                            <Link href="/auth/signin">
                                Signin
                            </Link>
                        </div>
                        <div className='ms-2'>
                            <Link href="/auth/signup">
                                Signup
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <div className='ms-2'>
                            <Link href="/admin/create">
                                Create Product
                            </Link>
                        </div >
                         <div className='ms-3'>
                            <Link href="/admin/list">
                                List Product
                            </Link>
                        </div >
                          <SignoutButn className='ms-5' onClick={signoutBtn}>
                            Signout
                        </SignoutButn>
                    </>
                }
            </div>
        </div>
    )
}

export default Header