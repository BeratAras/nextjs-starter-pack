/*
    Eğer kullanıcı login olduysa, çıkış
    yapmadan giriş sayfasına gitmemesi için yapılan kontrol.
*/

import { useRouter } from "next/router";

function isLogin (WrappedComponent){
    return (props) => {

        if (typeof window !== "undefined") {
            const router = useRouter();

            const user = localStorage.getItem('persist:root');
            const split = user.split('{');
            const token = split[3].split('"')[11];

            if (token) {
                router.push('/question')
            }

            return <WrappedComponent {...props} />;
        }
        return null;
    };
}

export default isLogin;