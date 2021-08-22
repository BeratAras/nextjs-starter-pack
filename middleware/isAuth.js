/*
    Eğer kullanıcı login olmadıysa, dashboard
    sayfasına gitmemesi için yapılan kontrol.
*/

import { useRouter } from "next/router";
import {useSelector} from "react-redux";
import Cookies from "universal-cookie";
const cookie = new Cookies;

function isAuth(WrappedComponent){
    WrappedComponent.displayName = 'WrappedComponent';
    return (props) => {
        const user = useSelector((state) => state.userReducer.user)
        if (typeof window !== "undefined") {
            const Router = useRouter();

            const accessToken = cookie.get('token');

            if (!accessToken) {
                Router.replace("/");
                return null;
            }else{
                if (!user){
                    Router.replace("/");
                    return null;
                }
            }

            return <WrappedComponent {...props} />;
        }
        return null;
    };
}

export default isAuth;